const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('has a default balance of zero',() => {
    const bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0)
  })

})