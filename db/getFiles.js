import express from "express";
import Gun from "gun";

const app = express();

const gun = Gun();
app.use(express.json());

const allFiles = [];

app.get("/get-files", (req, res) => {
  gun
    .get("kitaabGhar")
    .map()
    .once((walletData, walletId) => {
      if (!walletId) {
        return;
      }

      gun
        .get("kitaabGhar")
        .get(walletId)
        .get("uploadedFiles")
        .map()
        .once((fileData, fileId) => {
          if (fileData) {
            allFiles.push({
              walletId,
              fileId,
              ...fileData,
            });
          }
        });
    });

  if (!allFiles) {
    res.send("no files up here.be the first one to upload something");
  } else {
    res.status(200).json({ msg: allFiles });
  }
});

app.listen(8080);
