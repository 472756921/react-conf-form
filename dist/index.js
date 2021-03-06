!function(e, t) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = t(require('react'), require('antd'), require('moment'), require('memoize-one'), require('axios')) else if ('function' == typeof define && define.amd) define(['react', 'antd', 'moment', 'memoize-one', 'axios'], t) else {
    var r = 'object' == typeof exports ? t(require('react'), require('antd'), require('moment'), require('memoize-one'), require('axios')) : t(e.react, e.antd, e.moment, e['memoize-one'], e.axios)
    for (var n in r) ('object' == typeof exports ? exports : e)[n] = r[n]
  }
}(window, (function(e, t, r, n, o) {
  return function(e) {
    var t = {}

    function r(n) {
      if (t[n]) return t[n].exports
      var o = t[n] = { i: n, l: !1, exports: {} }
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }, r.r = function(e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
    }, r.t = function(e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (r.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: e,
      }), 2 & t && 'string' != typeof e) for (var o in e) r.d(n, o, function(t) {
        return e[t]
      }.bind(null, o))
      return n
    }, r.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      }
      return r.d(t, 'a', t), t
    }, r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = '', r(r.s = 6)
  }([function(t, r) {
    t.exports = e
  }, function(e, r) {
    e.exports = t
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {}, t.notEmptyValue = e => '' !== e && null != e, t.simpleClone = e => JSON.parse(JSON.stringify(e)), t.removeLabelStyleWidth = e => {
      const t = `form-label-width-${e}`, r = document.getElementById(t)
      return r && document.body.removeChild(r), t
    }, t.addLabelStyleWidth = (e, r, n) => {
      const o = t.removeLabelStyleWidth(n)
      if ('horizontal' === r) {
        const t = document.createElement('style')
        t.id = o, t.innerHTML = `#${n} .ant-form-item-label { width: ${e}px; }`, document.body.appendChild(t)
      }
    }, t.getItemLabelsByValue = (e, t) => {
      const r = []
      return t.forEach(t => {
        const n = e.find(e => e.value === t)
        n && r.push(n.label)
      }), r.join('，')
    }, t.getItemLabelByValue = (e, t, r) => {
      let n = e
      if (Array.isArray(e) || (n = [], Object.keys(e).forEach(t => {
        const r = e[t]
        Array.isArray(r) && (n = [...n, ...r])
      })), r) {
        if (t && Array.isArray(t)) {
          const e = n.filter(e => -1 !== t.indexOf(e.value))
          if (e.length > 0) return e.map(e => e.label).join(', ')
        }
      }
      else {
        const e = n.filter(e => e.value === t)
        if (e.length > 0) return e[0].label
      }
      return ''
    }, t.getTargetValue = e => {
      var r
      const n = e && e.target
      let o
      return o = n instanceof HTMLElement || t.notEmptyValue(null === (r = n) || void 0 === r ? void 0 : r.value) ? n.value : e
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = r(2)

    class i extends o.PureComponent {
      constructor() {
        super(...arguments), this.onChange = e => {
          let t = s.getTargetValue(e)
          const { name: r } = this.props, { beforeChange: n, onChange: o } = this.props.props
          n && (t = n(r, t)), o && o(r, t), this.props.onChange(r, t)
        }, this.staticValue = (e, t, r) => {
          if (!e) return null
          let n = e
          return t && (n = `${e} ${t}`), r && (n = `${r} ${n}`), n
        }
      }

      render() {
        const { value: e, readOnly: t, type: r, props: s } = this.props, { addon: i, suffix: l, prefix: c } = s,
          p = n(s, ['addon', 'suffix', 'prefix']), u = s.autoComplete || 'off'
        return t ? this.staticValue(e, l, c) : o.createElement(o.Fragment, null, o.createElement(a.Input, Object.assign({ placeholder: '请输入' }, p, {
          suffix: l,
          prefix: c,
          type: r,
          value: e,
          onChange: this.onChange,
          autoComplete: u,
        })))
      }
    }

    t.default = i
  }, function(e, t) {
    e.exports = r
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(8), s = r(3), i = r(9), l = r(10), c = r(11), p = r(12), u = r(13), d = r(14), f = r(15),
      h = r(19), m = r(20), y = r(21), g = r(22), b = r(23), v = r(24), O = r(25), j = {
        render: a.default,
        switch: O.default,
        input: s.default,
        button: i.default,
        select: l.default,
        timepicker: c.default,
        rangepicker: p.default,
        datepicker: u.default,
        cascader: d.default,
        inputPassword: m.default,
        inputNumber: y.default,
        textarea: g.default,
        radio: b.default,
        checkbox: v.default,
        upload: f.default,
        autoComplete: h.default,
      }
    t.addFields = e => e.forEach(e => {
      const { name: t, component: r } = e
      j[t] = r
    })
    t.default = e => {
      const { type: t } = e, r = n(e, ['type']), a = (e => j[e] || null)(t)
      return a ? o.createElement(a, Object.assign({}, r)) : null
    }
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const n = r(0), o = r(7), a = r(1), s = r(5), i = r(26), l = r(27), c = r(2), p = r(29)
    r(31)

    if (typeof o.default !== 'function') o.default = o

    class u extends n.Component {
      constructor(e) {
        super(e), this.mounted = !1, this.data = {}, this.dataChanged = !1, this.validation = {}, this.isDataSourceChanged = o.default(e => (this.dataChanged = !0, this.dataChanged)), this.convertDataFromFields = o.default((e, t) => {
          e.forEach(e => {
            'FormButtons' !== e.type && e.fields.forEach(e => {
              var r, n
              if (!1 !== e.display && 'render' !== e.type && 'button' !== e.type) {
                this.data[e.key] = this.dataChanged ? t[e.key] : this.data[e.key]
                const o = this.validateField(e.key, this.data[e.key], (null === (r = e.props) || void 0 === r ? void 0 : r.rules) || [])
                this.validation[e.key] = Object.assign(Object.assign({}, o), { rules: (null === (n = e.props) || void 0 === n ? void 0 : n.rules) || [] })
              }
            })
          }), this.dataChanged = !1
        }), this.id = `FORM_${parseInt((1e4 * Math.random()).toString(), 10).toString()}`, this.onChange = (e, t) => {
          this.data = Object.assign(Object.assign({}, this.data), { [e]: t }), this.props.validateOnChange && this.validation[e] && (this.validation[e] = Object.assign(Object.assign({}, i.default.check(t, this.validation[e].rules)), { rules: this.validation[e].rules })), this.props.onChange && this.props.onChange(e, t, this.data), this.setState({})
        }, this.validate = () => {
          let e = !0
          return this.props.fields.forEach(t => {
            'FormButtons' !== t.type && t.fields.forEach(t => {
              if (!1 !== t.display && 'render' !== t.type && 'button' !== t.type) {
                const { key: r } = t, n = this.data[r], o = i.default.check(n, this.validation[r].rules)
                this.validation[r] = Object.assign(Object.assign({}, o), { rules: this.validation[r].rules }), this.validation[r].validated || (e = !1)
              }
            })
          }), this.setState({}), e
        }, this.onSubmit = e => {
          e && e.preventDefault(), this.validate() && this.props.onSubmit && this.props.onSubmit(this.data)
        }, this.onReset = () => {
          this.props.onReset && this.props.onReset()
        }, this.onButtonClick = (e, t) => {
          'submit' === e ? this.onSubmit() : 'reset' === e ? this.onReset() : t && t(this.data)
        }, this.validateField = (e, t, r = []) => void 0 !== this.validation[e] && void 0 !== t ? i.default.check(t, r) : {
          validated: !0,
          msg: '',
        }, s.addFields(this.props.extendFields), e.id && (this.id = `FORM_${e.id}`)
      }

      componentDidMount() {
        this.mounted = !0, i.default.extendValidators(this.props.extendValidators)
      }

      componentWillUnmount() {
        c.removeLabelStyleWidth(this.id), this.mounted = !1
      }

      render() {
        const { fields: e, dataSource: t, labelDirection: r, labelWidth: o } = this.props
        return this.isDataSourceChanged(t), this.convertDataFromFields(e, t || {}), c.addLabelStyleWidth(o, r, this.id), n.createElement(a.Spin, { spinning: this.props.spinning }, n.createElement('form', {
          onSubmit: this.onSubmit,
          id: this.id,
        }, e.map((e, t) => {
          const o = `row_${t}`, a = void 0 === e.display || e.display, s = e.type || 'field'
          return a ? 'field' === s ? n.createElement(l.default, Object.assign({ key: o }, e, {
            data: this.data,
            validation: this.validation,
            labelDirection: r,
            onChange: this.onChange,
          })) : n.createElement(p.default, Object.assign({ key: o }, e, { onButtonClick: this.onButtonClick })) : null
        })))
      }
    }

    t.default = u, u.defaultProps = {
      spinning: !1,
      validateOnChange: !0,
      dataSource: {},
      extendValidators: [],
      extendFields: [],
      fields: [],
      labelDirection: 'horizontal',
      labelWidth: 80,
    }
  }, function(e, t) {
    e.exports = n
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    t.default = e => {
      const { data: t } = e, { render: r } = e.props
      return 'function' == typeof r ? r(t) : r || null
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = ['default', 'primary', 'danger', 'link', 'ghost']
    t.default = e => {
      const { label: t, data: r } = e,
        i = e.props, { type: l = 'default', className: c = '', onClick: p, addon: u } = i,
        d = n(i, ['type', 'className', 'onClick', 'addon'])
      let f = 'default'
      const h = s.findIndex(e => e === l)
      return -1 !== h && (f = s[h]), o.createElement(a.Button, Object.assign({
        type: f,
        className: `${f} ${c}`,
        onClick: () => p(r),
      }, d), t)
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = r(2), { Option: i, OptGroup: l } = a.Select

    class c extends o.PureComponent {
      constructor() {
        super(...arguments), this.onChange = e => {
          var t
          const r = e && e.target
          let n
          n = r instanceof HTMLElement || s.notEmptyValue(null === (t = r) || void 0 === t ? void 0 : t.value) ? r.value : e
          const { name: o } = this.props, { beforeChange: a, onChange: i } = this.props.props
          a && (n = a(o, n)), i && i(o, n), this.props.onChange(o, n)
        }, this.renderGroup = e => {
          const t = []
          return Object.keys(e).forEach(r => {
            const n = []
            e[r].forEach(e => {
              n.push(o.createElement(i, { key: e.value, title: e.label }, e.label))
            }), t.push(o.createElement(l, { label: r, key: r }, n))
          }), t
        }
      }

      render() {
        const { value: e, readOnly: t, props: r } = this.props, { items: l = [], placeholder: c = '请选择', showSearch: p = !0, optionFilterProp: u = 'title', allowClear: d = !0, addon: f } = r,
          h = n(r, ['items', 'placeholder', 'showSearch', 'optionFilterProp', 'allowClear', 'addon']), { mode: m } = h
        return t ? o.createElement('span', { style: {} }, s.getItemLabelByValue(l, e, m)) : o.createElement(o.Fragment, null, o.createElement(a.Select, Object.assign({}, h, {
          placeholder: c,
          value: e,
          optionFilterProp: 'label' === u ? 'title' : u,
          showSearch: p,
          allowClear: d,
          onChange: this.onChange,
        }), Array.isArray(l) && l.map(e => o.createElement(i, {
          key: e.value,
          title: e.label,
          disabled: void 0 === e.value,
        }, e.label)), !Array.isArray(l) && this.renderGroup(l)))
      }
    }

    t.default = c
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(4), s = r(1), i = r(2)

    class l extends o.PureComponent {
      constructor() {
        super(...arguments), this.FORMAT = 'HH:mm', this.onChange = e => {
          const { format: t = this.FORMAT } = this.props.props
          let r = i.getTargetValue(e)
          i.notEmptyValue(r) && (r = a(r).format(t))
          const { name: n } = this.props, { beforeChange: o, onChange: s } = this.props.props
          o && (r = o(n, r)), s && s(n, r), this.props.onChange(n, r)
        }, this.staticTime = (e, t) => e ? '' : a(e).format(t)
      }

      render() {
        const { value: e, readOnly: t, props: r } = this.props, { format: l = this.FORMAT, addon: c } = r,
          p = n(r, ['format', 'addon']), u = i.notEmptyValue(e) ? a(i.simpleClone(e), l) : void 0
        return t ? this.staticTime(e, l) : o.createElement(o.Fragment, null, o.createElement(s.TimePicker, Object.assign({ value: u }, p, {
          format: l,
          onChange: this.onChange,
        })))
      }
    }

    t.default = l
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(4), s = r(1), i = r(2)

    class l extends o.PureComponent {
      constructor() {
        super(...arguments), this.FORMAT = 'YYYY-MM-DD', this.FORMAT_TIME = 'YYYY-MM-DD HH:mm', this.onChange = e => {
          const { showTime: t } = this.props.props
          let r = i.getTargetValue(e)
          r = i.notEmptyValue(r[0]) ? t ? [a(r[0]).valueOf(), a(r[1]).valueOf()] : [a(a(r[0]).format('YYYY-MM-DD 00:00:00')).valueOf(), a(a(r[1]).format('YYYY-MM-DD 23:59:59')).valueOf()] : null
          const { name: n } = this.props, { beforeChange: o, onChange: s } = this.props.props
          o && (r = o(n, r)), s && s(n, r), this.props.onChange(n, r)
        }, this.staticTime = (e, t) => e ? '' : a(e).format(t), this.showTime = (e, t) => e[0] && e[1] ? `${this.staticTime(e[0], t)} ~ ${this.staticTime(e[1], t)}` : null
      }

      render() {
        const { value: e, readOnly: t, props: r } = this.props, { format: l, addon: c } = r,
          p = n(r, ['format', 'addon']), u = l || (p.showTime ? this.FORMAT_TIME : this.FORMAT)
        let d = [null, null]
        return e && 'Array' === e.constructor.name && e.length > 0 && ((d = i.simpleClone(e))[0] = a(e[0]), d[1] = a(e[1])), t ? this.showTime(d, u) : o.createElement(o.Fragment, null, o.createElement(s.DatePicker.RangePicker, Object.assign({}, p, {
          format: u,
          value: d,
          onChange: this.onChange,
        })))
      }
    }

    t.default = l
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(4), s = r(1), i = r(2)

    class l extends o.PureComponent {
      constructor() {
        super(...arguments), this.FORMAT = 'YYYY-MM-DD', this.FORMAT_TIME = 'YYYY-MM-DD HH:mm', this.onChange = e => {
          let t = i.getTargetValue(e)
          i.notEmptyValue(t) && (t = t ? t.valueOf() : t)
          const { name: r } = this.props, { beforeChange: n, onChange: o } = this.props.props
          n && (t = n(r, t)), o && o(r, t), this.props.onChange(r, t)
        }
      }

      render() {
        const { value: e, readOnly: t, props: r } = this.props, { format: i, addon: l } = r,
          c = n(r, ['format', 'addon']), p = i || (c.showTime ? this.FORMAT_TIME : this.FORMAT), u = e ? a(e) : void 0
        return t ? u && u.format(i) || null : o.createElement(o.Fragment, null, o.createElement(s.DatePicker, Object.assign({}, c, {
          format: p,
          value: u,
          onChange: this.onChange,
        })))
      }
    }

    t.default = l
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1)
    t.default = function(e) {
      const { readOnly: t, value: r, name: s } = e, { options: i, onChange: l, placeholder: c = '请选择' } = e.props,
        p = (t, r) => {
          l && l(s, t, r), e.onChange(s, t)
        }, u = e.props, { addon: d } = u, f = n(u, ['addon'])
      return t ? function e(t, r, n, o) {
        let a = n
        if (t && a < t.length) {
          const s = r.find(e => e.value === t[n])
          return s && o.push(s.label), s && s.children ? (a += 1, e(t, s.children, n, o)) : o.join(' / ')
        }
        return o.join(' / ')
      }(r, i, 0, []) : o.createElement(a.Cascader, Object.assign({}, f, { onChange: p, value: r, placeholder: c }))
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = r(16), i = r(17),
      l = o.createElement('div', null, o.createElement(a.Icon, { type: 'plus' }), o.createElement('div', { className: 'ant-upload-text' }, '上传')),
      c = o.createElement(a.Button, null, o.createElement(a.Icon, { type: 'upload' }), ' 上传')

    class p extends o.PureComponent {
      constructor() {
        super(...arguments), this.state = { previewVisible: !1, previewImage: '', errorMsg: '' }, this.onChange = e => {
          var t, r, n
          const { onChange: o, onUploaded: a, responseHandler: s } = this.props.props
          let i = [...e.fileList]
          i.forEach((e, t) => (e.response && (i[t] = s ? Object.assign(Object.assign({}, i[t]), {
            url: s.url(e.response),
            name: s.name(e.response),
          }) : Object.assign(Object.assign({}, i[t]), {
            url: e.response.headers.location,
            name: e.response.filename,
          })), e)), 'done' === e.file.status ? (this.props.props.getResponseData && this.props.props.getResponseData(e.file.response), this.setState({ errorMsg: '' })) : 'error' === e.file.status ? (i = [], this.setState({ errorMsg: (null === (n = null === (r = null === (t = e.file) || void 0 === t ? void 0 : t.response) || void 0 === r ? void 0 : r.invoice) || void 0 === n ? void 0 : n.message) || '上传错误, 请重试!' })) : e.file.status || (i = i.slice(0, i.length - 1)), this.props.onChange(this.props.name, i), o && o(i), a && a(i)
        }, this.onPreview = e => {
          this.setState({ previewVisible: !0, previewImage: e.url })
        }, this.handleCancel = () => {
          this.setState({ previewVisible: !1, previewImage: '' })
        }, this.customRequest = ({ file: e, onSuccess: t, onError: r, onProgress: n }) => {
          const { headers: o, action: a } = this.props.props, i = new FormData
          return i.append('file', e), s.default.post(a, i, { onUploadProgress: n, headers: o || {} }).then(e => {
            this.setState({ errorMsg: '' }), t(e)
          }, () => {
            this.setState({ errorMsg: '上传失败!' }), r()
          }), {
            abort() {
              this.setState({ errorMsg: '上传终止!' })
            },
          }
        }
      }

      beforeUpload(e, t) {
        const { maxFileSize: r = 10 } = this.props.props
        if (e.size / 1024 / 1024 > r) return this.setState({ errorMsg: `文件体积大小不超过${r}M` }), !1
        if ('img' === t) {
          const t = e.type
          return 'image/jpeg' === t || 'image/png' === t ? (this.setState({ errorMsg: '' }), !0) : (this.setState({ errorMsg: '仅支持上传jpg/png格式图片' }), !1)
        }
        this.setState({ errorMsg: '' })
      }

      render() {
        const { value: e = [], readOnly: t, props: r } = this.props, { maxFiles: s = 10, blobName: p = 'blob', fileType: u = 'img', showErrorMessage: d = !0, listType: f = 'picture-card', headers: h = {} } = r,
          m = 'picture-card' === f ? l : c, y = JSON.parse(JSON.stringify(e)), g = []
        y.forEach(e => {
          var t
          g.push(null === (t = e) || void 0 === t ? void 0 : t.url)
        }), y.forEach((e, t) => ('object' != typeof e && (y[t] = { uid: `${e}_${t}`, url: e }), e))
        const { addon: b } = r, v = n(r, ['addon'])
        return o.createElement('div', { style: { position: 'relative' } }, o.createElement(a.Upload, Object.assign({}, v, {
          key: p,
          name: p,
          headers: h,
          listType: f,
          fileList: y,
          showUploadList: !0,
          onChange: e => this.onChange(e),
          beforeUpload: e => this.beforeUpload(e, u),
          disabled: t,
          onPreview: this.onPreview,
          customRequest: this.customRequest,
        }), e.length >= s || t ? null : m), this.state.errorMsg && d && o.createElement('div', { className: 'upload-error' }, this.state.errorMsg), this.state.previewVisible && o.createElement(i.default, {
          url: g,
          showList: !1,
          onHide: this.handleCancel,
          current: this.state.previewImage,
        }))
      }
    }

    t.default = p, p.defaultProps = {}
  }, function(e, t) {
    e.exports = o
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const n = r(0), o = r(1)
    r(18)
    const { useState: a } = n
    t.default = function({ showList: e = !0, url: t = [], style: r = {}, current: s = '', onHide: i }) {
      let l = []
      t && (l = 'string' == typeof t ? [t] : t), l = l.filter(e => e)
      const [c, p] = a(!1), [u, d] = a(s), [f, h] = a(0), [m, y] = a(!0), [g, b] = a(!1), v = () => {
        i && i(), p(!1)
      }, O = e => {
        p(!0), y(!0), d(e)
      }
      return e || g || (O(s), b(!0)), n.createElement(n.Fragment, null, e && n.createElement('div', { className: 'react-conf-form-pic-row' }, l.map((e, t) => {
        const o = `${e}_${t}`
        return n.createElement('div', {
          role: 'link',
          tabIndex: t,
          key: o,
          className: 'react-conf-form-pic-box',
          onClick: () => O(e),
          onKeyDown: () => O(e),
          style: r,
        }, n.createElement('img', { src: e, alt: '' }))
      })), c && n.createElement('div', { className: 'react-conf-form-pic-viewer' }, n.createElement('div', { className: 'react-conf-form-pic-spin react-conf-form-pic-white-spin' }, n.createElement(o.Spin, {
        spinning: m,
        tip: 'loading...',
        size: 'large',
      })), n.createElement('div', {
        className: 'react-conf-form-pic-container',
        onClick: v,
      }), n.createElement('div', { className: 'react-conf-form-pic-buttons' }, n.createElement('div', {
        className: 'react-conf-form-pic-icon',
        onClick: v,
      }, n.createElement(o.Icon, { type: 'close' })), l.length > 1 && n.createElement('div', {
        className: 'react-conf-form-pic-icon',
        onClick: () => {
          y(!0)
          let e = l.indexOf(u)
          e = (e -= 1) < 0 ? l.length - 1 : e, O(l[e])
        },
      }, n.createElement(o.Icon, { type: 'left' })), l.length > 1 && n.createElement('div', {
        className: 'react-conf-form-pic-icon',
        onClick: () => {
          y(!0)
          let e = l.indexOf(u)
          e = (e += 1) >= l.length ? 0 : e, O(l[e])
        },
      }, n.createElement(o.Icon, { type: 'right' })), n.createElement('div', {
        className: 'react-conf-form-pic-icon',
        onClick: () => {
          h(f + 1)
        },
      }, n.createElement(o.Icon, { type: 'redo' })), n.createElement('div', {
        className: 'react-conf-form-pic-icon',
        onClick: () => {
          h(f - 1)
        },
      }, n.createElement(o.Icon, { type: 'undo' }))), n.createElement('img', {
        alt: 'previmg',
        src: u,
        onLoad: () => {
          y(!1)
        },
        style: { transform: `translate(-50%, -50%) rotate(${90 * f}deg)`, opacity: m ? 0 : 1 },
        className: 'react-conf-form-pic-img-container',
      })))
    }
  }, function(e, t, r) {
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1)
    t.default = function(e) {
      const t = e.props, { addon: r } = t, s = n(t, ['addon'])
      return o.createElement(a.AutoComplete, Object.assign({}, s, {
        onChange: t => {
          e.props.onChange && e.props.onChange(e.name, t), e.onChange && e.onChange(e.name, t)
        },
      }))
    }
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const n = r(0), o = r(3)
    t.default = function(e) {
      return n.createElement(o.default, Object.assign({}, e, { type: 'password' }))
    }
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const n = r(0), o = r(3)
    t.default = function(e) {
      return n.createElement(o.default, Object.assign({}, e, { type: 'number' }))
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = r(2)

    class i extends o.PureComponent {
      constructor() {
        super(...arguments), this.onChange = e => {
          var t
          const r = e && e.target
          let n
          n = r instanceof HTMLElement || s.notEmptyValue(null === (t = r) || void 0 === t ? void 0 : t.value) ? r.value : e
          const { name: o } = this.props, { beforeChange: a, onChange: i } = this.props.props
          a && (n = a(o, n)), i && i(o, n), this.props.onChange(o, n)
        }
      }

      render() {
        const { value: e, readOnly: t, props: r } = this.props, s = r.autoComplete || 'off', { addon: i } = r,
          l = n(r, ['addon'])
        return t ? e || null : o.createElement(o.Fragment, null, o.createElement(a.Input.TextArea, Object.assign({ placeholder: '请输入' }, l, {
          value: e,
          onChange: this.onChange,
          autoComplete: s,
        })))
      }
    }

    t.default = i
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(2), s = r(1)
    t.default = function(e) {
      const { value: t, readOnly: r, onChange: i, name: l, style: c = {} } = e, { options: p = [] } = e.props,
        u = e.props, { addon: d } = u, f = n(u, ['addon'])
      return r ? a.getItemLabelByValue(p, t) : o.createElement('div', { style: c }, o.createElement(s.Radio.Group, Object.assign({}, f, {
        value: t,
        onChange: t => {
          const r = a.getTargetValue(t)
          i(l, r), e.props.onChange && e.props.onChange(l, r)
        },
      })))
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(2), s = r(1)
    t.default = function(e) {
      const { value: t, readOnly: r, onChange: i, name: l } = e, { options: c = [], checkAllAble: p = !1 } = e.props,
        u = e.props, { addon: d } = u, f = n(u, ['addon'])
      return r ? a.getItemLabelByValue(c, t) : o.createElement(o.Fragment, null, p && o.createElement(s.Checkbox, {
        checked: (e => a.notEmptyValue(e) && e.length === c.length)(t),
        onChange: t => {
          const r = []
          t.target.checked && c.forEach(e => r.push(e.value)), i(l, r), e.props.onChange && e.props.onChange(l, r)
        },
      }, '全选  '), o.createElement(s.Checkbox.Group, Object.assign({}, f, {
        value: t, onChange: t => {
          const r = a.getTargetValue(t)
          i(l, r), e.props.onChange && e.props.onChange(l, r)
        },
      })))
    }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1)

    class s extends o.Component {
      constructor() {
        super(...arguments), this.onChange = e => {
          this.props.onChange && this.props.onChange(this.props.name, e), this.props.props.onClick && this.props.props.onClick(this.props.data)
        }
      }

      render() {
        const { value: e } = this.props, t = this.props.props, { onClick: r } = t, s = n(t, ['onClick'])
        return o.createElement(o.Fragment, null, o.createElement(a.Switch, Object.assign({}, s, {
          checked: e,
          onChange: this.onChange,
        })))
      }
    }

    t.default = s
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(2)
    t.default = new class {
      constructor() {
        this.validators = {
          required: { validator: e => o.notEmptyValue(e) && e.length > 0, errorMsg: '必填' },
          min_length: { validator: (e, t) => e && e.length >= t, errorMsg: e => `长度不小于${e}` },
          max_length: { validator: (e, t) => e && e.length <= t, errorMsg: e => `长度不大于${e}` },
          length: { validator: (e, t) => e && e.length === t, errorMsg: e => `长度必须为${e}` },
          mobile: { validator: e => /^1\d{10}/.test(e), errorMsg: '请输入正确11位手机号' },
          number: { validator: e => /\d/.test(e), errorMsg: '必须位数字格式' },
          int: { validator: e => !/\D/.test(e), errorMsg: '必须为整数' },
          positive_number: { validator: e => parseFloat(e) > 0, errorMsg: '必须为正数' },
          not_negative: { validator: e => parseFloat(e) >= 0, errorMsg: '不能为负数' },
          min: { validator: (e, t) => parseFloat(e) >= t, errorMsg: e => `必须大于或等于${e}` },
          more_than: { validator: (e, t) => parseFloat(e) > t, errorMsg: e => `必须大于${e}` },
          max: { validator: (e, t) => parseFloat(e) <= t, errorMsg: e => `必须小于或等于${e}` },
          less_than: { validator: (e, t) => parseFloat(e) < t, errorMsg: e => `必须小于${e}` },
          price: {
            validator: e => {
              if (!/\d/.test(e)) return !1
              const t = e.toString()
              if (-1 !== t.indexOf('.')) {
                const e = t.split('.')
                if (e.length > 2) return !1
                if (e[1].length > 2) return !1
              }
              return !0
            }, errorMsg: '必须要符合货币格式,如 10.23',
          },
          price_format: {
            validator: (e, t = 8) => {
              let r = ''
              return o.notEmptyValue(e) && (r = e.toString()), new RegExp(`^(\\+|\\-)?[0-9]{1,${t}}(\\.[0-9]{1,2})?$`).test(r)
            }, errorMsg: (e = 6) => `最大${e}位整数，小数不超过2位`,
          },
          positive_max_length: {
            validator: (e, t) => {
              if (parseFloat(e) !== e) return !1
              const r = e.toString()
              if (r && r.length > t) if (-1 !== r.indexOf('.')) {
                if (r.split('.')[0].length > t) return !1
              }
              else if (r.length > t) return !1
              return !0
            }, errorMsg: e => `整数长度不大于${e}`,
          },
          telephone: { validator: e => /^0\d{2,3}-\d{7,8}$/.test(e), errorMsg: '需符合（区号-电话号码）的格式' },
          email_suffix: {
            validator: e => {
              if (!e) return !1
              return /^@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)
            }, errorMsg: '请输入正确的邮箱后缀(包括@)',
          },
          email: {
            validator: e => {
              return /[a-z0-9!#$%&'*+"=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+"=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)
            }, errorMsg: '请输入正确的邮箱',
          },
          username: { validator: e => /^([a-zA-Z0-9_-]{5,20})$/.test(e), errorMsg: '由长度为5～20位的数字、字母组成' },
          password: {
            validator: e => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S][^\u4e00-\u9fa5]{6,20}$/.test(e),
            errorMsg: '由长度为6～16位的数字、大小字母以及符号组成',
          },
          id_card: { validator: e => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e), errorMsg: '身份证号码不符合' },
        }
      }

      extendValidators(e) {
        e.forEach(e => {
          const { name: t } = e, r = n(e, ['name'])
          this.validators[t] = r
        })
      }

      check(e, t) {
        let r = e, n = { validated: !0, msg: '' }
        return t && t instanceof Array ? ('string' == typeof r && (r = r.trim()), t.some(e => {
          var t
          let a, s = !0, i = []
          if ('required' === e ? (o.notEmptyValue(r) && (r = r.toString()), s = (a = this.validators[e]).validator(r)) : o.notEmptyValue(r) && (-1 !== e.indexOf(':') ? (i = e.split(':'), s = (a = this.validators[i[0]]).validator(r, i[1])) : s = (a = this.validators[e]).validator(r)), !s) {
            const e = null === (t = a) || void 0 === t ? void 0 : t.errorMsg
            return n = { validated: !1, msg: 'function' == typeof e ? e(i[1]) : e }, !0
          }
          return !1
        }), n) : n
      }
    }
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    const n = r(0), o = r(1), a = r(28), s = r(5)
    t.default = e => {
      const { gutter: t = a.DEFAULT_GUTTER, type: r, className: i = '', fields: l, data: c, onChange: p, validation: u, labelDirection: d } = e
      return n.createElement(o.Row, { gutter: t }, n.createElement('div', { className: `${i} ${d}` }, 'FormButtons' !== r && l.map(t => {
        const { key: r, span: i = e.span || a.DEFAULT_SPAN, offset: l = 0, label: d, display: f = !0 } = t, { rules: h, addon: m } = t.props
        return f ? n.createElement(o.Col, {
          key: t.key,
          span: i,
          offset: l,
        }, n.createElement(o.Form.Item, {
          className: t.className,
          label: -1 === ['button', 'render'].indexOf(t.type) ? d : void 0,
          required: h && -1 !== h.indexOf('required'),
          validateStatus: u[r] && !u[r].validated ? 'error' : '',
          help: u[r] && !u[r].validated ? u[r].msg : '',
        }, n.createElement(s.default, Object.assign({}, t, {
          name: r,
          key: r,
          data: c,
          onChange: p,
          value: c[r],
        })), m && m(c))) : null
      })))
    }
  }, function(e, t, r) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = {}, t.DEFAULT_SPAN = 8, t.DEFAULT_GUTTER = 16
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(30)

    function s(e) {
      const { style: t, align: r, type: s } = e, i = n(e, ['style', 'align', 'type']),
        l = Object.assign({ textAlign: r || 'center' }, t)
      return o.createElement('div', {
        className: 'react-conf-form-button-wrapper',
        style: l,
      }, o.createElement(a.default, Object.assign({}, i)))
    }

    t.default = s, s.defaultProps = { display: !0, style: {} }
  }, function(e, t, r) {
    'use strict'
    var n = this && this.__rest || function(e, t) {
      var r = {}
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0
        for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
      }
      return r
    }
    Object.defineProperty(t, '__esModule', { value: !0 })
    const o = r(0), a = r(1), s = ['default', 'primary', 'danger', 'link', 'ghost']
    t.default = function(e) {
      const { gutter: t = 16, fields: r } = e
      return r.map((r, i) => {
        const { key: l, label: c = '', display: p = !0 } = r,
          u = r.props || {}, { type: d = 'default', className: f = '', onClick: h, addon: m, style: y = {} } = u,
          g = n(u, ['type', 'className', 'onClick', 'addon', 'style'])
        let b
        const v = s.findIndex(e => e === d)
        return -1 !== v && (b = s[v]), g.block && (y.display = 'block', y.width = '100%'), p ? o.createElement('span', {
          key: l,
          style: y,
        }, i > 0 && o.createElement('span', {
          className: 'react-conf-form-button-space-between',
          style: { width: t },
        }), o.createElement(a.Button, Object.assign({
          type: b,
          className: f,
        }, g, { onClick: () => e.onButtonClick(l, h) }), c), m && m(e.data)) : null
      })
    }
  }, function(e, t, r) {
  }])
}))
