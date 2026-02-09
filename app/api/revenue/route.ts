import { NextResponse } from 'next/server';
import { getMockRevenue } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const dateRange = searchParams.get('dateRange') || '7days';

    const data = getMockRevenue(dateRange);
    await new Promise(resolve => setTimeout(resolve, 800)); // Slightly longer delay for chart
    return NextResponse.json(data);
}
