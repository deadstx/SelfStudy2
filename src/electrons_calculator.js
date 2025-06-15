// electronsCalculator.js

class ElectronsCalculator {
    calculate(dice) {
        let total = 0;

        for (const die of dice) {
            if (die === 3) {
                total += 2;
            } else if (die === 5) {
                total += 4;
            } else if (die === 2 || die === 1 || die === 4 || die === 6 || die === 7 || die === 0) {
                total += 0;
            }
        }

        return total;
    }
}


module.exports = ElectronsCalculator;