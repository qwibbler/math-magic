import calculate from './calculate';

describe('Test: Calculate:', () => {
  const emptyObj = {
    total: null,
    next: null,
    operation: null,
  }
  const nonEmptyObj = {
    total: '1',
    next: '0',
    operation: '*',
  }

  test('Button = AC', () => {
    expect(calculate({
      total: '1',
      next: '0',
      operation: '*',
    }, 'AC')).toEqual(emptyObj)
  })

  describe('Button === number', () => {
    test('Obj next = 0, Button = 0', () => {
      expect(calculate({
        total: '1',
        next: '0',
        operation: '*',
      }, '0')).toEqual({})
    })

    test('Obj operation, next = 2, Button = 3', () => {
      expect(calculate({
        total: '1',
        next: '2',
        operation: '*',
      }, '3')).toEqual({
        total: '1',
        next: '23',
        operation: '*',
      })
    })

    test('Obj operation, next = null, Button = 3', () => {
      expect(calculate({
        total: '1',
        next: null,
        operation: '*',
      }, '3')).toEqual({
        total: '1',
        next: '3',
        operation: '*',
      })
    })

    test('Obj operation = null, next = 2, Button = 3', () => {
      expect(calculate({
        total: '1',
        next: '2',
        operation: null,
      }, '3')).toEqual({
        total: null,
        next: '23',
      })
    })

    test('Obj operation = null, next = null, Button = 3', () => {
      expect(calculate({
        total: '1',
        next: null,
        operation: null,
      }, '3')).toEqual({
        total: null,
        next: '3',
      })
    })
  })

  describe('Button === .', () => {
    test('Obj next = 1.2, Button = .', () => {
      expect(calculate({
        total: '1',
        next: '1.2',
        operation: null,
      }, '.')).toEqual({
        total: '1',
        next: '1.2',
        operation: null,
      })
    })

    test('Obj next = 12, Button = .', () => {
      expect(calculate({
        total: '1',
        next: '12',
        operation: null,
      }, '.')).toEqual({
        total: '1',
        next: '12.',
        operation: null,
      })
    })

    test('Obj operation, next = null, Button = .', () => {
      expect(calculate({
        total: '1',
        next: null,
        operation: '+',
      }, '.')).toEqual({
        next: '0.'
      })
    })
  })
})