import type { RequestHandler } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/assets/uploads",
  filename: (_, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

export const upload = multer({ storage });

export const imageUpload: RequestHandler = (req, res, next) => {
  try {
    if (req.file?.filename) {
      req.body.avatar = `/assets/uploads/${req.file.filename}`;
      next();
    } else {
      res
        .status(404)
        .send({ message: "An error occured during image transfert" });
    }
  } catch (err) {
    console.error(err);
  }
};
