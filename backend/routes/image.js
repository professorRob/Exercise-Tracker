const router = require("express").Router();

router.route("/uploadbase").post((req, res, next) => {
  const newImage = new Image({
    imageName: req.body.imageName,
    imageData: req.body.imageData,
  });

  newImage
    .save()
    .then((result) => {
      res.status(200).json({
        success: true,
        document: result,
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
