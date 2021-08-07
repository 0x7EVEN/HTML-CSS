// const events = require('events');
// const {SendVerification, SendWelcome} = require("./users");
// const eventEmmiter = new events();

// function registered () {
//      eventEmmiter.on('user registered', SendVerification);
//      eventEmmiter.on('user registered', SendWelcome);
//      eventEmmiter.emit('user registered');
// }
// registered();

const terminal = require("readline");
const terminal1 = terminal.createInterface({input: process.stdin, output: process.stdout});

let books = ['DSA', 'Materring JS', 'Intro to Node'];
terminal1.question("what is your name ", function(name) {
     console.log(`Welcome >>> ${name}`); start();
     function start () {
          console.log("Here is list of options for Books Library:");
          console.log(" 1 > for list all books");
          console.log(" 2 > add book");
          console.log(" 3 > Quit");
          terminal1.question('Enter query : ', (query) => {
               console.log(`you entered :  ${query}`);
               if (query == 1) {
                    console.log(books);
                    start();
               } else if (query == 2) {
                    terminal1.question('Please enter book to add : ', (book) => {
                         books.push(book);
                         console.log('added the book : ', book);
                         start();
                    });
               } else if (query == 3) {
                    quit();
               } else {
                    console.log("Please enter valid query!");
                    start();
               }
          });
     } function quit () {
          terminal1.question('press Y to exit and N to return to main : ', (q) => {
               if (q == 'Y') {
                    console.log("Exited. Bye Bye!");
                    terminal1.close();
               } else if (q == 'N') {
                    start();
               } else {
                    console.log("Enter valid query !");
                    quit();
               }
          });
     }
});