import { Inter } from 'next/font/google'
import './globals.css'
import  Providers  from "@/app/component/darkMode/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alireza Ghaffar',
  description: 'alireza ghaffar portfolio',
}

export default function RootLayout({ children }) {
   return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
      <nav className=" sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-black-200 shadow-md">
          <div className="relative flex items-center justify-between px-11 h-20">
            <span className="text-2xl text-gray-900 font-semibold dark:text-white">Alireza Ghaffar.dev</span>
            <div className="flex space-x-4 font-semibold">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#Projects">Projects</a>
              <a href="#Contact">Contact</a>
            </div>
          </div>
      </nav>
   <Providers>
    {children}
    </Providers>
    </body>
    </html>
  )
}