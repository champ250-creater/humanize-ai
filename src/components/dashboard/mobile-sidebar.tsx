"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, APP_NAME } from '@/lib/constants';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="relative z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white dark:bg-zinc-900 shadow-xl">
        <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-zinc-900 dark:text-white" onClick={onClose}>
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <span>{APP_NAME} ✨</span>
          </Link>
          <button 
            onClick={onClose}
            className="rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 dark:hover:bg-zinc-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = (LucideIcons as any)[item.icon_name];
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/dashboard");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive 
                      ? "bg-indigo-600 text-white" 
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-zinc-500 dark:text-zinc-400")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
