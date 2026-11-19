import { Outlet } from 'react-router-dom';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import FloatingButtons from '@/components/site/FloatingButtons';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#111111]">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[80] focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#E8D6B3] focus:rounded-lg label-caps"
            >
                Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    );
}