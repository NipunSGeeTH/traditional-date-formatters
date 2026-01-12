const sinhala = require('../packages/sinhala');
const nepali = require('../packages/nepali');
const persian = require('../packages/persian');
const ethiopian = require('../packages/ethiopian');
const chinese = require('../packages/chinese');

const formatters = [sinhala, nepali, persian, ethiopian, chinese];

console.log('Date formatting examples (using system locale support):');
formatters.forEach((f) => {
  console.log(`- ${f.name} (${f.locale}):`, f.format(new Date()));
});
