

var ready = function(){
	var iphone5 = "http://spacioc.com/system/products/case_images/000/000/026/medium/bdc482ec6715a965fc90514c6ff84f8a.png?1428693555";
	var motog = "http://spacioc.com/system/products/case_images/000/000/018/medium/97b8f77d3925f06b8cdde01f46267f48.png?1421292509";
	var iphone6 = "http://spacioc.com/system/products/case_images/000/000/025/medium/de44dd01392b226bd1b208a846ca64b8.png?1428693464"; 
	var galaxys5 = "http://spacioc.com/system/products/case_images/000/000/027/medium/6a6c455dbbdfe29eccf20d035b5544a5.png?1428693666"; 
	$("#designer").click(function(){
		$("#devices").hide();
		$("#cases").hide();
		$("#designers").toggle();
	});
	$("#device").click(function(){
		$("#designers").hide();
		$("#cases").hide();
		$("#devices").toggle();
	});
	$(".showcases").click(function(){

		$("#cases").show();
	})
	$(".hoverc").mouseover(function(){
		if(this.id=== "i6"){
			$("#hovertry").attr("src",iphone6)
			
		}
		else if (this.id === "i5"){
			$("#hovertry").attr("src",iphone5)
		}
		else if (this.id === "gs5"){
			$("#hovertry").attr("src",galaxys5)
		}
		else if (this.id==="mg"){
			$("#hovertry").attr("src",motog)

		}

	});
	$("li").click(function(){
		$("nav .active").removeClass("active");
		$(this).attr("class","active");
	});

};

$(document).ready(ready);
$(document).on('page:load', ready);

