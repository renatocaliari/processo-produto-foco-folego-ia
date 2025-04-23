import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Processo de Produto com IA",
  description: "Visualização do processo de produto com IA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <Script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
