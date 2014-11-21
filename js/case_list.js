$(function(){

	var bodywidth = $(window).width();
	var bodyheight = $(window).height();
	var bgwidth = (bodywidth-1108)/2;
	var bgmargin = bgwidth+1108;

	$("#banner_lbg").css({"width":bgwidth+"px"});
	$("#banner_rbg").css({"width":bgwidth+"px"});

	$(window).resize(function(){

	var bodywidth = $(window).width();
	var bodyheight = $(window).height();
	var bgwidth = (bodywidth-1108)/2;
	var bgmargin = bgwidth+1108;

	$("#banner_lbg").css({"width":bgwidth+"px"});
	$("#banner_rbg").css({"width":bgwidth+"px"});

	})

	$(".main_nav")
	.mouseover(function(){
		$(".blackline").css("display","none");
		$(this).parent().find(".blackline").css("display","block");
	})

})