$(function(plax){
	var x=document.documentElement.clientHeight;
	var y=plax("").outerHeight();
	plax("#parallax").css("height",x-y+"px");
	plax("#parallax").css("left",50+"%");
	plax(".skyd1").plaxify({"xRange":0,"yRange":0,"invert":true}),
	plax(".skyd2").plaxify({"xRange":70,"yRange":20,"invert":true}),
	plax(".skyd3").plaxify({"xRange":0,"yRange":40,"invert":true}),
	plax(".skyu1").plaxify({"xRange":0,"yRange":0,"invert":true}),
	plax(".skyu2").plaxify({"xRange":20,"yRange":30,"invert":false}),	
	plax(".skyu3").plaxify({"xRange":0,"yRange":50,"invert":false}),
	plax.plax.enable();
});