"use client";

import { Bell, Menu, Moon, Sun, User } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const getPageTitle = () => {
    if (pathname === '/dashboard') return 'Dashboard';
    const currentItem = NAV_ITEMS.find(item => pathname.startsWith(item.href) && item.href !== '/dashboard');
    return currentItem ? currentItem.name : 'Dashboard';
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-200 bg-white/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:bg-zinc-900/80 dark:border-zinc-800">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-zinc-700 md:hidden dark:text-zinc-300"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 items-center justify-between">
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {getPageTitle()}
        </h1>
        
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="p-2 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300"
            onClick={toggleDarkMode}
          >
            <span className="sr-only">Toggle dark mode</span>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button type="button" className="-m-2.5 p-2.5 text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300 relative">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-200 dark:lg:bg-zinc-800" aria-hidden="true" />

          <div className="flex items-center gap-x-4">
            <button className="flex items-center gap-x-2 rounded-full p-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                  <User className="h-4 w-4" />
               </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
