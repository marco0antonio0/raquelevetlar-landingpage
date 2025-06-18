import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raquel&VetLar | Dra. Raquel Aguiar',
  description: 'Atendimento veterinário domiciliar em Belém, Ananindeua e região metropolitana...',
  applicationName: 'Raquel&VetLar',
  keywords: [
    'veterinária em Belém', 'veterinária em Ananindeua', 'veterinária domiciliar Belém',
    'atendimento veterinário rápido', 'emergência veterinária Belém', 'consulta veterinária em casa',
    'vacinação pet Belém', 'veterinária para cachorro', 'veterinária para gato',
    'veterinária de confiança', 'vet domiciliar Belém', 'cuidados com pet em casa',
    'Dra. Raquel Aguiar', 'atendimento veterinário Pará', 'clínica veterinária em domicílio'
  ],
  authors: [{ name: 'Raquel Aguiar' }],
  creator: 'Raquel Aguiar',
  publisher: 'Raquel&VetLar',
  metadataBase: new URL('https://raquelevetlar.store'),
  openGraph: {
    title: 'Raquel&VetLar | Atendimento Veterinário em Domicílio',
    description: 'Veterinária domiciliar em Belém e Ananindeua...',
    url: 'https://raquelevetlar.store',
    siteName: 'Raquel&VetLar',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Fraquelevetlar.store%2F',
        width: 1200,
        height: 630,
        alt: 'Preview Raquel&VetLar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raquel&VetLar | Atendimento Veterinário em Belém e Região',
    description: 'Veterinária para cachorro e gato em domicílio...',
    site: '@vetemcasabelem',
    creator: '@vetemcasabelem',
    images: [
      'https://metasnap.dirrocha.com/screenshot?url=https%3A%2F%2Fraquelevetlar.store%2F',
    ],
  },
  alternates: {
    canonical: 'https://raquelevetlar.store',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
