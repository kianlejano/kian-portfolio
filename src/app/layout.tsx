import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { Navbar as NavbarType } from '@/app/types/layout'
import { NAV_MENU, SITE_METADATA } from '@/app/constants'

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

export const menuItems: NavbarType['menu']  = NAV_MENU;

export const appName: NavbarType['name'] = SITE_METADATA.appName

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="cmyk">
      <body>
        <header className="w-full py-2 shadow-sm">
          <Navbar name={appName} menu={menuItems} />
        </header>
        <main className="w-full flex justify-center mt-4">
          <div className="w-8/10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
