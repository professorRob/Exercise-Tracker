const router = require("express").Router();
const multer = require("multer");
let Meme = require("../models/meme.model");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})


const uploads = multer({ storage: storage });

router.route("/").get((req, res) => {
  Meme.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//ADD NEW MEME


router.post("/add", uploads.single("memeImage"), (req, res) => {
  const author = req.body.author;
  const memeImage = req.file.originalname;
  const date = Date.parse(req.body.date);
  const newMeme = new Meme({ author, memeImage, date });

  newMeme
    .save()
    .then(() => res.json("Image Uploaded!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.put("/update/:id", uploads.single("memeImage"), (req, res) => {
  Meme.findById(req.params.id)
    .then((meme) => {
      meme.author = req.body.author;
      meme.memeImage = req.file.originalname;
      meme.date = Date.parse(req.body.date);

      meme
        .save()
        .then(() => res.json("Meme Updated!"))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
