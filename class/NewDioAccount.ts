import { DioAccount } from "./DioAccount";

// Criar um novo tipo de conta a partir da DioAccount
// - Esta conta não deve receber novos atributos
// - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

export class NewDioAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // SOBRESCREVER O MÉTODO DE DEPÓSITO
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const newValue = value + 10; // Adiciona 10 ao valor do depósito
      this.increaseBalance(newValue);

      console.log(
        `Você depositou R$ ${newValue}. Saldo atual: R$ ${this.getBalance()}`
      );
    }
  };
}
