import './globals.css'

export const metadata = {
  title: 'To-Do App',
  description: 'A simple to-do app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
