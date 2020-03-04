const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipe-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

// Recipe.create({
//   title: "Mofongo",
//   level: "Amateur Chef",
//   ingredients: ["platanos", "otras cositas", "sal"],
//   cuisine: "PRican",
//   dishType: "Dish",
//   duration: 60,
//   creator: "GRP",
//   date: "2020-03-01"
// });


// Recipe.insertMany(data)

// Recipe.findByIdAndUpdate('5e601f91014a2de5070dc0f5', {duration : 100}).then(res => console.log(res))

// Recipe.deleteOne({title: 'Carrot Cake'}).then(res => console.log(res))
