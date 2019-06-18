"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactSlice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactSlice, _React$Component);

  function ReactSlice() {
    _classCallCheck(this, ReactSlice);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactSlice).apply(this, arguments));
  }

  _createClass(ReactSlice, [{
    key: "toRadian",
    value: function toRadian(degrees) {
      return Math.PI * degrees / 180;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          radius = _this$props.radius,
          start = _this$props.start,
          end = _this$props.end,
          color = _this$props.color,
          opacity = _this$props.opacity,
          strokeWidth = _this$props.strokeWidth,
          strokeColor = _this$props.strokeColor,
          strokeOpacity = _this$props.strokeOpacity,
          mouseEnter = _this$props.mouseEnter,
          mouseLeave = _this$props.mouseLeave;
      var radians = this.toRadian(end - start - 90);
      var destX = center + radius * Math.cos(radians);
      var destY = center + radius * Math.sin(radians);
      var transformation = "rotate(".concat(start, " ").concat(center, " ").concat(center, ")");
      var description = ['M', center, center, 'L', center, center - radius, 'A', radius, radius, 0, 0, 1, destX, destY, 'z'].join(' ');
      var styles = {
        graph: {
          fill: color,
          stroke: strokeColor,
          opacity: opacity
        },
        stroke: {
          strokeWidth: strokeWidth,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeOpacity: strokeOpacity
        }
      };
      var props = {
        transform: transformation,
        style: styles.graph,
        onMouseEnter: mouseEnter,
        onMouseLeave: mouseLeave
      };
      return _react["default"].createElement("g", props, _react["default"].createElement("path", {
        d: description,
        style: styles.stroke
      }));
    }
  }]);

  return ReactSlice;
}(_react["default"].Component);

ReactSlice.propTypes = {
  center: _react["default"].PropTypes.number.isRequired,
  radius: _react["default"].PropTypes.number.isRequired,
  start: _react["default"].PropTypes.number.isRequired,
  end: _react["default"].PropTypes.number.isRequired,
  color: _react["default"].PropTypes.string,
  opacity: _react["default"].PropTypes.number,
  strokeWidth: _react["default"].PropTypes.number,
  strokeColor: _react["default"].PropTypes.string,
  strokeOpacity: _react["default"].PropTypes.number,
  mouseEnter: _react["default"].PropTypes.func,
  mouseLeave: _react["default"].PropTypes.func
};
ReactSlice.defaultProps = {
  color: 'white',
  opacity: 1.0,
  strokeWidth: 1.0,
  strokeColor: 'black',
  strokeOpacity: 1.0
};
var _default = ReactSlice;
exports["default"] = _default;

