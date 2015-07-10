// source: cz.jscad

// producer: OpenJSCAD CLI 0.010
function main(){


return CAG.rectangle({center: [26.35,26.35], radius: [26.35,26.35]}).extrude({offset: [0, 0, 48.7], twistangle: 0,twiststeps: 2}).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,48.7],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([26.35,26.35,0])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,7.3],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([26.35,26.35,15])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,26.4],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([26.35,26.35,22.3])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,6.4],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([8.4,8.4,42.3])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,6.4],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([44.3,8.4,42.3])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,6.4],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([44.3,44.3,42.3])]).subtract([CSG.cylinder({start: [0,0,0], end: [0,0,6.4],radiusStart: 1, radiusEnd: 1, resolution: 5}).translate([8.4,44.3,42.3])]);
};