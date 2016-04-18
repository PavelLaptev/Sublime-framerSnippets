(function() {
  var F, TextLayer, frame, navbar, navbarContainer, newCircle, newLayer, newText, screen, statusbar, tabbar;

  console.clear();

  TextLayer = require('TextLayer').TextLayer;

  F = Framer;

  frame = new Layer({
    image: 'images/iphone6-white.jpg',
    height: 2060,
    width: 1290
  });

  frame.center();

  screen = new Layer({
    backgroundColor: '#263238',
    width: 750,
    height: 1334,
    borderRadius: 4,
    clip: true
  });

  screen.center();

  F.Defaults.Layer.parent = screen;

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
    frame.visible = false;
    screen.scale = Screen.height / screen.outerHeight;
    window.onresize = function() {
      return screen.scale = Screen.height / screen.outerHeight;
    };
  }

  newLayer = new Layer({
    backgroundColor: Color.random(),
    opacity: 0.5,
    width: 96,
    height: 96
  });

  newLayer.center();

  newCircle = new Layer({
    backgroundColor: Color.random(),
    opacity: 0.5,
    width: 96,
    height: 96,
    borderRadius: 10000
  });

  newCircle.center();

  newText = new TextLayer({
    text: "The quick text",
    color: "#aaa",
    textAlign: "center",
    fontSize: 48,
    width: 200,
    autoSize: true,
    fontFamily: "Arial"
  });

  newText.center();

  tabbar = new Layer({
    backgroundColor: Color.random(),
    width: screen.width,
    height: 96,
    x: Align.left,
    y: Align.bottom
  });

  navbarContainer = new Layer({
    backgroundColor: Color.random(),
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
    backgroundColor: 'rgba(0,0,0,0.2)',
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
