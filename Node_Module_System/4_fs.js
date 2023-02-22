// //files

const fs = require('fs')

// //read a file
// let fileContent = fs.readFileSync('f1.txt')

//buffer format output
// console.log('data to be printed ->  ', fileContent)

// //string output
// console.log('data to be printed ->  '+ fileContent)

// //writing in a file
// fs.writeFileSync('f2.txt','THIS IS F2')
// console.log('This file has been replaced')


//append a file
// fs.appendFileSync('f3.txt', '\n This file is updated')
// console.log('This file has been updated')


//deleting a file
// fs.unlinkSync('f2.txt')
// console.log('The file has been deleted')



//DIRECTORIES

//create a driectory

// fs.mkdirSync('Mydirectory')

//to check whats inside mydirectory

// let folderPath = 'D:\\Programming languages\\NODEJS\\Node_Module_System\\Mydirectory'

// let folderContent = fs.readdirSync(folderPath)

// console.log("Folder content \n" + folderContent)


//check wheather a directory exists or not

// let doesExist = fs.existsSync('Mydirectory')
// console.log('File doesExist\n' + doesExist)

//to remove a directory

fs.rmdirSync('Mydirectory')
console.log('The directory ahs been removed')