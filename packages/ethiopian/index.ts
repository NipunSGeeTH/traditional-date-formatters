export interface DateFormatter {
  name: string;
  locale: string;
  format(date?: Date): string;
}

const ethiopianFormatter: DateFormatter = {
  name: 'ethiopian',
  locale: 'am-ET',
  format(date = new Date()) {
    // Fallback: use locale string—proper Ethiopian calendar conversion is out of scope for this starter
    return new Date(date).toLocaleDateString('am-ET');
  },
};

export default ethiopianFormatter;
