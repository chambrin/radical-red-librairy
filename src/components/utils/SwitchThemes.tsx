'use client'
// components/SwitchThemeButton.tsx
import {useTheme} from "@/context/ThemeContext";
import {Button} from "@/components/ui/button";

export default function SwitchThemeButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <div onClick={toggleTheme}>
            <Button>
            Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </Button>
        </div>
    );
}