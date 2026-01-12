// examples/all-formatters.js

import { formatSinhala } from '@traditional-formatters/sinhala';
// import { formatNepali } from '@traditional-formatters/nepali';
// import { formatPersian } from '@traditional-formatters/persian';

const testDate = new Date('2025-01-01');

console.log('=== Traditional Date Formatters Demo ===\n');
console.log(`Input: ${testDate.toISOString().split('T')[0]}\n`);

// Sinhala
console.log('🇱🇰 Sinhala:');
console.log('  Short:       ', formatSinhala(testDate, 'short'));
console.log('  Medium:      ', formatSinhala(testDate, 'medium'));
console.log('  Traditional: ', formatSinhala(testDate, 'traditional'));
console.log('  Gregorian:   ', formatSinhala(testDate, 'gregorian'));
console.log('  Full:        ', formatSinhala(testDate, 'full'));
console.log();

// Nepali (when added)
// console.log('🇳🇵 Nepali:');
// console.log('  Traditional: ', formatNepali(testDate, 'traditional'));
// console.log();

// Persian (when added)
// console.log('🇮🇷 Persian:');
// console.log('  Traditional: ', formatPersian(testDate, 'traditional'));
// console.log();

console.log('Add more formatters to see them here!');
