import React, { useEffect, useState } from 'react';
import { getThemeToLocalStorage, setThemeInLocalStorage, Themecheck } from './Function/LocalStorage';
import { FaRocket, FaUserCircle } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import Profile from './Component/Profile';

const App: React.FC = () => {
  // State to control the modal visibility
  const [theme, setTheme] = useState<Themecheck>({
    mode: "light",
    colors: "orange",
  })
  useEffect(() => {
    const storedTheme = getThemeToLocalStorage();
    const createTheme = !storedTheme.mode || !storedTheme.colors ? theme : storedTheme;
    setTheme(createTheme)
  }, [])

  const ChangeThemeColor = (changeColor: string) => {
    const newTheme = ({ ...theme, colors: changeColor })
    setTheme(newTheme)
    setThemeInLocalStorage(newTheme)
  }

  const ChangeThemeMode = (changeMode: string) => {
    setTheme((prevTheme) => {
      const newTheme: Themecheck = { ...prevTheme, mode: changeMode }
      setThemeInLocalStorage(newTheme)
      return newTheme
    });
  }

  return (
    <Routes>
      <Route path='/' element={<LandingPage ThemeData={theme} ChangeThemeColor={ChangeThemeColor} ChangeThemeMode={ChangeThemeMode} />} />
      <Route path='/profile' element={<Profile ThemeData={theme} ChangeThemeColor={ChangeThemeColor} ChangeThemeMode={ChangeThemeMode} />} />
    </Routes>
  );
}

export default App;
