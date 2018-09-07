var data = ["a","b","c"]
var bar = [10,20,30,40,50];
var min = d3.min(bar),
    max = d3.max(bar);

var margin = {top:20, right:30, bottom:20, left:30},
    width = 400 - margin.right - margin.left,
    height = 400 - margin.top - margin.bottom;

var barWidth = 20,
    barGap = 20;

var fruit = d3.selectAll('p')

fruit.data(data)
     .text(function(d, i){
       return d;
     })
     .style('color','red')
     .remove()

var xScale = d3.scaleLinear()
               .domain([0, bar.length])
               .range([0,width]);
               console.log(xScale);

var xAxis = d3.axisBottom(xScale)
             .ticks(bar.length);

var yScale = d3.scaleLinear()
               .domain([0, max])
               .range([0, height]);
               console.log(yScale(10));

var yAxisScale = d3.scaleLinear()
               .domain([0,max])
               .range([height-margin.bottom,margin.top]);

var yAxis = d3.axisLeft(yAxisScale)
              .ticks(5);

var svg = d3.select('body')
            .append('svg')
            .attr('width',width+margin.left+margin.right)
            .attr('height',height+margin.top+margin.bottom);

var rects = svg.selectAll('rect')
   .data(bar)
   .enter()
   .append('rect')
   .attr('transform','translate('+margin.left+','+margin.top+')')
   .attr('x',function(d, i){ return i*(barWidth+barGap); } )
   .attr('y',function(d, i){ return height - yScale(d) - margin.bottom; })
   .attr('width', barWidth)
   .attr('height',function(d, i){ return yScale(d); })
   .attr('fill','pink');

// rects.transition()
//      .duration(3000)
//      .style('fill','red')
//      .ease(d3.easeCircle)

svg.append('g')
   .call(yAxis)
   .attr('transform','translate('+margin.left+',0)')
   .attr('fill','none')
   .attr('stroke','black')
   .attr('shape-rendering','crispEdges')
   .attr('font-family','ariel')
   .attr('font-size','8px');

svg.append('g')
  .call(xAxis)
  .attr('transform','translate('+margin.left+','+(height-margin.bottom)+')')
  .attr('fill','none')
  .attr('stroke','black')
  .attr('shape-rendering','crispEdges')
  .attr('font-family','ariel')
  .attr('font-size','8px');
