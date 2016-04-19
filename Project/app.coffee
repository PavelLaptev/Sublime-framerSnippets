### SNIPPET LIST
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
###


## cleaning console || trigger - ClearConsole ##
console.clear()


## init text layers || trigger - initText ##
{TextLayer} = require 'TextLayer'


## new layer Iphone6 gray || trigger - newIphone ##
F = Framer
# create background
frame = new Layer
    image: 'images/iphone6-gray.jpg'
    height:2060
    width:1290
frame.center()
#
screen = new Layer
	backgroundColor: '#F3FFBD'
	width:750
	height:1334
	borderRadius:4
	clip: true
screen.center()
Framer.Defaults.Layer.parent = screen
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
	frame.destroy()
	Framer.Defaults.Layer.parent = null
	screen.scale = Screen.height / screen.outerHeight
	window.onresize = ->
	 	screen.scale = Screen.height / screen.outerHeight

## navigationbar with statusbar || trigger - newNavbar ##
navbarContainer = new Layer
	backgroundColor: '#B2DBBF'
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
	backgroundColor: '#70C1B3'
	width: navbarContainer.width
	height: 88
	x: Align.left
	y: 40
navbar.parent = navbarContainer


## tabbar || trigger - newTabbar ##
tabbar = new Layer
  backgroundColor: '#247BA0'
  width: screen.width
  height: 96
  x: Align.left
  y: Align.bottom

## new layer || trigger - newLayer ##
newLayer = new Layer
  backgroundColor: '#FF1654'
  width: 396
  height: 796
  borderRadius: 1002
newLayer.shadowY = 20
newLayer.shadowBlur = 80
newLayer.center()

# drag || trigger - drag
newLayer.draggable.enabled = true
newLayer.draggable.vertical = false
newLayer.draggable.constraints = newLayer
















