import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user

    const pathname = request.nextUrl.pathname

    // If the user is already signed in, redirect them from auth pages
    if (user && (pathname === '/sign-in' || pathname === '/sign-up')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // If the user is not signed in, protect these pages
    if (!user && (pathname === '/profile' || pathname.startsWith('/product/'))) {
    const loginUrl = new URL('/sign-in', request.url)
    loginUrl.searchParams.set('reason', 'login-required')
    return NextResponse.redirect(loginUrl)
}

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/profile/:path*',
        '/product/:path*',
        '/sign-in',
        '/sign-up'
    ],
}