$('#fromdatepicker').datepicker();
$('#todatepicker').datepicker();

var toDate, fromDate;

var rating = {
    "gplay" :{
      "count" : 23,
      "average" : 2.34
    },
    "app" :{
      "count" : 23,
      "average" : 2.34
    }
}; 

var charts ={
    "app": {
        "avg" : [3.721, 3.775, 3.806, 3.829, 3.837,4.0],
        "col1" : {
            "jan1" : 1053,
            "jan2" : 1594,
            "jan3" : 1146,
            "jan4" : 977,
            "jan5" : 341,
            "jan6" : 250
          },
          "col2" : {
            "jan1" : 323,
            "jan2" : 498,
            "jan3" : 279,
            "jan4" : 244,
            "jan5" : 356,
            "jan6" : 250
          },
          "col3" : {
            "jan1" : 241,
            "jan2" : 252,
            "jan3" : 153,
            "jan4" : 153,
            "jan5" : 153,
            "jan6" : 250
          },
          "col4" : {
            "jan1" : 152,
            "jan2" : 109,
            "jan3" : 106,
            "jan4" : 82,
            "jan5" : 82,
            "jan6" : 250
          },
          "col5" : {
            "jan1" : 462,
            "jan2" : 294,
            "jan3" : 295,
            "jan4" : 274,
            "jan5" : 955,
            "jan6" : 250
          }
    },
    "gplay" : {
        "avg" : [3.721, 3.775, 3.806, 3.829, 3.837,4.0],
        "col1" : {
          "jan1" : 1053,
          "jan2" : 1594,
          "jan3" : 1146,
          "jan4" : 977,
          "jan5" : 341,
          "jan6" : 250
        },
        "col2" : {
          "jan1" : 323,
          "jan2" : 498,
          "jan3" : 279,
          "jan4" : 244,
          "jan5" : 356,
          "jan6" : 250
        },
        "col3" : {
          "jan1" : 241,
          "jan2" : 252,
          "jan3" : 153,
          "jan4" : 153,
          "jan5" : 153,
          "jan6" : 250
        },
        "col4" : {
          "jan1" : 152,
          "jan2" : 109,
          "jan3" : 106,
          "jan4" : 82,
          "jan5" : 82,
          "jan6" : 250
        },
        "col5" : {
          "jan1" : 462,
          "jan2" : 294,
          "jan3" : 295,
          "jan4" : 274,
          "jan5" : 955,
          "jan6" : 250
        }
    }
};

var tables = {
    "gplay" :{
      "row1" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row2" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row3" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row4" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row5" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row6" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row7" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row8" : {
        "rated 1-3": "1",
        "count" : "2",
        "proportions(%)" : "3"
      },
      "row9" : {
        "rated 1-3": 1,
        "count" : 2,
        "proportions(%)" : 3
      },
      "row10" : {
        "rated 1-3": " ",
        "count" : " ",
        "proportions(%)" :  " "      
      }
    },
    "app" :{
        "row1" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row2" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row3" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row4" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row5" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row6" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row7" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row8" : {
            "rated 1-3": "1",
            "count" : "2",
            "proportions(%)" : "3"
          },
          "row9" : {
            "rated 1-3": 1,
            "count" : 2,
            "proportions(%)" : 3
          },
          "row10" : {
            "rated 1-3": 1,
            "count" : 2,
            "proportions(%)" : 3      
          }
    }
};

//To set ratings
function setRating(){ 
    document.getElementById("gplay-rating").innerHTML = rating.gplay.count;
    document.getElementById("app-rating").innerHTML = rating.app.count; 
    document.getElementById("gplay-average").innerHTML = rating.gplay.average;
    document.getElementById("app-average").innerHTML = rating.app.average; 
}

//To create table for app
function createTableApp(){
    for(var i = 0; i<10; i++){
        var key = Object.keys(tables.app);
        var val = Object.values(tables.app[key[i]]);
        //Inserting a row
        var table = document.getElementById("myTable-app");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = val[0] != " " ? val[0] : "-";
        cell2.innerHTML = val[1] != " " ? val[1] : "-";
        cell3.innerHTML = val[2] != " " ? val[2] : "-";
    }
}

//To create table for gplay
function createTableGplay(){
    for(var i = 0; i<10; i++){
        var key = Object.keys(tables.gplay);
        var val = Object.values(tables.gplay[key[i]]);
        //Inserting a row
        var table = document.getElementById("myTable-gplay");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = val[0] != " " ? val[0] : "-";
        cell2.innerHTML = val[1] != " " ? val[1] : "-";
        cell3.innerHTML = val[2] != " " ? val[2] : "-";
    }
}

//Chart of google play
function chart1(){
    var keys;
    keys = Object.keys(charts.app.col1);
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
          categories: keys,
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
    
            data: charts.gplay.avg,
            color: '#888888',
            zIndex: 2
    
    
          }, {
            name: '5',
            type: 'column',
            yAxis: 1,
            data: Object.values(charts.gplay.col1),
            color: '#0E9D58'
    
          }, {
            name: '4',
            type: 'column',
            yAxis: 1,
            data: Object.values(charts.gplay.col2),
            color: '#BFD047'
    
          },
          {
            name: '3',
            type: 'column',
            yAxis: 1,
            data: Object.values(charts.gplay.col3),
            color: '#FFC105'
    
          }, {
            name: '2',
            type: 'column',
            yAxis: 1,
            data: Object.values(charts.gplay.col4),
            color: '#EF7E14'
    
          }, {
            name: '1',
            type: 'column',
            yAxis: 1,
            data: Object.values(charts.gplay.col5),
            color: '#D36259'
    
          }
        ]
      });
}
  
//Chart of app
function chart2(){
    var keys;
    keys = Object.keys(charts.gplay.col1);
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
        categories: keys,
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
        //Average Line
        data: charts.app.avg,
        color: '#888888',
        zIndex: 2


        }, {
        name: '5',
        type: 'column',
        yAxis: 1,
        //Green
        data: Object.values(charts.app.col1),
        color: '#0E9D58'

        }, {
        name: '4',
        type: 'column',
        yAxis: 1,
        //Light green
        data: Object.values(charts.app.col2),
        color: '#BFD047'

        },
        {
        name: '3',
        type: 'column',
        yAxis: 1,
        //Yellow
        data: Object.values(charts.app.col3),
        color: '#FFC105'

        }, {
        name: '2',
        type: 'column',
        yAxis: 1,
        //Orange
        data: Object.values(charts.app.col4),
        color: '#EF7E14'

        }, {
        name: '1',
        type: 'column',
        yAxis: 1,
        //Red 
        data: Object.values(charts.app.col5),
        color: '#D36259'

        }
    ]
    });
}

//To save as PDF
function myFunction() {
  window.print();
}

//To get from and to date
function getDate(){
  fromDate = $("#fromdatepicker").val();
  toDate = $("#todatepicker").val();
  var month = fromDate[0]+fromDate[1];
  var date = fromDate[3]+fromDate[4];
  var year = fromDate[6]+fromDate[7]+fromDate[8]+fromDate[9];
  fromDate = " ";
  fromDate = month + '-' + date + '-' + year;
  var month = toDate[0]+toDate[1];
  var date = toDate[3]+toDate[4];
  var year = toDate[6]+toDate[7]+toDate[8]+toDate[9];
  toDate = " ";
  toDate = month + '-' + date + '-' + year;
  console.log(toDate);
  console.log(fromDate);
  document.querySelector(".container").style.display = "block";
  document.querySelector(".chart").style.display = "block";
  setRating();
  createTableApp();
  createTableGplay();
  chart1();
  chart2();
}

function apicall(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.getcloudcherry.com/api/Settings",
    "method": "POST",
    "headers": {
        "Accept" : "*/*",
        "contentType" : 'application/x-www-form-urlencoded; charset=UTF-8',
        "Authorization": auth_token
    },
    "data": body,
    error: function(xhr, error) {
        alert("Settings API failed");
    }
  };
  $.ajax(settings).done(function(oResponse) {
      if (oResponse) {
          console.log(oResponse);
      }
  });
}