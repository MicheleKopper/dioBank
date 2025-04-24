import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  // Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  // Apenas contas com o status true podem fazer empréstimo

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.increaseBalance(value);
      console.log(
        `Você pegou um empréstimo de R$ ${value} | Saldo atual: R$ ${this.getBalance()}`
      );
    } else {
      console.log("Conta inválida para empréstimo.");
    }
  };
}
