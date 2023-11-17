import { describe, it, expect } from 'vitest';
import { calculateNationalInsuranceMonthly } from './calculateNationalInsuranceMonthly';

describe('calculateNationalInsuranceMonthly', () => {
	it('should return 234.24 when passed a monthly pre-tax pay of 3000', () => {
		const nationalInsuranceAmount = calculateNationalInsuranceMonthly(3000);
		expect(nationalInsuranceAmount).toBe(234.24);
	});

	it('should return 249.24 when passed a monthly pre-tax pay of 3125', () => {
		const nationalInsuranceAmount = calculateNationalInsuranceMonthly(3125);
		expect(nationalInsuranceAmount).toBe(249.24);
	});

	it('should return 0 when passed a monthly pre-tax pay of 1000', () => {
		const nationalInsuranceAmount = calculateNationalInsuranceMonthly(1000);
		expect(nationalInsuranceAmount).toBe(0);
	});
});
