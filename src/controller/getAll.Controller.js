import Note from "../models/note.model.js";
import AppError from "../utils/appError.utils.js";
import ApiResponse from "../utils/ApiResponse.js";
const getAll = async (req, res) => {
   
        const allNotes = await Note.find();
        console.log("All notes:", allNotes);
        return res.status(200).json(new ApiResponse(200 , "Notes Fetch Succesfully" , allNotes))

};
const getNote = async (req , res) =>{
   
         const ID = req.params.id
    const note = await Note.findById(ID);
     if(!note) {
     console.log("ID does not exist")
    throw new AppError(404 ,"Note not found")
}
       return res.status(200).json(new ApiResponse(200 , "Note Fetch Succesfully" , note))
    
   
}
const updateNote = async (req,res ) =>{
   
        const ID = req.params.id;
    const { title, content } = req.body;
   
    const updateNote =  await Note.findByIdAndUpdate(ID ,{
        title ,
         content 
    },
   {
    returnDocument: "after",
    runValidators: true
})
    if(!updateNote){
        console.log("User Doesn not exist");
      throw new AppError(404 ,"Note not Updated")
}
          return res.status(200).json(new ApiResponse(200 , "Note Upadated Succesfully" , updateNote))

   
}
const deleteNote = async (req,res) =>{

        const ID = req.params.id;
   
    const deleteNote =  await Note.findByIdAndDelete(ID)
    if(!deleteNote){
        console.log("User Doesn not exist");
     
      throw new AppError(404 ,"Note not Deleted")
}
    
   return res.status(200).json(
    new ApiResponse(
        200,
        "Note deleted successfully",
        null
    )
);

    
    
}
export default {getAll  , getNote,updateNote,deleteNote} ; 