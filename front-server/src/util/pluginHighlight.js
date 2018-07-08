/* eslint-disable */ 
import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/darcula.css'

let Highlight = {}

Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    el.querySelectorAll('pre code').forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}

export default Highlight
