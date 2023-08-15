// Now we are in your app, let’s imagine it’s a React app
"use client";
// This import doesn’t include coordinates of countries: it’s lighter
// that 'dotted-map', so especially useful in fronts.
// However, you must give it a map you have pre-computed before.
import DottedMap from 'dotted-map';

// Basically myMap.js contains something like:
//
// const MyMapString = 'the string mapJsonString that you got on the first step';
// export default MyMapString;
// import MyMapString from './myMap';

export const VectorMap: React.FC<any> = () => {
  // It’s safe to re-create the map at each render, because of the
  // pre-computation it’s super fast ⚡️
  const map = new DottedMap({ width: 20, countries: ['IND'], grid: 'diagonal' });

  map.addPin({
    lat: 19.0760,
    lng: 72.877426,
    svgOptions: { color: '#00FF00', radius: 0.4 },
  });

  const svgMap = map.getSVG({
    radius: 0.1,
    color: '#423B38',
    shape: 'circle',
    backgroundColor: '#020300',
  });

  return (
    <div style={{ zIndex: 0, transform: "rotate(-45deg) skew(15deg, 15deg)"}}>
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />
    </div>
  );
};