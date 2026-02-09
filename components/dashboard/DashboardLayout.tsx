"use client";

import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useDashboardStore } from '@/store/useDashboardStore';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isSidebarOpen } = useDashboardStore();

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
            <Sidebar />
            <div
                className={cn(
                    "flex flex-col min-h-screen transition-all duration-300 ease-in-out",
                    // Mobile: No margin (Sidebar is overlay or hidden)
                    // Desktop (md+): Margin based on sidebar state
                    isSidebarOpen ? "md:ml-64" : "md:ml-[70px]"
                )}
            >
                <Header />
                <main className="flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
