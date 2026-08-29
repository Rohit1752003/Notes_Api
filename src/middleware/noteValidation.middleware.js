import noteSchema from "../validators/note.validation.js";
const createValidateNote = (req , res, next)=>{
    const result = noteSchema.createSchema.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            message :"Validation Error",
            errors : result.error.issues
        })
    }
    next();
}
const updateValidateNote = (req , res, next)=>{
    const result = noteSchema.updateSchema.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            message :"Validation Error",
            errors : result.error.issues
        })
    }
    next();
}
export default {createValidateNote ,updateValidateNote};