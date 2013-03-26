// enchant.js 엔티티를 만들어 Scene에 추가
// Copyright (c)2013 Apptable.net by MJ
enchant();

window.onload = function() {
	var game = new Game(640, 1135); // 게임화면 너비와 높이를 설정
	game.fps = 16;
	game.onload = function() {
		var scene = game.rootScene;	
		// 여기에 코딩을 합니다!
		// 라벨 생성
		var lbl = new Label();
		lbl.moveTo(45, 45);
		lbl.text = "시간은 금이다!";
		lbl.color = "blue";
		lbl.font = "28px '맑은 고딕', 'Verdana'";
		scene.addChild(lbl); // 씬에 추가함
	};
	
	game.start();
};