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

	it('should return an error message when input is an empty dice', function() {
		expect(calculator.calculate([])).toBe("Input must be an array of 4-6 numbers");
	});

	it('should return an error message when input is a dice with less than 4 numbers', function() {
		expect(calculator.calculate([3])).toBe("Input must be an array of 4-6 numbers");
	});

	it('should return an error message when input is a dice with more than 6 numbers', function() {
		expect(calculator.calculate([5, 1, 2, 3, 4, 6, 3])).toBe("Input must be an array of 4-6 numbers");
	});

	it('should return 0 for [1, 2, 4, 6]', function() {
		expect(calculator.calculate([1, 2, 4, 6])).toEqual(0);
	});

	it('should return 4 for [2, 2, 3, 3]', function() {
		expect(calculator.calculate([2, 2, 3, 3])).toEqual(4);
	});

	it('should return 2 for [6, 6, 4, 4, 1, 3]', function() {
		expect(calculator.calculate([6, 6, 4, 4, 1, 3])).toEqual(2);
	});

	it('should return 12 for [3, 5, 3, 5, 4, 2]', function() {
		expect(calculator.calculate([3, 5, 3, 5, 4, 2])).toEqual(12);
	});

	it('should return an error message when input is a string', function() {
		const testString = calculator.calculate("string");
		expect(testString).toBe("Input must be an array of numbers");
	});
});