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
		
		entt.addEventListener("touchstart", function() {
			alert("사각형 내 터치 동작을 감지하였습니다");
		});
		entt.addEventListener("touchstart", function() {
			this.width=120;
			this.height=120;
			this.backgroundColor = "yellow";
		});
	};
	game.start();
};