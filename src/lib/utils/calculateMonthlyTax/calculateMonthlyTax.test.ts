import { calculateMonthlyTax } from './calculateMonthlyTax';
import { describe, it, expect } from 'vitest';

describe('calculateMonthlyTax', () => {
	it('should return the income tax amount of 414.40 for 3125', () => {
		const taxAmount = calculateMonthlyTax(3125);
		expect(taxAmount).toBe(415.5);
	});

	it('should return the income tax amount of 0 for 1000', () => {
		const taxAmount = calculateMonthlyTax(1000);
		expect(taxAmount).toBe(0);
	});

	it('should return the income tax amount of 317.22 for 2638.60', () => {
		const taxAmount = calculateMonthlyTax(2638.6);
		expect(taxAmount).toBe(318.22);
	});

	it('should return the income tax amount of 752.66 for 4500', () => {
		const taxAmount = calculateMonthlyTax(4500);
		expect(taxAmount).toBe(752.66);
	});

	it('should return the income tax amount of 4475.25 for 12500', () => {
		const taxAmount = calculateMonthlyTax(12500);
		expect(taxAmount).toBe(4475.25);
	});

	it('should return the income tax amount of 2785.98 for 9166.67', () => {
		const taxAmount = calculateMonthlyTax(9166.67);
		expect(taxAmount).toBe(2785.98);
	});
});
