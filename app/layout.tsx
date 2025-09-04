import "./../styles/globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Polling App",
  description: "Create and vote on polls easily",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}

