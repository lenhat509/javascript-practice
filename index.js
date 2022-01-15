// const file = __filename.split('/').splice(3).join('/');
// console.log(file);
// console.log(__dirname);

// var interval = setInterval((arg)=> { 
//     console.log("Hello")
//     console.log(arg) 
// }, 5000, [1,2,3,4,5])


// console.log(interval + " start!")

// var time = setTimeout(() => {
//     clearInterval(interval)
//     console.log(interval + " stop!")
// }, 11000)

// process.on('beforeExit', () => {
//     console.log(process.env)
// })

// process.on('exit', () => {
//     console.log("exit")
// })

setImmediate(() => {
    console.log("Hello")
})

console.log(process.argv)