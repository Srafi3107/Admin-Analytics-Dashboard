import { NextResponse } from 'next/server';
import { getMockUserDist } from '@/lib/mockData';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userType = searchParams.get('userType') || 'all';

    const data = getMockUserDist(userType);
    await new Promise(resolve => setTimeout(resolve, 300));
    return NextResponse.json(data);
}
