'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultOptions = exports.runQuery = exports.writeFile = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _pify = require('pify');

var _pify2 = _interopRequireDefault(_pify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var writeFile = exports.writeFile = (0, _pify2.default)(_fs2.default.writeFile);

var runQuery = exports.runQuery = function runQuery(handler, query) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(', '));
    }

    return r.data;
  });
};

var defaultOptions = exports.defaultOptions = {
  query: '\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n      allContentfulPodcast(\n        limit: 1000\n      ) {\n        edges {\n          node {\n            title\n            subtitle\n            duration\n            explicit\n            url\n            publishedOn\n            keywords\n            description {\n              childMarkdownRemark {\n                html\n              }\n            }\n          }\n        }\n      }\n  }',
  output: '/podcast.xml',
  createLinkInHead: false,
  serialize: function serialize(_ref) {
    var site = _ref.site,
        allContentfulPodcast = _ref.allContentfulPodcast;
    return allContentfulPodcast.edges.map(function (_ref2) {
      var node = _ref2.node;
      return {
        title: node.title,
        description: node.description.childMarkdownRemark.html,
        url: node.url,
        date: node.publishedOn,
        itunesKeywords: node.keywords,
        itunesSubtitle: node.subtitle,
        itunesSummary: node.description.childMarkdownRemark.html,
        itunesDuration: node.duration,
        itunesExplicit: node.explicit || false,
        enclosure: {
          url: node.url,
          type: 'audio/mp3',
          lengths: node.duration
        }
      };
    });
  }
};