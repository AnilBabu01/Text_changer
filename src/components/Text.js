import React,{useState} from 'react';

export default function Text(props) {
    const handleupclick =()=>{
      let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("Converted into upper case","seccess");
    }
    const handleloclick =()=>{
        let newtext=text.toLowerCase();
          settext(newtext);
          props.showalert("Converted into Lower case","seccess");
      }

      const cleartext =()=>{
        let newtext='';
          settext(newtext);
          props.showalert("Clear text","seccess");
      }

      const copytext =()=>{
        var text =document.getElementById("mybox");
        text.select();
         navigator.clipboard.writeText(text.value);
         props.showalert("Copy text","seccess");
      }
      const handlExtraSpaces =()=>{
        let newtext=text.split(/[ ]+/);
           settext(newtext.join(" "));
           props.showalert("remove extra spaces","seccess");
      }
    const handleOnchange =(event)=>{
        settext(event.target.value);
    }
    const [text, settext] = useState('');
    
  return (
  <>
  <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
 <div className="mb-3">
      <h2>{props.heading}</h2>
     <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='dark'?'#255583':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnchange} rows="8"></textarea>
</div>
     
    
          
              <button className='btn btn-success mx-1 my-1' onClick={handleupclick}>Uppercase</button>
              <button className='btn btn-success mx-1 my-1 ' onClick={handleloclick}>Lowercase</button>
              <button className='btn btn-success mx-1 my-1' onClick={handlExtraSpaces}>Remove Extra spaces</button>
             
          
          
          <button className='btn btn-success mx-1 my-1 ' onClick={copytext}>Copy Text</button>
              <button className='btn btn-success mx-1 my-1' onClick={cleartext}>Clear Text</button>

          
     
    </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
      <h2>Your text summery</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and  {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to preview"} </p>
  </div>
</>
 )

}
     