describe("/legal", () => {
  it("contains terms and conditions, imprint, and privacy policy", () => {
    cy.visit("/legal");
    cy.contains("Terms and Conditions");
    cy.contains("Imprint");
    cy.contains("Privacy Policy");
  });
});
