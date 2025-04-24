import { CompanyAccount } from './class/CompanyAccount'
import { NewDioAccount } from './class/NewDioAccount'
import { PeopleAccount } from './class/PeopleAccount'

// CONTA PESSOAL
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Michele Kopper', 100)
console.log('Conta Pessoal:' , peopleAccount)

// DEPOSITO
peopleAccount.deposit(200)

// SAQUE
peopleAccount.withdraw(50)

// SALDO INSUFICIENTE
peopleAccount.withdraw(500)

// ATUALIZAR NOME
peopleAccount.setName('Michele')
console.log('Nome atualizado para:', peopleAccount.getName())



// CONTA EMPRESARIAL
const companyAccount: CompanyAccount = new CompanyAccount('MKode', 200)
console.log('Conta Empresarial:', companyAccount)

// DEPOSITO
companyAccount.deposit(500)

// SAQUE
companyAccount.withdraw(100)

// EMPRÉSTIMO
companyAccount.getLoan(1000)

// ATUALIZAR NOME
companyAccount.setName('MKode Tec')
console.log('Nome atualizado para:', companyAccount.getName())



// NOVA CONTA PESSOAL
const newDioAccount: NewDioAccount = new NewDioAccount( "Mii", 300);
console.log("Nova conta Pessoal:", newDioAccount);

// DEPOSITO
newDioAccount.deposit(1000);

// SAQUE
newDioAccount.withdraw(500);

// ATUALIZAR NOME
newDioAccount.setName("Michele");
console.log("Nome atualizado para:", newDioAccount.getName());