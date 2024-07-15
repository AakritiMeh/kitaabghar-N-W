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
import cors from "cors";
const gun = Gun();
app.use(cors());
app.use(express.json());
app.post("/initialize-user", (req, res) => {
  let walletId;
  walletId = req.body.walletId;
  console.log("I am sending a request");
  if (!walletId) {
    return res
      .status(400)
      .json({ message: "Missing walletId in request body" });
  }
  console.log("checked wallet id");

  gun.get("kitaabGhar").put({ walletId }, (ack) => {
    console.log("inside gun.get");
    if (ack.err) {
      console.error("Error initializing user:", ack.err);
      return res.status(500).json({ message: "Internal server error" });
    }

    console.log("User initialized successfully!");
    res.status(200).json({ message: "User initialized successfully " });
  });
});

app.get("/get-all-users", (req, res) => {
  gun.get("users").once((data) => {
    if (data && data.walletId) {
      res.status(200).json({ walletIds: [data.walletId] });
    } else {
      res.status(404).json({ msg: "No wallet IDs found" });
      console.log("No data or no wallet ID");
    }
  });
});

app.get("/get-all-data", (req, res) => {
  gun.get("kitaabGhar").once((data) => {
    if (data) {
      res.status(200).json({ datas: data });
    } else {
      res.status(404).json({ msg: "data not found" });
      console.log("no data found");
    }
  });
});

app.post("/delete-users", () => {
  gun.get("users").put(null, (ack) => {
    if (ack.err) {
      console.error("Error deleting users data:", ack.err);
      // ... (handle error)
    } else {
      console.log("Users data tombstoned successfully!");
      // ... (send success response)
    }
  });
});

app.post("/uploaded-files", (req, res) => {
  let walletId;
  walletId = req.body.walletId;
  let fileName;
  fileName = req.body.fileName;
  let fileLink;
  fileLink = req.body.fileLink;

  if (!walletId) {
    return res
      .status(400)
      .json({ message: "Missing walletId in request body" });
  }
  console.log("checked wallet id");

  gun
    .get("kitaabGhar")
    .get(walletId)
    .get("uploadedFiles")
    .get(fileName)
    .put(fileLink, (ack) => {
      console.log("inside gun.get");
      if (ack.err) {
        console.error("Error adding doc:", ack.err);
        return res.status(500).json({ message: "Internal server error" });
      }

      console.log("file added successfully!");
      res.status(200).json({ message: "file added successfully " });
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
