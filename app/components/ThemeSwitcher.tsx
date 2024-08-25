"use client"
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    if (!mounted) return <>...</>;

    return (
        <button onClick={() => { currentTheme === "dark" ? setTheme("light") : setTheme("dark"); console.log(currentTheme)}}
        className="p-2 hover:bg-text-custom/10 rounded-lg transition-all ease-in duration-100">
            { currentTheme === "dark" ? (
                <IoSunnyOutline />
                ) : (
                <RiMoonClearLine />
            ) }
        </button>
    )
}

export default ThemeSwitcher;