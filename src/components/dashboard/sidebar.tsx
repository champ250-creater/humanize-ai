"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, APP_NAME } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { Sparkles, User, Zap } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

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
        <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">100% Free Forever</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            No logins, no subscriptions. Humanize your text instantly.
          </p>
        </div>
      </div>
    </aside>
  );
}
