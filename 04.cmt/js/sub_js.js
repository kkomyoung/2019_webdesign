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

			$(".toggleMenu").click(function(){
				var myClass = $(this).attr("class");
				console.log(myClass);
				if(myClass == "toggleMenu"){
					$(this).addClass("change");
					$("#main_menu").stop().animate({right:0},300);
					$(".back").fadeIn();
				}else{
					$(this).removeClass("change");
					$("#main_menu").stop().animate({right:"-100%"},300);
					$(".back").hide();
				}
			});

			$(window).resize(function(){
				var wSize = $(window).width();
				console.log(wSize);
				if(wSize>960){
					$("#header_top").find(".toggleMenu").removeClass("change");
					$("#header_top").find(".back").hide();
				}else{
					$("#header_top").find(".toggleMenu").removeClass("change");
					$("#header_top").find(".back").hide();
					$("#main_menu").css({right:"-100%"});
				}

			});
		});