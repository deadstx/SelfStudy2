// electronsCalculator.js

class ElectronsCalculator {
    calculate(dice) {
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