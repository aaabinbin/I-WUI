$(function(){
	var normalpic = ["../img/normal_1.png","../img/normal_2.png","../img/normal_3.png","../img/normal_4.png","../img/normal_5.png"];
	var activepic = ["../img/active_1.png","../img/active_2.png","../img/active_3.png","../img/active_4.png","../img/active_5.png"];
	var bannerpic = ["../img/banner_1bg.png","../img/banner_2.png","../img/banner_3.png","../img/banner_3.png","../img/banner_3.png"];
	var serviceNorpic = ["../img/service_pic_nor_1.png","../img/service_pic_nor_2.png","../img/service_pic_nor_3.png","../img/service_pic_nor_4.png"];
	var serviceActpic = ["../img/service_pic_act_1.png","../img/service_pic_act_2.png","../img/service_pic_act_3.png","../img/service_pic_act_4.png"];
	$(".nor_act_pic")
	.click(function(){
		var _this = $(this);
		var indexVal = _this.index();
		$("#active_1").find("img").attr("src",normalpic[0]);
		$("#active_2").find("img").attr("src",normalpic[1]);
		$("#active_3").find("img").attr("src",normalpic[2]);
		$("#active_4").find("img").attr("src",normalpic[3]);
		$("#active_5").find("img").attr("src",normalpic[4]);
		_this.find("img").attr("src",activepic[indexVal]);
		$("#banner").css("background-image","url("+bannerpic[indexVal]+")");
 	})
 	$(".service_pic")
 	.mouseover(function(){
 		var _this = $(this);
 		var indexVal = _this.index();
 		_this.find("a").find("img").attr("src",serviceActpic[indexVal]);
 	})
 	.mouseout(function(){
 		var _this = $(this);
 		var indexVal = _this.index();
 		_this.find("a").find("img").attr("src",serviceNorpic[indexVal]);
 	})
})