var mongoose = require('mongoose');
var User=mongoose.model('User');
var passport = require('passport');
module.exports = function(app){


	app.post('/login', function(req, res, next) {
	  passport.authenticate('local', function(err,user, info) {
	    if (err)
	     return next(err); 
	    if (!user) {
	      // req.flash('info','sorry information is not correct'); 
	      return res.json("sorry information is not correct");
	    }
	    req.logIn(user, function(err, info) {
	      if (err) 
	        return next(err);
	       console.log(JSON.stringify(req.user));
	      // req.flash('info','Hey '+ user.username +' Logged In Successfully!!');
	      return res.json(user); 
	    });
	  })(req, res, next);
	});
	

	app.post('/signup', function(req, res) {	
	  // console.log(req);

	
	  var user = new User();
	  user.username=req.body.username;
	  user.email=req.body.email;
	  user.password=req.body.password;
	  
	  user.save(function(err) {
	  	if(err){
	  		return res.json(err);
	  	}
	    req.logIn(user, function(err,success) {
	      // console.log(req.user);
	      return res.json(req.user);
	    });
	  });
	});

}