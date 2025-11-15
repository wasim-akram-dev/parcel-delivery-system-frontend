export default function OverviewCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
