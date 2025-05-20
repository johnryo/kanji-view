export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Kanji View';
export const APP_BRAND = process.env.NEXT_PUBLIC_APP_BRAND || 'JACHAR';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A simple Next.js app to search and view Japanese characters';
export const APP_KEYWORDS =
  process.env.NEXT_PUBLIC_APP_KEYWORDS ||
  'kanji, kana, Japanese characters, Japanese syllabary, written Japanese';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const HOME_KANJI_LIMIT =
  Number(process.env.HOME_KANJI_DISPLAY_LIMIT) || 10;
export const KANJI_LIST_LIMIT =
  Number(process.env.KANJI_LIST_DISPLAY_LIMIT) || 50;
