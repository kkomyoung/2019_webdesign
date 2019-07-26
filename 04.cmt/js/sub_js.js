$(document).ready(function(){
			$(".language > ul > li").click(function(){
				var liNum = $(this).index();
				console.log(liNum);
				$(".language > ul > li").removeClass();
				$(this).addClass("active");
			});
			// $("#sub_contents>div").hide();
			// $("#sub_contents>div").eq(0).show();
			$(".depth2 > ul > li").click(function(){
				var liNum = $(this).index();
				console.log( liNum );
				$(".depth2 > ul > li").removeClass();
				$(this).addClass("on")
				$("#sub_contents>div").hide().css({opacity:0});
				$("#sub_contents>div").eq(liNum).css({display:"block"}).animate({opacity:1});
				return false;
			});
		});