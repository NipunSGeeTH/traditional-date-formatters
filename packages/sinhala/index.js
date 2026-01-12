module.exports = {
  name: 'sinhala',
  locale: 'si-LK',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('si-LK');
  },
};
