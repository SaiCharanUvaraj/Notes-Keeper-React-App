import React from 'react';
function CreateNote({ noteTitle, noteContent,onDelete })
{
  return (
    <div>
      <h2 className="bg-[#76ABAE] rounded-t-xl text-center font-bold text-xl break-words p-1">{noteTitle}</h2>
      <div className=" bg-[#31363F] rounded-b-xl">
        <p className="break-words text-center text-md text-white p-2">{noteContent}</p>
        <div className="flex justify-center p-2">
          <button className="text-xl flex justify-center text-black bg-[#76ABAE] p-1 w-10 rounded-md active:bg-white" onClick={onDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
