$('#fromdatepicker').datepicker();
var fromDate;
var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var baseUrl = "https://solutions-dev.getcloudcherry.com:8093";
//To get ratings
function ratingsApi(date, month){ 
  var url = "/api/CumulativeCount/Getvalues?Todate="
  var url = baseUrl.concat(url);
  var url = url.concat(date);
  //console.log(url);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
        "Accept" : "*/*",
        "contentType" : 'application/json'
    },
    error: function(xhr, error) {
        alert("Ratings API failed");
    }
  };
  $.ajax(settings).done(function(oResponse) {
      if (oResponse) {
        rating = oResponse;
        setRating(rating,month);
      }
  });
}

//To set ratings
function setRating(rating, selectedMonth){
  document.getElementById("month").innerHTML = months[selectedMonth-1];
  document.getElementById("month1").innerHTML = months[selectedMonth-1];
  document.getElementById("gplay-rating").innerHTML = rating.Gplay.count;
  document.getElementById("app-rating").innerHTML = rating.app.count; 
  document.getElementById("gplay-average").innerHTML = rating.Gplay.average;
  document.getElementById("app-average").innerHTML = rating.app.average;
  document.getElementById("app-MTD").innerHTML = rating.app.monthly_rating;
  document.getElementById("gplay-MTD").innerHTML = rating.Gplay.monthly_rating; 
}

//To create table for app
function createTable(val, id){
    for(var i = 1; i< val.length; i++){
      if(id == "Gplay"){
        //Inserting a row
        var table = document.getElementById("myTable-gplay");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = val[i][0] != " " ? val[i][0] : "-";
        cell2.innerHTML = val[i][1] != " " ? val[i][1] : "-";
        cell3.innerHTML = val[i][2] != " " ? val[i][2] : "-";
      }
      else if(id == "app"){
        //Inserting a row
        var table = document.getElementById("myTable-app");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = val[i][0] != " " ? val[i][0] : "-";
        cell2.innerHTML = val[i][1] != " " ? val[i][1] : "-";
        cell3.innerHTML = val[i][2] != " " ? val[i][2] : "-";
      }
    }
}

//To get table values for gplay
function getGplayValues(tables){
  var table = [
    ['Theme', 'Color', 'Whatever']
  ];
  header = [ "Theme", "count", "proportions"];
  var values = [];
    for(var i = 0; i<10; i++){
      if(tables.Gplay && tables.Gplay[i]){ 
        for(var key in tables.Gplay[i]){
          var val = tables.Gplay[i][key];
          var index  = header.indexOf(key);
          values[index] = val;
        }
        table.push(values);
        values = [];
      }
      else{
        values = ['-', '-', '-'];
        table.push(values);
        values=[];
      }
    }
    createTable(table, "Gplay");
}

//To get table values for app
function getAppValues(date){
  var table = [
    ['Theme', 'Color', 'Whatever']
  ];
  header = [ "Theme", "count", "proportions"];
  var values = [];
  var tables = {};
  var url = "/api/CumulativeCount/Getissues?Todate="
  var url = baseUrl.concat(url);
  var url = url.concat(date);
  //console.log(url);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
        "Accept" : "*/*",
        "contentType" : 'application/json'
    },
    error: function(xhr, error) {
        alert("Tables API failed");
    }
  };
  $.ajax(settings).done(function(oResponse) {
      if (oResponse) {
        tables = oResponse;
        for(var i = 0; i<10; i++){
          if(tables.app && tables.app[i]){ 
            for(var key in tables.app[i]){
              var val = tables.app[i][key];
              var index  = header.indexOf(key);
              values[index] = val;
            }
            table.push(values);
            values = [];
          }
          else{
            values = ['-', '-', '-'];
            table.push(values);
            values=[];
          }
        }
        getGplayValues(tables)
        createTable(table, "app");
      }
  });
}

//Chart of google play
function chart1(table,keys){
  document.querySelector(".chart").style.display = "block";
  //var keys;
  chart = new Highcharts.Chart({
      chart: {
        renderTo: 'chart11',
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
          data: table[5],
          color: '#888888',
          zIndex: 2
        }, 
        {
          name: '5',
          type: 'column',
          yAxis: 1,
          data: table[4],
          color: '#0E9D58'
        }, 
        {
          name: '4',
          type: 'column',
          yAxis: 1,
          data: table[3],
          color: '#BFD047'
        },
        {
          name: '3',
          type: 'column',
          yAxis: 1,
          data: table[2],
          color: '#FFC105'
        }, 
        {
          name: '2',
          type: 'column',
          yAxis: 1,
          data: table[1],
          color: '#EF7E14'
        }, 
        {
          name: '1',
          type: 'column',
          yAxis: 1,
          data: table[0],
          color: '#D36259'
        }]
    });
}
  
//Chart of app
function chart2(table, keys){
  //console.log(keys);
  //var keys;
  document.getElementById("chart2").style.display = "block";
    chart = new Highcharts.Chart({
    chart: {
        renderTo: 'chart12',
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
        data: table[5],
        color: '#888888',
        zIndex: 2


        }, {
        name: '5',
        type: 'column',
        yAxis: 1,
        //Green
        data: table[4],
        color: '#0E9D58'

        }, {
        name: '4',
        type: 'column',
        yAxis: 1,
        //Light green
        data: table[3],
        color: '#BFD047'

        },
        {
        name: '3',
        type: 'column',
        yAxis: 1,
        //Yellow
        data: table[2],
        color: '#FFC105'

        }, {
        name: '2',
        type: 'column',
        yAxis: 1,
        //Orange
        data: table[1],
        color: '#EF7E14'

        }, {
        name: '1',
        type: 'column',
        yAxis: 1,
        //Red 
        data: table[0],
        color: '#D36259'

        }
    ]
    });
}

function getChartValues(date){
  var values = [];
  var j = 0;
  var charts = {};
  var url = "/api/CumulativeCount/GetTrends?Todate="
  var url = baseUrl.concat(url);
  var url = url.concat(date);
  //console.log(url);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": url,
    "method": "GET",
    "headers": {
        "Accept" : "*/*",
        "contentType" : 'application/json'
    },
    error: function(xhr, error) {
        alert("Charts API failed");
    }
  };
  $.ajax(settings).done(function(oResponse) {
      if (oResponse) {
        charts = oResponse;
        var Gplaychart = [];
        var keys = [];
        if(charts.Gplay){
          for(var i = 0; i<charts.Gplay.columnsdate.length; i++){
            if(charts.Gplay.columnsdate && charts.Gplay.columnsdate[i]){ 
              for(var key in charts.Gplay.columnsdate[i]){
                var val = charts.Gplay.columnsdate[i][key];
                values[j] = val;
                j++;
              }
              for(var key in charts.Gplay.columnsdate[i]){
                keys.push(key);
              }
              Gplaychart.push(values);
              j = 0;
              values = [];
            }
          }
          Gplaychart.push(charts.Gplay.avg);
          if(charts.Gplay){
            chart1(Gplaychart, keys);
          }
        }
        if(charts.app){
          var Appchart = [];
          for(var i = 0; i<charts.app.columnsdate.length; i++){
            if(charts.app.columnsdate && charts.app.columnsdate[i]){ 
              for(var key in charts.app.columnsdate[i]){
                var val = charts.app.columnsdate[i][key];
                values[j] = val;
                j++;
              }
              Appchart.push(values);
              j = 0;
              values = [];
            }
          }
          Appchart.push(charts.app.avg);
          if(charts.app){
            chart2(Appchart,keys);
          }
        }
      }
  });
}

//To save as PDF
function myFunction() {
  window.print();
}

function clearTable(){
  if(document.getElementById("myTable-gplay").rows.length>1){
    for(var i = 1; i < 11; i++){
      document.getElementById("myTable-gplay").deleteRow(1);  
    }
  }
  if(document.getElementById("myTable-app").rows.length>1){
    for(var i = 1; i < 11; i++){
      document.getElementById("myTable-app").deleteRow(1);  
    }
  }
}

//To get from  date
function getDate(){
  fromDate = $("#fromdatepicker").val();
  console.log(fromDate);
  if(fromDate != ""){
    clearTable();
    var month = fromDate[0]+fromDate[1];
    var date = fromDate[3]+fromDate[4];
    var year = fromDate[6]+fromDate[7]+fromDate[8]+fromDate[9];
    fromDate = " ";
    fromDate = month + '-' + date + '-' + year;
    document.getElementById("date").innerHTML = fromDate;
    document.querySelector(".container").style.display = "block";
    ratingsApi(fromDate,month);
    getAppValues(fromDate);
    getChartValues(fromDate);
  }
  else{
    alert("Please select a date");
  }
  
}