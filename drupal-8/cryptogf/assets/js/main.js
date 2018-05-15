
function uploadFile(input) {
	var upload = input.closest('.upload_file_card').find(".img_cont");
	if(upload.children("*").is("img")){}else{upload.append('<img src="#" alt="" />');} ////////////
	
	var file = input[0].files[0];
	if (file){
		add_img_cont(input.closest('.upload_file_card'));
	  input.closest('.upload_file_card').find('p').text(file.name+" "+(file.size/1024).toFixed(2)+"kb"); 
	}
	upload.addClass("completed");
  	if (input[0].files[0]) {
		
		var reader = new FileReader();
		reader.onload = function(e) {
			upload.find("img").attr('src', e.target.result);
		};
		reader.readAsDataURL(input[0].files[0]);
	}
}
function add_img_cont(add_button){
	if(add_button.hasClass("completed")){}
	else{
		add_button.closest('.upload_file_card').clone().insertAfter(add_button.closest('.upload_file_card'));
		add_button.closest('.upload_file_card').addClass("active");
	}
}
function del(del_button) {
	del_button.closest('.upload_file_card').remove();
}

function uploadPhoto(input) {
	var upload = input.closest('.photo_input');
	if(upload.children("*").is("img")){}else{upload.append('<img src="#" alt="" />');} ////////////
	
	var file = input[0].files[0];
	if (file){
		input.closest('.photo_input').next('.photo_name').text(file.name+" "+(file.size/1024).toFixed(2)+"kb");
	}
	upload.addClass("completed");
  	if (input[0].files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			upload.find("img").attr('src', e.target.result);
		};
		reader.readAsDataURL(input[0].files[0]);
	}
}
function tab_link(currentTab){
	//console.log(currentTab);
	if(currentTab === 0){
		$('.tab_navigation').find('.point').eq(0).addClass("active");
	}
	else {
		$('#'+currentTab).addClass('active');
	}
	function getParameterByName( name,href ){
		  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		  var regexS = "[\\?&]"+name+"=([^&#]*)";
		  var regex = new RegExp( regexS );
		  var results = regex.exec( href );
		  if( results === null ){
			return "";
		  }
		  else{
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		  }
	}
	function updateQueryStringParameter(uri, key, value) {
		  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
		  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
		  if (uri.match(re)) {
			return uri.replace(re, '$1' + key + "=" + value + '$2');
		  }
		  else {
			return uri + separator + key + "=" + value;
		  }
	}
	$('.tab_navigation').find(".point").click(function(){
		var url = window.location.href;
		if(getParameterByName('tab',url)) {
		  var newUrl = updateQueryStringParameter(url,'tab', $(this).attr("id"));
		  history.pushState({}, '', newUrl);
		}
		else{
		  history.pushState({}, '', url+'?tab='+$(this).attr("id"));
		}
	});
}
/////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	
	/////////////////////////////////////////////////////////////////////////////////////
    $(".layout").css("min-height", $(window).height());
	/////////////////////////////////////////////////////////////////////////////////////
	if($("*").is(".list_block")){
		if($(".list_block").outerHeight(true)>420){
			$(".list_block").addClass("column");
		}
	}
	////////////////////////////////////////////////////////////////////////////////////
	$('.s-h-pass').click(function(){
		var type = $(this).parent('.password').find('input').attr('type') == "text" ? "password" : 'text';
		$(this).find("i").toggleClass("fa-eye");
		$(this).find("i").toggleClass("fa-eye-slash");
		$(this).parent('.password').find('input').prop('type', type);
	});
	/////////////////////////////////////////////////////////////////////////////////////
	
		$("#url_out").find("span").text($("#url_input").val());	
		$("#url_input" ).on('input',function () {
			$("#url_out").find("span").text($("#url_input").val());
		});
	
	//////////////////////////////////////////////////////////////////////////////////////
	$(".next_step").click(function(){
		$(this).closest(".step").removeClass("show");
		$(this).closest(".step").next(".step").addClass("show");
	});
    /////////////////////////////////////////////////////////////////////////////////////
    $.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH);
    };
    $('.nav').equivalent();
    ///////////////////////////////////////////////////////////////////////////////////////
	// Modal
	$(function() {
            $('.modal_button').bind('click', function(e) {
				var modal= $(this).attr("href");
                e.preventDefault();
                $(modal).bPopup({
				closeClass:'close',
				modalClose: true,
				
			});
        });
    });
	
	$(function() {
            $('.jvectormap-region').bind('click', function(e) {
				//var modal= $(this).data("code");
                e.preventDefault();
                $("#map_modal").bPopup({
				closeClass:'close',
				modalClose: true,
				
			});
        });
    });
	//////////////////////////////////////////////////////////////////////////////////////
	//$(".finans_progress").find("#start").text();
	$(".finans_progress").find(".bar").css("width",$(".finans_progress").find("#start").text()+"%");
	$(".finans_progress").find(".arrow").css("width",$(".finans_progress").find("#start").text()+"%");
	$(".finans_progress").find("#finish").text(100 - $(".finans_progress").find("#start").text());
	////////////////////////////////////////////////////////////////////////////////////////
	$('.starrr').starrr({
		change: function(e, value){
		  if (value) {
			$('#starrr_input').val(value);
		  }
		}
	});
	////////////////////////////////////////////////////////////////////////////////////////
	$(".interes_bar").find(".progress").css("width" , $(".interes_bar").find(".index").text()*100/$(".interes_bar").find(".end").text() + '%');
	///////////////////////////////////////////////////////////////////////////////////////
	$(".accordion").find(".point.active").next(".sub_cont").css("display","block");
	$(".accordion").find(".point").click(function(){		
		var point = $(this);
		if(point.hasClass("active")){
			$(".accordion").find(".point").removeClass("active");
			$(".accordion").find(".point").next(".sub_cont").slideUp("slow",function(){$(this).stop(true);});
		}
		else{
			$(".accordion").find(".point").removeClass("active");
			$(".accordion").find(".point").next(".sub_cont").slideUp("slow",function(){$(this).stop(true);});
			point.addClass("active");
			point.next(".sub_cont").slideDown("slow",function(){$(this).stop(true);});
		}
		
	});
	
	///////////////////////////////////////////////////////////////////////////////////////
	$( ".select" ).selectmenu({});
	//$( ".select" ).selectmenu( "option", "disabled", true );
	$( ".datepicker" ).datepicker({
		dateFormat: 'dd.mm.yy',
		prevText: "",
		nextText: ""
		
	}).val();
	///////////////////////////////////////////////////////////////////////////////////////
	if($("div").is(".upload_file_container")){
		$('.upload_file_card').append('<p></p>');
		$(".upload_file_container").append('<div class="upload_file_card empty"></div><div class="upload_file_card empty"></div><div class="upload_file_card empty"></div>');
	}
	///////////////////////////////////////////////////////////////////////////////////////
	
	if($("div").is(".main_slider")){
		window.pause =$('.main_slider').data("pause");	
		$('.main_slider').slick({
			arrows:true,
			autoplay: true,
			autoplaySpeed: pause,
		});
	
		$('.main_slider').slick('slickPause');
		$(".slide_nav").eq($('.main_slider').slick('slickCurrentSlide')).addClass("active");
		$(".sub_list").eq($('.main_slider').slick('slickCurrentSlide')).css("display","block");
		$('.main_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$(".slide_nav").removeClass("active");
			$(".slide_nav").eq(nextSlide).addClass("active");
			$(".sub_list").css("display","none");
			$(".sub_list").eq(nextSlide).css("display","block");
			$(".slide_progress_bar").stop();
			$(".slide_progress_bar").css("width",0);
		});
		$('.main_slider').on('afterChange', function(){		
			$(".slide_progress_bar").animate({width:100+"%"}, pause);
		});
	
	
		$(".slide_nav").click(function(e){
			$(".slide_nav").removeClass("active");
			$(this).addClass("active");
			e.preventDefault();
			slideIndex = $(this).index();
			$(".sub_list").css("display","none");
			$(".sub_list").eq(slideIndex).css("display","block");
			$( '.main_slider' ).slick('slickGoTo',parseInt(slideIndex));
			
		});
		$(".slide_progress_bar").animate({width:100+"%"}, pause);
		
		$('.mainslider_block').hover(
			function() {
				$('.main_slider').slick('slickPause');
				$(".slide_progress_bar").stop();
				
			},
			function() {
				$('.main_slider').slick('slickPlay');
				$(".slide_progress_bar").animate({width:100+"%"}, pause);
			}
		);
	}
	
	if($("div").is(".table_slider")){
		$('.table_slider').slick({
			arrows:true,
			autoplay: true,
			autoplaySpeed: 5000,
		});
	}
	if($("div").is(".ad_slider")){
		$('.ad_slider').slick({
			arrows:true,
		});
	}
	if($("div").is(".frilanser_slider")){
		$('.frilanser_slider').slick({
			arrows:true,
		});
	}
	$("a.preview").fancybox();
	
	/////////////////////////////////////////////////////////////////////////////
	
	
	/*======================================================================================================================*/
	$('div.tab').find('div.tabs_content').css("display","none");
	tab_link($('.tab').data("tab"));
	$(function() {
		$('.tab_navigation').each(function() {
			$(this).find('.point').each(function(i) {
				if($('.tab_navigation').find('.point').eq(i).hasClass("active")){
					$('div.tab').find('div.tabs_content').css("display","none");
					$('div.tab').find('div.tabs_content').eq(i).css("display","block");
				}
				
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.closest('div.tab').find('div.tabs_content').css("display","none").eq(i).css("display","block");
					if($(this).is("#freelancers")){
						$(".freelancers_sidebar").css("display","block");
						$(".projects_sidebar").css("display","none");
					}
					if($(this).is("#projects")){
						$(".freelancers_sidebar").css("display","none");
						$(".projects_sidebar").css("display","block");
					}
				});
			});
		});
    });
	$('div.tab').find('div.inner_content').css("display","none");
	$(function() {
		$('.navigation').each(function() {
			$(this).find('.inner_point').each(function(i) {
				if($('.navigation').find('.inner_point').eq(i).hasClass("active")){
					$('div.inner_tab').find('div.inner_content').css("display","none");
					$('div.inner_tab').find('div.inner_content').eq(i).css("display","block");
				}
				
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.closest('div.inner_tab').find('div.inner_content').css("display","none").eq(i).css("display","block");
				});
			});
		});
    });
	$('div.new_past_tab').find('div.new_past_content').css("display","none");
	$(function() {
		$('.new_past_nav').each(function() {
			$(this).find('.boocmarck').each(function(i) {
				if($('.new_past_nav').find('.boocmarck').eq(i).hasClass("active")){
					$('div.new_past_tab').find('div.new_past_content').css("display","none");
					$('div.new_past_tab').find('div.new_past_content').eq(i).css("display","block");
				}
				
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.closest('div.new_past_tab').find('div.new_past_content').css("display","none").eq(i).css("display","block");
				});
			});
		});
    });
	/*======================================================================================================================*/
	
	
	////////////////////////////////////////////////////////////////////////////////////////////
	$(function() {
		$('.news_tab_navigation').each(function() {
			$(this).find('li').each(function(i) {
				if($('.news_tab_navigation').find('li').eq(i).hasClass("active")){
					$('div.news_tab').find('div.news_tab_content').removeClass("active");
					$('div.news_tab').find('div.news_tab_content').eq(i).addClass("active");
				}
				
				$(this).click(function(){
					$(this).addClass('active').siblings().removeClass('active')
					.closest('div.news_tab').find('div.news_tab_content').removeClass("active").eq(i).addClass("active");
					$(".news_text").removeClass("open");
				});
			});
		});
    });
	//////////////
	$(".see_more").click(function(){
		$(this).parent(".bottom").prev(".news_text").addClass("open");
	});
	///////////////////////////////////////////////////////////////////////////////////////
	$(".star").each(function(){
		var str = '<i class="fa fa-star" aria-hidden="true"></i> ';
		$(this).html(str.repeat(5));
		var star = $(this).data("index");
		for (var i = 0; i < star; i++) {
			$(this).children("i").eq(i).addClass("active");
		 }
	});
	//////////////////////////////////////////////////////////////////////////////////////
	$(".multiple").children("li").find(".sub").css("display","none");
	$(".multiple").children("li.open").find(".sub").css("display","block");
	$(".multiple").children("li").click(function(){
			if($(this).hasClass("open")){}
			else{
				
				$(".multiple").children("li").find(".sub").slideUp("slow",function(){$(this).stop(true);});
				$(this).find(".sub").slideDown("slow");
				$(".multiple").children("li").removeClass("open");
				$(this).addClass("open");
				
			}
	});
	$('.stat').circliful({
		animation: 0,
		dimension:72,
		//width:30,
		textStyle: 'font-size: 18px; color:#242635;',
		backgroundColor: "#ecf0f6",
		fillColor: 'none',
		foregroundColor:'#4c46ff'
	});
	/////////////////////////////////////////////////////////////////////////////////////
	
	$('.scrollbar-external').scrollbar({
        //"autoScrollSize": false,
        "scrolly": $('.external-scroll_y')
    });
	$('.hr_skroll').scrollbar({
		autoScrollSize :false,
	});
	
	/////////////////////////////////////////////////////////////////////////////////////
	
	$(".info").hover(
		function(){
			$(".info_block").fadeIn("slow");
		},
		function(){ }
	);
	$(".ad_card").hover(
		function(){},
		function(){$(".info_block").fadeOut("slow",function(){$(this).stop(true);});}
	);
	///////////////////////////////////////////////////////
	if($(".search_block").hasClass("show")){$(".search_block").css("display","block");}
	
	$(".filter_show_button").click(function(){
		$(".search_block").slideToggle("fast",function(){$(this).stop(true);});
	});
	$(".set").click(function(){
		$(".filter_block").slideToggle("fast",function(){$(this).stop(true);});
	});
	$(".popup_block").parent("div").hover(
		function(){
			$(this).find(".popup_block").fadeIn("slow");
		},
		function(){
			$(this).find(".popup_block").fadeOut("slow",function(){$(this).stop(true);});
		}
	);
	$(".button.spam").find(".submit_button").click(function(){
		$(".popup_block").fadeOut("slow",function(){$(this).stop(true);});
	});
	
	/////////////////////////////////////////////////////////////////////////////////
	$(".lern_more_button").click(function(){
		$(this).closest(".peaple_card").toggleClass("active");
		$(".chat_button").removeClass("active");
		$(".chat_button").closest(".peaple_card").parent(".peaple_card_container").find(".chat").slideUp("fast",function(){
			$(this).stop(true);});
		$(".answer_button").removeClass("active");
		$(".answer_button").closest(".peaple_card").parent(".peaple_card_container").find(".answer_block").slideUp("fast",function(){
			$(this).stop(true);});
		$(this).toggleClass("active");
		$(this).closest(".peaple_card").parent(".peaple_card_container").find(".lern_more").slideToggle("fast",function(){
			$(this).stop(true);
			$(".skroll_block").tinyscrollbar();
		});
	});
	$(".chat_button").click(function(){
		$(this).closest(".peaple_card").toggleClass("active");
		$(".lern_more_button").removeClass("active");
		$(".lern_more_button").closest(".peaple_card").parent(".peaple_card_container").find(".lern_more").slideUp("fast",function(){
			$(this).stop(true);});
		$(".answer_button").removeClass("active");
		$(".answer_button").closest(".peaple_card").parent(".peaple_card_container").find(".answer_block").slideUp("fast",function(){
			$(this).stop(true);});
		$(this).toggleClass("active");
		$(this).closest(".peaple_card").parent(".peaple_card_container").find(".chat").slideToggle("fast",function(){
			$(this).stop(true);
			$(".skroll_block").tinyscrollbar();
		});
	});
	$(".answer_button").click(function(){
		$(this).closest(".peaple_card").toggleClass("active");
		$(".chat_button").removeClass("active");
		$(".chat_button").closest(".peaple_card").parent(".peaple_card_container").find(".chat").slideUp("fast",function(){
			$(this).stop(true);});
		$(".lern_more_button").removeClass("active");
		$(".lern_more_button").closest(".peaple_card").parent(".peaple_card_container").find(".lern_more").slideUp("fast",function(){
			$(this).stop(true);});
		$(this).toggleClass("active");
		$(this).closest(".peaple_card").parent(".peaple_card_container").find(".answer_block").slideToggle("fast",function(){
			$(this).stop(true);
			$(".skroll_block").tinyscrollbar();
		});
	});
	///////////////////////////////////////////////////////////////////////////////////
	
	$(".tree").treemenu({delay:500});
	var tree = $(".tree").find(".checkbox input");
	$(".tree").find(".checkbox").each(function(i){
		tree.eq(i).attr("data-index", i);
	});
	tree.change(function(){
		$(this).closest("li").find("ul").find("input").attr("checked" , $(this).attr("checked"));
		if($(this).is(':checked')){
			$(this).closest("li").find("ul").find("input").prop('checked', true);
		}
		else{
			$(this).closest("li").find("ul").find("input").prop('checked', false);
		}
	});
	///////////////////////////////////////////////////////////////////////////////////
	if($(".point.active").is("#freelancers")){
		$(".freelancers_sidebar").css("display","block");
		$(".projects_sidebar").css("display","none");
	}
	if($(".point.active").is("#projects")){
		$(".freelancers_sidebar").css("display","none");
		$(".projects_sidebar").css("display","block");
	}
	/*
	$(".point").click(function(){
		if($(".point.active").is("#freelancers")){
			$(".freelancers_sidebar").css("display","block");
			$(".projects_sidebar").css("display","none");
		}
		if($(".point.active").is("#projects")){
			$(".freelancers_sidebar").css("display","none");
			$(".projects_sidebar").css("display","block");
		}
	});*/
	//$('#map').vectorMap({map: 'world_mill'});
});
$(window).load(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
	if($("div").is(".main_slider")){	
		$('.main_slider').slick('slickPlay');
		$(".slide_progress_bar").animate({width:100+"%"}, pause);
	}
	if($("div").is(".grid")){	
		$('.grid').masonry({
			itemSelector: '.masonry_card',
			gutter: 30,
		});
		setTimeout(function(){
			BackgroundCheck.init({
				targets: ".text , .date , .grad" ,
				threshold: 50,
				images: '.thumbnails',
				windowEvents:false,
			});
		}, 1000);
	}
	/*
	console.log($(".sidebar_content").outerHeight(true));
	console.log($(".content_block").outerHeight(true));
	console.log($(window).height());
	*/
	if($("div").is(".sidebar")){

			if($(".sidebar_content").outerHeight(true)<$(".content_block").outerHeight(true)){
				$(".sidebar_content").css("right",($(window).width()-$(".limit").width())/2);
				if($(".sidebar_content").outerHeight(true)<=$(window).height()){
					
					$( window ).scroll(function() {
						//console.log($(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height() +"   " +$(window).scrollTop());
						if ($(window).scrollTop()> $(".sidebar").offset().top){
							$(".sidebar_content").addClass("fixed_top");
						} else 
						if ($(window).scrollTop()<=$(".sidebar").offset().top){
							$(".sidebar_content").removeClass("fixed_top");
						}
						if ($(window).scrollTop()> $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(".sidebar_content").outerHeight(true)){
							$(".sidebar_content").addClass("stop");
						} else 
						if ($(window).scrollTop()<= $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(".sidebar_content").outerHeight(true)){
							$(".sidebar_content").removeClass("stop");
						}
					});
					
					
				}
				else{
					
					$( window ).scroll(function() {

						if ($(window).scrollTop()> $(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height()){
							$(".sidebar_content").addClass("fixed");
						} else 
						if ($(window).scrollTop()<=$(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height()){
							$(".sidebar_content").removeClass("fixed");
						}
						if ($(window).scrollTop()> $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(window).height()){
							$(".sidebar_content").addClass("stop");
						} else 
						if ($(window).scrollTop()<= $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(window).height()){
							$(".sidebar_content").removeClass("stop");
						}
						
					});
					
				}
		}
	}
	
});
$(window).resize(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
	if($("div").is(".sidebar")){

			if($(".sidebar_content").outerHeight(true)<$(".content_block").outerHeight(true)){
				$(".sidebar_content").css("right",($(window).width()-$(".limit").width())/2);
				if($(".sidebar_content").outerHeight(true)<=$(window).height()){
					
					$( window ).scroll(function() {
						//console.log($(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height() +"   " +$(window).scrollTop());
						if ($(window).scrollTop()> $(".sidebar").offset().top){
							$(".sidebar_content").addClass("fixed_top");
						} else 
						if ($(window).scrollTop()<=$(".sidebar").offset().top){
							$(".sidebar_content").removeClass("fixed_top");
						}
						if ($(window).scrollTop()> $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(".sidebar_content").outerHeight(true)){
							$(".sidebar_content").addClass("stop");
						} else 
						if ($(window).scrollTop()<= $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(".sidebar_content").outerHeight(true)){
							$(".sidebar_content").removeClass("stop");
						}
					});
					
					
				}
				else{
					
					$( window ).scroll(function() {

						if ($(window).scrollTop()> $(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height()){
							$(".sidebar_content").addClass("fixed");
						} else 
						if ($(window).scrollTop()<=$(".sidebar").offset().top+$(".sidebar_content").outerHeight(true) - $(window).height()){
							$(".sidebar_content").removeClass("fixed");
						}
						if ($(window).scrollTop()> $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(window).height()){
							$(".sidebar_content").addClass("stop");
						} else 
						if ($(window).scrollTop()<= $(".content_block").offset().top+$(".content_block").outerHeight(true) - $(window).height()){
							$(".sidebar_content").removeClass("stop");
						}
						
					});
					
				}
		}
	}

});


