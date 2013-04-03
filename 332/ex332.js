// enchant.js 엔티티를 만들어 Scene에 추가
// Copyright (c)2013 Apptable.net by MJ
enchant();
//공통 사용 변수 선언

window.onload = function() {
	var game = new Game(640, 1135); // 게임화면 너비와 높이를 설정
	game.fps = 16;
	
	game.onload = function() {
		var scene = game.rootScene;	
		scene.backgroundColor="grey"; // 배경색상 설정
			
		var entt1 = new Entity();
		entt1.x = 50;
		entt1.y = 80;
		entt1.width = 200;
		entt1.height = 200;
		entt1.backgroundColor = "#6765bb";
		scene.addChild(entt1);
		
		var entt2 = new Entity();
		entt2.moveTo(100, 100);
		entt2.moveBy(200,200);
		entt2.width = 100;
		entt2.height = 100;
		entt2.backgroundColor = "rgb(250, 255, 121)";
		scene.addChild(entt2);
		
	};
	game.start();
};