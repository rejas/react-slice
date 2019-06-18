import React from "react";
import PropTypes from "prop-types";

const PieSlice = props => {
  const {
    centerX,
    centerY,
    radius,
    start,
    end,
    color,
    opacity,
    strokeWidth,
    strokeColor,
    strokeOpacity,
    mouseEnter,
    mouseLeave
  } = props;

  const toRadian = degrees => {
    return (Math.PI * degrees) / 180;
  };

  let radians = toRadian(end - start - 90);
  let destX = centerX + radius * Math.cos(radians);
  let destY = centerY + radius * Math.sin(radians);
  let transformation = `rotate(${start} ${centerX} ${centerY})`;
  let description = [
    "M",
    centerX,
    centerY,
    "L",
    centerX,
    centerY - radius,
    "A",
    radius,
    radius,
    0,
    0,
    1,
    destX,
    destY,
    "z"
  ].join(" ");
  let styles = {
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

  let gprops = {
    transform: transformation,
    style: styles.graph,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  };

  return (
    <svg className={props.className}>
      <g {...gprops}>
        <path d={description} style={styles.stroke} />
      </g>
    </svg>
  );
};

PieSlice.propTypes = {
  centerX: PropTypes.number.isRequired,
  centerY: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeOpacity: PropTypes.number,
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func
};

PieSlice.defaultProps = {
  color: "white",
  opacity: 1.0,
  strokeWidth: 1.0,
  strokeColor: "black",
  strokeOpacity: 1.0
};

export default PieSlice;
