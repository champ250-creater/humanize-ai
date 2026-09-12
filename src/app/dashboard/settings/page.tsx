import { Settings, User, CreditCard, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900">Settings</h1>
        <p className="mt-1 text-sm text-zinc-500">Manage your account, billing, and preferences</p>
      </div>

      <div className="grid gap-4">
        {[
          { icon: User, label: 'Profile', desc: 'Update your name, email, and university', color: 'indigo' },
          { icon: CreditCard, label: 'Billing & Plan', desc: 'Manage your subscription and payment method', color: 'emerald' },
          { icon: Palette, label: 'Preferences', desc: 'Default academic level, discipline, and tone', color: 'purple' },
          { icon: Bell, label: 'Notifications', desc: 'Email alerts for usage limits and updates', color: 'amber' },
          { icon: Shield, label: 'Privacy & Security', desc: 'Two-factor auth, data export, account deletion', color: 'red' },
        ].map(({ icon: Icon, label, desc, color }) => (
          <div key={label} className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:shadow-md cursor-pointer">
            <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-${color}-50`}>
              <Icon className={`h-5 w-5 text-${color}-600`} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-900">{label}</h3>
              <p className="text-sm text-zinc-500">{desc}</p>
            </div>
            <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        ))}
      </div>
    </div>
  );
}
