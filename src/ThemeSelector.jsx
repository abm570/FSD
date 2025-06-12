import React, { useState } from 'react'
import './ThemeSelector.css'

const ThemeSelector = () => {
    const [theme, setTheme] = useState('light');

  return (
    <div>
      <h2>Select Theme</h2>
      
      <input type="radio" checked = {theme === 'light'} onChange={() => setTheme('light')} value='light'/>
      Light Mode 
      <input type="radio" checked = {theme === 'dark'} onChange={() => setTheme('dark')} value = 'dark'/>
      Dark Mode

      <br />
      <br />

      <div className={`previewBox ${theme}`}>
        <p>This is <b>{theme === 'light' ? 'Light' : 'Dark'}</b> mode</p>
      </div>
    </div>
  )
}

export default ThemeSelector
