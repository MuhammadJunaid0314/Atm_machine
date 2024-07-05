import inquirer from "inquirer";

let my_balance = 1000000;
let my_pin = 2255;

let pin_answer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin",
  type: "number",
});
if (pin_answer.pin === my_pin) {
  console.log("your pin is correct");

  let operation_answer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["withdraw", "Fast cash", "Check balance"],
    },
  ]);

  //  if user select withdraw
  if (operation_answer.operation === "withdraw") {
    let amount_answer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      }
    ]);
    if (amount_answer.amount <= my_balance) {
      let balance = my_balance - amount_answer.amount;
      console.log(` The remaing Balance ${balance} `);
    } else {
      console.log(`You have insufficient balance`);
    }
  }
  // if user select for fast cash
  else if (operation_answer.operation === "Fast cash") {
    let fastcash_answer = await inquirer.prompt([
      {
        name: "amount",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "30000"],
      },
    ]);
    if (fastcash_answer.amount <= my_balance) {
      let balance2 = my_balance - fastcash_answer.amount;
      console.log(`the remaing balance is ${balance2}`);
    } else console.log(`you have insufficient amount`);
  } else if (operation_answer.operation === "Check balance") {
    console.log(my_balance);
  }
} else {
  console.log("your pin is wrong");
}
