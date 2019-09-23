const Wildcat = require('../lib/models/wildcat');
const mongoose = require('mongoose');

describe('Wildcat model', () => {
  it('validates model with all fields', () => {
    const data = {
      name: 'Jaguar',
      size: 'Large',
      weight: 165,
      coloring: ['spots', 'brown', 'yellow'],
      details: {
        friendly: false,
        funFact: 'Jaguars have no defined breeding season and will mate any time of year.'
      }
    };
    const wildcat = new Wildcat(data);
    const errors = wildcat.validateSync();
    expect(errors).toBeUndefined();

    const json = wildcat.toJSON();

    expect(json).toEqual({
      ...data,
      _id: expect.any(Object)
    });
  });
  it('checks for required fields', () => {
    const data = {};
    const wildcat = new Wildcat(data);
    const { errors } = wildcat.validateSync();
    expect(errors.name.kind).toBe('required');
    expect(errors.weight.kind).toBe('required');
  });
  it('enforces min weight of 0', () => {
    const data = {
      weight: -1
    };
    const wildcat = new Wildcat(data);
    const { errors } = wildcat.validateSync();
    expect(errors.weight.kind).toBe('min'); 
  })
});