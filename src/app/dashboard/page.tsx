import { Wand2, FolderOpen, Shield, BookOpen, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STATS = [
  {
    name: "Words Humanized",
    value: "1,200",
    icon: Wand2,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/50"
  },
  {
    name: "Documents Created",
    value: "14",
    icon: FolderOpen,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/50"
  },
  {
    name: "Detection Score Avg",
    value: "2%",
    icon: Shield,
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/50"
  },
  {
    name: "Citations Generated",
    value: "42",
    icon: BookOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/50"
  }
];

const QUICK_ACTIONS = [
  { name: "New Humanize Task", href: "/dashboard/humanizer", icon: Wand2, desc: "Transform AI text" },
  { name: "Check Detection", href: "/dashboard/detector", icon: Shield, desc: "Scan document" },
  { name: "Add Citations", href: "/dashboard/citations", icon: BookOpen, desc: "Generate refs" },
  { name: "Start Research", href: "/dashboard/research", icon: FolderOpen, desc: "Organize sources" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
          Welcome back! 👋
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Here's an overview of your writing activities.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STATS.map((stat) => (
          <div key={stat.name} className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-x-4">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", stat.bgColor)}>
                <stat.icon className={cn("h-6 w-6", stat.color)} />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {stat.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_ACTIONS.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className="group relative flex flex-col gap-y-2 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-500 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-500"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  <action.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{action.name}</h3>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{action.desc}</p>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight className="h-4 w-4 text-indigo-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-white">Recent Documents</h2>
          <Link href="/dashboard/documents" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            View all
          </Link>
        </div>
        
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 py-16 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mb-4">
            <FolderOpen className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-1">No documents yet</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 max-w-sm">
            Get started by creating a new document or humanizing an existing text.
          </p>
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors">
            <Plus className="h-4 w-4" />
            Create Document
          </button>
        </div>
      </div>
    </div>
  );
}
