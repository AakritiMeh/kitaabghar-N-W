// import express from "express";
// import multer from "multer";
// import { spawn } from "child_process";
// import path from "path";
// import fs from "fs";
// import cors from "cors";
// const app = express();
// app.use(cors());
// const port = 3000;

// // Set up storage for multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join("kitaabghar", "/uploads/"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, "temp.pdf");
//   },
// });

// const upload = multer({ storage: storage });

// // Ensure uploads directory exists
// if (!fs.existsSync("uploads")) {
//   fs.mkdirSync("uploads");
// }

// app.post("/upload", upload.single("file"), (req, res) => {
//   const filePath = req.file.path;

//   let dataToSend;
//   const python = spawn("python3", ["ai/main.py", filePath]);

//   python.stdout.on("data", function (data) {
//     console.log("Pipe data from python script ...");
//     dataToSend = data.toString();
//   });

//   python.stderr.on("data", (data) => {
//     console.error(`stderr: ${data}`);
//   });

//   python.on("close", (code) => {
//     console.log(`child process close all stdio with code ${code}`);
//     res.send(dataToSend);
//   });
// });

// app.listen(port, () => {
//   console.log(`App is listening on port ${port}!`);
// });
import mime from "mime";
import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = 3000;

// Ensure kitaabghar/uploads directory exists
const uploadDir = path.join(
  "/home/aakriti/Documents/PROJECTS/kitaabghar",
  "uploads"
);
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, "temp.pdf");
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const filePath = path.join(uploadDir, "temp.pdf");
  console.log("File path:", filePath);
  let dataToSend;

  if (fs.existsSync(filePath)) {
    console.log("File exists");
    console.log("File size:", fs.statSync(filePath).size);
  } else {
    console.log("File does not exist");
  }

  const python = spawn("python3", ["main.py", filePath]);

  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.status(200).json({ exitcode: code, msg: dataToSend });
  });
});

app.get("/video", (req, res) => {
  const filePath = req.query.path;
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    console.log("File size:", stat.size);
    console.log("MIME type:", mime.getType(filePath));

    res.contentType("video/mp4");
    res.sendFile(filePath);
  } else {
    res.status(404).send("Media file not found");
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});
