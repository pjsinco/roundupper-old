import Clipboard from './../node_modules/clipboard/dist/clipboard.min.js';

function updateHeights(context = '') {
  console.log('updatingHeights in ' + context);
  const splitLeft = document.querySelector('.split-left');
  const splitRight = document.querySelector('.split-right');

  if (!splitLeft || !splitRight) return;

  //console.log('sR sh: ' + splitRight.scrollHeight );
  //console.log('sR oh: ' + splitRight.offsetHeight );

  //splitLeft.style.height = 'auto';
  //splitRight.style.height = 'auto';

  /**
   * If we have scrollbars, make sure the height of that element
   * stretches the full length of the document body
   * This prevents white gaps in background fills on .split-left,
   * and .split-right.
   */
  if (splitRight.scrollHeight > splitRight.offsetHeight) {
    console.log('adding height to split-right');
    splitRight.style.height = document.body.scrollHeight + 'px';
  } else if (splitLeft.scrollHeight > splitLeft.offsetHeight) {
    console.log('adding height to split-left');
    splitLeft.style.height = document.body.scrollHeight + 'px';
  }
}

import { app } from './app-constants';

export default {
  updated: function () {
    updateHeights('updated');
  },

  filters: {
    stripSpaces: function (str) {
      return str.trim();
    },
  },

  mounted: function () {
    console.clear();

    this.handleVerticalRule();

    updateHeights('mounted');

    this.addSelectOnFocus();
    const splitLeft = document.querySelector('.split-left');
    const splitRight = document.querySelector('.split-right');

    if (!splitLeft || !splitRight) return;

    const $window = $(window);
    const $sidebar = $('#form');
    const $splitRight = $('.split-right');
    const $navbar = $('#nav');
    const stickValue = $navbar.height();

    $window.resize(updateHeights);

    $window.scroll(function () {
      if ($window.scrollTop() >= stickValue) {
        if (splitLeft.scrollHeight < splitRight.scrollHeight) {
          $sidebar.addClass('stick');
        } else {
          $splitRight.addClass('stick');
        }
      } else {
        $splitRight.removeClass('stick');
        $sidebar.removeClass('stick');
      }
    });
  },

  props: ['currentTemplate'],

  methods: {
    handleVerticalRule: function () {
      if (this.$root.currentRoute === '/') {
        document.body.classList.add('no-rule');
      } else {
        document.body.classList.remove('no-rule');
      }
    },

    addSelectOnFocus: function () {
      document.querySelectorAll('input[type=text]').forEach(function (input) {
        input.addEventListener('focus', function () {
          this.select();
        });
      });
    },

    reset: function () {
      Object.assign(this.$data, this.$options.data());
    },

    onMouseLeave: function () {
      document
        .getElementById('copyHtml')
        .classList.remove('tooltipped', 'tooltipped-w');
    },

    getRenderedHtml: function () {
      return document.getElementById('rendered').innerHTML;
    },

    collapseSelection: function (elementId) {
      const elem = document.getElementById(elementId);

      if (window.getSelection()) {
        window.getSelection().collapse(elem, 0);
      }
    },

    cloneHtml: function (html) {
      document.getElementById('clone').innerText = html;
    },

    cloneRenderedVersion: function () {
      const htmlVersion = document.getElementById('rendered');
    },

    popUpToast: function (title, message, color = '#1ccacd') {
      const toast = document.getElementById('toastContainer');
      document.getElementsByClassName('toast')[0].style.backgroundColor = color;
      toast.querySelector('.toast-title').innerText = title;
      toast.querySelector('.toast-message').innerText = message;
      toast.classList.add('active');

      window.setTimeout(() => {
        toast.classList.remove('active');
      }, 3000);
    },

    /**
     * Copy HTML of the rendered element
     *
     * @param {function} manipulate Function to execute on markup
     *   of the rendered element, such as find-replace.
     */
    copyHtml: function (manipulate = (html) => html) {
      this.collapseSelection('clone');

      const rawHtml = this.getRenderedHtml();

      let html = manipulate(rawHtml);

      this.cloneHtml(html);

      const clipboard = new Clipboard('#copyHtml', {
        target: function (trigger) {
          return document.getElementById('clone');
        },
      });

      clipboard.on(
        'success',
        function (evt) {
          this.clipboardSuccess(
            document.getElementById('copyHtml'),
            'HTML code copied',
            'The HTML code is copied to your clipboard. Ready to paste!',
            '#ff3366'
          );
          clipboard.destroy();
        }.bind(this)
      );
    },

    clipboardSuccess: function (
      el,
      title = 'Copied!',
      message = 'Ready to paste',
      color = '#1ccacd'
    ) {
      const rendered = document.getElementById('rendered');
      rendered.classList.add('animated', 'jello');

      rendered.addEventListener(
        'animationend',
        function (evt) {
          this.classList.remove('animated', 'jello');
        },
        { once: true }
      );

      this.popUpToast(title, message, color);

      //el.classList.add('tooltipped', 'tooltipped-w')
    },

    /**
     * Copy text version of the rendered element
     *
     * @param {string} text The text to copy
     */
    copyText: function (text) {
      const clipboard = new Clipboard('#copyTextVersion', {
        text: (trigger) => text,
      });

      clipboard.on(
        'success',
        function (evt) {
          this.clipboardSuccess(
            document.getElementById('copyTextVersion'),
            'Text version copied',
            'The text version is copied to your clipboard. Ready to paste!',
            '#1ccacd'
          );
          clipboard.destroy();
        }.bind(this)
      );
    },

    /**
     * Surround a term with the surround character
     *
     * @param {string} term The string to surround
     * @param {string} str The string in which to find the term
     * @param {string} surroundChar The character to surround the string
     */
    surround: function (term, str, surroundChar) {
      const re = new RegExp(term, 'g');
      return str.replace(re, surroundChar + '$&' + surroundChar);
    },

    /**
     * Navigate to a new page.
     *
     * @param { string } path  The new pathname, e.g. "/the-do"
     */
    navigate: function (path) {
      this.$root.currentRoute = path;
      window.history.pushState(null, null, path);
    },
  },
};
