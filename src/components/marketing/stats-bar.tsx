export function StatsBar() {
  const stats = [
    { value: "50,000+", label: "Students" },
    { value: "2M+", label: "Words Humanized" },
    { value: "500+", label: "Universities" },
    { value: "4.9★", label: "Average Rating" },
  ];

  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 gap-y-8 md:gap-y-0">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-1 py-2">
              <div className="text-3xl font-extrabold text-zinc-900">{stat.value}</div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
