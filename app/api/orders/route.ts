import { NextResponse } from 'next/server';
import { getMockOrders } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const dateRange = searchParams.get('dateRange') || '7days';

    const data = getMockOrders(dateRange);
    await new Promise(resolve => setTimeout(resolve, 600));
    return NextResponse.json(data);
}
