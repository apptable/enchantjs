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
			
		var entt = new Entity();
		entt.width = 60;
		entt.height = 60;
		entt.backgroundColor = "blue";
		scene.addChild(entt);
		
		entt.addEventListener("enterframe", function() {
			this.width += 2;
		});
		entt.addEventListener("enterframe", function() {
			this.height += 2;
		});
		entt.addEventListener("touchstart", function() {
			this.clearEventListener("enterframe");
		});

	};
	game.start();
};