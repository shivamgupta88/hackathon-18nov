// const name = require('./util.js')
// const fs = require('fs')
// const add = require('./util.js')
// a = add(2,3)
// console.log(a)
// // fs.appendFileSync('notes.txt' , 'this  is written in notes')

// lect 4
// const validator = require( 'validator')
// const fs = require('fs')

// const getNotes = require('./notes.js')

// // console.log(getNotes())

// console.log( validator.isURL("shivamgmail.com"))

// lect 5

// const chalk = require("chalk");
// const { error } = require("console");
// const fs = require("fs");

// const msg = chalk.bold.blue.inverse.bold("hello");
// console.log(msg);

// // to manupulate with node index.js value 
// const add = process.argv[2];


// //  chapter 4
// if (add === "shivam") {
//   console.log("hello shivam ");
// } else if (add === "gupta") {
//   console.log("hello gupta ji ");
// } else {
//   console.log("hello " + add);
// }



// 4.3

const chalk = require('chalk')
const { command, describe } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// console.log(process.argv)
// console.log(yargs.argv)



// add, remove , read , list 

// create add command 

yargs.command({
    command:'add' , 
    describe:'Add a new note',
    builder: {
        titles: {
            describe:'Note title'
        },
        handler: function () {
            console.log('Adding a new note ', argv)
        }
    }
    ,
    handler: function () {
        console.log('Adding a  new node!')
    }

})

// Create a remove command 

yargs.command({
    command:'remove', 
    describe:'Remove a note',
    handler:function (){
        console.log('Removing a command')
    }
})

// read 

yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function () {
        console.log('Reading a command')
    }
})

// list

yargs.command({
    command:'list',
    describe:'making list',
    handler : function () {
        console.log('Creating a list')
    }
})
console.log(yargs.argv)

//4.4


// const chalk = require('chalk')
// const yargs = require('yargs')
// const getNotes = require('./notes.js')

