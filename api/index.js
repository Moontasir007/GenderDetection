// Import the required modules
const express = require("express");
const app = express();
const router = express.Router();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// Define the storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// Configure the multer upload
const upload = multer({ storage: storage });

// Define the upload route for posts
app.post("/api/upload", upload.single("file"), (req, res) => {
    console.log("File has been uploaded");
    res.status(200).json({ message: "File uploaded successfully" });
});

// Import the new route handlers for posts, likes/dislikes, and comments
const postRoute = require("./routes/posts");
const likeDislikeRoute = require("./routes/likeDislike");
const commentRoute = require("./routes/comments");

// Register the new routes
app.use("/api/posts", postRoute);
app.use("/api/likes", likeDislikeRoute);
app.use("/api/comments", commentRoute);

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
    console.log("Backend is running");
});
