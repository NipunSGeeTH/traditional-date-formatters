# Traditional Date Formatters 🌍

A collection of traditional date formatters from cultures around the world. Each formatter provides traditional calendar systems, month names, and weekday names in various cultural formats.

## 🎯 Philosophy

Simple, focused formatters - no complex calculations, just beautiful traditional formatting!

## 📦 Available Formatters

| Culture | Status |
|---------|--------|
| 🇱🇰 Sinhala | ✅ Available |
| 🇳🇵 Nepali | 🚧 Coming soon |
| 🇮🇷 Persian | 🚧 Coming soon |
| 🇪🇹 Ethiopian | 🚧 Coming soon |
| 🇨🇳 Chinese | 🚧 Coming soon |

## 🚀 Quick Start

### Installation
```bash
npm install traditional-date-formatters
```

### Sinhala (Sri Lankan)
```javascript
import { formatSinhala } from 'traditional-date-formatters';

formatSinhala(new Date('2025-01-01'), 'traditional');
// => 2025 දුරුතු මස 01 වන බදාදා
```

### Available Formats
```javascript
import { formatSinhala } from 'traditional-date-formatters';

const date = new Date();

formatSinhala(date, 'short');        // සඳුදා
formatSinhala(date, 'medium');       // දුරුතු මස සඳුදා
formatSinhala(date, 'long');         // 2026 දුරුතු මස 12 සඳුදා
formatSinhala(date, 'traditional');  // 2026 දුරුතු මස 12 වන සඳුදා
formatSinhala(date, 'gregorian');    // 2026 ජනවාරි 12 සඳුදා
formatSinhala(date, 'full');         // 2026 ජනවාරි 12 වන සඳුදා (දුරුතු මස)
formatSinhala(date, 'sinhala-numerals'); // 2026 දුරුතු මස 12 වන සඳුදා (using traditional numerals)
```

## 🤝 Contributing

We welcome formatters from ALL cultures! 

### Add Your Culture's Formatter

1. Read [Adding a Formatter Guide](./docs/adding-formatter.md)
2. Create your implementation in `packages/your-culture`
3. Follow the same simple structure as Sinhala
4. Export your formatter from the main `index.ts`
5. Submit a Pull Request

### What We Need

- **Month names** in your language
- **Weekday names** in your language  
- **Traditional format** structure
- **Cultural context** documentation

No complex algorithms needed - just the traditional names and formats!

## 🎨 Use Cases

- **Cultural Apps** - Display dates in users' traditional formats
- **Festival Calendars** - Show traditional month names
- **Educational Tools** - Teach traditional calendar systems
- **Wedding Invitations** - Format dates traditionally
- **Temple/Religious Apps** - Display dates in cultural context

## 📖 Documentation

- [Contributing Guidelines](./docs/CONTRIBUTING.md)
- [Adding a New Formatter](./docs/adding-formatter.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)

## 🌟 Project Goals

1. **Preserve cultural heritage** through traditional date formatting
2. **Simple and maintainable** - no complex calculations
3. **Community-driven** - each culture maintains their own
4. **Well-documented** - with cultural context
5. **Easy to use** - simple API for developers

## 📜 License

MIT - Each package maintains its own license

## 💬 Community

- **Discussions**: Share ideas and ask questions
- **Issues**: Report bugs or request features
- **Pull Requests**: Contribute your culture's formatter!

---

**Built with ❤️ by the global community**

*Preserving traditional date formats for future generations*