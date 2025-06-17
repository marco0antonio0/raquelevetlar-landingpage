import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raquel&VetLar | Dra. Raquel Aguiar',
  description: 'Atendimento veterinário domiciliar em Belém, Ananindeua e região metropolitana. Cuidados para cães e gatos com rapidez, carinho e responsabilidade. Agende sua consulta via WhatsApp com a Dra. Raquel Aguiar.',
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
  metadataBase: new URL('https://raquelevetlar.store/'), 
  openGraph: {
    title: 'Raquel&VetLar | Atendimento Veterinário em Domicílio',
    description: 'Veterinária domiciliar em Belém e Ananindeua. Cuidados profissionais no conforto do seu lar para cães e gatos. Atendimento rápido e emergencial com a Dra. Raquel Aguiar.',
    url: 'https://raquelevetlar.store/',
    siteName: 'Raquel&VetLar',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raquel&VetLar | Atendimento Veterinário em Belém e Região',
    description: 'Veterinária para cachorro e gato em domicílio. Atendimento com a Dra. Raquel Aguiar em Belém e Ananindeua. Agende agora.',
    site: '@vetemcasabelem',
    creator: '@vetemcasabelem',
  },
  alternates: {
    canonical: 'https://raquelevetlar.store/',
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
