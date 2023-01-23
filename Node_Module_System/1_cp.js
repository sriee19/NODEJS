// // child process is a node module used to create sub process within a script
// // You can perform diff tasks with your script by just using some method

// // To call our child process

const pr = require('child_process')

// pr.execSync('calc')

// // To access from another file
console.log('output \n'+ pr.execSync('node demo.js'))