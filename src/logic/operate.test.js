import operate from './operate';

describe('Test: Operate:', () => {
  test('1 + 2 = 3', () => {
    expect(operate('1', '2', '+')).toBe('3')
  })

  test('3 - 2 = 1', () => {
    expect(operate('3', '2', '-')).toBe('1')
  })

  test('2 x 3 = 6', () => {
    expect(operate('2', '3', 'x')).toBe('6')
  })

  test('6 ÷ 2 = 3', () => {
    expect(operate('6', '2', '÷')).toBe('3')
  })

  test('6 ÷ 0 = error', () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.")
  })

  test('6 % 5 = 1', () => {
    expect(operate('6', '5', '%')).toBe('1')
  })

  test('6 % 0 = error', () => {
    expect(operate('6', '0', '%')).toBe("Can't find modulo as can't divide by 0.")
  })

  test('6 ^ 0 = error', () => {
    expect(() => { operate('6', '0', '^'); }).toThrowError("Unknown operation '^'")
  })
})