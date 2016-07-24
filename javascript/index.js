window.onload=function(){
	// 导航栏显示	
	$('.nav-li').hover(function(){
		$(this).find('ul').show(100);
	},function(){
		$(this).find('ul').hide();
	})
	// 导航栏显示
	// banner图轮播
	$(function(){
		$(".banner").swBanner();
	});
	// banner图轮播
	// 选项卡
	$('.con-left .con').hide()
	$($('.con-left .con')[0]).show()
	$('.title').mouseover(function(){
		var num = $(this).index()
		$('.con-left .con').hide()
		$($('.con-left .con')[num]).show()
	})
	
	//选项卡 
	// 右下方轮播图
	var i=1;
	var time = setInterval(function(){
		i=i+1;
		console.log(i)
	},1000)

	// 右下方轮播图	

}