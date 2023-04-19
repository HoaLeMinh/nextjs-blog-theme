import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import EnFlagIcon from '../data/en-flag.svg';
import ViFlagIcon from '../data/vi-flag.svg';
import Image from 'next/image';

function LanguageSwitch() {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const curLanguage = localStorage.getItem('language');
        setLanguage(curLanguage? curLanguage: 'en');
    }, [])
    
    const handleToggle = (event, newLanguage) => {
        localStorage.setItem('language', newLanguage);
        setLanguage(newLanguage);
        console.log(`switch language to: ${newLanguage}`);
    };
    
    return (
        <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleToggle}
            aria-label="Select Language"
        >
            <ToggleButton value="en" selected={(language==='en')} aria-label="English">
                <Image
                    priority
                    src={EnFlagIcon}
                    alt="English"
                    width={30}
                    height={24}
                />
            </ToggleButton>
            <ToggleButton value="vi" selected={(language==='vi')} aria-label="Vietnamese">
                <Image
                    priority
                    src={ViFlagIcon}
                    alt="Vietnamese"
                    width={30}
                    height={24}
                />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default LanguageSwitch;