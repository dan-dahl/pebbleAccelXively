//Change "YOUR_XIVELY_FEED_NUMBER" and "YOUR_XIVELY_APIKEY" 

simply.accelConfig({rate:'10'});
/*global setInterval*/
function loadAccel(){
	var xivelyUrl = 'https://api.xively.com/v2/feeds/YOUR_XIVELY_FEED_NUMBER';
   
      
simply.accelPeek(function(e) {
	//X,Y,Z Axis 
	var x = e.accel.x;
    var y = e.accel.y;
    var z = e.accel.z;
		
	if (e.accel.vibe === false ) {
	
       ajax({ url: xivelyUrl, type: 'json', method: 'put', cache: false,
       headers:{'X-ApiKey':'YOUR_XIVELY_APIKEY'},
  data: {"version":"1.0.0",
          "datastreams":[
        {"id":"X",
          "current_value": x },
        {"id":"Z",
          "current_value": z },
        {"id":"Y",
          "current_value": y }]
																				 
		}
	});
 }
});
	}

setInterval(function(){loadAccel();},5000);