// import { useState } from 'react'
import React,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text,setText]=useState('');
    // setText('hi');

const handleRemoveSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
}
    const handleCopyText=()=>{
      var x=document.getElementById('samp');
      x.select();
      navigator.clipboard.writeText(x.value);
    }
    const handleOnChange=(event)=>{
    setText(event.target.value);
    }
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }
    const handleClClick=()=>{
      let newText=''
      setText(newText);
    }
    function isUpperCase(letter) {
      return letter === letter.toUpperCase();
  }
    const handleInClick=()=>{
      let s='';
      for(let i=0;i<text.length;i++){
        if(isUpperCase(text.charAt(i))){
          s+=text.charAt(i).toLowerCase();
        }
        else{
          s+=text.charAt(i).toUpperCase();
        }
        
      }
      setText(s);
    }
  return (
    <div><div className={`container text-${props.mode==='dark'?'light':'#00305e'}`}>
<div className="mb-3">
{/* <div className='container'></div> */}
<h1>{props.title}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text}  style={{ background: props.mode === 'dark' ?  'grey':'white' , color:props.mode === 'dark' ?  'white':'grey' }} id="samp" onChange={handleOnChange} rows="10"></textarea>
  <button className='btn btn-primary mx-1' onClick={handleUpClick}>Change to upper case..</button>
  <button className='btn btn-primary mx-1'  onClick={handleLoClick}>Change to lower case..</button>
  <button className='btn btn-primary mx-1'  onClick={handleClClick}>Clear text..</button>
  <button className='btn btn-primary mx-1'  onClick={handleInClick}>Inverse Case..</button>
  <button className='btn btn-primary mx-1'  onClick={handleCopyText}>Copy Text..</button>
  <button className='btn btn-primary mx-1'  onClick={handleRemoveSpace}>Remove extra spaces ..</button>
</div>
</div>
<div className={`container text-${props.mode==='dark'?'light':'#00305e'}`}>
<p><h1>Text Summary...</h1></p>
{/* <br></br> */}
<p>Your number of characters is {text.length}</p>
<p>Number of words count is {text.length>0?text.split(' ').length:0}</p>
<p>Minutes to read this text {text.length>0?0.008*text.split(' ').length:0}</p>
<h1>Preview</h1>
<p>{text.length>0?text:"Enter something to preview here..."}</p>
</div>
    </div>
  )
}
