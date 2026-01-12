// index.js - Main formatter

import { 
  WEEKDAY_NAMES, 
  MONTH_NAMES, 
  GREGORIAN_MONTHS,
  toSinhalaNumber 
} from './data.js';

function getTraditionalMonth(gregorianMonth) {
  const mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return MONTH_NAMES[mapping[gregorianMonth]];
}

export function formatSinhala(date, style = 'traditional') {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const weekday = d.getDay();
  
  const weekdayName = WEEKDAY_NAMES[weekday].si;
  const gregorianMonth = GREGORIAN_MONTHS[month].si;
  const traditionalMonth = getTraditionalMonth(month);
  
  switch (style) {
    case 'short':
      return weekdayName;
      
    case 'medium':
      return `${traditionalMonth.si} මස ${weekdayName}`;
      
    case 'long':
      return `${year} ${traditionalMonth.si} මස ${String(day).padStart(2, '0')} ${weekdayName}`;
      
    case 'traditional':
      return `${year} ${traditionalMonth.si} මස ${String(day).padStart(2, '0')} වන ${weekdayName}`;
      
    case 'gregorian':
      return `${year} ${gregorianMonth} ${String(day).padStart(2, '0')} ${weekdayName}`;
      
    case 'full':
      return `${year} ${gregorianMonth} ${String(day).padStart(2, '0')} වන ${weekdayName} (${traditionalMonth.si} මස)`;
      
    case 'sinhala-numerals':
      return `${toSinhalaNumber(year)} ${traditionalMonth.si} මස ${toSinhalaNumber(day)} වන ${weekdayName}`;
      
    default:
      return `${year} ${traditionalMonth.si} මස ${String(day).padStart(2, '0')} වන ${weekdayName}`;
  }
}

export function getWeekdayName(date, lang = 'si') {
  const d = typeof date === 'string' ? new Date(date) : date;
  const weekday = WEEKDAY_NAMES[d.getDay()];
  return lang === 'si' ? weekday.si : weekday.en;
}

export function getTraditionalMonthName(date, lang = 'si') {
  const d = typeof date === 'string' ? new Date(date) : date;
  const month = getTraditionalMonth(d.getMonth());
  return lang === 'si' ? month.si : month.en;
}

export function getGregorianMonthName(date, lang = 'si') {
  const d = typeof date === 'string' ? new Date(date) : date;
  const month = GREGORIAN_MONTHS[d.getMonth()];
  return lang === 'si' ? month.si : month.en;
}

export { WEEKDAY_NAMES, MONTH_NAMES, GREGORIAN_MONTHS, toSinhalaNumber } from './data.js';