import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

export default function Create() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    
    return(
        <form>
            <input type="title" placeholder={'Title'} />
            <input type="summary" placeholder={'Summary'} />
            <input type="file" />
            <ReactQuill />
            <button style={{marginTop:'10px'}}>Create post</button>
        </form>
    );
}