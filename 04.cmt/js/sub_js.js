$(document).ready(function(){
			$(".language > ul > li").click(function(){
				var liNum = $(this).index();
				console.log(liNum);
				$(".language > ul > li").removeClass();
				$(this).addClass("active");
			});

			$(".depth2 > ul > li").click(function(){
				var liNum = $(this).index();
				console.log( liNum );
				$(".depth2 > ul > li").removeClass();
				$(this).addClass("on")
				$("#sub_contents>div").hide();
				$("#sub_contents>div").eq(liNum).fadeIn();
				return false;
			});
		});

		new WOW().init();