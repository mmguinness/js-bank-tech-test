const BankAccount = require('./bankAccount');

describe('BankAccount', () => {
  it('has a default balance of zero',() => {
    const bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0)
  })

  it('can accept and store a deposit of specified amount',() => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    expect(bankAccount.balance).toBe(1000)
  })

})