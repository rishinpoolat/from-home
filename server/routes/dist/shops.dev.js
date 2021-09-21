"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _Shops = _interopRequireDefault(require("../models/Shops.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // create shop 


router.post('/shopregister', function _callee(req, res) {
  var newShop, savedShop;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          newShop = new _Shops["default"](req.body);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(newShop.save());

        case 4:
          savedShop = _context.sent;
          res.status(200).json(savedShop);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          res.status(500).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
}); // update shop 

router.put('/:id', function _callee2(req, res) {
  var shop, updatedShop;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Shops["default"].findById(req.params.id));

        case 3:
          shop = _context2.sent;

          if (!(shop.email === req.body.email)) {
            _context2.next = 17;
            break;
          }

          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(_Shops["default"].findByIdAndUpdate(req.params.id, {
            $set: req.body
          }, {
            "new": true
          }));

        case 8:
          updatedShop = _context2.sent;
          res.status(200).json(updatedShop);
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](5);
          res.status(500).json(_context2.t0);

        case 15:
          _context2.next = 18;
          break;

        case 17:
          res.status(401).json('you can update only your shop');

        case 18:
          _context2.next = 23;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t1 = _context2["catch"](0);
          res.status(500).json(_context2.t1);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 20], [5, 12]]);
}); // delete shop

router["delete"]('/:id', function _callee3(req, res) {
  var shop;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_Shops["default"].findById(req.params.id));

        case 3:
          shop = _context3.sent;

          if (!(shop.email === req.body.email)) {
            _context3.next = 16;
            break;
          }

          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(shop["delete"]());

        case 8:
          res.status(200).json('shop has been deleted');
          _context3.next = 14;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](5);
          res.status(500).json(_context3.t0);

        case 14:
          _context3.next = 17;
          break;

        case 16:
          res.status(401).json('you can delete only your shop');

        case 17:
          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t1 = _context3["catch"](0);
          res.status(500).json(_context3.t1);

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 19], [5, 11]]);
}); // get shop

router.get('/:id', function _callee4(req, res) {
  var shop;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Shops["default"].findById(req.params.id));

        case 3:
          shop = _context4.sent;
          res.status(200).json(shop);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // get all shops 

router.get('/', function _callee5(req, res) {
  var shopname, district, shops;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          shopname = req.query.shop;
          district = req.query.district;
          _context5.prev = 2;

          if (!shopname) {
            _context5.next = 9;
            break;
          }

          _context5.next = 6;
          return regeneratorRuntime.awrap(_Shops["default"].find({
            shopName: shopname
          }));

        case 6:
          shops = _context5.sent;
          _context5.next = 18;
          break;

        case 9:
          if (!district) {
            _context5.next = 15;
            break;
          }

          _context5.next = 12;
          return regeneratorRuntime.awrap(_Shops["default"].find({
            district: {
              $in: [district]
            }
          }));

        case 12:
          shops = _context5.sent;
          _context5.next = 18;
          break;

        case 15:
          _context5.next = 17;
          return regeneratorRuntime.awrap(_Shops["default"].find());

        case 17:
          shops = _context5.sent;

        case 18:
          res.status(200).json(shops);
          _context5.next = 24;
          break;

        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json(_context5.t0);

        case 24:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 21]]);
});
var _default = router;
exports["default"] = _default;