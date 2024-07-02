// import Gun from "gun";
// let gun;
// gun = Gun();

// const walletId = "";
// function initialiseUser(walletId, callback) {
//   if (!walletId) {
//     callback("walletId invalid or not give");
//   }
//   gun
//     .get("kitaabghar")
//     .get("walletID")
//     .put(walletId, (ack) => {
//       if (ack.err) {
//         console.log(ack.err);
//       } else {
//         callback("walletID added");
//       }
//     });
// }

// export default function handler(req, res) {
//   if (req.method === "POST") {
//     initialiseUser(walletId, (err) => {
//       if (!err) {
//         res.status(200).json({ message: "User initialized successfully" });
//       } else {
//         console.error(`Error initializing user for wallet ${walletId}:`, err);
//         res.status(500).json({ message: "Internal server error" });
//       }
//     });
//   }
// }

import express from "express";
import Gun from "gun";

const app = express();
const port = 8080;

const gun = Gun();

app.post("/initialize-user", (req, res) => {
  const walletId = "";

  if (!walletId) {
    return res
      .status(400)
      .json({ message: "Missing walletId in request body" });
  }

  gun.get("users").put({ walletId }, (ack) => {
    if (ack.err) {
      console.error("Error initializing user:", ack.err);
      return res.status(500).json({ message: "Internal server error" });
    }

    console.log("User initialized successfully!");
    res.status(200).json({ message: "User initialized successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
