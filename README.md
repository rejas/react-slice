# Simple Slice
A simple component of a slice created in ReactJS and SVG.

# Usage
```javascript
<ReactSlice
  centerX={64}
  centerY={64}
  radius={32}
  start={0}
  end={30}
  opacity={1.0}
  color='blue'
/>
```

# Properties

```javascript
centerX: React.PropTypes.number // The distance from upper left corner of your screen in x-direction.
```

```javascript
centerY: React.PropTypes.number // The distance from upper left corner of your screen in y-direction.
```

```javascript
radius: React.PropTypes.number // The distance from the center to the edge of your slice.
```

```javascript
start: React.PropTypes.number // The starting angle of a slice in degrees.
```

```javascript
end: React.PropTypes.number // The ending angle of a slice in degrees.
```

```javascript
color: React.PropTypes.string // The color of the slice. Default: white
```

```javascript
opacity: React.PropTypes.number // The opacity of the slice. Default: 1.0
```

```javascript
strokeWidth: React.PropTypes.string // The width of the stroke. Default: 1.0
```

```javascript
strokeColor: React.PropTypes.string // The color of the stroke. Default: black
```

```javascript
strokeOpacity: React.PropTypes.string // The opacity of the stroke. Default: 1.0
```

```javascript
mouseEnter: React.PropTypes.func // A callback function to execute when the mouseenter is fired on a slice.
```

```javascript
mouseLeave: React.PropTypes.func // A callback function to execute when the mouseleave is fired on a slice.
```

# [Example](https://github.com/naush/simple-slice-example)
