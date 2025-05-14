export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Kanji View';
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Displays data for Japanese kanji';
export const APP_KEYWORDS =
  process.env.NEXT_PUBLIC_APP_KEYWORDS ||
  'kanji, Japanese characters, written Japanese';
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const KANJI_LIST_LIMIT =
  Number(process.env.KANJI_LIST_DISPLAY_LIMIT) || 50;
export const HOME_KANJI_LIMIT =
  Number(process.env.HOME_KANJI_DISPLAY_LIMIT) || 15;
