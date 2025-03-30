import React from 'react';
import resume from '../assets/pdf/vishwjeet.pdf';

const PDF_FILE_URL = `http://localhost:5173/${resume}`;
const CV = () => {
    const downloadFileAtUrl=(url)=>{
        fetch(url).then(response=>response.blob()).then(blob=>{
            const blobUrl = window.URL.createObjectURL(new Blob([blob]))
            const fileName = url.split('/').pop()
            const aTag = document.createElement('a');
            aTag.href =blobUrl;
            aTag.setAttribute('download',fileName)
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
    }
  return (
    
     <div name="Cv"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"  style={{background:""}}>
        <div className="flex flex-col md:flex-row">
        <button  style={{background:"grey"}} name='Cv' onClick={()=>{downloadFileAtUrl(PDF_FILE_URL)}}>Download CV pdf</button>
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"></div>
 
    </div></div>
  )} 

export default CV;