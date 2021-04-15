import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"; //Floating action button
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    
    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    function expand() {
        setExpanded(true);
    }

    function handleAdd(event) {
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: "",
            content: "",
        })
    }

    return (
        <form className="create-note">
            <input 
                name="title"
                placeholder="Title" 
                onChange={handleChange} 
                value={note.title} 
                hidden={isExpanded ? false : true}
            />
            <textarea
                name="content"
                placeholder="Take a note..." 
                onChange={handleChange}
                onClick={expand}
                value={note.content}
                rows={isExpanded? 3 : 1} 
            />
            <Zoom in={isExpanded} >
                <Fab onClick={handleAdd}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    );
}

export default CreateArea;
