const mongoose = require('mongoose');

const employeeschema = new mongoose.Schema({
   name:{type:String},
   position:{type:String},
   office:{type:String},
   salary:{type:Number}
});

var Employee = mongoose.model('Employee',employeeschema);

module.exports = Employee;