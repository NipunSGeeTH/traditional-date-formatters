export interface DateFormatter {
  name: string;
  locale: string;
  format(date?: Date): string;
}

const nepaliFormatter: DateFormatter = {
  name: 'nepali',
  locale: 'ne-NP',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('ne-NP');
  },
};

export default nepaliFormatter;
