describe("/legal", () => {
  it("contains terms and conditions, imprint, and privacy policy", () => {
    cy.visit("/cra-typescript-starter/#/legal", { qs: { env: "CI" } });
    cy.contains("Terms and Conditions");
    cy.contains("Imprint");
    cy.contains("Privacy Policy");
  });
});
