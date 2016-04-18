(function() {
  var F, frame, navBar, newLayer, screen, statusBar, tabBar;

  console.clear();

  F = Framer;

  frame = new Layer({
    image: 'images/iphone6-gray.jpg',
    height: 2060,
    width: 1290
  });

  frame.center();

  F.Defaults.Layer.parent = frame;

  if (Utils.isDesktop()) {
    frame.scale = (Screen.height / frame.height) / 1.5;
    window.onresize = function() {
      frame.scale = (Screen.height / frame.height) / 1.5;
      return frame.center();
    };
  }

  if (Utils.isMobile()) {
    screen.scale = Screen.height / screen.height;
    window.onresize = function() {
      return screen.scale = Screen.height / screen.height;
    };
  }

  screen = new Layer({
    backgroundColor: '#263238',
    width: 750,
    height: 1334,
    borderRadius: 4,
    clip: true
  });

  screen.center();

  F.Defaults.Layer.parent = screen;

  newLayer = new Layer({
    backgroundColor: Color.random(),
    width: 96,
    height: 96
  });

  newLayer.center();

  tabBar = new Layer({
    backgroundColor: Color.random(),
    width: screen.width,
    height: 96,
    x: Align.left,
    y: Align.bottom
  });

  statusBar = new Layer({
    image: 'images/iphone6-status.png',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: screen.width,
    height: 40,
    x: Align.left,
    y: Align.top
  });

  statusBar.placeBefore(navBar);

  navBar = new Layer({
    backgroundColor: Color.random(),
    width: screen.width,
    height: 128,
    x: Align.left,
    y: Align.top
  });

}).call(this);
