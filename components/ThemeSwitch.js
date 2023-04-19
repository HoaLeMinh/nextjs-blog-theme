import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeSwitch() {
    const [darkMode, setDarkMode] = React.useState(false);
    
    const handleToggle = () => {
        const curDarkMode = (localStorage.getItem('theme') === 'dark');
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
            {darkMode? <DarkModeIcon /> : <LightModeIcon  />}
        </ToggleButton>
    );
}

export default ThemeSwitch;