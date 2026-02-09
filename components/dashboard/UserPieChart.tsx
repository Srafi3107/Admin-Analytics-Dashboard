"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useDashboardStore } from '@/store/useDashboardStore';

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

export function UserPieChart() {
    const { userType } = useDashboardStore();
    const [data, setData] = React.useState<{ name: string, value: number }[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/users?userType=${userType}`);
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error("Failed to fetch user data", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [userType]);

    if (isLoading) {
        return (
            <Card className="col-span-4 lg:col-span-1">
                <CardHeader>
                    <CardTitle>User Distribution</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 flex items-center justify-center h-[350px]">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-900 border-t-transparent dark:border-zinc-50" />
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="col-span-4 lg:col-span-1">
            <CardHeader>
                <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
