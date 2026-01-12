module.exports = {
  name: 'persian',
  locale: 'fa-IR',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('fa-IR');
  },
};
