/**********************************************************************************   
FadeTicker
*   Copyright (C) 2001 Dave Schontzler
*   This may be used and changed freely as long as this msg is intact!
*   Made by Dave Schontzler [ email : madhatter@pullman.com | web : stilleye.com ]
*********************************************************************************/

// check for browsers that support the document object model
function checkDom()
{
	this.name=navigator.appName.toLowerCase()
	this.ver=navigator.appVersion.toLowerCase()
	this.opera=(this.name=="opera")?1:0
	this.dom=(document.getElementById&&!this.opera)?1:0
	this.ie=(document.all)?1:0
	this.ie6=(this.dom&&this.ie&&this.ver.indexOf('msie 6'))?1:0
	this.ie5=(this.dom&&this.ie&&!this.ie6)?1:0
	this.ns4=(document.layers)?1:0
	this.ns6=(this.dom&&!this.ie)?1:0
	this.ns=(this.ns4||this.ns6)?1:0
	this.bw=(this.dom||this.ie||this.ns||this.opera)?1:0
}
bw = new checkDom()

// make dom object
function makeDom(name)
{
	if(!document.getElementById) return null
	this.name = name
	this.evnt = document.getElementById(name)
	this.css = this.evnt.style
	this.x = this.css.pixelLeft || this.evnt.offsetLeft
	this.y = this.css.pixelTop || this.evnt.offsetTop
	this.w = this.css.pixelWidth || this.evnt.offsetWidth
	this.h = this.css.pixelHeight || this.evnt.offsetHeight
	this.id = name
	this.obj = name + 'Object'; eval(this.obj + '=this')

	makeDom.prototype.moveTo = function(x,y)
	{
		x = parseInt(x); y = parseInt(y)
		this.css.left = x+'px'
		this.css.top = y+'px'
		this.x = x
		this.y = y
	}
	makeDom.prototype.writ = function(txt,where)
	{
		this.evnt.innerHTML = where ? where>0 ? this.evnt.innerHTML + txt : txt + this.evnt.innerHTML : txt
	}
}

function fadeTicker()
{
	this.running = 0
	this.speed = 0
	this.delay = 0
	this.box = 0
	this.scrl = 0
	this.onItem = 0
	this.to = 0
	this.alph = 100
	this.items = new Array()
	this.urls = new Array()
	eval(this.obj + '=this')
}
fadeTicker.prototype.addItem = function(itm,url)
{
	this.items[this.items.length] = itm
	this.urls[this.urls.length] = url
}
fadeTicker.prototype.init = function(spd,dly,tgt)
{
	this.speed = parseInt(spd)
	this.delay = parseInt(dly*1000)
	this.target = tgt ? tgt=='' ? '_self' : tgt : '_self'
	this.box = new makeDom('tickBox')
	this.scrl = new makeDom('tickCont')
	this.draw()
}

fadeTicker.prototype.draw = function()
{
	this.onItem = (this.onItem<this.items.length) ? this.onItem : 0
	this.scrl.moveTo(this.scrl.x,this.box.h)
	this.scrl.writ('<a href=' + this.urls[this.onItem] + ' target="' + this.target + '">' + this.items[this.onItem] + '</a>')
	this.onItem++
	this.run()
}
fadeTicker.prototype.run = function()
{
	if(this.scrl.y>this.speed+1)
	{
		this.scrl.moveTo(this.scrl.x,this.scrl.y-this.speed)
		this.to = setTimeout(this.obj+'.run()',25)
	}
	else this.to = setTimeout(this.obj+'.fade()',this.delay)
}
fadeTicker.prototype.play = function()
{
	clearTimeout(this.to)
	this.to = setTimeout(this.obj+'.run()',1)
}
fadeTicker.prototype.pause = function()
{
	clearTimeout(this.to)
}
fadeTicker.prototype.fade = function()
{
	this.setOpac(this.alph)
	this.alph -= 10
	if(this.alph) setTimeout(this.obj+'.fade()',25)
	else
	{
		this.alph = 100
		this.setOpac(this.alph)
		this.draw()
	}
}
fadeTicker.prototype.setOpac = function(op)
{
	if(bw.ns6) this.scrl.css.MozOpacity = op+'%'
	else this.scrl.evnt.filters['alpha']['opacity'] = op
}
