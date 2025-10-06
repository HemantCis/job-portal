import { Inter } from 'next/font/google';
// import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WatuLink Advisory - Business Consulting Services',
  description: 'WatuLink Advisory provides strategic business consulting, human capital development, and localization support services in Tanzania and beyond.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* External Scripts */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
          crossOrigin="anonymous"
          async
        ></script>
        
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js"
          async
        ></script>
      </body>
    </html>
  )
}