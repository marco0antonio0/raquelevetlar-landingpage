import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vet em Casa | Dra. Raquel Aguiar',
  description: 'Atendimento veterinário domiciliar com carinho e responsabilidade. Agende sua consulta com a Dra. Raquel Aguiar via WhatsApp.',
  applicationName: 'Vet em Casa',
  keywords: ['veterinária', 'atendimento domiciliar', 'pets', 'vacinação', 'Belém', 'Dra. Raquel Aguiar'],
  authors: [{ name: 'Raquel Aguiar' }],
  creator: 'Raquel Aguiar',
  publisher: 'Vet em Casa',
  metadataBase: new URL('https://vetemcasabelem.com'), 
  openGraph: {
    title: 'Vet em Casa | Atendimento Veterinário em Domicílio',
    description: 'Agende agora sua consulta com a Dra. Raquel Aguiar. Cuidados profissionais no conforto do seu lar.',
    url: 'https://vetemcasabelem.com',
    siteName: 'Vet em Casa',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vet em Casa | Atendimento Veterinário em Belém',
    description: 'Consulta veterinária domiciliar com a Dra. Raquel Aguiar. Agende pelo WhatsApp.',
    site: '@vetemcasabelem',
    creator: '@vetemcasabelem',
  },
  alternates: {
    canonical: 'https://vetemcasabelem.com',
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
