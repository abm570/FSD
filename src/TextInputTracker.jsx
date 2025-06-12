import React, { useState } from 'react'

const TextInputTracker = () => {
    const [text, setText] = useState('');

    let Handler = (e) =>{
        const input = e.target.value;
        if(/^[a-zA-Z\s]*$/.test(input))
        {
            setText(input);
        }
    }

    const clearInput = () => setText('');

  return (
    <div>
        <h2>Text Input Tracker</h2>
        <input type="text" placeholder='Enter some text' onChange={Handler} value={text}/>

        <p>Current Text: {text}</p>
        <p>Character Count: {text.length}</p>

        <button onClick={clearInput}>Clear</button>
    </div>
  )
}

export default TextInputTracker
