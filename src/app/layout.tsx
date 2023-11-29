import '@/styles/globals.css';
import StyledComponentsRegistry from './registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Bootstrap from '@/config/bootstrap';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';
import { Manrope } from 'next/font/google';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Clarifion Upsell',
    description: 'Task for  eJam`s Full Stack Developer position ',
};

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <Bootstrap />
                <NprogressComponent />
                <Header />
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                <Footer />
            </body>
        </html>
    );
}
