export const getMockStats = (dateRange: string, userType: string) => {
    // Simulate different data based on filters
    const multiplier = dateRange === '30days' ? 2 : dateRange === '12months' ? 10 : 1;
    const userMultiplier = userType === 'premium' ? 1.5 : userType === 'enterprise' ? 3 : 1;

    return [
        {
            title: "Total Revenue",
            value: `$${(54230 * multiplier * userMultiplier).toLocaleString()}`,
            change: "+12.5% from last period",
            trend: 'up',
            icon: 'DollarSign',
        },
        {
            title: "Total Users",
            value: (1245 * multiplier).toLocaleString(),
            change: "+8.2% from last period",
            trend: 'up',
            icon: 'Users',
        },
        {
            title: "Orders",
            value: (342 * multiplier).toLocaleString(),
            change: "-3.1% from last period",
            trend: 'down',
            icon: 'ShoppingCart',
        },
        {
            title: "Conversion Rate",
            value: "4.3%",
            change: "+2.4% from last period",
            trend: 'up',
            icon: 'Activity',
        },
    ];
};

export const getMockRevenue = (dateRange: string) => {
    // Generate simple data
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (dateRange === '7days') {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days.map(day => ({ name: day, revenue: Math.floor(Math.random() * 5000) + 1000 }));
    }
    return months.map(month => ({ name: month, revenue: Math.floor(Math.random() * 10000) + 2000 }));
};

export const getMockOrders = (dateRange: string) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (dateRange === '7days') {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return days.map(day => ({ name: day, orders: Math.floor(Math.random() * 100) + 10 }));
    }
    return months.map(month => ({ name: month, orders: Math.floor(Math.random() * 1000) + 100 }));
};

export const getMockUserDist = (userType: string) => {
    // If filtering by specific user type, maybe show sub-segments? 
    // For simplicity, just return static distribution but maybe vary values slightly
    return [
        { name: 'Free', value: 400 + Math.floor(Math.random() * 100) },
        { name: 'Premium', value: 300 + Math.floor(Math.random() * 100) },
        { name: 'Enterprise', value: 100 + Math.floor(Math.random() * 50) },
    ];
};
