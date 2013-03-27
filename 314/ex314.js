// enchant.js 엔티티를 만들어 Scene에 추가
// Copyright (c)2013 Apptable.net by MJ
enchant();
//공통 사용 변수 선언
var BEAR_IMAGE = "http://enchantjs.com/wordpress/wp-content/uploads/2012/09/chara1.png";

window.onload = function() {
	var game = new Game(640, 1135); // 게임화면 너비와 높이를 설정
	game.fps = 16;
	game.preload(BEAR_IMAGE); // 이미지 읽어오기
	
	game.onload = function() {
		var scene = game.rootScene;	
		scene.backgroundColor="grey"; // 배경색상 설정
			
		var sprite = new Sprite(32, 32); // 스프라이트 인스턴스 생성
		sprite.moveTo(0,200);
		sprite.image = game.assets[BEAR_IMAGE]; // 이미지 설정
		scene.addChild(sprite); // 씬에 추가
		
		var frameList = [0, 1, 2];
		sprite.frameIndex = 0;
		sprite.onenterframe = function() {
			this.x += 2;
			if(game.frame % 2 == 0) {
				this.frameIndex += 1;
				this.frameIndex %= frameList.length;
				this.frame = frameList[this.frameIndex];
			}
		};
		
	};
	game.start();
};