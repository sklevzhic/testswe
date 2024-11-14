import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/app/providers';
import React from 'react';
import { Header } from '@/widgets/header/ui/header';
import { Footer } from '@/widgets/footer/ui/footer';

export const metadata: Metadata = {
    title: 'CS SKINS',
    description: 'CS SKINS',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={'bg-gray-100'}>
                <div className="min-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </div>
                <ModalProvider />
            </body>
        </html>
    );
}
