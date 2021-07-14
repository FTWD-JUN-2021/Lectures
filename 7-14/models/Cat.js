//Model for each collection that we have 
const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', {
    name: String,
    age: { type: Number, default: 0 },
    favFoods: [String],
    catLadyId: mongoose.Schema.Types.ObjectId,
});


module.exports = Cat
// export default Cat