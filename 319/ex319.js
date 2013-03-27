// enchant.js 엔티티를 만들어 Scene에 추가
// Copyright (c)2013 Apptable.net by MJ
enchant();
//공통 사용 변수 선언
var BOX_WIDTH = 120;
var BOX_HEIGHT = 120;

window.onload = function() {
	var game = new Game(640, 1135); // 게임화면 너비와 높이를 설정
	game.fps = 16;
	
	game.onload = function() {
		var scene = game.rootScene;	
		scene.backgroundColor="grey"; // 배경색상 설정
			
		var sprite = new Sprite(BOX_WIDTH, BOX_HEIGHT);
		var surface = new Surface(BOX_WIDTH, BOX_HEIGHT);
		var context = surface.context;
		
		var centerX = BOX_WIDTH/2;
		var centerY = BOX_HEIGHT/2;
		var radOffset = -Math.PI/2;
		
		context.beginPath();
		for(var a=0; a<3; ++a) {
			var rad=((Math.PI*2)/3*a) + radOffset;
			var x = Math.cos(rad)*40 + centerX;
			var y = Math.sin(rad)*40 + centerY;
			if(a == 0) {
				context.moveTo(x, y);
			} else {
				context.lineTo(x, y);
			}
		}
		context.fillStyle = "blue";
		context.fill();
		
		sprite.image = surface;
		scene.addChild(sprite);
	};
	game.start();
};