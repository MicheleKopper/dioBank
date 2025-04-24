export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  // [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

  // DEPÓSITO
  // - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(
        `Você depositou R$ ${value} | Saldo atual: R$ ${this.balance}`
      );
    }
  };

  // SAQUE
  // - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou R$ ${value} | Saldo atual: R$ ${this.balance}`);
    } else if (!this.validateStatus()) {
      console.log("Conta inválida para saque!");
    } else {
      console.log("Saldo insuficiente para saque!");
    }
  };

  // LER SALDO
  public getBalance = (): number => {
    return this.balance;
  };

  // AUMENBTAR SALDO
  public increaseBalance(value: number): void {
    this.balance += value;
  }

  // DIMINUIR SALDO
  // > MAIOR QUE
  // < MENOR QUE
  public decreaseBalance(value: number): void {
    if (this.balance >= value) {
      this.balance -= value;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida!");
  };
}
