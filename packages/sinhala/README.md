# traditional-date-formatters - Sinhala 🇱🇰

Format dates in traditional Sinhala style.

## Installation
```bash
npm install traditional-date-formatters
```

## Usage
```javascript
import { formatSinhala } from 'traditional-date-formatters';

formatSinhala(new Date('2025-01-01'), 'short');
// => බදාදා

formatSinhala(new Date('2025-01-01'), 'medium');
// => දුරුතු මස බදාදා

formatSinhala(new Date('2025-01-01'), 'traditional');
// => 2025 දුරුතු මස 01 වන බදාදා
```

## Available Styles

- `short` - Weekday only
- `medium` - Month + Weekday
- `long` - Year + Month + Date + Weekday
- `traditional` - Full traditional format (default)
- `gregorian` - Gregorian month in Sinhala
- `full` - Gregorian date with traditional month
- `sinhala-numerals` - Using Sinhala numeral characters
- `full` - Complete with both months
- `sinhala-numerals` - Using Sinhala numerals

## License

MIT