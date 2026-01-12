# Traditional Date Formatters 🌍

A collection of traditional date formatters from cultures around the world. Each culture maintains its own package with traditional calendar systems, month names, and weekday names.

## 🎯 Philosophy

Simple, focused formatters - no complex calculations, just beautiful traditional formatting!

## 📦 Available Formatters

| Culture | Package | Status |
|---------|---------|--------|
| 🇱🇰 Sinhala | [@traditional-formatters/sinhala](./packages/sinhala) | ✅ Available |
| 🇳🇵 Nepali | [@traditional-formatters/nepali](./packages/nepali) | 🚧 Coming soon |
| 🇮🇷 Persian | [@traditional-formatters/persian](./packages/persian) | 🚧 Coming soon |
| 🇪🇹 Ethiopian | [@traditional-formatters/ethiopian](./packages/ethiopian) | 🚧 Coming soon |
| 🇨🇳 Chinese | [@traditional-formatters/chinese](./packages/chinese) | 🚧 Coming soon |
| 🇮🇱 Hebrew | [@traditional-formatters/hebrew](./packages/hebrew) | 🚧 Coming soon |
| 🇮🇳 Tamil | [@traditional-formatters/tamil](./packages/tamil) | 🚧 Coming soon |
| 🇹🇭 Thai | [@traditional-formatters/thai](./packages/thai) | 🚧 Coming soon |

## 🚀 Quick Start

### Sinhala (Sri Lankan)
```bash
npm install @traditional-formatters/sinhala
```
```javascript
import { formatSinhala } from '@traditional-formatters/sinhala';

formatSinhala(new Date('2025-01-01'), 'traditional');
// => 2025 දුරුතු මස 01 වන බදාදා
```

### Nepali (Coming Soon)
```bash
npm install @traditional-formatters/nepali
```
```javascript
import { formatNepali } from '@traditional-formatters/nepali';

formatNepali(new Date('2025-01-01'), 'traditional');
// => २०८१ पौष १७ बुधबार
```

## 🤝 Contributing

We welcome formatters from ALL cultures! 

### Add Your Culture's Formatter

1. Read [Adding a Formatter Guide](./docs/adding-formatter.md)
2. Create your package in `packages/your-culture`
3. Follow the same simple structure as Sinhala
4. Submit a Pull Request

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