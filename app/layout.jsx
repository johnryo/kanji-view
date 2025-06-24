import { ToastContainer } from 'react-toastify';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  APP_NAME,
  APP_BRAND,
  APP_DESCRIPTION,
  APP_KEYWORDS,
} from '@/lib/constants';
import { titillium } from '@/lib/utils/fonts';
import '@/assets/styles/globals.css';

export const metadata = {
  title: `${APP_NAME} | ${APP_BRAND}`,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={titillium.className}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow bg-radial-[at_50%_100%] from-[#dfe0df] to-white '>
            {children}
          </main>
          <Footer />
        </div>
        <ToastContainer draggable={true} theme='dark' />
      </body>
    </html>
  );
}
