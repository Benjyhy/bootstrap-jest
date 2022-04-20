import getCompatibility from "./script";

test('check compat', () => {
    expect(getCompatibility('Phillip Martins', 'Josephine', 'class')).toBe('41');
});