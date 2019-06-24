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

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
      "L", x, y,
      "L", start.x, start.y
    ].join(" ");
  };

  let description = describeArc(centerX, centerY, radius, start, end );

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
