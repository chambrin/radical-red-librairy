'use client'
import {useTheme} from "@/context/ThemeContext";
import {Button} from "@/components/ui/button";
import { Sun, Moon } from 'lucide-react';

export default function SwitchThemeButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div onClick={toggleTheme} >
            {theme === 'light' ? <Moon  /> : <Sun />}
        </div>
    );
}