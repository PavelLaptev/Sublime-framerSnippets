
/* SNIPPET LIST
	clear console - ClearConsole
	----
	create iphone6 view SpaceGray || newIphone
	create iphone6 view White || newIphoneWhite
	create iphone6 view Gold || newIphoneGold
	----
	init text layers || initText
	create text layer || newText
	---
	new layer || newLayer
	new Circle || newCircle
	new text layer || newText ## -> init textLayer by trigger initText before use snippet
	tabbar || newTabbar
	navigationbar with statusbar || newNavbar
	---
	drag || drag
	add states || state
 */

(function() {
  var TextLayer, frame, navbar, navbarContainer, newCircle, newLayer, newText, screen, statusbar, tabbar;

  console.clear();

  TextLayer = require('TextLayer').TextLayer;

  frame = new Layer({
    image: 'images/iphone6-white.jpg',
    height: 2060,
    width: 1290
  });

  frame.center();

  screen = new Layer({
    backgroundColor: '#F3FFBD',
    width: 750,
    height: 1334,
    borderRadius: 4,
    clip: true
  });

  screen.center();

  Framer.Defaults.Layer.parent = screen;

  if (Utils.isDesktop()) {
    screen.scale = (Screen.height / screen.height) / 2;
    frame.scale = (Screen.height / screen.height) / 2;
    window.onresize = function() {
      screen.scale = (Screen.height / screen.height) / 2;
      frame.scale = (Screen.height / screen.height) / 2;
      screen.center();
      return frame.center();
    };
  }

  if (Utils.isMobile()) {
    frame.destroy();
    Framer.Defaults.Layer.parent = null;
    screen.scale = Screen.height / screen.outerHeight;
    window.onresize = function() {
      return screen.scale = Screen.height / screen.outerHeight;
    };
  }

  newLayer = new Layer({
    backgroundColor: '#FF1654',
    width: 396,
    height: 396,
    borderRadius: 12
  });

  newLayer.shadowY = 20;

  newLayer.shadowBlur = 80;

  newLayer.center();

  newCircle = new Layer({
    backgroundColor: '#FFE95A',
    width: 200,
    height: 200,
    x: 450,
    y: 380,
    borderRadius: 10000
  });

  newCircle.shadowY = 10;

  newCircle.shadowBlur = 20;

  newText = new TextLayer({
    text: "The quick text",
    color: "white",
    textAlign: "center",
    fontSize: 48,
    width: 200,
    autoSize: true,
    fontFamily: "Arial"
  });

  newText.center();

  tabbar = new Layer({
    backgroundColor: '#247BA0',
    width: screen.width,
    height: 96,
    x: Align.left,
    y: Align.bottom
  });

  navbarContainer = new Layer({
    backgroundColor: '#B2DBBF',
    height: 128,
    width: screen.width,
    x: Align.left,
    y: Align.top
  });

  statusbar = new Layer({
    image: 'images/iphone6-status.png',
    width: navbarContainer.width,
    height: 40,
    x: Align.left,
    y: Align.top
  });

  statusbar.parent = navbarContainer;

  if (Utils.isMobile()) {
    statusbar.visible = false;
  }

  navbar = new Layer({
    backgroundColor: '#70C1B3',
    width: navbarContainer.width,
    height: 88,
    x: Align.left,
    y: 40
  });

  navbar.parent = navbarContainer;

  newLayer.draggable.enabled = true;

  newLayer.draggable.vertical = false;

  newLayer.draggable.constraints = newLayer;

  newLayer.states.add({
    StateA: {
      x: 100,
      y: 100
    }
  });

  newLayer.states.animationOptions = {
    curve: "spring(300, 0, 20)",
    time: .2
  };

}).call(this);
