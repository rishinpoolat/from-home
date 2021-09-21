"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var shopSchema = _mongoose["default"].Schema({
  shopName: {
    type: String,
    required: true
  },
  district: {
    type: Array,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  shopPhone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  logo: {
    type: String,
    "default": ""
  },
  banner: {
    type: String,
    "default": ""
  },
  description: {
    type: String,
    "default": ""
  }
}, {
  timestamps: true
});

var Shops = _mongoose["default"].model('Shops', shopSchema);

var _default = Shops;
exports["default"] = _default;