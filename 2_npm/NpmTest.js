const figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log("testing")
});

// install figlet module
// npm i figlet
/////////////////////////////////////////////////////////////////////////////////////
//node modules are not pushed into git!!


