
var width = 1000,
    height = 1000;

var svg = d3.select("body").append("svg")
               .attr("width",width)
               .attr("height",height)

d3.json("china.geojson", function(data){
  var group = svg.selectAll('g')
                 .data(data.features)
                 .enter()
                 .append('g')

  var projection = d3.geoMercator()
                     .center([107, 31])
                     .scale(500)
                     .translate([width/2, height/2])

                     /////d3.geoOrthographic()
                     // .clipAngle(110)
                     // .precision(0.1)
                     // .scale(0.5)
                     // .translate([10,10]);
  var path = d3.geoPath()
               .projection(projection);

  var areas = group.append('path')
                   .attr('d', path)
                   .attr('class','area')
                   .attr('fill','steelblue');
});

d3.json("USA.json", function(data){
  var group = svg.selectAll('g')
                 .data(data.features)
                 .enter()
                 .append('g')

  var projection = d3.geoOrthographic()
                      .center([107, 31])
                      .scale(850)
                      // .translate([width/2, height/2]);
                     // .scale(0.5)
                     // .translate([10,10]);
  var path = d3.geoPath()
               .projection(projection);

  var areas = group.append('path')
                    .attr('d', path)
                    .attr('class','area')
                    .attr('fill','steelblue');
});
