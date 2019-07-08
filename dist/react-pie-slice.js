"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PieSlice = function PieSlice(props) {
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

  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
    return ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y, "L", x, y, "L", start.x, start.y].join(" ");
  };

  var description = describeArc(centerX, centerY, radius, start, end);
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

PieSlice.propTypes = {
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
PieSlice.defaultProps = {
  color: "white",
  opacity: 1.0,
  strokeWidth: 1.0,
  strokeColor: "black",
  strokeOpacity: 1.0
};
var _default = PieSlice;
exports["default"] = _default;

