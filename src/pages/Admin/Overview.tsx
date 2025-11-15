import OverviewCard from "@/components/modules/admin/OverviewCard";
import { useGetAdminOverviewQuery } from "@/redux/features/dashboard/dashboard.api";

const Overview = () => {
  const { data: overview } = useGetAdminOverviewQuery();
  console.log("overview", overview);

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <OverviewCard
          title="Total Parcels"
          value={overview?.data?.total ?? 0}
        />
        <OverviewCard
          title="Delivered"
          value={overview?.data?.delivered ?? 0}
        />
        <OverviewCard title="Blocked" value={overview?.data?.blocked ?? 0} />
        <OverviewCard
          title="Cancelled"
          value={overview?.data?.cancelled ?? 0}
        />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MonthlyBarChart data={monthly ?? []} />
        </div>
        <div>
          <StatusPieChart data={distribution ?? []} />
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
