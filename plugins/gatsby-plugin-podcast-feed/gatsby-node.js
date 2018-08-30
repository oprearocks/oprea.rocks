'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _podcast = require('podcast');

var _podcast2 = _interopRequireDefault(_podcast);

var _internals = require('./internals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PUBLIC_PATH = './public';

exports.onPostBuild = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, pluginOptions) {
    var graphql = _ref.graphql,
        pathPrefix = _ref.pathPrefix;

    var options, _defaultOptions$optio, query, serialize, output, rest, feed, outputFilePath, queryRecords, xml;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _extends({}, pluginOptions);

            delete options.plugins;
            delete options.createLinkInHead;

            _defaultOptions$optio = _extends({}, _internals.defaultOptions, options), query = _defaultOptions$optio.query, serialize = _defaultOptions$optio.serialize, output = _defaultOptions$optio.output, rest = _objectWithoutProperties(_defaultOptions$optio, ['query', 'serialize', 'output']);
            feed = new _podcast2.default(rest);
            outputFilePath = _path2.default.join(PUBLIC_PATH, output);
            _context.next = 8;
            return (0, _internals.runQuery)(graphql, query);

          case 8:
            queryRecords = _context.sent;


            serialize(queryRecords).forEach(function (u) {
              return feed.addItem(u);
            });
            xml = feed.buildXml();
            _context.next = 13;
            return (0, _internals.writeFile)(outputFilePath, xml);

          case 13:
            return _context.abrupt('return', _context.sent);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();