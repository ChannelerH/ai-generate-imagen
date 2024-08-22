import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "./libs/utils";
import { CommonProvider } from '@/app/context/common-context';
import { NextAuthProvider } from '@/app/context/next-auth-context';
import { Toaster } from '@/app/componets/shared/ui/sonner';
import Header  from '@/app/componets/shared/header';


const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Generate Imagen",
  description: "Image generator with artificial intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background text-gray-400/70", font.className)}>
      <NextAuthProvider>
      <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
        <CommonProvider>
          <Header />
            <main className="xl:pl-[15vw] pt-5 mx-2 xl:mx-6 xl:pt-8">{children}</main>
          </CommonProvider>
          </NextAuthProvider>
      </body>
    </html>
  );
}
