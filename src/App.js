import React, { useState } from 'react';
import ThemContext from './context/ThemeContext';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css'

function App() {
  const [theme, updateTheme] = useState("light-mode");

  return (
    <ThemContext.Provider 
    value={{ theme, updateTheme}}
    >
      <div className={"App " + theme}>
        <Header />
        <Characters />
      </div>

    </ThemContext.Provider>
  );
}

export default App;