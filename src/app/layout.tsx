import "./globals.css"
import { ReactNode } from "react"
import Link from "next/link"

export const metadata = {
  title: "Polling App",
  description: "Create and vote on polls easily",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm">
          <nav className="max-w-3xl mx-auto p-6 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Polling App
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Register
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
