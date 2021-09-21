"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var router = _express["default"].Router(); // user update 


router.put('/:id', function _callee(req, res) {
  var salt, updatedUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.body.userId === req.params.id)) {
            _context.next = 21;
            break;
          }

          if (!req.body.password) {
            _context.next = 8;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].genSalt(10));

        case 4:
          salt = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(req.body.password, salt));

        case 7:
          req.body.password = _context.sent;

        case 8:
          _context.prev = 8;
          _context.next = 11;
          return regeneratorRuntime.awrap(_User["default"].findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 11:
          updatedUser = _context.sent;
          res.status(200).json(updatedUser);
          res.status(200).json(updatedUser);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](8);
          res.status(500).json(_context.t0);

        case 19:
          _context.next = 22;
          break;

        case 21:
          res.status(401).json('you can only update your account');

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[8, 16]]);
}); // delete user

router["delete"]('/:id', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.body.userId === req.params.id)) {
            _context2.next = 12;
            break;
          }

          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_User["default"].findByIdAndDelete(req.params.id));

        case 4:
          res.status(200).json('User has been deleted...');
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json(_context2.t0);

        case 10:
          _context2.next = 13;
          break;

        case 12:
          res.status(401).json('you can only delete your account');

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
}); // get user

router.get('/:id', function _callee3(req, res) {
  var user, _user$_doc, password, others;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_User["default"].findById(req.params.id));

        case 3:
          user = _context3.sent;
          _user$_doc = user._doc, password = _user$_doc.password, others = _objectWithoutProperties(_user$_doc, ["password"]);
          res.status(200).json(others);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
var _default = router;
exports["default"] = _default;