import {Router} from 'express';
import validateNote from '../middleware/noteValidation.middleware.js'
import noteController from "../controller/getAll.Controller.js";
import createNote from '../controller/note.Controller.js'
import asyncHandler from "../utils/asyncHandler.js";
const router = Router();
router.post('/' ,validateNote.createValidateNote ,asyncHandler(createNote));
router.get('/' ,asyncHandler( noteController.getAll))
router.get('/:id', asyncHandler(noteController.getNote ))
router.put('/:id' ,validateNote.updateValidateNote,asyncHandler(noteController.updateNote))
router.delete("/:id", asyncHandler(noteController.deleteNote));

export default router;