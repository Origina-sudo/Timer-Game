import React from 'react'
import { forwardRef,useImperativeHandle,useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({result,targetTime},ref){
  useRef();
    useImperativeHandle(ref, ()=>{
    return{
        open(){
            
        }
    }
  });
  
    return (
    <dialog ref={ref} className='result-modal'>
        <h2>You {result}</h2>
        <p>The Target Time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the Timer with <strong> X seconds left.</strong></p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  );
})

export default ResultModal;