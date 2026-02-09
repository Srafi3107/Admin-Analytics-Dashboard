"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDashboardStore } from '@/store/useDashboardStore';

export function OrdersChart() {
    const { dateRange } = useDashboardStore();
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/orders?dateRange=${dateRange}`);
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error("Failed to fetch orders data", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [dateRange]);

    if (isLoading) {
        return (
            <Card className="col-span-4 lg:col-span-3">
                <CardHeader>
                    <CardTitle>Orders Per Month</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 flex items-center justify-center h-[350px]">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-900 border-t-transparent dark:border-zinc-50" />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
                <CardTitle>Orders Per Month</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-zinc-200 dark:stroke-zinc-800" />
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip cursor={{ fill: 'transparent' }} />
                        <Bar dataKey="orders" fill="#f59e0b" radius={[4, 4, 0, 0]} className="fill-amber-500 dark:fill-amber-500" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
