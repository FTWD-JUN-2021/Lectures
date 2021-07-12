const makeToast = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Toast is toasty')
    }, 3000)
})


const makeJuice = new Promise((res, rej) => {
    setTimeout(() => res('Juice is made'), 5000)
})

Promise.all([makeToast, makeJuice]).then(res => {
    //console.log(res)
})


console.log(1)

makeJuice.then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})
// setTimeout(() => console.log('hello'), 0)

console.log(2)


// makeToast.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.error(err)
// })

// async function toastIt() {
//     let res;
//     try {
//         res = await makeToast
//         console.log(res)
//     }
//     catch {
//         console.error('Ran into an error')
//     }
// }

// toastIt()