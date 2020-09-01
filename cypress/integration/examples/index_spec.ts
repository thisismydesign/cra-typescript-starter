describe("index", () => {
  it("contains name", () => {
    cy.visit("/", { qs: { env: "CI" } });
    cy.contains("C-Hive");
  });

  it("it doesn't scroll (test that the layout is sized correctly)", () => {
    cy.visit("/", { qs: { env: "CI" } });
    cy.window().then((window) => {
      window.scrollTo(1000, 1000);
      expect(window.scrollY).to.eq(0);
      expect(window.scrollX).to.eq(0);
    });
  });
});
