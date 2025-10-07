import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 1;
    const b = 2;

    // Estímulo
    const result = sum(a, b);

    // Comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    // Preparación
    const emptyArray: number[] = [];

    // Estímulo
    const result = addArray(emptyArray);

    // Comportamiento esperado
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    // Preparación
    const a = 1;
    const b = 2;
    const c = 3;
    const array = [a, b, c];

    // Estímulo
    const result = addArray(array);

    // Comportamiento esperado
    expect(result).toBe(array.reduce((prev, curr) => prev + curr, 0));
  });
});
