1. The bug was the wrong usage of data type. The data type of two input numbers is string type. So if we simply add them together, it would become a cacatenation of two string and result will be a string type that stores the cacatenated result of two string numbers.
2. Explicitly convert num1 and num2 to numbers (integer) so that they can be added together.
