// spec/support/electrons_calculator_spec.js

const ElectronsCalculator = require('../src/electrons_calculator');

describe('ElectronsCalculator', () => {
	let calculator;

	beforeEach(() => {
		calculator = new ElectronsCalculator();
	});

	it('should return 6 for dice [1, 2, 3, 4, 5]', () => {
		// Arrange
		const dice = [1, 2, 3, 4, 5];
		const expected = 6;

		// Act
		const result = calculator.calculate(dice);

		// Assert
		expect(result).toBe(expected);
	});
});