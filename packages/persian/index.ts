export interface DateFormatter {
  name: string;
  locale: string;
  format(date?: Date): string;
}

const persianFormatter: DateFormatter = {
  name: 'persian',
  locale: 'fa-IR',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('fa-IR');
  },
};

export default persianFormatter;
