const ElectronsCalculator = require('../src/electrons_calculator');

describe('Electrons Calculator', function() {	

	beforeEach(function() {
		calculator = new ElectronsCalculator();
	});

	it('should return 0 for an empty dice array', function() {
		expect(calculator.calculate([])).toEqual(0);
	});
});

