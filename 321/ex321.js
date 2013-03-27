// enchant.js 엔티티를 만들어 Scene에 추가
// Copyright (c)2013 Apptable.net by MJ
enchant();
//공통 사용 변수 선언
var BOX_WIDTH = 280;
var BOX_HEIGHT = 80;
var IMAGE1 = "http://apptable.net/app/wp-content/uploads/2013/01/at-logo.png";

enchant.Surface.prototype.setPixel = function(x, y, r, g, b, a) {
	var pt = this.context.createImageData(1, 1);
	pt.data[0] = r;
	pt.data[1] = g;
	pt.data[2] = b;
	pt.data[3] = a;
	this.context.putImageData(pt, x, y, 0, 0, 1, 1);
};

window.onload = function() {
	var game = new Game(640, 1135); // 게임화면 너비와 높이를 설정
	game.fps = 16;
	game.preload(IMAGE1);
	
	game.onload = function() {
		var scene = game.rootScene;	
		scene.backgroundColor="grey"; // 배경색상 설정
			
		var sprite = new Sprite(BOX_WIDTH, BOX_HEIGHT);
		var surface = new Surface(BOX_WIDTH, BOX_HEIGHT);
		
		surface.draw(game.assets[IMAGE1], 10, 10, 260, 66);
		
		for (var a=0; a<80; ++a) {
			for (var b=0; b<280; ++b) {
				var pt = surface.getPixel(b, a);
				var gray = pt[0]*0.3 + pt[1]*0.59 + pt[2]*0.11;
				pt[0] = gray;
				pt[1] = gray;
				pt[2] = gray;
				surface.setPixel(b, a, pt[0], pt[1], pt[2], pt[3]);					
			}
		}
		sprite.image = surface;
		scene.addChild(sprite);
	};
	game.start();
};