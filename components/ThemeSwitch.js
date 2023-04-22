import { useState, useEffect } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const _darkMode = (localStorage.getItem('theme') === 'dark');
        setDarkMode(_darkMode);
    }, [])
    
    const handleToggle = () => {
        let curDarkMode = (localStorage.getItem('theme') === 'dark');
        curDarkMode = !curDarkMode;
        setDarkMode(curDarkMode);
        if (curDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <ToggleButton onChange={handleToggle} value="false" selected={darkMode} aria-label="toggle light mode">
            {darkMode? <DarkModeIcon sx={{ color: "#E2DFD2" }} /> : <LightModeIcon sx={{ color: "white" }} />}
        </ToggleButton>
    );
}

export default ThemeSwitch;