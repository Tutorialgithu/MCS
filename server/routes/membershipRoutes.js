import express from "express";
import { DeleteMembership, ReadMembership, ReadMembershipById, UpdateMembership, createMembership } from "../controller/membershipController.js";

 const router = express.Router();

router.post('/membership', createMembership);
router.get('/membership', ReadMembership);
router.get('/membership/:id', ReadMembershipById);
router.put('/membership/:id', UpdateMembership );
router.delete('/membership/:id', DeleteMembership)


export default router;

