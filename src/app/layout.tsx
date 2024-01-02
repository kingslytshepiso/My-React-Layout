import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'
import { useEffect } from 'react';
import ImportBsJs from './importBsJs';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'layout',
  description: 'my react layout design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <header><Header /></header>
        <main className='container-fluid'>
          <div className='d-sm-block d-none d-md-block'><Sidebar /></div>
          <div className='p-3'>{children}</div>
        </main>
        <footer><Footer /></footer>
        <ImportBsJs />
      </body>
    </html>
  )
}
