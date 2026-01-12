module.exports = {
  name: 'nepali',
  locale: 'ne-NP',
  format(date = new Date()) {
    return new Date(date).toLocaleDateString('ne-NP');
  },
};
