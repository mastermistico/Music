'use strict';

module.exports = function(Music) {
	var shopId = 1
	console.log("MUSIC",Music.exists)
  /*Music.getName = function(shopId, cb) {
    Music.all( shopId, function (err, instance) {
        response = "Name of coffee shop is " + instance.name;
        cb(null, response);
        console.log(response);
    });
  }

  Music.remoteMethod (
    'getName', 
    {
      http: {path: '/appy', verb: 'get'},
      accepts: {arg: 'Id', type: 'string', http: { source: 'query' } },
      returns: {arg: 'Artist', type: 'string'}
     }
  );*/
	
};
