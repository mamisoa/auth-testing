import "./globals.css";
import Navbar from '@/app/components/ui/NavBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'AI Automation App',
  description: 'Focus by AI automations',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar />
      {children}
    </body>
  </html>
  );
}
