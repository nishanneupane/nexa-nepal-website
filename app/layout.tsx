import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexa Nepal',
  description: 'It is an digital marketing agency based in nepal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className='pb-20'>
          {children}
          {/* Our footer */}
        </main>
        <footer className="py-5 mt-16 w-full fixed bottom-0 bg-white border-slate-200 shadow-lg border-t-2">
          <div className="flex items-center justify-center flex-col max-w-3xl m-auto text-center">
            <p className="text-sm text-muted-foreground text-center">created by nishan neupane @ 2023 alright reserved </p>
          </div>

        </footer>
      </body>
    </html>
  )
}
