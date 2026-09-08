"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, FREE_WORD_LIMIT, APP_NAME } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { Sparkles, User, Zap } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const wordsUsed = 1200; // Mock data
  const progressPercentage = (wordsUsed / FREE_WORD_LIMIT) * 100;

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[280px] flex-col bg-white border-r border-zinc-200 md:flex dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex h-16 items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-zinc-900 dark:text-white">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <span>{APP_NAME} ✨</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-4">
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = (LucideIcons as any)[item.icon_name];
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/dashboard");

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
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

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Usage</span>
            <span className="text-xs text-zinc-500">{wordsUsed} / {FREE_WORD_LIMIT}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Words humanized this month</p>
        </div>
        
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition-all">
          <Zap className="h-4 w-4" />
          Upgrade to Pro
        </button>

        <div className="mt-4 flex items-center gap-3 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
            <User className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-900 dark:text-white">John Doe</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Free Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
