import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export const locales = ['en', 'zh', 'ja', 'ko', 'tw'];

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
});

export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(zh|en|ja|ko|tw)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};