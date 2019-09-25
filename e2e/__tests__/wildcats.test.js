const request = require('../request');
const db = require('../db');

describe('wildcats api', () => {
  beforeEach(() => {
    return db.dropCollection('wildcats');
  });

  const jaguar = {
    name: 'Jaguar',
    size: 'Large',
    weight: 165,
    coloring: ['spots', 'brown', 'yellow'],
    details: {
      friendly: false,
      funFact: 'Jaguars have no defined breeding season and will mate any time of year.'
    }
  },
});