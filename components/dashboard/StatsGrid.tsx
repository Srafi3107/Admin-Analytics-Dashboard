"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useDashboardStore } from '@/store/useDashboardStore';
import { DollarSign, Users, ShoppingCart, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Metric {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon: React.ElementType;
}

export function StatsGrid() {
    const { dateRange, userType } = useDashboardStore();
    const [stats, setStats] = React.useState<Metric[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchStats = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`/api/stats?dateRange=${dateRange}&userType=${userType}`);
                const data = await response.json();

                const iconMap: Record<string, any> = {
                    "Total Revenue": { icon: DollarSign, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/20" },
                    "Total Users": { icon: Users, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/20" },
                    "Orders": { icon: ShoppingCart, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/20" },
                    "Conversion Rate": { icon: Activity, color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-100 dark:bg-rose-900/20" }
                };

                const dataWithIcons = data.map((item: any) => ({
                    ...item,
                    ...iconMap[item.title] || { icon: Activity, color: "text-zinc-600", bg: "bg-zinc-100" }
                }));

                setStats(dataWithIcons);
            } catch (error) {
                console.error("Failed to fetch stats", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, [dateRange, userType]);

    if (isLoading) {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                            <div className="h-8 w-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
                        </CardHeader>
                        <CardContent>
                            <div className="h-8 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
                            <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((metric: any, index) => (
                <Card key={index} className="border-l-4" style={{ borderLeftColor: metric.color.split(' ')[0].replace('text-', '').replace('-600', '') }}>
                    {}
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            {metric.title}
                        </CardTitle>
                        <div className={cn("p-2 rounded-xl", metric.bg)}>
                            <metric.icon className={cn("h-4 w-4", metric.color)} />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <p className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                            {metric.trend === 'up' ? (
                                <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
                            ) : (
                                <ArrowDownRight className="mr-1 h-4 w-4 text-rose-500" />
                            )}
                            <span className={cn(
                                metric.trend === 'up' ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                            )}>
                                {metric.change}
                            </span>
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
