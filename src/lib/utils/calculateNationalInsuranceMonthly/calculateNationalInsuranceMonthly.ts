export const calculateNationalInsuranceMonthly = (preTaxPay: number) => {
	const lowerLimit = 1048;
	const upperLimit = 4189;
	const standardRate = 0.12;
	const upperRate = 0.02;

	let nationalInsurance: number;

	if (preTaxPay >= upperLimit) {
		nationalInsurance =
			(upperLimit - lowerLimit) * standardRate + (preTaxPay - upperLimit) * upperRate;
	} else if (preTaxPay > lowerLimit) {
		nationalInsurance = (preTaxPay - lowerLimit) * standardRate;
	} else {
		nationalInsurance = 0;
	}

	return Math.round(nationalInsurance * 100) / 100;
};
