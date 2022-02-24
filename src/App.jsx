import { useState } from 'react';
import FilePreviewer from 'react-file-previewer';
import {FilePreviewerThumbnail} from 'react-file-previewer';
import VideoPreview from './VideoPreview';
 
 const App = () => {
    const [file, setFile] = useState({ url: "" });
    const [fileName, setFileName] = useState("");
    
    const onFileChange = event => {
        const fileReader = new FileReader();
        const file = event.target.files[0];
        
        fileReader.onload = fileLoad => {
            const { result } = fileLoad.target;
            setFileName(file.type)
            setFile({ url: result });
        };
        fileReader.readAsDataURL(file);
    };
 
    return (
        <div>
            <h1>File Previewer</h1>
            <input type="file" onChange={onFileChange} />
   { file.url && <>
            {fileName.includes("video") ?
            <VideoPreview file={file.url}/>
            :
                  <FilePreviewerThumbnail 
            file={file}
        />
            }
            </>}
        </div>
    )
};

export default App;