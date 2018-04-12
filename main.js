$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
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

	var arrowRight = $('#arrowRight');
	var arrowLeft  = $('#arrowLeft');


	t.set([frame2, frame2, frame3, frame4, frame5], { left : '-100%', opacity : 0 });
	//t.set([txt1, txt2, txt3, txt4, txt5], { opacity : 0 });

	function handleRightClick(e) {
		console.log( 'RIGHT ' );
		switch (frameNum) {
		  case 1:
			t.set(frame2, {left:'-100%', opacity : 0});
		  	t.to(frame1, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame2, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt2, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
		  	frameNum = 2;
	  	  break;
	  	  case 2:
	  	  	t.set(frame3, {left:'-100%', opacity : 0});
		  	t.to(frame2, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame3, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt3, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 3;
	  	  break;
	  	  case 3:
	  	  	t.set(frame4, {left:'-100%', opacity : 0});
		  	t.to(frame3, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame4, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt4, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 4;
	  	  break;
	  	  case 4:
	  	  	t.set(frame5, {left:'-100%', opacity : 0});
		  	t.to(frame4, 0.4, {left:'100%', ease:Power3.easeOut});
			t.to(frame5, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt5, 0.6, {x:'+=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 5;
	  	  break;
	  	  case 5:
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
		switch (frameNum) {
		  case 1:
			t.set(frame5, {left:'100%', opacity : 0});
		  	t.to(frame1, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame5, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt5, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
		  	frameNum = 5;
	  	  break;
	  	  case 5:
	  	  	t.set(frame4, {left:'100%', opacity : 0});
		  	t.to(frame5, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame4, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt4, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 4;
	  	  break;
	  	  case 4:
	  	  	t.set(frame3, {left:'100%', opacity : 0});
		  	t.to(frame4, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame3, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt3, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 3;
	  	  break;
	  	  case 3:
	  	  	t.set(frame2, {left:'100%', opacity : 0});
		  	t.to(frame3, 0.4, {left:'-100%', ease:Power3.easeOut});
			t.to(frame2, 0.4, {left:0, opacity:1, ease:Power3.easeOut});
			t.from(txt2, 0.6, {x:'-=20', opacity:0, ease:Expo.easeOut, delay:0.4});
	  	  	frameNum = 2;
	  	  break;
	  	  case 2:
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





	var $width 			= window.innerWidth;
	var $height 		= window.innerHeight;
	var $area   		= $width * $height;
	var $squareSize 	= 200;
	var $columnNum 		= Math.ceil($width  / $squareSize);
	var $rowNum    		= Math.ceil($height / $squareSize);
	var $squareWidth  	= $width / $columnNum;
	var $squareHeight 	= $height / $rowNum;
	//var $wDif 			= $width /  arg.imageWidth;
	//var $hDif 			= $height / arg.imageHeight;
	//var $wOffset 		= (arg.imageWidth  - $width)  * $wDif;
	//var $hOffset 		= (arg.imageHeight - $height) * $hDif;

	var logos = [];

	for (var i = 0; i < $columnNum; i++ ) {
		for (var j = 0; j < $rowNum; j++ ) {

			logos = $('<div>', { class : 'logos' }).appendTo('#intro');

			$(logos).css( { width : $squareWidth, height : $squareHeight, left : $squareWidth * i + 'px' , top : $squareHeight * j + 'px' } );

			//$(logos).html(i);

		}
	}

	//var _logos = $(logos).toArray();

	//console.log(_logos[0]);

	//$('.logos:odd').css( { backgroundColor : '#b09870'} );

	$('.logos').each(function(i, el) {
		if (i % 2 === 0) {
			//$(el).html(i);
			$(el).css( { backgroundColor : '#b09870'} );
		} else {

		}
	});





}