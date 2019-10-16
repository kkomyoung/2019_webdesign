$(document).ready(function(){
	var aboutPos = $("#about").offset().top; //about레이어 위치
	var publishingPos = $("#publishing").offset().top;
	var clientPos = $("#client").offset().top;
	$(document).mousewheel(function(event,delta){
		console.log(delta);
		//delta 마우스 휠 up:양수 down:음수
		$(window).scroll(function(){
			var winTop = $(this).scrollTop();
			if(winTop > aboutPos){ //스크롤 위치 따른 메뉴 설정
				if(delta < 0){
					$(".gnb_menu").addClass("fixed");
					$(".gnb_menu li:nth-child(1) a").addClass("active");
					$(".gnb_menu li:nth-child(2) a").removeClass("active");
				}if(winTop > publishingPos){
					$('.gnb_menu').addClass("publishing");
					$('.gnb_menu li a').addClass("publishing");
					$(".gnb_menu li:nth-child(2) a").addClass("active");
					$(".gnb_menu li:nth-child(1) a").removeClass("active");
				}else{
					$('.gnb_menu').removeClass("publishing");
					$('.gnb_menu li a').removeClass("publishing");
				}if(winTop > clientPos){
					$('.gnb_menu').addClass("client");
					$('.gnb_menu li a').addClass("client");
					$(".gnb_menu li:nth-child(3) a").addClass("active");
					$(".gnb_menu li:nth-child(2) a").removeClass("active");
				}else{
					$('.gnb_menu').removeClass("client");
					$('.gnb_menu li a').removeClass("client");
					$(".gnb_menu li:nth-child(3) a").removeClass("active");
				}
			}else{
				$(".gnb_menu").removeClass("fixed");
			}//scroll end
		});
	});

<<<<<<< HEAD
	// $('.gnb_menu li:nth-child(1) a').click(function(){
 //        $('html').animate({scrollTop : aboutPos.top}, 500);
	// });
=======
	$('.gnb_menu li:nth-child(1) a').click(function(){
        $('html').animate({scrollTop : aboutPos.top}, 500);
	});
>>>>>>> 9a651a900bc838b3309fa1cd0b11851596f9b61a
});


	// var aboutPos = $("#about").offset().top;



	// 	$(document).ready(function(){

	// 	$('#btn1').click(function(){

	// 		var offset = $('#div1').offset(); //선택한 태그의 위치를 반환

 //                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 

	//         $('html').animate({scrollTop : offset.top}, 400);

	// 	});

	// });


