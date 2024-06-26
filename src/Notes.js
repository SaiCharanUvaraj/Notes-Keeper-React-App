import React from 'react';
import CreateNote from './CreateNote';
function Notes()
{
    const [notes,setNotes]=React.useState([]);
    const [title,setTitle]=React.useState("");
    const handleChangeOnTitle = (event) => 
    {
        setTitle((event.target.value));
    };
    const [content,setContent]=React.useState("");
    const handleChangeOnContent = (event) => 
    {
        setContent((event.target.value));
    };
    const addNote = (event) => 
    {
        let tit=title.trim();
        let con=content.trim();
        if(tit===""||con==="")
        {
            alert("Enter the note in correct format");
        }
        else
        {
            let updatedNotes = [...notes,{noteTitle:tit,noteContent:con}];
            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
        }
    }
    const deleteNote = (index) => 
    {
        let updatedNotes = notes.filter((_, i) => i !== index)
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };
    React.useEffect(() => {
        const storedNotesString = localStorage.getItem('notes');
        if (storedNotesString) {
          setNotes(JSON.parse(storedNotesString));
        }
      }, []);
    
    return(
    <div className="pt-20">
        <div className="flex justify-center">
            <div className="bg-[#31363F] w-full sm:w-3/4 md:w-1/3 p-5 rounded-xl m-2">
                <p className="text-center text-2xl text-white pb-5 font-bold">Add a note here</p>
                <input onChange={handleChangeOnTitle} className="bg-[#31363F] w-3/4 text-white text-xl font-semibold focus:outline-none pb-3" name="note-title" placeholder="Title" value={title}></input>
                <input onChange={handleChangeOnContent} className="bg-[#31363F] w-3/4 text-white text-lg focus:outline-none pb-5" name="note-content" placeholder="Content" value={content}></input>
                <div className="flex justify-center">
                    <button className="text-center justify-center text-xl text-black bg-[#76ABAE] p-1 block w-20 rounded-xl active:bg-white" onClick={addNote}> Add </button>
                </div>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
            { notes.map((note,index) => <CreateNote key={index} noteTitle={note.noteTitle} noteContent={note.noteContent} onDelete={() => deleteNote(index)}/> ) }
        </div>
    </div>
    );
}
export default Notes; 