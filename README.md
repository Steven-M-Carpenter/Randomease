# Randomease
This library creates reusable random number generators as callable methods to simplify development.

* **randomZeroToOne** - Generates a random decimal number between 0 and 1.

| Arguments     | Sample Syntax                   | Sample Return      |
|---------------|---------------------------------|--------------------|
| None          | `random.randomZeroToOne();`     | 0.8809215549698584 |




* **randomZeroOrOne** - Generates exactly the whole numbers 0 or 1.
    | Arguments     | Sample Syntax                   | Sample Return      |
    |---------------|---------------------------------|--------------------|
    | None          | `random.randomZeroOrOne();`     | 0 or 1             |




* **randomOneToNegOne** - Generates a random decimal number between -1 and 1.
    | Arguments     | Sample Syntax                     | Sample Return       |
    |---------------|-----------------------------------|---------------------|
    | None          | `random.randomOneToNegOne();`     | -0.8518953471323494 | 




* **randomOneOrNegOne** - Generates exactly the whole numbers -1 or 1.
    | Arguments     | Sample Syntax                     | Sample Return       |
    |---------------|-----------------------------------|---------------------|
    | None          | `random.randomOneOrNegOne();`     | -1 or 1             | 




* **randomZeroTo** - Generates a whole number between 0 and the inclusive upper limit you specify.
    | Arguments     | Sample Syntax                     | Sample Return       |
    |---------------|-----------------------------------|---------------------|
    | `max`         | `random.randomOneOrNegOne();`     | 22                  | 




* **randomBetween** - Generates a whole number in a inclusive range you specify.
    | Arguments      | Sample Syntax                      | Sample Return       |
    |----------------|------------------------------------|---------------------|
    | `min, max`     | `random.randomBetween(1, 15);`     | 12                  | 




* **randomBetweenExcept** - Generates a whole number in a range excluding the values passed in an array.
    | Arguments                    | Sample Syntax                                   | Sample Return      |
    |------------------------------|-------------------------------------------------|--------------------|
    | `min, max, [exclusions]`     | `random.randomBetweenExcept(1, 5, [2, 4]);`     | 3                  | 




* **randomBetweenToLen** - Generates whole numbers within a range and adds them to an array of a length you specify.
    | Arguments              | Sample Syntax                              | Sample Return       |
    |------------------------|--------------------------------------------|---------------------|
    | `min, max, length`     | `random.randomBetweenToLen(1, 10, 4);`     | [1, 5, 7, 6]        | 




* **randomCoords** - Generates X and Y coordinates bound by the inclusive ranges you specify.
    | Arguments                    | Sample Syntax                                    | Sample Return       |
    |------------------------------|--------------------------------------------------|---------------------|
    | `minX, maxX, minY, maxY`     | `random.randomCoords(-400, 400, -300, 300);`     | [371, -220]         | 



