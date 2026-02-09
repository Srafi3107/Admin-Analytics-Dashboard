import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OrdersChart } from "@/components/dashboard/OrdersChart";
import { UserPieChart } from "@/components/dashboard/UserPieChart";

import { DashboardFilters } from "@/components/dashboard/DashboardFilters";

export default function Home() {
    return (
        <div className="space-y-6 pb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Dashboard
                </h2>
                <DashboardFilters />
            </div>

            <StatsGrid />

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
                <RevenueChart />
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
                <OrdersChart />
                <UserPieChart />
            </div>


        </div>
    );
}
