import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submit, setSubmit] = useState(false);

    let Handler = (e) => {
        setSubmit(true);
    }

  return (
    <div className='container'>
      {
        !submit ? (
            <form onSubmit={Handler}>
                <h2>Sign Up for our News Letter!</h2>
                <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name}/> <br />
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <button type="Submit">Subscribe</button>
            </form>
        )

        :

        (
            <p>Thank You, for Signing Up! {name}</p>
        )
      }
    </div>
  )
}

export default NewsLetter
