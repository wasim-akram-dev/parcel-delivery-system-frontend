import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#2b6cb0",
  "#48bb78",
  "#f6ad55",
  "#f56565",
  "#a0aec0",
  "#ed64a6",
];

export default function StatusPieChart({
  data,
}: {
  data: { status: string; count: number }[];
}) {
  const pieData = data.map((d) => ({ name: d.status, value: d.count }));
  return (
    <div className="bg-card p-4 rounded-lg">
      <h4 className="font-semibold mb-2">Status Distribution</h4>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              innerRadius={40}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
