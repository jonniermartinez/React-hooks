import React, { useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const {theme, updateTheme} = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
        theme === "light-mode" ? updateTheme("dark-mode") : updateTheme("light-mode");
    }

    return(
        <div className='Header'>
            <h1>ReactHooks</h1>
            <button 
            type='button' 
            onClick={handleClick} 
            >{darkMode ? 'Dark Mode' : 'light Mode'}</button>
        </div>
    );
}

export default Header