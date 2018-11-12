//************************************************************************************************************************/
// This library creates reusable random number generators as callable methods to simplify development.
// 
//  randomZeroToOne = Generates a random decimal number between 0 and 1.
//      Arguments:  None
//      Sample syntax:  random.randomZeroToOne();
//      Sample return:  0.8809215549698584
//
//  randomZeroOrOne = Generates exactly the whole numbers 0 or 1.
//      Arguments:  None
//      Sample syntax:  random.randomZeroOrOne();
//      Sample return:  0 or 1
//
//  randomOneToNegOne = Generates a random decimal number between -1 and 1.
//      Arguments:  None
//      Sample syntax:  random.randomOneToNegOne();
//      Sample return:  -0.8518953471323494 or 0.3907834419503651
//
//  randomOneOrNegOne = Generates exactly the whole numbers -1 or 1.
//      Arguments:  None
//      Sample syntax:  random.randomOneOrNegOne();
//      Sample return:  -1 or 1
//
//  randomZeroTo = Generates a whole number between 0 and the inclusive upper limit you specify.
//      Arguments:  max
//      Sample syntax:  random.randomZeroTo(30);
//      Sample return:  25
//
//  randomBetween = Generates a whole number in a inclusive range you specify.
//      Arguments:  min,  max
//      Sample syntax:  random.randomBetween(1, 15);
//      Sample return:  12
//
//  randomBetweenExcept = Generates a whole number in a range excluding the values passed in an array.
//      Arguments:  min, max, [exclusions]
//      Sample syntax:  random.randomBetweenExcept(1, 10, [2, 4, 6, 8, 10]);
//      Sample return:  7
//
//  randomBetweenToLen = Generates whole numbers within a range and adds them to an array of a length you specify.
//      Arguments:  min, max, length
//      Sample syntax:  random.randomBetweenToLen(1, 10, 7);
//      Sample return:  [1,5,7,6,3,3,8]
//
//  randomCoords = Generates X and Y coordinates bound by the inclusive ranges you specify.
//      Arguments:  minX, maxX, minY, maxY
//      Sample syntax:  random.randomCoords(-400, 400, -300, 300);
//      Sample return:  [371, -220]
//
//***********************************************************************************************************************/
let random = {
    randomZeroToOne: () => {
        let result = Math.random();
        return result;
    },
    randomZeroOrOne: () => {
        let result = Math.round(Math.random());
        return result;
    },
    randomOneToNegOne: () => {
        let result = Math.random() * 2 - 1;
        return result;
    },
    randomOneOrNegOne: () => {
        let result = Math.round(Math.random()) * 2 - 1;
        return result;
    },
    randomZeroTo: (max) => {
        let result = Math.floor(Math.random() * (max + 1));
        return result; 
    },
    randomBetween: (min, max) => {
        let result = Math.floor(Math.random() * (max - min + 1) ) + min;
        return result;
    },
    randomBetweenExcept: (min, max, except) => {
        if(!except)
            except = [];
        let value = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        let result = 0;
        while(except.indexOf(result = value(min,max)) > -1) { }
        return result;
    },
    randomBetweenToLen: (min, max, length) => {
        let result = [];
        for (let i = 1; i <= length; i++) {
            result.push(Math.floor(Math.random() * (max - min + 1) ) + min);
    } 
        return result;
    },
    randomCoords: (minX, maxX, minY, maxY) => {
        let valueX = Math.floor(Math.random() * (maxX - minX + 1) ) + minX;
        let valueY = Math.floor(Math.random() * (maxY - minY + 1) ) + minY;
        let result = [valueX, valueY];
        return result;
    },
}; 