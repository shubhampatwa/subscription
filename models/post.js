 var mongoose=require('mongoose');

 var postSchema=new mongoose.Schema({
 	topic:{type:String,require:true},
 	heading:{type:String,require:true},
 	post:{type:String,require:true},
 	date:{type:Date,default:Date.now}
 });
 mongoose.model('Post',postSchema);