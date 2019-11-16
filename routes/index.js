var express = require('express');
var router = express.Router();
var path = require('path');



router.get('/api/health', function(req, res, next) {
  res.json({
  	app: 'project-3',
  	health: 200
  });
});

router.get('/api/cheese/:id', (req, res) => {
	console.log('REQEUST CHEESE ID: ', req.params.id);
	res.json({
		name: "Humbolt Fog",
		price: 1500,
		description: "The yummiest of yummy Cheeses"
	});
});

/* GET - React Application */
router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;