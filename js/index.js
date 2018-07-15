/*
* @Author: chenxu
* @Date:   2018-07-14 10:05:21
* @Last Modified by:   chenxu
* @Last Modified time: 2018-07-15 11:48:32
*/
jQuery(document).ready(function($) {
	var done = [];
	$(".corner1").css({
		top: '-150px',
		width: '300px',
		height: '300px',
		left: '-150px'
	});
	$(".corner2").css({
		bottom: '-150px',
		width: '300px',
		height: '300px',
		right: '-150px'
	});
	$("#fullpage").fullpage({
		sectionsColor: ['#fff', 'orange', '#C0C0C0', '#fbfbfb'],
		anchors:['page1', 'page2' , 'page3' , 'page4'],
		navigation: true,
		navigationPosition: 'right',
		showActiveTooltip: false,
		slidesNavigation: false,
		controlArrows: false,
		resize: true,		//字体缩放
		loopHorizontal: true,		//横向循环
		verticalCentered: false,	//垂直居中
		lockAnchors: false,		//锁定锚链接,地址栏不显示
		afterLoad: function (link,index) {
			// console.log(index.index);

			switch (index.index) {
				case 0:
					p1Animat(true);
					break;
				case 1:
					setInterval(function () {
						$.fn.fullpage.moveSlideRight();
					},4000)
				 	break;
				case 2:
					p3Animat(true);
					break;
				case 3:
					p4Animat(true);
					break;
			}
		},
		// onLeave: function  (link,index) {
		// 	console.log(link.index);

		// 	switch (link.index) {
		// 		case 0:
		// 			p1Animat(false);
		// 			break;
		// 		case 1:
		// 		 	break;
		// 	}
		// },
		afterSlideLoad:function (a,b,index) {
			// console.log(index.index);
			switch (index.index) {
				//第yi个横幅
				case 0:
					p2s1(true);
					break;
				//第er个横幅
				case 1:
					p2s2(true);
					break;
				case 2:
					p2s3(true);
					break;
			}
		}
	});
	//视差效果
	$('#scene1').parallax({
	  // calibrateX: false,
	  // calibrateY: true,
	  // invertX: false,
	  // invertY: true,
	  // limitX: false,
	  // limitY: 10,
	  // scalarX: 2,
	  // scalarY: 8,
	  // frictionX: 0.2,
	  // frictionY: 0.8,
	  // originX: 0.0,
	  // originY: 1.0
	});         
	// p2 s1 结构开始
	function p2s1 (start) {
		var li = $(".slide1>.w>ul").children("li");
		for(var i = 0, length1 = li.length; i < length1; i++){
			span = $(li[i]).children("span");
			span.addClass("hvr-glow");
			switch (i) {
				case 0:
					$(span).animate({
				  		width: "40%"
				  	  },1000).css({
				  	  	backgroundColor: '#da4b30'
				  	  });
					break;
				case 1:
					$(span).animate({
				  		width: "25%"
				  	  },1000).css({
				  	  	backgroundColor: '#686596'
				  	  });
					break;
				case 2:
					$(span).animate({
				  		width: "37%"
				  	  },1000).css({
				  	  	backgroundColor: '#a9a8a9'
				  	  });
					break;
				case 3:
					$(span).animate({
				  		width: "28%"
				  	  },1000).css({
				  	  	backgroundColor: '#33bf18'
				  	  });
					break;
				case 4:
					$(span).animate({
				  		width: "32%"
				  	  },1000).css({
				  	  	backgroundColor: '#da4b30'
				  	  });
					break;
				case 5:
					$(span).animate({
				  		width: "37%"
				  	  },1000).css({
				  	  	backgroundColor: '#a9a8a9'
				  	  });
					break;
				case 6:
					$(span).animate({
				  		width: "30%"
				  	  },1000).css({
				  	  	backgroundColor: '#686596'
				  	  });
					break;
				case 7:
					$(span).animate({
				  		width: "25%"
				  	  },1000).css({
				  	  	backgroundColor: '#33bf18'
				  	  });
					break;
			}
		}
	}
	// p2 s2 结构开始
	function p2s2 (start) {
		// console.log('开始了')
		$("#Apache").circleChart({
		color: "#da4b30",
		value: 65,
      	startAngle: 180,
      	speed: 3000,
      	animation: "easeInOutCubic",
      	text: "Apache",
      	textCenter: true,
      	size:200,

		});
		$("#Nginx").circleChart({
			color: "#33bf18",
			value: 30,
	      	startAngle: 180,
	      	speed: 3000,
	      	animation: "easeInOutCubic",
	      	text: "PHP",
	      	textCenter: true,
	      	size: 200,

		});
		$("#php").circleChart({
			color: "#686596",
			value: 55,
	      	startAngle: 180,
	      	speed: 3000,
	      	animation: "easeInOutCubic",
	      	text: "Python",
	      	textCenter: true,
	      	size:200,

		});
		$("#git").circleChart({
			color: "#a9a8a9",
			value: 60,
	      	startAngle: 180,
	      	speed: 3000,
	      	animation: "easeInOutCubic",
	      	text: "MySQL",
	      	textCenter: true,
	      	size:200,
		});
		var data = $(".slide2").find('.circleChart');
		data.addClass("hvr-glow");

	}
	
	// p2 s3 结构开始
	function p2s3 (start) {
		$(".c1").animate({
	  		height: "70%"
	  	  },1000);
	  	  $(".c2").animate({
	  		  height: "50%"
	  	  },1000)
	  	  $(".c3").animate({
	  		  height: "43%"
	  	  },1000)
	  	var data = $(".slide3").find('.r_out');
		data.addClass("hvr-glow");
		}
	// p1 动画开始

	function p1Animat () {
		if (done[0]) {
			console.log('执行过了')
		}else {
			var s1c = $(".s1>.w").children();
			// console.log(s1c)
			Animat(s1c[3],"fadeInLeft",0);
			Animat(s1c[4],"fadeInUp",500);
			Animat(s1c[5],"fadeInUp",1000);
			done.push(true);
		}	
	}

	//p3 动画

	function p3Animat () {
		if (done[1]) {
			console.log('执行过了')
		}else {
			var s3c = $(".s3>.w").children();
			// console.log(s1c)
			Animat(s3c[0],"fadeInRightBig",0);
			Animat(s3c[1],"fadeInRightBig",200);
			Animat(s3c[2],"fadeInRightBig",500);
			done.push(true);
		}
	}

	//p4 动画 
	function p4Animat () {
		if (done[2]) {
			console.log('执行过了')
		}else {
			var title = $(".s4").find('h1');
			var big = $(".s4").find('.big');
			var small = $(".s4").find('.small');
			var p = $(".s4").find('p');
			Animat(title,"fadeInUp",0);
			Animat(big,"fadeInUp",0);
			Animat(small,"fadeInUp",200);
			// Animat(p,"fadeInUp",500);
			done.push(true);
		}
	}
	//动画函数,给对象绑定动画
	function Animat (obj,name,time) {
		// console.log(obj)
		// console.log(name)
		// console.log(time)
		$(obj).hide();
		setTimeout(function () {
			$(obj).show();
			$(obj).addClass('animated '+name);
		},time)
		
	}
});