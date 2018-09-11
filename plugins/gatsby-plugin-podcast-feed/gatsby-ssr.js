'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsbyLink = require('gatsby-link');

var _internals = require('./internals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINK_REL = 'alternate';
var DATA_TYPE = 'application/rss+xml';

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _defaultOptions$plugi = _extends({}, _internals.defaultOptions, pluginOptions),
      output = _defaultOptions$plugi.output,
      createLinkInHead = _defaultOptions$plugi.createLinkInHead;

  if (!createLinkInHead) {
    return;
  }

  if (output.charAt(0) !== '/') {
    output = '/' + output;
  }

  setHeadComponents([_react2.default.createElement('link', {
    key: 'gatsby-plugin-podcast-feed',
    rel: LINK_REL,
    type: DATA_TYPE,
    href: (0, _gatsbyLink.withPrefix)(output)
  })]);
};
