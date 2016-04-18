## cleaning console || trigger - ClearConsole ##
console.clear()

## init text layers || trigger - initText ##
{TextLayer} = require 'TextLayer'


## new layer Iphone6 gray || trigger - newIphone ##
F = Framer
# create background
frame = new Layer
    image: 'images/iphone6-white.jpg'
    height:2060
    width:1290
frame.center()
#
screen = new Layer
	backgroundColor: '#263238'
	width:750
	height:1334
	borderRadius:4
	clip: true
screen.center()
F.Defaults.Layer.parent = screen
# screen sizes for devices
if Utils.isDesktop()
	screen.scale = (Screen.height / screen.height) / 2
	frame.scale = (Screen.height / screen.height) / 2
	window.onresize = ->
	 	screen.scale = (Screen.height / screen.height) / 2
	 	frame.scale = (Screen.height / screen.height) / 2
	 	screen.center()
	 	frame.center()
if Utils.isMobile()
	frame.visible = false
	screen.scale = Screen.height / screen.outerHeight
	window.onresize = ->
	 	screen.scale = Screen.height / screen.outerHeight


## new layer || trigger - newLayer ##
newLayer = new Layer
	backgroundColor: Color.random()
	opacity:0.5
	width: 96
	height: 96
newLayer.center()


## new Circle || trigger - newCircle ##
newCircle = new Layer
	backgroundColor: Color.random()
	opacity:0.5
	width: 96
	height: 96
	borderRadius: 10000
newCircle.center()


## new text layer || trigger - newText ## || init textLayer by trigger initText before use snippet
newText = new TextLayer
    text: "The quick text"
    color: "#aaa"
    textAlign: "center"
    fontSize: 48
    width: 200
    autoSize: true
    fontFamily: "Arial"
newText.center()


## tabbar || trigger - newTabbar ##
tabbar = new Layer
	backgroundColor: Color.random()
	width: screen.width
	height: 96
	x: Align.left
	y: Align.bottom


## navigationbar with statusbar || trigger - newNavbar ##
navbarContainer = new Layer
	backgroundColor: Color.random()
	height: 128
	width: screen.width
	x: Align.left
	y: Align.top
# statusBar
statusbar = new Layer
	image: 'images/iphone6-status.png'
	width: navbarContainer.width
	height: 40
	x: Align.left
	y: Align.top
statusbar.parent = navbarContainer
if Utils.isMobile()
	statusbar.visible = false
# navBar
navbar = new Layer
	backgroundColor: 'rgba(0,0,0,0.2)'
	width: navbarContainer.width
	height: 88
	x: Align.left
	y: 40
navbar.parent = navbarContainer


#### EVENTS ####

# drag || trigger - drag
newLayer.draggable.enabled = true
newLayer.draggable.vertical = false
newLayer.draggable.constraints = newLayer

# add states || trigger - state
newLayer.states.add
	StateA: x: 100, y: 100
newLayer.states.animationOptions = curve: "spring(300, 0, 20)", time: .2

