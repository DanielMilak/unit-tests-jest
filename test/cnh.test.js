const { obterCnh } = require("../src/cnh");

test("Idade CNH", async () => {
    expect(obterCnh(21)).toBeTruthy();
});

/*
test("Idade CNH", async () => {
    expect(obterCnh(16)).toBeTruthy();
});
*/
