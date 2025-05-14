import { Titillium_Web, Noto_Sans_JP } from 'next/font/google';

export const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});
