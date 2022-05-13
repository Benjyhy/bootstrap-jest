import { expect, test, describe } from "@jest/globals";
import getCompatibility from "./script.js";

// test('Phillip Martins is 41% compatible with "class"', () => {
//     expect(getCompatibility('Phillip Martins', 'iiiii', 'class')).toStrictEqual({fn_compat: 41, sn_compat: 0});
// });

test('"Phillip Martins" should be less than 10% compatible with "class"', () => {
    let result = getCompatibility("Phillip Martins", "iiiii", "class");
    console.log(result);
    expect(result.fn_compat).toBeLessThan(10);
});

test('"Spiderman" and "Superman" should have the same compatiblity on "Hero"', () => {
    let result = getCompatibility("Spiderman", "Superman", "Hero");
    expect(result.fn_compat).toBe(result.sn_compat);
});

test("The compatibility check function should return numbers", () => {
    let result = getCompatibility("Leo", "Elo", "Hello");
    expect(typeof result.fn_compat).toBe("number");
    expect(typeof result.sn_compat).toBe("number");
});

describe("Name is incompatible", () => {
    test("If there are only digits", () => {
        let result = getCompatibility("0000", "Terry", "Earth");
        expect(result.fn_compat).toBeFalsy();
        expect(result.sn_compat).toBeTruthy();
    });
    test("If there is not at least one common letter in it and in the comparator", () => {
        let result = getCompatibility("Sofy", "Mateo", "Matthieu");
        expect(result.fn_compat).toBeFalsy();
        expect(result.sn_compat).toBeTruthy();
    });
});
