// //Module Pattern

// let Bank = (function() {
//     let BankBalance = 15000;

//     function checkBalance() {
//         console.log(`Your Balance is : ${BankBalance}`);
//     }

//     function setBalance(amount) {
//         BankBalance = amount;
//         console.log(`Your New Balance is : ${BankBalance}`);
//     }

//     function withdraw(amount) {
//         BankBalance -= amount;
//         console.log(`You Withdrawn : ${amount}`);
//     }

//     return {
//         checkBalance,
//         setBalance,
//         withdraw
//     }
// })();

// Bank.checkBalance();
// Bank.setBalance(20000);
// Bank.withdraw(5000);
// Bank.checkBalance();





// //Revealing Module Pattern

// let Bank = (function() {
//     let BankBalance = 15000;

//     function checkBalance() {
//         console.log(`Your Balance is : ${BankBalance}`);
//     }

//     function setBalance(amount) {
//         BankBalance = amount;
//         console.log(`Your New Balance is : ${BankBalance}`);
//     }

//     function withdraw(amount) {
//         BankBalance -= amount;
//         console.log(`You Withdrawn : ${amount}`);
//     }

//     return {
//         check: checkBalance,
//         set: setBalance,
//         take: withdraw
//     }
// })();

// Bank.check();
// Bank.set(20000);
// Bank.take(5000);
// Bank.check();






// //Factory Pattern

// function createStock(name, price) {
//     let stock = 10;

//     return {
//         name: name,
//         price: price,

//         buy(quantity) {
//             if (quantity <= stock) {
//                 stock -= quantity;
//                 console.log(`Bought: ${quantity}   Left Stock: ${stock}`);
//             }
//             else {
//                 console.error(`Insufficient Stock, we have only ${stock} items`);
//             }
//         },

//         getStock() {
//             console.log(`Available Stock: ${stock}`);
//         }
//     };
// }

// let iphone = createStock("Iphone", 70000);
// let kitkat = createStock("Kitkat", 10);

// iphone.getStock();
// iphone.buy(3);
// iphone.getStock();
// iphone.buy(8);
// iphone.getStock();








// //Observer pattern

class createYoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update("Thanks for Subscribing!");
        
    }
    unsubscribe(user)  {
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update("Sorry to see you go!");
    }

    notify(msg) {
        this.subscribers.forEach((sub) => sub.update(msg));
    }
}


class user {
    constructor(name) {
        this.name = name;
    }

    update(msg) {
        console.log(`${this.name}, ${msg}`);
    }
}

let channel = new createYoutubeChannel();

let user1 = new user("Pratap");
let user2 = new user("John");

channel.subscribe(user1);
channel.subscribe(user2);


channel.notify("New video is live on the channel");

channel.unsubscribe(user1);
channel.unsubscribe(user2);