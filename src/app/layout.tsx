
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "D BIZ CONSULTANCY - Professional Business Consultancy",
    description: "Your trusted partner for business registration, compliance, and growth.",
    icons: {
        icon: [
            { url: "/dbiz-uploads/favicon.ico", sizes: "any" },
        ],
        apple: [
            { url: "/dbiz-uploads/favicon.ico", sizes: "180x180", type: "image/x-icon" },
        ],
    },
};

import ScrollToTop from "@/components/ScrollToTop";
import FloatingContact from "@/components/FloatingContact";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <QueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <TooltipProvider>
                            {children}
                            <Toaster />
                            <Sonner />
                            <FloatingContact />
                            <ScrollToTop />
                        </TooltipProvider>
                    </ThemeProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
