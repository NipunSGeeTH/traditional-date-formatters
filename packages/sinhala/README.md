# @traditional-formatters/sinhala 🇱🇰

Format dates in traditional Sinhala style.

## Installation
```bash
npm install @traditional-formatters/sinhala
```

## Usage
```javascript
import { formatSinhala } from '@traditional-formatters/sinhala';

formatSinhala(new Date('2025-01-01'), 'short');
// => බදාදා

formatSinhala(new Date('2025-01-01'), 'medium');
// => දුරුතු මස බදාදා

formatSinhala(new Date('2025-01-01'), 'traditional');
// => 2025 දුරුතු මස 01 වන බදාදා
```

## Styles

- `short` - Weekday only
- `medium` - Month + Weekday
- `long` - Year + Month + Date + Weekday
- `traditional` - Full traditional format (default)
- `gregorian` - Gregorian month in Sinhala
- `full` - Complete with both months
- `sinhala-numerals` - Using Sinhala numerals

## License

MIT