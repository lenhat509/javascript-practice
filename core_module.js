const path = require('path')

//return absolute path from relative path
console.log(path.resolve('./utils/index.js'))
//remove / , . ; convert // to /, remove "dir/.."
console.log(path.normalize('.//home/app//dir/..'))
//join the strings then normalize
console.log(path.join('/path', 'dir', '/home', '..'))