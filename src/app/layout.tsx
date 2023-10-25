import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { cn } from "./libs/utils";


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
        
        <main className="xl:pl-[15vw] pt-5 mx-2 xl:mx-6 xl:pt-8">{children}</main>
      </body>
    </html>
  );
}
