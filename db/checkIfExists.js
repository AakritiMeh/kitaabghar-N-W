import Gun from "Gun";
let gun;
gun = Gun();

import express, { json } from "express";
const app = express();
app.use(json());

app.get("/get-all-users", (req, res) => {
  gun.get("users").once((data) => {
    if (data) {
      const walletIds = Object.keys(data);
      res.status(200).send(walletIds);
      console.log(walletIds);
    } else {
      res.status(400).json({ msg: "no ids found" });
      console.log("no data");
    }
  });
});

app.listen(8080);
