import React from 'react'
import { forwardRef,useImperativeHandle,useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({result,targetTime,remainingTime,onReset},ref){
  const dialog = useRef();

  const userLost = remainingTime <= 0;
const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

    useImperativeHandle(ref, ()=>{
    return{
        open(){
          dialog.current.showModal();  
        }
    };
  });
  
    return (
    <dialog ref={dialog} className='result-modal'>
        {userLost && <h2>You Lost</h2>}
        <p>The Target Time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the Timer {' '} 
            <strong>{formattedRemainingTime}</strong></p>
        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  );
})
export default ResultModal;