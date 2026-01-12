export interface DateFormatter {
  name: string;
  locale: string;
  format(date?: Date): string;
}

const chineseFormatter: DateFormatter = {
  name: 'chinese',
  locale: 'zh-CN',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('zh-CN');
  },
};

export default chineseFormatter;
