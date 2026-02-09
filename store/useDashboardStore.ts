import { create } from 'zustand';

interface DashboardState {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (isOpen: boolean) => void;

    dateRange: '7days' | '30days' | '12months';
    setDateRange: (range: '7days' | '30days' | '12months') => void;
    userType: 'all' | 'free' | 'premium' | 'enterprise';
    setUserType: (type: 'all' | 'free' | 'premium' | 'enterprise') => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
    isSidebarOpen: false,
    toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),

    dateRange: '7days',
    setDateRange: (range) => set({ dateRange: range }),

    userType: 'all',
    setUserType: (type) => set({ userType: type }),
}));
