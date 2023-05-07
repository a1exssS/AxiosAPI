;(function () {
	const e = document.createElement('link').relList
	if (e && e.supports && e.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver(i => {
		for (const s of i) if (s.type === 'childList') for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
	}).observe(document, {childList: !0, subtree: !0})
	function t(i) {
		const s = {}
		return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === 'use-credentials' ? (s.credentials = 'include') : i.crossOrigin === 'anonymous' ? (s.credentials = 'omit') : (s.credentials = 'same-origin'), s
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const s = t(i)
		fetch(i.href, s)
	}
})()
function dl(n, e) {
	return function () {
		return n.apply(e, arguments)
	}
}
const {toString: pl} = Object.prototype,
	{getPrototypeOf: Ro} = Object,
	zo = (n => e => {
		const t = pl.call(e)
		return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
	})(Object.create(null)),
	mr = n => ((n = n.toLowerCase()), e => zo(e) === n),
	bs = n => e => typeof e === n,
	{isArray: Ri} = Array,
	hn = bs('undefined')
function Tu(n) {
	return n !== null && !hn(n) && n.constructor !== null && !hn(n.constructor) && Rr(n.constructor.isBuffer) && n.constructor.isBuffer(n)
}
const hl = mr('ArrayBuffer')
function Su(n) {
	let e
	return typeof ArrayBuffer < 'u' && ArrayBuffer.isView ? (e = ArrayBuffer.isView(n)) : (e = n && n.buffer && hl(n.buffer)), e
}
const wu = bs('string'),
	Rr = bs('function'),
	gl = bs('number'),
	Io = n => n !== null && typeof n == 'object',
	Eu = n => n === !0 || n === !1,
	Vn = n => {
		if (zo(n) !== 'object') return !1
		const e = Ro(n)
		return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
	},
	Cu = mr('Date'),
	Pu = mr('File'),
	Ou = mr('Blob'),
	Mu = mr('FileList'),
	ku = n => Io(n) && Rr(n.pipe),
	Au = n => {
		const e = '[object FormData]'
		return n && ((typeof FormData == 'function' && n instanceof FormData) || pl.call(n) === e || (Rr(n.toString) && n.toString() === e))
	},
	Lu = mr('URLSearchParams'),
	Du = n => (n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
function wn(n, e, {allOwnKeys: t = !1} = {}) {
	if (n === null || typeof n > 'u') return
	let r, i
	if ((typeof n != 'object' && (n = [n]), Ri(n))) for (r = 0, i = n.length; r < i; r++) e.call(null, n[r], r, n)
	else {
		const s = t ? Object.getOwnPropertyNames(n) : Object.keys(n),
			o = s.length
		let a
		for (r = 0; r < o; r++) (a = s[r]), e.call(null, n[a], a, n)
	}
}
function ml(n, e) {
	e = e.toLowerCase()
	const t = Object.keys(n)
	let r = t.length,
		i
	for (; r-- > 0; ) if (((i = t[r]), e === i.toLowerCase())) return i
	return null
}
const _l = (() => (typeof globalThis < 'u' ? globalThis : typeof self < 'u' ? self : typeof window < 'u' ? window : global))(),
	yl = n => !hn(n) && n !== _l
function eo() {
	const {caseless: n} = (yl(this) && this) || {},
		e = {},
		t = (r, i) => {
			const s = (n && ml(e, i)) || i
			Vn(e[s]) && Vn(r) ? (e[s] = eo(e[s], r)) : Vn(r) ? (e[s] = eo({}, r)) : Ri(r) ? (e[s] = r.slice()) : (e[s] = r)
		}
	for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && wn(arguments[r], t)
	return e
}
const Ru = (n, e, t, {allOwnKeys: r} = {}) => (
		wn(
			e,
			(i, s) => {
				t && Rr(i) ? (n[s] = dl(i, t)) : (n[s] = i)
			},
			{allOwnKeys: r}
		),
		n
	),
	zu = n => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
	Iu = (n, e, t, r) => {
		;(n.prototype = Object.create(e.prototype, r)), (n.prototype.constructor = n), Object.defineProperty(n, 'super', {value: e.prototype}), t && Object.assign(n.prototype, t)
	},
	Fu = (n, e, t, r) => {
		let i, s, o
		const a = {}
		if (((e = e || {}), n == null)) return e
		do {
			for (i = Object.getOwnPropertyNames(n), s = i.length; s-- > 0; ) (o = i[s]), (!r || r(o, n, e)) && !a[o] && ((e[o] = n[o]), (a[o] = !0))
			n = t !== !1 && Ro(n)
		} while (n && (!t || t(n, e)) && n !== Object.prototype)
		return e
	},
	Bu = (n, e, t) => {
		;(n = String(n)), (t === void 0 || t > n.length) && (t = n.length), (t -= e.length)
		const r = n.indexOf(e, t)
		return r !== -1 && r === t
	},
	Nu = n => {
		if (!n) return null
		if (Ri(n)) return n
		let e = n.length
		if (!gl(e)) return null
		const t = new Array(e)
		for (; e-- > 0; ) t[e] = n[e]
		return t
	},
	$u = (
		n => e =>
			n && e instanceof n
	)(typeof Uint8Array < 'u' && Ro(Uint8Array)),
	Hu = (n, e) => {
		const r = (n && n[Symbol.iterator]).call(n)
		let i
		for (; (i = r.next()) && !i.done; ) {
			const s = i.value
			e.call(n, s[0], s[1])
		}
	},
	Gu = (n, e) => {
		let t
		const r = []
		for (; (t = n.exec(e)) !== null; ) r.push(t)
		return r
	},
	Vu = mr('HTMLFormElement'),
	qu = n =>
		n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, r, i) {
			return r.toUpperCase() + i
		}),
	da = (
		({hasOwnProperty: n}) =>
		(e, t) =>
			n.call(e, t)
	)(Object.prototype),
	Yu = mr('RegExp'),
	vl = (n, e) => {
		const t = Object.getOwnPropertyDescriptors(n),
			r = {}
		wn(t, (i, s) => {
			e(i, s, n) !== !1 && (r[s] = i)
		}),
			Object.defineProperties(n, r)
	},
	Uu = n => {
		vl(n, (e, t) => {
			if (Rr(n) && ['arguments', 'caller', 'callee'].indexOf(t) !== -1) return !1
			const r = n[t]
			if (Rr(r)) {
				if (((e.enumerable = !1), 'writable' in e)) {
					e.writable = !1
					return
				}
				e.set ||
					(e.set = () => {
						throw Error("Can not rewrite read-only method '" + t + "'")
					})
			}
		})
	},
	Wu = (n, e) => {
		const t = {},
			r = i => {
				i.forEach(s => {
					t[s] = !0
				})
			}
		return Ri(n) ? r(n) : r(String(n).split(e)), t
	},
	Xu = () => {},
	ju = (n, e) => ((n = +n), Number.isFinite(n) ? n : e),
	Ms = 'abcdefghijklmnopqrstuvwxyz',
	pa = '0123456789',
	bl = {DIGIT: pa, ALPHA: Ms, ALPHA_DIGIT: Ms + Ms.toUpperCase() + pa},
	Ku = (n = 16, e = bl.ALPHA_DIGIT) => {
		let t = ''
		const {length: r} = e
		for (; n--; ) t += e[(Math.random() * r) | 0]
		return t
	}
function Ju(n) {
	return !!(n && Rr(n.append) && n[Symbol.toStringTag] === 'FormData' && n[Symbol.iterator])
}
const Qu = n => {
		const e = new Array(10),
			t = (r, i) => {
				if (Io(r)) {
					if (e.indexOf(r) >= 0) return
					if (!('toJSON' in r)) {
						e[i] = r
						const s = Ri(r) ? [] : {}
						return (
							wn(r, (o, a) => {
								const l = t(o, i + 1)
								!hn(l) && (s[a] = l)
							}),
							(e[i] = void 0),
							s
						)
					}
				}
				return r
			}
		return t(n, 0)
	},
	M = {isArray: Ri, isArrayBuffer: hl, isBuffer: Tu, isFormData: Au, isArrayBufferView: Su, isString: wu, isNumber: gl, isBoolean: Eu, isObject: Io, isPlainObject: Vn, isUndefined: hn, isDate: Cu, isFile: Pu, isBlob: Ou, isRegExp: Yu, isFunction: Rr, isStream: ku, isURLSearchParams: Lu, isTypedArray: $u, isFileList: Mu, forEach: wn, merge: eo, extend: Ru, trim: Du, stripBOM: zu, inherits: Iu, toFlatObject: Fu, kindOf: zo, kindOfTest: mr, endsWith: Bu, toArray: Nu, forEachEntry: Hu, matchAll: Gu, isHTMLForm: Vu, hasOwnProperty: da, hasOwnProp: da, reduceDescriptors: vl, freezeMethods: Uu, toObjectSet: Wu, toCamelCase: qu, noop: Xu, toFiniteNumber: ju, findKey: ml, global: _l, isContextDefined: yl, ALPHABET: bl, generateString: Ku, isSpecCompliantForm: Ju, toJSONObject: Qu}
function Z(n, e, t, r, i) {
	Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack), (this.message = n), (this.name = 'AxiosError'), e && (this.code = e), t && (this.config = t), r && (this.request = r), i && (this.response = i)
}
M.inherits(Z, Error, {
	toJSON: function () {
		return {message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: M.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null}
	},
})
const xl = Z.prototype,
	Tl = {}
;['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'].forEach(n => {
	Tl[n] = {value: n}
})
Object.defineProperties(Z, Tl)
Object.defineProperty(xl, 'isAxiosError', {value: !0})
Z.from = (n, e, t, r, i, s) => {
	const o = Object.create(xl)
	return (
		M.toFlatObject(
			n,
			o,
			function (l) {
				return l !== Error.prototype
			},
			a => a !== 'isAxiosError'
		),
		Z.call(o, n.message, e, t, r, i),
		(o.cause = n),
		(o.name = n.name),
		s && Object.assign(o, s),
		o
	)
}
const Zu = null
function to(n) {
	return M.isPlainObject(n) || M.isArray(n)
}
function Sl(n) {
	return M.endsWith(n, '[]') ? n.slice(0, -2) : n
}
function ha(n, e, t) {
	return n
		? n
				.concat(e)
				.map(function (i, s) {
					return (i = Sl(i)), !t && s ? '[' + i + ']' : i
				})
				.join(t ? '.' : '')
		: e
}
function ef(n) {
	return M.isArray(n) && !n.some(to)
}
const tf = M.toFlatObject(M, {}, null, function (e) {
	return /^is[A-Z]/.test(e)
})
function xs(n, e, t) {
	if (!M.isObject(n)) throw new TypeError('target must be an object')
	;(e = e || new FormData()),
		(t = M.toFlatObject(t, {metaTokens: !0, dots: !1, indexes: !1}, !1, function (d, y) {
			return !M.isUndefined(y[d])
		}))
	const r = t.metaTokens,
		i = t.visitor || u,
		s = t.dots,
		o = t.indexes,
		l = (t.Blob || (typeof Blob < 'u' && Blob)) && M.isSpecCompliantForm(e)
	if (!M.isFunction(i)) throw new TypeError('visitor must be a function')
	function c(g) {
		if (g === null) return ''
		if (M.isDate(g)) return g.toISOString()
		if (!l && M.isBlob(g)) throw new Z('Blob is not supported. Use a Buffer instead.')
		return M.isArrayBuffer(g) || M.isTypedArray(g) ? (l && typeof Blob == 'function' ? new Blob([g]) : Buffer.from(g)) : g
	}
	function u(g, d, y) {
		let m = g
		if (g && !y && typeof g == 'object') {
			if (M.endsWith(d, '{}')) (d = r ? d : d.slice(0, -2)), (g = JSON.stringify(g))
			else if ((M.isArray(g) && ef(g)) || ((M.isFileList(g) || M.endsWith(d, '[]')) && (m = M.toArray(g))))
				return (
					(d = Sl(d)),
					m.forEach(function (v, b) {
						!(M.isUndefined(v) || v === null) && e.append(o === !0 ? ha([d], b, s) : o === null ? d : d + '[]', c(v))
					}),
					!1
				)
		}
		return to(g) ? !0 : (e.append(ha(y, d, s), c(g)), !1)
	}
	const p = [],
		h = Object.assign(tf, {defaultVisitor: u, convertValue: c, isVisitable: to})
	function f(g, d) {
		if (!M.isUndefined(g)) {
			if (p.indexOf(g) !== -1) throw Error('Circular reference detected in ' + d.join('.'))
			p.push(g),
				M.forEach(g, function (m, _) {
					;(!(M.isUndefined(m) || m === null) && i.call(e, m, M.isString(_) ? _.trim() : _, d, h)) === !0 && f(m, d ? d.concat(_) : [_])
				}),
				p.pop()
		}
	}
	if (!M.isObject(n)) throw new TypeError('data must be an object')
	return f(n), e
}
function ga(n) {
	const e = {'!': '%21', "'": '%27', '(': '%28', ')': '%29', '~': '%7E', '%20': '+', '%00': '\0'}
	return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (r) {
		return e[r]
	})
}
function Fo(n, e) {
	;(this._pairs = []), n && xs(n, this, e)
}
const wl = Fo.prototype
wl.append = function (e, t) {
	this._pairs.push([e, t])
}
wl.toString = function (e) {
	const t = e
		? function (r) {
				return e.call(this, r, ga)
		  }
		: ga
	return this._pairs
		.map(function (i) {
			return t(i[0]) + '=' + t(i[1])
		}, '')
		.join('&')
}
function rf(n) {
	return encodeURIComponent(n).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']')
}
function El(n, e, t) {
	if (!e) return n
	const r = (t && t.encode) || rf,
		i = t && t.serialize
	let s
	if ((i ? (s = i(e, t)) : (s = M.isURLSearchParams(e) ? e.toString() : new Fo(e, t).toString(r)), s)) {
		const o = n.indexOf('#')
		o !== -1 && (n = n.slice(0, o)), (n += (n.indexOf('?') === -1 ? '?' : '&') + s)
	}
	return n
}
class nf {
	constructor() {
		this.handlers = []
	}
	use(e, t, r) {
		return this.handlers.push({fulfilled: e, rejected: t, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null}), this.handlers.length - 1
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(e) {
		M.forEach(this.handlers, function (r) {
			r !== null && e(r)
		})
	}
}
const ma = nf,
	Cl = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1},
	sf = typeof URLSearchParams < 'u' ? URLSearchParams : Fo,
	of = typeof FormData < 'u' ? FormData : null,
	af = typeof Blob < 'u' ? Blob : null,
	lf = (() => {
		let n
		return typeof navigator < 'u' && ((n = navigator.product) === 'ReactNative' || n === 'NativeScript' || n === 'NS') ? !1 : typeof window < 'u' && typeof document < 'u'
	})(),
	cf = (() => typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope && typeof self.importScripts == 'function')(),
	Jt = {isBrowser: !0, classes: {URLSearchParams: sf, FormData: of, Blob: af}, isStandardBrowserEnv: lf, isStandardBrowserWebWorkerEnv: cf, protocols: ['http', 'https', 'file', 'blob', 'url', 'data']}
function uf(n, e) {
	return xs(
		n,
		new Jt.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (t, r, i, s) {
					return Jt.isNode && M.isBuffer(t) ? (this.append(r, t.toString('base64')), !1) : s.defaultVisitor.apply(this, arguments)
				},
			},
			e
		)
	)
}
function ff(n) {
	return M.matchAll(/\w+|\[(\w*)]/g, n).map(e => (e[0] === '[]' ? '' : e[1] || e[0]))
}
function df(n) {
	const e = {},
		t = Object.keys(n)
	let r
	const i = t.length
	let s
	for (r = 0; r < i; r++) (s = t[r]), (e[s] = n[s])
	return e
}
function Pl(n) {
	function e(t, r, i, s) {
		let o = t[s++]
		const a = Number.isFinite(+o),
			l = s >= t.length
		return (o = !o && M.isArray(i) ? i.length : o), l ? (M.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !a) : ((!i[o] || !M.isObject(i[o])) && (i[o] = []), e(t, r, i[o], s) && M.isArray(i[o]) && (i[o] = df(i[o])), !a)
	}
	if (M.isFormData(n) && M.isFunction(n.entries)) {
		const t = {}
		return (
			M.forEachEntry(n, (r, i) => {
				e(ff(r), i, t, 0)
			}),
			t
		)
	}
	return null
}
const pf = {'Content-Type': void 0}
function hf(n, e, t) {
	if (M.isString(n))
		try {
			return (e || JSON.parse)(n), M.trim(n)
		} catch (r) {
			if (r.name !== 'SyntaxError') throw r
		}
	return (t || JSON.stringify)(n)
}
const Ts = {
	transitional: Cl,
	adapter: ['xhr', 'http'],
	transformRequest: [
		function (e, t) {
			const r = t.getContentType() || '',
				i = r.indexOf('application/json') > -1,
				s = M.isObject(e)
			if ((s && M.isHTMLForm(e) && (e = new FormData(e)), M.isFormData(e))) return i && i ? JSON.stringify(Pl(e)) : e
			if (M.isArrayBuffer(e) || M.isBuffer(e) || M.isStream(e) || M.isFile(e) || M.isBlob(e)) return e
			if (M.isArrayBufferView(e)) return e.buffer
			if (M.isURLSearchParams(e)) return t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1), e.toString()
			let a
			if (s) {
				if (r.indexOf('application/x-www-form-urlencoded') > -1) return uf(e, this.formSerializer).toString()
				if ((a = M.isFileList(e)) || r.indexOf('multipart/form-data') > -1) {
					const l = this.env && this.env.FormData
					return xs(a ? {'files[]': e} : e, l && new l(), this.formSerializer)
				}
			}
			return s || i ? (t.setContentType('application/json', !1), hf(e)) : e
		},
	],
	transformResponse: [
		function (e) {
			const t = this.transitional || Ts.transitional,
				r = t && t.forcedJSONParsing,
				i = this.responseType === 'json'
			if (e && M.isString(e) && ((r && !this.responseType) || i)) {
				const o = !(t && t.silentJSONParsing) && i
				try {
					return JSON.parse(e)
				} catch (a) {
					if (o) throw a.name === 'SyntaxError' ? Z.from(a, Z.ERR_BAD_RESPONSE, this, null, this.response) : a
				}
			}
			return e
		},
	],
	timeout: 0,
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {FormData: Jt.classes.FormData, Blob: Jt.classes.Blob},
	validateStatus: function (e) {
		return e >= 200 && e < 300
	},
	headers: {common: {Accept: 'application/json, text/plain, */*'}},
}
M.forEach(['delete', 'get', 'head'], function (e) {
	Ts.headers[e] = {}
})
M.forEach(['post', 'put', 'patch'], function (e) {
	Ts.headers[e] = M.merge(pf)
})
const Bo = Ts,
	gf = M.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']),
	mf = n => {
		const e = {}
		let t, r, i
		return (
			n &&
				n
					.split(
						`
`
					)
					.forEach(function (o) {
						;(i = o.indexOf(':')), (t = o.substring(0, i).trim().toLowerCase()), (r = o.substring(i + 1).trim()), !(!t || (e[t] && gf[t])) && (t === 'set-cookie' ? (e[t] ? e[t].push(r) : (e[t] = [r])) : (e[t] = e[t] ? e[t] + ', ' + r : r))
					}),
			e
		)
	},
	_a = Symbol('internals')
function Gi(n) {
	return n && String(n).trim().toLowerCase()
}
function qn(n) {
	return n === !1 || n == null ? n : M.isArray(n) ? n.map(qn) : String(n)
}
function _f(n) {
	const e = Object.create(null),
		t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
	let r
	for (; (r = t.exec(n)); ) e[r[1]] = r[2]
	return e
}
const yf = n => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim())
function ks(n, e, t, r, i) {
	if (M.isFunction(r)) return r.call(this, e, t)
	if ((i && (e = t), !!M.isString(e))) {
		if (M.isString(r)) return e.indexOf(r) !== -1
		if (M.isRegExp(r)) return r.test(e)
	}
}
function vf(n) {
	return n
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r)
}
function bf(n, e) {
	const t = M.toCamelCase(' ' + e)
	;['get', 'set', 'has'].forEach(r => {
		Object.defineProperty(n, r + t, {
			value: function (i, s, o) {
				return this[r].call(this, e, i, s, o)
			},
			configurable: !0,
		})
	})
}
class Ss {
	constructor(e) {
		e && this.set(e)
	}
	set(e, t, r) {
		const i = this
		function s(a, l, c) {
			const u = Gi(l)
			if (!u) throw new Error('header name must be a non-empty string')
			const p = M.findKey(i, u)
			;(!p || i[p] === void 0 || c === !0 || (c === void 0 && i[p] !== !1)) && (i[p || l] = qn(a))
		}
		const o = (a, l) => M.forEach(a, (c, u) => s(c, u, l))
		return M.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : M.isString(e) && (e = e.trim()) && !yf(e) ? o(mf(e), t) : e != null && s(t, e, r), this
	}
	get(e, t) {
		if (((e = Gi(e)), e)) {
			const r = M.findKey(this, e)
			if (r) {
				const i = this[r]
				if (!t) return i
				if (t === !0) return _f(i)
				if (M.isFunction(t)) return t.call(this, i, r)
				if (M.isRegExp(t)) return t.exec(i)
				throw new TypeError('parser must be boolean|regexp|function')
			}
		}
	}
	has(e, t) {
		if (((e = Gi(e)), e)) {
			const r = M.findKey(this, e)
			return !!(r && this[r] !== void 0 && (!t || ks(this, this[r], r, t)))
		}
		return !1
	}
	delete(e, t) {
		const r = this
		let i = !1
		function s(o) {
			if (((o = Gi(o)), o)) {
				const a = M.findKey(r, o)
				a && (!t || ks(r, r[a], a, t)) && (delete r[a], (i = !0))
			}
		}
		return M.isArray(e) ? e.forEach(s) : s(e), i
	}
	clear(e) {
		const t = Object.keys(this)
		let r = t.length,
			i = !1
		for (; r--; ) {
			const s = t[r]
			;(!e || ks(this, this[s], s, e, !0)) && (delete this[s], (i = !0))
		}
		return i
	}
	normalize(e) {
		const t = this,
			r = {}
		return (
			M.forEach(this, (i, s) => {
				const o = M.findKey(r, s)
				if (o) {
					;(t[o] = qn(i)), delete t[s]
					return
				}
				const a = e ? vf(s) : String(s).trim()
				a !== s && delete t[s], (t[a] = qn(i)), (r[a] = !0)
			}),
			this
		)
	}
	concat(...e) {
		return this.constructor.concat(this, ...e)
	}
	toJSON(e) {
		const t = Object.create(null)
		return (
			M.forEach(this, (r, i) => {
				r != null && r !== !1 && (t[i] = e && M.isArray(r) ? r.join(', ') : r)
			}),
			t
		)
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ': ' + t).join(`
`)
	}
	get [Symbol.toStringTag]() {
		return 'AxiosHeaders'
	}
	static from(e) {
		return e instanceof this ? e : new this(e)
	}
	static concat(e, ...t) {
		const r = new this(e)
		return t.forEach(i => r.set(i)), r
	}
	static accessor(e) {
		const r = (this[_a] = this[_a] = {accessors: {}}).accessors,
			i = this.prototype
		function s(o) {
			const a = Gi(o)
			r[a] || (bf(i, o), (r[a] = !0))
		}
		return M.isArray(e) ? e.forEach(s) : s(e), this
	}
}
Ss.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization'])
M.freezeMethods(Ss.prototype)
M.freezeMethods(Ss)
const fr = Ss
function As(n, e) {
	const t = this || Bo,
		r = e || t,
		i = fr.from(r.headers)
	let s = r.data
	return (
		M.forEach(n, function (a) {
			s = a.call(t, s, i.normalize(), e ? e.status : void 0)
		}),
		i.normalize(),
		s
	)
}
function Ol(n) {
	return !!(n && n.__CANCEL__)
}
function En(n, e, t) {
	Z.call(this, n ?? 'canceled', Z.ERR_CANCELED, e, t), (this.name = 'CanceledError')
}
M.inherits(En, Z, {__CANCEL__: !0})
function xf(n, e, t) {
	const r = t.config.validateStatus
	!t.status || !r || r(t.status) ? n(t) : e(new Z('Request failed with status code ' + t.status, [Z.ERR_BAD_REQUEST, Z.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4], t.config, t.request, t))
}
const Tf = Jt.isStandardBrowserEnv
	? (function () {
			return {
				write: function (t, r, i, s, o, a) {
					const l = []
					l.push(t + '=' + encodeURIComponent(r)), M.isNumber(i) && l.push('expires=' + new Date(i).toGMTString()), M.isString(s) && l.push('path=' + s), M.isString(o) && l.push('domain=' + o), a === !0 && l.push('secure'), (document.cookie = l.join('; '))
				},
				read: function (t) {
					const r = document.cookie.match(new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'))
					return r ? decodeURIComponent(r[3]) : null
				},
				remove: function (t) {
					this.write(t, '', Date.now() - 864e5)
				},
			}
	  })()
	: (function () {
			return {
				write: function () {},
				read: function () {
					return null
				},
				remove: function () {},
			}
	  })()
function Sf(n) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}
function wf(n, e) {
	return e ? n.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : n
}
function Ml(n, e) {
	return n && !Sf(e) ? wf(n, e) : e
}
const Ef = Jt.isStandardBrowserEnv
	? (function () {
			const e = /(msie|trident)/i.test(navigator.userAgent),
				t = document.createElement('a')
			let r
			function i(s) {
				let o = s
				return e && (t.setAttribute('href', o), (o = t.href)), t.setAttribute('href', o), {href: t.href, protocol: t.protocol ? t.protocol.replace(/:$/, '') : '', host: t.host, search: t.search ? t.search.replace(/^\?/, '') : '', hash: t.hash ? t.hash.replace(/^#/, '') : '', hostname: t.hostname, port: t.port, pathname: t.pathname.charAt(0) === '/' ? t.pathname : '/' + t.pathname}
			}
			return (
				(r = i(window.location.href)),
				function (o) {
					const a = M.isString(o) ? i(o) : o
					return a.protocol === r.protocol && a.host === r.host
				}
			)
	  })()
	: (function () {
			return function () {
				return !0
			}
	  })()
function Cf(n) {
	const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n)
	return (e && e[1]) || ''
}
function Pf(n, e) {
	n = n || 10
	const t = new Array(n),
		r = new Array(n)
	let i = 0,
		s = 0,
		o
	return (
		(e = e !== void 0 ? e : 1e3),
		function (l) {
			const c = Date.now(),
				u = r[s]
			o || (o = c), (t[i] = l), (r[i] = c)
			let p = s,
				h = 0
			for (; p !== i; ) (h += t[p++]), (p = p % n)
			if (((i = (i + 1) % n), i === s && (s = (s + 1) % n), c - o < e)) return
			const f = u && c - u
			return f ? Math.round((h * 1e3) / f) : void 0
		}
	)
}
function ya(n, e) {
	let t = 0
	const r = Pf(50, 250)
	return i => {
		const s = i.loaded,
			o = i.lengthComputable ? i.total : void 0,
			a = s - t,
			l = r(a),
			c = s <= o
		t = s
		const u = {loaded: s, total: o, progress: o ? s / o : void 0, bytes: a, rate: l || void 0, estimated: l && o && c ? (o - s) / l : void 0, event: i}
		;(u[e ? 'download' : 'upload'] = !0), n(u)
	}
}
const Of = typeof XMLHttpRequest < 'u',
	Mf =
		Of &&
		function (n) {
			return new Promise(function (t, r) {
				let i = n.data
				const s = fr.from(n.headers).normalize(),
					o = n.responseType
				let a
				function l() {
					n.cancelToken && n.cancelToken.unsubscribe(a), n.signal && n.signal.removeEventListener('abort', a)
				}
				M.isFormData(i) && (Jt.isStandardBrowserEnv || Jt.isStandardBrowserWebWorkerEnv) && s.setContentType(!1)
				let c = new XMLHttpRequest()
				if (n.auth) {
					const f = n.auth.username || '',
						g = n.auth.password ? unescape(encodeURIComponent(n.auth.password)) : ''
					s.set('Authorization', 'Basic ' + btoa(f + ':' + g))
				}
				const u = Ml(n.baseURL, n.url)
				c.open(n.method.toUpperCase(), El(u, n.params, n.paramsSerializer), !0), (c.timeout = n.timeout)
				function p() {
					if (!c) return
					const f = fr.from('getAllResponseHeaders' in c && c.getAllResponseHeaders()),
						d = {data: !o || o === 'text' || o === 'json' ? c.responseText : c.response, status: c.status, statusText: c.statusText, headers: f, config: n, request: c}
					xf(
						function (m) {
							t(m), l()
						},
						function (m) {
							r(m), l()
						},
						d
					),
						(c = null)
				}
				if (
					('onloadend' in c
						? (c.onloadend = p)
						: (c.onreadystatechange = function () {
								!c || c.readyState !== 4 || (c.status === 0 && !(c.responseURL && c.responseURL.indexOf('file:') === 0)) || setTimeout(p)
						  }),
					(c.onabort = function () {
						c && (r(new Z('Request aborted', Z.ECONNABORTED, n, c)), (c = null))
					}),
					(c.onerror = function () {
						r(new Z('Network Error', Z.ERR_NETWORK, n, c)), (c = null)
					}),
					(c.ontimeout = function () {
						let g = n.timeout ? 'timeout of ' + n.timeout + 'ms exceeded' : 'timeout exceeded'
						const d = n.transitional || Cl
						n.timeoutErrorMessage && (g = n.timeoutErrorMessage), r(new Z(g, d.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED, n, c)), (c = null)
					}),
					Jt.isStandardBrowserEnv)
				) {
					const f = (n.withCredentials || Ef(u)) && n.xsrfCookieName && Tf.read(n.xsrfCookieName)
					f && s.set(n.xsrfHeaderName, f)
				}
				i === void 0 && s.setContentType(null),
					'setRequestHeader' in c &&
						M.forEach(s.toJSON(), function (g, d) {
							c.setRequestHeader(d, g)
						}),
					M.isUndefined(n.withCredentials) || (c.withCredentials = !!n.withCredentials),
					o && o !== 'json' && (c.responseType = n.responseType),
					typeof n.onDownloadProgress == 'function' && c.addEventListener('progress', ya(n.onDownloadProgress, !0)),
					typeof n.onUploadProgress == 'function' && c.upload && c.upload.addEventListener('progress', ya(n.onUploadProgress)),
					(n.cancelToken || n.signal) &&
						((a = f => {
							c && (r(!f || f.type ? new En(null, n, c) : f), c.abort(), (c = null))
						}),
						n.cancelToken && n.cancelToken.subscribe(a),
						n.signal && (n.signal.aborted ? a() : n.signal.addEventListener('abort', a)))
				const h = Cf(u)
				if (h && Jt.protocols.indexOf(h) === -1) {
					r(new Z('Unsupported protocol ' + h + ':', Z.ERR_BAD_REQUEST, n))
					return
				}
				c.send(i || null)
			})
		},
	Yn = {http: Zu, xhr: Mf}
M.forEach(Yn, (n, e) => {
	if (n) {
		try {
			Object.defineProperty(n, 'name', {value: e})
		} catch {}
		Object.defineProperty(n, 'adapterName', {value: e})
	}
})
const kf = {
	getAdapter: n => {
		n = M.isArray(n) ? n : [n]
		const {length: e} = n
		let t, r
		for (let i = 0; i < e && ((t = n[i]), !(r = M.isString(t) ? Yn[t.toLowerCase()] : t)); i++);
		if (!r) throw r === !1 ? new Z(`Adapter ${t} is not supported by the environment`, 'ERR_NOT_SUPPORT') : new Error(M.hasOwnProp(Yn, t) ? `Adapter '${t}' is not available in the build` : `Unknown adapter '${t}'`)
		if (!M.isFunction(r)) throw new TypeError('adapter is not a function')
		return r
	},
	adapters: Yn,
}
function Ls(n) {
	if ((n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)) throw new En(null, n)
}
function va(n) {
	return (
		Ls(n),
		(n.headers = fr.from(n.headers)),
		(n.data = As.call(n, n.transformRequest)),
		['post', 'put', 'patch'].indexOf(n.method) !== -1 && n.headers.setContentType('application/x-www-form-urlencoded', !1),
		kf
			.getAdapter(n.adapter || Bo.adapter)(n)
			.then(
				function (r) {
					return Ls(n), (r.data = As.call(n, n.transformResponse, r)), (r.headers = fr.from(r.headers)), r
				},
				function (r) {
					return Ol(r) || (Ls(n), r && r.response && ((r.response.data = As.call(n, n.transformResponse, r.response)), (r.response.headers = fr.from(r.response.headers)))), Promise.reject(r)
				}
			)
	)
}
const ba = n => (n instanceof fr ? n.toJSON() : n)
function Ei(n, e) {
	e = e || {}
	const t = {}
	function r(c, u, p) {
		return M.isPlainObject(c) && M.isPlainObject(u) ? M.merge.call({caseless: p}, c, u) : M.isPlainObject(u) ? M.merge({}, u) : M.isArray(u) ? u.slice() : u
	}
	function i(c, u, p) {
		if (M.isUndefined(u)) {
			if (!M.isUndefined(c)) return r(void 0, c, p)
		} else return r(c, u, p)
	}
	function s(c, u) {
		if (!M.isUndefined(u)) return r(void 0, u)
	}
	function o(c, u) {
		if (M.isUndefined(u)) {
			if (!M.isUndefined(c)) return r(void 0, c)
		} else return r(void 0, u)
	}
	function a(c, u, p) {
		if (p in e) return r(c, u)
		if (p in n) return r(void 0, c)
	}
	const l = {url: s, method: s, data: s, baseURL: o, transformRequest: o, transformResponse: o, paramsSerializer: o, timeout: o, timeoutMessage: o, withCredentials: o, adapter: o, responseType: o, xsrfCookieName: o, xsrfHeaderName: o, onUploadProgress: o, onDownloadProgress: o, decompress: o, maxContentLength: o, maxBodyLength: o, beforeRedirect: o, transport: o, httpAgent: o, httpsAgent: o, cancelToken: o, socketPath: o, responseEncoding: o, validateStatus: a, headers: (c, u) => i(ba(c), ba(u), !0)}
	return (
		M.forEach(Object.keys(n).concat(Object.keys(e)), function (u) {
			const p = l[u] || i,
				h = p(n[u], e[u], u)
			;(M.isUndefined(h) && p !== a) || (t[u] = h)
		}),
		t
	)
}
const kl = '1.3.5',
	No = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((n, e) => {
	No[n] = function (r) {
		return typeof r === n || 'a' + (e < 1 ? 'n ' : ' ') + n
	}
})
const xa = {}
No.transitional = function (e, t, r) {
	function i(s, o) {
		return '[Axios v' + kl + "] Transitional option '" + s + "'" + o + (r ? '. ' + r : '')
	}
	return (s, o, a) => {
		if (e === !1) throw new Z(i(o, ' has been removed' + (t ? ' in ' + t : '')), Z.ERR_DEPRECATED)
		return t && !xa[o] && ((xa[o] = !0), console.warn(i(o, ' has been deprecated since v' + t + ' and will be removed in the near future'))), e ? e(s, o, a) : !0
	}
}
function Af(n, e, t) {
	if (typeof n != 'object') throw new Z('options must be an object', Z.ERR_BAD_OPTION_VALUE)
	const r = Object.keys(n)
	let i = r.length
	for (; i-- > 0; ) {
		const s = r[i],
			o = e[s]
		if (o) {
			const a = n[s],
				l = a === void 0 || o(a, s, n)
			if (l !== !0) throw new Z('option ' + s + ' must be ' + l, Z.ERR_BAD_OPTION_VALUE)
			continue
		}
		if (t !== !0) throw new Z('Unknown option ' + s, Z.ERR_BAD_OPTION)
	}
}
const ro = {assertOptions: Af, validators: No},
	xr = ro.validators
class ns {
	constructor(e) {
		;(this.defaults = e), (this.interceptors = {request: new ma(), response: new ma()})
	}
	request(e, t) {
		typeof e == 'string' ? ((t = t || {}), (t.url = e)) : (t = e || {}), (t = Ei(this.defaults, t))
		const {transitional: r, paramsSerializer: i, headers: s} = t
		r !== void 0 && ro.assertOptions(r, {silentJSONParsing: xr.transitional(xr.boolean), forcedJSONParsing: xr.transitional(xr.boolean), clarifyTimeoutError: xr.transitional(xr.boolean)}, !1), i != null && (M.isFunction(i) ? (t.paramsSerializer = {serialize: i}) : ro.assertOptions(i, {encode: xr.function, serialize: xr.function}, !0)), (t.method = (t.method || this.defaults.method || 'get').toLowerCase())
		let o
		;(o = s && M.merge(s.common, s[t.method])),
			o &&
				M.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], g => {
					delete s[g]
				}),
			(t.headers = fr.concat(o, s))
		const a = []
		let l = !0
		this.interceptors.request.forEach(function (d) {
			;(typeof d.runWhen == 'function' && d.runWhen(t) === !1) || ((l = l && d.synchronous), a.unshift(d.fulfilled, d.rejected))
		})
		const c = []
		this.interceptors.response.forEach(function (d) {
			c.push(d.fulfilled, d.rejected)
		})
		let u,
			p = 0,
			h
		if (!l) {
			const g = [va.bind(this), void 0]
			for (g.unshift.apply(g, a), g.push.apply(g, c), h = g.length, u = Promise.resolve(t); p < h; ) u = u.then(g[p++], g[p++])
			return u
		}
		h = a.length
		let f = t
		for (p = 0; p < h; ) {
			const g = a[p++],
				d = a[p++]
			try {
				f = g(f)
			} catch (y) {
				d.call(this, y)
				break
			}
		}
		try {
			u = va.call(this, f)
		} catch (g) {
			return Promise.reject(g)
		}
		for (p = 0, h = c.length; p < h; ) u = u.then(c[p++], c[p++])
		return u
	}
	getUri(e) {
		e = Ei(this.defaults, e)
		const t = Ml(e.baseURL, e.url)
		return El(t, e.params, e.paramsSerializer)
	}
}
M.forEach(['delete', 'get', 'head', 'options'], function (e) {
	ns.prototype[e] = function (t, r) {
		return this.request(Ei(r || {}, {method: e, url: t, data: (r || {}).data}))
	}
})
M.forEach(['post', 'put', 'patch'], function (e) {
	function t(r) {
		return function (s, o, a) {
			return this.request(Ei(a || {}, {method: e, headers: r ? {'Content-Type': 'multipart/form-data'} : {}, url: s, data: o}))
		}
	}
	;(ns.prototype[e] = t()), (ns.prototype[e + 'Form'] = t(!0))
})
const Un = ns
class $o {
	constructor(e) {
		if (typeof e != 'function') throw new TypeError('executor must be a function.')
		let t
		this.promise = new Promise(function (s) {
			t = s
		})
		const r = this
		this.promise.then(i => {
			if (!r._listeners) return
			let s = r._listeners.length
			for (; s-- > 0; ) r._listeners[s](i)
			r._listeners = null
		}),
			(this.promise.then = i => {
				let s
				const o = new Promise(a => {
					r.subscribe(a), (s = a)
				}).then(i)
				return (
					(o.cancel = function () {
						r.unsubscribe(s)
					}),
					o
				)
			}),
			e(function (s, o, a) {
				r.reason || ((r.reason = new En(s, o, a)), t(r.reason))
			})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason)
			return
		}
		this._listeners ? this._listeners.push(e) : (this._listeners = [e])
	}
	unsubscribe(e) {
		if (!this._listeners) return
		const t = this._listeners.indexOf(e)
		t !== -1 && this._listeners.splice(t, 1)
	}
	static source() {
		let e
		return {
			token: new $o(function (i) {
				e = i
			}),
			cancel: e,
		}
	}
}
const Lf = $o
function Df(n) {
	return function (t) {
		return n.apply(null, t)
	}
}
function Rf(n) {
	return M.isObject(n) && n.isAxiosError === !0
}
const io = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
}
Object.entries(io).forEach(([n, e]) => {
	io[e] = n
})
const zf = io
function Al(n) {
	const e = new Un(n),
		t = dl(Un.prototype.request, e)
	return (
		M.extend(t, Un.prototype, e, {allOwnKeys: !0}),
		M.extend(t, e, null, {allOwnKeys: !0}),
		(t.create = function (i) {
			return Al(Ei(n, i))
		}),
		t
	)
}
const Ee = Al(Bo)
Ee.Axios = Un
Ee.CanceledError = En
Ee.CancelToken = Lf
Ee.isCancel = Ol
Ee.VERSION = kl
Ee.toFormData = xs
Ee.AxiosError = Z
Ee.Cancel = Ee.CanceledError
Ee.all = function (e) {
	return Promise.all(e)
}
Ee.spread = Df
Ee.isAxiosError = Rf
Ee.mergeConfig = Ei
Ee.AxiosHeaders = fr
Ee.formToJSON = n => Pl(M.isHTMLForm(n) ? new FormData(n) : n)
Ee.HttpStatusCode = zf
Ee.default = Ee
const Ll = Ee,
	Dl = Ll.get('https://fakestoreapi.com/products')
		.then(n => n.data)
		.then(n => n)
		.catch(n => {
			console.error(n)
		})
function If(n) {
	const e = n.target.offsetParent
	return Number(e.getAttribute('data-number')) - 1
}
function Ta(n) {
	return n !== null && typeof n == 'object' && 'constructor' in n && n.constructor === Object
}
function Ho(n = {}, e = {}) {
	Object.keys(e).forEach(t => {
		typeof n[t] > 'u' ? (n[t] = e[t]) : Ta(e[t]) && Ta(n[t]) && Object.keys(e[t]).length > 0 && Ho(n[t], e[t])
	})
}
const Rl = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: {blur() {}, nodeName: ''},
	querySelector() {
		return null
	},
	querySelectorAll() {
		return []
	},
	getElementById() {
		return null
	},
	createEvent() {
		return {initEvent() {}}
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return []
			},
		}
	},
	createElementNS() {
		return {}
	},
	importNode() {
		return null
	},
	location: {hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: ''},
}
function si() {
	const n = typeof document < 'u' ? document : {}
	return Ho(n, Rl), n
}
const Ff = {
	document: Rl,
	navigator: {userAgent: ''},
	location: {hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: ''},
	history: {replaceState() {}, pushState() {}, go() {}, back() {}},
	CustomEvent: function () {
		return this
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return ''
			},
		}
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {}
	},
	requestAnimationFrame(n) {
		return typeof setTimeout > 'u' ? (n(), null) : setTimeout(n, 0)
	},
	cancelAnimationFrame(n) {
		typeof setTimeout > 'u' || clearTimeout(n)
	},
}
function Et() {
	const n = typeof window < 'u' ? window : {}
	return Ho(n, Ff), n
}
function Bf(n) {
	const e = n
	Object.keys(e).forEach(t => {
		try {
			e[t] = null
		} catch {}
		try {
			delete e[t]
		} catch {}
	})
}
function no(n, e = 0) {
	return setTimeout(n, e)
}
function ss() {
	return Date.now()
}
function Nf(n) {
	const e = Et()
	let t
	return e.getComputedStyle && (t = e.getComputedStyle(n, null)), !t && n.currentStyle && (t = n.currentStyle), t || (t = n.style), t
}
function $f(n, e = 'x') {
	const t = Et()
	let r, i, s
	const o = Nf(n)
	return (
		t.WebKitCSSMatrix
			? ((i = o.transform || o.webkitTransform),
			  i.split(',').length > 6 &&
					(i = i
						.split(', ')
						.map(a => a.replace(',', '.'))
						.join(', ')),
			  (s = new t.WebKitCSSMatrix(i === 'none' ? '' : i)))
			: ((s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')), (r = s.toString().split(','))),
		e === 'x' && (t.WebKitCSSMatrix ? (i = s.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
		e === 'y' && (t.WebKitCSSMatrix ? (i = s.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
		i || 0
	)
}
function On(n) {
	return typeof n == 'object' && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === 'Object'
}
function Hf(n) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u' ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
}
function yt(...n) {
	const e = Object(n[0]),
		t = ['__proto__', 'constructor', 'prototype']
	for (let r = 1; r < n.length; r += 1) {
		const i = n[r]
		if (i != null && !Hf(i)) {
			const s = Object.keys(Object(i)).filter(o => t.indexOf(o) < 0)
			for (let o = 0, a = s.length; o < a; o += 1) {
				const l = s[o],
					c = Object.getOwnPropertyDescriptor(i, l)
				c !== void 0 && c.enumerable && (On(e[l]) && On(i[l]) ? (i[l].__swiper__ ? (e[l] = i[l]) : yt(e[l], i[l])) : !On(e[l]) && On(i[l]) ? ((e[l] = {}), i[l].__swiper__ ? (e[l] = i[l]) : yt(e[l], i[l])) : (e[l] = i[l]))
			}
		}
	}
	return e
}
function Mn(n, e, t) {
	n.style.setProperty(e, t)
}
function zl({swiper: n, targetPosition: e, side: t}) {
	const r = Et(),
		i = -n.translate
	let s = null,
		o
	const a = n.params.speed
	;(n.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(n.cssModeFrameID)
	const l = e > i ? 'next' : 'prev',
		c = (p, h) => (l === 'next' && p >= h) || (l === 'prev' && p <= h),
		u = () => {
			;(o = new Date().getTime()), s === null && (s = o)
			const p = Math.max(Math.min((o - s) / a, 1), 0),
				h = 0.5 - Math.cos(p * Math.PI) / 2
			let f = i + h * (e - i)
			if ((c(f, e) && (f = e), n.wrapperEl.scrollTo({[t]: f}), c(f, e))) {
				;(n.wrapperEl.style.overflow = 'hidden'),
					(n.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						;(n.wrapperEl.style.overflow = ''), n.wrapperEl.scrollTo({[t]: f})
					}),
					r.cancelAnimationFrame(n.cssModeFrameID)
				return
			}
			n.cssModeFrameID = r.requestAnimationFrame(u)
		}
	u()
}
function Qt(n, e = '') {
	return [...n.children].filter(t => t.matches(e))
}
function Il(n, e = []) {
	const t = document.createElement(n)
	return t.classList.add(...(Array.isArray(e) ? e : [e])), t
}
function Gf(n, e) {
	const t = []
	for (; n.previousElementSibling; ) {
		const r = n.previousElementSibling
		e ? r.matches(e) && t.push(r) : t.push(r), (n = r)
	}
	return t
}
function Vf(n, e) {
	const t = []
	for (; n.nextElementSibling; ) {
		const r = n.nextElementSibling
		e ? r.matches(e) && t.push(r) : t.push(r), (n = r)
	}
	return t
}
function Sr(n, e) {
	return Et().getComputedStyle(n, null).getPropertyValue(e)
}
function os(n) {
	let e = n,
		t
	if (e) {
		for (t = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (t += 1)
		return t
	}
}
function Fl(n, e) {
	const t = []
	let r = n.parentElement
	for (; r; ) e ? r.matches(e) && t.push(r) : t.push(r), (r = r.parentElement)
	return t
}
function so(n, e, t) {
	const r = Et()
	return t ? n[e === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(r.getComputedStyle(n, null).getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(r.getComputedStyle(n, null).getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom')) : n.offsetWidth
}
let Ds
function qf() {
	const n = Et(),
		e = si()
	return {smoothScroll: e.documentElement && 'scrollBehavior' in e.documentElement.style, touch: !!('ontouchstart' in n || (n.DocumentTouch && e instanceof n.DocumentTouch))}
}
function Bl() {
	return Ds || (Ds = qf()), Ds
}
let Rs
function Yf({userAgent: n} = {}) {
	const e = Bl(),
		t = Et(),
		r = t.navigator.platform,
		i = n || t.navigator.userAgent,
		s = {ios: !1, android: !1},
		o = t.screen.width,
		a = t.screen.height,
		l = i.match(/(Android);?[\s\/]+([\d.]+)?/)
	let c = i.match(/(iPad).*OS\s([\d_]+)/)
	const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
		p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		h = r === 'Win32'
	let f = r === 'MacIntel'
	const g = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810']
	return !c && f && e.touch && g.indexOf(`${o}x${a}`) >= 0 && ((c = i.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (f = !1)), l && !h && ((s.os = 'android'), (s.android = !0)), (c || p || u) && ((s.os = 'ios'), (s.ios = !0)), s
}
function Uf(n = {}) {
	return Rs || (Rs = Yf(n)), Rs
}
let zs
function Wf() {
	const n = Et()
	let e = !1
	function t() {
		const r = n.navigator.userAgent.toLowerCase()
		return r.indexOf('safari') >= 0 && r.indexOf('chrome') < 0 && r.indexOf('android') < 0
	}
	if (t()) {
		const r = String(n.navigator.userAgent)
		if (r.includes('Version/')) {
			const [i, s] = r
				.split('Version/')[1]
				.split(' ')[0]
				.split('.')
				.map(o => Number(o))
			e = i < 16 || (i === 16 && s < 2)
		}
	}
	return {isSafari: e || t(), needPerspectiveFix: e, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)}
}
function Xf() {
	return zs || (zs = Wf()), zs
}
function jf({swiper: n, on: e, emit: t}) {
	const r = Et()
	let i = null,
		s = null
	const o = () => {
			!n || n.destroyed || !n.initialized || (t('beforeResize'), t('resize'))
		},
		a = () => {
			!n ||
				n.destroyed ||
				!n.initialized ||
				((i = new ResizeObserver(u => {
					s = r.requestAnimationFrame(() => {
						const {width: p, height: h} = n
						let f = p,
							g = h
						u.forEach(({contentBoxSize: d, contentRect: y, target: m}) => {
							;(m && m !== n.el) || ((f = y ? y.width : (d[0] || d).inlineSize), (g = y ? y.height : (d[0] || d).blockSize))
						}),
							(f !== p || g !== h) && o()
					})
				})),
				i.observe(n.el))
		},
		l = () => {
			s && r.cancelAnimationFrame(s), i && i.unobserve && n.el && (i.unobserve(n.el), (i = null))
		},
		c = () => {
			!n || n.destroyed || !n.initialized || t('orientationchange')
		}
	e('init', () => {
		if (n.params.resizeObserver && typeof r.ResizeObserver < 'u') {
			a()
			return
		}
		r.addEventListener('resize', o), r.addEventListener('orientationchange', c)
	}),
		e('destroy', () => {
			l(), r.removeEventListener('resize', o), r.removeEventListener('orientationchange', c)
		})
}
function Kf({swiper: n, extendParams: e, on: t, emit: r}) {
	const i = [],
		s = Et(),
		o = (c, u = {}) => {
			const p = s.MutationObserver || s.WebkitMutationObserver,
				h = new p(f => {
					if (n.__preventObserver__) return
					if (f.length === 1) {
						r('observerUpdate', f[0])
						return
					}
					const g = function () {
						r('observerUpdate', f[0])
					}
					s.requestAnimationFrame ? s.requestAnimationFrame(g) : s.setTimeout(g, 0)
				})
			h.observe(c, {attributes: typeof u.attributes > 'u' ? !0 : u.attributes, childList: typeof u.childList > 'u' ? !0 : u.childList, characterData: typeof u.characterData > 'u' ? !0 : u.characterData}), i.push(h)
		},
		a = () => {
			if (n.params.observer) {
				if (n.params.observeParents) {
					const c = Fl(n.el)
					for (let u = 0; u < c.length; u += 1) o(c[u])
				}
				o(n.el, {childList: n.params.observeSlideChildren}), o(n.wrapperEl, {attributes: !1})
			}
		},
		l = () => {
			i.forEach(c => {
				c.disconnect()
			}),
				i.splice(0, i.length)
		}
	e({observer: !1, observeParents: !1, observeSlideChildren: !1}), t('init', a), t('destroy', l)
}
const Jf = {
	on(n, e, t) {
		const r = this
		if (!r.eventsListeners || r.destroyed || typeof e != 'function') return r
		const i = t ? 'unshift' : 'push'
		return (
			n.split(' ').forEach(s => {
				r.eventsListeners[s] || (r.eventsListeners[s] = []), r.eventsListeners[s][i](e)
			}),
			r
		)
	},
	once(n, e, t) {
		const r = this
		if (!r.eventsListeners || r.destroyed || typeof e != 'function') return r
		function i(...s) {
			r.off(n, i), i.__emitterProxy && delete i.__emitterProxy, e.apply(r, s)
		}
		return (i.__emitterProxy = e), r.on(n, i, t)
	},
	onAny(n, e) {
		const t = this
		if (!t.eventsListeners || t.destroyed || typeof n != 'function') return t
		const r = e ? 'unshift' : 'push'
		return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[r](n), t
	},
	offAny(n) {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
		const t = e.eventsAnyListeners.indexOf(n)
		return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
	},
	off(n, e) {
		const t = this
		return (
			!t.eventsListeners ||
				t.destroyed ||
				!t.eventsListeners ||
				n.split(' ').forEach(r => {
					typeof e > 'u'
						? (t.eventsListeners[r] = [])
						: t.eventsListeners[r] &&
						  t.eventsListeners[r].forEach((i, s) => {
								;(i === e || (i.__emitterProxy && i.__emitterProxy === e)) && t.eventsListeners[r].splice(s, 1)
						  })
				}),
			t
		)
	},
	emit(...n) {
		const e = this
		if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
		let t, r, i
		return (
			typeof n[0] == 'string' || Array.isArray(n[0]) ? ((t = n[0]), (r = n.slice(1, n.length)), (i = e)) : ((t = n[0].events), (r = n[0].data), (i = n[0].context || e)),
			r.unshift(i),
			(Array.isArray(t) ? t : t.split(' ')).forEach(o => {
				e.eventsAnyListeners &&
					e.eventsAnyListeners.length &&
					e.eventsAnyListeners.forEach(a => {
						a.apply(i, [o, ...r])
					}),
					e.eventsListeners &&
						e.eventsListeners[o] &&
						e.eventsListeners[o].forEach(a => {
							a.apply(i, r)
						})
			}),
			e
		)
	},
}
function Qf() {
	const n = this
	let e, t
	const r = n.el
	typeof n.params.width < 'u' && n.params.width !== null ? (e = n.params.width) : (e = r.clientWidth), typeof n.params.height < 'u' && n.params.height !== null ? (t = n.params.height) : (t = r.clientHeight), !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) && ((e = e - parseInt(Sr(r, 'padding-left') || 0, 10) - parseInt(Sr(r, 'padding-right') || 0, 10)), (t = t - parseInt(Sr(r, 'padding-top') || 0, 10) - parseInt(Sr(r, 'padding-bottom') || 0, 10)), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(n, {width: e, height: t, size: n.isHorizontal() ? e : t}))
}
function Zf() {
	const n = this
	function e(k) {
		return n.isHorizontal() ? k : {width: 'height', 'margin-top': 'margin-left', 'margin-bottom ': 'margin-right', 'margin-left': 'margin-top', 'margin-right': 'margin-bottom', 'padding-left': 'padding-top', 'padding-right': 'padding-bottom', marginRight: 'marginBottom'}[k]
	}
	function t(k, E) {
		return parseFloat(k.getPropertyValue(e(E)) || 0)
	}
	const r = n.params,
		{wrapperEl: i, slidesEl: s, size: o, rtlTranslate: a, wrongRTL: l} = n,
		c = n.virtual && r.virtual.enabled,
		u = c ? n.virtual.slides.length : n.slides.length,
		p = Qt(s, `.${n.params.slideClass}, swiper-slide`),
		h = c ? n.virtual.slides.length : p.length
	let f = []
	const g = [],
		d = []
	let y = r.slidesOffsetBefore
	typeof y == 'function' && (y = r.slidesOffsetBefore.call(n))
	let m = r.slidesOffsetAfter
	typeof m == 'function' && (m = r.slidesOffsetAfter.call(n))
	const _ = n.snapGrid.length,
		v = n.slidesGrid.length
	let b = r.spaceBetween,
		x = -y,
		S = 0,
		w = 0
	if (typeof o > 'u') return
	typeof b == 'string' && b.indexOf('%') >= 0 && (b = (parseFloat(b.replace('%', '')) / 100) * o),
		(n.virtualSize = -b),
		p.forEach(k => {
			a ? (k.style.marginLeft = '') : (k.style.marginRight = ''), (k.style.marginBottom = ''), (k.style.marginTop = '')
		}),
		r.centeredSlides && r.cssMode && (Mn(i, '--swiper-centered-offset-before', ''), Mn(i, '--swiper-centered-offset-after', ''))
	const P = r.grid && r.grid.rows > 1 && n.grid
	P && n.grid.initSlides(h)
	let C
	const A = r.slidesPerView === 'auto' && r.breakpoints && Object.keys(r.breakpoints).filter(k => typeof r.breakpoints[k].slidesPerView < 'u').length > 0
	for (let k = 0; k < h; k += 1) {
		C = 0
		let E
		if ((p[k] && (E = p[k]), P && n.grid.updateSlide(k, E, h, e), !(p[k] && Sr(E, 'display') === 'none'))) {
			if (r.slidesPerView === 'auto') {
				A && (p[k].style[e('width')] = '')
				const D = getComputedStyle(E),
					R = E.style.transform,
					B = E.style.webkitTransform
				if ((R && (E.style.transform = 'none'), B && (E.style.webkitTransform = 'none'), r.roundLengths)) C = n.isHorizontal() ? so(E, 'width', !0) : so(E, 'height', !0)
				else {
					const q = t(D, 'width'),
						N = t(D, 'padding-left'),
						W = t(D, 'padding-right'),
						ee = t(D, 'margin-left'),
						T = t(D, 'margin-right'),
						re = D.getPropertyValue('box-sizing')
					if (re && re === 'border-box') C = q + ee + T
					else {
						const {clientWidth: Re, offsetWidth: ft} = E
						C = q + N + W + ee + T + (ft - Re)
					}
				}
				R && (E.style.transform = R), B && (E.style.webkitTransform = B), r.roundLengths && (C = Math.floor(C))
			} else (C = (o - (r.slidesPerView - 1) * b) / r.slidesPerView), r.roundLengths && (C = Math.floor(C)), p[k] && (p[k].style[e('width')] = `${C}px`)
			p[k] && (p[k].swiperSlideSize = C), d.push(C), r.centeredSlides ? ((x = x + C / 2 + S / 2 + b), S === 0 && k !== 0 && (x = x - o / 2 - b), k === 0 && (x = x - o / 2 - b), Math.abs(x) < 1 / 1e3 && (x = 0), r.roundLengths && (x = Math.floor(x)), w % r.slidesPerGroup === 0 && f.push(x), g.push(x)) : (r.roundLengths && (x = Math.floor(x)), (w - Math.min(n.params.slidesPerGroupSkip, w)) % n.params.slidesPerGroup === 0 && f.push(x), g.push(x), (x = x + C + b)), (n.virtualSize += C + b), (S = C), (w += 1)
		}
	}
	if (((n.virtualSize = Math.max(n.virtualSize, o) + m), a && l && (r.effect === 'slide' || r.effect === 'coverflow') && (i.style.width = `${n.virtualSize + r.spaceBetween}px`), r.setWrapperSize && (i.style[e('width')] = `${n.virtualSize + r.spaceBetween}px`), P && n.grid.updateWrapperSize(C, f, e), !r.centeredSlides)) {
		const k = []
		for (let E = 0; E < f.length; E += 1) {
			let D = f[E]
			r.roundLengths && (D = Math.floor(D)), f[E] <= n.virtualSize - o && k.push(D)
		}
		;(f = k), Math.floor(n.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 && f.push(n.virtualSize - o)
	}
	if (c && r.loop) {
		const k = d[0] + b
		if (r.slidesPerGroup > 1) {
			const E = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / r.slidesPerGroup),
				D = k * r.slidesPerGroup
			for (let R = 0; R < E; R += 1) f.push(f[f.length - 1] + D)
		}
		for (let E = 0; E < n.virtual.slidesBefore + n.virtual.slidesAfter; E += 1) r.slidesPerGroup === 1 && f.push(f[f.length - 1] + k), g.push(g[g.length - 1] + k), (n.virtualSize += k)
	}
	if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
		const k = n.isHorizontal() && a ? 'marginLeft' : e('marginRight')
		p.filter((E, D) => (!r.cssMode || r.loop ? !0 : D !== p.length - 1)).forEach(E => {
			E.style[k] = `${b}px`
		})
	}
	if (r.centeredSlides && r.centeredSlidesBounds) {
		let k = 0
		d.forEach(D => {
			k += D + (r.spaceBetween ? r.spaceBetween : 0)
		}),
			(k -= r.spaceBetween)
		const E = k - o
		f = f.map(D => (D < 0 ? -y : D > E ? E + m : D))
	}
	if (r.centerInsufficientSlides) {
		let k = 0
		if (
			(d.forEach(E => {
				k += E + (r.spaceBetween ? r.spaceBetween : 0)
			}),
			(k -= r.spaceBetween),
			k < o)
		) {
			const E = (o - k) / 2
			f.forEach((D, R) => {
				f[R] = D - E
			}),
				g.forEach((D, R) => {
					g[R] = D + E
				})
		}
	}
	if ((Object.assign(n, {slides: p, snapGrid: f, slidesGrid: g, slidesSizesGrid: d}), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)) {
		Mn(i, '--swiper-centered-offset-before', `${-f[0]}px`), Mn(i, '--swiper-centered-offset-after', `${n.size / 2 - d[d.length - 1] / 2}px`)
		const k = -n.snapGrid[0],
			E = -n.slidesGrid[0]
		;(n.snapGrid = n.snapGrid.map(D => D + k)), (n.slidesGrid = n.slidesGrid.map(D => D + E))
	}
	if ((h !== u && n.emit('slidesLengthChange'), f.length !== _ && (n.params.watchOverflow && n.checkOverflow(), n.emit('snapGridLengthChange')), g.length !== v && n.emit('slidesGridLengthChange'), r.watchSlidesProgress && n.updateSlidesOffset(), !c && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))) {
		const k = `${r.containerModifierClass}backface-hidden`,
			E = n.el.classList.contains(k)
		h <= r.maxBackfaceHiddenSlides ? E || n.el.classList.add(k) : E && n.el.classList.remove(k)
	}
}
function ed(n) {
	const e = this,
		t = [],
		r = e.virtual && e.params.virtual.enabled
	let i = 0,
		s
	typeof n == 'number' ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed)
	const o = a => (r ? e.getSlideIndexByData(a) : e.slides[a])
	if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
		if (e.params.centeredSlides)
			(e.visibleSlides || []).forEach(a => {
				t.push(a)
			})
		else
			for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
				const a = e.activeIndex + s
				if (a > e.slides.length && !r) break
				t.push(o(a))
			}
	else t.push(o(e.activeIndex))
	for (s = 0; s < t.length; s += 1)
		if (typeof t[s] < 'u') {
			const a = t[s].offsetHeight
			i = a > i ? a : i
		}
	;(i || i === 0) && (e.wrapperEl.style.height = `${i}px`)
}
function td() {
	const n = this,
		e = n.slides,
		t = n.isElement ? (n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop) : 0
	for (let r = 0; r < e.length; r += 1) e[r].swiperSlideOffset = (n.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) - t - n.cssOverflowAdjustment()
}
function rd(n = (this && this.translate) || 0) {
	const e = this,
		t = e.params,
		{slides: r, rtlTranslate: i, snapGrid: s} = e
	if (r.length === 0) return
	typeof r[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
	let o = -n
	i && (o = n),
		r.forEach(a => {
			a.classList.remove(t.slideVisibleClass)
		}),
		(e.visibleSlidesIndexes = []),
		(e.visibleSlides = [])
	for (let a = 0; a < r.length; a += 1) {
		const l = r[a]
		let c = l.swiperSlideOffset
		t.cssMode && t.centeredSlides && (c -= r[0].swiperSlideOffset)
		const u = (o + (t.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + t.spaceBetween),
			p = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + t.spaceBetween),
			h = -(o - c),
			f = h + e.slidesSizesGrid[a]
		;((h >= 0 && h < e.size - 1) || (f > 1 && f <= e.size) || (h <= 0 && f >= e.size)) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(a), r[a].classList.add(t.slideVisibleClass)), (l.progress = i ? -u : u), (l.originalProgress = i ? -p : p)
	}
}
function id(n) {
	const e = this
	if (typeof n > 'u') {
		const u = e.rtlTranslate ? -1 : 1
		n = (e && e.translate && e.translate * u) || 0
	}
	const t = e.params,
		r = e.maxTranslate() - e.minTranslate()
	let {progress: i, isBeginning: s, isEnd: o, progressLoop: a} = e
	const l = s,
		c = o
	if (r === 0) (i = 0), (s = !0), (o = !0)
	else {
		i = (n - e.minTranslate()) / r
		const u = Math.abs(n - e.minTranslate()) < 1,
			p = Math.abs(n - e.maxTranslate()) < 1
		;(s = u || i <= 0), (o = p || i >= 1), u && (i = 0), p && (i = 1)
	}
	if (t.loop) {
		const u = e.getSlideIndexByData(0),
			p = e.getSlideIndexByData(e.slides.length - 1),
			h = e.slidesGrid[u],
			f = e.slidesGrid[p],
			g = e.slidesGrid[e.slidesGrid.length - 1],
			d = Math.abs(n)
		d >= h ? (a = (d - h) / g) : (a = (d + g - f) / g), a > 1 && (a -= 1)
	}
	Object.assign(e, {progress: i, progressLoop: a, isBeginning: s, isEnd: o}), (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) && e.updateSlidesProgress(n), s && !l && e.emit('reachBeginning toEdge'), o && !c && e.emit('reachEnd toEdge'), ((l && !s) || (c && !o)) && e.emit('fromEdge'), e.emit('progress', i)
}
function nd() {
	const n = this,
		{slides: e, params: t, slidesEl: r, activeIndex: i} = n,
		s = n.virtual && t.virtual.enabled,
		o = l => Qt(r, `.${t.slideClass}${l}, swiper-slide${l}`)[0]
	e.forEach(l => {
		l.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
	})
	let a
	if (s)
		if (t.loop) {
			let l = i - n.virtual.slidesBefore
			l < 0 && (l = n.virtual.slides.length + l), l >= n.virtual.slides.length && (l -= n.virtual.slides.length), (a = o(`[data-swiper-slide-index="${l}"]`))
		} else a = o(`[data-swiper-slide-index="${i}"]`)
	else a = e[i]
	if (a) {
		a.classList.add(t.slideActiveClass)
		let l = Vf(a, `.${t.slideClass}, swiper-slide`)[0]
		t.loop && !l && (l = e[0]), l && l.classList.add(t.slideNextClass)
		let c = Gf(a, `.${t.slideClass}, swiper-slide`)[0]
		t.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(t.slidePrevClass)
	}
	n.emitSlidesClasses()
}
const Wn = (n, e) => {
		if (!n || n.destroyed || !n.params) return
		const t = () => (n.isElement ? 'swiper-slide' : `.${n.params.slideClass}`),
			r = e.closest(t())
		if (r) {
			const i = r.querySelector(`.${n.params.lazyPreloaderClass}`)
			i && i.remove()
		}
	},
	Sa = (n, e) => {
		if (!n.slides[e]) return
		const t = n.slides[e].querySelector('[loading="lazy"]')
		t && t.removeAttribute('loading')
	},
	oo = n => {
		if (!n || n.destroyed || !n.params) return
		let e = n.params.lazyPreloadPrevNext
		const t = n.slides.length
		if (!t || !e || e < 0) return
		e = Math.min(e, t)
		const r = n.params.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView),
			i = n.activeIndex,
			s = i + r - 1
		if (n.params.rewind)
			for (let o = i - e; o <= s + e; o += 1) {
				const a = ((o % t) + t) % t
				a !== i && a > s && Sa(n, a)
			}
		else for (let o = Math.max(s - e, 0); o <= Math.min(s + e, t - 1); o += 1) o !== i && o > s && Sa(n, o)
	}
function sd(n) {
	const {slidesGrid: e, params: t} = n,
		r = n.rtlTranslate ? n.translate : -n.translate
	let i
	for (let s = 0; s < e.length; s += 1) typeof e[s + 1] < 'u' ? (r >= e[s] && r < e[s + 1] - (e[s + 1] - e[s]) / 2 ? (i = s) : r >= e[s] && r < e[s + 1] && (i = s + 1)) : r >= e[s] && (i = s)
	return t.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function od(n) {
	const e = this,
		t = e.rtlTranslate ? e.translate : -e.translate,
		{snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: a} = e
	let l = n,
		c
	const u = h => {
		let f = h - e.virtual.slidesBefore
		return f < 0 && (f = e.virtual.slides.length + f), f >= e.virtual.slides.length && (f -= e.virtual.slides.length), f
	}
	if ((typeof l > 'u' && (l = sd(e)), r.indexOf(t) >= 0)) c = r.indexOf(t)
	else {
		const h = Math.min(i.slidesPerGroupSkip, l)
		c = h + Math.floor((l - h) / i.slidesPerGroup)
	}
	if ((c >= r.length && (c = r.length - 1), l === s)) {
		c !== a && ((e.snapIndex = c), e.emit('snapIndexChange')), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = u(l))
		return
	}
	let p
	e.virtual && i.virtual.enabled && i.loop ? (p = u(l)) : e.slides[l] ? (p = parseInt(e.slides[l].getAttribute('data-swiper-slide-index') || l, 10)) : (p = l), Object.assign(e, {previousSnapIndex: a, snapIndex: c, previousRealIndex: o, realIndex: p, previousIndex: s, activeIndex: l}), e.initialized && oo(e), e.emit('activeIndexChange'), e.emit('snapIndexChange'), o !== p && e.emit('realIndexChange'), (e.initialized || e.params.runCallbacksOnInit) && e.emit('slideChange')
}
function ad(n) {
	const e = this,
		t = e.params,
		r = n.closest(`.${t.slideClass}, swiper-slide`)
	let i = !1,
		s
	if (r) {
		for (let o = 0; o < e.slides.length; o += 1)
			if (e.slides[o] === r) {
				;(i = !0), (s = o)
				break
			}
	}
	if (r && i) (e.clickedSlide = r), e.virtual && e.params.virtual.enabled ? (e.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10)) : (e.clickedIndex = s)
	else {
		;(e.clickedSlide = void 0), (e.clickedIndex = void 0)
		return
	}
	t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
const ld = {updateSize: Qf, updateSlides: Zf, updateAutoHeight: ed, updateSlidesOffset: td, updateSlidesProgress: rd, updateProgress: id, updateSlidesClasses: nd, updateActiveIndex: od, updateClickedSlide: ad}
function cd(n = this.isHorizontal() ? 'x' : 'y') {
	const e = this,
		{params: t, rtlTranslate: r, translate: i, wrapperEl: s} = e
	if (t.virtualTranslate) return r ? -i : i
	if (t.cssMode) return i
	let o = $f(s, n)
	return (o += e.cssOverflowAdjustment()), r && (o = -o), o || 0
}
function ud(n, e) {
	const t = this,
		{rtlTranslate: r, params: i, wrapperEl: s, progress: o} = t
	let a = 0,
		l = 0
	const c = 0
	t.isHorizontal() ? (a = r ? -n : n) : (l = n), i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))), (t.previousTranslate = t.translate), (t.translate = t.isHorizontal() ? a : l), i.cssMode ? (s[t.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = t.isHorizontal() ? -a : -l) : i.virtualTranslate || (t.isHorizontal() ? (a -= t.cssOverflowAdjustment()) : (l -= t.cssOverflowAdjustment()), (s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`))
	let u
	const p = t.maxTranslate() - t.minTranslate()
	p === 0 ? (u = 0) : (u = (n - t.minTranslate()) / p), u !== o && t.updateProgress(n), t.emit('setTranslate', t.translate, e)
}
function fd() {
	return -this.snapGrid[0]
}
function dd() {
	return -this.snapGrid[this.snapGrid.length - 1]
}
function pd(n = 0, e = this.params.speed, t = !0, r = !0, i) {
	const s = this,
		{params: o, wrapperEl: a} = s
	if (s.animating && o.preventInteractionOnTransition) return !1
	const l = s.minTranslate(),
		c = s.maxTranslate()
	let u
	if ((r && n > l ? (u = l) : r && n < c ? (u = c) : (u = n), s.updateProgress(u), o.cssMode)) {
		const p = s.isHorizontal()
		if (e === 0) a[p ? 'scrollLeft' : 'scrollTop'] = -u
		else {
			if (!s.support.smoothScroll) return zl({swiper: s, targetPosition: -u, side: p ? 'left' : 'top'}), !0
			a.scrollTo({[p ? 'left' : 'top']: -u, behavior: 'smooth'})
		}
		return !0
	}
	return (
		e === 0
			? (s.setTransition(0), s.setTranslate(u), t && (s.emit('beforeTransitionStart', e, i), s.emit('transitionEnd')))
			: (s.setTransition(e),
			  s.setTranslate(u),
			  t && (s.emit('beforeTransitionStart', e, i), s.emit('transitionStart')),
			  s.animating ||
					((s.animating = !0),
					s.onTranslateToWrapperTransitionEnd ||
						(s.onTranslateToWrapperTransitionEnd = function (h) {
							!s || s.destroyed || (h.target === this && (s.wrapperEl.removeEventListener('transitionend', s.onTranslateToWrapperTransitionEnd), (s.onTranslateToWrapperTransitionEnd = null), delete s.onTranslateToWrapperTransitionEnd, t && s.emit('transitionEnd')))
						}),
					s.wrapperEl.addEventListener('transitionend', s.onTranslateToWrapperTransitionEnd))),
		!0
	)
}
const hd = {getTranslate: cd, setTranslate: ud, minTranslate: fd, maxTranslate: dd, translateTo: pd}
function gd(n, e) {
	const t = this
	t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`), t.emit('setTransition', n, e)
}
function Nl({swiper: n, runCallbacks: e, direction: t, step: r}) {
	const {activeIndex: i, previousIndex: s} = n
	let o = t
	if ((o || (i > s ? (o = 'next') : i < s ? (o = 'prev') : (o = 'reset')), n.emit(`transition${r}`), e && i !== s)) {
		if (o === 'reset') {
			n.emit(`slideResetTransition${r}`)
			return
		}
		n.emit(`slideChangeTransition${r}`), o === 'next' ? n.emit(`slideNextTransition${r}`) : n.emit(`slidePrevTransition${r}`)
	}
}
function md(n = !0, e) {
	const t = this,
		{params: r} = t
	r.cssMode || (r.autoHeight && t.updateAutoHeight(), Nl({swiper: t, runCallbacks: n, direction: e, step: 'Start'}))
}
function _d(n = !0, e) {
	const t = this,
		{params: r} = t
	;(t.animating = !1), !r.cssMode && (t.setTransition(0), Nl({swiper: t, runCallbacks: n, direction: e, step: 'End'}))
}
const yd = {setTransition: gd, transitionStart: md, transitionEnd: _d}
function vd(n = 0, e = this.params.speed, t = !0, r, i) {
	typeof n == 'string' && (n = parseInt(n, 10))
	const s = this
	let o = n
	o < 0 && (o = 0)
	const {params: a, snapGrid: l, slidesGrid: c, previousIndex: u, activeIndex: p, rtlTranslate: h, wrapperEl: f, enabled: g} = s
	if ((s.animating && a.preventInteractionOnTransition) || (!g && !r && !i)) return !1
	const d = Math.min(s.params.slidesPerGroupSkip, o)
	let y = d + Math.floor((o - d) / s.params.slidesPerGroup)
	y >= l.length && (y = l.length - 1)
	const m = -l[y]
	if (a.normalizeSlideIndex)
		for (let v = 0; v < c.length; v += 1) {
			const b = -Math.floor(m * 100),
				x = Math.floor(c[v] * 100),
				S = Math.floor(c[v + 1] * 100)
			typeof c[v + 1] < 'u' ? (b >= x && b < S - (S - x) / 2 ? (o = v) : b >= x && b < S && (o = v + 1)) : b >= x && (o = v)
		}
	if (s.initialized && o !== p && ((!s.allowSlideNext && m < s.translate && m < s.minTranslate()) || (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (p || 0) !== o))) return !1
	o !== (u || 0) && t && s.emit('beforeSlideChangeStart'), s.updateProgress(m)
	let _
	if ((o > p ? (_ = 'next') : o < p ? (_ = 'prev') : (_ = 'reset'), (h && -m === s.translate) || (!h && m === s.translate))) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== 'slide' && s.setTranslate(m), _ !== 'reset' && (s.transitionStart(t, _), s.transitionEnd(t, _)), !1
	if (a.cssMode) {
		const v = s.isHorizontal(),
			b = h ? m : -m
		if (e === 0) {
			const x = s.virtual && s.params.virtual.enabled
			x && ((s.wrapperEl.style.scrollSnapType = 'none'), (s._immediateVirtual = !0)),
				x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
					? ((s._cssModeVirtualInitialSet = !0),
					  requestAnimationFrame(() => {
							f[v ? 'scrollLeft' : 'scrollTop'] = b
					  }))
					: (f[v ? 'scrollLeft' : 'scrollTop'] = b),
				x &&
					requestAnimationFrame(() => {
						;(s.wrapperEl.style.scrollSnapType = ''), (s._immediateVirtual = !1)
					})
		} else {
			if (!s.support.smoothScroll) return zl({swiper: s, targetPosition: b, side: v ? 'left' : 'top'}), !0
			f.scrollTo({[v ? 'left' : 'top']: b, behavior: 'smooth'})
		}
		return !0
	}
	return (
		s.setTransition(e),
		s.setTranslate(m),
		s.updateActiveIndex(o),
		s.updateSlidesClasses(),
		s.emit('beforeTransitionStart', e, r),
		s.transitionStart(t, _),
		e === 0
			? s.transitionEnd(t, _)
			: s.animating ||
			  ((s.animating = !0),
			  s.onSlideToWrapperTransitionEnd ||
					(s.onSlideToWrapperTransitionEnd = function (b) {
						!s || s.destroyed || (b.target === this && (s.wrapperEl.removeEventListener('transitionend', s.onSlideToWrapperTransitionEnd), (s.onSlideToWrapperTransitionEnd = null), delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, _)))
					}),
			  s.wrapperEl.addEventListener('transitionend', s.onSlideToWrapperTransitionEnd)),
		!0
	)
}
function bd(n = 0, e = this.params.speed, t = !0, r) {
	typeof n == 'string' && (n = parseInt(n, 10))
	const i = this
	let s = n
	return i.params.loop && (i.virtual && i.params.virtual.enabled ? (s = s + i.virtual.slidesBefore) : (s = i.getSlideIndexByData(s))), i.slideTo(s, e, t, r)
}
function xd(n = this.params.speed, e = !0, t) {
	const r = this,
		{enabled: i, params: s, animating: o} = r
	if (!i) return r
	let a = s.slidesPerGroup
	s.slidesPerView === 'auto' && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic('current', !0), 1))
	const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
		c = r.virtual && s.virtual.enabled
	if (s.loop) {
		if (o && !c && s.loopPreventsSliding) return !1
		r.loopFix({direction: 'next'}), (r._clientLeft = r.wrapperEl.clientLeft)
	}
	return s.rewind && r.isEnd ? r.slideTo(0, n, e, t) : r.slideTo(r.activeIndex + l, n, e, t)
}
function Td(n = this.params.speed, e = !0, t) {
	const r = this,
		{params: i, snapGrid: s, slidesGrid: o, rtlTranslate: a, enabled: l, animating: c} = r
	if (!l) return r
	const u = r.virtual && i.virtual.enabled
	if (i.loop) {
		if (c && !u && i.loopPreventsSliding) return !1
		r.loopFix({direction: 'prev'}), (r._clientLeft = r.wrapperEl.clientLeft)
	}
	const p = a ? r.translate : -r.translate
	function h(m) {
		return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
	}
	const f = h(p),
		g = s.map(m => h(m))
	let d = s[g.indexOf(f) - 1]
	if (typeof d > 'u' && i.cssMode) {
		let m
		s.forEach((_, v) => {
			f >= _ && (m = v)
		}),
			typeof m < 'u' && (d = s[m > 0 ? m - 1 : m])
	}
	let y = 0
	if ((typeof d < 'u' && ((y = o.indexOf(d)), y < 0 && (y = r.activeIndex - 1), i.slidesPerView === 'auto' && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && ((y = y - r.slidesPerViewDynamic('previous', !0) + 1), (y = Math.max(y, 0)))), i.rewind && r.isBeginning)) {
		const m = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1
		return r.slideTo(m, n, e, t)
	}
	return r.slideTo(y, n, e, t)
}
function Sd(n = this.params.speed, e = !0, t) {
	const r = this
	return r.slideTo(r.activeIndex, n, e, t)
}
function wd(n = this.params.speed, e = !0, t, r = 0.5) {
	const i = this
	let s = i.activeIndex
	const o = Math.min(i.params.slidesPerGroupSkip, s),
		a = o + Math.floor((s - o) / i.params.slidesPerGroup),
		l = i.rtlTranslate ? i.translate : -i.translate
	if (l >= i.snapGrid[a]) {
		const c = i.snapGrid[a],
			u = i.snapGrid[a + 1]
		l - c > (u - c) * r && (s += i.params.slidesPerGroup)
	} else {
		const c = i.snapGrid[a - 1],
			u = i.snapGrid[a]
		l - c <= (u - c) * r && (s -= i.params.slidesPerGroup)
	}
	return (s = Math.max(s, 0)), (s = Math.min(s, i.slidesGrid.length - 1)), i.slideTo(s, n, e, t)
}
function Ed() {
	const n = this,
		{params: e, slidesEl: t} = n,
		r = e.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : e.slidesPerView
	let i = n.clickedIndex,
		s
	const o = n.isElement ? 'swiper-slide' : `.${e.slideClass}`
	if (e.loop) {
		if (n.animating) return
		;(s = parseInt(n.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
			e.centeredSlides
				? i < n.loopedSlides - r / 2 || i > n.slides.length - n.loopedSlides + r / 2
					? (n.loopFix(),
					  (i = n.getSlideIndex(Qt(t, `${o}[data-swiper-slide-index="${s}"]`)[0])),
					  no(() => {
							n.slideTo(i)
					  }))
					: n.slideTo(i)
				: i > n.slides.length - r
				? (n.loopFix(),
				  (i = n.getSlideIndex(Qt(t, `${o}[data-swiper-slide-index="${s}"]`)[0])),
				  no(() => {
						n.slideTo(i)
				  }))
				: n.slideTo(i)
	} else n.slideTo(i)
}
const Cd = {slideTo: vd, slideToLoop: bd, slideNext: xd, slidePrev: Td, slideReset: Sd, slideToClosest: wd, slideToClickedSlide: Ed}
function Pd(n) {
	const e = this,
		{params: t, slidesEl: r} = e
	if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
	Qt(r, `.${t.slideClass}, swiper-slide`).forEach((s, o) => {
		s.setAttribute('data-swiper-slide-index', o)
	}),
		e.loopFix({slideRealIndex: n, direction: t.centeredSlides ? void 0 : 'next'})
}
function Od({slideRealIndex: n, slideTo: e = !0, direction: t, setTranslate: r, activeSlideIndex: i, byController: s, byMousewheel: o} = {}) {
	const a = this
	if (!a.params.loop) return
	a.emit('beforeLoopFix')
	const {slides: l, allowSlidePrev: c, allowSlideNext: u, slidesEl: p, params: h} = a
	if (((a.allowSlidePrev = !0), (a.allowSlideNext = !0), a.virtual && h.virtual.enabled)) {
		e && (!h.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : h.centeredSlides && a.snapIndex < h.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), (a.allowSlidePrev = c), (a.allowSlideNext = u), a.emit('loopFix')
		return
	}
	const f = h.slidesPerView === 'auto' ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(h.slidesPerView, 10))
	let g = h.loopedSlides || f
	g % h.slidesPerGroup !== 0 && (g += h.slidesPerGroup - (g % h.slidesPerGroup)), (a.loopedSlides = g)
	const d = [],
		y = []
	let m = a.activeIndex
	typeof i > 'u' ? (i = a.getSlideIndex(a.slides.filter(S => S.classList.contains(h.slideActiveClass))[0])) : (m = i)
	const _ = t === 'next' || !t,
		v = t === 'prev' || !t
	let b = 0,
		x = 0
	if (i < g) {
		b = Math.max(g - i, h.slidesPerGroup)
		for (let S = 0; S < g - i; S += 1) {
			const w = S - Math.floor(S / l.length) * l.length
			d.push(l.length - w - 1)
		}
	} else if (i > a.slides.length - g * 2) {
		x = Math.max(i - (a.slides.length - g * 2), h.slidesPerGroup)
		for (let S = 0; S < x; S += 1) {
			const w = S - Math.floor(S / l.length) * l.length
			y.push(w)
		}
	}
	if (
		(v &&
			d.forEach(S => {
				p.prepend(a.slides[S])
			}),
		_ &&
			y.forEach(S => {
				p.append(a.slides[S])
			}),
		a.recalcSlides(),
		h.watchSlidesProgress && a.updateSlidesOffset(),
		e)
	) {
		if (d.length > 0 && v)
			if (typeof n > 'u') {
				const S = a.slidesGrid[m],
					P = a.slidesGrid[m + b] - S
				o ? a.setTranslate(a.translate - P) : (a.slideTo(m + b, 0, !1, !0), r && (a.touches[a.isHorizontal() ? 'startX' : 'startY'] += P))
			} else r && a.slideToLoop(n, 0, !1, !0)
		else if (y.length > 0 && _)
			if (typeof n > 'u') {
				const S = a.slidesGrid[m],
					P = a.slidesGrid[m - x] - S
				o ? a.setTranslate(a.translate - P) : (a.slideTo(m - x, 0, !1, !0), r && (a.touches[a.isHorizontal() ? 'startX' : 'startY'] += P))
			} else a.slideToLoop(n, 0, !1, !0)
	}
	if (((a.allowSlidePrev = c), (a.allowSlideNext = u), a.controller && a.controller.control && !s)) {
		const S = {slideRealIndex: n, slideTo: !1, direction: t, setTranslate: r, activeSlideIndex: i, byController: !0}
		Array.isArray(a.controller.control)
			? a.controller.control.forEach(w => {
					!w.destroyed && w.params.loop && w.loopFix(S)
			  })
			: a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(S)
	}
	a.emit('loopFix')
}
function Md() {
	const n = this,
		{params: e, slidesEl: t} = n
	if (!e.loop || (n.virtual && n.params.virtual.enabled)) return
	n.recalcSlides()
	const r = []
	n.slides.forEach(i => {
		const s = typeof i.swiperSlideIndex > 'u' ? i.getAttribute('data-swiper-slide-index') * 1 : i.swiperSlideIndex
		r[s] = i
	}),
		n.slides.forEach(i => {
			i.removeAttribute('data-swiper-slide-index')
		}),
		r.forEach(i => {
			t.append(i)
		}),
		n.recalcSlides(),
		n.slideTo(n.realIndex, 0)
}
const kd = {loopCreate: Pd, loopFix: Od, loopDestroy: Md}
function Ad(n) {
	const e = this
	if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return
	const t = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
	e.isElement && (e.__preventObserver__ = !0),
		(t.style.cursor = 'move'),
		(t.style.cursor = n ? 'grabbing' : 'grab'),
		e.isElement &&
			requestAnimationFrame(() => {
				e.__preventObserver__ = !1
			})
}
function Ld() {
	const n = this
	;(n.params.watchOverflow && n.isLocked) ||
		n.params.cssMode ||
		(n.isElement && (n.__preventObserver__ = !0),
		(n[n.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
		n.isElement &&
			requestAnimationFrame(() => {
				n.__preventObserver__ = !1
			}))
}
const Dd = {setGrabCursor: Ad, unsetGrabCursor: Ld}
function Rd(n, e = this) {
	function t(r) {
		if (!r || r === si() || r === Et()) return null
		r.assignedSlot && (r = r.assignedSlot)
		const i = r.closest(n)
		return !i && !r.getRootNode ? null : i || t(r.getRootNode().host)
	}
	return t(e)
}
function zd(n) {
	const e = this,
		t = si(),
		r = Et(),
		i = e.touchEventsData
	i.evCache.push(n)
	const {params: s, touches: o, enabled: a} = e
	if (!a || (!s.simulateTouch && n.pointerType === 'mouse') || (e.animating && s.preventInteractionOnTransition)) return
	!e.animating && s.cssMode && s.loop && e.loopFix()
	let l = n
	l.originalEvent && (l = l.originalEvent)
	let c = l.target
	if ((s.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(c)) || ('which' in l && l.which === 3) || ('button' in l && l.button > 0) || (i.isTouched && i.isMoved)) return
	const u = !!s.noSwipingClass && s.noSwipingClass !== '',
		p = n.composedPath ? n.composedPath() : n.path
	u && l.target && l.target.shadowRoot && p && (c = p[0])
	const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
		f = !!(l.target && l.target.shadowRoot)
	if (s.noSwiping && (f ? Rd(h, c) : c.closest(h))) {
		e.allowClick = !0
		return
	}
	if (s.swipeHandler && !c.closest(s.swipeHandler)) return
	;(o.currentX = l.pageX), (o.currentY = l.pageY)
	const g = o.currentX,
		d = o.currentY,
		y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
		m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold
	if (y && (g <= m || g >= r.innerWidth - m))
		if (y === 'prevent') n.preventDefault()
		else return
	Object.assign(i, {isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0}), (o.startX = g), (o.startY = d), (i.touchStartTime = ss()), (e.allowClick = !0), e.updateSize(), (e.swipeDirection = void 0), s.threshold > 0 && (i.allowThresholdMove = !1)
	let _ = !0
	c.matches(i.focusableElements) && ((_ = !1), c.nodeName === 'SELECT' && (i.isTouched = !1)), t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== c && t.activeElement.blur()
	const v = _ && e.allowTouchMove && s.touchStartPreventDefault
	;(s.touchStartForcePreventDefault || v) && !c.isContentEditable && l.preventDefault(), e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit('touchStart', l)
}
function Id(n) {
	const e = si(),
		t = this,
		r = t.touchEventsData,
		{params: i, touches: s, rtlTranslate: o, enabled: a} = t
	if (!a || (!i.simulateTouch && n.pointerType === 'mouse')) return
	let l = n
	if ((l.originalEvent && (l = l.originalEvent), !r.isTouched)) {
		r.startMoving && r.isScrolling && t.emit('touchMoveOpposite', l)
		return
	}
	const c = r.evCache.findIndex(S => S.pointerId === l.pointerId)
	c >= 0 && (r.evCache[c] = l)
	const u = r.evCache.length > 1 ? r.evCache[0] : l,
		p = u.pageX,
		h = u.pageY
	if (l.preventedByNestedSwiper) {
		;(s.startX = p), (s.startY = h)
		return
	}
	if (!t.allowTouchMove) {
		l.target.matches(r.focusableElements) || (t.allowClick = !1), r.isTouched && (Object.assign(s, {startX: p, startY: h, prevX: t.touches.currentX, prevY: t.touches.currentY, currentX: p, currentY: h}), (r.touchStartTime = ss()))
		return
	}
	if (i.touchReleaseOnEdges && !i.loop) {
		if (t.isVertical()) {
			if ((h < s.startY && t.translate <= t.maxTranslate()) || (h > s.startY && t.translate >= t.minTranslate())) {
				;(r.isTouched = !1), (r.isMoved = !1)
				return
			}
		} else if ((p < s.startX && t.translate <= t.maxTranslate()) || (p > s.startX && t.translate >= t.minTranslate())) return
	}
	if (e.activeElement && l.target === e.activeElement && l.target.matches(r.focusableElements)) {
		;(r.isMoved = !0), (t.allowClick = !1)
		return
	}
	if ((r.allowTouchCallbacks && t.emit('touchMove', l), l.targetTouches && l.targetTouches.length > 1)) return
	;(s.currentX = p), (s.currentY = h)
	const f = s.currentX - s.startX,
		g = s.currentY - s.startY
	if (t.params.threshold && Math.sqrt(f ** 2 + g ** 2) < t.params.threshold) return
	if (typeof r.isScrolling > 'u') {
		let S
		;(t.isHorizontal() && s.currentY === s.startY) || (t.isVertical() && s.currentX === s.startX) ? (r.isScrolling = !1) : f * f + g * g >= 25 && ((S = (Math.atan2(Math.abs(g), Math.abs(f)) * 180) / Math.PI), (r.isScrolling = t.isHorizontal() ? S > i.touchAngle : 90 - S > i.touchAngle))
	}
	if ((r.isScrolling && t.emit('touchMoveOpposite', l), typeof r.startMoving > 'u' && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0), r.isScrolling || (t.zoom && t.params.zoom && t.params.zoom.enabled && r.evCache.length > 1))) {
		r.isTouched = !1
		return
	}
	if (!r.startMoving) return
	;(t.allowClick = !1), !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation()
	let d = t.isHorizontal() ? f : g,
		y = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY
	i.oneWayMovement && ((d = Math.abs(d) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))), (s.diff = d), (d *= i.touchRatio), o && ((d = -d), (y = -y))
	const m = t.touchesDirection
	;(t.swipeDirection = d > 0 ? 'prev' : 'next'), (t.touchesDirection = y > 0 ? 'prev' : 'next')
	const _ = t.params.loop && !i.cssMode
	if (!r.isMoved) {
		if ((_ && t.loopFix({direction: t.swipeDirection}), (r.startTranslate = t.getTranslate()), t.setTransition(0), t.animating)) {
			const S = new window.CustomEvent('transitionend', {bubbles: !0, cancelable: !0})
			t.wrapperEl.dispatchEvent(S)
		}
		;(r.allowMomentumBounce = !1), i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit('sliderFirstMove', l)
	}
	let v
	r.isMoved && m !== t.touchesDirection && _ && Math.abs(d) >= 1 && (t.loopFix({direction: t.swipeDirection, setTranslate: !0}), (v = !0)), t.emit('sliderMove', l), (r.isMoved = !0), (r.currentTranslate = d + r.startTranslate)
	let b = !0,
		x = i.resistanceRatio
	if (
		(i.touchReleaseOnEdges && (x = 0),
		d > 0 ? (_ && !v && r.currentTranslate > (i.centeredSlides ? t.minTranslate() - t.size / 2 : t.minTranslate()) && t.loopFix({direction: 'prev', setTranslate: !0, activeSlideIndex: 0}), r.currentTranslate > t.minTranslate() && ((b = !1), i.resistance && (r.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + r.startTranslate + d) ** x))) : d < 0 && (_ && !v && r.currentTranslate < (i.centeredSlides ? t.maxTranslate() + t.size / 2 : t.maxTranslate()) && t.loopFix({direction: 'next', setTranslate: !0, activeSlideIndex: t.slides.length - (i.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))}), r.currentTranslate < t.maxTranslate() && ((b = !1), i.resistance && (r.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - r.startTranslate - d) ** x))),
		b && (l.preventedByNestedSwiper = !0),
		!t.allowSlideNext && t.swipeDirection === 'next' && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
		!t.allowSlidePrev && t.swipeDirection === 'prev' && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
		!t.allowSlidePrev && !t.allowSlideNext && (r.currentTranslate = r.startTranslate),
		i.threshold > 0)
	)
		if (Math.abs(d) > i.threshold || r.allowThresholdMove) {
			if (!r.allowThresholdMove) {
				;(r.allowThresholdMove = !0), (s.startX = s.currentX), (s.startY = s.currentY), (r.currentTranslate = r.startTranslate), (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
				return
			}
		} else {
			r.currentTranslate = r.startTranslate
			return
		}
	!i.followFinger || i.cssMode || (((i.freeMode && i.freeMode.enabled && t.freeMode) || i.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), t.params.freeMode && i.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(r.currentTranslate), t.setTranslate(r.currentTranslate))
}
function Fd(n) {
	const e = this,
		t = e.touchEventsData,
		r = t.evCache.findIndex(v => v.pointerId === n.pointerId)
	if ((r >= 0 && t.evCache.splice(r, 1), ['pointercancel', 'pointerout', 'pointerleave'].includes(n.type) && !(n.type === 'pointercancel' && (e.browser.isSafari || e.browser.isWebView)))) return
	const {params: i, touches: s, rtlTranslate: o, slidesGrid: a, enabled: l} = e
	if (!l || (!i.simulateTouch && n.pointerType === 'mouse')) return
	let c = n
	if ((c.originalEvent && (c = c.originalEvent), t.allowTouchCallbacks && e.emit('touchEnd', c), (t.allowTouchCallbacks = !1), !t.isTouched)) {
		t.isMoved && i.grabCursor && e.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	i.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1)
	const u = ss(),
		p = u - t.touchStartTime
	if (e.allowClick) {
		const v = c.path || (c.composedPath && c.composedPath())
		e.updateClickedSlide((v && v[0]) || c.target), e.emit('tap click', c), p < 300 && u - t.lastClickTime < 300 && e.emit('doubleTap doubleClick', c)
	}
	if (
		((t.lastClickTime = ss()),
		no(() => {
			e.destroyed || (e.allowClick = !0)
		}),
		!t.isTouched || !t.isMoved || !e.swipeDirection || s.diff === 0 || t.currentTranslate === t.startTranslate)
	) {
		;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
		return
	}
	;(t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1)
	let h
	if ((i.followFinger ? (h = o ? e.translate : -e.translate) : (h = -t.currentTranslate), i.cssMode)) return
	if (e.params.freeMode && i.freeMode.enabled) {
		e.freeMode.onTouchEnd({currentPos: h})
		return
	}
	let f = 0,
		g = e.slidesSizesGrid[0]
	for (let v = 0; v < a.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
		const b = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
		typeof a[v + b] < 'u' ? h >= a[v] && h < a[v + b] && ((f = v), (g = a[v + b] - a[v])) : h >= a[v] && ((f = v), (g = a[a.length - 1] - a[a.length - 2]))
	}
	let d = null,
		y = null
	i.rewind && (e.isBeginning ? (y = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1) : e.isEnd && (d = 0))
	const m = (h - a[f]) / g,
		_ = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup
	if (p > i.longSwipesMs) {
		if (!i.longSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.swipeDirection === 'next' && (m >= i.longSwipesRatio ? e.slideTo(i.rewind && e.isEnd ? d : f + _) : e.slideTo(f)), e.swipeDirection === 'prev' && (m > 1 - i.longSwipesRatio ? e.slideTo(f + _) : y !== null && m < 0 && Math.abs(m) > i.longSwipesRatio ? e.slideTo(y) : e.slideTo(f))
	} else {
		if (!i.shortSwipes) {
			e.slideTo(e.activeIndex)
			return
		}
		e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? (c.target === e.navigation.nextEl ? e.slideTo(f + _) : e.slideTo(f)) : (e.swipeDirection === 'next' && e.slideTo(d !== null ? d : f + _), e.swipeDirection === 'prev' && e.slideTo(y !== null ? y : f))
	}
}
function wa() {
	const n = this,
		{params: e, el: t} = n
	if (t && t.offsetWidth === 0) return
	e.breakpoints && n.setBreakpoint()
	const {allowSlideNext: r, allowSlidePrev: i, snapGrid: s} = n,
		o = n.virtual && n.params.virtual.enabled
	;(n.allowSlideNext = !0), (n.allowSlidePrev = !0), n.updateSize(), n.updateSlides(), n.updateSlidesClasses()
	const a = o && e.loop
	;(e.slidesPerView === 'auto' || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !a ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !o ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0),
		n.autoplay &&
			n.autoplay.running &&
			n.autoplay.paused &&
			(clearTimeout(n.autoplay.resizeTimeout),
			(n.autoplay.resizeTimeout = setTimeout(() => {
				n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
			}, 500))),
		(n.allowSlidePrev = i),
		(n.allowSlideNext = r),
		n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow()
}
function Bd(n) {
	const e = this
	e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(), e.params.preventClicksPropagation && e.animating && (n.stopPropagation(), n.stopImmediatePropagation())))
}
function Nd() {
	const n = this,
		{wrapperEl: e, rtlTranslate: t, enabled: r} = n
	if (!r) return
	;(n.previousTranslate = n.translate), n.isHorizontal() ? (n.translate = -e.scrollLeft) : (n.translate = -e.scrollTop), n.translate === 0 && (n.translate = 0), n.updateActiveIndex(), n.updateSlidesClasses()
	let i
	const s = n.maxTranslate() - n.minTranslate()
	s === 0 ? (i = 0) : (i = (n.translate - n.minTranslate()) / s), i !== n.progress && n.updateProgress(t ? -n.translate : n.translate), n.emit('setTranslate', n.translate, !1)
}
function $d(n) {
	const e = this
	Wn(e, n.target), e.update()
}
let Ea = !1
function Hd() {}
const $l = (n, e) => {
	const t = si(),
		{params: r, el: i, wrapperEl: s, device: o} = n,
		a = !!r.nested,
		l = e === 'on' ? 'addEventListener' : 'removeEventListener',
		c = e
	i[l]('pointerdown', n.onTouchStart, {passive: !1}), t[l]('pointermove', n.onTouchMove, {passive: !1, capture: a}), t[l]('pointerup', n.onTouchEnd, {passive: !0}), t[l]('pointercancel', n.onTouchEnd, {passive: !0}), t[l]('pointerout', n.onTouchEnd, {passive: !0}), t[l]('pointerleave', n.onTouchEnd, {passive: !0}), (r.preventClicks || r.preventClicksPropagation) && i[l]('click', n.onClick, !0), r.cssMode && s[l]('scroll', n.onScroll), r.updateOnWindowResize ? n[c](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', wa, !0) : n[c]('observerUpdate', wa, !0), i[l]('load', n.onLoad, {capture: !0})
}
function Gd() {
	const n = this,
		e = si(),
		{params: t} = n
	;(n.onTouchStart = zd.bind(n)), (n.onTouchMove = Id.bind(n)), (n.onTouchEnd = Fd.bind(n)), t.cssMode && (n.onScroll = Nd.bind(n)), (n.onClick = Bd.bind(n)), (n.onLoad = $d.bind(n)), Ea || (e.addEventListener('touchstart', Hd), (Ea = !0)), $l(n, 'on')
}
function Vd() {
	$l(this, 'off')
}
const qd = {attachEvents: Gd, detachEvents: Vd},
	Ca = (n, e) => n.grid && e.grid && e.grid.rows > 1
function Yd() {
	const n = this,
		{realIndex: e, initialized: t, params: r, el: i} = n,
		s = r.breakpoints
	if (!s || (s && Object.keys(s).length === 0)) return
	const o = n.getBreakpoint(s, n.params.breakpointsBase, n.el)
	if (!o || n.currentBreakpoint === o) return
	const l = (o in s ? s[o] : void 0) || n.originalParams,
		c = Ca(n, r),
		u = Ca(n, l),
		p = r.enabled
	c && !u ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), n.emitContainerClasses()) : !c && u && (i.classList.add(`${r.containerModifierClass}grid`), ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && r.grid.fill === 'column')) && i.classList.add(`${r.containerModifierClass}grid-column`), n.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach(d => {
			const y = r[d] && r[d].enabled,
				m = l[d] && l[d].enabled
			y && !m && n[d].disable(), !y && m && n[d].enable()
		})
	const h = l.direction && l.direction !== r.direction,
		f = r.loop && (l.slidesPerView !== r.slidesPerView || h)
	h && t && n.changeDirection(), yt(n.params, l)
	const g = n.params.enabled
	Object.assign(n, {allowTouchMove: n.params.allowTouchMove, allowSlideNext: n.params.allowSlideNext, allowSlidePrev: n.params.allowSlidePrev}), p && !g ? n.disable() : !p && g && n.enable(), (n.currentBreakpoint = o), n.emit('_beforeBreakpoint', l), f && t && (n.loopDestroy(), n.loopCreate(e), n.updateSlides()), n.emit('breakpoint', l)
}
function Ud(n, e = 'window', t) {
	if (!n || (e === 'container' && !t)) return
	let r = !1
	const i = Et(),
		s = e === 'window' ? i.innerHeight : t.clientHeight,
		o = Object.keys(n).map(a => {
			if (typeof a == 'string' && a.indexOf('@') === 0) {
				const l = parseFloat(a.substr(1))
				return {value: s * l, point: a}
			}
			return {value: a, point: a}
		})
	o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10))
	for (let a = 0; a < o.length; a += 1) {
		const {point: l, value: c} = o[a]
		e === 'window' ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = l) : c <= t.clientWidth && (r = l)
	}
	return r || 'max'
}
const Wd = {setBreakpoint: Yd, getBreakpoint: Ud}
function Xd(n, e) {
	const t = []
	return (
		n.forEach(r => {
			typeof r == 'object'
				? Object.keys(r).forEach(i => {
						r[i] && t.push(e + i)
				  })
				: typeof r == 'string' && t.push(e + r)
		}),
		t
	)
}
function jd() {
	const n = this,
		{classNames: e, params: t, rtl: r, el: i, device: s} = n,
		o = Xd(['initialized', t.direction, {'free-mode': n.params.freeMode && t.freeMode.enabled}, {autoheight: t.autoHeight}, {rtl: r}, {grid: t.grid && t.grid.rows > 1}, {'grid-column': t.grid && t.grid.rows > 1 && t.grid.fill === 'column'}, {android: s.android}, {ios: s.ios}, {'css-mode': t.cssMode}, {centered: t.cssMode && t.centeredSlides}, {'watch-progress': t.watchSlidesProgress}], t.containerModifierClass)
	e.push(...o), i.classList.add(...e), n.emitContainerClasses()
}
function Kd() {
	const n = this,
		{el: e, classNames: t} = n
	e.classList.remove(...t), n.emitContainerClasses()
}
const Jd = {addClasses: jd, removeClasses: Kd}
function Qd() {
	const n = this,
		{isLocked: e, params: t} = n,
		{slidesOffsetBefore: r} = t
	if (r) {
		const i = n.slides.length - 1,
			s = n.slidesGrid[i] + n.slidesSizesGrid[i] + r * 2
		n.isLocked = n.size > s
	} else n.isLocked = n.snapGrid.length === 1
	t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked), t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked), e && e !== n.isLocked && (n.isEnd = !1), e !== n.isLocked && n.emit(n.isLocked ? 'lock' : 'unlock')
}
const Zd = {checkOverflow: Qd},
	Pa = {
		init: !0,
		direction: 'horizontal',
		oneWayMovement: !1,
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopedSlides: null,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideActiveClass: 'swiper-slide-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideNextClass: 'swiper-slide-next',
		slidePrevClass: 'swiper-slide-prev',
		wrapperClass: 'swiper-wrapper',
		lazyPreloaderClass: 'swiper-lazy-preloader',
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	}
function ep(n, e) {
	return function (r = {}) {
		const i = Object.keys(r)[0],
			s = r[i]
		if (typeof s != 'object' || s === null) {
			yt(e, r)
			return
		}
		if ((['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 && n[i] === !0 && (n[i] = {auto: !0}), !(i in n && 'enabled' in s))) {
			yt(e, r)
			return
		}
		n[i] === !0 && (n[i] = {enabled: !0}), typeof n[i] == 'object' && !('enabled' in n[i]) && (n[i].enabled = !0), n[i] || (n[i] = {enabled: !1}), yt(e, r)
	}
}
const Is = {eventsEmitter: Jf, update: ld, translate: hd, transition: yd, slide: Cd, loop: kd, grabCursor: Dd, events: qd, breakpoints: Wd, checkOverflow: Zd, classes: Jd},
	Fs = {}
class kt {
	constructor(...e) {
		let t, r
		e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === 'Object' ? (r = e[0]) : ([t, r] = e), r || (r = {}), (r = yt({}, r)), t && !r.el && (r.el = t)
		const i = si()
		if (r.el && typeof r.el == 'string' && i.querySelectorAll(r.el).length > 1) {
			const l = []
			return (
				i.querySelectorAll(r.el).forEach(c => {
					const u = yt({}, r, {el: c})
					l.push(new kt(u))
				}),
				l
			)
		}
		const s = this
		;(s.__swiper__ = !0), (s.support = Bl()), (s.device = Uf({userAgent: r.userAgent})), (s.browser = Xf()), (s.eventsListeners = {}), (s.eventsAnyListeners = []), (s.modules = [...s.__modules__]), r.modules && Array.isArray(r.modules) && s.modules.push(...r.modules)
		const o = {}
		s.modules.forEach(l => {
			l({params: r, swiper: s, extendParams: ep(r, o), on: s.on.bind(s), once: s.once.bind(s), off: s.off.bind(s), emit: s.emit.bind(s)})
		})
		const a = yt({}, Pa, o)
		return (
			(s.params = yt({}, a, Fs, r)),
			(s.originalParams = yt({}, s.params)),
			(s.passedParams = yt({}, r)),
			s.params &&
				s.params.on &&
				Object.keys(s.params.on).forEach(l => {
					s.on(l, s.params.on[l])
				}),
			s.params && s.params.onAny && s.onAny(s.params.onAny),
			Object.assign(s, {
				enabled: s.params.enabled,
				el: t,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return s.params.direction === 'horizontal'
				},
				isVertical() {
					return s.params.direction === 'vertical'
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: s.params.allowSlideNext,
				allowSlidePrev: s.params.allowSlidePrev,
				touchEventsData: {isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: s.params.focusableElements, lastClickTime: 0, clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, startMoving: void 0, evCache: []},
				allowClick: !0,
				allowTouchMove: s.params.allowTouchMove,
				touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
				imagesToLoad: [],
				imagesLoaded: 0,
			}),
			s.emit('_swiper'),
			s.params.init && s.init(),
			s
		)
	}
	getSlideIndex(e) {
		const {slidesEl: t, params: r} = this,
			i = Qt(t, `.${r.slideClass}, swiper-slide`),
			s = os(i[0])
		return os(e) - s
	}
	getSlideIndexByData(e) {
		return this.getSlideIndex(this.slides.filter(t => t.getAttribute('data-swiper-slide-index') * 1 === e)[0])
	}
	recalcSlides() {
		const e = this,
			{slidesEl: t, params: r} = e
		e.slides = Qt(t, `.${r.slideClass}, swiper-slide`)
	}
	enable() {
		const e = this
		e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'))
	}
	disable() {
		const e = this
		e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'))
	}
	setProgress(e, t) {
		const r = this
		e = Math.min(Math.max(e, 0), 1)
		const i = r.minTranslate(),
			o = (r.maxTranslate() - i) * e + i
		r.translateTo(o, typeof t > 'u' ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
	}
	emitContainerClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = e.el.className.split(' ').filter(r => r.indexOf('swiper') === 0 || r.indexOf(e.params.containerModifierClass) === 0)
		e.emit('_containerClasses', t.join(' '))
	}
	getSlideClasses(e) {
		const t = this
		return t.destroyed
			? ''
			: e.className
					.split(' ')
					.filter(r => r.indexOf('swiper-slide') === 0 || r.indexOf(t.params.slideClass) === 0)
					.join(' ')
	}
	emitSlidesClasses() {
		const e = this
		if (!e.params._emitClasses || !e.el) return
		const t = []
		e.slides.forEach(r => {
			const i = e.getSlideClasses(r)
			t.push({slideEl: r, classNames: i}), e.emit('_slideClass', r, i)
		}),
			e.emit('_slideClasses', t)
	}
	slidesPerViewDynamic(e = 'current', t = !1) {
		const r = this,
			{params: i, slides: s, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: c} = r
		let u = 1
		if (i.centeredSlides) {
			let p = s[c].swiperSlideSize,
				h
			for (let f = c + 1; f < s.length; f += 1) s[f] && !h && ((p += s[f].swiperSlideSize), (u += 1), p > l && (h = !0))
			for (let f = c - 1; f >= 0; f -= 1) s[f] && !h && ((p += s[f].swiperSlideSize), (u += 1), p > l && (h = !0))
		} else if (e === 'current') for (let p = c + 1; p < s.length; p += 1) (t ? o[p] + a[p] - o[c] < l : o[p] - o[c] < l) && (u += 1)
		else for (let p = c - 1; p >= 0; p -= 1) o[c] - o[p] < l && (u += 1)
		return u
	}
	update() {
		const e = this
		if (!e || e.destroyed) return
		const {snapGrid: t, params: r} = e
		r.breakpoints && e.setBreakpoint(),
			[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
				o.complete && Wn(e, o)
			}),
			e.updateSize(),
			e.updateSlides(),
			e.updateProgress(),
			e.updateSlidesClasses()
		function i() {
			const o = e.rtlTranslate ? e.translate * -1 : e.translate,
				a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate())
			e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
		}
		let s
		e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === 'auto' || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0)) : (s = e.slideTo(e.activeIndex, 0, !1, !0)), s || i()), r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update')
	}
	changeDirection(e, t = !0) {
		const r = this,
			i = r.params.direction
		return (
			e || (e = i === 'horizontal' ? 'vertical' : 'horizontal'),
			e === i ||
				(e !== 'horizontal' && e !== 'vertical') ||
				(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
				r.el.classList.add(`${r.params.containerModifierClass}${e}`),
				r.emitContainerClasses(),
				(r.params.direction = e),
				r.slides.forEach(s => {
					e === 'vertical' ? (s.style.width = '') : (s.style.height = '')
				}),
				r.emit('changeDirection'),
				t && r.update()),
			r
		)
	}
	changeLanguageDirection(e) {
		const t = this
		;(t.rtl && e === 'rtl') || (!t.rtl && e === 'ltr') || ((t.rtl = e === 'rtl'), (t.rtlTranslate = t.params.direction === 'horizontal' && t.rtl), t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl')) : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')), t.update())
	}
	mount(e) {
		const t = this
		if (t.mounted) return !0
		let r = e || t.params.el
		if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1
		;(r.swiper = t), r.shadowEl && (t.isElement = !0)
		const i = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
		let o = (() => (r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : Qt(r, i())[0]))()
		return (
			!o &&
				t.params.createElements &&
				((o = Il('div', t.params.wrapperClass)),
				r.append(o),
				Qt(r, `.${t.params.slideClass}`).forEach(a => {
					o.append(a)
				})),
			Object.assign(t, {el: r, wrapperEl: o, slidesEl: t.isElement ? r : o, mounted: !0, rtl: r.dir.toLowerCase() === 'rtl' || Sr(r, 'direction') === 'rtl', rtlTranslate: t.params.direction === 'horizontal' && (r.dir.toLowerCase() === 'rtl' || Sr(r, 'direction') === 'rtl'), wrongRTL: Sr(o, 'display') === '-webkit-box'}),
			!0
		)
	}
	init(e) {
		const t = this
		return (
			t.initialized ||
				t.mount(e) === !1 ||
				(t.emit('beforeInit'),
				t.params.breakpoints && t.setBreakpoint(),
				t.addClasses(),
				t.updateSize(),
				t.updateSlides(),
				t.params.watchOverflow && t.checkOverflow(),
				t.params.grabCursor && t.enabled && t.setGrabCursor(),
				t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
				t.params.loop && t.loopCreate(),
				t.attachEvents(),
				[...t.el.querySelectorAll('[loading="lazy"]')].forEach(i => {
					i.complete
						? Wn(t, i)
						: i.addEventListener('load', s => {
								Wn(t, s.target)
						  })
				}),
				oo(t),
				(t.initialized = !0),
				oo(t),
				t.emit('init'),
				t.emit('afterInit')),
			t
		)
	}
	destroy(e = !0, t = !0) {
		const r = this,
			{params: i, el: s, wrapperEl: o, slides: a} = r
		return (
			typeof r.params > 'u' ||
				r.destroyed ||
				(r.emit('beforeDestroy'),
				(r.initialized = !1),
				r.detachEvents(),
				i.loop && r.loopDestroy(),
				t &&
					(r.removeClasses(),
					s.removeAttribute('style'),
					o.removeAttribute('style'),
					a &&
						a.length &&
						a.forEach(l => {
							l.classList.remove(i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), l.removeAttribute('style'), l.removeAttribute('data-swiper-slide-index')
						})),
				r.emit('destroy'),
				Object.keys(r.eventsListeners).forEach(l => {
					r.off(l)
				}),
				e !== !1 && ((r.el.swiper = null), Bf(r)),
				(r.destroyed = !0)),
			null
		)
	}
	static extendDefaults(e) {
		yt(Fs, e)
	}
	static get extendedDefaults() {
		return Fs
	}
	static get defaults() {
		return Pa
	}
	static installModule(e) {
		kt.prototype.__modules__ || (kt.prototype.__modules__ = [])
		const t = kt.prototype.__modules__
		typeof e == 'function' && t.indexOf(e) < 0 && t.push(e)
	}
	static use(e) {
		return Array.isArray(e) ? (e.forEach(t => kt.installModule(t)), kt) : (kt.installModule(e), kt)
	}
}
Object.keys(Is).forEach(n => {
	Object.keys(Is[n]).forEach(e => {
		kt.prototype[e] = Is[n][e]
	})
})
kt.use([jf, Kf])
function Hl(n, e, t, r) {
	return (
		n.params.createElements &&
			Object.keys(r).forEach(i => {
				if (!t[i] && t.auto === !0) {
					let s = Qt(n.el, `.${r[i]}`)[0]
					s || ((s = Il('div', r[i])), (s.className = r[i]), n.el.append(s)), (t[i] = s), (e[i] = s)
				}
			}),
		t
	)
}
function tp({swiper: n, extendParams: e, on: t, emit: r}) {
	e({navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: 'swiper-button-disabled', hiddenClass: 'swiper-button-hidden', lockClass: 'swiper-button-lock', navigationDisabledClass: 'swiper-navigation-disabled'}}), (n.navigation = {nextEl: null, prevEl: null})
	const i = g => (Array.isArray(g) || (g = [g].filter(d => !!d)), g)
	function s(g) {
		let d
		return g && typeof g == 'string' && n.isElement && ((d = n.el.shadowRoot.querySelector(g)), d) ? d : (g && (typeof g == 'string' && (d = [...document.querySelectorAll(g)]), n.params.uniqueNavElements && typeof g == 'string' && d.length > 1 && n.el.querySelectorAll(g).length === 1 && (d = n.el.querySelector(g))), g && !d ? g : d)
	}
	function o(g, d) {
		const y = n.params.navigation
		;(g = i(g)),
			g.forEach(m => {
				m && (m.classList[d ? 'add' : 'remove'](...y.disabledClass.split(' ')), m.tagName === 'BUTTON' && (m.disabled = d), n.params.watchOverflow && n.enabled && m.classList[n.isLocked ? 'add' : 'remove'](y.lockClass))
			})
	}
	function a() {
		const {nextEl: g, prevEl: d} = n.navigation
		if (n.params.loop) {
			o(d, !1), o(g, !1)
			return
		}
		o(d, n.isBeginning && !n.params.rewind), o(g, n.isEnd && !n.params.rewind)
	}
	function l(g) {
		g.preventDefault(), !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), r('navigationPrev'))
	}
	function c(g) {
		g.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), r('navigationNext'))
	}
	function u() {
		const g = n.params.navigation
		if (((n.params.navigation = Hl(n, n.originalParams.navigation, n.params.navigation, {nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev'})), !(g.nextEl || g.prevEl))) return
		let d = s(g.nextEl),
			y = s(g.prevEl)
		Object.assign(n.navigation, {nextEl: d, prevEl: y}), (d = i(d)), (y = i(y))
		const m = (_, v) => {
			_ && _.addEventListener('click', v === 'next' ? c : l), !n.enabled && _ && _.classList.add(...g.lockClass.split(' '))
		}
		d.forEach(_ => m(_, 'next')), y.forEach(_ => m(_, 'prev'))
	}
	function p() {
		let {nextEl: g, prevEl: d} = n.navigation
		;(g = i(g)), (d = i(d))
		const y = (m, _) => {
			m.removeEventListener('click', _ === 'next' ? c : l), m.classList.remove(...n.params.navigation.disabledClass.split(' '))
		}
		g.forEach(m => y(m, 'next')), d.forEach(m => y(m, 'prev'))
	}
	t('init', () => {
		n.params.navigation.enabled === !1 ? f() : (u(), a())
	}),
		t('toEdge fromEdge lock unlock', () => {
			a()
		}),
		t('destroy', () => {
			p()
		}),
		t('enable disable', () => {
			let {nextEl: g, prevEl: d} = n.navigation
			;(g = i(g)), (d = i(d)), [...g, ...d].filter(y => !!y).forEach(y => y.classList[n.enabled ? 'remove' : 'add'](n.params.navigation.lockClass))
		}),
		t('click', (g, d) => {
			let {nextEl: y, prevEl: m} = n.navigation
			;(y = i(y)), (m = i(m))
			const _ = d.target
			if (n.params.navigation.hideOnClick && !m.includes(_) && !y.includes(_)) {
				if (n.pagination && n.params.pagination && n.params.pagination.clickable && (n.pagination.el === _ || n.pagination.el.contains(_))) return
				let v
				y.length ? (v = y[0].classList.contains(n.params.navigation.hiddenClass)) : m.length && (v = m[0].classList.contains(n.params.navigation.hiddenClass)), r(v === !0 ? 'navigationShow' : 'navigationHide'), [...y, ...m].filter(b => !!b).forEach(b => b.classList.toggle(n.params.navigation.hiddenClass))
			}
		})
	const h = () => {
			n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(' ')), u(), a()
		},
		f = () => {
			n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(' ')), p()
		}
	Object.assign(n.navigation, {enable: h, disable: f, update: a, init: u, destroy: p})
}
function Vi(n = '') {
	return `.${n
		.trim()
		.replace(/([\.:!+\/])/g, '\\$1')
		.replace(/ /g, '.')}`
}
function rp({swiper: n, extendParams: e, on: t, emit: r}) {
	const i = 'swiper-pagination'
	e({pagination: {el: null, bulletElement: 'span', clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: 'bullets', dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: m => m, formatFractionTotal: m => m, bulletClass: `${i}-bullet`, bulletActiveClass: `${i}-bullet-active`, modifierClass: `${i}-`, currentClass: `${i}-current`, totalClass: `${i}-total`, hiddenClass: `${i}-hidden`, progressbarFillClass: `${i}-progressbar-fill`, progressbarOppositeClass: `${i}-progressbar-opposite`, clickableClass: `${i}-clickable`, lockClass: `${i}-lock`, horizontalClass: `${i}-horizontal`, verticalClass: `${i}-vertical`, paginationDisabledClass: `${i}-disabled`}}), (n.pagination = {el: null, bullets: []})
	let s,
		o = 0
	const a = m => (Array.isArray(m) || (m = [m].filter(_ => !!_)), m)
	function l() {
		return !n.params.pagination.el || !n.pagination.el || (Array.isArray(n.pagination.el) && n.pagination.el.length === 0)
	}
	function c(m, _) {
		const {bulletActiveClass: v} = n.params.pagination
		m && ((m = m[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]), m && (m.classList.add(`${v}-${_}`), (m = m[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]), m && m.classList.add(`${v}-${_}-${_}`)))
	}
	function u(m) {
		const _ = m.target.closest(Vi(n.params.pagination.bulletClass))
		if (!_) return
		m.preventDefault()
		const v = os(_) * n.params.slidesPerGroup
		if (n.params.loop) {
			if (n.realIndex === v) return
			const b = n.getSlideIndexByData(v),
				x = n.getSlideIndexByData(n.realIndex)
			b > n.slides.length - n.loopedSlides && n.loopFix({direction: b > x ? 'next' : 'prev', activeSlideIndex: b, slideTo: !1}), n.slideToLoop(v)
		} else n.slideTo(v)
	}
	function p() {
		const m = n.rtl,
			_ = n.params.pagination
		if (l()) return
		let v = n.pagination.el
		v = a(v)
		let b, x
		const S = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
			w = n.params.loop ? Math.ceil(S / n.params.slidesPerGroup) : n.snapGrid.length
		if ((n.params.loop ? ((x = n.previousRealIndex || 0), (b = n.params.slidesPerGroup > 1 ? Math.floor(n.realIndex / n.params.slidesPerGroup) : n.realIndex)) : typeof n.snapIndex < 'u' ? ((b = n.snapIndex), (x = n.previousSnapIndex)) : ((x = n.previousIndex || 0), (b = n.activeIndex || 0)), _.type === 'bullets' && n.pagination.bullets && n.pagination.bullets.length > 0)) {
			const P = n.pagination.bullets
			let C, A, k
			if (
				(_.dynamicBullets &&
					((s = so(P[0], n.isHorizontal() ? 'width' : 'height', !0)),
					v.forEach(E => {
						E.style[n.isHorizontal() ? 'width' : 'height'] = `${s * (_.dynamicMainBullets + 4)}px`
					}),
					_.dynamicMainBullets > 1 && x !== void 0 && ((o += b - (x || 0)), o > _.dynamicMainBullets - 1 ? (o = _.dynamicMainBullets - 1) : o < 0 && (o = 0)),
					(C = Math.max(b - o, 0)),
					(A = C + (Math.min(P.length, _.dynamicMainBullets) - 1)),
					(k = (A + C) / 2)),
				P.forEach(E => {
					const D = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(R => `${_.bulletActiveClass}${R}`)].map(R => (typeof R == 'string' && R.includes(' ') ? R.split(' ') : R)).flat()
					E.classList.remove(...D)
				}),
				v.length > 1)
			)
				P.forEach(E => {
					const D = os(E)
					D === b && E.classList.add(..._.bulletActiveClass.split(' ')), _.dynamicBullets && (D >= C && D <= A && E.classList.add(...`${_.bulletActiveClass}-main`.split(' ')), D === C && c(E, 'prev'), D === A && c(E, 'next'))
				})
			else {
				const E = P[b]
				if ((E && E.classList.add(..._.bulletActiveClass.split(' ')), _.dynamicBullets)) {
					const D = P[C],
						R = P[A]
					for (let B = C; B <= A; B += 1) P[B] && P[B].classList.add(...`${_.bulletActiveClass}-main`.split(' '))
					c(D, 'prev'), c(R, 'next')
				}
			}
			if (_.dynamicBullets) {
				const E = Math.min(P.length, _.dynamicMainBullets + 4),
					D = (s * E - s) / 2 - k * s,
					R = m ? 'right' : 'left'
				P.forEach(B => {
					B.style[n.isHorizontal() ? R : 'top'] = `${D}px`
				})
			}
		}
		v.forEach((P, C) => {
			if (
				(_.type === 'fraction' &&
					(P.querySelectorAll(Vi(_.currentClass)).forEach(A => {
						A.textContent = _.formatFractionCurrent(b + 1)
					}),
					P.querySelectorAll(Vi(_.totalClass)).forEach(A => {
						A.textContent = _.formatFractionTotal(w)
					})),
				_.type === 'progressbar')
			) {
				let A
				_.progressbarOpposite ? (A = n.isHorizontal() ? 'vertical' : 'horizontal') : (A = n.isHorizontal() ? 'horizontal' : 'vertical')
				const k = (b + 1) / w
				let E = 1,
					D = 1
				A === 'horizontal' ? (E = k) : (D = k),
					P.querySelectorAll(Vi(_.progressbarFillClass)).forEach(R => {
						;(R.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${D})`), (R.style.transitionDuration = `${n.params.speed}ms`)
					})
			}
			_.type === 'custom' && _.renderCustom ? ((P.innerHTML = _.renderCustom(n, b + 1, w)), C === 0 && r('paginationRender', P)) : (C === 0 && r('paginationRender', P), r('paginationUpdate', P)), n.params.watchOverflow && n.enabled && P.classList[n.isLocked ? 'add' : 'remove'](_.lockClass)
		})
	}
	function h() {
		const m = n.params.pagination
		if (l()) return
		const _ = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length
		let v = n.pagination.el
		v = a(v)
		let b = ''
		if (m.type === 'bullets') {
			let x = n.params.loop ? Math.ceil(_ / n.params.slidesPerGroup) : n.snapGrid.length
			n.params.freeMode && n.params.freeMode.enabled && x > _ && (x = _)
			for (let S = 0; S < x; S += 1) m.renderBullet ? (b += m.renderBullet.call(n, S, m.bulletClass)) : (b += `<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`)
		}
		m.type === 'fraction' && (m.renderFraction ? (b = m.renderFraction.call(n, m.currentClass, m.totalClass)) : (b = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
			m.type === 'progressbar' && (m.renderProgressbar ? (b = m.renderProgressbar.call(n, m.progressbarFillClass)) : (b = `<span class="${m.progressbarFillClass}"></span>`)),
			(n.pagination.bullets = []),
			v.forEach(x => {
				m.type !== 'custom' && (x.innerHTML = b || ''), m.type === 'bullets' && n.pagination.bullets.push(...x.querySelectorAll(Vi(m.bulletClass)))
			}),
			m.type !== 'custom' && r('paginationRender', v[0])
	}
	function f() {
		n.params.pagination = Hl(n, n.originalParams.pagination, n.params.pagination, {el: 'swiper-pagination'})
		const m = n.params.pagination
		if (!m.el) return
		let _
		typeof m.el == 'string' && n.isElement && (_ = n.el.shadowRoot.querySelector(m.el)),
			!_ && typeof m.el == 'string' && (_ = [...document.querySelectorAll(m.el)]),
			_ || (_ = m.el),
			!(!_ || _.length === 0) &&
				(n.params.uniqueNavElements && typeof m.el == 'string' && Array.isArray(_) && _.length > 1 && ((_ = [...n.el.querySelectorAll(m.el)]), _.length > 1 && (_ = _.filter(v => Fl(v, '.swiper')[0] === n.el)[0])),
				Array.isArray(_) && _.length === 1 && (_ = _[0]),
				Object.assign(n.pagination, {el: _}),
				(_ = a(_)),
				_.forEach(v => {
					m.type === 'bullets' && m.clickable && v.classList.add(m.clickableClass), v.classList.add(m.modifierClass + m.type), v.classList.add(n.isHorizontal() ? m.horizontalClass : m.verticalClass), m.type === 'bullets' && m.dynamicBullets && (v.classList.add(`${m.modifierClass}${m.type}-dynamic`), (o = 0), m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)), m.type === 'progressbar' && m.progressbarOpposite && v.classList.add(m.progressbarOppositeClass), m.clickable && v.addEventListener('click', u), n.enabled || v.classList.add(m.lockClass)
				}))
	}
	function g() {
		const m = n.params.pagination
		if (l()) return
		let _ = n.pagination.el
		_ &&
			((_ = a(_)),
			_.forEach(v => {
				v.classList.remove(m.hiddenClass), v.classList.remove(m.modifierClass + m.type), v.classList.remove(n.isHorizontal() ? m.horizontalClass : m.verticalClass), m.clickable && v.removeEventListener('click', u)
			})),
			n.pagination.bullets && n.pagination.bullets.forEach(v => v.classList.remove(...m.bulletActiveClass.split(' ')))
	}
	t('changeDirection', () => {
		if (!n.pagination || !n.pagination.el) return
		const m = n.params.pagination
		let {el: _} = n.pagination
		;(_ = a(_)),
			_.forEach(v => {
				v.classList.remove(m.horizontalClass, m.verticalClass), v.classList.add(n.isHorizontal() ? m.horizontalClass : m.verticalClass)
			})
	}),
		t('init', () => {
			n.params.pagination.enabled === !1 ? y() : (f(), h(), p())
		}),
		t('activeIndexChange', () => {
			typeof n.snapIndex > 'u' && p()
		}),
		t('snapIndexChange', () => {
			p()
		}),
		t('snapGridLengthChange', () => {
			h(), p()
		}),
		t('destroy', () => {
			g()
		}),
		t('enable disable', () => {
			let {el: m} = n.pagination
			m && ((m = a(m)), m.forEach(_ => _.classList[n.enabled ? 'remove' : 'add'](n.params.pagination.lockClass)))
		}),
		t('lock unlock', () => {
			p()
		}),
		t('click', (m, _) => {
			const v = _.target
			let {el: b} = n.pagination
			if ((Array.isArray(b) || (b = [b].filter(x => !!x)), n.params.pagination.el && n.params.pagination.hideOnClick && b && b.length > 0 && !v.classList.contains(n.params.pagination.bulletClass))) {
				if (n.navigation && ((n.navigation.nextEl && v === n.navigation.nextEl) || (n.navigation.prevEl && v === n.navigation.prevEl))) return
				const x = b[0].classList.contains(n.params.pagination.hiddenClass)
				r(x === !0 ? 'paginationShow' : 'paginationHide'), b.forEach(S => S.classList.toggle(n.params.pagination.hiddenClass))
			}
		})
	const d = () => {
			n.el.classList.remove(n.params.pagination.paginationDisabledClass)
			let {el: m} = n.pagination
			m && ((m = a(m)), m.forEach(_ => _.classList.remove(n.params.pagination.paginationDisabledClass))), f(), h(), p()
		},
		y = () => {
			n.el.classList.add(n.params.pagination.paginationDisabledClass)
			let {el: m} = n.pagination
			m && ((m = a(m)), m.forEach(_ => _.classList.add(n.params.pagination.paginationDisabledClass))), g()
		}
	Object.assign(n.pagination, {enable: d, disable: y, render: h, update: p, init: f, destroy: g})
}
function ip(n) {
	let e = 1
	;(document.querySelector('.the-product__counter').textContent = `${e}x`),
		document.querySelector('#addProduct').addEventListener('click', () => {
			e++, (document.querySelector('.the-product__counter').textContent = `${e}x`), (document.querySelector('.the-product__price').textContent = `$${n * e}`)
		})
}
async function Gl(n) {
	if (document.querySelector('.container__cart')) {
		let e = JSON.parse(localStorage.getItem('boughtItem')).price,
			t = ''
		;(t += `
			<div class="cart__box">
				<div class="cart__info">
				<img src="${e.boughtProduct.image}" alt="" class="cart__img">
					<div>
						<h2 class="cart__title">${e.boughtProduct.title}</h2>
						<span class="cart__description">${e.boughtProduct.description}</span>
					</div>
				</div>
				<div class="cart__sum">
					<div>
						<span class="cart__count">
							${e.counter}
						</span>
						<span class="cart__money">
							${e.price}
						</span>
					</div>
					<button class="cart__remove">
						remove
					</button>
				</div>
			</div>
		`),
			document.querySelector('.container__cart').insertAdjacentHTML('beforeend', t),
			document.querySelector('.cart__remove').addEventListener('click', () => {
				document.querySelector('.cart__box').remove(), localStorage.removeItem('boughtItem')
			})
	}
}
Gl()
function np(n, e, t) {
	Ll.post('https://fakestoreapi.com/products', {price: {counter: n, price: e, boughtProduct: t}}).then(i => {
		localStorage.setItem('boughtItem', JSON.stringify(i.data)), i.data, Gl()
	})
}
async function sp() {
	document.querySelector('.the-product__buy').addEventListener('click', () => {
		const n = document.querySelector('.the-product__counter').textContent,
			e = document.querySelector('.the-product__price').textContent,
			t = JSON.parse(sessionStorage.getItem('pickedProduct'))
		np(n, e, t),
			document.querySelectorAll('.the-product__box').forEach(i => {
				i.remove()
			})
		const r = `
		<div class="the-product__message-box">
			<span class="the-product__message">Thank you for buying our product! </span>
			<span class="the-product__message">To see your product you need to visit your <a href="./profile.html">cart</a></span>
		</div>
		`
		document.querySelector('.the-product__container').insertAdjacentHTML('afterend', r)
	})
}
async function op(n) {
	const e = JSON.stringify(n)
	return sessionStorage.setItem('pickedProduct', e), e
}
function ap() {
	var n = window.location.pathname,
		e = n.split('/').pop()
	return e
}
if (ap() == 'product.html') {
	let n = JSON.parse(sessionStorage.getItem('pickedProduct'))
	;(document.querySelector('.the-product__category').textContent = n.category),
		(document.querySelector('.the-product__title').textContent = n.title),
		(document.querySelector('.the-product__description').textContent = n.description),
		(document.querySelector('.the-product__rate').innerHTML = `
	<svg class="the-product__img-rate">
		<use xlink:href="./assets/sprite-6d01e230.svg#star" />
	</svg>
	${n.rating.rate}
	`),
		(document.querySelector('.the-product__count').innerHTML = `
	<svg class="the-product__img-count">
		<use xlink:href="./assets/sprite-6d01e230.svg#user-count">
	</svg>
	${n.rating.count}
	`),
		(document.querySelector('.the-product__price').textContent = '$' + n.price)
	let e = `
		<div class="the-product__swiper-slide swiper-slide">
			<img class="the-product__swiper-img the-product__swiper-img_cover" src="./assets/nomore-images.png" alt="" >
		</div>
		`
	ip(n.price)
	let t = ''
	for (let r = 0; r < [n.image].length; r++)
		(t += `
		<div class="the-product__swiper-slide swiper-slide">
			<img class="the-product__swiper-img" src="${[n.image][r]}" alt="">
		</div>`),
			document.querySelector('.the-product__swiper-wrapper').insertAdjacentHTML('beforeend', t)
	document.querySelector('.the-product__swiper-wrapper').insertAdjacentHTML('beforeend', e), sp()
}
new kt('.swiper', {modules: [tp, rp], direction: 'horizontal', loop: !0, pagination: {el: '.swiper-pagination', clickable: !0}, navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}, scrollbar: {el: '.swiper-scrollbar'}})
let Oa
function Ma() {
	document.querySelectorAll('.products__link').forEach(n => {
		n.addEventListener('click', e => {
			;(Oa = If(e)),
				Promise.resolve(Dl).then(t => {
					op(t[Oa])
				})
		})
	})
}
if (document.querySelector('.greeting__link-down')) {
	let n = function (e) {
		let t = '',
			r = 5
		for (let i = 0; i < 5; i++)
			(t = `

				<div class="products__item" data-number="${e[i].id}" id="products__item-id${e[i].id}">
					<span class="products__category">${e[i].category}</span>
					<a href="./product.html" class="products__link">
						<img src="${e[i].image}" class="products__img">
						<h2 class="products__item-title">${e[i].title}</h2>
					</a>
					<span class="products__item-description">${e[i].description}</span>
					<input class="products__expend-btn" type="checkbox" />
					<div class="products__retings">
						<span class="products__rate">
							<svg class="products__img-rate">
								<use xlink:href="./assets/sprite-6d01e230.svg#star" />
							</svg>
							${e[i].rating.rate}
						</span>
						<span class="products__price">$${e[i].price}</span>
						</div>
				</div>
			</div>
				`),
				document.querySelector('.products__items').insertAdjacentHTML('beforeend', t)
		Ma(),
			document.querySelector('.products__btn').addEventListener('click', () => {
				r += 5
				for (let i = r - 5; i < r; i++) {
					if (i >= e.length) {
						;(document.querySelector('.products__btn').textContent = `Sorry but you've reached the end of Our list of ${e.length} items`), (document.querySelector('.products__btn').style.pointerEvents = 'none')
						return
					}
					;(t = `

				<div class="products__item" data-number="${e[i].id}" id="products__item-id${e[i].id}">
						<span class="products__category">${e[i].category}</span>
						<a href="./product.html" class="products__link">
							<img src="${e[i].image}" class="products__img">
							<h2 class="products__item-title">${e[i].title}</h2>
						</a>
						<span class="products__item-description">${e[i].description}</span>
						<input class="products__expend-btn" type="checkbox" />
						<div class="products__retings">
							<span class="products__rate">
								<svg class="products__img-rate">
									<use xlink:href="./assets/sprite-6d01e230.svg#star" />
								</svg>
								${e[i].rating.rate}
							</span>
							<span class="products__price">$${e[i].price}</span>
						</div>
					</div>
				</div>
				`),
						document.querySelector('.products__items').insertAdjacentHTML('beforeend', t)
				}
				Ma()
			})
	}
	var putItems = n
	Promise.resolve(Dl).then(e => {
		n(e)
	})
}
document.querySelector('.footer__copyright').textContent = `© Copyright Termly ${lp()}`
function lp() {
	return new Date().getFullYear()
}
function ao() {
	return (
		(ao = Object.assign
			? Object.assign.bind()
			: function (n) {
					for (var e = 1; e < arguments.length; e++) {
						var t = arguments[e]
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
					}
					return n
			  }),
		ao.apply(this, arguments)
	)
}
function as(n, e, t) {
	return Math.max(n, Math.min(e, t))
}
class cp {
	advance(e) {
		var t
		if (!this.isRunning) return
		let r = !1
		if (this.lerp) (this.value = (1 - (i = this.lerp)) * this.value + i * this.to), Math.round(this.value) === this.to && ((this.value = this.to), (r = !0))
		else {
			this.currentTime += e
			const s = as(0, this.currentTime / this.duration, 1)
			r = s >= 1
			const o = r ? 1 : this.easing(s)
			this.value = this.from + (this.to - this.from) * o
		}
		var i
		;(t = this.onUpdate) == null || t.call(this, this.value, {completed: r}), r && this.stop()
	}
	stop() {
		this.isRunning = !1
	}
	fromTo(e, t, {lerp: r = 0.1, duration: i = 1, easing: s = a => a, onUpdate: o}) {
		;(this.from = this.value = e), (this.to = t), (this.lerp = r), (this.duration = i), (this.easing = s), (this.currentTime = 0), (this.isRunning = !0), (this.onUpdate = o)
	}
}
function ka(n, e) {
	let t
	return function () {
		let r = arguments,
			i = this
		clearTimeout(t),
			(t = setTimeout(function () {
				n.apply(i, r)
			}, e))
	}
}
class up {
	constructor(e, t) {
		;(this.onWindowResize = () => {
			;(this.width = window.innerWidth), (this.height = window.innerHeight)
		}),
			(this.onWrapperResize = () => {
				;(this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight)
			}),
			(this.onContentResize = () => {
				const r = this.wrapper === window ? document.documentElement : this.wrapper
				;(this.scrollHeight = r.scrollHeight), (this.scrollWidth = r.scrollWidth)
			}),
			(this.wrapper = e),
			(this.content = t),
			this.wrapper === window ? (window.addEventListener('resize', this.onWindowResize, !1), this.onWindowResize()) : ((this.wrapperResizeObserver = new ResizeObserver(ka(this.onWrapperResize, 100))), this.wrapperResizeObserver.observe(this.wrapper), this.onWrapperResize()),
			(this.contentResizeObserver = new ResizeObserver(ka(this.onContentResize, 100))),
			this.contentResizeObserver.observe(this.content),
			this.onContentResize()
	}
	destroy() {
		var e, t
		window.removeEventListener('resize', this.onWindowResize, !1), (e = this.wrapperResizeObserver) == null || e.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect()
	}
	get limit() {
		return {x: this.scrollWidth - this.width, y: this.scrollHeight - this.height}
	}
}
let Vl = () => ({
	events: {},
	emit(n, ...e) {
		let t = this.events[n] || []
		for (let r = 0, i = t.length; r < i; r++) t[r](...e)
	},
	on(n, e) {
		var t
		return (
			((t = this.events[n]) != null && t.push(e)) || (this.events[n] = [e]),
			() => {
				var r
				this.events[n] = (r = this.events[n]) == null ? void 0 : r.filter(i => e !== i)
			}
		)
	},
})
class fp {
	constructor(e, {wheelMultiplier: t = 1, touchMultiplier: r = 2, normalizeWheel: i = !1}) {
		;(this.onTouchStart = s => {
			const {clientX: o, clientY: a} = s.targetTouches ? s.targetTouches[0] : s
			;(this.touchStart.x = o), (this.touchStart.y = a), (this.lastDelta = {x: 0, y: 0})
		}),
			(this.onTouchMove = s => {
				const {clientX: o, clientY: a} = s.targetTouches ? s.targetTouches[0] : s
				;(deltaX = -(o - this.touchStart.x) * this.touchMultiplier), (deltaY = -(a - this.touchStart.y) * this.touchMultiplier), (this.touchStart.x = o), (this.touchStart.y = a), (this.lastDelta = {x: deltaX, y: deltaY}), this.emitter.emit('scroll', {type: 'touch', deltaX, deltaY, event: s})
			}),
			(this.onTouchEnd = s => {
				this.emitter.emit('scroll', {type: 'touch', inertia: !0, deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: s})
			}),
			(this.onWheel = s => {
				let {deltaX: o, deltaY: a} = s
				this.normalizeWheel && ((o = as(-100, o, 100)), (a = as(-100, a, 100))), (o *= this.wheelMultiplier), (a *= this.wheelMultiplier), this.emitter.emit('scroll', {type: 'wheel', deltaX: o, deltaY: a, event: s})
			}),
			(this.element = e),
			(this.wheelMultiplier = t),
			(this.touchMultiplier = r),
			(this.normalizeWheel = i),
			(this.touchStart = {x: null, y: null}),
			(this.emitter = Vl()),
			this.element.addEventListener('wheel', this.onWheel, {passive: !1}),
			this.element.addEventListener('touchstart', this.onTouchStart, {passive: !1}),
			this.element.addEventListener('touchmove', this.onTouchMove, {passive: !1}),
			this.element.addEventListener('touchend', this.onTouchEnd, {passive: !1})
	}
	on(e, t) {
		return this.emitter.on(e, t)
	}
	destroy() {
		;(this.emitter.events = {}), this.element.removeEventListener('wheel', this.onWheel, {passive: !1}), this.element.removeEventListener('touchstart', this.onTouchStart, {passive: !1}), this.element.removeEventListener('touchmove', this.onTouchMove, {passive: !1}), this.element.removeEventListener('touchend', this.onTouchEnd, {passive: !1})
	}
}
class dp {
	constructor({direction: e, gestureDirection: t, mouseMultiplier: r, smooth: i, wrapper: s = window, content: o = document.documentElement, wheelEventsTarget: a = s, smoothWheel: l = i == null || i, smoothTouch: c = !1, syncTouch: u = !1, duration: p, easing: h = b => Math.min(1, 1.001 - Math.pow(2, -10 * b)), lerp: f = p ? null : 0.1, infinite: g = !1, orientation: d = e ?? 'vertical', gestureOrientation: y = t ?? 'vertical', touchMultiplier: m = 1, wheelMultiplier: _ = r ?? 1, normalizeWheel: v = !1} = {}) {
		;(this.onVirtualScroll = ({type: b, inertia: x, deltaX: S, deltaY: w, event: P}) => {
			if (P.ctrlKey) return
			const C = b === 'touch',
				A = b === 'wheel'
			if ((this.options.gestureOrientation === 'vertical' && w === 0) || (this.options.gestureOrientation === 'horizontal' && S === 0) || (C && this.options.gestureOrientation === 'vertical' && this.scroll === 0 && !this.options.infinite && w <= 0) || P.composedPath().find(R => (R == null || R.hasAttribute == null ? void 0 : R.hasAttribute('data-lenis-prevent')))) return
			if (this.isStopped || this.isLocked) return void P.preventDefault()
			if (((this.isSmooth = ((this.options.smoothTouch || this.options.syncTouch) && C) || (this.options.smoothWheel && A)), !this.isSmooth)) return (this.isScrolling = !1), void this.animate.stop()
			P.preventDefault()
			let k = w
			this.options.gestureOrientation === 'both' ? (k = Math.abs(w) > Math.abs(S) ? w : S) : this.options.gestureOrientation === 'horizontal' && (k = S)
			const E = C && this.options.syncTouch,
				D = C && x && Math.abs(k) > 1
			D && (k *= 33), this.scrollTo(this.targetScroll + k, ao({programmatic: !1}, E && {lerp: D ? 0.1 : 0.33}))
		}),
			(this.onScroll = () => {
				if (!this.isScrolling) {
					const b = this.animatedScroll
					;(this.animatedScroll = this.targetScroll = this.actualScroll), (this.velocity = 0), (this.direction = Math.sign(this.animatedScroll - b)), this.emit()
				}
			}),
			e && console.warn('Lenis: `direction` option is deprecated, use `orientation` instead'),
			t && console.warn('Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead'),
			r && console.warn('Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead'),
			i && console.warn('Lenis: `smooth` option is deprecated, use `smoothWheel` instead'),
			(window.lenisVersion = '1.0.8'),
			(s !== document.documentElement && s !== document.body) || (s = window),
			(this.options = {wrapper: s, content: o, wheelEventsTarget: a, smoothWheel: l, smoothTouch: c, syncTouch: u, duration: p, easing: h, lerp: f, infinite: g, gestureOrientation: y, orientation: d, touchMultiplier: m, wheelMultiplier: _, normalizeWheel: v}),
			(this.dimensions = new up(s, o)),
			this.rootElement.classList.add('lenis'),
			(this.velocity = 0),
			(this.isStopped = !1),
			(this.isSmooth = l || c),
			(this.isScrolling = !1),
			(this.targetScroll = this.animatedScroll = this.actualScroll),
			(this.animate = new cp()),
			(this.emitter = Vl()),
			this.options.wrapper.addEventListener('scroll', this.onScroll, {passive: !1}),
			(this.virtualScroll = new fp(a, {touchMultiplier: m, wheelMultiplier: _, normalizeWheel: v})),
			this.virtualScroll.on('scroll', this.onVirtualScroll)
	}
	destroy() {
		;(this.emitter.events = {}), this.options.wrapper.removeEventListener('scroll', this.onScroll, {passive: !1}), this.virtualScroll.destroy()
	}
	on(e, t) {
		return this.emitter.on(e, t)
	}
	off(e, t) {
		var r
		this.emitter.events[e] = (r = this.emitter.events[e]) == null ? void 0 : r.filter(i => t !== i)
	}
	setScroll(e) {
		this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e)
	}
	emit() {
		this.emitter.emit('scroll', this)
	}
	reset() {
		;(this.isLocked = !1), (this.isScrolling = !1), (this.velocity = 0), this.animate.stop()
	}
	start() {
		;(this.isStopped = !1), this.reset()
	}
	stop() {
		;(this.isStopped = !0), this.animate.stop(), this.reset()
	}
	raf(e) {
		const t = e - (this.time || e)
		;(this.time = e), this.animate.advance(0.001 * t)
	}
	scrollTo(e, {offset: t = 0, immediate: r = !1, lock: i = !1, duration: s = this.options.duration, easing: o = this.options.easing, lerp: a = !s && this.options.lerp, onComplete: l = null, force: c = !1, programmatic: u = !0} = {}) {
		if (!this.isStopped || c) {
			if (['top', 'left', 'start'].includes(e)) e = 0
			else if (['bottom', 'right', 'end'].includes(e)) e = this.limit
			else {
				var p
				let h
				if ((typeof e == 'string' ? (h = document.querySelector(e)) : (p = e) != null && p.nodeType && (h = e), h)) {
					if (this.options.wrapper !== window) {
						const g = this.options.wrapper.getBoundingClientRect()
						t -= this.isHorizontal ? g.left : g.top
					}
					const f = h.getBoundingClientRect()
					e = (this.isHorizontal ? f.left : f.top) + this.animatedScroll
				}
			}
			if (typeof e == 'number') {
				if (((e += t), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : (e = as(0, e, this.limit)), r)) return (this.animatedScroll = this.targetScroll = e), this.setScroll(this.scroll), this.reset(), this.emit(), void (l == null || l())
				if (!u) {
					if (e === this.targetScroll) return
					this.targetScroll = e
				}
				this.animate.fromTo(this.animatedScroll, e, {
					duration: s,
					easing: o,
					lerp: a,
					onUpdate: (h, {completed: f}) => {
						i && (this.isLocked = !0),
							(this.isScrolling = !0),
							(this.velocity = h - this.animatedScroll),
							(this.direction = Math.sign(this.velocity)),
							(this.animatedScroll = h),
							this.setScroll(this.scroll),
							u && (this.targetScroll = h),
							f &&
								(i && (this.isLocked = !1),
								requestAnimationFrame(() => {
									this.isScrolling = !1
								}),
								(this.velocity = 0),
								l == null || l()),
							this.emit()
					},
				})
			}
		}
	}
	get rootElement() {
		return this.options.wrapper === window ? this.options.content : this.options.wrapper
	}
	get limit() {
		return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
	}
	get isHorizontal() {
		return this.options.orientation === 'horizontal'
	}
	get actualScroll() {
		return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
	}
	get scroll() {
		return this.options.infinite
			? (function (e, t) {
					let r = e % t
					return ((t > 0 && r < 0) || (t < 0 && r > 0)) && (r += t), r
			  })(this.animatedScroll, this.limit)
			: this.animatedScroll
	}
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit
	}
	get isSmooth() {
		return this.__isSmooth
	}
	set isSmooth(e) {
		this.__isSmooth !== e && (this.rootElement.classList.toggle('lenis-smooth', e), (this.__isSmooth = e))
	}
	get isScrolling() {
		return this.__isScrolling
	}
	set isScrolling(e) {
		this.__isScrolling !== e && (this.rootElement.classList.toggle('lenis-scrolling', e), (this.__isScrolling = e))
	}
	get isStopped() {
		return this.__isStopped
	}
	set isStopped(e) {
		this.__isStopped !== e && (this.rootElement.classList.toggle('lenis-stopped', e), (this.__isStopped = e))
	}
}
function ar(n) {
	if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
	return n
}
function ql(n, e) {
	;(n.prototype = Object.create(e.prototype)), (n.prototype.constructor = n), (n.__proto__ = e)
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var St = {autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: {lineHeight: ''}},
	Ci = {duration: 0.5, overwrite: !1, delay: 0},
	Go,
	qe,
	xe,
	Lt = 1e8,
	ne = 1 / Lt,
	lo = Math.PI * 2,
	pp = lo / 4,
	hp = 0,
	Yl = Math.sqrt,
	gp = Math.cos,
	mp = Math.sin,
	De = function (e) {
		return typeof e == 'string'
	},
	he = function (e) {
		return typeof e == 'function'
	},
	hr = function (e) {
		return typeof e == 'number'
	},
	Vo = function (e) {
		return typeof e > 'u'
	},
	ir = function (e) {
		return typeof e == 'object'
	},
	at = function (e) {
		return e !== !1
	},
	qo = function () {
		return typeof window < 'u'
	},
	kn = function (e) {
		return he(e) || De(e)
	},
	Ul = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
	Ye = Array.isArray,
	co = /(?:-?\.?\d|\.)+/gi,
	Wl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
	mi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
	Bs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
	Xl = /[+-]=-?[.\d]+/,
	jl = /[^,'"\[\]\s]+/gi,
	_p = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
	ue,
	Mt,
	uo,
	Yo,
	wt = {},
	ls = {},
	Kl,
	Jl = function (e) {
		return (ls = ti(e, wt)) && ut
	},
	Uo = function (e, t) {
		return console.warn('Invalid property', e, 'set to', t, 'Missing plugin? gsap.registerPlugin()')
	},
	cs = function (e, t) {
		return !t && console.warn(e)
	},
	Ql = function (e, t) {
		return (e && (wt[e] = t) && ls && (ls[e] = t)) || wt
	},
	gn = function () {
		return 0
	},
	yp = {suppressEvents: !0, isStart: !0, kill: !1},
	Xn = {suppressEvents: !0, kill: !1},
	vp = {suppressEvents: !0},
	Wo = {},
	kr = [],
	fo = {},
	Zl,
	vt = {},
	Ns = {},
	Aa = 30,
	jn = [],
	Xo = '',
	jo = function (e) {
		var t = e[0],
			r,
			i
		if ((ir(t) || he(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
			for (i = jn.length; i-- && !jn[i].targetTest(t); );
			r = jn[i]
		}
		for (i = e.length; i--; ) (e[i] && (e[i]._gsap || (e[i]._gsap = new Sc(e[i], r)))) || e.splice(i, 1)
		return e
	},
	jr = function (e) {
		return e._gsap || jo(Dt(e))[0]._gsap
	},
	ec = function (e, t, r) {
		return (r = e[t]) && he(r) ? e[t]() : (Vo(r) && e.getAttribute && e.getAttribute(t)) || r
	},
	lt = function (e, t) {
		return (e = e.split(',')).forEach(t) || e
	},
	ye = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	Fe = function (e) {
		return Math.round(e * 1e7) / 1e7 || 0
	},
	bi = function (e, t) {
		var r = t.charAt(0),
			i = parseFloat(t.substr(2))
		return (e = parseFloat(e)), r === '+' ? e + i : r === '-' ? e - i : r === '*' ? e * i : e / i
	},
	bp = function (e, t) {
		for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; );
		return i < r
	},
	us = function () {
		var e = kr.length,
			t = kr.slice(0),
			r,
			i
		for (fo = {}, kr.length = 0, r = 0; r < e; r++) (i = t[r]), i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
	},
	tc = function (e, t, r, i) {
		kr.length && !qe && us(), e.render(t, r, i || (qe && t < 0 && (e._initted || e._startAt))), kr.length && !qe && us()
	},
	rc = function (e) {
		var t = parseFloat(e)
		return (t || t === 0) && (e + '').match(jl).length < 2 ? t : De(e) ? e.trim() : e
	},
	ic = function (e) {
		return e
	},
	It = function (e, t) {
		for (var r in t) r in e || (e[r] = t[r])
		return e
	},
	xp = function (e) {
		return function (t, r) {
			for (var i in r) i in t || (i === 'duration' && e) || i === 'ease' || (t[i] = r[i])
		}
	},
	ti = function (e, t) {
		for (var r in t) e[r] = t[r]
		return e
	},
	La = function n(e, t) {
		for (var r in t) r !== '__proto__' && r !== 'constructor' && r !== 'prototype' && (e[r] = ir(t[r]) ? n(e[r] || (e[r] = {}), t[r]) : t[r])
		return e
	},
	fs = function (e, t) {
		var r = {},
			i
		for (i in e) i in t || (r[i] = e[i])
		return r
	},
	Zi = function (e) {
		var t = e.parent || ue,
			r = e.keyframes ? xp(Ye(e.keyframes)) : It
		if (at(e.inherit)) for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp)
		return e
	},
	Tp = function (e, t) {
		for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; );
		return r < 0
	},
	nc = function (e, t, r, i, s) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last')
		var o = e[i],
			a
		if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev
		return o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[r]), (e[r] = t)), t._next ? (t._next._prev = t) : (e[i] = t), (t._prev = o), (t.parent = t._dp = e), t
	},
	ws = function (e, t, r, i) {
		r === void 0 && (r = '_first'), i === void 0 && (i = '_last')
		var s = t._prev,
			o = t._next
		s ? (s._next = o) : e[r] === t && (e[r] = o), o ? (o._prev = s) : e[i] === t && (e[i] = s), (t._next = t._prev = t.parent = null)
	},
	zr = function (e, t) {
		e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0)
	},
	Kr = function (e, t) {
		if (e && (!t || t._end > e._dur || t._start < 0)) for (var r = e; r; ) (r._dirty = 1), (r = r.parent)
		return e
	},
	Sp = function (e) {
		for (var t = e.parent; t && t.parent; ) (t._dirty = 1), t.totalDuration(), (t = t.parent)
		return e
	},
	po = function (e, t, r, i) {
		return e._startAt && (qe ? e._startAt.revert(Xn) : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, i))
	},
	wp = function n(e) {
		return !e || (e._ts && n(e.parent))
	},
	Da = function (e) {
		return e._repeat ? Pi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0
	},
	Pi = function (e, t) {
		var r = Math.floor((e /= t))
		return e && r === e ? r - 1 : r
	},
	ds = function (e, t) {
		return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
	},
	Es = function (e) {
		return (e._end = Fe(e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)))
	},
	Cs = function (e, t) {
		var r = e._dp
		return r && r.smoothChildTiming && e._ts && ((e._start = Fe(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts))), Es(e), r._dirty || Kr(r, e)), e
	},
	sc = function (e, t) {
		var r
		if (((t._time || (t._initted && !t._dur)) && ((r = ds(e.rawTime(), t)), (!t._dur || Cn(0, t.totalDuration(), r) - t._tTime > ne) && t.render(r, !0)), Kr(e, t)._dp && e._initted && e._time >= e._dur && e._ts)) {
			if (e._dur < e.duration()) for (r = e; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp)
			e._zTime = -ne
		}
	},
	Kt = function (e, t, r, i) {
		return t.parent && zr(t), (t._start = Fe((hr(r) ? r : r || e !== ue ? Ot(e, r, t) : e._time) + t._delay)), (t._end = Fe(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))), nc(e, t, '_first', '_last', e._sort ? '_start' : 0), ho(t) || (e._recent = t), i || sc(e, t), e._ts < 0 && Cs(e, e._tTime), e
	},
	oc = function (e, t) {
		return (wt.ScrollTrigger || Uo('scrollTrigger', t)) && wt.ScrollTrigger.create(t, e)
	},
	ac = function (e, t, r, i, s) {
		if ((Jo(e, t, s), !e._initted)) return 1
		if (!r && e._pt && !qe && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && Zl !== xt.frame) return kr.push(e), (e._lazy = [s, i]), 1
	},
	Ep = function n(e) {
		var t = e.parent
		return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
	},
	ho = function (e) {
		var t = e.data
		return t === 'isFromStart' || t === 'isStart'
	},
	Cp = function (e, t, r, i) {
		var s = e.ratio,
			o = t < 0 || (!t && ((!e._start && Ep(e) && !(!e._initted && ho(e))) || ((e._ts < 0 || e._dp._ts < 0) && !ho(e)))) ? 0 : 1,
			a = e._rDelay,
			l = 0,
			c,
			u,
			p
		if ((a && e._repeat && ((l = Cn(0, e._tDur, t)), (u = Pi(l, a)), e._yoyo && u & 1 && (o = 1 - o), u !== Pi(e._tTime, a) && ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || qe || i || e._zTime === ne || (!t && e._zTime))) {
			if (!e._initted && ac(e, t, i, r, l)) return
			for (p = e._zTime, e._zTime = t || (r ? ne : 0), r || (r = t && !p), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, c = e._pt; c; ) c.r(o, c.d), (c = c._next)
			t < 0 && po(e, t, r, !0), e._onUpdate && !r && Rt(e, 'onUpdate'), l && e._repeat && !r && e.parent && Rt(e, 'onRepeat'), (t >= e._tDur || t < 0) && e.ratio === o && (o && zr(e, 1), !r && !qe && (Rt(e, o ? 'onComplete' : 'onReverseComplete', !0), e._prom && e._prom()))
		} else e._zTime || (e._zTime = t)
	},
	Pp = function (e, t, r) {
		var i
		if (r > t)
			for (i = e._first; i && i._start <= r; ) {
				if (i.data === 'isPause' && i._start > t) return i
				i = i._next
			}
		else
			for (i = e._last; i && i._start >= r; ) {
				if (i.data === 'isPause' && i._start < t) return i
				i = i._prev
			}
	},
	Oi = function (e, t, r, i) {
		var s = e._repeat,
			o = Fe(t) || 0,
			a = e._tTime / e._tDur
		return a && !i && (e._time *= o / e._dur), (e._dur = o), (e._tDur = s ? (s < 0 ? 1e10 : Fe(o * (s + 1) + e._rDelay * s)) : o), a > 0 && !i && Cs(e, (e._tTime = e._tDur * a)), e.parent && Es(e), r || Kr(e.parent, e), e
	},
	Ra = function (e) {
		return e instanceof ot ? Kr(e) : Oi(e, e._dur)
	},
	Op = {_start: 0, endTime: gn, totalDuration: gn},
	Ot = function n(e, t, r) {
		var i = e.labels,
			s = e._recent || Op,
			o = e.duration() >= Lt ? s.endTime(!1) : e._dur,
			a,
			l,
			c
		return De(t) && (isNaN(t) || t in i) ? ((l = t.charAt(0)), (c = t.substr(-1) === '%'), (a = t.indexOf('=')), l === '<' || l === '>' ? (a >= 0 && (t = t.replace(/=/, '')), (l === '<' ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))), c && r && (l = (l / 100) * (Ye(r) ? r[0] : r).totalDuration()), a > 1 ? n(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t
	},
	en = function (e, t, r) {
		var i = hr(t[1]),
			s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
			o = t[s],
			a,
			l
		if ((i && (o.duration = t[1]), (o.parent = r), e)) {
			for (a = o, l = r; l && !('immediateRender' in a); ) (a = l.vars.defaults || {}), (l = at(l.vars.inherit) && l.parent)
			;(o.immediateRender = at(a.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1])
		}
		return new Se(t[0], o, t[s + 1])
	},
	Br = function (e, t) {
		return e || e === 0 ? t(e) : t
	},
	Cn = function (e, t, r) {
		return r < e ? e : r > t ? t : r
	},
	Ve = function (e, t) {
		return !De(e) || !(t = _p.exec(e)) ? '' : t[1]
	},
	Mp = function (e, t, r) {
		return Br(r, function (i) {
			return Cn(e, t, i)
		})
	},
	go = [].slice,
	lc = function (e, t) {
		return e && ir(e) && 'length' in e && ((!t && !e.length) || (e.length - 1 in e && ir(e[0]))) && !e.nodeType && e !== Mt
	},
	kp = function (e, t, r) {
		return (
			r === void 0 && (r = []),
			e.forEach(function (i) {
				var s
				return (De(i) && !t) || lc(i, 1) ? (s = r).push.apply(s, Dt(i)) : r.push(i)
			}) || r
		)
	},
	Dt = function (e, t, r) {
		return xe && !t && xe.selector ? xe.selector(e) : De(e) && !r && (uo || !Mi()) ? go.call((t || Yo).querySelectorAll(e), 0) : Ye(e) ? kp(e, r) : lc(e) ? go.call(e, 0) : e ? [e] : []
	},
	mo = function (e) {
		return (
			(e = Dt(e)[0] || cs('Invalid scope') || {}),
			function (t) {
				var r = e.current || e.nativeElement || e
				return Dt(t, r.querySelectorAll ? r : r === e ? cs('Invalid scope') || Yo.createElement('div') : e)
			}
		)
	},
	cc = function (e) {
		return e.sort(function () {
			return 0.5 - Math.random()
		})
	},
	uc = function (e) {
		if (he(e)) return e
		var t = ir(e) ? e : {each: e},
			r = Jr(t.ease),
			i = t.from || 0,
			s = parseFloat(t.base) || 0,
			o = {},
			a = i > 0 && i < 1,
			l = isNaN(i) || a,
			c = t.axis,
			u = i,
			p = i
		return (
			De(i) ? (u = p = {center: 0.5, edges: 0.5, end: 1}[i] || 0) : !a && l && ((u = i[0]), (p = i[1])),
			function (h, f, g) {
				var d = (g || t).length,
					y = o[d],
					m,
					_,
					v,
					b,
					x,
					S,
					w,
					P,
					C
				if (!y) {
					if (((C = t.grid === 'auto' ? 0 : (t.grid || [1, Lt])[1]), !C)) {
						for (w = -Lt; w < (w = g[C++].getBoundingClientRect().left) && C < d; );
						C--
					}
					for (y = o[d] = [], m = l ? Math.min(C, d) * u - 0.5 : i % C, _ = C === Lt ? 0 : l ? (d * p) / C - 0.5 : (i / C) | 0, w = 0, P = Lt, S = 0; S < d; S++) (v = (S % C) - m), (b = _ - ((S / C) | 0)), (y[S] = x = c ? Math.abs(c === 'y' ? b : v) : Yl(v * v + b * b)), x > w && (w = x), x < P && (P = x)
					i === 'random' && cc(y), (y.max = w - P), (y.min = P), (y.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (C > d ? d - 1 : c ? (c === 'y' ? d / C : C) : Math.max(C, d / C)) || 0) * (i === 'edges' ? -1 : 1)), (y.b = d < 0 ? s - d : s), (y.u = Ve(t.amount || t.each) || 0), (r = r && d < 0 ? bc(r) : r)
				}
				return (d = (y[h] - y.min) / y.max || 0), Fe(y.b + (r ? r(d) : d) * y.v) + y.u
			}
		)
	},
	_o = function (e) {
		var t = Math.pow(10, ((e + '').split('.')[1] || '').length)
		return function (r) {
			var i = Fe(Math.round(parseFloat(r) / e) * e * t)
			return (i - (i % 1)) / t + (hr(r) ? 0 : Ve(r))
		}
	},
	fc = function (e, t) {
		var r = Ye(e),
			i,
			s
		return (
			!r && ir(e) && ((i = r = e.radius || Lt), e.values ? ((e = Dt(e.values)), (s = !hr(e[0])) && (i *= i)) : (e = _o(e.increment))),
			Br(
				t,
				r
					? he(e)
						? function (o) {
								return (s = e(o)), Math.abs(s - o) <= i ? s : o
						  }
						: function (o) {
								for (var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Lt, u = 0, p = e.length, h, f; p--; ) s ? ((h = e[p].x - a), (f = e[p].y - l), (h = h * h + f * f)) : (h = Math.abs(e[p] - a)), h < c && ((c = h), (u = p))
								return (u = !i || c <= i ? e[u] : o), s || u === o || hr(o) ? u : u + Ve(o)
						  }
					: _o(e)
			)
		)
	},
	dc = function (e, t, r, i) {
		return Br(Ye(e) ? !t : r === !0 ? !!(r = 0) : !i, function () {
			return Ye(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i
		})
	},
	Ap = function () {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
		return function (i) {
			return t.reduce(function (s, o) {
				return o(s)
			}, i)
		}
	},
	Lp = function (e, t) {
		return function (r) {
			return e(parseFloat(r)) + (t || Ve(r))
		}
	},
	Dp = function (e, t, r) {
		return hc(e, t, 0, 1, r)
	},
	pc = function (e, t, r) {
		return Br(r, function (i) {
			return e[~~t(i)]
		})
	},
	Rp = function n(e, t, r) {
		var i = t - e
		return Ye(e)
			? pc(e, n(0, e.length), t)
			: Br(r, function (s) {
					return ((i + ((s - e) % i)) % i) + e
			  })
	},
	zp = function n(e, t, r) {
		var i = t - e,
			s = i * 2
		return Ye(e)
			? pc(e, n(0, e.length - 1), t)
			: Br(r, function (o) {
					return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o)
			  })
	},
	mn = function (e) {
		for (var t = 0, r = '', i, s, o, a; ~(i = e.indexOf('random(', t)); ) (o = e.indexOf(')', i)), (a = e.charAt(i + 7) === '['), (s = e.substr(i + 7, o - i - 7).match(a ? jl : co)), (r += e.substr(t, i - t) + dc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)), (t = o + 1)
		return r + e.substr(t, e.length - t)
	},
	hc = function (e, t, r, i, s) {
		var o = t - e,
			a = i - r
		return Br(s, function (l) {
			return r + (((l - e) / o) * a || 0)
		})
	},
	Ip = function n(e, t, r, i) {
		var s = isNaN(e + t)
			? 0
			: function (f) {
					return (1 - f) * e + f * t
			  }
		if (!s) {
			var o = De(e),
				a = {},
				l,
				c,
				u,
				p,
				h
			if ((r === !0 && (i = 1) && (r = null), o)) (e = {p: e}), (t = {p: t})
			else if (Ye(e) && !Ye(t)) {
				for (u = [], p = e.length, h = p - 2, c = 1; c < p; c++) u.push(n(e[c - 1], e[c]))
				p--,
					(s = function (g) {
						g *= p
						var d = Math.min(h, ~~g)
						return u[d](g - d)
					}),
					(r = t)
			} else i || (e = ti(Ye(e) ? [] : {}, e))
			if (!u) {
				for (l in t) Ko.call(a, e, l, 'get', t[l])
				s = function (g) {
					return ea(g, a) || (o ? e.p : e)
				}
			}
		}
		return Br(r, s)
	},
	za = function (e, t, r) {
		var i = e.labels,
			s = Lt,
			o,
			a,
			l
		for (o in i) (a = i[o] - t), a < 0 == !!r && a && s > (a = Math.abs(a)) && ((l = o), (s = a))
		return l
	},
	Rt = function (e, t, r) {
		var i = e.vars,
			s = i[t],
			o = xe,
			a = e._ctx,
			l,
			c,
			u
		if (s) return (l = i[t + 'Params']), (c = i.callbackScope || e), r && kr.length && us(), a && (xe = a), (u = l ? s.apply(c, l) : s.call(c)), (xe = o), u
	},
	Wi = function (e) {
		return zr(e), e.scrollTrigger && e.scrollTrigger.kill(!!qe), e.progress() < 1 && Rt(e, 'onInterrupt'), e
	},
	_i,
	gc = [],
	mc = function (e) {
		if (!qo()) {
			gc.push(e)
			return
		}
		e = (!e.name && e.default) || e
		var t = e.name,
			r = he(e),
			i =
				t && !r && e.init
					? function () {
							this._props = []
					  }
					: e,
			s = {init: gn, render: ea, add: Ko, kill: Qp, modifier: Jp, rawVars: 0},
			o = {targetTest: 0, get: 0, getSetter: Zo, aliases: {}, register: 0}
		if ((Mi(), e !== i)) {
			if (vt[t]) return
			It(i, It(fs(e, s), o)), ti(i.prototype, ti(s, fs(e, o))), (vt[(i.prop = t)] = i), e.targetTest && (jn.push(i), (Wo[t] = 1)), (t = (t === 'css' ? 'CSS' : t.charAt(0).toUpperCase() + t.substr(1)) + 'Plugin')
		}
		Ql(t, i), e.register && e.register(ut, i, ct)
	},
	ie = 255,
	Xi = {aqua: [0, ie, ie], lime: [0, ie, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, ie], navy: [0, 0, 128], white: [ie, ie, ie], olive: [128, 128, 0], yellow: [ie, ie, 0], orange: [ie, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [ie, 0, 0], pink: [ie, 192, 203], cyan: [0, ie, ie], transparent: [ie, ie, ie, 0]},
	$s = function (e, t, r) {
		return (e += e < 0 ? 1 : e > 1 ? -1 : 0), ((e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * ie + 0.5) | 0
	},
	_c = function (e, t, r) {
		var i = e ? (hr(e) ? [e >> 16, (e >> 8) & ie, e & ie] : 0) : Xi.black,
			s,
			o,
			a,
			l,
			c,
			u,
			p,
			h,
			f,
			g
		if (!i) {
			if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), Xi[e])) i = Xi[e]
			else if (e.charAt(0) === '#') {
				if ((e.length < 6 && ((s = e.charAt(1)), (o = e.charAt(2)), (a = e.charAt(3)), (e = '#' + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))), e.length === 9)) return (i = parseInt(e.substr(1, 6), 16)), [i >> 16, (i >> 8) & ie, i & ie, parseInt(e.substr(7), 16) / 255]
				;(e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ie, e & ie])
			} else if (e.substr(0, 3) === 'hsl') {
				if (((i = g = e.match(co)), !t)) (l = (+i[0] % 360) / 360), (c = +i[1] / 100), (u = +i[2] / 100), (o = u <= 0.5 ? u * (c + 1) : u + c - u * c), (s = u * 2 - o), i.length > 3 && (i[3] *= 1), (i[0] = $s(l + 1 / 3, s, o)), (i[1] = $s(l, s, o)), (i[2] = $s(l - 1 / 3, s, o))
				else if (~e.indexOf('=')) return (i = e.match(Wl)), r && i.length < 4 && (i[3] = 1), i
			} else i = e.match(co) || Xi.transparent
			i = i.map(Number)
		}
		return t && !g && ((s = i[0] / ie), (o = i[1] / ie), (a = i[2] / ie), (p = Math.max(s, o, a)), (h = Math.min(s, o, a)), (u = (p + h) / 2), p === h ? (l = c = 0) : ((f = p - h), (c = u > 0.5 ? f / (2 - p - h) : f / (p + h)), (l = p === s ? (o - a) / f + (o < a ? 6 : 0) : p === o ? (a - s) / f + 2 : (s - o) / f + 4), (l *= 60)), (i[0] = ~~(l + 0.5)), (i[1] = ~~(c * 100 + 0.5)), (i[2] = ~~(u * 100 + 0.5))), r && i.length < 4 && (i[3] = 1), i
	},
	yc = function (e) {
		var t = [],
			r = [],
			i = -1
		return (
			e.split(Ar).forEach(function (s) {
				var o = s.match(mi) || []
				t.push.apply(t, o), r.push((i += o.length + 1))
			}),
			(t.c = r),
			t
		)
	},
	Ia = function (e, t, r) {
		var i = '',
			s = (e + i).match(Ar),
			o = t ? 'hsla(' : 'rgba(',
			a = 0,
			l,
			c,
			u,
			p
		if (!s) return e
		if (
			((s = s.map(function (h) {
				return (h = _c(h, t, 1)) && o + (t ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3] : h.join(',')) + ')'
			})),
			r && ((u = yc(e)), (l = r.c), l.join(i) !== u.c.join(i)))
		)
			for (c = e.replace(Ar, '1').split(mi), p = c.length - 1; a < p; a++) i += c[a] + (~l.indexOf(a) ? s.shift() || o + '0,0,0,0)' : (u.length ? u : s.length ? s : r).shift())
		if (!c) for (c = e.split(Ar), p = c.length - 1; a < p; a++) i += c[a] + s[a]
		return i + c[p]
	},
	Ar = (function () {
		var n = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
			e
		for (e in Xi) n += '|' + e + '\\b'
		return new RegExp(n + ')', 'gi')
	})(),
	Fp = /hsl[a]?\(/,
	vc = function (e) {
		var t = e.join(' '),
			r
		if (((Ar.lastIndex = 0), Ar.test(t))) return (r = Fp.test(t)), (e[1] = Ia(e[1], r)), (e[0] = Ia(e[0], r, yc(e[1]))), !0
	},
	_n,
	xt = (function () {
		var n = Date.now,
			e = 500,
			t = 33,
			r = n(),
			i = r,
			s = 1e3 / 240,
			o = s,
			a = [],
			l,
			c,
			u,
			p,
			h,
			f,
			g = function d(y) {
				var m = n() - i,
					_ = y === !0,
					v,
					b,
					x,
					S
				if ((m > e && (r += m - t), (i += m), (x = i - r), (v = x - o), (v > 0 || _) && ((S = ++p.frame), (h = x - p.time * 1e3), (p.time = x = x / 1e3), (o += v + (v >= s ? 4 : s - v)), (b = 1)), _ || (l = c(d)), b)) for (f = 0; f < a.length; f++) a[f](x, h, S, y)
			}
		return (
			(p = {
				time: 0,
				frame: 0,
				tick: function () {
					g(!0)
				},
				deltaRatio: function (y) {
					return h / (1e3 / (y || 60))
				},
				wake: function () {
					Kl &&
						(!uo && qo() && ((Mt = uo = window), (Yo = Mt.document || {}), (wt.gsap = ut), (Mt.gsapVersions || (Mt.gsapVersions = [])).push(ut.version), Jl(ls || Mt.GreenSockGlobals || (!Mt.gsap && Mt) || {}), (u = Mt.requestAnimationFrame), gc.forEach(mc)),
						l && p.sleep(),
						(c =
							u ||
							function (y) {
								return setTimeout(y, (o - p.time * 1e3 + 1) | 0)
							}),
						(_n = 1),
						g(2))
				},
				sleep: function () {
					;(u ? Mt.cancelAnimationFrame : clearTimeout)(l), (_n = 0), (c = gn)
				},
				lagSmoothing: function (y, m) {
					;(e = y || 1 / 0), (t = Math.min(m || 33, e))
				},
				fps: function (y) {
					;(s = 1e3 / (y || 240)), (o = p.time * 1e3 + s)
				},
				add: function (y, m, _) {
					var v = m
						? function (b, x, S, w) {
								y(b, x, S, w), p.remove(v)
						  }
						: y
					return p.remove(y), a[_ ? 'unshift' : 'push'](v), Mi(), v
				},
				remove: function (y, m) {
					~(m = a.indexOf(y)) && a.splice(m, 1) && f >= m && f--
				},
				_listeners: a,
			}),
			p
		)
	})(),
	Mi = function () {
		return !_n && xt.wake()
	},
	Q = {},
	Bp = /^[\d.\-M][\d.\-,\s]/,
	Np = /["']/g,
	$p = function (e) {
		for (var t = {}, r = e.substr(1, e.length - 3).split(':'), i = r[0], s = 1, o = r.length, a, l, c; s < o; s++) (l = r[s]), (a = s !== o - 1 ? l.lastIndexOf(',') : l.length), (c = l.substr(0, a)), (t[i] = isNaN(c) ? c.replace(Np, '').trim() : +c), (i = l.substr(a + 1).trim())
		return t
	},
	Hp = function (e) {
		var t = e.indexOf('(') + 1,
			r = e.indexOf(')'),
			i = e.indexOf('(', t)
		return e.substring(t, ~i && i < r ? e.indexOf(')', r + 1) : r)
	},
	Gp = function (e) {
		var t = (e + '').split('('),
			r = Q[t[0]]
		return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf('{') ? [$p(t[1])] : Hp(e).split(',').map(rc)) : Q._CE && Bp.test(e) ? Q._CE('', e) : r
	},
	bc = function (e) {
		return function (t) {
			return 1 - e(1 - t)
		}
	},
	xc = function n(e, t) {
		for (var r = e._first, i; r; ) r instanceof ot ? n(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? n(r.timeline, t) : ((i = r._ease), (r._ease = r._yEase), (r._yEase = i), (r._yoyo = t))), (r = r._next)
	},
	Jr = function (e, t) {
		return (e && (he(e) ? e : Q[e] || Gp(e))) || t
	},
	oi = function (e, t, r, i) {
		r === void 0 &&
			(r = function (l) {
				return 1 - t(1 - l)
			}),
			i === void 0 &&
				(i = function (l) {
					return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
				})
		var s = {easeIn: t, easeOut: r, easeInOut: i},
			o
		return (
			lt(e, function (a) {
				;(Q[a] = wt[a] = s), (Q[(o = a.toLowerCase())] = r)
				for (var l in s) Q[o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')] = Q[a + '.' + l] = s[l]
			}),
			s
		)
	},
	Tc = function (e) {
		return function (t) {
			return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2
		}
	},
	Hs = function n(e, t, r) {
		var i = t >= 1 ? t : 1,
			s = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
			o = (s / lo) * (Math.asin(1 / i) || 0),
			a = function (u) {
				return u === 1 ? 1 : i * Math.pow(2, -10 * u) * mp((u - o) * s) + 1
			},
			l =
				e === 'out'
					? a
					: e === 'in'
					? function (c) {
							return 1 - a(1 - c)
					  }
					: Tc(a)
		return (
			(s = lo / s),
			(l.config = function (c, u) {
				return n(e, c, u)
			}),
			l
		)
	},
	Gs = function n(e, t) {
		t === void 0 && (t = 1.70158)
		var r = function (o) {
				return o ? --o * o * ((t + 1) * o + t) + 1 : 0
			},
			i =
				e === 'out'
					? r
					: e === 'in'
					? function (s) {
							return 1 - r(1 - s)
					  }
					: Tc(r)
		return (
			(i.config = function (s) {
				return n(e, s)
			}),
			i
		)
	}
lt('Linear,Quad,Cubic,Quart,Quint,Strong', function (n, e) {
	var t = e < 5 ? e + 1 : e
	oi(
		n + ',Power' + (t - 1),
		e
			? function (r) {
					return Math.pow(r, t)
			  }
			: function (r) {
					return r
			  },
		function (r) {
			return 1 - Math.pow(1 - r, t)
		},
		function (r) {
			return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
		}
	)
})
Q.Linear.easeNone = Q.none = Q.Linear.easeIn
oi('Elastic', Hs('in'), Hs('out'), Hs())
;(function (n, e) {
	var t = 1 / e,
		r = 2 * t,
		i = 2.5 * t,
		s = function (a) {
			return a < t ? n * a * a : a < r ? n * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? n * (a -= 2.25 / e) * a + 0.9375 : n * Math.pow(a - 2.625 / e, 2) + 0.984375
		}
	oi(
		'Bounce',
		function (o) {
			return 1 - s(1 - o)
		},
		s
	)
})(7.5625, 2.75)
oi('Expo', function (n) {
	return n ? Math.pow(2, 10 * (n - 1)) : 0
})
oi('Circ', function (n) {
	return -(Yl(1 - n * n) - 1)
})
oi('Sine', function (n) {
	return n === 1 ? 1 : -gp(n * pp) + 1
})
oi('Back', Gs('in'), Gs('out'), Gs())
Q.SteppedEase =
	Q.steps =
	wt.SteppedEase =
		{
			config: function (e, t) {
				e === void 0 && (e = 1)
				var r = 1 / e,
					i = e + (t ? 0 : 1),
					s = t ? 1 : 0,
					o = 1 - ne
				return function (a) {
					return (((i * Cn(0, o, a)) | 0) + s) * r
				}
			},
		}
Ci.ease = Q['quad.out']
lt('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (n) {
	return (Xo += n + ',' + n + 'Params,')
})
var Sc = function (e, t) {
		;(this.id = hp++), (e._gsap = this), (this.target = e), (this.harness = t), (this.get = t ? t.get : ec), (this.set = t ? t.getSetter : Zo)
	},
	ki = (function () {
		function n(t) {
			;(this.vars = t), (this._delay = +t.delay || 0), (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)), (this._ts = 1), Oi(this, +t.duration, 1, 1), (this.data = t.data), xe && ((this._ctx = xe), xe.data.push(this)), _n || xt.wake()
		}
		var e = n.prototype
		return (
			(e.delay = function (r) {
				return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), (this._delay = r), this) : this._delay
			}),
			(e.duration = function (r) {
				return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
			}),
			(e.totalDuration = function (r) {
				return arguments.length ? ((this._dirty = 0), Oi(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
			}),
			(e.totalTime = function (r, i) {
				if ((Mi(), !arguments.length)) return this._tTime
				var s = this._dp
				if (s && s.smoothChildTiming && this._ts) {
					for (Cs(this, r), !s._dp || s.parent || sc(s, this); s && s.parent; ) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), (s = s.parent)
					!this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && r < this._tDur) || (this._ts < 0 && r > 0) || (!this._tDur && !r)) && Kt(this._dp, this, this._start - this._delay)
				}
				return (this._tTime !== r || (!this._dur && !i) || (this._initted && Math.abs(this._zTime) === ne) || (!r && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = r), tc(this, r, i)), this
			}),
			(e.time = function (r, i) {
				return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Da(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
			}),
			(e.totalProgress = function (r, i) {
				return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
			}),
			(e.progress = function (r, i) {
				return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Da(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
			}),
			(e.iteration = function (r, i) {
				var s = this.duration() + this._rDelay
				return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Pi(this._tTime, s) + 1 : 1
			}),
			(e.timeScale = function (r) {
				if (!arguments.length) return this._rts === -ne ? 0 : this._rts
				if (this._rts === r) return this
				var i = this.parent && this._ts ? ds(this.parent._time, this) : this._tTime
				return (this._rts = +r || 0), (this._ts = this._ps || r === -ne ? 0 : this._rts), this.totalTime(Cn(-Math.abs(this._delay), this._tDur, i), !0), Es(this), Sp(this)
			}),
			(e.paused = function (r) {
				return arguments.length ? (this._ps !== r && ((this._ps = r), r ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0)) : (Mi(), (this._ts = this._rts), this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ne && (this._tTime -= ne)))), this) : this._ps
			}),
			(e.startTime = function (r) {
				if (arguments.length) {
					this._start = r
					var i = this.parent || this._dp
					return i && (i._sort || !this.parent) && Kt(i, this, r - this._delay), this
				}
				return this._start
			}),
			(e.endTime = function (r) {
				return this._start + (at(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
			}),
			(e.rawTime = function (r) {
				var i = this.parent || this._dp
				return i ? (r && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ds(i.rawTime(r), this) : this._tTime) : this._tTime
			}),
			(e.revert = function (r) {
				r === void 0 && (r = vp)
				var i = qe
				return (qe = r), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== 'nested' && r.kill !== !1 && this.kill(), (qe = i), this
			}),
			(e.globalTime = function (r) {
				for (var i = this, s = arguments.length ? r : i.rawTime(); i; ) (s = i._start + s / (i._ts || 1)), (i = i._dp)
				return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r)) : s
			}),
			(e.repeat = function (r) {
				return arguments.length ? ((this._repeat = r === 1 / 0 ? -2 : r), Ra(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
			}),
			(e.repeatDelay = function (r) {
				if (arguments.length) {
					var i = this._time
					return (this._rDelay = r), Ra(this), i ? this.time(i) : this
				}
				return this._rDelay
			}),
			(e.yoyo = function (r) {
				return arguments.length ? ((this._yoyo = r), this) : this._yoyo
			}),
			(e.seek = function (r, i) {
				return this.totalTime(Ot(this, r), at(i))
			}),
			(e.restart = function (r, i) {
				return this.play().totalTime(r ? -this._delay : 0, at(i))
			}),
			(e.play = function (r, i) {
				return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
			}),
			(e.reverse = function (r, i) {
				return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
			}),
			(e.pause = function (r, i) {
				return r != null && this.seek(r, i), this.paused(!0)
			}),
			(e.resume = function () {
				return this.paused(!1)
			}),
			(e.reversed = function (r) {
				return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ne : 0)), this) : this._rts < 0
			}),
			(e.invalidate = function () {
				return (this._initted = this._act = 0), (this._zTime = -ne), this
			}),
			(e.isActive = function () {
				var r = this.parent || this._dp,
					i = this._start,
					s
				return !!(!r || (this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - ne))
			}),
			(e.eventCallback = function (r, i, s) {
				var o = this.vars
				return arguments.length > 1 ? (i ? ((o[r] = i), s && (o[r + 'Params'] = s), r === 'onUpdate' && (this._onUpdate = i)) : delete o[r], this) : o[r]
			}),
			(e.then = function (r) {
				var i = this
				return new Promise(function (s) {
					var o = he(r) ? r : ic,
						a = function () {
							var c = i.then
							;(i.then = null), he(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), (i.then = c)
						}
					;(i._initted && i.totalProgress() === 1 && i._ts >= 0) || (!i._tTime && i._ts < 0) ? a() : (i._prom = a)
				})
			}),
			(e.kill = function () {
				Wi(this)
			}),
			n
		)
	})()
It(ki.prototype, {_time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -ne, _prom: 0, _ps: !1, _rts: 1})
var ot = (function (n) {
	ql(e, n)
	function e(r, i) {
		var s
		return r === void 0 && (r = {}), (s = n.call(this, r) || this), (s.labels = {}), (s.smoothChildTiming = !!r.smoothChildTiming), (s.autoRemoveChildren = !!r.autoRemoveChildren), (s._sort = at(r.sortChildren)), ue && Kt(r.parent || ue, ar(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && oc(ar(s), r.scrollTrigger), s
	}
	var t = e.prototype
	return (
		(t.to = function (i, s, o) {
			return en(0, arguments, this), this
		}),
		(t.from = function (i, s, o) {
			return en(1, arguments, this), this
		}),
		(t.fromTo = function (i, s, o, a) {
			return en(2, arguments, this), this
		}),
		(t.set = function (i, s, o) {
			return (s.duration = 0), (s.parent = this), Zi(s).repeatDelay || (s.repeat = 0), (s.immediateRender = !!s.immediateRender), new Se(i, s, Ot(this, o), 1), this
		}),
		(t.call = function (i, s, o) {
			return Kt(this, Se.delayedCall(0, i, s), o)
		}),
		(t.staggerTo = function (i, s, o, a, l, c, u) {
			return (o.duration = s), (o.stagger = o.stagger || a), (o.onComplete = c), (o.onCompleteParams = u), (o.parent = this), new Se(i, o, Ot(this, l)), this
		}),
		(t.staggerFrom = function (i, s, o, a, l, c, u) {
			return (o.runBackwards = 1), (Zi(o).immediateRender = at(o.immediateRender)), this.staggerTo(i, s, o, a, l, c, u)
		}),
		(t.staggerFromTo = function (i, s, o, a, l, c, u, p) {
			return (a.startAt = o), (Zi(a).immediateRender = at(a.immediateRender)), this.staggerTo(i, s, a, l, c, u, p)
		}),
		(t.render = function (i, s, o) {
			var a = this._time,
				l = this._dirty ? this.totalDuration() : this._tDur,
				c = this._dur,
				u = i <= 0 ? 0 : Fe(i),
				p = this._zTime < 0 != i < 0 && (this._initted || !c),
				h,
				f,
				g,
				d,
				y,
				m,
				_,
				v,
				b,
				x,
				S,
				w
			if ((this !== ue && u > l && i >= 0 && (u = l), u !== this._tTime || o || p)) {
				if ((a !== this._time && c && ((u += this._time - a), (i += this._time - a)), (h = u), (b = this._start), (v = this._ts), (m = !v), p && (c || (a = this._zTime), (i || !s) && (this._zTime = i)), this._repeat)) {
					if (((S = this._yoyo), (y = c + this._rDelay), this._repeat < -1 && i < 0)) return this.totalTime(y * 100 + i, s, o)
					if (((h = Fe(u % y)), u === l ? ((d = this._repeat), (h = c)) : ((d = ~~(u / y)), d && d === u / y && ((h = c), d--), h > c && (h = c)), (x = Pi(this._tTime, y)), !a && this._tTime && x !== d && this._tTime - x * y - this._dur <= 0 && (x = d), S && d & 1 && ((h = c - h), (w = 1)), d !== x && !this._lock)) {
						var P = S && x & 1,
							C = P === (S && d & 1)
						if ((d < x && (P = !P), (a = P ? 0 : c), (this._lock = 1), (this.render(a || (w ? 0 : Fe(d * y)), s, !c)._lock = 0), (this._tTime = u), !s && this.parent && Rt(this, 'onRepeat'), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), (a && a !== this._time) || m !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))) return this
						if (((c = this._dur), (l = this._tDur), C && ((this._lock = 2), (a = P ? c : -1e-4), this.render(a, !0), this.vars.repeatRefresh && !w && this.invalidate()), (this._lock = 0), !this._ts && !m)) return this
						xc(this, w)
					}
				}
				if ((this._hasPause && !this._forcing && this._lock < 2 && ((_ = Pp(this, Fe(a), Fe(h))), _ && (u -= h - (h = _._start))), (this._tTime = u), (this._time = h), (this._act = !v), this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = i), (a = 0)), !a && h && !s && !d && (Rt(this, 'onStart'), this._tTime !== u))) return this
				if (h >= a && i >= 0)
					for (f = this._first; f; ) {
						if (((g = f._next), (f._act || h >= f._start) && f._ts && _ !== f)) {
							if (f.parent !== this) return this.render(i, s, o)
							if ((f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, s, o), h !== this._time || (!this._ts && !m))) {
								;(_ = 0), g && (u += this._zTime = -ne)
								break
							}
						}
						f = g
					}
				else {
					f = this._last
					for (var A = i < 0 ? i : h; f; ) {
						if (((g = f._prev), (f._act || A <= f._end) && f._ts && _ !== f)) {
							if (f.parent !== this) return this.render(i, s, o)
							if ((f.render(f._ts > 0 ? (A - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (A - f._start) * f._ts, s, o || (qe && (f._initted || f._startAt))), h !== this._time || (!this._ts && !m))) {
								;(_ = 0), g && (u += this._zTime = A ? -ne : ne)
								break
							}
						}
						f = g
					}
				}
				if (_ && !s && (this.pause(), (_.render(h >= a ? 0 : -ne)._zTime = h >= a ? 1 : -1), this._ts)) return (this._start = b), Es(this), this.render(i, s, o)
				this._onUpdate && !s && Rt(this, 'onUpdate', !0), ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) && (b === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && ((u === l && this._ts > 0) || (!u && this._ts < 0)) && zr(this, 1), !s && !(i < 0 && !a) && (u || a || !l) && (Rt(this, u === l && i >= 0 ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
			}
			return this
		}),
		(t.add = function (i, s) {
			var o = this
			if ((hr(s) || (s = Ot(this, s, i)), !(i instanceof ki))) {
				if (Ye(i))
					return (
						i.forEach(function (a) {
							return o.add(a, s)
						}),
						this
					)
				if (De(i)) return this.addLabel(i, s)
				if (he(i)) i = Se.delayedCall(0, i)
				else return this
			}
			return this !== i ? Kt(this, i, s) : this
		}),
		(t.getChildren = function (i, s, o, a) {
			i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Lt)
			for (var l = [], c = this._first; c; ) c._start >= a && (c instanceof Se ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))), (c = c._next)
			return l
		}),
		(t.getById = function (i) {
			for (var s = this.getChildren(1, 1, 1), o = s.length; o--; ) if (s[o].vars.id === i) return s[o]
		}),
		(t.remove = function (i) {
			return De(i) ? this.removeLabel(i) : he(i) ? this.killTweensOf(i) : (ws(this, i), i === this._recent && (this._recent = this._last), Kr(this))
		}),
		(t.totalTime = function (i, s) {
			return arguments.length ? ((this._forcing = 1), !this._dp && this._ts && (this._start = Fe(xt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, s), (this._forcing = 0), this) : this._tTime
		}),
		(t.addLabel = function (i, s) {
			return (this.labels[i] = Ot(this, s)), this
		}),
		(t.removeLabel = function (i) {
			return delete this.labels[i], this
		}),
		(t.addPause = function (i, s, o) {
			var a = Se.delayedCall(0, s || gn, o)
			return (a.data = 'isPause'), (this._hasPause = 1), Kt(this, a, Ot(this, i))
		}),
		(t.removePause = function (i) {
			var s = this._first
			for (i = Ot(this, i); s; ) s._start === i && s.data === 'isPause' && zr(s), (s = s._next)
		}),
		(t.killTweensOf = function (i, s, o) {
			for (var a = this.getTweensOf(i, o), l = a.length; l--; ) wr !== a[l] && a[l].kill(i, s)
			return this
		}),
		(t.getTweensOf = function (i, s) {
			for (var o = [], a = Dt(i), l = this._first, c = hr(s), u; l; ) l instanceof Se ? bp(l._targets, a) && (c ? (!wr || (l._initted && l._ts)) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s : !s || l.isActive()) && o.push(l) : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u), (l = l._next)
			return o
		}),
		(t.tweenTo = function (i, s) {
			s = s || {}
			var o = this,
				a = Ot(o, i),
				l = s,
				c = l.startAt,
				u = l.onStart,
				p = l.onStartParams,
				h = l.immediateRender,
				f,
				g = Se.to(
					o,
					It(
						{
							ease: s.ease || 'none',
							lazy: !1,
							immediateRender: !1,
							time: a,
							overwrite: 'auto',
							duration: s.duration || Math.abs((a - (c && 'time' in c ? c.time : o._time)) / o.timeScale()) || ne,
							onStart: function () {
								if ((o.pause(), !f)) {
									var y = s.duration || Math.abs((a - (c && 'time' in c ? c.time : o._time)) / o.timeScale())
									g._dur !== y && Oi(g, y, 0, 1).render(g._time, !0, !0), (f = 1)
								}
								u && u.apply(g, p || [])
							},
						},
						s
					)
				)
			return h ? g.render(0) : g
		}),
		(t.tweenFromTo = function (i, s, o) {
			return this.tweenTo(s, It({startAt: {time: Ot(this, i)}}, o))
		}),
		(t.recent = function () {
			return this._recent
		}),
		(t.nextLabel = function (i) {
			return i === void 0 && (i = this._time), za(this, Ot(this, i))
		}),
		(t.previousLabel = function (i) {
			return i === void 0 && (i = this._time), za(this, Ot(this, i), 1)
		}),
		(t.currentLabel = function (i) {
			return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ne)
		}),
		(t.shiftChildren = function (i, s, o) {
			o === void 0 && (o = 0)
			for (var a = this._first, l = this.labels, c; a; ) a._start >= o && ((a._start += i), (a._end += i)), (a = a._next)
			if (s) for (c in l) l[c] >= o && (l[c] += i)
			return Kr(this)
		}),
		(t.invalidate = function (i) {
			var s = this._first
			for (this._lock = 0; s; ) s.invalidate(i), (s = s._next)
			return n.prototype.invalidate.call(this, i)
		}),
		(t.clear = function (i) {
			i === void 0 && (i = !0)
			for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o)
			return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Kr(this)
		}),
		(t.totalDuration = function (i) {
			var s = 0,
				o = this,
				a = o._last,
				l = Lt,
				c,
				u,
				p
			if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i))
			if (o._dirty) {
				for (p = o.parent; a; ) (c = a._prev), a._dirty && a.totalDuration(), (u = a._start), u > l && o._sort && a._ts && !o._lock ? ((o._lock = 1), (Kt(o, a, u - a._delay, 1)._lock = 0)) : (l = u), u < 0 && a._ts && ((s -= u), ((!p && !o._dp) || (p && p.smoothChildTiming)) && ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)), o.shiftChildren(-u, !1, -1 / 0), (l = 0)), a._end > s && a._ts && (s = a._end), (a = c)
				Oi(o, o === ue && o._time > s ? o._time : s, 1, 1), (o._dirty = 0)
			}
			return o._tDur
		}),
		(e.updateRoot = function (i) {
			if ((ue._ts && (tc(ue, ds(i, ue)), (Zl = xt.frame)), xt.frame >= Aa)) {
				Aa += St.autoSleep || 120
				var s = ue._first
				if ((!s || !s._ts) && St.autoSleep && xt._listeners.length < 2) {
					for (; s && !s._ts; ) s = s._next
					s || xt.sleep()
				}
			}
		}),
		e
	)
})(ki)
It(ot.prototype, {_lock: 0, _hasPause: 0, _forcing: 0})
var Vp = function (e, t, r, i, s, o, a) {
		var l = new ct(this._pt, e, t, 0, 1, Mc, null, s),
			c = 0,
			u = 0,
			p,
			h,
			f,
			g,
			d,
			y,
			m,
			_
		for (l.b = r, l.e = i, r += '', i += '', (m = ~i.indexOf('random(')) && (i = mn(i)), o && ((_ = [r, i]), o(_, e, t), (r = _[0]), (i = _[1])), h = r.match(Bs) || []; (p = Bs.exec(i)); ) (g = p[0]), (d = i.substring(c, p.index)), f ? (f = (f + 1) % 5) : d.substr(-5) === 'rgba(' && (f = 1), g !== h[u++] && ((y = parseFloat(h[u - 1]) || 0), (l._pt = {_next: l._pt, p: d || u === 1 ? d : ',', s: y, c: g.charAt(1) === '=' ? bi(y, g) - y : parseFloat(g) - y, m: f && f < 4 ? Math.round : 0}), (c = Bs.lastIndex))
		return (l.c = c < i.length ? i.substring(c, i.length) : ''), (l.fp = a), (Xl.test(i) || m) && (l.e = 0), (this._pt = l), l
	},
	Ko = function (e, t, r, i, s, o, a, l, c, u) {
		he(i) && (i = i(s || 0, e, o))
		var p = e[t],
			h = r !== 'get' ? r : he(p) ? (c ? e[t.indexOf('set') || !he(e['get' + t.substr(3)]) ? t : 'get' + t.substr(3)](c) : e[t]()) : p,
			f = he(p) ? (c ? Xp : Pc) : Qo,
			g
		if ((De(i) && (~i.indexOf('random(') && (i = mn(i)), i.charAt(1) === '=' && ((g = bi(h, i) + (Ve(h) || 0)), (g || g === 0) && (i = g))), !u || h !== i || yo)) return !isNaN(h * i) && i !== '' ? ((g = new ct(this._pt, e, t, +h || 0, i - (h || 0), typeof p == 'boolean' ? Kp : Oc, 0, f)), c && (g.fp = c), a && g.modifier(a, this, e), (this._pt = g)) : (!p && !(t in e) && Uo(t, i), Vp.call(this, e, t, h, i, f, l || St.stringFilter, c))
	},
	qp = function (e, t, r, i, s) {
		if ((he(e) && (e = tn(e, s, t, r, i)), !ir(e) || (e.style && e.nodeType) || Ye(e) || Ul(e))) return De(e) ? tn(e, s, t, r, i) : e
		var o = {},
			a
		for (a in e) o[a] = tn(e[a], s, t, r, i)
		return o
	},
	wc = function (e, t, r, i, s, o) {
		var a, l, c, u
		if (vt[e] && (a = new vt[e]()).init(s, a.rawVars ? t[e] : qp(t[e], i, s, o, r), r, i, o) !== !1 && ((r._pt = l = new ct(r._pt, s, e, 0, 1, a.render, a, 0, a.priority)), r !== _i)) for (c = r._ptLookup[r._targets.indexOf(s)], u = a._props.length; u--; ) c[a._props[u]] = l
		return a
	},
	wr,
	yo,
	Jo = function n(e, t, r) {
		var i = e.vars,
			s = i.ease,
			o = i.startAt,
			a = i.immediateRender,
			l = i.lazy,
			c = i.onUpdate,
			u = i.onUpdateParams,
			p = i.callbackScope,
			h = i.runBackwards,
			f = i.yoyoEase,
			g = i.keyframes,
			d = i.autoRevert,
			y = e._dur,
			m = e._startAt,
			_ = e._targets,
			v = e.parent,
			b = v && v.data === 'nested' ? v.vars.targets : _,
			x = e._overwrite === 'auto' && !Go,
			S = e.timeline,
			w,
			P,
			C,
			A,
			k,
			E,
			D,
			R,
			B,
			q,
			N,
			W,
			ee
		if ((S && (!g || !s) && (s = 'none'), (e._ease = Jr(s, Ci.ease)), (e._yEase = f ? bc(Jr(f === !0 ? s : f, Ci.ease)) : 0), f && e._yoyo && !e._repeat && ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)), (e._from = !S && !!i.runBackwards), !S || (g && !i.stagger))) {
			if (((R = _[0] ? jr(_[0]).harness : 0), (W = R && i[R.prop]), (w = fs(i, Wo)), m && (m._zTime < 0 && m.progress(1), t < 0 && h && a && !d ? m.render(-1, !0) : m.revert(h && y ? Xn : yp), (m._lazy = 0)), o)) {
				if ((zr((e._startAt = Se.set(_, It({data: 'isStart', overwrite: !1, parent: v, immediateRender: !0, lazy: !m && at(l), startAt: null, delay: 0, onUpdate: c, onUpdateParams: u, callbackScope: p, stagger: 0}, o)))), (e._startAt._dp = 0), (e._startAt._sat = e), t < 0 && (qe || (!a && !d)) && e._startAt.revert(Xn), a && y && t <= 0 && r <= 0)) {
					t && (e._zTime = t)
					return
				}
			} else if (h && y && !m) {
				if ((t && (a = !1), (C = It({overwrite: !1, data: 'isFromStart', lazy: a && !m && at(l), immediateRender: a, stagger: 0, parent: v}, w)), W && (C[R.prop] = W), zr((e._startAt = Se.set(_, C))), (e._startAt._dp = 0), (e._startAt._sat = e), t < 0 && (qe ? e._startAt.revert(Xn) : e._startAt.render(-1, !0)), (e._zTime = t), !a)) n(e._startAt, ne, ne)
				else if (!t) return
			}
			for (e._pt = e._ptCache = 0, l = (y && at(l)) || (l && !y), P = 0; P < _.length; P++) {
				if (
					((k = _[P]),
					(D = k._gsap || jo(_)[P]._gsap),
					(e._ptLookup[P] = q = {}),
					fo[D.id] && kr.length && us(),
					(N = b === _ ? P : b.indexOf(k)),
					R &&
						(B = new R()).init(k, W || w, e, N, b) !== !1 &&
						((e._pt = A = new ct(e._pt, k, B.name, 0, 1, B.render, B, 0, B.priority)),
						B._props.forEach(function (T) {
							q[T] = A
						}),
						B.priority && (E = 1)),
					!R || W)
				)
					for (C in w) vt[C] && (B = wc(C, w, e, N, k, b)) ? B.priority && (E = 1) : (q[C] = A = Ko.call(e, k, C, 'get', w[C], N, b, 0, i.stringFilter))
				e._op && e._op[P] && e.kill(k, e._op[P]), x && e._pt && ((wr = e), ue.killTweensOf(k, q, e.globalTime(t)), (ee = !e.parent), (wr = 0)), e._pt && l && (fo[D.id] = 1)
			}
			E && kc(e), e._onInit && e._onInit(e)
		}
		;(e._onUpdate = c), (e._initted = (!e._op || e._pt) && !ee), g && t <= 0 && S.render(Lt, !0, !0)
	},
	Yp = function (e, t, r, i, s, o, a) {
		var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
			c,
			u,
			p,
			h
		if (!l)
			for (l = e._ptCache[t] = [], p = e._ptLookup, h = e._targets.length; h--; ) {
				if (((c = p[h][t]), c && c.d && c.d._pt)) for (c = c.d._pt; c && c.p !== t && c.fp !== t; ) c = c._next
				if (!c) return (yo = 1), (e.vars[t] = '+=0'), Jo(e, a), (yo = 0), 1
				l.push(c)
			}
		for (h = l.length; h--; ) (u = l[h]), (c = u._pt || u), (c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c), (c.c = r - c.s), u.e && (u.e = ye(r) + Ve(u.e)), u.b && (u.b = c.s + Ve(u.b))
	},
	Up = function (e, t) {
		var r = e[0] ? jr(e[0]).harness : 0,
			i = r && r.aliases,
			s,
			o,
			a,
			l
		if (!i) return t
		s = ti({}, t)
		for (o in i) if (o in s) for (l = i[o].split(','), a = l.length; a--; ) s[l[a]] = s[o]
		return s
	},
	Wp = function (e, t, r, i) {
		var s = t.ease || i || 'power1.inOut',
			o,
			a
		if (Ye(t))
			(a = r[e] || (r[e] = [])),
				t.forEach(function (l, c) {
					return a.push({t: (c / (t.length - 1)) * 100, v: l, e: s})
				})
		else for (o in t) (a = r[o] || (r[o] = [])), o === 'ease' || a.push({t: parseFloat(e), v: t[o], e: s})
	},
	tn = function (e, t, r, i, s) {
		return he(e) ? e.call(t, r, i, s) : De(e) && ~e.indexOf('random(') ? mn(e) : e
	},
	Ec = Xo + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
	Cc = {}
lt(Ec + ',id,stagger,delay,duration,paused,scrollTrigger', function (n) {
	return (Cc[n] = 1)
})
var Se = (function (n) {
	ql(e, n)
	function e(r, i, s, o) {
		var a
		typeof i == 'number' && ((s.duration = i), (i = s), (s = null)), (a = n.call(this, o ? i : Zi(i)) || this)
		var l = a.vars,
			c = l.duration,
			u = l.delay,
			p = l.immediateRender,
			h = l.stagger,
			f = l.overwrite,
			g = l.keyframes,
			d = l.defaults,
			y = l.scrollTrigger,
			m = l.yoyoEase,
			_ = i.parent || ue,
			v = (Ye(r) || Ul(r) ? hr(r[0]) : 'length' in i) ? [r] : Dt(r),
			b,
			x,
			S,
			w,
			P,
			C,
			A,
			k
		if (((a._targets = v.length ? jo(v) : cs('GSAP target ' + r + ' not found. https://greensock.com', !St.nullTargetWarn) || []), (a._ptLookup = []), (a._overwrite = f), g || h || kn(c) || kn(u))) {
			if (((i = a.vars), (b = a.timeline = new ot({data: 'nested', defaults: d || {}, targets: _ && _.data === 'nested' ? _.vars.targets : v})), b.kill(), (b.parent = b._dp = ar(a)), (b._start = 0), h || kn(c) || kn(u))) {
				if (((w = v.length), (A = h && uc(h)), ir(h))) for (P in h) ~Ec.indexOf(P) && (k || (k = {}), (k[P] = h[P]))
				for (x = 0; x < w; x++) (S = fs(i, Cc)), (S.stagger = 0), m && (S.yoyoEase = m), k && ti(S, k), (C = v[x]), (S.duration = +tn(c, ar(a), x, C, v)), (S.delay = (+tn(u, ar(a), x, C, v) || 0) - a._delay), !h && w === 1 && S.delay && ((a._delay = u = S.delay), (a._start += u), (S.delay = 0)), b.to(C, S, A ? A(x, C, v) : 0), (b._ease = Q.none)
				b.duration() ? (c = u = 0) : (a.timeline = 0)
			} else if (g) {
				Zi(It(b.vars.defaults, {ease: 'none'})), (b._ease = Jr(g.ease || i.ease || 'none'))
				var E = 0,
					D,
					R,
					B
				if (Ye(g))
					g.forEach(function (q) {
						return b.to(v, q, '>')
					}),
						b.duration()
				else {
					S = {}
					for (P in g) P === 'ease' || P === 'easeEach' || Wp(P, g[P], S, g.easeEach)
					for (P in S)
						for (
							D = S[P].sort(function (q, N) {
								return q.t - N.t
							}),
								E = 0,
								x = 0;
							x < D.length;
							x++
						)
							(R = D[x]), (B = {ease: R.e, duration: ((R.t - (x ? D[x - 1].t : 0)) / 100) * c}), (B[P] = R.v), b.to(v, B, E), (E += B.duration)
					b.duration() < c && b.to({}, {duration: c - b.duration()})
				}
			}
			c || a.duration((c = b.duration()))
		} else a.timeline = 0
		return f === !0 && !Go && ((wr = ar(a)), ue.killTweensOf(v), (wr = 0)), Kt(_, ar(a), s), i.reversed && a.reverse(), i.paused && a.paused(!0), (p || (!c && !g && a._start === Fe(_._time) && at(p) && wp(ar(a)) && _.data !== 'nested')) && ((a._tTime = -ne), a.render(Math.max(0, -u) || 0)), y && oc(ar(a), y), a
	}
	var t = e.prototype
	return (
		(t.render = function (i, s, o) {
			var a = this._time,
				l = this._tDur,
				c = this._dur,
				u = i < 0,
				p = i > l - ne && !u ? l : i < ne ? 0 : i,
				h,
				f,
				g,
				d,
				y,
				m,
				_,
				v,
				b
			if (!c) Cp(this, i, s, o)
			else if (p !== this._tTime || !i || o || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== u)) {
				if (((h = p), (v = this.timeline), this._repeat)) {
					if (((d = c + this._rDelay), this._repeat < -1 && u)) return this.totalTime(d * 100 + i, s, o)
					if (((h = Fe(p % d)), p === l ? ((g = this._repeat), (h = c)) : ((g = ~~(p / d)), g && g === p / d && ((h = c), g--), h > c && (h = c)), (m = this._yoyo && g & 1), m && ((b = this._yEase), (h = c - h)), (y = Pi(this._tTime, d)), h === a && !o && this._initted)) return (this._tTime = p), this
					g !== y && (v && this._yEase && xc(v, m), this.vars.repeatRefresh && !m && !this._lock && ((this._lock = o = 1), (this.render(Fe(d * g), !0).invalidate()._lock = 0)))
				}
				if (!this._initted) {
					if (ac(this, u ? i : h, o, s, p)) return (this._tTime = 0), this
					if (a !== this._time) return this
					if (c !== this._dur) return this.render(i, s, o)
				}
				if (((this._tTime = p), (this._time = h), !this._act && this._ts && ((this._act = 1), (this._lazy = 0)), (this.ratio = _ = (b || this._ease)(h / c)), this._from && (this.ratio = _ = 1 - _), h && !a && !s && !g && (Rt(this, 'onStart'), this._tTime !== p))) return this
				for (f = this._pt; f; ) f.r(_, f.d), (f = f._next)
				;(v && v.render(i < 0 ? i : !h && m ? -ne : v._dur * v._ease(h / this._dur), s, o)) || (this._startAt && (this._zTime = i)), this._onUpdate && !s && (u && po(this, i, s, o), Rt(this, 'onUpdate')), this._repeat && g !== y && this.vars.onRepeat && !s && this.parent && Rt(this, 'onRepeat'), (p === this._tDur || !p) && this._tTime === p && (u && !this._onUpdate && po(this, i, !0, !0), (i || !c) && ((p === this._tDur && this._ts > 0) || (!p && this._ts < 0)) && zr(this, 1), !s && !(u && !a) && (p || a || m) && (Rt(this, p === l ? 'onComplete' : 'onReverseComplete', !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
			}
			return this
		}),
		(t.targets = function () {
			return this._targets
		}),
		(t.invalidate = function (i) {
			return (!i || !this.vars.runBackwards) && (this._startAt = 0), (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(i), n.prototype.invalidate.call(this, i)
		}),
		(t.resetTo = function (i, s, o, a) {
			_n || xt.wake(), this._ts || this.play()
			var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
				c
			return this._initted || Jo(this, l), (c = this._ease(l / this._dur)), Yp(this, i, s, o, a, c, l) ? this.resetTo(i, s, o, a) : (Cs(this, 0), this.parent || nc(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0), this.render(0))
		}),
		(t.kill = function (i, s) {
			if ((s === void 0 && (s = 'all'), !i && (!s || s === 'all'))) return (this._lazy = this._pt = 0), this.parent ? Wi(this) : this
			if (this.timeline) {
				var o = this.timeline.totalDuration()
				return this.timeline.killTweensOf(i, s, wr && wr.vars.overwrite !== !0)._first || Wi(this), this.parent && o !== this.timeline.totalDuration() && Oi(this, (this._dur * this.timeline._tDur) / o, 0, 1), this
			}
			var a = this._targets,
				l = i ? Dt(i) : a,
				c = this._ptLookup,
				u = this._pt,
				p,
				h,
				f,
				g,
				d,
				y,
				m
			if ((!s || s === 'all') && Tp(a, l)) return s === 'all' && (this._pt = 0), Wi(this)
			for (
				p = this._op = this._op || [],
					s !== 'all' &&
						(De(s) &&
							((d = {}),
							lt(s, function (_) {
								return (d[_] = 1)
							}),
							(s = d)),
						(s = Up(a, s))),
					m = a.length;
				m--;

			)
				if (~l.indexOf(a[m])) {
					;(h = c[m]), s === 'all' ? ((p[m] = s), (g = h), (f = {})) : ((f = p[m] = p[m] || {}), (g = s))
					for (d in g) (y = h && h[d]), y && ((!('kill' in y.d) || y.d.kill(d) === !0) && ws(this, y, '_pt'), delete h[d]), f !== 'all' && (f[d] = 1)
				}
			return this._initted && !this._pt && u && Wi(this), this
		}),
		(e.to = function (i, s) {
			return new e(i, s, arguments[2])
		}),
		(e.from = function (i, s) {
			return en(1, arguments)
		}),
		(e.delayedCall = function (i, s, o, a) {
			return new e(s, 0, {immediateRender: !1, lazy: !1, overwrite: !1, delay: i, onComplete: s, onReverseComplete: s, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: a})
		}),
		(e.fromTo = function (i, s, o) {
			return en(2, arguments)
		}),
		(e.set = function (i, s) {
			return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s)
		}),
		(e.killTweensOf = function (i, s, o) {
			return ue.killTweensOf(i, s, o)
		}),
		e
	)
})(ki)
It(Se.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0})
lt('staggerTo,staggerFrom,staggerFromTo', function (n) {
	Se[n] = function () {
		var e = new ot(),
			t = go.call(arguments, 0)
		return t.splice(n === 'staggerFromTo' ? 5 : 4, 0, 0), e[n].apply(e, t)
	}
})
var Qo = function (e, t, r) {
		return (e[t] = r)
	},
	Pc = function (e, t, r) {
		return e[t](r)
	},
	Xp = function (e, t, r, i) {
		return e[t](i.fp, r)
	},
	jp = function (e, t, r) {
		return e.setAttribute(t, r)
	},
	Zo = function (e, t) {
		return he(e[t]) ? Pc : Vo(e[t]) && e.setAttribute ? jp : Qo
	},
	Oc = function (e, t) {
		return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
	},
	Kp = function (e, t) {
		return t.set(t.t, t.p, !!(t.s + t.c * e), t)
	},
	Mc = function (e, t) {
		var r = t._pt,
			i = ''
		if (!e && t.b) i = t.b
		else if (e === 1 && t.e) i = t.e
		else {
			for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i), (r = r._next)
			i += t.c
		}
		t.set(t.t, t.p, i, t)
	},
	ea = function (e, t) {
		for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next)
	},
	Jp = function (e, t, r, i) {
		for (var s = this._pt, o; s; ) (o = s._next), s.p === i && s.modifier(e, t, r), (s = o)
	},
	Qp = function (e) {
		for (var t = this._pt, r, i; t; ) (i = t._next), (t.p === e && !t.op) || t.op === e ? ws(this, t, '_pt') : t.dep || (r = 1), (t = i)
		return !r
	},
	Zp = function (e, t, r, i) {
		i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
	},
	kc = function (e) {
		for (var t = e._pt, r, i, s, o; t; ) {
			for (r = t._next, i = s; i && i.pr > t.pr; ) i = i._next
			;(t._prev = i ? i._prev : o) ? (t._prev._next = t) : (s = t), (t._next = i) ? (i._prev = t) : (o = t), (t = r)
		}
		e._pt = s
	},
	ct = (function () {
		function n(t, r, i, s, o, a, l, c, u) {
			;(this.t = r), (this.s = s), (this.c = o), (this.p = i), (this.r = a || Oc), (this.d = l || this), (this.set = c || Qo), (this.pr = u || 0), (this._next = t), t && (t._prev = this)
		}
		var e = n.prototype
		return (
			(e.modifier = function (r, i, s) {
				;(this.mSet = this.mSet || this.set), (this.set = Zp), (this.m = r), (this.mt = s), (this.tween = i)
			}),
			n
		)
	})()
lt(Xo + 'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger', function (n) {
	return (Wo[n] = 1)
})
wt.TweenMax = wt.TweenLite = Se
wt.TimelineLite = wt.TimelineMax = ot
ue = new ot({sortChildren: !1, defaults: Ci, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0})
St.stringFilter = vc
var Ai = [],
	Kn = {},
	eh = [],
	Fa = 0,
	Vs = function (e) {
		return (Kn[e] || eh).map(function (t) {
			return t()
		})
	},
	vo = function () {
		var e = Date.now(),
			t = []
		e - Fa > 2 &&
			(Vs('matchMediaInit'),
			Ai.forEach(function (r) {
				var i = r.queries,
					s = r.conditions,
					o,
					a,
					l,
					c
				for (a in i) (o = Mt.matchMedia(i[a]).matches), o && (l = 1), o !== s[a] && ((s[a] = o), (c = 1))
				c && (r.revert(), l && t.push(r))
			}),
			Vs('matchMediaRevert'),
			t.forEach(function (r) {
				return r.onMatch(r)
			}),
			(Fa = e),
			Vs('matchMedia'))
	},
	Ac = (function () {
		function n(t, r) {
			;(this.selector = r && mo(r)), (this.data = []), (this._r = []), (this.isReverted = !1), t && this.add(t)
		}
		var e = n.prototype
		return (
			(e.add = function (r, i, s) {
				he(r) && ((s = i), (i = r), (r = he))
				var o = this,
					a = function () {
						var c = xe,
							u = o.selector,
							p
						return c && c !== o && c.data.push(o), s && (o.selector = mo(s)), (xe = o), (p = i.apply(o, arguments)), he(p) && o._r.push(p), (xe = c), (o.selector = u), (o.isReverted = !1), p
					}
				return (o.last = a), r === he ? a(o) : r ? (o[r] = a) : a
			}),
			(e.ignore = function (r) {
				var i = xe
				;(xe = null), r(this), (xe = i)
			}),
			(e.getTweens = function () {
				var r = []
				return (
					this.data.forEach(function (i) {
						return i instanceof n ? r.push.apply(r, i.getTweens()) : i instanceof Se && !(i.parent && i.parent.data === 'nested') && r.push(i)
					}),
					r
				)
			}),
			(e.clear = function () {
				this._r.length = this.data.length = 0
			}),
			(e.kill = function (r, i) {
				var s = this
				if (r) {
					var o = this.getTweens()
					this.data.forEach(function (l) {
						l.data === 'isFlip' &&
							(l.revert(),
							l.getChildren(!0, !0, !1).forEach(function (c) {
								return o.splice(o.indexOf(c), 1)
							}))
					}),
						o
							.map(function (l) {
								return {g: l.globalTime(0), t: l}
							})
							.sort(function (l, c) {
								return c.g - l.g || -1
							})
							.forEach(function (l) {
								return l.t.revert(r)
							}),
						this.data.forEach(function (l) {
							return !(l instanceof ki) && l.revert && l.revert(r)
						}),
						this._r.forEach(function (l) {
							return l(r, s)
						}),
						(this.isReverted = !0)
				} else
					this.data.forEach(function (l) {
						return l.kill && l.kill()
					})
				if ((this.clear(), i)) {
					var a = Ai.indexOf(this)
					~a && Ai.splice(a, 1)
				}
			}),
			(e.revert = function (r) {
				this.kill(r || {})
			}),
			n
		)
	})(),
	th = (function () {
		function n(t) {
			;(this.contexts = []), (this.scope = t)
		}
		var e = n.prototype
		return (
			(e.add = function (r, i, s) {
				ir(r) || (r = {matches: r})
				var o = new Ac(0, s || this.scope),
					a = (o.conditions = {}),
					l,
					c,
					u
				this.contexts.push(o), (i = o.add('onMatch', i)), (o.queries = r)
				for (c in r) c === 'all' ? (u = 1) : ((l = Mt.matchMedia(r[c])), l && (Ai.indexOf(o) < 0 && Ai.push(o), (a[c] = l.matches) && (u = 1), l.addListener ? l.addListener(vo) : l.addEventListener('change', vo)))
				return u && i(o), this
			}),
			(e.revert = function (r) {
				this.kill(r || {})
			}),
			(e.kill = function (r) {
				this.contexts.forEach(function (i) {
					return i.kill(r, !0)
				})
			}),
			n
		)
	})(),
	ps = {
		registerPlugin: function () {
			for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
			t.forEach(function (i) {
				return mc(i)
			})
		},
		timeline: function (e) {
			return new ot(e)
		},
		getTweensOf: function (e, t) {
			return ue.getTweensOf(e, t)
		},
		getProperty: function (e, t, r, i) {
			De(e) && (e = Dt(e)[0])
			var s = jr(e || {}).get,
				o = r ? ic : rc
			return (
				r === 'native' && (r = ''),
				e &&
					(t
						? o(((vt[t] && vt[t].get) || s)(e, t, r, i))
						: function (a, l, c) {
								return o(((vt[a] && vt[a].get) || s)(e, a, l, c))
						  })
			)
		},
		quickSetter: function (e, t, r) {
			if (((e = Dt(e)), e.length > 1)) {
				var i = e.map(function (u) {
						return ut.quickSetter(u, t, r)
					}),
					s = i.length
				return function (u) {
					for (var p = s; p--; ) i[p](u)
				}
			}
			e = e[0] || {}
			var o = vt[t],
				a = jr(e),
				l = (a.harness && (a.harness.aliases || {})[t]) || t,
				c = o
					? function (u) {
							var p = new o()
							;(_i._pt = 0), p.init(e, r ? u + r : u, _i, 0, [e]), p.render(1, p), _i._pt && ea(1, _i)
					  }
					: a.set(e, l)
			return o
				? c
				: function (u) {
						return c(e, l, r ? u + r : u, a, 1)
				  }
		},
		quickTo: function (e, t, r) {
			var i,
				s = ut.to(e, ti(((i = {}), (i[t] = '+=0.1'), (i.paused = !0), i), r || {})),
				o = function (l, c, u) {
					return s.resetTo(t, l, c, u)
				}
			return (o.tween = s), o
		},
		isTweening: function (e) {
			return ue.getTweensOf(e, !0).length > 0
		},
		defaults: function (e) {
			return e && e.ease && (e.ease = Jr(e.ease, Ci.ease)), La(Ci, e || {})
		},
		config: function (e) {
			return La(St, e || {})
		},
		registerEffect: function (e) {
			var t = e.name,
				r = e.effect,
				i = e.plugins,
				s = e.defaults,
				o = e.extendTimeline
			;(i || '').split(',').forEach(function (a) {
				return a && !vt[a] && !wt[a] && cs(t + ' effect requires ' + a + ' plugin.')
			}),
				(Ns[t] = function (a, l, c) {
					return r(Dt(a), It(l || {}, s), c)
				}),
				o &&
					(ot.prototype[t] = function (a, l, c) {
						return this.add(Ns[t](a, ir(l) ? l : (c = l) && {}, this), c)
					})
		},
		registerEase: function (e, t) {
			Q[e] = Jr(t)
		},
		parseEase: function (e, t) {
			return arguments.length ? Jr(e, t) : Q
		},
		getById: function (e) {
			return ue.getById(e)
		},
		exportRoot: function (e, t) {
			e === void 0 && (e = {})
			var r = new ot(e),
				i,
				s
			for (r.smoothChildTiming = at(e.smoothChildTiming), ue.remove(r), r._dp = 0, r._time = r._tTime = ue._time, i = ue._first; i; ) (s = i._next), (t || !(!i._dur && i instanceof Se && i.vars.onComplete === i._targets[0])) && Kt(r, i, i._start - i._delay), (i = s)
			return Kt(ue, r, 0), r
		},
		context: function (e, t) {
			return e ? new Ac(e, t) : xe
		},
		matchMedia: function (e) {
			return new th(e)
		},
		matchMediaRefresh: function () {
			return (
				Ai.forEach(function (e) {
					var t = e.conditions,
						r,
						i
					for (i in t) t[i] && ((t[i] = !1), (r = 1))
					r && e.revert()
				}) || vo()
			)
		},
		addEventListener: function (e, t) {
			var r = Kn[e] || (Kn[e] = [])
			~r.indexOf(t) || r.push(t)
		},
		removeEventListener: function (e, t) {
			var r = Kn[e],
				i = r && r.indexOf(t)
			i >= 0 && r.splice(i, 1)
		},
		utils: {wrap: Rp, wrapYoyo: zp, distribute: uc, random: dc, snap: fc, normalize: Dp, getUnit: Ve, clamp: Mp, splitColor: _c, toArray: Dt, selector: mo, mapRange: hc, pipe: Ap, unitize: Lp, interpolate: Ip, shuffle: cc},
		install: Jl,
		effects: Ns,
		ticker: xt,
		updateRoot: ot.updateRoot,
		plugins: vt,
		globalTimeline: ue,
		core: {
			PropTween: ct,
			globals: Ql,
			Tween: Se,
			Timeline: ot,
			Animation: ki,
			getCache: jr,
			_removeLinkedListItem: ws,
			reverting: function () {
				return qe
			},
			context: function (e) {
				return e && xe && (xe.data.push(e), (e._ctx = xe)), xe
			},
			suppressOverwrites: function (e) {
				return (Go = e)
			},
		},
	}
lt('to,from,fromTo,delayedCall,set,killTweensOf', function (n) {
	return (ps[n] = Se[n])
})
xt.add(ot.updateRoot)
_i = ps.to({}, {duration: 0})
var rh = function (e, t) {
		for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; ) r = r._next
		return r
	},
	ih = function (e, t) {
		var r = e._targets,
			i,
			s,
			o
		for (i in t) for (s = r.length; s--; ) (o = e._ptLookup[s][i]), o && (o = o.d) && (o._pt && (o = rh(o, i)), o && o.modifier && o.modifier(t[i], e, r[s], i))
	},
	qs = function (e, t) {
		return {
			name: e,
			rawVars: 1,
			init: function (i, s, o) {
				o._onInit = function (a) {
					var l, c
					if (
						(De(s) &&
							((l = {}),
							lt(s, function (u) {
								return (l[u] = 1)
							}),
							(s = l)),
						t)
					) {
						l = {}
						for (c in s) l[c] = t(s[c])
						s = l
					}
					ih(a, s)
				}
			},
		}
	},
	ut =
		ps.registerPlugin(
			{
				name: 'attr',
				init: function (e, t, r, i, s) {
					var o, a, l
					this.tween = r
					for (o in t) (l = e.getAttribute(o) || ''), (a = this.add(e, 'setAttribute', (l || 0) + '', t[o], i, s, 0, 0, o)), (a.op = o), (a.b = l), this._props.push(o)
				},
				render: function (e, t) {
					for (var r = t._pt; r; ) qe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next)
				},
			},
			{
				name: 'endArray',
				init: function (e, t) {
					for (var r = t.length; r--; ) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
				},
			},
			qs('roundProps', _o),
			qs('modifiers'),
			qs('snap', fc)
		) || ps
Se.version = ot.version = ut.version = '3.11.5'
Kl = 1
qo() && Mi()
Q.Power0
Q.Power1
Q.Power2
Q.Power3
Q.Power4
Q.Linear
Q.Quad
Q.Cubic
Q.Quart
Q.Quint
Q.Strong
Q.Elastic
Q.Back
Q.SteppedEase
Q.Bounce
Q.Sine
Q.Expo
Q.Circ
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ba,
	Er,
	xi,
	ta,
	Wr,
	Na,
	ra,
	nh = function () {
		return typeof window < 'u'
	},
	gr = {},
	Yr = 180 / Math.PI,
	Ti = Math.PI / 180,
	fi = Math.atan2,
	$a = 1e8,
	ia = /([A-Z])/g,
	sh = /(left|right|width|margin|padding|x)/i,
	oh = /[\s,\(]\S/,
	Zt = {autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity'},
	bo = function (e, t) {
		return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
	},
	ah = function (e, t) {
		return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
	},
	lh = function (e, t) {
		return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
	},
	ch = function (e, t) {
		var r = t.s + t.c * e
		t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t)
	},
	Lc = function (e, t) {
		return t.set(t.t, t.p, e ? t.e : t.b, t)
	},
	Dc = function (e, t) {
		return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
	},
	uh = function (e, t, r) {
		return (e.style[t] = r)
	},
	fh = function (e, t, r) {
		return e.style.setProperty(t, r)
	},
	dh = function (e, t, r) {
		return (e._gsap[t] = r)
	},
	ph = function (e, t, r) {
		return (e._gsap.scaleX = e._gsap.scaleY = r)
	},
	hh = function (e, t, r, i, s) {
		var o = e._gsap
		;(o.scaleX = o.scaleY = r), o.renderTransform(s, o)
	},
	gh = function (e, t, r, i, s) {
		var o = e._gsap
		;(o[t] = r), o.renderTransform(s, o)
	},
	fe = 'transform',
	qt = fe + 'Origin',
	mh = function n(e, t) {
		var r = this,
			i = this.target,
			s = i.style
		if (e in gr) {
			if (((this.tfm = this.tfm || {}), e !== 'transform'))
				(e = Zt[e] || e),
					~e.indexOf(',')
						? e.split(',').forEach(function (o) {
								return (r.tfm[o] = lr(i, o))
						  })
						: (this.tfm[e] = i._gsap.x ? i._gsap[e] : lr(i, e))
			else
				return Zt.transform.split(',').forEach(function (o) {
					return n.call(r, o, t)
				})
			if (this.props.indexOf(fe) >= 0) return
			i._gsap.svg && ((this.svgo = i.getAttribute('data-svg-origin')), this.props.push(qt, t, '')), (e = fe)
		}
		;(s || t) && this.props.push(e, t, s[e])
	},
	Rc = function (e) {
		e.translate && (e.removeProperty('translate'), e.removeProperty('scale'), e.removeProperty('rotate'))
	},
	_h = function () {
		var e = this.props,
			t = this.target,
			r = t.style,
			i = t._gsap,
			s,
			o
		for (s = 0; s < e.length; s += 3) e[s + 1] ? (t[e[s]] = e[s + 2]) : e[s + 2] ? (r[e[s]] = e[s + 2]) : r.removeProperty(e[s].substr(0, 2) === '--' ? e[s] : e[s].replace(ia, '-$1').toLowerCase())
		if (this.tfm) {
			for (o in this.tfm) i[o] = this.tfm[o]
			i.svg && (i.renderTransform(), t.setAttribute('data-svg-origin', this.svgo || '')), (s = ra()), (!s || !s.isStart) && !r[fe] && (Rc(r), (i.uncache = 1))
		}
	},
	zc = function (e, t) {
		var r = {target: e, props: [], revert: _h, save: mh}
		return (
			e._gsap || ut.core.getCache(e),
			t &&
				t.split(',').forEach(function (i) {
					return r.save(i)
				}),
			r
		)
	},
	Ic,
	xo = function (e, t) {
		var r = Er.createElementNS ? Er.createElementNS((t || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e) : Er.createElement(e)
		return r.style ? r : Er.createElement(e)
	},
	tr = function n(e, t, r) {
		var i = getComputedStyle(e)
		return i[t] || i.getPropertyValue(t.replace(ia, '-$1').toLowerCase()) || i.getPropertyValue(t) || (!r && n(e, Li(t) || t, 1)) || ''
	},
	Ha = 'O,Moz,ms,Ms,Webkit'.split(','),
	Li = function (e, t, r) {
		var i = t || Wr,
			s = i.style,
			o = 5
		if (e in s && !r) return e
		for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Ha[o] + e in s); );
		return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? Ha[o] : '') + e
	},
	To = function () {
		nh() && window.document && ((Ba = window), (Er = Ba.document), (xi = Er.documentElement), (Wr = xo('div') || {style: {}}), xo('div'), (fe = Li(fe)), (qt = fe + 'Origin'), (Wr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'), (Ic = !!Li('perspective')), (ra = ut.core.reverting), (ta = 1))
	},
	Ys = function n(e) {
		var t = xo('svg', (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'),
			r = this.parentNode,
			i = this.nextSibling,
			s = this.style.cssText,
			o
		if ((xi.appendChild(t), t.appendChild(this), (this.style.display = 'block'), e))
			try {
				;(o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = n)
			} catch {}
		else this._gsapBBox && (o = this._gsapBBox())
		return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), xi.removeChild(t), (this.style.cssText = s), o
	},
	Ga = function (e, t) {
		for (var r = t.length; r--; ) if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
	},
	Fc = function (e) {
		var t
		try {
			t = e.getBBox()
		} catch {
			t = Ys.call(e, !0)
		}
		return (t && (t.width || t.height)) || e.getBBox === Ys || (t = Ys.call(e, !0)), t && !t.width && !t.x && !t.y ? {x: +Ga(e, ['x', 'cx', 'x1']) || 0, y: +Ga(e, ['y', 'cy', 'y1']) || 0, width: 0, height: 0} : t
	},
	Bc = function (e) {
		return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fc(e))
	},
	yn = function (e, t) {
		if (t) {
			var r = e.style
			t in gr && t !== qt && (t = fe), r.removeProperty ? ((t.substr(0, 2) === 'ms' || t.substr(0, 6) === 'webkit') && (t = '-' + t), r.removeProperty(t.replace(ia, '-$1').toLowerCase())) : r.removeAttribute(t)
		}
	},
	Cr = function (e, t, r, i, s, o) {
		var a = new ct(e._pt, t, r, 0, 1, o ? Dc : Lc)
		return (e._pt = a), (a.b = i), (a.e = s), e._props.push(r), a
	},
	Va = {deg: 1, rad: 1, turn: 1},
	yh = {grid: 1, flex: 1},
	Ir = function n(e, t, r, i) {
		var s = parseFloat(r) || 0,
			o = (r + '').trim().substr((s + '').length) || 'px',
			a = Wr.style,
			l = sh.test(t),
			c = e.tagName.toLowerCase() === 'svg',
			u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
			p = 100,
			h = i === 'px',
			f = i === '%',
			g,
			d,
			y,
			m
		return i === o || !s || Va[i] || Va[o] ? s : (o !== 'px' && !h && (s = n(e, t, r, 'px')), (m = e.getCTM && Bc(e)), (f || o === '%') && (gr[t] || ~t.indexOf('adius')) ? ((g = m ? e.getBBox()[l ? 'width' : 'height'] : e[u]), ye(f ? (s / g) * p : (s / 100) * g)) : ((a[l ? 'width' : 'height'] = p + (h ? o : i)), (d = ~t.indexOf('adius') || (i === 'em' && e.appendChild && !c) ? e : e.parentNode), m && (d = (e.ownerSVGElement || {}).parentNode), (!d || d === Er || !d.appendChild) && (d = Er.body), (y = d._gsap), y && f && y.width && l && y.time === xt.time && !y.uncache ? ye((s / y.width) * p) : ((f || o === '%') && !yh[tr(d, 'display')] && (a.position = tr(e, 'position')), d === e && (a.position = 'static'), d.appendChild(Wr), (g = Wr[u]), d.removeChild(Wr), (a.position = 'absolute'), l && f && ((y = jr(d)), (y.time = xt.time), (y.width = d[u])), ye(h ? (g * s) / p : g && s ? (p / g) * s : 0))))
	},
	lr = function (e, t, r, i) {
		var s
		return ta || To(), t in Zt && t !== 'transform' && ((t = Zt[t]), ~t.indexOf(',') && (t = t.split(',')[0])), gr[t] && t !== 'transform' ? ((s = bn(e, i)), (s = t !== 'transformOrigin' ? s[t] : s.svg ? s.origin : gs(tr(e, qt)) + ' ' + s.zOrigin + 'px')) : ((s = e.style[t]), (!s || s === 'auto' || i || ~(s + '').indexOf('calc(')) && (s = (hs[t] && hs[t](e, t, r)) || tr(e, t) || ec(e, t) || (t === 'opacity' ? 1 : 0))), r && !~(s + '').trim().indexOf(' ') ? Ir(e, t, s, r) + r : s
	},
	vh = function (e, t, r, i) {
		if (!r || r === 'none') {
			var s = Li(t, e, 1),
				o = s && tr(e, s, 1)
			o && o !== r ? ((t = s), (r = o)) : t === 'borderColor' && (r = tr(e, 'borderTopColor'))
		}
		var a = new ct(this._pt, e.style, t, 0, 1, Mc),
			l = 0,
			c = 0,
			u,
			p,
			h,
			f,
			g,
			d,
			y,
			m,
			_,
			v,
			b,
			x
		if (((a.b = r), (a.e = i), (r += ''), (i += ''), i === 'auto' && ((e.style[t] = i), (i = tr(e, t) || i), (e.style[t] = r)), (u = [r, i]), vc(u), (r = u[0]), (i = u[1]), (h = r.match(mi) || []), (x = i.match(mi) || []), x.length)) {
			for (; (p = mi.exec(i)); ) (y = p[0]), (_ = i.substring(l, p.index)), g ? (g = (g + 1) % 5) : (_.substr(-5) === 'rgba(' || _.substr(-5) === 'hsla(') && (g = 1), y !== (d = h[c++] || '') && ((f = parseFloat(d) || 0), (b = d.substr((f + '').length)), y.charAt(1) === '=' && (y = bi(f, y) + b), (m = parseFloat(y)), (v = y.substr((m + '').length)), (l = mi.lastIndex - v.length), v || ((v = v || St.units[t] || b), l === i.length && ((i += v), (a.e += v))), b !== v && (f = Ir(e, t, d, v) || 0), (a._pt = {_next: a._pt, p: _ || c === 1 ? _ : ',', s: f, c: m - f, m: (g && g < 4) || t === 'zIndex' ? Math.round : 0}))
			a.c = l < i.length ? i.substring(l, i.length) : ''
		} else a.r = t === 'display' && i === 'none' ? Dc : Lc
		return Xl.test(i) && (a.e = 0), (this._pt = a), a
	},
	qa = {top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%'},
	bh = function (e) {
		var t = e.split(' '),
			r = t[0],
			i = t[1] || '50%'
		return (r === 'top' || r === 'bottom' || i === 'left' || i === 'right') && ((e = r), (r = i), (i = e)), (t[0] = qa[r] || r), (t[1] = qa[i] || i), t.join(' ')
	},
	xh = function (e, t) {
		if (t.tween && t.tween._time === t.tween._dur) {
			var r = t.t,
				i = r.style,
				s = t.u,
				o = r._gsap,
				a,
				l,
				c
			if (s === 'all' || s === !0) (i.cssText = ''), (l = 1)
			else for (s = s.split(','), c = s.length; --c > -1; ) (a = s[c]), gr[a] && ((l = 1), (a = a === 'transformOrigin' ? qt : fe)), yn(r, a)
			l && (yn(r, fe), o && (o.svg && r.removeAttribute('transform'), bn(r, 1), (o.uncache = 1), Rc(i)))
		}
	},
	hs = {
		clearProps: function (e, t, r, i, s) {
			if (s.data !== 'isFromStart') {
				var o = (e._pt = new ct(e._pt, t, r, 0, 0, xh))
				return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(r), 1
			}
		},
	},
	vn = [1, 0, 0, 1, 0, 0],
	Nc = {},
	$c = function (e) {
		return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e
	},
	Ya = function (e) {
		var t = tr(e, fe)
		return $c(t) ? vn : t.substr(7).match(Wl).map(ye)
	},
	na = function (e, t) {
		var r = e._gsap || jr(e),
			i = e.style,
			s = Ya(e),
			o,
			a,
			l,
			c
		return r.svg && e.getAttribute('transform') ? ((l = e.transform.baseVal.consolidate().matrix), (s = [l.a, l.b, l.c, l.d, l.e, l.f]), s.join(',') === '1,0,0,1,0,0' ? vn : s) : (s === vn && !e.offsetParent && e !== xi && !r.svg && ((l = i.display), (i.display = 'block'), (o = e.parentNode), (!o || !e.offsetParent) && ((c = 1), (a = e.nextElementSibling), xi.appendChild(e)), (s = Ya(e)), l ? (i.display = l) : yn(e, 'display'), c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : xi.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
	},
	So = function (e, t, r, i, s, o) {
		var a = e._gsap,
			l = s || na(e, !0),
			c = a.xOrigin || 0,
			u = a.yOrigin || 0,
			p = a.xOffset || 0,
			h = a.yOffset || 0,
			f = l[0],
			g = l[1],
			d = l[2],
			y = l[3],
			m = l[4],
			_ = l[5],
			v = t.split(' '),
			b = parseFloat(v[0]) || 0,
			x = parseFloat(v[1]) || 0,
			S,
			w,
			P,
			C
		r ? l !== vn && (w = f * y - g * d) && ((P = b * (y / w) + x * (-d / w) + (d * _ - y * m) / w), (C = b * (-g / w) + x * (f / w) - (f * _ - g * m) / w), (b = P), (x = C)) : ((S = Fc(e)), (b = S.x + (~v[0].indexOf('%') ? (b / 100) * S.width : b)), (x = S.y + (~(v[1] || v[0]).indexOf('%') ? (x / 100) * S.height : x))), i || (i !== !1 && a.smooth) ? ((m = b - c), (_ = x - u), (a.xOffset = p + (m * f + _ * d) - m), (a.yOffset = h + (m * g + _ * y) - _)) : (a.xOffset = a.yOffset = 0), (a.xOrigin = b), (a.yOrigin = x), (a.smooth = !!i), (a.origin = t), (a.originIsAbsolute = !!r), (e.style[qt] = '0px 0px'), o && (Cr(o, a, 'xOrigin', c, b), Cr(o, a, 'yOrigin', u, x), Cr(o, a, 'xOffset', p, a.xOffset), Cr(o, a, 'yOffset', h, a.yOffset)), e.setAttribute('data-svg-origin', b + ' ' + x)
	},
	bn = function (e, t) {
		var r = e._gsap || new Sc(e)
		if ('x' in r && !t && !r.uncache) return r
		var i = e.style,
			s = r.scaleX < 0,
			o = 'px',
			a = 'deg',
			l = getComputedStyle(e),
			c = tr(e, qt) || '0',
			u,
			p,
			h,
			f,
			g,
			d,
			y,
			m,
			_,
			v,
			b,
			x,
			S,
			w,
			P,
			C,
			A,
			k,
			E,
			D,
			R,
			B,
			q,
			N,
			W,
			ee,
			T,
			re,
			Re,
			ft,
			de,
			Ne
		return (
			(u = p = h = d = y = m = _ = v = b = 0),
			(f = g = 1),
			(r.svg = !!(e.getCTM && Bc(e))),
			l.translate && ((l.translate !== 'none' || l.scale !== 'none' || l.rotate !== 'none') && (i[fe] = (l.translate !== 'none' ? 'translate3d(' + (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') ' : '') + (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') + (l.scale !== 'none' ? 'scale(' + l.scale.split(' ').join(',') + ') ' : '') + (l[fe] !== 'none' ? l[fe] : '')), (i.scale = i.rotate = i.translate = 'none')),
			(w = na(e, r.svg)),
			r.svg && (r.uncache ? ((W = e.getBBox()), (c = r.xOrigin - W.x + 'px ' + (r.yOrigin - W.y) + 'px'), (N = '')) : (N = !t && e.getAttribute('data-svg-origin')), So(e, N || c, !!N || r.originIsAbsolute, r.smooth !== !1, w)),
			(x = r.xOrigin || 0),
			(S = r.yOrigin || 0),
			w !== vn &&
				((k = w[0]),
				(E = w[1]),
				(D = w[2]),
				(R = w[3]),
				(u = B = w[4]),
				(p = q = w[5]),
				w.length === 6
					? ((f = Math.sqrt(k * k + E * E)), (g = Math.sqrt(R * R + D * D)), (d = k || E ? fi(E, k) * Yr : 0), (_ = D || R ? fi(D, R) * Yr + d : 0), _ && (g *= Math.abs(Math.cos(_ * Ti))), r.svg && ((u -= x - (x * k + S * D)), (p -= S - (x * E + S * R))))
					: ((Ne = w[6]),
					  (ft = w[7]),
					  (T = w[8]),
					  (re = w[9]),
					  (Re = w[10]),
					  (de = w[11]),
					  (u = w[12]),
					  (p = w[13]),
					  (h = w[14]),
					  (P = fi(Ne, Re)),
					  (y = P * Yr),
					  P && ((C = Math.cos(-P)), (A = Math.sin(-P)), (N = B * C + T * A), (W = q * C + re * A), (ee = Ne * C + Re * A), (T = B * -A + T * C), (re = q * -A + re * C), (Re = Ne * -A + Re * C), (de = ft * -A + de * C), (B = N), (q = W), (Ne = ee)),
					  (P = fi(-D, Re)),
					  (m = P * Yr),
					  P && ((C = Math.cos(-P)), (A = Math.sin(-P)), (N = k * C - T * A), (W = E * C - re * A), (ee = D * C - Re * A), (de = R * A + de * C), (k = N), (E = W), (D = ee)),
					  (P = fi(E, k)),
					  (d = P * Yr),
					  P && ((C = Math.cos(P)), (A = Math.sin(P)), (N = k * C + E * A), (W = B * C + q * A), (E = E * C - k * A), (q = q * C - B * A), (k = N), (B = W)),
					  y && Math.abs(y) + Math.abs(d) > 359.9 && ((y = d = 0), (m = 180 - m)),
					  (f = ye(Math.sqrt(k * k + E * E + D * D))),
					  (g = ye(Math.sqrt(q * q + Ne * Ne))),
					  (P = fi(B, q)),
					  (_ = Math.abs(P) > 2e-4 ? P * Yr : 0),
					  (b = de ? 1 / (de < 0 ? -de : de) : 0)),
				r.svg && ((N = e.getAttribute('transform')), (r.forceCSS = e.setAttribute('transform', '') || !$c(tr(e, fe))), N && e.setAttribute('transform', N))),
			Math.abs(_) > 90 && Math.abs(_) < 270 && (s ? ((f *= -1), (_ += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180)) : ((g *= -1), (_ += _ <= 0 ? 180 : -180))),
			(t = t || r.uncache),
			(r.x = u - ((r.xPercent = u && ((!t && r.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? (e.offsetWidth * r.xPercent) / 100 : 0) + o),
			(r.y = p - ((r.yPercent = p && ((!t && r.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? (e.offsetHeight * r.yPercent) / 100 : 0) + o),
			(r.z = h + o),
			(r.scaleX = ye(f)),
			(r.scaleY = ye(g)),
			(r.rotation = ye(d) + a),
			(r.rotationX = ye(y) + a),
			(r.rotationY = ye(m) + a),
			(r.skewX = _ + a),
			(r.skewY = v + a),
			(r.transformPerspective = b + o),
			(r.zOrigin = parseFloat(c.split(' ')[2]) || 0) && (i[qt] = gs(c)),
			(r.xOffset = r.yOffset = 0),
			(r.force3D = St.force3D),
			(r.renderTransform = r.svg ? Sh : Ic ? Hc : Th),
			(r.uncache = 0),
			r
		)
	},
	gs = function (e) {
		return (e = e.split(' '))[0] + ' ' + e[1]
	},
	Us = function (e, t, r) {
		var i = Ve(t)
		return ye(parseFloat(t) + parseFloat(Ir(e, 'x', r + 'px', i))) + i
	},
	Th = function (e, t) {
		;(t.z = '0px'), (t.rotationY = t.rotationX = '0deg'), (t.force3D = 0), Hc(e, t)
	},
	Vr = '0deg',
	qi = '0px',
	qr = ') ',
	Hc = function (e, t) {
		var r = t || this,
			i = r.xPercent,
			s = r.yPercent,
			o = r.x,
			a = r.y,
			l = r.z,
			c = r.rotation,
			u = r.rotationY,
			p = r.rotationX,
			h = r.skewX,
			f = r.skewY,
			g = r.scaleX,
			d = r.scaleY,
			y = r.transformPerspective,
			m = r.force3D,
			_ = r.target,
			v = r.zOrigin,
			b = '',
			x = (m === 'auto' && e && e !== 1) || m === !0
		if (v && (p !== Vr || u !== Vr)) {
			var S = parseFloat(u) * Ti,
				w = Math.sin(S),
				P = Math.cos(S),
				C
			;(S = parseFloat(p) * Ti), (C = Math.cos(S)), (o = Us(_, o, w * C * -v)), (a = Us(_, a, -Math.sin(S) * -v)), (l = Us(_, l, P * C * -v + v))
		}
		y !== qi && (b += 'perspective(' + y + qr), (i || s) && (b += 'translate(' + i + '%, ' + s + '%) '), (x || o !== qi || a !== qi || l !== qi) && (b += l !== qi || x ? 'translate3d(' + o + ', ' + a + ', ' + l + ') ' : 'translate(' + o + ', ' + a + qr), c !== Vr && (b += 'rotate(' + c + qr), u !== Vr && (b += 'rotateY(' + u + qr), p !== Vr && (b += 'rotateX(' + p + qr), (h !== Vr || f !== Vr) && (b += 'skew(' + h + ', ' + f + qr), (g !== 1 || d !== 1) && (b += 'scale(' + g + ', ' + d + qr), (_.style[fe] = b || 'translate(0, 0)')
	},
	Sh = function (e, t) {
		var r = t || this,
			i = r.xPercent,
			s = r.yPercent,
			o = r.x,
			a = r.y,
			l = r.rotation,
			c = r.skewX,
			u = r.skewY,
			p = r.scaleX,
			h = r.scaleY,
			f = r.target,
			g = r.xOrigin,
			d = r.yOrigin,
			y = r.xOffset,
			m = r.yOffset,
			_ = r.forceCSS,
			v = parseFloat(o),
			b = parseFloat(a),
			x,
			S,
			w,
			P,
			C
		;(l = parseFloat(l)), (c = parseFloat(c)), (u = parseFloat(u)), u && ((u = parseFloat(u)), (c += u), (l += u)), l || c ? ((l *= Ti), (c *= Ti), (x = Math.cos(l) * p), (S = Math.sin(l) * p), (w = Math.sin(l - c) * -h), (P = Math.cos(l - c) * h), c && ((u *= Ti), (C = Math.tan(c - u)), (C = Math.sqrt(1 + C * C)), (w *= C), (P *= C), u && ((C = Math.tan(u)), (C = Math.sqrt(1 + C * C)), (x *= C), (S *= C))), (x = ye(x)), (S = ye(S)), (w = ye(w)), (P = ye(P))) : ((x = p), (P = h), (S = w = 0)), ((v && !~(o + '').indexOf('px')) || (b && !~(a + '').indexOf('px'))) && ((v = Ir(f, 'x', o, 'px')), (b = Ir(f, 'y', a, 'px'))), (g || d || y || m) && ((v = ye(v + g - (g * x + d * w) + y)), (b = ye(b + d - (g * S + d * P) + m))), (i || s) && ((C = f.getBBox()), (v = ye(v + (i / 100) * C.width)), (b = ye(b + (s / 100) * C.height))), (C = 'matrix(' + x + ',' + S + ',' + w + ',' + P + ',' + v + ',' + b + ')'), f.setAttribute('transform', C), _ && (f.style[fe] = C)
	},
	wh = function (e, t, r, i, s) {
		var o = 360,
			a = De(s),
			l = parseFloat(s) * (a && ~s.indexOf('rad') ? Yr : 1),
			c = l - i,
			u = i + c + 'deg',
			p,
			h
		return a && ((p = s.split('_')[1]), p === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)), p === 'cw' && c < 0 ? (c = ((c + o * $a) % o) - ~~(c / o) * o) : p === 'ccw' && c > 0 && (c = ((c - o * $a) % o) - ~~(c / o) * o)), (e._pt = h = new ct(e._pt, t, r, i, c, ah)), (h.e = u), (h.u = 'deg'), e._props.push(r), h
	},
	Ua = function (e, t) {
		for (var r in t) e[r] = t[r]
		return e
	},
	Eh = function (e, t, r) {
		var i = Ua({}, r._gsap),
			s = 'perspective,force3D,transformOrigin,svgOrigin',
			o = r.style,
			a,
			l,
			c,
			u,
			p,
			h,
			f,
			g
		i.svg ? ((c = r.getAttribute('transform')), r.setAttribute('transform', ''), (o[fe] = t), (a = bn(r, 1)), yn(r, fe), r.setAttribute('transform', c)) : ((c = getComputedStyle(r)[fe]), (o[fe] = t), (a = bn(r, 1)), (o[fe] = c))
		for (l in gr) (c = i[l]), (u = a[l]), c !== u && s.indexOf(l) < 0 && ((f = Ve(c)), (g = Ve(u)), (p = f !== g ? Ir(r, l, c, g) : parseFloat(c)), (h = parseFloat(u)), (e._pt = new ct(e._pt, a, l, p, h - p, bo)), (e._pt.u = g || 0), e._props.push(l))
		Ua(a, i)
	}
lt('padding,margin,Width,Radius', function (n, e) {
	var t = 'Top',
		r = 'Right',
		i = 'Bottom',
		s = 'Left',
		o = (e < 3 ? [t, r, i, s] : [t + s, t + r, i + r, i + s]).map(function (a) {
			return e < 2 ? n + a : 'border' + a + n
		})
	hs[e > 1 ? 'border' + n : n] = function (a, l, c, u, p) {
		var h, f
		if (arguments.length < 4)
			return (
				(h = o.map(function (g) {
					return lr(a, g, c)
				})),
				(f = h.join(' ')),
				f.split(h[0]).length === 5 ? h[0] : f
			)
		;(h = (u + '').split(' ')),
			(f = {}),
			o.forEach(function (g, d) {
				return (f[g] = h[d] = h[d] || h[((d - 1) / 2) | 0])
			}),
			a.init(l, f, p)
	}
})
var Gc = {
	name: 'css',
	register: To,
	targetTest: function (e) {
		return e.style && e.nodeType
	},
	init: function (e, t, r, i, s) {
		var o = this._props,
			a = e.style,
			l = r.vars.startAt,
			c,
			u,
			p,
			h,
			f,
			g,
			d,
			y,
			m,
			_,
			v,
			b,
			x,
			S,
			w,
			P
		ta || To(), (this.styles = this.styles || zc(e)), (P = this.styles.props), (this.tween = r)
		for (d in t)
			if (d !== 'autoRound' && ((u = t[d]), !(vt[d] && wc(d, t, r, i, e, s)))) {
				if (((f = typeof u), (g = hs[d]), f === 'function' && ((u = u.call(r, i, e, s)), (f = typeof u)), f === 'string' && ~u.indexOf('random(') && (u = mn(u)), g)) g(this, e, d, u, r) && (w = 1)
				else if (d.substr(0, 2) === '--') (c = (getComputedStyle(e).getPropertyValue(d) + '').trim()), (u += ''), (Ar.lastIndex = 0), Ar.test(c) || ((y = Ve(c)), (m = Ve(u))), m ? y !== m && (c = Ir(e, d, c, m) + m) : y && (u += y), this.add(a, 'setProperty', c, u, i, s, 0, 0, d), o.push(d), P.push(d, 0, a[d])
				else if (f !== 'undefined') {
					if ((l && d in l ? ((c = typeof l[d] == 'function' ? l[d].call(r, i, e, s) : l[d]), De(c) && ~c.indexOf('random(') && (c = mn(c)), Ve(c + '') || (c += St.units[d] || Ve(lr(e, d)) || ''), (c + '').charAt(1) === '=' && (c = lr(e, d))) : (c = lr(e, d)), (h = parseFloat(c)), (_ = f === 'string' && u.charAt(1) === '=' && u.substr(0, 2)), _ && (u = u.substr(2)), (p = parseFloat(u)), d in Zt && (d === 'autoAlpha' && (h === 1 && lr(e, 'visibility') === 'hidden' && p && (h = 0), P.push('visibility', 0, a.visibility), Cr(this, a, 'visibility', h ? 'inherit' : 'hidden', p ? 'inherit' : 'hidden', !p)), d !== 'scale' && d !== 'transform' && ((d = Zt[d]), ~d.indexOf(',') && (d = d.split(',')[0]))), (v = d in gr), v)) {
						if ((this.styles.save(d), b || ((x = e._gsap), (x.renderTransform && !t.parseTransform) || bn(e, t.parseTransform), (S = t.smoothOrigin !== !1 && x.smooth), (b = this._pt = new ct(this._pt, a, fe, 0, 1, x.renderTransform, x, 0, -1)), (b.dep = 1)), d === 'scale')) (this._pt = new ct(this._pt, x, 'scaleY', x.scaleY, (_ ? bi(x.scaleY, _ + p) : p) - x.scaleY || 0, bo)), (this._pt.u = 0), o.push('scaleY', d), (d += 'X')
						else if (d === 'transformOrigin') {
							P.push(qt, 0, a[qt]), (u = bh(u)), x.svg ? So(e, u, 0, S, 0, this) : ((m = parseFloat(u.split(' ')[2]) || 0), m !== x.zOrigin && Cr(this, x, 'zOrigin', x.zOrigin, m), Cr(this, a, d, gs(c), gs(u)))
							continue
						} else if (d === 'svgOrigin') {
							So(e, u, 1, S, 0, this)
							continue
						} else if (d in Nc) {
							wh(this, x, d, h, _ ? bi(h, _ + u) : u)
							continue
						} else if (d === 'smoothOrigin') {
							Cr(this, x, 'smooth', x.smooth, u)
							continue
						} else if (d === 'force3D') {
							x[d] = u
							continue
						} else if (d === 'transform') {
							Eh(this, u, e)
							continue
						}
					} else d in a || (d = Li(d) || d)
					if (v || ((p || p === 0) && (h || h === 0) && !oh.test(u) && d in a)) (y = (c + '').substr((h + '').length)), p || (p = 0), (m = Ve(u) || (d in St.units ? St.units[d] : y)), y !== m && (h = Ir(e, d, c, m)), (this._pt = new ct(this._pt, v ? x : a, d, h, (_ ? bi(h, _ + p) : p) - h, !v && (m === 'px' || d === 'zIndex') && t.autoRound !== !1 ? ch : bo)), (this._pt.u = m || 0), y !== m && m !== '%' && ((this._pt.b = c), (this._pt.r = lh))
					else if (d in a) vh.call(this, e, d, c, _ ? _ + u : u)
					else if (d in e) this.add(e, d, c || e[d], _ ? _ + u : u, i, s)
					else if (d !== 'parseTransform') {
						Uo(d, u)
						continue
					}
					v || (d in a ? P.push(d, 0, a[d]) : P.push(d, 1, c || e[d])), o.push(d)
				}
			}
		w && kc(this)
	},
	render: function (e, t) {
		if (t.tween._time || !ra()) for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next)
		else t.styles.revert()
	},
	get: lr,
	aliases: Zt,
	getSetter: function (e, t, r) {
		var i = Zt[t]
		return i && i.indexOf(',') < 0 && (t = i), t in gr && t !== qt && (e._gsap.x || lr(e, 'x')) ? (r && Na === r ? (t === 'scale' ? ph : dh) : (Na = r || {}) && (t === 'scale' ? hh : gh)) : e.style && !Vo(e.style[t]) ? uh : ~t.indexOf('-') ? fh : Zo(e, t)
	},
	core: {_removeProperty: yn, _getMatrix: na},
}
ut.utils.checkPrefix = Li
ut.core.getStyleSaver = zc
;(function (n, e, t, r) {
	var i = lt(n + ',' + e + ',' + t, function (s) {
		gr[s] = 1
	})
	lt(e, function (s) {
		;(St.units[s] = 'deg'), (Nc[s] = 1)
	}),
		(Zt[i[13]] = n + ',' + e),
		lt(r, function (s) {
			var o = s.split(':')
			Zt[o[1]] = i[o[0]]
		})
})('x,y,z,scale,scaleX,scaleY,xPercent,yPercent', 'rotation,rotationX,rotationY,skewX,skewY', 'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective', '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY')
lt('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (n) {
	St.units[n] = 'px'
})
ut.registerPlugin(Gc)
var I = ut.registerPlugin(Gc) || ut
I.core.Tween
function Wa(n, e) {
	for (var t = 0; t < e.length; t++) {
		var r = e[t]
		;(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
	}
}
function Ch(n, e, t) {
	return e && Wa(n.prototype, e), t && Wa(n, t), n
}
/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Be,
	wo,
	Tt,
	Pr,
	Or,
	Si,
	Vc,
	Ur,
	rn,
	qc,
	ur,
	$t,
	Yc,
	Uc = function () {
		return Be || (typeof window < 'u' && (Be = window.gsap) && Be.registerPlugin && Be)
	},
	Wc = 1,
	yi = [],
	j = [],
	rr = [],
	nn = Date.now,
	Eo = function (e, t) {
		return t
	},
	Ph = function () {
		var e = rn.core,
			t = e.bridge || {},
			r = e._scrollers,
			i = e._proxies
		r.push.apply(r, j),
			i.push.apply(i, rr),
			(j = r),
			(rr = i),
			(Eo = function (o, a) {
				return t[o](a)
			})
	},
	Lr = function (e, t) {
		return ~rr.indexOf(e) && rr[rr.indexOf(e) + 1][t]
	},
	sn = function (e) {
		return !!~qc.indexOf(e)
	},
	nt = function (e, t, r, i, s) {
		return e.addEventListener(t, r, {passive: !i, capture: !!s})
	},
	Qe = function (e, t, r, i) {
		return e.removeEventListener(t, r, !!i)
	},
	An = 'scrollLeft',
	Ln = 'scrollTop',
	Co = function () {
		return (ur && ur.isPressed) || j.cache++
	},
	ms = function (e, t) {
		var r = function i(s) {
			if (s || s === 0) {
				Wc && (Tt.history.scrollRestoration = 'manual')
				var o = ur && ur.isPressed
				;(s = i.v = Math.round(s) || (ur && ur.iOS ? 1 : 0)), e(s), (i.cacheID = j.cache), o && Eo('ss', s)
			} else (t || j.cache !== i.cacheID || Eo('ref')) && ((i.cacheID = j.cache), (i.v = e()))
			return i.v + i.offset
		}
		return (r.offset = 0), e && r
	},
	tt = {
		s: An,
		p: 'left',
		p2: 'Left',
		os: 'right',
		os2: 'Right',
		d: 'width',
		d2: 'Width',
		a: 'x',
		sc: ms(function (n) {
			return arguments.length ? Tt.scrollTo(n, we.sc()) : Tt.pageXOffset || Pr[An] || Or[An] || Si[An] || 0
		}),
	},
	we = {
		s: Ln,
		p: 'top',
		p2: 'Top',
		os: 'bottom',
		os2: 'Bottom',
		d: 'height',
		d2: 'Height',
		a: 'y',
		op: tt,
		sc: ms(function (n) {
			return arguments.length ? Tt.scrollTo(tt.sc(), n) : Tt.pageYOffset || Pr[Ln] || Or[Ln] || Si[Ln] || 0
		}),
	},
	st = function (e) {
		return Be.utils.toArray(e)[0] || (typeof e == 'string' && Be.config().nullTargetWarn !== !1 ? console.warn('Element not found:', e) : null)
	},
	Fr = function (e, t) {
		var r = t.s,
			i = t.sc
		sn(e) && (e = Pr.scrollingElement || Or)
		var s = j.indexOf(e),
			o = i === we.sc ? 1 : 2
		!~s && (s = j.push(e) - 1), j[s + o] || e.addEventListener('scroll', Co)
		var a = j[s + o],
			l =
				a ||
				(j[s + o] =
					ms(Lr(e, r), !0) ||
					(sn(e)
						? i
						: ms(function (c) {
								return arguments.length ? (e[r] = c) : e[r]
						  })))
		return (l.target = e), a || (l.smooth = Be.getProperty(e, 'scrollBehavior') === 'smooth'), l
	},
	Po = function (e, t, r) {
		var i = e,
			s = e,
			o = nn(),
			a = o,
			l = t || 50,
			c = Math.max(500, l * 3),
			u = function (g, d) {
				var y = nn()
				d || y - o > l ? ((s = i), (i = g), (a = o), (o = y)) : r ? (i += g) : (i = s + ((g - s) / (y - a)) * (o - a))
			},
			p = function () {
				;(s = i = r ? 0 : i), (a = o = 0)
			},
			h = function (g) {
				var d = a,
					y = s,
					m = nn()
				return (g || g === 0) && g !== i && u(g), o === a || m - a > c ? 0 : ((i + (r ? y : -y)) / ((r ? m : o) - d)) * 1e3
			}
		return {update: u, reset: p, getVelocity: h}
	},
	Yi = function (e, t) {
		return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
	},
	Xa = function (e) {
		var t = Math.max.apply(Math, e),
			r = Math.min.apply(Math, e)
		return Math.abs(t) >= Math.abs(r) ? t : r
	},
	Xc = function () {
		;(rn = Be.core.globals().ScrollTrigger), rn && rn.core && Ph()
	},
	jc = function (e) {
		return (
			(Be = e || Uc()),
			Be &&
				typeof document < 'u' &&
				document.body &&
				((Tt = window),
				(Pr = document),
				(Or = Pr.documentElement),
				(Si = Pr.body),
				(qc = [Tt, Pr, Or, Si]),
				Be.utils.clamp,
				(Yc = Be.core.context || function () {}),
				(Ur = 'onpointerenter' in Si ? 'pointer' : 'mouse'),
				(Vc = Te.isTouch = Tt.matchMedia && Tt.matchMedia('(hover: none), (pointer: coarse)').matches ? 1 : 'ontouchstart' in Tt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0),
				($t = Te.eventTypes = ('ontouchstart' in Or ? 'touchstart,touchmove,touchcancel,touchend' : 'onpointerdown' in Or ? 'pointerdown,pointermove,pointercancel,pointerup' : 'mousedown,mousemove,mouseup,mouseup').split(',')),
				setTimeout(function () {
					return (Wc = 0)
				}, 500),
				Xc(),
				(wo = 1)),
			wo
		)
	}
tt.op = we
j.cache = 0
var Te = (function () {
	function n(t) {
		this.init(t)
	}
	var e = n.prototype
	return (
		(e.init = function (r) {
			wo || jc(Be) || console.warn('Please gsap.registerPlugin(Observer)'), rn || Xc()
			var i = r.tolerance,
				s = r.dragMinimum,
				o = r.type,
				a = r.target,
				l = r.lineHeight,
				c = r.debounce,
				u = r.preventDefault,
				p = r.onStop,
				h = r.onStopDelay,
				f = r.ignore,
				g = r.wheelSpeed,
				d = r.event,
				y = r.onDragStart,
				m = r.onDragEnd,
				_ = r.onDrag,
				v = r.onPress,
				b = r.onRelease,
				x = r.onRight,
				S = r.onLeft,
				w = r.onUp,
				P = r.onDown,
				C = r.onChangeX,
				A = r.onChangeY,
				k = r.onChange,
				E = r.onToggleX,
				D = r.onToggleY,
				R = r.onHover,
				B = r.onHoverEnd,
				q = r.onMove,
				N = r.ignoreCheck,
				W = r.isNormalizer,
				ee = r.onGestureStart,
				T = r.onGestureEnd,
				re = r.onWheel,
				Re = r.onEnable,
				ft = r.onDisable,
				de = r.onClick,
				Ne = r.scrollSpeed,
				se = r.capture,
				$e = r.allowClicks,
				Ue = r.lockAxis,
				zi = r.onLockAxis
			;(this.target = a = st(a) || Or), (this.vars = r), f && (f = Be.utils.toArray(f)), (i = i || 1e-9), (s = s || 0), (g = g || 1), (Ne = Ne || 1), (o = o || 'wheel,touch,pointer'), (c = c !== !1), l || (l = parseFloat(Tt.getComputedStyle(Si).lineHeight) || 22)
			var dt,
				Ct,
				K,
				Ce,
				pt,
				Yt,
				We,
				O = this,
				nr = 0,
				oe = 0,
				_r = Fr(a, tt),
				yr = Fr(a, we),
				ai = _r(),
				Xe = yr(),
				Ii = ~o.indexOf('touch') && !~o.indexOf('pointer') && $t[0] === 'pointerdown',
				vr = sn(a),
				ge = a.ownerDocument || Pr,
				ht = [0, 0, 0],
				je = [0, 0, 0],
				Fi = 0,
				Ke = function () {
					return (Fi = nn())
				},
				Ut = function ($, L) {
					return ((O.event = $) && f && ~f.indexOf($.target)) || (L && Ii && $.pointerType !== 'touch') || (N && N($, L))
				},
				Bi = function () {
					O._vx.reset(), O._vy.reset(), Ct.pause(), p && p(O)
				},
				br = function () {
					var $ = (O.deltaX = Xa(ht)),
						L = (O.deltaY = Xa(je)),
						F = Math.abs($) >= i,
						H = Math.abs(L) >= i
					k && (F || H) && k(O, $, L, ht, je), F && (x && O.deltaX > 0 && x(O), S && O.deltaX < 0 && S(O), C && C(O), E && O.deltaX < 0 != nr < 0 && E(O), (nr = O.deltaX), (ht[0] = ht[1] = ht[2] = 0)), H && (P && O.deltaY > 0 && P(O), w && O.deltaY < 0 && w(O), A && A(O), D && O.deltaY < 0 != oe < 0 && D(O), (oe = O.deltaY), (je[0] = je[1] = je[2] = 0)), (Ce || K) && (q && q(O), K && (_(O), (K = !1)), (Ce = !1)), Yt && !(Yt = !1) && zi && zi(O), pt && (re(O), (pt = !1)), (dt = 0)
				},
				li = function ($, L, F) {
					;(ht[F] += $), (je[F] += L), O._vx.update($), O._vy.update(L), c ? dt || (dt = requestAnimationFrame(br)) : br()
				},
				Nr = function ($, L) {
					Ue && !We && ((O.axis = We = Math.abs($) > Math.abs(L) ? 'x' : 'y'), (Yt = !0)), We !== 'y' && ((ht[2] += $), O._vx.update($, !0)), We !== 'x' && ((je[2] += L), O._vy.update(L, !0)), c ? dt || (dt = requestAnimationFrame(br)) : br()
				},
				$r = function ($) {
					if (!Ut($, 1)) {
						$ = Yi($, u)
						var L = $.clientX,
							F = $.clientY,
							H = L - O.x,
							V = F - O.y,
							Pe = O.isDragging
						;(O.x = L), (O.y = F), (Pe || Math.abs(O.startX - L) >= s || Math.abs(O.startY - F) >= s) && (_ && (K = !0), Pe || (O.isDragging = !0), Nr(H, V), Pe || (y && y(O)))
					}
				},
				X = (O.onPress = function (G) {
					Ut(G, 1) || (G && G.button) || ((O.axis = We = null), Ct.pause(), (O.isPressed = !0), (G = Yi(G)), (nr = oe = 0), (O.startX = O.x = G.clientX), (O.startY = O.y = G.clientY), O._vx.reset(), O._vy.reset(), nt(W ? a : ge, $t[1], $r, u, !0), (O.deltaX = O.deltaY = 0), v && v(O))
				}),
				sr = (O.onRelease = function (G) {
					if (!Ut(G, 1)) {
						Qe(W ? a : ge, $t[1], $r, !0)
						var $ = !isNaN(O.y - O.startY),
							L = O.isDragging && (Math.abs(O.x - O.startX) > 3 || Math.abs(O.y - O.startY) > 3),
							F = Yi(G)
						!L &&
							$ &&
							(O._vx.reset(),
							O._vy.reset(),
							u &&
								$e &&
								Be.delayedCall(0.08, function () {
									if (nn() - Fi > 300 && !G.defaultPrevented) {
										if (G.target.click) G.target.click()
										else if (ge.createEvent) {
											var H = ge.createEvent('MouseEvents')
											H.initMouseEvent('click', !0, !0, Tt, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), G.target.dispatchEvent(H)
										}
									}
								})),
							(O.isDragging = O.isGesturing = O.isPressed = !1),
							p && !W && Ct.restart(!0),
							m && L && m(O),
							b && b(O, L)
					}
				}),
				Ft = function ($) {
					return $.touches && $.touches.length > 1 && (O.isGesturing = !0) && ee($, O.isDragging)
				},
				Bt = function () {
					return (O.isGesturing = !1) || T(O)
				},
				Pt = function ($) {
					if (!Ut($)) {
						var L = _r(),
							F = yr()
						li((L - ai) * Ne, (F - Xe) * Ne, 1), (ai = L), (Xe = F), p && Ct.restart(!0)
					}
				},
				Nt = function ($) {
					if (!Ut($)) {
						;($ = Yi($, u)), re && (pt = !0)
						var L = ($.deltaMode === 1 ? l : $.deltaMode === 2 ? Tt.innerHeight : 1) * g
						li($.deltaX * L, $.deltaY * L, 0), p && !W && Ct.restart(!0)
					}
				},
				Hr = function ($) {
					if (!Ut($)) {
						var L = $.clientX,
							F = $.clientY,
							H = L - O.x,
							V = F - O.y
						;(O.x = L), (O.y = F), (Ce = !0), (H || V) && Nr(H, V)
					}
				},
				ci = function ($) {
					;(O.event = $), R(O)
				},
				or = function ($) {
					;(O.event = $), B(O)
				},
				Ni = function ($) {
					return Ut($) || (Yi($, u) && de(O))
				}
			;(Ct = O._dc = Be.delayedCall(h || 0.25, Bi).pause()),
				(O.deltaX = O.deltaY = 0),
				(O._vx = Po(0, 50, !0)),
				(O._vy = Po(0, 50, !0)),
				(O.scrollX = _r),
				(O.scrollY = yr),
				(O.isDragging = O.isGesturing = O.isPressed = !1),
				Yc(this),
				(O.enable = function (G) {
					return O.isEnabled || (nt(vr ? ge : a, 'scroll', Co), o.indexOf('scroll') >= 0 && nt(vr ? ge : a, 'scroll', Pt, u, se), o.indexOf('wheel') >= 0 && nt(a, 'wheel', Nt, u, se), ((o.indexOf('touch') >= 0 && Vc) || o.indexOf('pointer') >= 0) && (nt(a, $t[0], X, u, se), nt(ge, $t[2], sr), nt(ge, $t[3], sr), $e && nt(a, 'click', Ke, !1, !0), de && nt(a, 'click', Ni), ee && nt(ge, 'gesturestart', Ft), T && nt(ge, 'gestureend', Bt), R && nt(a, Ur + 'enter', ci), B && nt(a, Ur + 'leave', or), q && nt(a, Ur + 'move', Hr)), (O.isEnabled = !0), G && G.type && X(G), Re && Re(O)), O
				}),
				(O.disable = function () {
					O.isEnabled &&
						(yi.filter(function (G) {
							return G !== O && sn(G.target)
						}).length || Qe(vr ? ge : a, 'scroll', Co),
						O.isPressed && (O._vx.reset(), O._vy.reset(), Qe(W ? a : ge, $t[1], $r, !0)),
						Qe(vr ? ge : a, 'scroll', Pt, se),
						Qe(a, 'wheel', Nt, se),
						Qe(a, $t[0], X, se),
						Qe(ge, $t[2], sr),
						Qe(ge, $t[3], sr),
						Qe(a, 'click', Ke, !0),
						Qe(a, 'click', Ni),
						Qe(ge, 'gesturestart', Ft),
						Qe(ge, 'gestureend', Bt),
						Qe(a, Ur + 'enter', ci),
						Qe(a, Ur + 'leave', or),
						Qe(a, Ur + 'move', Hr),
						(O.isEnabled = O.isPressed = O.isDragging = !1),
						ft && ft(O))
				}),
				(O.kill = O.revert =
					function () {
						O.disable()
						var G = yi.indexOf(O)
						G >= 0 && yi.splice(G, 1), ur === O && (ur = 0)
					}),
				yi.push(O),
				W && sn(a) && (ur = O),
				O.enable(d)
		}),
		Ch(n, [
			{
				key: 'velocityX',
				get: function () {
					return this._vx.getVelocity()
				},
			},
			{
				key: 'velocityY',
				get: function () {
					return this._vy.getVelocity()
				},
			},
		]),
		n
	)
})()
Te.version = '3.11.5'
Te.create = function (n) {
	return new Te(n)
}
Te.register = jc
Te.getAll = function () {
	return yi.slice()
}
Te.getById = function (n) {
	return yi.filter(function (e) {
		return e.vars.id === n
	})[0]
}
Uc() && Be.registerPlugin(Te)
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var z,
	hi,
	J,
	ae,
	Gt,
	pe,
	Kc,
	_s,
	ys,
	vi,
	Jn,
	Dn,
	Ge,
	Ps,
	Oo,
	Ze,
	ja,
	Ka,
	gi,
	Jc,
	Ws,
	Qc,
	mt,
	Zc,
	eu,
	tu,
	Tr,
	Mo,
	sa,
	Xs,
	Rn = 1,
	et = Date.now,
	js = et(),
	zt = 0,
	ji = 0,
	Oh = function n() {
		return ji && requestAnimationFrame(n)
	},
	Ja = function () {
		return (Ps = 1)
	},
	Qa = function () {
		return (Ps = 0)
	},
	jt = function (e) {
		return e
	},
	Ki = function (e) {
		return Math.round(e * 1e5) / 1e5 || 0
	},
	ru = function () {
		return typeof window < 'u'
	},
	iu = function () {
		return z || (ru() && (z = window.gsap) && z.registerPlugin && z)
	},
	ri = function (e) {
		return !!~Kc.indexOf(e)
	},
	nu = function (e) {
		return (
			Lr(e, 'getBoundingClientRect') ||
			(ri(e)
				? function () {
						return (is.width = J.innerWidth), (is.height = J.innerHeight), is
				  }
				: function () {
						return cr(e)
				  })
		)
	},
	Mh = function (e, t, r) {
		var i = r.d,
			s = r.d2,
			o = r.a
		return (o = Lr(e, 'getBoundingClientRect'))
			? function () {
					return o()[i]
			  }
			: function () {
					return (t ? J['inner' + s] : e['client' + s]) || 0
			  }
	},
	kh = function (e, t) {
		return !t || ~rr.indexOf(e)
			? nu(e)
			: function () {
					return is
			  }
	},
	Mr = function (e, t) {
		var r = t.s,
			i = t.d2,
			s = t.d,
			o = t.a
		return Math.max(0, (r = 'scroll' + i) && (o = Lr(e, r)) ? o() - nu(e)()[s] : ri(e) ? (Gt[r] || pe[r]) - (J['inner' + i] || Gt['client' + i] || pe['client' + i]) : e[r] - e['offset' + i])
	},
	zn = function (e, t) {
		for (var r = 0; r < gi.length; r += 3) (!t || ~t.indexOf(gi[r + 1])) && e(gi[r], gi[r + 1], gi[r + 2])
	},
	Ht = function (e) {
		return typeof e == 'string'
	},
	rt = function (e) {
		return typeof e == 'function'
	},
	Ji = function (e) {
		return typeof e == 'number'
	},
	Qn = function (e) {
		return typeof e == 'object'
	},
	Ui = function (e, t, r) {
		return e && e.progress(t ? 0 : 1) && r && e.pause()
	},
	Ks = function (e, t) {
		if (e.enabled) {
			var r = t(e)
			r && r.totalTime && (e.callbackAnimation = r)
		}
	},
	di = Math.abs,
	su = 'left',
	ou = 'top',
	oa = 'right',
	aa = 'bottom',
	Qr = 'width',
	Zr = 'height',
	on = 'Right',
	an = 'Left',
	ln = 'Top',
	cn = 'Bottom',
	_e = 'padding',
	At = 'margin',
	Di = 'Width',
	la = 'Height',
	Ie = 'px',
	Vt = function (e) {
		return J.getComputedStyle(e)
	},
	Ah = function (e) {
		var t = Vt(e).position
		e.style.position = t === 'absolute' || t === 'fixed' ? t : 'relative'
	},
	Za = function (e, t) {
		for (var r in t) r in e || (e[r] = t[r])
		return e
	},
	cr = function (e, t) {
		var r = t && Vt(e)[Oo] !== 'matrix(1, 0, 0, 1, 0, 0)' && z.to(e, {x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0}).progress(1),
			i = e.getBoundingClientRect()
		return r && r.progress(0).kill(), i
	},
	ko = function (e, t) {
		var r = t.d2
		return e['offset' + r] || e['client' + r] || 0
	},
	au = function (e) {
		var t = [],
			r = e.labels,
			i = e.duration(),
			s
		for (s in r) t.push(r[s] / i)
		return t
	},
	Lh = function (e) {
		return function (t) {
			return z.utils.snap(au(e), t)
		}
	},
	ca = function (e) {
		var t = z.utils.snap(e),
			r =
				Array.isArray(e) &&
				e.slice(0).sort(function (i, s) {
					return i - s
				})
		return r
			? function (i, s, o) {
					o === void 0 && (o = 0.001)
					var a
					if (!s) return t(i)
					if (s > 0) {
						for (i -= o, a = 0; a < r.length; a++) if (r[a] >= i) return r[a]
						return r[a - 1]
					} else for (a = r.length, i += o; a--; ) if (r[a] <= i) return r[a]
					return r[0]
			  }
			: function (i, s, o) {
					o === void 0 && (o = 0.001)
					var a = t(i)
					return !s || Math.abs(a - i) < o || a - i < 0 == s < 0 ? a : t(s < 0 ? i - e : i + e)
			  }
	},
	Dh = function (e) {
		return function (t, r) {
			return ca(au(e))(t, r.direction)
		}
	},
	In = function (e, t, r, i) {
		return r.split(',').forEach(function (s) {
			return e(t, s, i)
		})
	},
	Le = function (e, t, r, i, s) {
		return e.addEventListener(t, r, {passive: !i, capture: !!s})
	},
	Ae = function (e, t, r, i) {
		return e.removeEventListener(t, r, !!i)
	},
	Fn = function (e, t, r) {
		;(r = r && r.wheelHandler), r && (e(t, 'wheel', r), e(t, 'touchmove', r))
	},
	el = {startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal'},
	Bn = {toggleActions: 'play', anticipatePin: 0},
	vs = {top: 0, left: 0, center: 0.5, bottom: 1, right: 1},
	Zn = function (e, t) {
		if (Ht(e)) {
			var r = e.indexOf('='),
				i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0
			~r && (e.indexOf('%') > r && (i *= t / 100), (e = e.substr(0, r - 1))), (e = i + (e in vs ? vs[e] * t : ~e.indexOf('%') ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0))
		}
		return e
	},
	Nn = function (e, t, r, i, s, o, a, l) {
		var c = s.startColor,
			u = s.endColor,
			p = s.fontSize,
			h = s.indent,
			f = s.fontWeight,
			g = ae.createElement('div'),
			d = ri(r) || Lr(r, 'pinType') === 'fixed',
			y = e.indexOf('scroller') !== -1,
			m = d ? pe : r,
			_ = e.indexOf('start') !== -1,
			v = _ ? c : u,
			b = 'border-color:' + v + ';font-size:' + p + ';color:' + v + ';font-weight:' + f + ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
		return (b += 'position:' + ((y || l) && d ? 'fixed;' : 'absolute;')), (y || l || !d) && (b += (i === we ? oa : aa) + ':' + (o + parseFloat(h)) + 'px;'), a && (b += 'box-sizing:border-box;text-align:left;width:' + a.offsetWidth + 'px;'), (g._isStart = _), g.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')), (g.style.cssText = b), (g.innerText = t || t === 0 ? e + '-' + t : e), m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g), (g._offset = g['offset' + i.op.d2]), es(g, 0, i, _), g
	},
	es = function (e, t, r, i) {
		var s = {display: 'block'},
			o = r[i ? 'os2' : 'p2'],
			a = r[i ? 'p2' : 'os2']
		;(e._isFlipped = i), (s[r.a + 'Percent'] = i ? -100 : 0), (s[r.a] = i ? '1px' : 0), (s['border' + o + Di] = 1), (s['border' + a + Di] = 0), (s[r.p] = t + 'px'), z.set(e, s)
	},
	Y = [],
	Ao = {},
	xn,
	tl = function () {
		return et() - zt > 34 && (xn || (xn = requestAnimationFrame(dr)))
	},
	pi = function () {
		;(!mt || !mt.isPressed || mt.startX > pe.clientWidth) && (j.cache++, mt ? xn || (xn = requestAnimationFrame(dr)) : dr(), zt || ni('scrollStart'), (zt = et()))
	},
	Js = function () {
		;(tu = J.innerWidth), (eu = J.innerHeight)
	},
	Qi = function () {
		j.cache++, !Ge && !Qc && !ae.fullscreenElement && !ae.webkitFullscreenElement && (!Zc || tu !== J.innerWidth || Math.abs(J.innerHeight - eu) > J.innerHeight * 0.25) && _s.restart(!0)
	},
	ii = {},
	Rh = [],
	lu = function n() {
		return Ae(U, 'scrollEnd', n) || Xr(!0)
	},
	ni = function (e) {
		return (
			(ii[e] &&
				ii[e].map(function (t) {
					return t()
				})) ||
			Rh
		)
	},
	_t = [],
	cu = function (e) {
		for (var t = 0; t < _t.length; t += 5) (!e || (_t[t + 4] && _t[t + 4].query === e)) && ((_t[t].style.cssText = _t[t + 1]), _t[t].getBBox && _t[t].setAttribute('transform', _t[t + 2] || ''), (_t[t + 3].uncache = 1))
	},
	ua = function (e, t) {
		var r
		for (Ze = 0; Ze < Y.length; Ze++) (r = Y[Ze]), r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0))
		t && cu(t), t || ni('revert')
	},
	uu = function (e, t) {
		j.cache++,
			(t || !bt) &&
				j.forEach(function (r) {
					return rt(r) && r.cacheID++ && (r.rec = 0)
				}),
			Ht(e) && (J.history.scrollRestoration = sa = e)
	},
	bt,
	ei = 0,
	rl,
	zh = function () {
		if (rl !== ei) {
			var e = (rl = ei)
			requestAnimationFrame(function () {
				return e === ei && Xr(!0)
			})
		}
	},
	Xr = function (e, t) {
		if (zt && !e) {
			Le(U, 'scrollEnd', lu)
			return
		}
		;(bt = U.isRefreshing = !0),
			j.forEach(function (i) {
				return rt(i) && i.cacheID++ && (i.rec = i())
			})
		var r = ni('refreshInit')
		Jc && U.sort(),
			t || ua(),
			j.forEach(function (i) {
				rt(i) && (i.smooth && (i.target.style.scrollBehavior = 'auto'), i(0))
			}),
			Y.slice(0).forEach(function (i) {
				return i.refresh()
			}),
			Y.forEach(function (i, s) {
				if (i._subPinOffset && i.pin) {
					var o = i.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
						a = i.pin[o]
					i.revert(!0, 1), i.adjustPinSpacing(i.pin[o] - a), i.refresh()
				}
			}),
			Y.forEach(function (i) {
				return i.vars.end === 'max' && i.setPositions(i.start, Math.max(i.start + 1, Mr(i.scroller, i._dir)))
			}),
			r.forEach(function (i) {
				return i && i.render && i.render(-1)
			}),
			j.forEach(function (i) {
				rt(i) &&
					(i.smooth &&
						requestAnimationFrame(function () {
							return (i.target.style.scrollBehavior = 'smooth')
						}),
					i.rec && i(i.rec))
			}),
			uu(sa, 1),
			_s.pause(),
			ei++,
			(bt = 2),
			dr(2),
			Y.forEach(function (i) {
				return rt(i.vars.onRefresh) && i.vars.onRefresh(i)
			}),
			(bt = U.isRefreshing = !1),
			ni('refresh')
	},
	Lo = 0,
	ts = 1,
	un,
	dr = function (e) {
		if (!bt || e === 2) {
			;(U.isUpdating = !0), un && un.update(0)
			var t = Y.length,
				r = et(),
				i = r - js >= 50,
				s = t && Y[0].scroll()
			if (((ts = Lo > s ? -1 : 1), bt || (Lo = s), i && (zt && !Ps && r - zt > 200 && ((zt = 0), ni('scrollEnd')), (Jn = js), (js = r)), ts < 0)) {
				for (Ze = t; Ze-- > 0; ) Y[Ze] && Y[Ze].update(0, i)
				ts = 1
			} else for (Ze = 0; Ze < t; Ze++) Y[Ze] && Y[Ze].update(0, i)
			U.isUpdating = !1
		}
		xn = 0
	},
	Do = [su, ou, aa, oa, At + cn, At + on, At + ln, At + an, 'display', 'flexShrink', 'float', 'zIndex', 'gridColumnStart', 'gridColumnEnd', 'gridRowStart', 'gridRowEnd', 'gridArea', 'justifySelf', 'alignSelf', 'placeSelf', 'order'],
	rs = Do.concat([Qr, Zr, 'boxSizing', 'max' + Di, 'max' + la, 'position', At, _e, _e + ln, _e + on, _e + cn, _e + an]),
	Ih = function (e, t, r) {
		wi(r)
		var i = e._gsap
		if (i.spacerIsNative) wi(i.spacerState)
		else if (e._gsap.swappedIn) {
			var s = t.parentNode
			s && (s.insertBefore(e, t), s.removeChild(t))
		}
		e._gsap.swappedIn = !1
	},
	Qs = function (e, t, r, i) {
		if (!e._gsap.swappedIn) {
			for (var s = Do.length, o = t.style, a = e.style, l; s--; ) (l = Do[s]), (o[l] = r[l])
			;(o.position = r.position === 'absolute' ? 'absolute' : 'relative'), r.display === 'inline' && (o.display = 'inline-block'), (a[aa] = a[oa] = 'auto'), (o.flexBasis = r.flexBasis || 'auto'), (o.overflow = 'visible'), (o.boxSizing = 'border-box'), (o[Qr] = ko(e, tt) + Ie), (o[Zr] = ko(e, we) + Ie), (o[_e] = a[At] = a[ou] = a[su] = '0'), wi(i), (a[Qr] = a['max' + Di] = r[Qr]), (a[Zr] = a['max' + la] = r[Zr]), (a[_e] = r[_e]), e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), (e._gsap.swappedIn = !0)
		}
	},
	Fh = /([A-Z])/g,
	wi = function (e) {
		if (e) {
			var t = e.t.style,
				r = e.length,
				i = 0,
				s,
				o
			for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; i < r; i += 2) (o = e[i + 1]), (s = e[i]), o ? (t[s] = o) : t[s] && t.removeProperty(s.replace(Fh, '-$1').toLowerCase())
		}
	},
	$n = function (e) {
		for (var t = rs.length, r = e.style, i = [], s = 0; s < t; s++) i.push(rs[s], r[rs[s]])
		return (i.t = e), i
	},
	Bh = function (e, t, r) {
		for (var i = [], s = e.length, o = r ? 8 : 0, a; o < s; o += 2) (a = e[o]), i.push(a, a in t ? t[a] : e[o + 1])
		return (i.t = e.t), i
	},
	is = {left: 0, top: 0},
	il = function (e, t, r, i, s, o, a, l, c, u, p, h, f) {
		rt(e) && (e = e(l)), Ht(e) && e.substr(0, 3) === 'max' && (e = h + (e.charAt(4) === '=' ? Zn('0' + e.substr(3), r) : 0))
		var g = f ? f.time() : 0,
			d,
			y,
			m
		if ((f && f.seek(0), Ji(e))) f && (e = z.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, e)), a && es(a, r, i, !0)
		else {
			rt(t) && (t = t(l))
			var _ = (e || '0').split(' '),
				v,
				b,
				x,
				S
			;(m = st(t) || pe), (v = cr(m) || {}), (!v || (!v.left && !v.top)) && Vt(m).display === 'none' && ((S = m.style.display), (m.style.display = 'block'), (v = cr(m)), S ? (m.style.display = S) : m.style.removeProperty('display')), (b = Zn(_[0], v[i.d])), (x = Zn(_[1] || '0', r)), (e = v[i.p] - c[i.p] - u + b + s - x), a && es(a, x, i, r - x < 20 || (a._isStart && x > 20)), (r -= r - x)
		}
		if (o) {
			var w = e + r,
				P = o._isStart
			;(d = 'scroll' + i.d2), es(o, w, i, (P && w > 20) || (!P && (p ? Math.max(pe[d], Gt[d]) : o.parentNode[d]) <= w + 1)), p && ((c = cr(a)), p && (o.style[i.op.p] = c[i.op.p] - i.op.m - o._offset + Ie))
		}
		return f && m && ((d = cr(m)), f.seek(h), (y = cr(m)), (f._caScrollDist = d[i.p] - y[i.p]), (e = (e / f._caScrollDist) * h)), f && f.seek(g), f ? e : Math.round(e)
	},
	Nh = /(webkit|moz|length|cssText|inset)/i,
	nl = function (e, t, r, i) {
		if (e.parentNode !== t) {
			var s = e.style,
				o,
				a
			if (t === pe) {
				;(e._stOrig = s.cssText), (a = Vt(e))
				for (o in a) !+o && !Nh.test(o) && a[o] && typeof s[o] == 'string' && o !== '0' && (s[o] = a[o])
				;(s.top = r), (s.left = i)
			} else s.cssText = e._stOrig
			;(z.core.getCache(e).uncache = 1), t.appendChild(e)
		}
	},
	fu = function (e, t, r) {
		var i = t,
			s = i
		return function (o) {
			var a = Math.round(e())
			return a !== i && a !== s && Math.abs(a - i) > 3 && Math.abs(a - s) > 3 && ((o = a), r && r()), (s = i), (i = o), o
		}
	},
	sl = function (e, t) {
		var r = Fr(e, t),
			i = '_scroll' + t.p2,
			s = function o(a, l, c, u, p) {
				var h = o.tween,
					f = l.onComplete,
					g = {}
				c = c || r()
				var d = fu(r, c, function () {
					h.kill(), (o.tween = 0)
				})
				return (
					(p = (u && p) || 0),
					(u = u || a - c),
					h && h.kill(),
					(l[i] = a),
					(l.modifiers = g),
					(g[i] = function () {
						return d(c + u * h.ratio + p * h.ratio * h.ratio)
					}),
					(l.onUpdate = function () {
						j.cache++, dr()
					}),
					(l.onComplete = function () {
						;(o.tween = 0), f && f.call(h)
					}),
					(h = o.tween = z.to(e, l)),
					h
				)
			}
		return (
			(e[i] = r),
			(r.wheelHandler = function () {
				return s.tween && s.tween.kill() && (s.tween = 0)
			}),
			Le(e, 'wheel', r.wheelHandler),
			U.isTouch && Le(e, 'touchmove', r.wheelHandler),
			s
		)
	},
	U = (function () {
		function n(t, r) {
			hi || n.register(z) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), this.init(t, r)
		}
		var e = n.prototype
		return (
			(e.init = function (r, i) {
				if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !ji)) {
					this.update = this.refresh = this.kill = jt
					return
				}
				r = Za(Ht(r) || Ji(r) || r.nodeType ? {trigger: r} : r, Bn)
				var s = r,
					o = s.onUpdate,
					a = s.toggleClass,
					l = s.id,
					c = s.onToggle,
					u = s.onRefresh,
					p = s.scrub,
					h = s.trigger,
					f = s.pin,
					g = s.pinSpacing,
					d = s.invalidateOnRefresh,
					y = s.anticipatePin,
					m = s.onScrubComplete,
					_ = s.onSnapComplete,
					v = s.once,
					b = s.snap,
					x = s.pinReparent,
					S = s.pinSpacer,
					w = s.containerAnimation,
					P = s.fastScrollEnd,
					C = s.preventOverlaps,
					A = r.horizontal || (r.containerAnimation && r.horizontal !== !1) ? tt : we,
					k = !p && p !== 0,
					E = st(r.scroller || J),
					D = z.core.getCache(E),
					R = ri(E),
					B = ('pinType' in r ? r.pinType : Lr(E, 'pinType') || (R && 'fixed')) === 'fixed',
					q = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
					N = k && r.toggleActions.split(' '),
					W = 'markers' in r ? r.markers : Bn.markers,
					ee = R ? 0 : parseFloat(Vt(E)['border' + A.p2 + Di]) || 0,
					T = this,
					re =
						r.onRefreshInit &&
						function () {
							return r.onRefreshInit(T)
						},
					Re = Mh(E, R, A),
					ft = kh(E, R),
					de = 0,
					Ne = 0,
					se = Fr(E, A),
					$e,
					Ue,
					zi,
					dt,
					Ct,
					K,
					Ce,
					pt,
					Yt,
					We,
					O,
					nr,
					oe,
					_r,
					yr,
					ai,
					Xe,
					Ii,
					vr,
					ge,
					ht,
					je,
					Fi,
					Ke,
					Ut,
					Bi,
					br,
					li,
					Nr,
					$r,
					X,
					sr,
					Ft,
					Bt,
					Pt,
					Nt,
					Hr,
					ci,
					or
				if (
					(Mo(T),
					(T._dir = A),
					(y *= 45),
					(T.scroller = E),
					(T.scroll = w ? w.time.bind(w) : se),
					(dt = se()),
					(T.vars = r),
					(i = i || r.animation),
					'refreshPriority' in r && ((Jc = 1), r.refreshPriority === -9999 && (un = T)),
					(D.tweenScroll = D.tweenScroll || {top: sl(E, we), left: sl(E, tt)}),
					(T.tweenTo = $e = D.tweenScroll[A.p]),
					(T.scrubDuration = function (L) {
						;(sr = Ji(L) && L),
							sr
								? X
									? X.duration(L)
									: (X = z.to(i, {
											ease: 'expo',
											totalProgress: '+=0.001',
											duration: sr,
											paused: !0,
											onComplete: function () {
												return m && m(T)
											},
									  }))
								: (X && X.progress(1).kill(), (X = 0))
					}),
					i && ((i.vars.lazy = !1), i._initted || (i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0)), (T.animation = i.pause()), (i.scrollTrigger = T), T.scrubDuration(p), X && X.resetTo && X.resetTo('totalProgress', 0), (Nr = 0), l || (l = i.vars.id)),
					Y.push(T),
					b &&
						((!Qn(b) || b.push) && (b = {snapTo: b}),
						'scrollBehavior' in pe.style && z.set(R ? [pe, Gt] : E, {scrollBehavior: 'auto'}),
						j.forEach(function (L) {
							return rt(L) && L.target === (R ? ae.scrollingElement || Gt : E) && (L.smooth = !1)
						}),
						(zi = rt(b.snapTo)
							? b.snapTo
							: b.snapTo === 'labels'
							? Lh(i)
							: b.snapTo === 'labelsDirectional'
							? Dh(i)
							: b.directional !== !1
							? function (L, F) {
									return ca(b.snapTo)(L, et() - Ne < 500 ? 0 : F.direction)
							  }
							: z.utils.snap(b.snapTo)),
						(Ft = b.duration || {min: 0.1, max: 2}),
						(Ft = Qn(Ft) ? vi(Ft.min, Ft.max) : vi(Ft, Ft)),
						(Bt = z
							.delayedCall(b.delay || sr / 2 || 0.1, function () {
								var L = se(),
									F = et() - Ne < 500,
									H = $e.tween
								if ((F || Math.abs(T.getVelocity()) < 10) && !H && !Ps && de !== L) {
									var V = (L - K) / oe,
										Pe = i && !k ? i.totalProgress() : V,
										te = F ? 0 : ((Pe - $r) / (et() - Jn)) * 1e3 || 0,
										le = z.utils.clamp(-V, 1 - V, (di(te / 2) * te) / 0.185),
										ze = V + (b.inertia === !1 ? 0 : le),
										Oe = vi(0, 1, zi(ze, T)),
										ve = Math.round(K + Oe * oe),
										ce = b,
										gt = ce.onStart,
										Je = ce.onInterrupt,
										Me = ce.onComplete
									if (L <= Ce && L >= K && ve !== L) {
										if (H && !H._initted && H.data <= di(ve - L)) return
										b.inertia === !1 && (le = Oe - V),
											$e(
												ve,
												{
													duration: Ft(di((Math.max(di(ze - Pe), di(Oe - Pe)) * 0.185) / te / 0.05 || 0)),
													ease: b.ease || 'power3',
													data: di(ve - L),
													onInterrupt: function () {
														return Bt.restart(!0) && Je && Je(T)
													},
													onComplete: function () {
														T.update(), (de = se()), (Nr = $r = i && !k ? i.totalProgress() : T.progress), _ && _(T), Me && Me(T)
													},
												},
												L,
												le * oe,
												ve - L - le * oe
											),
											gt && gt(T, $e.tween)
									}
								} else T.isActive && de !== L && Bt.restart(!0)
							})
							.pause())),
					l && (Ao[l] = T),
					(h = T.trigger = st(h || f)),
					(or = h && h._gsap && h._gsap.stRevert),
					or && (or = or(T)),
					(f = f === !0 ? h : st(f)),
					Ht(a) && (a = {targets: h, className: a}),
					f && (g === !1 || g === At || (g = !g && f.parentNode && f.parentNode.style && Vt(f.parentNode).display === 'flex' ? !1 : _e), (T.pin = f), (Ue = z.core.getCache(f)), Ue.spacer ? (_r = Ue.pinState) : (S && ((S = st(S)), S && !S.nodeType && (S = S.current || S.nativeElement), (Ue.spacerIsNative = !!S), S && (Ue.spacerState = $n(S))), (Ue.spacer = Xe = S || ae.createElement('div')), Xe.classList.add('pin-spacer'), l && Xe.classList.add('pin-spacer-' + l), (Ue.pinState = _r = $n(f))), r.force3D !== !1 && z.set(f, {force3D: !0}), (T.spacer = Xe = Ue.spacer), (li = Vt(f)), (Fi = li[g + A.os2]), (vr = z.getProperty(f)), (ge = z.quickSetter(f, A.a, Ie)), Qs(f, Xe, li), (ai = $n(f))),
					W)
				) {
					;(nr = Qn(W) ? Za(W, el) : el), (We = Nn('scroller-start', l, E, A, nr, 0)), (O = Nn('scroller-end', l, E, A, nr, 0, We)), (Ii = We['offset' + A.op.d2])
					var Ni = st(Lr(E, 'content') || E)
					;(pt = this.markerStart = Nn('start', l, Ni, A, nr, Ii, 0, w)), (Yt = this.markerEnd = Nn('end', l, Ni, A, nr, Ii, 0, w)), w && (ci = z.quickSetter([pt, Yt], A.a, Ie)), !B && !(rr.length && Lr(E, 'fixedMarkers') === !0) && (Ah(R ? pe : E), z.set([We, O], {force3D: !0}), (Ut = z.quickSetter(We, A.a, Ie)), (br = z.quickSetter(O, A.a, Ie)))
				}
				if (w) {
					var G = w.vars.onUpdate,
						$ = w.vars.onUpdateParams
					w.eventCallback('onUpdate', function () {
						T.update(0, 0, 1), G && G.apply(w, $ || [])
					})
				}
				;(T.previous = function () {
					return Y[Y.indexOf(T) - 1]
				}),
					(T.next = function () {
						return Y[Y.indexOf(T) + 1]
					}),
					(T.revert = function (L, F) {
						if (!F) return T.kill(!0)
						var H = L !== !1 || !T.enabled,
							V = Ge
						H !== T.isReverted &&
							(H && ((Nt = Math.max(se(), T.scroll.rec || 0)), (Pt = T.progress), (Hr = i && i.progress())),
							pt &&
								[pt, Yt, We, O].forEach(function (Pe) {
									return (Pe.style.display = H ? 'none' : 'block')
								}),
							H && ((Ge = T), T.update(H)),
							f && (!x || !T.isActive) && (H ? Ih(f, Xe, _r) : Qs(f, Xe, Vt(f), Ke)),
							H || T.update(H),
							(Ge = V),
							(T.isReverted = H))
					}),
					(T.refresh = function (L, F) {
						if (!((Ge || !T.enabled) && !F)) {
							if (f && L && zt) {
								Le(n, 'scrollEnd', lu)
								return
							}
							!bt && re && re(T), (Ge = T), (Ne = et()), $e.tween && ($e.tween.kill(), ($e.tween = 0)), X && X.pause(), d && i && i.revert({kill: !1}).invalidate(), T.isReverted || T.revert(!0, !0), (T._subPinOffset = !1)
							for (var H = Re(), V = ft(), Pe = w ? w.duration() : Mr(E, A), te = oe <= 0.01, le = 0, ze = 0, Oe = r.end, ve = r.endTrigger || h, ce = r.start || (r.start === 0 || !h ? 0 : f ? '0 0' : '0 100%'), gt = (T.pinnedContainer = r.pinnedContainer && st(r.pinnedContainer)), Je = (h && Math.max(0, Y.indexOf(T))) || 0, Me = Je, me, He, ui, Gr, be, ke, Wt, Os, fa, $i, Xt; Me--; ) (ke = Y[Me]), ke.end || ke.refresh(0, 1) || (Ge = T), (Wt = ke.pin), Wt && (Wt === h || Wt === f || Wt === gt) && !ke.isReverted && ($i || ($i = []), $i.unshift(ke), ke.revert(!0, !0)), ke !== Y[Me] && (Je--, Me--)
							for (rt(ce) && (ce = ce(T)), K = il(ce, h, H, A, se(), pt, We, T, V, ee, B, Pe, w) || (f ? -0.001 : 0), rt(Oe) && (Oe = Oe(T)), Ht(Oe) && !Oe.indexOf('+=') && (~Oe.indexOf(' ') ? (Oe = (Ht(ce) ? ce.split(' ')[0] : '') + Oe) : ((le = Zn(Oe.substr(2), H)), (Oe = Ht(ce) ? ce : (w ? z.utils.mapRange(0, w.duration(), w.scrollTrigger.start, w.scrollTrigger.end, K) : K) + le), (ve = h))), Ce = Math.max(K, il(Oe || (ve ? '100% 0' : Pe), ve, H, A, se() + le, Yt, O, T, V, ee, B, Pe, w)) || -0.001, oe = Ce - K || ((K -= 0.01) && 0.001), le = 0, Me = Je; Me--; ) (ke = Y[Me]), (Wt = ke.pin), Wt && ke.start - ke._pinPush <= K && !w && ke.end > 0 && ((me = ke.end - ke.start), ((Wt === h && ke.start - ke._pinPush < K) || Wt === gt) && !Ji(ce) && (le += me * (1 - ke.progress)), Wt === f && (ze += me))
							if (((K += le), (Ce += le), te && (Pt = z.utils.clamp(0, 1, z.utils.normalize(K, Ce, Nt))), (T._pinPush = ze), pt && le && ((me = {}), (me[A.a] = '+=' + le), gt && (me[A.p] = '-=' + se()), z.set([pt, Yt], me)), f))
								(me = Vt(f)),
									(Gr = A === we),
									(ui = se()),
									(ht = parseFloat(vr(A.a)) + ze),
									!Pe && Ce > 1 && ((Xt = (R ? ae.scrollingElement || Gt : E).style), (Xt = {style: Xt, value: Xt['overflow' + A.a.toUpperCase()]}), (Xt.style['overflow' + A.a.toUpperCase()] = 'scroll')),
									Qs(f, Xe, me),
									(ai = $n(f)),
									(He = cr(f, !0)),
									(Os = B && Fr(E, Gr ? tt : we)()),
									g &&
										((Ke = [g + A.os2, oe + ze + Ie]),
										(Ke.t = Xe),
										(Me = g === _e ? ko(f, A) + oe + ze : 0),
										Me && Ke.push(A.d, Me + Ie),
										wi(Ke),
										gt &&
											Y.forEach(function (Hi) {
												Hi.pin === gt && Hi.vars.pinSpacing !== !1 && (Hi._subPinOffset = !0)
											}),
										B && se(Nt)),
									B && ((be = {top: He.top + (Gr ? ui - K : Os) + Ie, left: He.left + (Gr ? Os : ui - K) + Ie, boxSizing: 'border-box', position: 'fixed'}), (be[Qr] = be['max' + Di] = Math.ceil(He.width) + Ie), (be[Zr] = be['max' + la] = Math.ceil(He.height) + Ie), (be[At] = be[At + ln] = be[At + on] = be[At + cn] = be[At + an] = '0'), (be[_e] = me[_e]), (be[_e + ln] = me[_e + ln]), (be[_e + on] = me[_e + on]), (be[_e + cn] = me[_e + cn]), (be[_e + an] = me[_e + an]), (yr = Bh(_r, be, x)), bt && se(0)),
									i ? ((fa = i._initted), Ws(1), i.render(i.duration(), !0, !0), (je = vr(A.a) - ht + oe + ze), (Bi = Math.abs(oe - je) > 1), B && Bi && yr.splice(yr.length - 2, 2), i.render(0, !0, !0), fa || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Ws(0)) : (je = oe),
									Xt && (Xt.value ? (Xt.style['overflow' + A.a.toUpperCase()] = Xt.value) : Xt.style.removeProperty('overflow-' + A.a))
							else if (h && se() && !w) for (He = h.parentNode; He && He !== pe; ) He._pinOffset && ((K -= He._pinOffset), (Ce -= He._pinOffset)), (He = He.parentNode)
							$i &&
								$i.forEach(function (Hi) {
									return Hi.revert(!1, !0)
								}),
								(T.start = K),
								(T.end = Ce),
								(dt = Ct = bt ? Nt : se()),
								!w && !bt && (dt < Nt && se(Nt), (T.scroll.rec = 0)),
								T.revert(!1, !0),
								Bt && ((de = -1), T.isActive && se(K + oe * Pt), Bt.restart(!0)),
								(Ge = 0),
								i && k && (i._initted || Hr) && i.progress() !== Hr && i.progress(Hr, !0).render(i.time(), !0, !0),
								(te || Pt !== T.progress || w) && (i && !k && i.totalProgress(w && K < -0.001 && !Pt ? z.utils.normalize(K, Ce, 0) : Pt, !0), (T.progress = (dt - K) / oe === Pt ? 0 : Pt)),
								f && g && (Xe._pinOffset = Math.round(T.progress * je)),
								X && X.invalidate(),
								u && !bt && u(T)
						}
					}),
					(T.getVelocity = function () {
						return ((se() - Ct) / (et() - Jn)) * 1e3 || 0
					}),
					(T.endAnimation = function () {
						Ui(T.callbackAnimation), i && (X ? X.progress(1) : i.paused() ? k || Ui(i, T.direction < 0, 1) : Ui(i, i.reversed()))
					}),
					(T.labelToScroll = function (L) {
						return (i && i.labels && (K || T.refresh() || K) + (i.labels[L] / i.duration()) * oe) || 0
					}),
					(T.getTrailing = function (L) {
						var F = Y.indexOf(T),
							H = T.direction > 0 ? Y.slice(0, F).reverse() : Y.slice(F + 1)
						return (
							Ht(L)
								? H.filter(function (V) {
										return V.vars.preventOverlaps === L
								  })
								: H
						).filter(function (V) {
							return T.direction > 0 ? V.end <= K : V.start >= Ce
						})
					}),
					(T.update = function (L, F, H) {
						if (!(w && !H && !L)) {
							var V = bt === !0 ? Nt : T.scroll(),
								Pe = L ? 0 : (V - K) / oe,
								te = Pe < 0 ? 0 : Pe > 1 ? 1 : Pe || 0,
								le = T.progress,
								ze,
								Oe,
								ve,
								ce,
								gt,
								Je,
								Me,
								me
							if ((F && ((Ct = dt), (dt = w ? se() : V), b && (($r = Nr), (Nr = i && !k ? i.totalProgress() : te))), y && !te && f && !Ge && !Rn && zt && K < V + ((V - Ct) / (et() - Jn)) * y && (te = 1e-4), te !== le && T.enabled)) {
								if (
									((ze = T.isActive = !!te && te < 1),
									(Oe = !!le && le < 1),
									(Je = ze !== Oe),
									(gt = Je || !!te != !!le),
									(T.direction = te > le ? 1 : -1),
									(T.progress = te),
									gt && !Ge && ((ve = te && !le ? 0 : te === 1 ? 1 : le === 1 ? 2 : 3), k && ((ce = (!Je && N[ve + 1] !== 'none' && N[ve + 1]) || N[ve]), (me = i && (ce === 'complete' || ce === 'reset' || ce in i)))),
									C &&
										(Je || me) &&
										(me || p || !i) &&
										(rt(C)
											? C(T)
											: T.getTrailing(C).forEach(function (be) {
													return be.endAnimation()
											  })),
									k || (X && !Ge && !Rn ? (X._dp._time - X._start !== X._time && X.render(X._dp._time - X._start), X.resetTo ? X.resetTo('totalProgress', te, i._tTime / i._tDur) : ((X.vars.totalProgress = te), X.invalidate().restart())) : i && i.totalProgress(te, !!Ge)),
									f)
								) {
									if ((L && g && (Xe.style[g + A.os2] = Fi), !B)) ge(Ki(ht + je * te))
									else if (gt) {
										if (((Me = !L && te > le && Ce + 1 > V && V + 1 >= Mr(E, A)), x))
											if (!L && (ze || Me)) {
												var He = cr(f, !0),
													ui = V - K
												nl(f, pe, He.top + (A === we ? ui : 0) + Ie, He.left + (A === we ? 0 : ui) + Ie)
											} else nl(f, Xe)
										wi(ze || Me ? yr : ai), (Bi && te < 1 && ze) || ge(ht + (te === 1 && !Me ? je : 0))
									}
								}
								b && !$e.tween && !Ge && !Rn && Bt.restart(!0),
									a &&
										(Je || (v && te && (te < 1 || !Xs))) &&
										ys(a.targets).forEach(function (be) {
											return be.classList[ze || v ? 'add' : 'remove'](a.className)
										}),
									o && !k && !L && o(T),
									gt && !Ge ? (k && (me && (ce === 'complete' ? i.pause().totalProgress(1) : ce === 'reset' ? i.restart(!0).pause() : ce === 'restart' ? i.restart(!0) : i[ce]()), o && o(T)), (Je || !Xs) && (c && Je && Ks(T, c), q[ve] && Ks(T, q[ve]), v && (te === 1 ? T.kill(!1, 1) : (q[ve] = 0)), Je || ((ve = te === 1 ? 1 : 3), q[ve] && Ks(T, q[ve]))), P && !ze && Math.abs(T.getVelocity()) > (Ji(P) ? P : 2500) && (Ui(T.callbackAnimation), X ? X.progress(1) : Ui(i, ce === 'reverse' ? 1 : !te, 1))) : k && o && !Ge && o(T)
							}
							if (br) {
								var Gr = w ? (V / w.duration()) * (w._caScrollDist || 0) : V
								Ut(Gr + (We._isFlipped ? 1 : 0)), br(Gr)
							}
							ci && ci((-V / w.duration()) * (w._caScrollDist || 0))
						}
					}),
					(T.enable = function (L, F) {
						T.enabled || ((T.enabled = !0), Le(E, 'resize', Qi), Le(R ? ae : E, 'scroll', pi), re && Le(n, 'refreshInit', re), L !== !1 && ((T.progress = Pt = 0), (dt = Ct = de = se())), F !== !1 && T.refresh())
					}),
					(T.getTween = function (L) {
						return L && $e ? $e.tween : X
					}),
					(T.setPositions = function (L, F) {
						f && ((ht += L - K), (je += F - L - oe), g === _e && T.adjustPinSpacing(F - L - oe)), (T.start = K = L), (T.end = Ce = F), (oe = F - L), T.update()
					}),
					(T.adjustPinSpacing = function (L) {
						if (Ke && L) {
							var F = Ke.indexOf(A.d) + 1
							;(Ke[F] = parseFloat(Ke[F]) + L + Ie), (Ke[1] = parseFloat(Ke[1]) + L + Ie), wi(Ke)
						}
					}),
					(T.disable = function (L, F) {
						if (T.enabled && (L !== !1 && T.revert(!0, !0), (T.enabled = T.isActive = !1), F || (X && X.pause()), (Nt = 0), Ue && (Ue.uncache = 1), re && Ae(n, 'refreshInit', re), Bt && (Bt.pause(), $e.tween && $e.tween.kill() && ($e.tween = 0)), !R)) {
							for (var H = Y.length; H--; ) if (Y[H].scroller === E && Y[H] !== T) return
							Ae(E, 'resize', Qi), Ae(E, 'scroll', pi)
						}
					}),
					(T.kill = function (L, F) {
						T.disable(L, F), X && !F && X.kill(), l && delete Ao[l]
						var H = Y.indexOf(T)
						H >= 0 && Y.splice(H, 1),
							H === Ze && ts > 0 && Ze--,
							(H = 0),
							Y.forEach(function (V) {
								return V.scroller === T.scroller && (H = 1)
							}),
							H || bt || (T.scroll.rec = 0),
							i && ((i.scrollTrigger = null), L && i.revert({kill: !1}), F || i.kill()),
							pt &&
								[pt, Yt, We, O].forEach(function (V) {
									return V.parentNode && V.parentNode.removeChild(V)
								}),
							un === T && (un = 0),
							f &&
								(Ue && (Ue.uncache = 1),
								(H = 0),
								Y.forEach(function (V) {
									return V.pin === f && H++
								}),
								H || (Ue.spacer = 0)),
							r.onKill && r.onKill(T)
					}),
					T.enable(!1, !1),
					or && or(T),
					!i || !i.add || oe
						? T.refresh()
						: z.delayedCall(0.01, function () {
								return K || Ce || T.refresh()
						  }) &&
						  (oe = 0.01) &&
						  (K = Ce = 0),
					f && zh()
			}),
			(n.register = function (r) {
				return hi || ((z = r || iu()), ru() && window.document && n.enable(), (hi = ji)), hi
			}),
			(n.defaults = function (r) {
				if (r) for (var i in r) Bn[i] = r[i]
				return Bn
			}),
			(n.disable = function (r, i) {
				;(ji = 0),
					Y.forEach(function (o) {
						return o[i ? 'kill' : 'disable'](r)
					}),
					Ae(J, 'wheel', pi),
					Ae(ae, 'scroll', pi),
					clearInterval(Dn),
					Ae(ae, 'touchcancel', jt),
					Ae(pe, 'touchstart', jt),
					In(Ae, ae, 'pointerdown,touchstart,mousedown', Ja),
					In(Ae, ae, 'pointerup,touchend,mouseup', Qa),
					_s.kill(),
					zn(Ae)
				for (var s = 0; s < j.length; s += 3) Fn(Ae, j[s], j[s + 1]), Fn(Ae, j[s], j[s + 2])
			}),
			(n.enable = function () {
				if (((J = window), (ae = document), (Gt = ae.documentElement), (pe = ae.body), z && ((ys = z.utils.toArray), (vi = z.utils.clamp), (Mo = z.core.context || jt), (Ws = z.core.suppressOverwrites || jt), (sa = J.history.scrollRestoration || 'auto'), (Lo = J.pageYOffset), z.core.globals('ScrollTrigger', n), pe))) {
					;(ji = 1),
						Oh(),
						Te.register(z),
						(n.isTouch = Te.isTouch),
						(Tr = Te.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
						Le(J, 'wheel', pi),
						(Kc = [J, ae, Gt, pe]),
						z.matchMedia
							? ((n.matchMedia = function (l) {
									var c = z.matchMedia(),
										u
									for (u in l) c.add(u, l[u])
									return c
							  }),
							  z.addEventListener('matchMediaInit', function () {
									return ua()
							  }),
							  z.addEventListener('matchMediaRevert', function () {
									return cu()
							  }),
							  z.addEventListener('matchMedia', function () {
									Xr(0, 1), ni('matchMedia')
							  }),
							  z.matchMedia('(orientation: portrait)', function () {
									return Js(), Js
							  }))
							: console.warn('Requires GSAP 3.11.0 or later'),
						Js(),
						Le(ae, 'scroll', pi)
					var r = pe.style,
						i = r.borderTopStyle,
						s = z.core.Animation.prototype,
						o,
						a
					for (
						s.revert ||
							Object.defineProperty(s, 'revert', {
								value: function () {
									return this.time(-0.01, !0)
								},
							}),
							r.borderTopStyle = 'solid',
							o = cr(pe),
							we.m = Math.round(o.top + we.sc()) || 0,
							tt.m = Math.round(o.left + tt.sc()) || 0,
							i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
							Dn = setInterval(tl, 250),
							z.delayedCall(0.5, function () {
								return (Rn = 0)
							}),
							Le(ae, 'touchcancel', jt),
							Le(pe, 'touchstart', jt),
							In(Le, ae, 'pointerdown,touchstart,mousedown', Ja),
							In(Le, ae, 'pointerup,touchend,mouseup', Qa),
							Oo = z.utils.checkPrefix('transform'),
							rs.push(Oo),
							hi = et(),
							_s = z.delayedCall(0.2, Xr).pause(),
							gi = [
								ae,
								'visibilitychange',
								function () {
									var l = J.innerWidth,
										c = J.innerHeight
									ae.hidden ? ((ja = l), (Ka = c)) : (ja !== l || Ka !== c) && Qi()
								},
								ae,
								'DOMContentLoaded',
								Xr,
								J,
								'load',
								Xr,
								J,
								'resize',
								Qi,
							],
							zn(Le),
							Y.forEach(function (l) {
								return l.enable(0, 1)
							}),
							a = 0;
						a < j.length;
						a += 3
					)
						Fn(Ae, j[a], j[a + 1]), Fn(Ae, j[a], j[a + 2])
				}
			}),
			(n.config = function (r) {
				'limitCallbacks' in r && (Xs = !!r.limitCallbacks)
				var i = r.syncInterval
				;(i && clearInterval(Dn)) || ((Dn = i) && setInterval(tl, i)), 'ignoreMobileResize' in r && (Zc = n.isTouch === 1 && r.ignoreMobileResize), 'autoRefreshEvents' in r && (zn(Ae) || zn(Le, r.autoRefreshEvents || 'none'), (Qc = (r.autoRefreshEvents + '').indexOf('resize') === -1))
			}),
			(n.scrollerProxy = function (r, i) {
				var s = st(r),
					o = j.indexOf(s),
					a = ri(s)
				~o && j.splice(o, a ? 6 : 2), i && (a ? rr.unshift(J, i, pe, i, Gt, i) : rr.unshift(s, i))
			}),
			(n.clearMatchMedia = function (r) {
				Y.forEach(function (i) {
					return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
				})
			}),
			(n.isInViewport = function (r, i, s) {
				var o = (Ht(r) ? st(r) : r).getBoundingClientRect(),
					a = o[s ? Qr : Zr] * i || 0
				return s ? o.right - a > 0 && o.left + a < J.innerWidth : o.bottom - a > 0 && o.top + a < J.innerHeight
			}),
			(n.positionInViewport = function (r, i, s) {
				Ht(r) && (r = st(r))
				var o = r.getBoundingClientRect(),
					a = o[s ? Qr : Zr],
					l = i == null ? a / 2 : i in vs ? vs[i] * a : ~i.indexOf('%') ? (parseFloat(i) * a) / 100 : parseFloat(i) || 0
				return s ? (o.left + l) / J.innerWidth : (o.top + l) / J.innerHeight
			}),
			(n.killAll = function (r) {
				if (
					(Y.slice(0).forEach(function (s) {
						return s.vars.id !== 'ScrollSmoother' && s.kill()
					}),
					r !== !0)
				) {
					var i = ii.killAll || []
					;(ii = {}),
						i.forEach(function (s) {
							return s()
						})
				}
			}),
			n
		)
	})()
U.version = '3.11.5'
U.saveStyles = function (n) {
	return n
		? ys(n).forEach(function (e) {
				if (e && e.style) {
					var t = _t.indexOf(e)
					t >= 0 && _t.splice(t, 5), _t.push(e, e.style.cssText, e.getBBox && e.getAttribute('transform'), z.core.getCache(e), Mo())
				}
		  })
		: _t
}
U.revert = function (n, e) {
	return ua(!n, e)
}
U.create = function (n, e) {
	return new U(n, e)
}
U.refresh = function (n) {
	return n ? Qi() : (hi || U.register()) && Xr(!0)
}
U.update = function (n) {
	return ++j.cache && dr(n === !0 ? 2 : 0)
}
U.clearScrollMemory = uu
U.maxScroll = function (n, e) {
	return Mr(n, e ? tt : we)
}
U.getScrollFunc = function (n, e) {
	return Fr(st(n), e ? tt : we)
}
U.getById = function (n) {
	return Ao[n]
}
U.getAll = function () {
	return Y.filter(function (n) {
		return n.vars.id !== 'ScrollSmoother'
	})
}
U.isScrolling = function () {
	return !!zt
}
U.snapDirectional = ca
U.addEventListener = function (n, e) {
	var t = ii[n] || (ii[n] = [])
	~t.indexOf(e) || t.push(e)
}
U.removeEventListener = function (n, e) {
	var t = ii[n],
		r = t && t.indexOf(e)
	r >= 0 && t.splice(r, 1)
}
U.batch = function (n, e) {
	var t = [],
		r = {},
		i = e.interval || 0.016,
		s = e.batchMax || 1e9,
		o = function (c, u) {
			var p = [],
				h = [],
				f = z
					.delayedCall(i, function () {
						u(p, h), (p = []), (h = [])
					})
					.pause()
			return function (g) {
				p.length || f.restart(!0), p.push(g.trigger), h.push(g), s <= p.length && f.progress(1)
			}
		},
		a
	for (a in e) r[a] = a.substr(0, 2) === 'on' && rt(e[a]) && a !== 'onRefreshInit' ? o(a, e[a]) : e[a]
	return (
		rt(s) &&
			((s = s()),
			Le(U, 'refresh', function () {
				return (s = e.batchMax())
			})),
		ys(n).forEach(function (l) {
			var c = {}
			for (a in r) c[a] = r[a]
			;(c.trigger = l), t.push(U.create(c))
		}),
		t
	)
}
var ol = function (e, t, r, i) {
		return t > i ? e(i) : t < 0 && e(0), r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
	},
	Zs = function n(e, t) {
		t === !0 ? e.style.removeProperty('touch-action') : (e.style.touchAction = t === !0 ? 'auto' : t ? 'pan-' + t + (Te.isTouch ? ' pinch-zoom' : '') : 'none'), e === Gt && n(pe, t)
	},
	Hn = {auto: 1, scroll: 1},
	$h = function (e) {
		var t = e.event,
			r = e.target,
			i = e.axis,
			s = (t.changedTouches ? t.changedTouches[0] : t).target,
			o = s._gsap || z.core.getCache(s),
			a = et(),
			l
		if (!o._isScrollT || a - o._isScrollT > 2e3) {
			for (; s && s !== pe && ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) || !(Hn[(l = Vt(s)).overflowY] || Hn[l.overflowX])); ) s = s.parentNode
			;(o._isScroll = s && s !== r && !ri(s) && (Hn[(l = Vt(s)).overflowY] || Hn[l.overflowX])), (o._isScrollT = a)
		}
		;(o._isScroll || i === 'x') && (t.stopPropagation(), (t._gsapAllow = !0))
	},
	du = function (e, t, r, i) {
		return Te.create({
			target: e,
			capture: !0,
			debounce: !1,
			lockAxis: !0,
			type: t,
			onWheel: (i = i && $h),
			onPress: i,
			onDrag: i,
			onScroll: i,
			onEnable: function () {
				return r && Le(ae, Te.eventTypes[0], ll, !1, !0)
			},
			onDisable: function () {
				return Ae(ae, Te.eventTypes[0], ll, !0)
			},
		})
	},
	Hh = /(input|label|select|textarea)/i,
	al,
	ll = function (e) {
		var t = Hh.test(e.target.tagName)
		;(t || al) && ((e._gsapAllow = !0), (al = t))
	},
	Gh = function (e) {
		Qn(e) || (e = {}), (e.preventDefault = e.isNormalizer = e.allowClicks = !0), e.type || (e.type = 'wheel,touch'), (e.debounce = !!e.debounce), (e.id = e.id || 'normalizer')
		var t = e,
			r = t.normalizeScrollX,
			i = t.momentum,
			s = t.allowNestedScroll,
			o = t.onRelease,
			a,
			l,
			c = st(e.target) || Gt,
			u = z.core.globals().ScrollSmoother,
			p = u && u.get(),
			h = Tr && ((e.content && st(e.content)) || (p && e.content !== !1 && !p.smooth() && p.content())),
			f = Fr(c, we),
			g = Fr(c, tt),
			d = 1,
			y = (Te.isTouch && J.visualViewport ? J.visualViewport.scale * J.visualViewport.width : J.outerWidth) / J.innerWidth,
			m = 0,
			_ = rt(i)
				? function () {
						return i(a)
				  }
				: function () {
						return i || 2.8
				  },
			v,
			b,
			x = du(c, e.type, !0, s),
			S = function () {
				return (b = !1)
			},
			w = jt,
			P = jt,
			C = function () {
				;(l = Mr(c, we)), (P = vi(Tr ? 1 : 0, l)), r && (w = vi(0, Mr(c, tt))), (v = ei)
			},
			A = function () {
				;(h._gsap.y = Ki(parseFloat(h._gsap.y) + f.offset) + 'px'), (h.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(h._gsap.y) + ', 0, 1)'), (f.offset = f.cacheID = 0)
			},
			k = function () {
				if (b) {
					requestAnimationFrame(S)
					var W = Ki(a.deltaY / 2),
						ee = P(f.v - W)
					if (h && ee !== f.v + f.offset) {
						f.offset = ee - f.v
						var T = Ki((parseFloat(h && h._gsap.y) || 0) - f.offset)
						;(h.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + T + ', 0, 1)'), (h._gsap.y = T + 'px'), (f.cacheID = j.cache), dr()
					}
					return !0
				}
				f.offset && A(), (b = !0)
			},
			E,
			D,
			R,
			B,
			q = function () {
				C(), E.isActive() && E.vars.scrollY > l && (f() > l ? E.progress(1) && f(l) : E.resetTo('scrollY', l))
			}
		return (
			h && z.set(h, {y: '+=0'}),
			(e.ignoreCheck = function (N) {
				return (Tr && N.type === 'touchmove' && k()) || (d > 1.05 && N.type !== 'touchstart') || a.isGesturing || (N.touches && N.touches.length > 1)
			}),
			(e.onPress = function () {
				b = !1
				var N = d
				;(d = Ki(((J.visualViewport && J.visualViewport.scale) || 1) / y)), E.pause(), N !== d && Zs(c, d > 1.01 ? !0 : r ? !1 : 'x'), (D = g()), (R = f()), C(), (v = ei)
			}),
			(e.onRelease = e.onGestureStart =
				function (N, W) {
					if ((f.offset && A(), !W)) B.restart(!0)
					else {
						j.cache++
						var ee = _(),
							T,
							re
						r && ((T = g()), (re = T + (ee * 0.05 * -N.velocityX) / 0.227), (ee *= ol(g, T, re, Mr(c, tt))), (E.vars.scrollX = w(re))), (T = f()), (re = T + (ee * 0.05 * -N.velocityY) / 0.227), (ee *= ol(f, T, re, Mr(c, we))), (E.vars.scrollY = P(re)), E.invalidate().duration(ee).play(0.01), ((Tr && E.vars.scrollY >= l) || T >= l - 1) && z.to({}, {onUpdate: q, duration: ee})
					}
					o && o(N)
				}),
			(e.onWheel = function () {
				E._ts && E.pause(), et() - m > 1e3 && ((v = 0), (m = et()))
			}),
			(e.onChange = function (N, W, ee, T, re) {
				if ((ei !== v && C(), W && r && g(w(T[2] === W ? D + (N.startX - N.x) : g() + W - T[1])), ee)) {
					f.offset && A()
					var Re = re[2] === ee,
						ft = Re ? R + N.startY - N.y : f() + ee - re[1],
						de = P(ft)
					Re && ft !== de && (R += de - ft), f(de)
				}
				;(ee || W) && dr()
			}),
			(e.onEnable = function () {
				Zs(c, r ? !1 : 'x'), U.addEventListener('refresh', q), Le(J, 'resize', q), f.smooth && ((f.target.style.scrollBehavior = 'auto'), (f.smooth = g.smooth = !1)), x.enable()
			}),
			(e.onDisable = function () {
				Zs(c, !0), Ae(J, 'resize', q), U.removeEventListener('refresh', q), x.kill()
			}),
			(e.lockAxis = e.lockAxis !== !1),
			(a = new Te(e)),
			(a.iOS = Tr),
			Tr && !f() && f(1),
			Tr && z.ticker.add(jt),
			(B = a._dc),
			(E = z.to(a, {
				ease: 'power4',
				paused: !0,
				scrollX: r ? '+=0.1' : '+=0',
				scrollY: '+=0.1',
				modifiers: {
					scrollY: fu(f, f(), function () {
						return E.pause()
					}),
				},
				onUpdate: dr,
				onComplete: B.vars.onComplete,
			})),
			a
		)
	}
U.sort = function (n) {
	return Y.sort(
		n ||
			function (e, t) {
				return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
			}
	)
}
U.observe = function (n) {
	return new Te(n)
}
U.normalizeScroll = function (n) {
	if (typeof n > 'u') return mt
	if (n === !0 && mt) return mt.enable()
	if (n === !1) return mt && mt.kill()
	var e = n instanceof Te ? n : Gh(n)
	return mt && mt.target === e.target && mt.kill(), ri(e.target) && (mt = e), e
}
U.core = {
	_getVelocityProp: Po,
	_inputObserver: du,
	_scrollers: j,
	_proxies: rr,
	bridge: {
		ss: function () {
			zt || ni('scrollStart'), (zt = et())
		},
		ref: function () {
			return Ge
		},
	},
}
iu() && z.registerPlugin(U)
/*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var it,
	pu,
	pr,
	er,
	Dr,
	hu,
	gu,
	Gn,
	mu = function () {
		return typeof window < 'u'
	},
	_u = function () {
		return it || (mu() && (it = window.gsap) && it.registerPlugin && it)
	},
	yu = function (e) {
		return typeof e == 'string'
	},
	cl = function (e) {
		return typeof e == 'function'
	},
	Tn = function (e, t) {
		var r = t === 'x' ? 'Width' : 'Height',
			i = 'scroll' + r,
			s = 'client' + r
		return e === pr || e === er || e === Dr ? Math.max(er[i], Dr[i]) - (pr['inner' + r] || er[s] || Dr[s]) : e[i] - e['offset' + r]
	},
	Sn = function (e, t) {
		var r = 'scroll' + (t === 'x' ? 'Left' : 'Top')
		return (
			e === pr && (e.pageXOffset != null ? (r = 'page' + t.toUpperCase() + 'Offset') : (e = er[r] != null ? er : Dr)),
			function () {
				return e[r]
			}
		)
	},
	Vh = function (e, t, r, i) {
		if ((cl(e) && (e = e(t, r, i)), typeof e != 'object')) return yu(e) && e !== 'max' && e.charAt(1) !== '=' ? {x: e, y: e} : {y: e}
		if (e.nodeType) return {y: e, x: e}
		var s = {},
			o
		for (o in e) s[o] = o !== 'onAutoKill' && cl(e[o]) ? e[o](t, r, i) : e[o]
		return s
	},
	vu = function (e, t) {
		if (((e = hu(e)[0]), !e || !e.getBoundingClientRect)) return console.warn("scrollTo target doesn't exist. Using 0") || {x: 0, y: 0}
		var r = e.getBoundingClientRect(),
			i = !t || t === pr || t === Dr,
			s = i ? {top: er.clientTop - (pr.pageYOffset || er.scrollTop || Dr.scrollTop || 0), left: er.clientLeft - (pr.pageXOffset || er.scrollLeft || Dr.scrollLeft || 0)} : t.getBoundingClientRect(),
			o = {x: r.left - s.left, y: r.top - s.top}
		return !i && t && ((o.x += Sn(t, 'x')()), (o.y += Sn(t, 'y')())), o
	},
	ul = function (e, t, r, i, s) {
		return !isNaN(e) && typeof e != 'object' ? parseFloat(e) - s : yu(e) && e.charAt(1) === '=' ? parseFloat(e.substr(2)) * (e.charAt(0) === '-' ? -1 : 1) + i - s : e === 'max' ? Tn(t, r) - s : Math.min(Tn(t, r), vu(e, t)[r] - s)
	},
	fl = function () {
		;(it = _u()), mu() && it && typeof document < 'u' && document.body && ((pr = window), (Dr = document.body), (er = document.documentElement), (hu = it.utils.toArray), it.config({autoKillThreshold: 7}), (gu = it.config()), (pu = 1))
	},
	Pn = {
		version: '3.11.5',
		name: 'scrollTo',
		rawVars: 1,
		register: function (e) {
			;(it = e), fl()
		},
		init: function (e, t, r, i, s) {
			pu || fl()
			var o = this,
				a = it.getProperty(e, 'scrollSnapType')
			;(o.isWin = e === pr), (o.target = e), (o.tween = r), (t = Vh(t, i, e, s)), (o.vars = t), (o.autoKill = !!t.autoKill), (o.getX = Sn(e, 'x')), (o.getY = Sn(e, 'y')), (o.x = o.xPrev = o.getX()), (o.y = o.yPrev = o.getY()), Gn || (Gn = it.core.globals().ScrollTrigger), it.getProperty(e, 'scrollBehavior') === 'smooth' && it.set(e, {scrollBehavior: 'auto'}), a && a !== 'none' && ((o.snap = 1), (o.snapInline = e.style.scrollSnapType), (e.style.scrollSnapType = 'none')), t.x != null ? (o.add(o, 'x', o.x, ul(t.x, e, 'x', o.x, t.offsetX || 0), i, s), o._props.push('scrollTo_x')) : (o.skipX = 1), t.y != null ? (o.add(o, 'y', o.y, ul(t.y, e, 'y', o.y, t.offsetY || 0), i, s), o._props.push('scrollTo_y')) : (o.skipY = 1)
		},
		render: function (e, t) {
			for (var r = t._pt, i = t.target, s = t.tween, o = t.autoKill, a = t.xPrev, l = t.yPrev, c = t.isWin, u = t.snap, p = t.snapInline, h, f, g, d, y; r; ) r.r(e, r.d), (r = r._next)
			;(h = c || !t.skipX ? t.getX() : a), (f = c || !t.skipY ? t.getY() : l), (g = f - l), (d = h - a), (y = gu.autoKillThreshold), t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), o && (!t.skipX && (d > y || d < -y) && h < Tn(i, 'x') && (t.skipX = 1), !t.skipY && (g > y || g < -y) && f < Tn(i, 'y') && (t.skipY = 1), t.skipX && t.skipY && (s.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(s, t.vars.onAutoKillParams || []))), c ? pr.scrollTo(t.skipX ? h : t.x, t.skipY ? f : t.y) : (t.skipY || (i.scrollTop = t.y), t.skipX || (i.scrollLeft = t.x)), u && (e === 1 || e === 0) && ((f = i.scrollTop), (h = i.scrollLeft), p ? (i.style.scrollSnapType = p) : i.style.removeProperty('scroll-snap-type'), (i.scrollTop = f + 1), (i.scrollLeft = h + 1), (i.scrollTop = f), (i.scrollLeft = h)), (t.xPrev = t.x), (t.yPrev = t.y), Gn && Gn.update()
		},
		kill: function (e) {
			var t = e === 'scrollTo'
			;(t || e === 'scrollTo_x') && (this.skipX = 1), (t || e === 'scrollTo_y') && (this.skipY = 1)
		},
	}
Pn.max = Tn
Pn.getOffset = vu
Pn.buildGetter = Sn
_u() && it.registerPlugin(Pn)
const qh = new dp({duration: 1.2, easing: n => Math.min(1, 1.001 - Math.pow(2, -10 * n)), direction: 'vertical', gestureDirection: 'vertical', smooth: !0, mouseMultiplier: 1, smoothTouch: !1, touchMultiplier: 2, infinite: !1})
function bu(n) {
	qh.raf(n), requestAnimationFrame(bu)
}
requestAnimationFrame(bu)
I.registerPlugin(U, Pn)
const Yh = I.timeline(),
	Uh = I.timeline({defaults: {durations: 0.5}, repeat: -1, repeatDelay: 1})
I.timeline({defaults: {durations: 0.5}, repeat: -1, repeatDelay: 1})
const Wh = I.timeline({defaults: {durations: 0.5}, repeat: -1, repeatDelay: 1})
Yh.fromTo('.greeting__title', {opacity: 0, x: 30}, {opacity: 1, duration: 1, x: 0}, 0.5).fromTo('.greeting__subtitle', {opacity: 0, x: -30}, {opacity: 1, duration: 1, x: 0}, 1).fromTo('.greeting__link-down', {opacity: 0, y: 30}, {opacity: 1, duration: 1, y: 0}, 1.5).fromTo('.header__logo', {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 1}, 0.5).fromTo('.header__navigation a', {y: -20, opacity: 0}, {y: 0, duration: 0.2, stagger: 0.15, opacity: 1}, 0.5).fromTo('.greeting__background-video', {opacity: 0}, {opacity: 1, duration: 1}, 0.5)
if (document.querySelector('.employes')) {
	let t = function () {
		const i = e.getBoundingClientRect().top + n
		document.querySelector('.greeting__img-down').addEventListener('click', function (o) {
			o.preventDefault(), I.to(window, {duration: 1.2, scrollTo: i, ease: 'expo.out'})
		})
	}
	var aboutSection = t
	const n = window.pageYOffset || document.documentElement.scrollTop,
		e = document.querySelector('.about')
	t()
}
let fn = I.utils.toArray('.about__box'),
	dn = I.utils.toArray('.about-us__box'),
	pn = I.utils.toArray('.location__box'),
	Xh = I.utils.toArray('.achivements__box'),
	jh = I.utils.toArray('.achivements__item'),
	Kh = I.utils.toArray('.employes__item'),
	Jh = I.utils.toArray('.employes__item'),
	xu = I.utils.toArray('.contacts__item')
Wh.to('.about__skill-box svg', {stagger: {each: 0.1, from: 'edges'}, scale: 1})
	.to('.about__skill-box svg', {stagger: {each: 0.1, from: 'edges'}, scale: 1.1})
	.to('.about__skill-box svg', {stagger: {each: 0.1, from: 'edges'}, scale: 1, ease: 'power1.out'})
let Qh = I.utils.toArray('.contacts__img')
Qh.forEach(n => {
	Uh.to(n, {scale: 1.2}).to(n, {rotation: -20}).to(n, {rotation: 20}).to(n, {scale: 1, rotation: 0, ease: 'power1.out'})
})
U.isTouch !== 1 &&
	(I.fromTo('.footer__logo', {opacity: 0, x: -100}, {x: 0, opacity: 1, scrollTrigger: {trigger: '.footer', start: '-20% 100%', end: '-5% 96%', scrub: !0}}),
	I.fromTo('.footer__copyright', {opacity: 0, x: 100}, {x: 0, opacity: 1, scrollTrigger: {trigger: '.footer', start: '-20% 100%', end: '-5% 96%', scrub: !0}}),
	I.fromTo('.footer__navigation', {opacity: 0, x: 100}, {x: 0, opacity: 1, scrollTrigger: {trigger: '.footer', start: '-20% 100%', end: '-5% 96%', scrub: !0}}),
	xu.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 94%', end: 'bottom 38%', scrub: !0}})
	}),
	Xh.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: '.about', start: 'bottom 90%', end: 'bottom 40%', scrub: !0}})
	}),
	Kh.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: '.about-us', start: 'bottom 86%', end: 'bottom 36%', scrub: !0}})
	}),
	I.fromTo('.portfolio__box', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'top 88%', end: 'top 40%', scrub: !0}}),
	I.fromTo('.contacts__subtitle', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 90%', end: 'bottom 42%', scrub: !0}}),
	I.fromTo('.contacts__title', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 92%', end: 'bottom 40%', scrub: !0}}),
	I.fromTo(pn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: '.employes', start: '100% 90%', end: '120% 45%', scrub: !0}}),
	I.fromTo(pn[0], {opacity: 0, x: -100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.employes', start: '140% 90%', end: '160% 45%', scrub: !0}}),
	I.fromTo(dn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: '.products', start: 'bottom 90%', end: 'bottom 45%', scrub: !0}}),
	I.fromTo(dn[0], {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.products', start: 'bottom 85%', end: 'bottom 65%', scrub: !0}}),
	I.fromTo(fn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: '.about', start: 'top 90%', end: 'top 45%', scrub: !0}}),
	I.fromTo(fn[0], {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.about', start: 'top 90%', end: 'top 45%', scrub: !0}}),
	I.fromTo('.about__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.header', start: '140% 10%', end: '150% 0%', scrub: !0}}),
	I.fromTo('.achivements__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.about', start: '124% 94%', end: '130% 84%', scrub: !0}}),
	I.fromTo('.products__box', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, scrollTrigger: {trigger: '.achivements', start: '154% 94%', end: '170% 84%', scrub: !0}}),
	I.fromTo('.employes__title', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, scrollTrigger: {trigger: '.about-us', start: '100% 90%', end: '120% 84%', scrub: !0}}),
	I.fromTo('.products__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.achivements', start: '124% 94%', end: '130% 84%', scrub: !0}}))
U.isTouch == 1 &&
	(xu.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 94%', end: 'bottom 38%', scrub: !0}})
	}),
	jh.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: n, start: 'top 96%', end: 'top 80%', scrub: !0}})
	}),
	Jh.forEach(n => {
		I.fromTo(n, {opacity: 0, scale: 0}, {scale: 1, opacity: 1, scrollTrigger: {trigger: n, start: 'top 90%', end: 'top 66%', scrub: !0}})
	}),
	I.fromTo('.portfolio__box', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'top 88%', end: 'top 40%', scrub: !0}}),
	I.fromTo('.contacts__subtitle', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 90%', end: 'bottom 42%', scrub: !0}}),
	I.fromTo('.contacts__title', {opacity: 0, y: 100}, {y: 0, opacity: 1, scrollTrigger: {trigger: '.portfolio', start: 'bottom 92%', end: 'bottom 40%', scrub: !0}}),
	I.fromTo(pn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: pn[0], start: 'bottom 90%', end: 'bottom 45%', scrub: !0}}),
	I.fromTo(pn[0], {opacity: 0, x: -100}, {opacity: 1, x: 0, scrollTrigger: {trigger: '.employes', start: 'bottom 90%', end: 'bottom 45%', scrub: !0}}),
	I.fromTo(dn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: dn[0], start: '60% 90%', end: '60% 45%', scrub: !0}}),
	I.fromTo(dn[0], {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.products', start: 'bottom 85%', end: 'bottom 65%', scrub: !0}}),
	I.fromTo(fn[1], {opacity: 0, x: 100}, {opacity: 1, x: 0, scrollTrigger: {trigger: '.about', start: 'top 90%', end: 'top 45%', scrub: !0}}),
	I.fromTo(fn[0], {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: fn[1], start: '70% 90%', end: '70% 45%', scrub: !0}}),
	I.fromTo('.about__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.header', start: '140% 10%', end: '150% 0%', scrub: !0}}),
	I.fromTo('.achivements__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.about', start: '124% 94%', end: '130% 84%', scrub: !0}}),
	I.fromTo('.products__box', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, scrollTrigger: {trigger: '.achivements', start: '124% 94%', end: '130% 84%', scrub: !0}}),
	I.fromTo('.employes__title', {opacity: 0, scale: 0}, {opacity: 1, scale: 1, scrollTrigger: {trigger: '.about-us', start: '100% 90%', end: '120% 84%', scrub: !0}}),
	I.fromTo('.products__title', {opacity: 0, y: 100}, {opacity: 1, y: 0, scrollTrigger: {trigger: '.achivements', start: '124% 94%', end: '130% 84%', scrub: !0}}))
