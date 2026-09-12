import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <SignUp
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'rounded-2xl shadow-lg border border-zinc-200',
            headerTitle: 'text-2xl font-bold',
            headerSubtitle: 'text-zinc-500',
            socialButtonsBlockButton: 'rounded-lg border border-zinc-200 hover:bg-zinc-50',
            formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700 rounded-lg',
            footerActionLink: 'text-indigo-600 hover:text-indigo-700',
          },
        }}
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
}
