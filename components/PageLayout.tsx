import Link from "next/link";

export default function PageLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-stone-100 p-5">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-4 inline-block text-stone-500">
          ← 처음으로
        </Link>

        <h1 className="mb-2 text-2xl font-bold">{title}</h1>

        {description && (
          <p className="mb-6 text-stone-600">{description}</p>
        )}

        {children}
      </div>
    </main>
  );
}