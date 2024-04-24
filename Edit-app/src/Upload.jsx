import { useRef, useState } from "react"

function Upload(props) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImg] = useState(null)
  const logoHiden = useRef('block')
  const hidenRef = useRef('block')
  const [currentPositon, setCurrentPosition] = useState({x:0,y:0})
  const [clicked, setClicked] = useState(false)
  const [move ,setMove] = useState({
    x:0,
    y:0})  
  const img1Ref = useRef()
  const img2Ref = useRef()
  const canvasRef =useRef(null)





  const handelImg = (e) => {
    setImg(e.target.files[0])
    logoHiden.current = 'hidden'
  }

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      console.log(formData)
      // const response = await axios.post('https://example.com/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data', 
      //   },
      // });

      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Error uploading image:', error);
    }
  };

const handelMouseDown = (e)=> {

  setClicked(true)

}

const handelMouseMove = (e) => {
  
  
  if(clicked){
    let rect = e.currentTarget.getBoundingClientRect(); // Get the position of the div
    setMove({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
}}

const handelMouseUp = (e)=>{
  setClicked(false)
}


const mergeImages = async () => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');
  
  const image1 = img1Ref.current;
  const image2 = img2Ref.current;
  console.log(move.x, move.y)

canvas.width = image1.naturalWidth;
canvas.height = image1.naturalHeight;
 

await ctx.drawImage(image1, 0, 0, 384,384);
await ctx.drawImage(image2, move.x, move.y,80,80);

  // Convert canvas to data URL
  const mergedImageDataURL = canvas.toDataURL('image/jpeg');

  // Now you can send `mergedImageDataURL` to the backend
  // using AJAX or other methods
  console.log(mergedImageDataURL);
};















  return (
    <div className=" w-100px h-600px">
      
        {/* <input type="file" onChange={handleFileChange} className={`${hidenRef.current}`} /> */}

        {
          props.p ? (
            <div  
            onMouseMove={handelMouseMove}
                
            
            className="flex relative border-5 w-96  ">
            
              <img ref={img1Ref} src={props.p} className="w-96"></img> 
              <div 
                onMouseDown={handelMouseDown}
                onMouseUp ={handelMouseUp}
               className={`z-10 absolute `}
               style={{ left: `${move.x || 100}px`, top:`${move.y || 100}px`}}>

                
                <input type="file" onChange={handelImg} className={logoHiden.current} />

              {images ? (

                <img ref={img2Ref} src={URL.createObjectURL(images)} className="w-20 h-20 "></img>
              ):null

              }
                

              </div>
              <canvas ref={canvasRef} className="hidden"></canvas>

            </div>

          ) : (
            null
          )
        }

        <button onClick={mergeImages}>Upload</button>

      
    </div>
  );
}

export default Upload


