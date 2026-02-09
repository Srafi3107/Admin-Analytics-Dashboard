"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDashboardStore } from '@/store/useDashboardStore';
import { cn } from '@/lib/utils';
import {
    LayoutDashboard,
    BarChart3,
    Users,
    Settings,
    X,
    Menu,
    LifeBuoy,
    LogOut
} from 'lucide-react';

const navItems = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const { isSidebarOpen, setSidebarOpen, toggleSidebar } = useDashboardStore();

    React.useEffect(() => {

        if (window.innerWidth >= 1024) {
            setSidebarOpen(true);
        }
    }, [setSidebarOpen]);

    return (
        <>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}


            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white text-zinc-900 transition-all duration-300 ease-in-out shadow-xl dark:bg-zinc-900 dark:text-zinc-100",
                    !isSidebarOpen && "-translate-x-full md:translate-x-0 md:w-[70px]",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className={cn(
                    "flex h-16 items-center border-b border-zinc-200 px-4 transition-all dark:border-zinc-800",
                    !isSidebarOpen && "md:justify-center md:px-0"
                )}>
                    <Link href="/" className="flex items-center gap-3 font-bold text-xl overflow-hidden whitespace-nowrap">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20 text-white">
                            <BarChart3 className="h-5 w-5" />
                        </div>
                        <span className={cn(
                            "transition-all duration-300 opacity-100",
                            !isSidebarOpen && "md:opacity-0 md:w-0 md:pointer-events-none"
                        )}>
                            Analytics<span className="text-zinc-500">Pro</span>
                        </span>
                    </Link>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="md:hidden ml-auto p-2 hover:bg-zinc-100 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>


                <div className="flex-1 overflow-y-auto py-6">
                    <nav className="grid gap-2 px-3">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all relative overflow-hidden",
                                        isActive
                                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                                        !isSidebarOpen && "md:justify-center md:px-2"
                                    )}
                                    title={!isSidebarOpen ? item.name : undefined}
                                >
                                    <item.icon className={cn(
                                        "h-5 w-5 shrink-0 transition-transform",
                                        isActive && "scale-110"
                                    )} />
                                    <span className={cn(
                                        "transition-all duration-300 whitespace-nowrap",
                                        !isSidebarOpen && "md:hidden md:opacity-0 md:w-0"
                                    )}>
                                        {item.name}
                                    </span>


                                    {!isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:from-white/5" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>


                <div className="mt-auto border-t border-zinc-200 p-4 dark:border-zinc-800">
                    <nav className="grid gap-1">
                        <Link
                            href="#"
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
                                !isSidebarOpen && "md:justify-center"
                            )}
                        >
                            <LifeBuoy className="h-5 w-5 shrink-0" />
                            <span className={cn(!isSidebarOpen && "md:hidden")}>Help & detailed docs</span>
                        </Link>
                        <button
                            className={cn(
                                "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-red-500 transition-colors dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-red-400",
                                !isSidebarOpen && "md:justify-center"
                            )}
                        >
                            <LogOut className="h-5 w-5 shrink-0" />
                            <span className={cn(!isSidebarOpen && "md:hidden")}>Logout</span>
                        </button>
                    </nav>

                    <div className={cn(
                        "mt-6 flex items-center gap-3 px-2 transition-all",
                        !isSidebarOpen && "md:justify-center md:px-0"
                    )}>
                        <div className="h-8 w-8 shrink-0 rounded-full bg-zinc-200 border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700" />
                        <div className={cn(
                            "flex flex-col transition-all",
                            !isSidebarOpen && "md:hidden md:opacity-0 md:w-0"
                        )}>
                            <span className="text-xs font-medium text-zinc-900 dark:text-zinc-200 whitespace-nowrap">Admin User</span>
                            <span className="text-[10px] text-zinc-500 whitespace-nowrap">admin@company.com</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
