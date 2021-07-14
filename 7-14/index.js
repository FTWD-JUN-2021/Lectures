const mongoose = require('mongoose');
const Cat = require("./models/Cat")
const CatLady = require("./models/CatLady")

mongoose.connect('mongodb://localhost:27017/july14', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log(res, 'conneced?')
        Cat.create({ name: 'Panini', age: 1000 }).then(res => console.log(res))

    }).catch(err => console.log(err))



// // When successfully connected
// mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));

// // If the connection throws an error
// mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));

// // When the connection is disconnected
// mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

// // If the Node process ends, close the Mongoose connection
// process.on('SIGINT', () => {
//     mongoose.connection.close(() => {
//         console.log('Mongoose default connection disconnected through app termination');
//         process.exit(0);
//     });
// });



// const kitty = new Cat({ name: 'Reference', age: 2, favFoods: ['ice cream', 454], catLadyId: `60ef131237e7f042c1dd795a` });

// kitty.save((err, res) => {
//     // const martha = new CatLady({ name: 'Fran', cats: [res._id] })
//     // martha.save()
// })

// CatLady.find().populate('cats').then(res => console.log(res))

// Cat.find().then(res => console.log(res))

// const kitty = new Cat({ name: 'Garfield', age: 55, favFoods: ['Lasagna', 454] });

// kitty.save().then(() => console.log('meow'));


// Cat.create({ name: 'Panini', age: 1 }).then(res => console.log(res))


// Cat.deleteMany({ name: "Fluffy" }).then(res => console.log(res))

// Cat.deleteOne({ _id: '60ef0b2907f80d401c88a436' }).then(res => console.log(res))

// Cat.findByIdAndDelete('60ef0b757d9dc4403e8aea42').then(res => console.log(res))

// Cat.findByIdAndUpdate(`60ef0bc1b57fc0405d09647a`, { age: 2 }).then(res => console.log(res))

// Cat.updateOne({ name: "Panini" }, { $inc: { age: 1 } }).then(res => console.log(res))

// Cat.findOne({ name: "Panini" }).then(panini => {
//     panini.age += 1
//     panini.save()
// })