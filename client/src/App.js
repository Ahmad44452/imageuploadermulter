import { useRef, useState } from 'react';
import {
  Container,
  SubContainer,
  Heading,
  SubHeading,
  UploadLabel
} from './Styles/index.styled';



export default function App() {

  const [files, setFiles] = useState(null);
  const dropImageRef = useRef(null);
  const [isFileDragging, setFileDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragging(true);

  }

  const handleDragExit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragging(false);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files[0].type.substr(0, 5) === 'image') {
      setFiles(e.dataTransfer.files[0]);
      const fileReader = new FileReader();

      fileReader.onload = () => {
        // const fileUrl = fileReader.result;
        setFiles(fileReader.result);
      }

      fileReader.readAsDataURL(e.dataTransfer.files[0]);
    }

    setFileDragging(false);
  }



  return (
    <>

      <Container>
        <SubContainer>

          {
            !files && (
              <>
                <Heading>Upload your image</Heading>
                <SubHeading>File should be jpg,png,...</SubHeading>
                <form>
                  <UploadLabel ref={dropImageRef} htmlFor='image' isFileDragging={isFileDragging}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragEnter}
                    onDrop={handleDrop}
                    onDragLeave={handleDragExit}
                  >

                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z">
                      </path>
                    </svg>

                    <p>Click or drag and drop your image here</p>

                  </UploadLabel>
                  <input style={{ display: 'none' }} id='image' type="file" accept='image/*' onChange={e => console.log(e)} />
                </form>
              </>
            )
          }

          {
            files && <img src={files} />
          }


        </SubContainer>
      </Container>



    </>
  )
}
