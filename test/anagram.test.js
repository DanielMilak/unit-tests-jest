const { isAnagram } = require("../src/anagram");

test("test", async () => {
    expect(isAnagram('amor', 'roma')).toBeTruthy();
});
