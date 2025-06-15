// electronsCalculator.js

class ElectronsCalculator {
    calculate(dice) {

        if (!Array.isArray(dice)) {
            return "Input must be an array of numbers";
        }

        if (dice.length < 4 || dice.length > 6) {
            return "Input must be an array of 4-6 numbers";
        }

        let total = 0;

        for (const die of dice) {
            if (die === 3) {
                total += 2;
            } else if (die === 5) {
                total += 4;
            }
        }
        return total;
    }
}

module.exports = ElectronsCalculator;
