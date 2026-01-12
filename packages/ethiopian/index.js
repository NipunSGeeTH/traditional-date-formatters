module.exports = {
  name: 'ethiopian',
  locale: 'am-ET',
  format(date = new Date()) {
    // Fallback: use locale string—proper Ethiopian calendar conversion is out of scope for this starter
    return new Date(date).toLocaleDateString('am-ET');
  },
};
