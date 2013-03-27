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
		
		surface.context.beginPath();
		surface.context.arc(60, 60, 45, 0, Math.PI*2, false);
		surface.context.fillStyle = "white";
		surface.context.fill();
		
		sprite.image = surface;
		scene.addChild(sprite);
	};
	game.start();
};