export default function ResultCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">
      {children}
    </div>
  );
}