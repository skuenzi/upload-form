import {useState} from 'react'
import axios from 'axios'


function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [fileUploaded, setFileUploaded] = useState(false)
  const [selectedFileName, setSelectedFileName] = useState()

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleClick = () => {
    const data = new FormData()
    data.append('file', selectedFile)

    axios.post('http://localhost:8000/upload', data)
    .then(res => {
      console.log(res)
      setFileUploaded(true)
      setSelectedFileName(res.data.filename)
    })
  }
  console.log(selectedFileName)

  return (
    <div className="App">
      <input type='file' name='file' onChange={handleChange}/>
      <button type='button' onClick={handleClick}>upload</button>
      {fileUploaded && <img src={`/images/${selectedFileName}`} style={{height: '200px', width:'200px'}}/>}
    </div>
  );
}

export default App;
