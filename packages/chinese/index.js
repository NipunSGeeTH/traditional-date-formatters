module.exports = {
  name: 'chinese',
  locale: 'zh-CN',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('zh-CN');
  },
};
