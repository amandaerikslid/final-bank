// BANK ACCOUNT


const account = {
  // här har jag allt annat som inte är atm(), alltså allt som inte är en meny
  accountName: "Amanda",
  balance: 5000,
  getBalance: function () {
    alert(`Your account balance is: ${this.balance}`);
    /*alert("Your account balance is: " + this.balance);
    alert = prompt men INGEN input ruta
    använd alert för att endast visa nåt
    */
   atm();
  },
  getAccountName: function () {
      alert(`Your account name is ${this.accountName}`);
      atm();
  },
  deposit: function () {
    var depositAmount = parseFloat(prompt(`How much would you like to deposit?`)
    );
    if (isNaN(depositAmount)) {
      alert("It's not a number, please try again");
    } else {
      if (depositAmount <= -0){
        alert("The number is too low.")
      } else {
        this.balance = this.balance + depositAmount;
        alert('You have deposited ' + depositAmount + ' SEK')
      }
  }
    atm();  
    console.log(depositAmount);
   // this.balance = this.balance + depositAmount;
    //alert('You have deposited ' + depositAmount + ' SEK')
    // BYTTE PLATS på texten ovan, rad 30 och 31, och la i ett If else statement för att inte få upp "you have deposited *this* amount"
    // just nu om jag deposit 100 SEK så står det 5000100 istället för 5100, hur lösa? 
    // LÖST!!!! PARSEFLOAT MÅSTE ANVÄNDAS SÅ DET BLIR ETT NUMMER OCH INTE STRING
  },

  withdrawl: function () {
    const withdrawlAmount = parseFloat(prompt(`How much would you like to withdrawl?`));
    console.log(withdrawlAmount);
    if (isNaN(withdrawlAmount)) {
      alert("It's not a number, please try again");
    } else {
      if (withdrawlAmount >= this.balance){
        alert("You don't have enough money in your bank.")
    }  else if (withdrawlAmount <= -0){
      alert("The number is too low.")
    } else {
    this.balance = this.balance - withdrawlAmount;
    alert('You have withdrawled ' + withdrawlAmount + ' SEK')
    } 
    // jag vill att summan som vi tar ut kommer upp i en alert KLART
    // summan vi tar ut ska ge ett minus på kontot när vi kollar nästa gång KLART
    // hur göra så att sista alerten kommer upp om man först skriver för liten summa men sedan skriver rätt därefter??
    }
    atm();
  }
};

function atm() {
  // här inne ska det visas en meny
  let choice =
    prompt(
      "Select a choice 1.) See balance 2.) Make deposit 3.) Withdrawal money 4.) See account name 5.) Exit"
  );
  //console.log(choice);
  // parseInt eller parseFloat???? Osäker..... läs på mer

  if (choice == 1) {
    account.getBalance();
    /* getBalance är en funktion så glöm inte att använda ()
    account.balance det här funkar för propertyn balance då det inte är en funktion
    */
  } 

  else if (choice == 2) {
    account.deposit();
  } 

  else if (choice == 3) {
    account.withdrawl();
  }
  
  else if (choice == 4) {
    account.getAccountName();
  } 

  else if (choice == 5) {
   alert("Thanks, you have exited the bank.")
  }


  else {
    alert('Wrong input')
    atm()
  }


  /*här ska jag kolla vilket värde choice är
  beroende på värdet av choice ska du visa usern output.
  */
}


atm();
// måste kalla på menyn annars körs den inte






// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder

// - balance, should be the data type number
// this property should contain the total amount of the account

// - getBalance, should be a function
// this function should display the total amount of the account to the user

// - deposit, also a function
// this function should be able to deposit money onto the balance of the account

// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:

// const variableName = 10;
// isNaN(variableName);

// this is the function atm(), I've created some start code for you
/*
function atm() {
const message = parseFloat(prompt("Display message"));
()
// you need to answer the question why we are using parseFloat() method here?
// you can answer as a comment in your code, and yes you need to some research of your own

// to show the right output based on the user input you can
// either use a if/else statement or a switch.
// Write a comment and motivate your choice
*/