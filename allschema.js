const mongoose = require("mongoose");

const tableStructure = new mongoose.Schema({
    fullname: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: { type: String, required: false},
    email: { type: String, required: false }
});

module.exports = mongoose.model("User", tableStructure);

// const tableStructure2 = new mongoose.Schema({
//     bookname: { type: String, required: true },
//     price: { type: Number, required: true },
//     qty: { type: String, required: false },
//     seller: { type: String, required: false }
// });

// module.exports = mongoose.model("Book", tableStructure2);