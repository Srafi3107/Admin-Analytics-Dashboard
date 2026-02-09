import { NextResponse } from 'next/server';
import { getMockStats } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const dateRange = searchParams.get('dateRange') || '7days';
    const userType = searchParams.get('userType') || 'all';

    const data = getMockStats(dateRange, userType);


    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(data);
}
