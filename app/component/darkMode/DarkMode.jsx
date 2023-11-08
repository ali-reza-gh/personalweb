"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = (prop) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <button className={prop.className} onClick={() =>setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <FaMoon className=" w-8 h-8" /> : <FaSun className="text-yellow-500 w-8 h-8 " />}
    </button>
  )
}

export default DarkModeButton