export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid place-items-center bg-gray-50 p-6">
      {children}
    </main>
  );
}
