$('#fromdatepicker').datepicker();
$('#todatepicker').datepicker();

function chart1(){
    chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        tooltip: {
          formatter: function () {
            return 'The value for <b>' + this.x + '</b> is <b>' + this.y /* + '</b>, in series ' + this.series.name;*/
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal'
          },
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        credits: {
          text: 'getcloudcherry.com',
          href: 'https://www.getcloudcherry.com/'
        },
        xAxis: [{
          categories: ['Jan 2017', 'Feb 2017', 'Mar 2017', 'May 2017',
            'Apr 2017',
            'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', 'Jan 2018',
            'Feb 2018', 'Mar 2018', 'Apr 2018', 'May 2018', 'June 2018'
          ],
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          min: 0,
          max: 5,
          title: {
            text: '',
          }
        }, { // Secondary yAxis
          title: {
            text: '',
          },
          min: 0,
          max: 3000,
          labels: {
            format: '{value}',
          },
          opposite: true
        }],
        legend: {
          enabled: true
        },
        credits: {
          text: 'getcloudcherry.com',
          href: 'https://www.getcloudcherry.com/'
        },
    
        series: [{
            name: 'Cumulative average',
            type: 'line',
    
            data: [3.721, 3.775, 3.806, 3.829, 3.837],
            color: '#888888',
            zIndex: 2
    
    
          }, {
            name: '5',
            type: 'column',
            yAxis: 1,
            data: [1053, 1594, 1146, 977, 341
            ],
            color: '#0E9D58'
    
          }, {
            name: '4',
            type: 'column',
            yAxis: 1,
            data: [323, 498, 279, 244, 356],
            color: '#BFD047'
    
          },
          {
            name: '3',
            type: 'column',
            yAxis: 1,
            data: [241, 252, 153, 153,153],
            color: '#FFC105'
    
          }, {
            name: '2',
            type: 'column',
            yAxis: 1,
            data: [152, 109, 106, 82,82],
            color: '#EF7E14'
    
          }, {
            name: '1',
            type: 'column',
            yAxis: 1,
            data: [462, 294, 295, 274, 955],
            color: '#D36259'
    
          }
        ]
      });
  }
  
  function chart2(){
      chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container1',
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        tooltip: {
          formatter: function () {
            return 'The value for <b>' + this.x + '</b> is <b>' + this.y /* + '</b>, in series ' + this.series.name;*/
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal'
          },
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: false
          }
        },
        credits: {
          text: 'getcloudcherry.com',
          href: 'https://www.getcloudcherry.com/'
        },
        xAxis: [{
          categories: ['Jan 2017', 'Feb 2017', 'Mar 2017', 'May 2017',
            'Apr 2017',
            'Jun 2017', 'Jul 2017', 'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', 'Jan 2018',
            'Feb 2018', 'Mar 2018', 'Apr 2018', 'May 2018', 'June 2018'
          ],
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          min: 0,
          max: 5,
          title: {
            text: '',
          }
        }, { // Secondary yAxis
          title: {
            text: '',
          },
          min: 0,
          max: 3000,
          labels: {
            format: '{value}',
          },
          opposite: true
        }],
        legend: {
          enabled: true
        },
        credits: {
          text: 'getcloudcherry.com',
          href: 'https://www.getcloudcherry.com/'
        },
    
        series: [{
            name: 'Cumulative average',
            type: 'line',
    
            data: [3.721, 3.775, 3.806, 3.829, 3.837],
            color: '#888888',
            zIndex: 2
    
    
          }, {
            name: '5',
            type: 'column',
            yAxis: 1,
            data: [1053, 1594, 1146, 977, 341
            ],
            color: '#0E9D58'
    
          }, {
            name: '4',
            type: 'column',
            yAxis: 1,
            data: [323, 498, 279, 244, 356],
            color: '#BFD047'
    
          },
          {
            name: '3',
            type: 'column',
            yAxis: 1,
            data: [241, 252, 153, 153,153],
            color: '#FFC105'
    
          }, {
            name: '2',
            type: 'column',
            yAxis: 1,
            data: [152, 109, 106, 82,82],
            color: '#EF7E14'
    
          }, {
            name: '1',
            type: 'column',
            yAxis: 1,
            data: [462, 294, 295, 274, 955],
            color: '#D36259'
    
          }
        ]
      });
  }

var toDate, fromDate;
function getFromDate(){
    fromDate = $("#fromdatepicker").val();
}

function getToDate(){
    toDate = $("#todatepicker").val();
    //document.querySelector(".chart").style.diplay = "block";
    chart1();
    chart2();
}

