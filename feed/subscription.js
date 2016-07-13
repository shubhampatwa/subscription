var mongoose=require('mongoose');
var User=mongoose.model('User');
module.exports=function(app){

	app.post('/subscription',function(req,res){
		User.findOne({username:req.body.username},function(err,user){
			if (err) {
				return res.json(err)
			}
			if(!user)
			{
				return res.json(req.body.username+" not found");
			}
			// var user=new User();
			user.subscription.push({topic:req.body.topic});
			user.save(function(err,user){
				if(err){
					return res.json(err);
				}
				return res.json(user);
			});
		});
	});
}	