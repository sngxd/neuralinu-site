// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'NeuralInu – Meme Tech',
  description: 'AI-powered meme coin of 2025.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
