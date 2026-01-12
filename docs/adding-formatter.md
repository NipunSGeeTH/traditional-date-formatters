# Adding a New Formatter

Thank you for contributing! Here's how to add your culture's traditional date formatter.

## 1. Create Your Package Folder
```bash
cd packages
mkdir your-culture-name
cd your-culture-name
npm init -y
```

## 2. Update package.json
```json
{
  "name": "@traditional-formatters/your-culture",
  "version": "1.0.0",
  "description": "Traditional [Your Culture] date formatter",
  "main": "index.js",
  "type": "module",
  "keywords": ["your-culture", "date", "formatter", "traditional"],
  "author": "Your Name",
  "license": "MIT",
  "publishConfig": {
    "access": "public"
  }
}
```

## 3. Create data.js

Define your traditional names:
```javascript
// data.js

// Weekday names in your language
export const WEEKDAY_NAMES = [
  { native: 'Sunday in your language', en: 'Sunday' },
  { native: 'Monday in your language', en: 'Monday' },
  // ... add all 7 days
];

// Traditional month names
export const MONTH_NAMES = [
  { native: 'Month 1 in your language', en: 'Month1' },
  // ... add all 12 months
];

// If you have special numerals
export const NUMERALS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function toNativeNumber(num) {
  return String(num)
    .split('')
    .map(digit => NUMERALS[parseInt(digit)])
    .join('');
}
```

## 4. Create index.js
```javascript
// index.js

import { WEEKDAY_NAMES, MONTH_NAMES, toNativeNumber } from './data.js';

export function format(date, style = 'traditional') {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const weekday = d.getDay();
  
  const weekdayName = WEEKDAY_NAMES[weekday].native;
  const monthName = MONTH_NAMES[month].native;
  
  switch (style) {
    case 'short':
      return weekdayName;
      
    case 'medium':
      return `${monthName} ${weekdayName}`;
      
    case 'long':
      return `${year} ${monthName} ${day} ${weekdayName}`;
      
    case 'traditional':
      // Your culture's traditional format
      return `${year} ${monthName} ${day} ${weekdayName}`;
      
    default:
      return `${year} ${monthName} ${day} ${weekdayName}`;
  }
}

export function getWeekdayName(date, lang = 'native') {
  const d = typeof date === 'string' ? new Date(date) : date;
  const weekday = WEEKDAY_NAMES[d.getDay()];
  return lang === 'native' ? weekday.native : weekday.en;
}

export { WEEKDAY_NAMES, MONTH_NAMES, toNativeNumber } from './data.js';
```

## 5. Create README.md

Document your formatter with:
- Installation instructions
- Usage examples
- Cultural context
- Format styles available

## 6. Test It

Create a test file and make sure it works:
```javascript
import { format } from './index.js';

console.log(format(new Date(), 'traditional'));
```

## 7. Submit Pull Request

1. Commit your changes
2. Push to GitHub
3. Create a Pull Request
4. We'll review and help publish!

## Examples of Completed Formatters

Look at:
- `packages/sinhala` - Full implementation
- `packages/nepali` - Another example (if available)

## Questions?

Open an issue or ask in discussions!