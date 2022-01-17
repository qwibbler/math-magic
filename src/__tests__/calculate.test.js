import calculate from '../logic/calculate';

describe('Test: Calculate:', () => {
  test('Button = AC', () => {
    expect(calculate({ total: '1', next: '0', operation: '*' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  describe('Button === number', () => {
    test('Obj next = 0, Button = 0', () => {
      expect(calculate({ total: '1', next: '0', operation: '*' }, '0')).toEqual(
        { total: '1', next: '0', operation: '*' },
      );
    });

    test('Obj next = 0, Button = 2', () => {
      expect(calculate({ total: '1', next: '0', operation: '*' }, '2')).toEqual(
        { total: '1', next: '2', operation: '*' },
      );
    });

    test('Obj operation, next = 2, Button = 3', () => {
      expect(calculate({ total: '1', next: '2', operation: '*' }, '3')).toEqual(
        { total: '1', next: '23', operation: '*' },
      );
    });

    test('Obj operation, next = null, Button = 3', () => {
      expect(
        calculate({ total: '1', next: null, operation: '*' }, '3'),
      ).toEqual({ total: '1', next: '3', operation: '*' });
    });

    test('Obj operation = null, next = 2, Button = 3', () => {
      expect(
        calculate({ total: '1', next: '2', operation: null }, '3'),
      ).toEqual({ total: null, next: '23' });
    });

    test('Obj operation = null, next = null, Button = 3', () => {
      expect(
        calculate({ total: '1', next: null, operation: null }, '3'),
      ).toEqual({ total: null, next: '3' });
    });
  });

  describe('Button === .', () => {
    test('Obj next = 1.2, Button = .', () => {
      expect(
        calculate({ total: '1', next: '1.2', operation: null }, '.'),
      ).toEqual({ total: '1', next: '1.2', operation: null });
    });

    test('Obj next = 12, Button = .', () => {
      expect(
        calculate({ total: '1', next: '12', operation: null }, '.'),
      ).toEqual({ total: '1', next: '12.', operation: null });
    });

    test('Obj operation, next = null, Button = .', () => {
      expect(
        calculate({ total: '1', next: null, operation: '+' }, '.'),
      ).toEqual({ next: '0.' });
    });

    test('Obj operation and next = null, total = 1.2, Button = .', () => {
      expect(
        calculate({ total: '1.2', next: null, operation: null }, '.'),
      ).toEqual({ total: null, next: '0.' });
    });

    test('Obj operation and next = null, total = 12, Button = .', () => {
      expect(
        calculate({ total: '12', next: null, operation: null }, '.'),
      ).toEqual({ total: '12.' });
    });

    test('Obj = null, Button = .', () => {
      expect(
        calculate({ total: null, next: null, operation: null }, '.'),
      ).toEqual({ next: '0.' });
    });
  });

  describe('Button === =', () => {
    test('Obj operation, total = 1, next = 2, Button = =', () => {
      expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual(
        { total: '3', next: null, operation: null },
      );
    });

    test('Obj operation = null, next = 2, total = 1, Button = =', () => {
      expect(
        calculate({ total: '1', next: '2', operation: null }, '='),
      ).toEqual({});
    });

    test('Obj operation, next = null, total = 1, Button = =', () => {
      expect(
        calculate({ total: '1', next: null, operation: '+' }, '='),
      ).toEqual({});
    });

    test('Obj operation = null, next = null, total = 1, Button = =', () => {
      expect(
        calculate({ total: '1', next: null, operation: null }, '='),
      ).toEqual({});
    });
  });

  describe('Button === +/-', () => {
    test('Obj next = 2, Button = +/-', () => {
      expect(
        calculate({ total: '1', next: '2', operation: '+' }, '+/-'),
      ).toEqual({ total: '1', next: '-2', operation: '+' });
    });

    test('Obj next = -2, Button = +/-', () => {
      expect(
        calculate({ total: '1', next: '-2', operation: '+' }, '+/-'),
      ).toEqual({ total: '1', next: '2', operation: '+' });
    });

    test('Obj next = null, total = 1, Button = +/-', () => {
      expect(
        calculate({ total: '1', next: null, operation: '+' }, '+/-'),
      ).toEqual({ total: '-1', next: null, operation: '+' });
    });

    test('Obj next = null, total = -1, Button = +/-', () => {
      expect(
        calculate({ total: '-1', next: null, operation: '+' }, '+/-'),
      ).toEqual({ total: '1', next: null, operation: '+' });
    });

    test('Obj next = null, total = null, Button = +/-', () => {
      expect(
        calculate({ total: null, next: null, operation: '+' }, '+/-'),
      ).toEqual({});
    });
  });

  describe('Button is operation', () => {
    test('Obj operation and next = null, total = 1, Button = +', () => {
      expect(
        calculate({ total: '1', next: null, operation: null }, '+'),
      ).toEqual({ total: '1', next: null, operation: '+' });
    });

    test('Obj operation, next = null, total = 1, Button = +', () => {
      expect(
        calculate({ total: '1', next: null, operation: '-' }, '+'),
      ).toEqual({ total: '1', next: null, operation: '+' });
    });

    test('Obj operation, next = 2, total = 1, Button = -', () => {
      expect(calculate({ total: '1', next: '2', operation: '+' }, '-')).toEqual(
        { total: '3', next: null, operation: '-' },
      );
    });

    test('Obj operation, next = 2, total = 1, Button = -', () => {
      expect(calculate({ total: '1', next: '2', operation: '+' }, '-')).toEqual(
        { total: '3', next: null, operation: '-' },
      );
    });

    test('Obj next = null, operation = +, total = 1, Button = -', () => {
      expect(
        calculate({ total: '1', next: null, operation: null }, '-'),
      ).toEqual({ total: '1', next: null, operation: '-' });
    });

    test('Obj = null, Button = -', () => {
      expect(
        calculate({ total: null, next: null, operation: null }, '-'),
      ).toEqual({});
    });

    test('Obj operation and total = null, next = 1, Button = -', () => {
      expect(
        calculate({ total: null, next: '1', operation: null }, '-'),
      ).toEqual({ total: '1', next: null, operation: '-' });
    });
  });
});
