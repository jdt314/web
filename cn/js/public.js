/********************************************************************public**********************************************************/

$(window).scroll(function(){
  "use strict";
  if ($(document).scrollTop() >= $(window).height()){
    $(".top1").addClass("active");
    //$(".top1_1").addClass("active");
    $(".top2").addClass("active");
  }
  else{
    $(".top1").removeClass("active");
    //$(".top1_1").removeClass("active");
    $(".top2").removeClass("active");
  }
});

$(".menu .cnen span").hover(function(){
  "use strict";
  $(this).siblings(".sub").stop().slideDown();
});
$(".menu .cnen").bind("mouseleave",function(){
  "use strict";
  $(this).find(".sub").stop().slideUp();
});

/*手机导航js*/
$("#menuph").on("touchstart",function(){
	"use strict";
	$(this).find(".point").stop().toggleClass("active");
	$(".xialaph").stop().toggleClass("active");
	_xiahei();
});
$(".xialaph .ul1 .cnen span").on("touchstart",function(){
  "use strict";
  $(this).stop().toggleClass("active");
  $(this).siblings(".sub").stop().slideToggle();
});


function _xiahei(){
	"use strict";
	var _xiaH = $(window).height()-$(".top2").height();
	$(".xialaph").css({"max-height":_xiaH,});
}
$(window).resize(function () {
	"use strict";
	_xiahei();
});


/*自适应显示版块js*/
function slide_int() {
	"use strict";
	if ($(window).width() >= 1200) {
			$("#slide_show1").html($("#slide_block1").html());

	}
	if ($(window).width() < 1200) {
			  $("#slide_show1").html($("#slide_block1").html());
		}
}
window.onload = slide_int;
$(document).ready(function () {
	"use strict";
	$(window).resize(function () {
		slide_int();
	});
});


//setTimeout(function(){
//	"use strict";
//	$(".pz_banner").height($(window).height());
//},100);




