import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { APP_NAME, APP_DESCRIPTION, APP_KEYWORDS } from '@/lib/constants';
import { titillium } from '@/lib/utils/fonts';
import '@/assets/styles/globals.css';

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={titillium.className}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
