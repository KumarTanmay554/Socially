import e from "express";
import { getUser, getUserFriends, addRemoveFriend } from '../controllers/user.js'


const router = e.Router();
router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);
router.patch("/:id/friendId", addRemoveFriend);

export default router;