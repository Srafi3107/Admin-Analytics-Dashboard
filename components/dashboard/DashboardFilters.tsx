"use client";

import React from 'react';
import { useDashboardStore } from '@/store/useDashboardStore';
import { Button } from '@/components/ui/button';

export function DashboardFilters() {
    const { dateRange, setDateRange, userType, setUserType } = useDashboardStore();

    const handleExport = () => {
        const data = [
            ['Metric', 'Value', 'Change'],
            ['Total Revenue', '$54,230', '+12.5%'],
            ['Total Users', '1,245', '+8.2%'],
            ['Orders', '342', '-3.1%'],
            ['Conversion Rate', '4.3%', '+2.4%']
        ];

        const csvContent = data.map(e => e.join(",")).join("\n");
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "dashboard_data.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
                {/* Native Selects for Simplicity & Robustness */}
                <div className="relative">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value as any)}
                        className="h-9 w-[180px] rounded-lg border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                    >
                        <option value="7days">Last 7 days</option>
                        <option value="30days">Last 30 days</option>
                        <option value="12months">Last 12 months</option>
                    </select>
                </div>

                <div className="relative">
                    <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value as any)}
                        className="h-9 w-[180px] rounded-lg border-zinc-200 bg-white px-3 text-sm text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
                    >
                        <option value="all">All Users</option>
                        <option value="free">Free</option>
                        <option value="premium">Premium</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={handleExport}>Download</Button>
            </div>
        </div>
    );
}
