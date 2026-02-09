"use client";

import React from 'react';
import { useDashboardStore } from '@/store/useDashboardStore';
import { Menu, Bell, User } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle';

export function Header() {
    const { toggleSidebar } = useDashboardStore();
    const [isProfileOpen, setIsProfileOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center gap-4 border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 dark:bg-zinc-950/80 dark:border-zinc-800 transition-all">
            <button
                onClick={toggleSidebar}
                className="mr-2 p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
                <Menu className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
            </button>

            <div className="flex-1">
                <span className="text-lg font-semibold md:hidden">AdminDash</span>
                {/* Breadcrumbs or Title could go here for Desktop */}
                <h1 className="hidden md:block text-xl font-semibold text-zinc-800 dark:text-white">Overview</h1>
            </div>

            <div className="flex items-center gap-4">
                <ModeToggle />
                <button className="relative rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                    <Bell className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-zinc-950" />
                </button>

                <div className="relative">
                    <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 rounded-full border border-zinc-200 p-1 pr-3 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800 transition-colors"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
                            <User className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                        </div>
                        <div className="hidden text-sm md:block text-left">
                            <p className="font-medium text-zinc-700 dark:text-zinc-200">Admin User</p>
                        </div>
                    </button>

                    {isProfileOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setIsProfileOpen(false)}
                            />
                            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 z-50">
                                <div className="px-4 py-2 border-b border-zinc-100 dark:border-zinc-800">
                                    <p className="text-sm font-medium">Admin User</p>
                                    <p className="text-xs text-zinc-500">admin@company.com</p>
                                </div>
                                <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">Profile Settings</button>
                                <button className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800">Billing</button>
                                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">Logout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
