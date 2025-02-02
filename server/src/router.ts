import express from "express";
// import userActions from "./modules/user/userActions";
import { imageUpload, upload } from "../services/fileUpload";
import userActions from "./modules/user/userActions";

const router = express.Router();

router.post("/api/user", upload.single("file"), imageUpload, userActions.add);

/* ************************************************************************* */

export default router;
