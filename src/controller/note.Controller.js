import Note from "../models/note.model.js";

const createNote = async (req, res , next) => {
       try{
         const { title, content } = req.body;

        const newNote = await Note.create({
            title,
            content
        });

        console.log("Created:", newNote);

        res.status(201).json(newNote);
       }catch(error){
            next(error)
       }
       
        
};
export default createNote ; 