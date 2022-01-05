const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Name is required"],
    trim: true,
    lowercase: true,
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative calories aren't real.");
    },
  },
});

const Food =  mongoose.model("Food", FoodSchema);
Food.save(function(error) {
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
    error = Food.validateSync();
  assert.equal(error.errors['name'].message,
    'Path `name` is required.');
})
 // 2nd Way
 if(!Food.name instanceof String){
   console.log("Please Enter valid name consists of strings")
 } 
 if(!Food.type instanceof Number){
  console.log("Please Enter calories in terms of numbers")
} 

module.exports = Food;
