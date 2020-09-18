var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// //adding a new cat
// var garfield = new Cat({
//     name: "Garfield",
//     age: 1,
//     temperament: "Grouchy" 
// });
// var garfield = new Cat({
//     name: "Sassy",
//     age: 1,
//     temperament: "Sassy" 
// });
// garfield.save(function(err, cat){
//     if(err){
//         console.log("Something is wrong.");
//     } else {
//         console.log("We saved the cat. Schrodinger will be unhappy.");
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats){
        if(err){
            console.log("Mannn, error.");
            console.log(err);
        } else {
            console.log("All the heckin Cats:");
            console.log(cats);
        }
    });
