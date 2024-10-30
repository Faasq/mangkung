function element(id) {
  return document.getElementById(id)
}

function createGraph() {
  Highcharts.chart('graphContainer', {
    title: {
      text: ''
    },
    yAxis: {
      title: {
        text: 'จำนวนพาร์ทเนอร์ (คน)'
      }
    },
    xAxis: {
      title: {
        text: 'พาร์เนอร์'
      },
      tickInterval: 1
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
      xAxis: {
          categories: ['people', 'senior_people', 'email']
      },
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              }
          }
      },
    series: [{
        name: 'ICUK',
      data: [4, 1, 5]
    }, {
        name: 'Rescue 3 Europe',
      data: [5, 4, 1]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });
}

function createBar() {
    Highcharts.chart('barContainer', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'ตารางเปรียบเทียบ' 
        },
        xAxis: {
            categories: ['People', 'Contract'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'จำนวน ',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },

        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',

            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true

        },
        credits: {
            enabled: false
        },
        series: [{
            name:
                'People and Email',
            data: [3023, 1401]
        }, {
            name: 'Senior People and Phones',
            data: [2405, 380]
        }]
    });
}

function createPie() {
  Highcharts.chart('pieContainer', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'จำนวนคนกับพาร์ทเนอร์'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'จำนวน',
      colorByPoint: true,
      data: [{
        name: 'People',
        y: 4424,
        sliced: true,
        selected: true
      }, {
        name: 'Partner',
        y:535
      }]
    }]
  });
}

function createTable() {
  let thead = element('thead');
  let tbody = element('tbody');

  function createCol(txt, notheader) {
    let c = document.createElement(notheader == undefined? 'th': 'td');
    c.textContent = txt;
    return c
  }
  function createHeader() {
    thead.appendChild(createCol('ID'));
    thead.appendChild(createCol('NAME'));
    thead.appendChild(createCol('PEOPLE'));
    thead.appendChild(createCol('SENIOR PEOPLE'));
  }

  function addBody(d) {
    let tr = document.createElement('tr');
    
    tr.appendChild(createCol(d.name, true))
    tr.appendChild(createCol(d.total, true))
    tr.appendChild(createCol(d.screen, true))
    tr.appendChild(createCol(d.provide, true))

    tbody.appendChild(tr);
  }

  function createBody() {
      addBody({ name: 15978944, total: 'Lagganlia', screen: 15, provide: 0});
      addBody({ name: 70009965, total: 'ICUK', screen: 4, provide: 1});
      addBody({ name: 34551665, total: 'Teleconnect UK', screen: 0, provide: 0});
      addBody({ name: 13637199, total: 'Thomas McMullan Funeral Services', screen: 0, provide: 0});
      addBody({ name: 4692058, total: 'J. B. Gate Systems', screen: 1, provide: 1});
  }

  createHeader();
  createBody();
}

$(document).ready(function () {
  createGraph();
  createBar();
  createPie();
  createTable();
});