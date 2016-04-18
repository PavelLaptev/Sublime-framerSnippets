# cleaning console - ClearConsole
console.clear()

# new layer Iphone6 gray || target - newIphoneGray
F = Framer
#create background
frame = new Layer
    image: 'images/iphone6-gray.jpg'
    height:2060
    width:1290
frame.center()
F.Defaults.Layer.parent = frame

# screen sizes for devices
if Utils.isDesktop()
	frame.scale = (Screen.height / frame.height) / 1.5
	window.onresize = ->
	 	frame.scale = (Screen.height / frame.height) / 1.5
	 	frame.center()
if Utils.isMobile()
	screen.scale = Screen.height / screen.height
	window.onresize = ->
	 	screen.scale = Screen.height / screen.height

screen = new Layer
	backgroundColor: '#263238'
	width:750
	height:1334
	borderRadius:4
	clip: true
screen.center()
F.Defaults.Layer.parent = screen

#new layer
newLayer = new Layer
	backgroundColor: Color.random()
	width: 96
	height: 96
newLayer.center()

#tabBar
tabBar = new Layer
	backgroundColor: Color.random()
	width: screen.width
	height: 96
	x: Align.left
	y: Align.bottom

#navBar
statusBar = new Layer
	image: 'images/iphone6-status.png'
	backgroundColor: 'rgba(255,255,255,0.2)'
	width: screen.width
	height: 40
	x: Align.left
	y: Align.top
statusBar.placeBefore(navBar)

navBar = new Layer
	backgroundColor: Color.random()
	width: screen.width
	height: 128
	x: Align.left
	y: Align.top