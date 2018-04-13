$(document).ready(function(){
	init();
});

function init() {
	console.log('init');

	function random(min, max) {
		if (max == null) { max = min; min = 0; }
		return Math.round( Math.random() * (max - min) + min );
	}

	var t = TweenMax;

	var frameNum = 1;

	var frame1 = $('.frame.frame1');
	var frame2 = $('.frame.frame2');
	var frame3 = $('.frame.frame3');
	var frame4 = $('.frame.frame4');
	var frame5 = $('.frame.frame5');

	var txt1 = $('.frame.frame1 .txt');
	var txt2 = $('.frame.frame2 .txt');
	var txt3 = $('.frame.frame3 .txt');
	var txt4 = $('.frame.frame4 .txt');
	var txt5 = $('.frame.frame5 .txt');

	var intro = $('#intro');

	var arrowRight = $('#arrowRight');
	var arrowLeft  = $('#arrowLeft');

	$('.dot1').css({ backgroundImage : 'url(navDot_active.png)' });
	t.set([frame2, frame2, frame3, frame4, frame5], { left : '-100%', opacity : 0 });
	//t.set([txt1, txt2, txt3, txt4, txt5], { opacity : 0 });

	var $width 			= window.innerWidth;
	var $height 		= window.innerHeight;
	var $area   		= $width * $height;

	var $squareSize 	= $height / 7;

	var $columnNum 		= Math.round($width  / $squareSize);
	var $rowNum    		= Math.round($height / $squareSize);

	var $squareWidth  	= $width / $columnNum;
	var $squareHeight 	= $height / $rowNum;

	var blueLogos  = ['bl_00.png', 'bl_01.png', 'bl_02.png', 'bl_03.png', 'bl_04.png', 'bl_05.png', 'bl_06.png', 'bl_07.png'];
	var beigeLogos = ['bi_00.png', 'bi_01.png', 'bi_02.png', 'bi_03.png', 'bi_04.png', 'bi_05.png', 'bi_06.png', 'bi_07.png'];
	var logos = [];

	for (var i = 0; i < $columnNum; i++ ) {
		for (var j = 0; j < $rowNum; j++ ) {

			logos = $('<div>', { class : 'logos' }).appendTo('#intro');
			$(logos).css( { width : $squareWidth, height : $squareHeight, left : $squareWidth * i + 'px' , top : $squareHeight * j + 'px' } );
		}
	}

	var _logos = $('.logos').toArray();

	$(_logos).each( function(i, el){
		if (i % 2 === 0 ) {
			//BEIGE BACKGROUND
			$(el).css( { backgroundColor : '#b09870', backgroundImage:'url(' + blueLogos[random(0, blueLogos.length - 1)] + ')'} );
			$(el).addClass('.move');
			t.set(el, { left:'+=' + $squareWidth, opacity:0 });
			t.to(el, 1.5, {left:'-=' + $squareWidth, opacity:1, ease:Expo.easeOut, delay:2});
		} else {
			//BLUE BACKGROUND
			$(el).css( { backgroundColor : '#0b2036', backgroundImage:'url(' + beigeLogos[random(0, beigeLogos.length - 1)] + ')', opacity:0} );
			t.to(el, 1.5, {opacity:1, ease:Expo.easeOut, delay:1.2});
		}
	});

	var introBar = $('<div>', { id : 'introBar' }).appendTo('#intro');
	$(introBar).css({ width : '100%' , height : $squareHeight * 3, top : $squareHeight * 2, backgroundColor : '#0b2036' , backgroundImage : 'url(introText.png)', backgroundSize : '80%', backgroundRepeat : 'no-repeat', backgroundPosition: 'center center '});

	t.to('#introLogo', 0.6, {opacity : 0, ease:Expo.easeOut, delay:1.0});
	t.from(introBar, 0.6, {opacity : 0, ease:Expo.easeOut, delay:4});
	t.to(intro, 0.6, {autoAlpha : 0, ease:Expo.easeOut, delay:6});

	//t.from('.move', 0.9, {left:'+=' + $squareWidth })
	//t.set('.move', {opacity:0.5});

	function handleRightClick(e) {
		$('.dot').css({ backgroundImage : 'url(navDot.png)' });
		console.log( 'RIGHT ' );
		switch (frameNum) {
		  case 1:
		  	$('.dot2').css({ backgroundImage : 'url(navDot_active.png)' });
			t.set(frame2, {left:'-100%', opacity : 0});
		  	t.to(frame1, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame2, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt2, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
		  	frameNum = 2;
	  	  break;
	  	  case 2:
	  	  	$('.dot3').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame3, {left:'-100%', opacity : 0});
		  	t.to(frame2, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame3, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt3, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 3;
	  	  break;
	  	  case 3:
	  	  	$('.dot4').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame4, {left:'-100%', opacity : 0});
		  	t.to(frame3, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame4, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt4, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 4;
	  	  break;
	  	  case 4:
	  	  	$('.dot5').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame5, {left:'-100%', opacity : 0});
		  	t.to(frame4, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame5, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt5, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 5;
	  	  break;
	  	  case 5:
	  	  	$('.dot1').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame1, {left:'-100%', opacity : 0});
		  	t.to(frame5, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame1, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt1, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 1;
	  	  break;
		}
	}

	function handleLeftClick(e) {
		console.log( 'LEFT ' );
		$('.dot').css({ backgroundImage : 'url(navDot.png)' });
		switch (frameNum) {
		  case 1:
		  	$('.dot5').css({ backgroundImage : 'url(navDot_active.png)' });
			t.set(frame5, {left:'100%', opacity : 0});
		  	t.to(frame1, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame5, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt5, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
		  	frameNum = 5;
	  	  break;
	  	  case 5:
	  	  	$('.dot4').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame4, {left:'100%', opacity : 0});
		  	t.to(frame5, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame4, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt4, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 4;
	  	  break;
	  	  case 4:
	  	  	$('.dot3').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame3, {left:'100%', opacity : 0});
		  	t.to(frame4, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame3, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt3, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 3;
	  	  break;
	  	  case 3:
	  	  	$('.dot2').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame2, {left:'100%', opacity : 0});
		  	t.to(frame3, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame2, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt2, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 2;
	  	  break;
	  	  case 2:
	  	  	$('.dot1').css({ backgroundImage : 'url(navDot_active.png)' });
	  	  	t.set(frame1, {left:'100%', opacity : 0});
		  	t.to(frame2, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame1, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt1, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 1;
	  	  break;
		}
	}

	$(arrowRight).mouseover(function(){
		t.to(this, 0.3, {x:10, scale:1.2, ease:Power3.easeOut});
	}).mouseout(function(){
		t.to(this, 0.3, {x:0, scale:1.0, ease:Power3.easeOut});
	}).click(function(e){
		handleRightClick(e);
	});

	$(arrowLeft).mouseover(function(){
		t.to(this, 0.3, {x:-10, scale:1.2, ease:Power3.easeOut});
	}).mouseout(function(){
		t.to(this, 0.3, {x:0, scale:1.0, ase:Power3.easeOut});
	}).click(function(e){
		handleLeftClick(e);
	});


	$(window).resize( function(){
		$('#main div').removeAttr('style');
	});











}