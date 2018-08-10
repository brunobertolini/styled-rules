'use strict'
var path = function(t, e) {
		return t.reduce(function(t, e) {
			return t[e] ? t[e] : t
		}, e)
	},
	split = function(t, e) {
		return e.split(t)
	},
	choose = function(t, e) {
		return -1 === t.indexOf('.') ? (e ? t + '.contrast' : t + '.base') : t
	},
	get = function(t, e) {
		var r = e.indexOf('!') > -1,
			n = e.replace('!', ''),
			o = path(split('.', choose(n, r)), t)
		return 'string' == typeof o ? o : t[n] ? t[n] : n
	},
	colors = get
module.exports = colors
