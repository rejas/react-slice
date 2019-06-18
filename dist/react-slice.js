"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactSlice = function ReactSlice(props) {
  var centerX = props.centerX,
      centerY = props.centerY,
      radius = props.radius,
      start = props.start,
      end = props.end,
      color = props.color,
      opacity = props.opacity,
      strokeWidth = props.strokeWidth,
      strokeColor = props.strokeColor,
      strokeOpacity = props.strokeOpacity,
      mouseEnter = props.mouseEnter,
      mouseLeave = props.mouseLeave;

  var toRadian = function toRadian(degrees) {
    return Math.PI * degrees / 180;
  };

  var radians = toRadian(end - start - 90);
  var destX = centerX + radius * Math.cos(radians);
  var destY = centerY + radius * Math.sin(radians);
  var transformation = "rotate(".concat(start, " ").concat(centerX, " ").concat(centerY, ")");
  var description = ["M", centerX, centerY, "L", centerX, centerY - radius, "A", radius, radius, 0, 0, 1, destX, destY, "z"].join(" ");
  var styles = {
    graph: {
      fill: color,
      stroke: strokeColor,
      opacity: opacity
    },
    stroke: {
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: strokeOpacity
    }
  };
  var gprops = {
    transform: transformation,
    style: styles.graph,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  };
  return _react["default"].createElement("svg", {
    className: props.className
  }, _react["default"].createElement("g", gprops, _react["default"].createElement("path", {
    d: description,
    style: styles.stroke
  })));
};

ReactSlice.propTypes = {
  centerX: _propTypes["default"].number.isRequired,
  centerY: _propTypes["default"].number.isRequired,
  radius: _propTypes["default"].number.isRequired,
  start: _propTypes["default"].number.isRequired,
  end: _propTypes["default"].number.isRequired,
  color: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  strokeColor: _propTypes["default"].string,
  strokeOpacity: _propTypes["default"].number,
  mouseEnter: _propTypes["default"].func,
  mouseLeave: _propTypes["default"].func
};
ReactSlice.defaultProps = {
  color: "white",
  opacity: 1.0,
  strokeWidth: 1.0,
  strokeColor: "black",
  strokeOpacity: 1.0
};
var _default = ReactSlice;
exports["default"] = _default;

