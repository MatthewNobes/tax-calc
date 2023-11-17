export const calculateMonthlyTax = (preTaxPay: number) => {
	const brackets = [
		{ lowerMonthlyLimit: 1047.5, upperMonthlyLimit: 4189.17, rate: 0.2 },
		{ lowerMonthlyLimit: 4189.18, upperMonthlyLimit: 10428.33, rate: 0.4 },
		{ lowerMonthlyLimit: 10428.33, upperMonthlyLimit: 99999999, rate: 0.45 }
	];

	let taxTotal = 0;

	// initial check if the user even needs to pay tax
	if (preTaxPay > brackets[0].lowerMonthlyLimit) {
		if (preTaxPay <= brackets[0].upperMonthlyLimit) {
			// pay tax at lower bracket
			taxTotal = (preTaxPay - brackets[0].lowerMonthlyLimit) * 0.2;
		} else if (preTaxPay <= brackets[1].upperMonthlyLimit) {
			// pay tax at lower and Higher brackets

			// although there is not personal allowance the bottom end is still worked out earning between the first band upper and lower limits
			const amountToPayAtLowerRate =
				(brackets[0].upperMonthlyLimit - brackets[0].lowerMonthlyLimit) * brackets[0].rate;

			let newPersonalAllowance = brackets[0].lowerMonthlyLimit;

			let extraToPayAtHigherRate = 0;

			// if you exceed £100,000, the personal allowance is reduced by £1 for every £2 over the allowance
			if (preTaxPay > 8333.34) {
				newPersonalAllowance = newPersonalAllowance - (preTaxPay - 8333.4) / 2;

				extraToPayAtHigherRate = 1047.5 - newPersonalAllowance;
			}

			const amountToPayAtHigherRate =
				(preTaxPay - brackets[1].lowerMonthlyLimit + extraToPayAtHigherRate) * brackets[1].rate;

			console.log(amountToPayAtHigherRate);

			taxTotal = amountToPayAtLowerRate + amountToPayAtHigherRate;
		} else if (preTaxPay > brackets[2].lowerMonthlyLimit) {
			// although there is not personal allowance the bottom end is still worked out earning between the first band upper and lower limits
			const amountToPayAtLowerRate =
				(brackets[0].upperMonthlyLimit - brackets[0].lowerMonthlyLimit) * brackets[0].rate;

			// the personal allowance amount is added in at the 40% rate
			const amountToPayAtHigherRate =
				(brackets[1].upperMonthlyLimit -
					brackets[1].lowerMonthlyLimit +
					brackets[0].lowerMonthlyLimit) *
				brackets[1].rate;

			const amountToPayAtAdditionalRate =
				(preTaxPay - brackets[2].lowerMonthlyLimit) * brackets[2].rate;

			taxTotal = amountToPayAtLowerRate + amountToPayAtHigherRate + amountToPayAtAdditionalRate;
		}
	}

	return Math.round(taxTotal * 100) / 100;
};
