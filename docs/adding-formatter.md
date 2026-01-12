# Adding a Formatter

Steps to add a new formatter package:

1. Create a new folder under `packages/` with a suitable name (e.g. `kannada`).
2. Add an `index.js` that exports an object with at least `name`, `locale` (optional), and `format(date)` function.
3. Add a `package.json` with `name`, `version`, `main`, and `license` fields.
4. Add a `README.md` describing the formatter and usage examples.
5. Add a short example in `examples/all-formatters.js` to show it in action.
6. Run `node examples/all-formatters.js` to verify the output.

Notes:
- Use the host environment's `toLocaleDateString` as a starting point for locale-based formatters.
- For non-Gregorian calendars (e.g., Ethiopian), consider referencing a dedicated calendar library or adding clear notes in the package README.
