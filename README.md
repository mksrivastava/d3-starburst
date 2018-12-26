# d3-starburst
Starburst is ideal for displaying two-level hierarchical data with historic year range using d3 JS library. The first level of the hierarchy is represented by one ring or circle and second level of the data in redial format. A starburst chart without any historic date range looks like similar to donut chart.
However, a starburst chart with two levels of categories shows how the redial ring relates to the inner rings and plots the bubbles (second level category on basis of the year) over the first level of categories which shows where it belongs in between year range circles. 
In starburst, we have various concentric rings over the first level of a category which actually split the first level of a category in the period of 5 years. Year circle starts from given minimum year range up to 20 years.
So if any category falls outside of upper range the bubble will plot after the outer most ring and if category falls outside of lower range then the bubble will plot near to innermost ring.
On hover of second level category’s name or on a bubble, details of category displays in the center of charts.

This component is based on [an example](https://bl.ocks.org/kerryrodden/7090426) by [Kerry Rodden](https://bl.ocks.org/kerryrodden), who based his on an interactive [D3 sunburst visualization](http://bl.ocks.org/mbostock/4063423).

***
<p align="center" border="1px solid black">
  <img src="https://github.com/mksrivastava/d3-starburst/blob/master/img/chart.PNG">
</p>
***
NOTE: This requires d3 version 3.

