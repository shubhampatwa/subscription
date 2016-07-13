var mongoose=require('mongoose');
var Post=mongoose.model('Post');

module.exports=function (app) {
	
	app.post('/post',function(req,res){
		var post = new Post();
		post.topic=req.body.topic;
		post.heading=req.body.heading;
		post.post=req.body.post;
		post.save(function(err,post){
			if (err) {
				return err;
			}
			return res.json(post);
		})
	})

}