const path = require('path')

// // to check what kind of file it is
let ext = path.extname('D:\Programming languages\NODEJS\Node_Module_System\f1.txt')
let basename = path.basename('D:\\Programming languages\\NODEJS\\Node_Module_System\\f1.txt')

console.log(ext)
console.log(basename)

// // currentpath name and directory name
console.log(__filename)
console.log(__dirname)