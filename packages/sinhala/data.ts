// data.ts - All traditional Sinhala names

// Planetary weekday names (ග්‍රහ වාර)
export const WEEKDAY_NAMES = [
  { si: 'ඉරිදා', en: 'Irida', short: 'ඉරි' },
  { si: 'සඳුදා', en: 'Sanduda', short: 'සඳු' },
  { si: 'අඟහරුවාදා', en: 'Angaharuvada', short: 'අඟ' },
  { si: 'බදාදා', en: 'Badada', short: 'බදා' },
  { si: 'බ්‍රහස්පතින්දා', en: 'Brahaspathinda', short: 'බ්‍රහස්' },
  { si: 'සිකුරාදා', en: 'Sikurada', short: 'සිකු' },
  { si: 'සෙනසුරාදා', en: 'Senasurada', short: 'සෙන' }
];

// Traditional month names (මාස)
export const MONTH_NAMES = [
  { si: 'දුරුතු', en: 'Duruthu' },
  { si: 'නවම්', en: 'Navam' },
  { si: 'මැදින්', en: 'Medin' },
  { si: 'බක්', en: 'Bak' },
  { si: 'වෙසක්', en: 'Vesak' },
  { si: 'පොසොන්', en: 'Poson' },
  { si: 'ඇසළ', en: 'Esala' },
  { si: 'නිකිණි', en: 'Nikini' },
  { si: 'බිනර', en: 'Binara' },
  { si: 'වප්', en: 'Vap' },
  { si: 'ඉල්', en: 'Il' },
  { si: 'උඳුවප්', en: 'Unduvap' }
];

// Gregorian month names in Sinhala
export const GREGORIAN_MONTHS = [
  { si: 'ජනවාරි', en: 'January' },
  { si: 'පෙබරවාරි', en: 'February' },
  { si: 'මාර්තු', en: 'March' },
  { si: 'අප්‍රේල්', en: 'April' },
  { si: 'මැයි', en: 'May' },
  { si: 'ජූනි', en: 'June' },
  { si: 'ජූලි', en: 'July' },
  { si: 'අගෝස්තු', en: 'August' },
  { si: 'සැප්තැම්බර්', en: 'September' },
  { si: 'ඔක්තෝබර්', en: 'October' },
  { si: 'නොවැම්බර්', en: 'November' },
  { si: 'දෙසැම්බර්', en: 'December' }
];

// Sinhala numerals
export const SINHALA_NUMERALS = ['෦', '෧', '෨', '෩', '෪', '෫', '෬', '෭', '෮', '෯'];

export function toSinhalaNumber(num: number): string {
  return String(num)
    .split('')
    .map(digit => SINHALA_NUMERALS[parseInt(digit)])
    .join('');
}
