import express from "express";
import Gun from "gun";

const app = express();

const gun = Gun();
app.use(express.json());

app.post("/uploaded-files", (req, res) => {
  let walletId;
  walletId = req.body.walletId;
  let fileName;
  fileName = req.body.fileName;
  let fileHash;
  fileHash = req.body.fileHash;

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
    .put((ack) => {
      console.log("inside gun.get");
      if (ack.err) {
        console.error("Error initializing user:", ack.err);
        return res.status(500).json({ message: "Internal server error" });
      }

      console.log("User initialized successfully!");
      res.status(200).json({ message: "User initialized successfully " });
    });
});

app.listen(8080);
