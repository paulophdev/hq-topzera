import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'HQTOPZERA',
  description: 'As melhores HQ de Heróis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-gray-950 text-gray-200'>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
