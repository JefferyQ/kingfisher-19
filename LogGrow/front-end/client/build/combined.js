(function () {
    'use strict';

    angular.module('app', [
        // Core modules
         'app.core'
        
        // Custom Feature modules
        // ,'app.chart'
        ,'app.ui'
        ,'app.ui.form'
        ,'app.ui.form.validation'
        ,'app.ui.map'
        ,'app.page'
        ,'app.table'
        
        // 3rd party feature modules
        // ,'easypiechart'
        ,'ui.tree'
        ,'ngMap'
        ,'textAngular'
    ]);

})();


(function () {
    'use strict';

    angular.module('app.chart', ['chart.js']);
})(); 

(function () {
    'use strict';

    angular.module('app.chart')
        .controller('EasyPieChartCtrl', ['$scope', EasyPieChartCtrl])
        .controller('SparklineCtrl', ['$scope', SparklineCtrl]);

    function EasyPieChartCtrl($scope) {
        $scope.easypiechartsm1 = {};
        $scope.easypiechartsm2 = {};
        $scope.easypiechartsm3 = {};
        $scope.easypiechartsm4 = {};
        $scope.easypiechart = {};
        $scope.easypiechart2 = {};
        $scope.easypiechart3 = {};

        ////

        $scope.easypiechartsm1 = {
            percent: 36,
            options: {
                animate: {
                    duration: 1500,
                    enabled: false
                },
                barColor: $scope.color.primary,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };
        $scope.easypiechartsm2 = {
            percent: 45,
            options: {
                animate: {
                    duration: 1500,
                    enabled: false
                },
                barColor: $scope.color.primary,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };
        $scope.easypiechartsm3 = {
            percent: 75,
            options: {
                animate: {
                    duration: 1500,
                    enabled: false
                },
                barColor: $scope.color.primary,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechartsm4 = {
            percent: 66,
            options: {
                animate: {
                    duration: 1500,
                    enabled: false
                },
                barColor: $scope.color.danger,
                lineCap: 'round',
                size: 120,
                lineWidth: 5
            }
        };

        $scope.easypiechart = {
            percent: 65,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.primary,
                lineCap: 'round',
                size: 180,
                lineWidth: 5
            }
        };

        $scope.easypiechart2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.success,
                lineCap: 'round',
                size: 180,
                lineWidth: 10
            }
        };

        $scope.easypiechart3 = {
            percent: 68,
            options: {
                animate: {
                    duration: 1000,
                    enabled: true
                },
                barColor: $scope.color.info,
                lineCap: 'square',
                size: 180,
                lineWidth: 20,
                scaleLength: 0
            }
        };
    }

    function SparklineCtrl($scope) {
        $scope.demoData1 = {};
        $scope.simpleChart1 = {};
        $scope.simpleChart2 = {};
        $scope.simpleChart3 = {};
        $scope.tristateChart1 = {};
        $scope.largeChart1 = {};
        $scope.largeChart2 = {};
        $scope.largeChart3 = {};


        ////
        $scope.demoData1 = {
            data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
            options: {
                type: 'line',
                lineColor: '#fff',
                highlightLineColor: '#fff',
                fillColor: $scope.color.success,
                spotColor: false,
                minSpotColor: false,
                maxSpotColor: false,
                width: '100%',
                height: '150px'
            }
        };

        $scope.simpleChart1 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: 'line',
                lineColor: $scope.color.primary,
                fillColor: '#fafafa',
                spotColor: false,
                minSpotColor: false,
                maxSpotColor: false
            }
        };

        $scope.simpleChart2 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: 'bar',
                barColor: $scope.color.primary
            }
        };

        $scope.simpleChart3 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: 'pie',
                sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]
            }
        };

        $scope.tristateChart1 = {
            data: [1, 2, -3, -5, 3, 1, -4, 2],
            options: {
                type: 'tristate',
                posBarColor: $scope.color.success,
                negBarColor: $scope.color.danger
            }
        };

        $scope.largeChart1 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: 'line',
                lineColor: $scope.color.info,
                highlightLineColor: '#fff',
                fillColor: $scope.color.info,
                spotColor: false,
                minSpotColor: false,
                maxSpotColor: false,
                width: '100%',
                height: '150px'
            }
        };

        $scope.largeChart2 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: 'bar',
                barColor: $scope.color.success,
                barWidth: 10,
                width: '100%',
                height: '150px'
            }
        };

        $scope.largeChart3 = {
            data: [3, 1, 2, 3, 5],
            options: {
                type: 'pie',
                sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger],
                width: '150px',
                height: '150px'
            }
        };

        $scope.infoChart1 = {
            data: [10,11,13,12,11,10,11,12,13,14,15,13,14,12,13,15,11,13,11,15,6],
            options: {
                type: 'bar',
                barColor: $scope.color.primary,
                barWidth: 3,
                width: '100%',
                height: '26px'
            }
        };
        $scope.infoChart2 = {
            data: [10,11,12,13,14,15,14,13,12,11,15,14,13,14,12,13,15,13,11,11,12,6],
            options: {
                type: 'bar',
                barColor: $scope.color.success,
                barWidth: 3,
                width: '100%',
                height: '26px'
            }
        };
        $scope.infoChart3 = {
            data: [13,14,15,14,12,10,11,12,13,14,15,13,14,12,13,15,11,13,11,15,6],
            options: {
                type: 'bar',
                barColor: $scope.color.danger,
                barWidth: 3,
                width: '100%',
                height: '26px'
            }
        };
        $scope.infoChart4 = {
            data: [12,11,13,12,11,10,11,12,11,12,15,13,14,12,13,15,11,13,11,15,6],
            options: {
                type: 'bar',
                barColor: $scope.color.warning,
                barWidth: 3,
                width: '100%',
                height: '26px'
            }
        };


    }


})(); 
(function () {
    'use strict';

    angular.module('app.chart')
        .directive('flotChart', flotChart)
        .directive('flotChartRealtime', flotChartRealtime)
        .directive('sparkline', sparkline);

    function flotChart() {
        var directive = {
            restrict: 'A',
            scope: {
            data: '=',
            options: '='
            },
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var data, options, plot;
            data = scope.data;
            options = scope.options;
            
            // console.log data
            // console.log options

            plot = $.plot(ele[0], data, options);            
        }        
    }

    function flotChartRealtime() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var data1, data2, getRandomData1, getRandomData2, makeGetRandomData;
            var data, getRandomData, plot, totalPoints, update, updateInterval;

            data1 = [];
            data2 = [];
            totalPoints = 200;
            updateInterval = 200;


            makeGetRandomData = function(data, min, max) {

            function getRandomData() {
                var i, prev, res, y;
                if (data.length > 0) {
                data = data.slice(1);
                }
                while (data.length < totalPoints) {
                prev = (data.length > 0 ? data[data.length - 1] : (min + max)/2);
                y = prev + Math.random() * 4 - 2;
                if (y < min) {
                    y = min;
                } else {
                    if (y > max) {
                    y = max;
                    }
                }
                data.push(y);
                }
                res = [];
                i = 0;
                while (i < data.length) {
                res.push([i, data[i]]);
                ++i;
                }
                return res;
            }
            return getRandomData;    
            }

            getRandomData1 = makeGetRandomData(data1, 28, 42);
            getRandomData2 = makeGetRandomData(data2, 56, 72);


            update = function() {
            plot.setData([getRandomData1(), getRandomData2()]);
            plot.draw();
            setTimeout(update, updateInterval);
            };


            plot = $.plot(ele[0], [getRandomData1(), getRandomData2()], {
            series: {
                lines: {
                show: true,
                fill: true
                },
                shadowSize: 0
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            grid: {
                hoverable: true,
                borderWidth: 1,
                borderColor: '#eeeeee'
            },
            colors: ["#3F51B5", "#C5CAE9"]
            });

            update();
         
        }        
    }

    function sparkline() {
        var directive = {
            restrict: 'A',
            scope: {
            data: '=',
            options: '='
            },
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var data, options, sparkResize, sparklineDraw;

            data = scope.data;

            options = scope.options;

            sparkResize = void 0;

            sparklineDraw = function() {
            ele.sparkline(data, options);
            };

            $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineDraw, 200);
            });

            sparklineDraw();             
        }        
    }    

})(); 
(function () {
    'use strict';

    angular.module('app.chart')
    .controller('ChartjsCtrl', ['$scope', '$rootScope', ChartjsCtrl])

    function ChartjsCtrl($scope, $rootScope){
        $scope.bar = {};
        $scope.line = {};
        $scope.radar = {};
        $scope.polarArea = {};
        $scope.doughnut = {};
        $scope.pie = {};

        ////

        Chart.defaults.global.tooltipCornerRadius = 2;
        Chart.defaults.global.colours = [
            { // primary
                fillColor: 'rgba(63,81,181,0.3)',
                strokeColor: 'rgba(63,81,181,1)',
                pointColor: 'rgba(63,81,181,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(63,81,181,0.8)'
            }, { // gray
                fillColor: 'rgba(187,187,187,0.3)',
                strokeColor: 'rgba(187,187,187,1)',
                pointColor: 'rgba(187,187,187,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(187,187,187,0.8)'
            }, { // success
                fillColor: 'rgba(76,175,80,0.3)',
                strokeColor: 'rgba(76,175,80,1)',
                pointColor: 'rgba(76,175,80,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(76,175,80,0.8)'
            }, { // danger
                fillColor: 'rgba(244,67,54,0.3)',
                strokeColor: 'rgba(244,67,54,1)',
                pointColor: 'rgba(244,67,54,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(244,67,54,0.8)'
            }, { // warning
                fillColor: 'rgba(255,193,7,0.3)',
                strokeColor: 'rgba(255,193,7,1)',
                pointColor: 'rgba(255,193,7,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(255,193,7,0.8)'
            }, { // dark grey
                fillColor: 'rgba(77,83,96,0.3)',
                strokeColor: 'rgba(77,83,96,1)',
                pointColor: 'rgba(77,83,96,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(77,83,96,1)'
            }
        ];

        // var charts = [];
        // $scope.$on('create', function (event, chart) {
        //     charts.push(chart);
        // });

        // $scope.resize = function() {
        //     charts.forEach( function(chart) {
        //         chart.resize(chart.render);
        //     });
        // }

        // $rootScope.$on("layout:changed", function (event, currentRoute, previousRoute) {
        //     charts.forEach( function(chart) {
        //         chart.resize(chart.render);
        //     });
        // });

        $scope.bar = {
            labels: ['2009', '2010', '2011', '2012', '2013', '2014'],
            series: ['A', 'B'],
            data: [
                [59, 40, 61, 26, 55, 40],
                [38, 80, 19, 66, 27, 90]
            ],
            options: {
                barValueSpacing: 15
            }
        }
        $scope.line = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            series: ['A', 'B'],
            data: [
                [28, 48, 40, 19, 86, 27, 90],
                [65, 55, 75, 55, 65, 50, 55]
            ],
            options: {
                // scaleOverride: true,
                // scaleBeginAtZero: true
            }
        }

        $scope.radar = {
            labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            data: [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
        }
        $scope.polarArea = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120]
        }

        $scope.doughnut = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]         
        }
        $scope.pie = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        }
    }
})(); 

(function () {
    'use strict';

    angular.module('app.chart')
        .controller('FlotChartCtrl', ['$scope', FlotChartCtrl]);


    function FlotChartCtrl($scope) {
        var areaChart, barChart, barChartClean, barChartH, 
        lineChart1, lineChart2, sampledata1, sampledata2;

        $scope.line1 = {};
        $scope.line2 = {};
        $scope.area = {};
        $scope.barChartCleanH = {};
        $scope.barChartCleanV = {};
        $scope.combo1 = {};
        $scope.combo2 = {};
        $scope.barChartStacked = {};
        $scope.barChartVertical = {};
        $scope.barChartHorizontal = {};
        $scope.pieChart = {};
        $scope.donutChart = {};
        $scope.donutChartHarmony = {};
        $scope.donutNationality = {};
        $scope.combo3 = {};
        $scope.line3 = {};
        $scope.tmp = {};


        $scope.line3.data = [{
            label: "Too",
            data: [[0, 19], [1, 29], [2, 38], [3, 45], [4, 51], [5, 63], [6, 71], [7, 75], [8, 78], [9, 76], [10, 78] ],
            lines: {
                show: true,
                fill: true,
                lineWidth: 2,
                fillColor: {colors: ["rgba(255,255,255,.1)", "rgba(79,195,247,.8)"]}
            }
        }];
        $scope.line3.options = {
            grid: {
                borderWidth: 0,
                borderColor: "#f0f0f0",
                margin: 0,
                minBorderMargin: 0,
                labelMargin: 20,
                hoverable: true,
                clickable: true
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s X: %x Y: %y",
                shifts: {y: 25 },
                defaultTheme: false
            },
            legend: {
                labelBoxBorderColor: "#ccc",
                show: false,
                noColumns: 0
            },
            series: {
                stack: true,
                shadowSize: 0,
                highlightColor: 'rgba(30,120,120,.5)'
            },
            xaxis: {
                tickLength: 0,
                tickDecimals: 0,
                show: true,
                min: 2,
                font: {
                    style: "normal",
                    color: "#666666"
                }
            },
            yaxis: {
                ticks: 3,
                tickDecimals: 0,
                show: true,
                tickColor: "#f0f0f0",
                font: {
                    style: "normal",
                    color: "#666666"
                }
            },
            points: {
                show: true,
                radius: 2,
                symbol: "circle"
            },
            colors: [$scope.color.info]
        };


        $scope.donutNationality.data = [ 
            { label: "United States", data: 40 }, 
            { label: "United Kingdom", data: 10 },
            { label: "Canada", data: 20 },
            { label: "Germany", data: 12 },
            { label: "Japan", data: 18 }
        ];
        $scope.donutNationality.options = {
            series: { 
                pie: { 
                    show: true,
                    innerRadius: 0.75,
                    stroke: { width: 0 }
                } 
            },
            colors: [$scope.color.success, $scope.color.primary, $scope.color.infoAlt,$scope.color.info, $scope.color.warning],
            grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },   
            legend: {
                show: true
            },            
            tooltip: true,
            tooltipOpts: { 
                content: '%s: %p.0%',
                defaultTheme: true
            }
        };

        ////

        lineChart1 = {};
        lineChart1.data1 = [[1, 15], [2, 20], [3, 14], [4, 10], [5, 10], [6, 20]];
        $scope.line1.data = [{data: lineChart1.data1, label: 'Trend'} ];
        $scope.line1.options = {
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {colors: [{opacity: 0 }, {opacity: 0.3 } ] }
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                }
            },
            colors: [$scope.color.primary, $scope.color.infoAlt],
            tooltip: true,
            tooltipOpts: {defaultTheme: false },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            xaxis: {
                ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
            }
        };

        lineChart2 = {};
        lineChart2.data1 = [[1, 20], [2, 14], [3, 16], [4, 22], [5, 28], [6, 38]];
        lineChart2.data2 = [[1, 26], [2, 24], [3, 22], [4, 22], [5, 20], [6, 16]];
        $scope.line2.data = [
            {
                data: lineChart2.data1,
                label: "Profit"
            }, {
                data: lineChart2.data2,
                label: "Cost",
                yaxis: 2
            }
        ];
        $scope.line2.options = {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#fff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: [$scope.color.primary, $scope.color.success],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                ticks: [[1, 'Jan.'], [2, 'Feb.'], [3, 'Mar.'], [4, 'Apr.'], [5, 'May'], [6, 'June'], [7, 'July'], [8, 'Aug.'], [9, 'Sept.'], [10, 'Oct.'], [11, 'Nov.'], [12, 'Dec.']]
            },
            yaxes: [
            {
                min: 0,
                max: 50
            }, {
                min: 0,
                max: 50,
                position: "right"
            }
            ]
        };



        areaChart = {};
        areaChart.data1 = [[2017, 15], [2018, 20], [2019, 10], [2020, 5], [2021, 9]];
        areaChart.data2 = [[2017, 15], [2018, 16], [2019, 22], [2020, 14], [2021, 12]];
        $scope.area.data = [
            {
                data: areaChart.data1,
                label: "Value A",
                lines: {
                    fill: true
                }
            }, {
                data: areaChart.data2,
                label: "Value B",
                points: {
                    show: true
                },
                yaxis: 2
            }
        ];
        $scope.area.options = {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: [$scope.color.success, $scope.color.danger],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: [
            {}, {
                position: "right"
            }
            ]
        };


        // Clean style
        barChartClean = {};
        barChartClean.dataH1 = [[40, 1], [59, 2], [50, 3], [81, 4], [56, 5]];
        barChartClean.dataH2 = [[28, 1], [48, 2], [90, 3], [19, 4], [45, 5]];
        barChartClean.dataV1 = [[1, 28], [2, 48], [3, 90], [4, 19], [5, 45], [6, 58]];
        barChartClean.dataV2 = [[1, 40], [2, 59], [3, 50], [4, 81], [5, 56], [6, 49]];
        $scope.barChartCleanH.data = [
        {
            label: " A",
            data: barChartClean.dataH1,
            bars: {
                order: 0,
                fillColor: {
                    colors: [
                    {
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }
                    ]
                }
            }
        }, {
            label: " B",
            data: barChartClean.dataH2,
            bars: {
                order: 1,
                fillColor: {
                    colors: [
                    {
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }
                    ]
                }
            }
        }
        ];
        $scope.barChartCleanH.options = {
            series: {
                stack: true,
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: .35,
                    align: "center",
                    horizontal: true
                }
            },
            grid: {
                show: true,
                aboveData: false,
                color: '#eaeaea',
                hoverable: true,
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.gray, $scope.color.primary, $scope.color.info, $scope.color.danger]
        };

        $scope.barChartCleanV.data = [
        {
            label: " A",
            data: barChartClean.dataV1,
            bars: {
                order: 0,
                fillColor: {
                    colors: [
                    {
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }
                    ]
                }
            }
        }, {
            label: " B",
            data: barChartClean.dataV2,
            bars: {
                order: 1,
                fillColor: {
                    colors: [
                    {
                        opacity: 0.3
                    }, {
                        opacity: 0.3
                    }
                    ]
                }
            }
        }
        ];
        $scope.barChartCleanV.options = {
            series: {
                stack: true,
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: .25,
                    align: "center",
                    horizontal: false
                }
            },
            grid: {
                show: true,
                aboveData: false,
                color: '#eaeaea',
                hoverable: true,
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.gray, $scope.color.primary, $scope.color.info, $scope.color.danger]
        };


        $scope.combo3.data = [ 
            { 
                label: 'WOM channels',
                bars: { show: true, fill: true, barWidth: 0.5, align: "center", order: 1, fillColor: { colors: [{ opacity: 1 }, { opacity: 1}] } },
                data: [ [0,75],[1,62],[2,45],[3,60],[4,73], [5,50],[6,31],[7,56],[8,70],[9,63],[10,49],[11,72],[12, 76],[13,67],[14,46],[15,51],[16,69],[17,59],[18,85],[19,67],[20,56] ]
            },
            { 
                label: 'Viral channels',
                curvedLines: { apply: true },
                lines: {show: true, fill: true, fillColor: {colors: [{opacity: .7 }, {opacity: 1 } ] } },
                data: [ [2,0],[3,5],[4,20],[5,15],[6,30],[7,28],[8,25],[9,40],[10,60],[11,40],[12,43],[13,32],[14,36],[15,23],[16,12],[17,15],[18,0] ] 
            },
            { 
                label: 'Paid channels',
                curvedLines: { apply: true },
                lines: {show: true, fill: true, fillColor: {colors: [{opacity: .7 }, {opacity: 1 } ] } },
                data: [ [4,1],[5,6],[6,15],[7,8],[8,16],[9,9],[10,25],[11,12],[12,50],[13,20],[14,25],[15,12],[16,0] ] 
            }
        ];
        $scope.combo3.options = {
            colors: [$scope.color.gray, $scope.color.success, $scope.color.info,  $scope.color.info],
            series: { 
                shadowSize: 1,
                curvedLines: {active: true }
            },
            xaxis:{ font: { color: '#607685' } },
            yaxis:{ font: { color: '#607685' } },
            grid: { hoverable: true, clickable: true, borderWidth: 0, color: '#ccc' },                
            tooltip: true
        };




        // Clean Style
        sampledata1 = [[1, 70], [2, 55], [3, 68], [4, 81], [5, 56], [6, 55], [7, 68], [8, 45], [9, 35]];
        sampledata2 = [[1, 28], [2, 48], [3, 30], [4, 60], [5, 100], [6, 50], [7, 10], [8, 25], [9, 50]];
        $scope.combo1.data = [
            {
                label: " A",
                data: sampledata1,
                bars: {
                    order: 0,
                    fillColor: { colors: [{opacity: 0.3}, {opacity: 0.3} ] },
                    show: true,
                    fill: 1,
                    barWidth: 0.3,
                    align: "center",
                    horizontal: false
                }
            }, {
                data: sampledata2,
                curvedLines: {
                    apply: true
                },
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {colors: [{opacity: 0.2 }, {opacity: 0.2 } ] }
                }
            }, {
                data: sampledata2,
                label: "D",
                points: {
                    show: true
                }
            }
        ];
        $scope.combo1.options = {
            series: {
                curvedLines: {
                    active: true
                },
                points: {
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 4
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.gray, $scope.color.primary, $scope.color.primary]
        };

        $scope.combo2.data = [
            {
                data: sampledata1,
                curvedLines: {
                    apply: true
                },
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [
                        {
                            opacity: 0.2
                        }, {
                            opacity: 0.2
                        }
                        ]
                    }
                }
            }, {
                data: sampledata1,
                label: "C",
                points: {
                    show: true
                }
            }, {
                data: sampledata2,
                curvedLines: {
                    apply: true
                },
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [
                        {
                            opacity: 0.2
                        }, {
                            opacity: 0.2
                        }
                        ]
                    }
                }
            }, {
                data: sampledata2,
                label: "D",
                points: {
                    show: true
                }
            }
        ];
        $scope.combo2.options = {
            series: {
                curvedLines: {
                    active: true
                },
                points: {
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 4
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.gray, $scope.color.gray, $scope.color.primary, $scope.color.primary]
        };






        barChart = {};
        barChart.data1 = [[2009, 10], [2010, 5], [2011, 5], [2012, 20], [2013, 28]];
        barChart.data2 = [[2009, 22], [2010, 14], [2011, 12], [2012, 19], [2013, 22]];
        barChart.data3 = [[2009, 30], [2010, 20], [2011, 19], [2012, 13], [2013, 20]];
        $scope.barChartStacked.data = [
            {
                label: "Value A",
                data: barChart.data1
            }, {
                label: "Value B",
                data: barChart.data2
            }, {
                label: "Value C",
                data: barChart.data3
            }
        ];
        $scope.barChartStacked.options = {
            series: {
                stack: true,
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 0.3,
                    align: "center",
                    horizontal: false,
                    order: 1
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
        };
        // Vertical
        $scope.barChartVertical.data = [
        {
            label: "Value A",
            data: barChart.data1,
            bars: {
                order: 0
            }
        }, {
            label: "Value B",
            data: barChart.data2,
            bars: {
                order: 1
            }
        }, {
            label: "Value C",
            data: barChart.data3,
            bars: {
                order: 2
            }
        }
        ];
        $scope.barChartVertical.options = {
            series: {
                stack: true,
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 0.2,
                    align: "center",
                    horizontal: false
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            yaxis: {
                max: 40
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
        };

        barChartH = {};
        barChartH.data1 = [[85, 10], [50, 20], [55, 30]];
        barChartH.data2 = [[77, 10], [60, 20], [70, 30]];
        barChartH.data3 = [[100, 10], [70, 20], [55, 30]];
        $scope.barChartHorizontal.data = [
        {
            label: "Value A",
            data: barChartH.data1,
            bars: {
                order: 1
            }
        }, {
            label: "Value B",
            data: barChartH.data2,
            bars: {
                order: 2
            }
        }, {
            label: "Value C",
            data: barChartH.data3,
            bars: {
                order: 3
            }
        }
        ];
        $scope.barChartHorizontal.options = {
            series: {
                stack: true,
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 1,
                    align: "center",
                    horizontal: true
                }
            },
            grid: {
                hoverable: true,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger]
        };


        $scope.pieChart.data = [
            {
                label: "New User",
                data: 22
            }, {
                label: "Returning User",
                data: 78
            }
        ];
        $scope.pieChart.options = {
            series: {
                pie: {show: true }
            },
            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: [$scope.color.gray, $scope.color.info],
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: false
            }
        };


        $scope.donutChart.data = [
        {
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }
        ];
        $scope.donutChart.options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5
                }
            },
            legend: {
                show: true
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: false
            }
        };


        $scope.donutChartHarmony.data = [
        {
            label: "Direct Traffic",
            data: 12
        }, {
            label: "Referrals Traffic",
            data: 30
        }, {
            label: "Search Traffic",
            data: 20
        }, {
            label: "Social Traffic",
            data: 19
        }, {
            label: "Mail Traffic",
            data: 15
        }
        ];
        $scope.donutChartHarmony.options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.55
                }
            },
            legend: {
                show: false
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
            tooltip: true,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: false
            }
        };        
    }

})(); 


(function () {
    'use strict';

    angular.module('app.core', [
    // Angular modules
     'ngAnimate'
    ,'ngAria'
    ,'ngMessages'

    // Custom modules
    ,'app.layout'
    ,'app.i18n'
    
    // 3rd Party Modules
    ,'ngMaterial'
    ,'ui.router'
    ,'ui.bootstrap'
    ,'duScroll'
    ]);

})();


(function() {
    'use strict';

    angular.module('app.core')
    .factory('appConfig', [appConfig])
    .config(['$mdThemingProvider', mdConfig]);

    function appConfig() {
        var pageTransitionOpts = [
            {
                name: 'Fade up',
                "class": 'animate-fade-up'
            }, {
                name: 'Scale up',
                "class": 'ainmate-scale-up'
            }, {
                name: 'Slide in from right',
                "class": 'ainmate-slide-in-right'
            }, {
                name: 'Flip Y',
                "class": 'animate-flip-y'
            }
        ];
        var date = new Date();
        var year = date.getFullYear();
        var main = {
            brand: 'LogGrow',
            name: 'Swapnil',
            year: year,
            layout: 'wide',                                 // 'boxed', 'wide'
            menu: 'vertical',                               // 'horizontal', 'vertical', 'collapsed'
            fixedHeader: true,                              // true, false
            fixedSidebar: true,                             // true, false
            pageTransition: pageTransitionOpts[0],          // 0, 1, 2, 3... and build your own
            skin: '32'                                      // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        };
        var color = {
            primary:    '#009688',
            success:    '#8BC34A',
            info:       '#00BCD4',
            infoAlt:    '#7E57C2',
            warning:    '#FFCA28',
            danger:     '#F44336',
            gray:       '#EDF0F1'
        };

        return {
            pageTransitionOpts: pageTransitionOpts,
            main: main,
            color: color
        }
    }

    function mdConfig($mdThemingProvider) {
        var cyanAlt = $mdThemingProvider.extendPalette('cyan', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })
        var lightGreenAlt = $mdThemingProvider.extendPalette('light-green', {
            'contrastLightColors': '500 600 700 800 900',
            'contrastStrongLightColors': '500 600 700 800 900'
        })        

        $mdThemingProvider
            .definePalette('cyanAlt', cyanAlt)
            .definePalette('lightGreenAlt', lightGreenAlt);


        $mdThemingProvider.theme('default')
            .primaryPalette('teal', {
                'default': '500'
            })
            .accentPalette('cyanAlt', {
                'default': '500'
            })
            .warnPalette('red', {
                'default': '500'
            })
            .backgroundPalette('grey');
    }

})();
(function () {
    'use strict';

    angular.module('app')
    .controller('AppCtrl', [ '$scope', '$rootScope', '$state', '$document', 'appConfig', AppCtrl]) // overall control
    
    function AppCtrl($scope, $rootScope, $state, $document, appConfig) {

        $scope.pageTransitionOpts = appConfig.pageTransitionOpts;
        $scope.main = appConfig.main;
        $scope.color = appConfig.color;

        $scope.$watch('main', function(newVal, oldVal) {
            // if (newVal.menu !== oldVal.menu || newVal.layout !== oldVal.layout) {
            //     $rootScope.$broadcast('layout:changed');
            // }

            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
            $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
            if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                $scope.main.fixedHeader = true;
                $scope.main.fixedSidebar = true;
            }
            if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                $scope.main.fixedHeader = false;
                $scope.main.fixedSidebar = false;
            }
            }
            if (newVal.fixedSidebar === true) {
            $scope.main.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
            $scope.main.fixedSidebar = false;
            }
        }, true);


        $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });
    }

})(); 
(function () {
   


   angular.module('app')
       .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $stateProvider
        .state('marketplace', {
            url: '/marketplace',
            templateUrl: 'views/pages/marketplace.html',
            controller: "marketPlaceCtrl"
        });
  
      $urlRouterProvider
        .when('/', '/marketplace')
        .otherwise('/marketplace');

       }]
   );

})();


(function () {

    angular.module('app.i18n', ['pascalprecht.translate'])
        .config(['$translateProvider', i18nConfig])
        .controller('LangCtrl', ['$scope', '$translate', LangCtrl]);

    // English, Español, 日本語, 中文, Deutsch, français, Italiano, Portugal, Русский язык, 한국어
    // Note: Used on Header, Sidebar, Footer, Dashboard
    // English:            EN-US
    // Spanish:            Español ES-ES
    // Chinese:            简体中文 ZH-CN
    // Chinese:            繁体中文 ZH-TW
    // French:             français FR-FR

    // Not used:
    // Portugal:         Portugal PT-BR
    // Russian:            Русский язык RU-RU
    // German:             Deutsch DE-DE
    // Japanese:         日本語 JA-JP
    // Italian:            Italiano IT-IT
    // Korean:             한국어 KO-KR


    function i18nConfig($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
    }

    function LangCtrl($scope, $translate) {
        $scope.lang = 'English';
        $scope.setLang = setLang;
        $scope.getFlag = getFlag;


        function setLang (lang) {
            switch (lang) {
                case 'English':
                    $translate.use('en');
                    break;
                case 'Español':
                    $translate.use('es');
                    break;
                case '中文':
                    $translate.use('zh');
                    break;
                case '日本語':
                    $translate.use('ja');
                    break;
                case 'Portugal':
                    $translate.use('pt');
                    break;
                case 'Русский язык':
                    $translate.use('ru');
                    break;
            }
            return $scope.lang = lang;
        };

        function getFlag() {
            var lang;
            lang = $scope.lang;
            switch (lang) {
                case 'English':
                    return 'flags-american';
                    break;
                case 'Español':
                    return 'flags-spain';
                    break;
                case '中文':
                    return 'flags-china';
                    break;
                case 'Portugal':
                    return 'flags-portugal';
                    break;
                case '日本語':
                    return 'flags-japan';
                    break;
                case 'Русский язык':
                    return 'flags-russia';
                    break;
            }
        };

    }

})(); 

(function () {
    'use strict';

    angular.module('app.ui.form', []);
})(); 

(function () {
    'use strict';

    // Dependencies: jQuery, related jQuery plugins

    angular.module('app.ui.form')
        .controller('InputCtrl', ['$scope', InputCtrl])
        .controller('CheckboxCtrl', ['$scope', CheckboxCtrl])
        .controller('RadioCtrl', ['$scope', RadioCtrl])
        .controller('FormCtrl', ['$scope', FormCtrl])
        .controller('MaterialAutocompleteCtrl', ['$scope', '$timeout', '$q', '$log', MaterialAutocompleteCtrl])
        .controller('MaterialDatepickerCtrl', ['$scope', MaterialDatepickerCtrl])
        .controller('DatepickerDemoCtrl', ['$scope', DatepickerDemoCtrl])
        .controller('TimepickerDemoCtrl', ['$scope', TimepickerDemoCtrl])
        .controller('TypeaheadCtrl', ['$scope', TypeaheadCtrl])
        .controller('RatingDemoCtrl', ['$scope', RatingDemoCtrl]);

    function InputCtrl ($scope) {
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function(state) {
                return {abbrev: state};
            })
    }
    function CheckboxCtrl ($scope) {
        $scope.checkbox = {};
        $scope.checkbox.cb1 = true;
        $scope.checkbox.cb2 = false;
        $scope.checkbox.cb3 = false;
        $scope.checkbox.cb4 = false;
        $scope.checkbox.cb5 = false;        
        $scope.checkbox.cb6 = true;        
        $scope.checkbox.cb7 = true;        
        $scope.checkbox.cb8 = true;    
        $scope.items = [1,2,3,4,5];
        $scope.selected = [];
        $scope.toggle = function (item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) list.splice(idx, 1);
            else list.push(item);
        };
        $scope.exists = function (item, list) {
            return list.indexOf(item) > -1;
        };        
    }
    function RadioCtrl ($scope) {
        $scope.radio = {
            group1 : 'Banana',
            group2 : '2',
            group3 : 'Primary'
        };
        $scope.radioData = [
            { label: 'Radio: disabled', value: '1', isDisabled: true },
            { label: 'Radio: disabled, Checked', value: '2', isDisabled: true }
        ];
        $scope.contacts = [{
            'id': 1,
            'fullName': 'Maria Guadalupe',
            'lastName': 'Guadalupe',
            'title': "CEO, Found"
        }, {
            'id': 2,
            'fullName': 'Gabriel García Marquéz',
            'lastName': 'Marquéz',
            'title': "VP Sales & Marketing"
        }, {
            'id': 3,
            'fullName': 'Miguel de Cervantes',
            'lastName': 'Cervantes',
            'title': "Manager, Operations"
        }, {
            'id': 4,
            'fullName': 'Pacorro de Castel',
            'lastName': 'Castel',
            'title': "Security"
        }];
        $scope.selectedIndex = 2;
        $scope.selectedUser = function() {
            var index = $scope.selectedIndex - 1;
            return $scope.contacts[index].lastName;
        }            

    }



    function FormCtrl($scope) {
        // Slider
        $scope.color = {
            red: 97,
            green: 211,
            blue: 140
        };
        $scope.rating1 = 3;
        $scope.rating2 = 2;
        $scope.rating3 = 4;
        $scope.disabled1 = 0;
        $scope.disabled2 = 70;

        // Input
        $scope.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '' ,
            company: 'Google' ,
            address: '1600 Amphitheatre Pkwy' ,
            city: 'Mountain View' ,
            state: 'CA' ,
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode : '94043'
        };


        // Select
        $scope.select1 = '1';
        $scope.toppings = [
            { category: 'meat', name: 'Pepperoni' },
            { category: 'meat', name: 'Sausage' },
            { category: 'meat', name: 'Ground Beef' },
            { category: 'meat', name: 'Bacon' },
            { category: 'veg', name: 'Mushrooms' },
            { category: 'veg', name: 'Onion' },
            { category: 'veg', name: 'Green Pepper' },
            { category: 'veg', name: 'Green Olives' }
        ];
        $scope.favoriteTopping = $scope.toppings[0].name

        // Switch
        $scope.switchData = {
            cb1: true,
            cbs: false,
            cb4: true,
            color1: true,
            color2: true,
            color3: true
        };
        $scope.switchOnChange = function(cbState){
            $scope.message = "The switch is now: " + cbState;
        };
    }

    function MaterialAutocompleteCtrl ($scope, $timeout, $q, $log) {

        var $scope = this;
        $scope.simulateQuery = false;
        $scope.isDisabled    = false;
        // list of `state` value/display objects
        $scope.states        = loadAll();
        $scope.querySearch   = querySearch;
        $scope.selectedItemChange = selectedItemChange;
        $scope.searchTextChange   = searchTextChange;
        $scope.newState = newState;
        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
                    deferred;
            if ($scope.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function searchTextChange(text) {
            // $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            // $log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                            Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                            Wisconsin, Wyoming';
            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }
    }

    function MaterialDatepickerCtrl ($scope) {
        $scope.myDate = new Date();
        $scope.minDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() - 2,
              $scope.myDate.getDate());
        $scope.maxDate = new Date(
              $scope.myDate.getFullYear(),
              $scope.myDate.getMonth() + 2,
              $scope.myDate.getDate());        
    }
    function DatepickerDemoCtrl ($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.maxDate = new Date(2020, 5, 22);

        $scope.open = function($event) {
            $scope.status.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.status = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events =
            [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i=0;i<$scope.events.length;i++){
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
    }

    function TimepickerDemoCtrl($scope) {
        $scope.mytime = new Date();

        $scope.hstep = 1;

        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;

        $scope.toggleMode = function() {
            return $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function() {
            var d;
            d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            return $scope.mytime = d;
        };

        $scope.changed = function() {
            // return console.log('Time changed to: ' + $scope.mytime);
        };

        $scope.clear = function() {
            return $scope.mytime = null;
        };

    }


    function TypeaheadCtrl($scope) {
        $scope.selected = undefined;
        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }

    function RatingDemoCtrl($scope) {
        $scope.rate = 7;

        $scope.max = 10;

        $scope.isReadonly = false;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            return $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {
                stateOn: 'glyphicon-ok-sign',
                stateOff: 'glyphicon-ok-circle'
            }, {
                stateOn: 'glyphicon-star',
                stateOff: 'glyphicon-star-empty'
            }, {
                stateOn: 'glyphicon-heart',
                stateOff: 'glyphicon-ban-circle'
            }, {
                stateOn: 'glyphicon-heart'
            }, {
                stateOff: 'glyphicon-off'
            }
        ];

    }

})(); 
(function () {
    'use strict';

    angular.module('app.ui.form')
        .directive('uiRangeSlider', uiRangeSlider)
        .directive('uiSpinner', uiSpinner)
        .directive('uiWizardForm', uiWizardForm);

    // Dependency: http://www.eyecon.ro/bootstrap-slider/ OR https://github.com/seiyria/bootstrap-slider
    function uiRangeSlider() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
            ele.slider();
            }            
        }
    }

    // Dependency: https://github.com/xixilive/jquery-spinner
    function uiSpinner() {
        return {
            restrict: 'A',
            compile: function(ele, attrs) { // link and compile do not work together
            ele.addClass('ui-spinner');
            return {
                post: function() {
                ele.spinner();
                }
            };
            }
            // link: // link and compile do not work together
        }
    }


    // Dependency: https://github.com/rstaib/jquery-steps
    function uiWizardForm() {
        return {
            restrict: 'A',
            link: function(scope, ele) {
            ele.steps()
            }            
        }
    }

})(); 



(function () {
    'use strict';

    angular.module('app.ui.form.validation', ['validation.match']);
})(); 

(function () {
    'use strict';

    angular.module('app.ui.form.validation')
        .controller('FormConstraintsCtrl', ['$scope', FormConstraintsCtrl])
        .controller('MaterialLoginCtrl', ['$scope', MaterialLoginCtrl])
        .controller('MaterialSignUpCtrl', ['$scope', MaterialSignUpCtrl])
        .controller('SigninCtrl', ['$scope', SigninCtrl])
        .controller('SignupCtrl', ['$scope', SignupCtrl]);

    function FormConstraintsCtrl($scope) {
        var original;

        $scope.form = {
            required: '',
            minlength: '',
            maxlength: '',
            length_rage: '',
            type_something: '',
            confirm_type: '',
            foo: '',
            email: '',
            url: '',
            num: '',
            minVal: '',
            maxVal: '',
            valRange: '',
            pattern: ''
        };

        original = angular.copy($scope.form);
        $scope.revert = function() {
            $scope.form = angular.copy(original);
            return $scope.form_constraints.$setPristine();
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };           
    }

    function MaterialLoginCtrl ($scope) {
        var original;

        $scope.user = {
            email: '',
            passowrd: ''
        }   

        original = angular.copy($scope.user);
        // https://github.com/angular/material/issues/1903
        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.materialLoginForm.$setPristine();
            $scope.materialLoginForm.$setUntouched();
            return;
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.materialLoginForm.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.materialLoginForm.$valid && !angular.equals($scope.user, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };                 
    }

    function MaterialSignUpCtrl ($scope) {
        var original;

        $scope.user = {
            name: '',
            email: '',
            passowrd: ''
        }   

        original = angular.copy($scope.user);
        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.materialSignUpForm.$setPristine();
            $scope.materialSignUpForm.$setUntouched();
            return;
        };
        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.materialSignUpForm.$pristine;
        };
        $scope.canSubmit = function() {
            return $scope.materialSignUpForm.$valid && !angular.equals($scope.user, original);
        };    
        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };           
    }

    function SigninCtrl($scope) {
        var original;

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.showInfoOnSubmit = false;

        original = angular.copy($scope.user);

        $scope.revert = function() {
            $scope.user = angular.copy(original);
            return $scope.form_signin.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_signin.$valid && !angular.equals($scope.user, original);
        };

        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };
    }

    function SignupCtrl($scope) {
        var original;

        $scope.user = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: ''
        };

        $scope.showInfoOnSubmit = false;

        original = angular.copy($scope.user);

        $scope.revert = function() {
            $scope.user = angular.copy(original);
            $scope.form_signup.$setPristine();
            return $scope.form_signup.confirmPassword.$setPristine();
        };

        $scope.canRevert = function() {
            return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
        };

        $scope.canSubmit = function() {
            return $scope.form_signup.$valid && !angular.equals($scope.user, original);
        };

        $scope.submitForm = function() {
            $scope.showInfoOnSubmit = true;
            return $scope.revert();
        };

    }

})(); 
(function () {
    'use strict';

    angular.module('app.layout', []);

})(); 
(function () {
    'use strict';

    angular.module('app.layout')
        .directive('uiPreloader', ['$rootScope', uiPreloader]);

    function uiPreloader($rootScope) {
        return {
            restrict: 'A',
            template:'<span class="bar"></span>',
            link: function(scope, el, attrs) {        
                el.addClass('preloaderbar hide');
                scope.$on('$stateChangeStart', function(event) {
                    el.removeClass('hide').addClass('active');
                });
                scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
                    event.targetScope.$watch('$viewContentLoaded', function(){
                        el.addClass('hide').removeClass('active');
                    })
                });

                scope.$on('preloader:active', function(event) {
                    el.removeClass('hide').addClass('active');
                });
                scope.$on('preloader:hide', function(event) {
                    el.addClass('hide').removeClass('active');
                });                
            }
        };        
    }
})(); 


(function () {
    $(window).load(function(){
        setTimeout( hideLoader , 1000)
    });

    function hideLoader() {
        $('#loader-container').fadeOut("slow")
    }    
})(); 

(function () {
    'use strict';

    angular.module('app.layout')
        .directive('toggleNavCollapsedMin', ['$rootScope', toggleNavCollapsedMin])
        .directive('collapseNav', collapseNav)
        .directive('highlightActive', highlightActive)
        .directive('toggleOffCanvas', toggleOffCanvas);

    // switch for mini style NAV, realted to 'collapseNav' directive
    function toggleNavCollapsedMin($rootScope) {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var app;

            app = $('#app');

            ele.on('click', function(e) {
                if (app.hasClass('nav-collapsed-min')) {
                    app.removeClass('nav-collapsed-min');
                } else {
                    app.addClass('nav-collapsed-min');
                    $rootScope.$broadcast('nav:reset');
                }
                return e.preventDefault();
            });            
        }
    }

    // for accordion/collapse style NAV
    function collapseNav() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, slideTime, updateClass;

            slideTime = 250;

            $window = $(window);

            $lists = ele.find('ul').parent('li');

            $lists.append('<i class="fa fa-angle-down icon-has-ul-h"></i>');

            $a = $lists.children('a');
            $a.append('<i class="fa fa-angle-down icon-has-ul"></i>');

            $listsRest = ele.children('li').not($lists);

            $aRest = $listsRest.children('a');

            $app = $('#app');

            $nav = $('#nav-container');

            $a.on('click', function(event) {
                var $parent, $this;
                if ($app.hasClass('nav-collapsed-min') || ($nav.hasClass('nav-horizontal') && $window.width() >= 768)) {
                    return false;
                }
                $this = $(this);
                $parent = $this.parent('li');
                $lists.not($parent).removeClass('open').find('ul').slideUp(slideTime);
                $parent.toggleClass('open').find('ul').stop().slideToggle(slideTime);
                event.preventDefault();
            });

            $aRest.on('click', function(event) {
                $lists.removeClass('open').find('ul').slideUp(slideTime);
            });

            scope.$on('nav:reset', function(event) {
                $lists.removeClass('open').find('ul').slideUp(slideTime);
            });

            Timer = void 0;

            prevWidth = $window.width();

            updateClass = function() {
                var currentWidth;
                currentWidth = $window.width();
                if (currentWidth < 768) {
                    $app.removeClass('nav-collapsed-min');
                }
                if (prevWidth < 768 && currentWidth >= 768 && $nav.hasClass('nav-horizontal')) {
                    $lists.removeClass('open').find('ul').slideUp(slideTime);
                }
                prevWidth = currentWidth;
            };

            $window.resize(function() {
                var t;
                clearTimeout(t);
                t = setTimeout(updateClass, 300);
            });
          
        }
    }

    // Add 'active' class to li based on url, muli-level supported, jquery free
    function highlightActive() {
        var directive = {
            restrict: 'A',
            controller: [ '$scope', '$element', '$attrs', '$location', toggleNavCollapsedMinCtrl]
        };

        return directive;

        function toggleNavCollapsedMinCtrl($scope, $element, $attrs, $location) {
            var highlightActive, links, path;

            links = $element.find('a');

            path = function() {
                return $location.path();
            };

            highlightActive = function(links, path) {
                path = '#' + path;
                return angular.forEach(links, function(link) {
                    var $li, $link, href;
                    $link = angular.element(link);
                    $li = $link.parent('li');
                    href = $link.attr('href');
                    if ($li.hasClass('active')) {
                        $li.removeClass('active');
                    }
                    if (path.indexOf(href) === 0) {
                        return $li.addClass('active');
                    }
                });
            };

            highlightActive(links, $location.path());

            $scope.$watch(path, function(newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return highlightActive(links, $location.path());
            });

        }

    }

    // toggle on-canvas for small screen, with CSS
    function toggleOffCanvas() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele, attrs) {
            ele.on('click', function() {
                return $('#app').toggleClass('on-canvas');
            });         
        }
    }


})(); 




(function() {


    angular.module('app')
        .controller('marketPlaceCtrl', ['$scope', '$filter', '$stateParams', '$mdDialog', marketPlaceCtrl]);

    function marketPlaceCtrl($scope, $filter, $stateParams, $mdDialog) {

    		// variables //

    		$scope.flag = {};
    		$scope.flag.cardDetail = false;

    		$scope.fields = {};
    		$scope.fields.sectionFlex = 100;

    		$scope.changeFlexCard = function(arg){
                if(arg =='open'){
    			    $scope.flag.cardDetail = true;
                    $scope.fields.sectionFlex = 50;
                } else if (arg == 'close'){
                    $scope.flag.cardDetail = false;
                    $scope.fields.sectionFlex = 100;
                }
    		}

            
    		$scope.rejectLoan = function(ev) {
	            $mdDialog.show({
	                controller: marketPlaceCtrl,
	                templateUrl: 'views/block/reject-loan-dialog.html',
	                parent: angular.element(document.body),
	                targetEvent: ev,
	                clickOutsideToClose:true,
                    openFrom: '#left',
                    closeTo: angular.element(document.querySelector('#right'))
	            })
        	};

        	$scope.cancelRequest = function() {
		    	$mdDialog.hide();
		    };


    }

})();
(function () {
    'use strict';

    angular.module('app.ui.map', []);

})(); 

(function () {
    'use strict';

    angular.module('app.ui.map')
        .controller('jvectormapCtrl', ['$scope', jvectormapCtrl]);

    function jvectormapCtrl($scope) {
        var marker_data, sample_data;

        $scope.worldMap = {};

        ////
        marker_data = [
            {
            "latLng": [40.71, -74.00],
            "name": "New York"
            }, {
            "latLng": [39.90, 116.40],
            "name": "Beijing"
            }, {
            "latLng": [31.23, 121.47],
            "name": "Shanghai"
            }, {
            "latLng": [-33.86, 151.20],
            "name": "Sydney"
            }, {
            "latLng": [-37.81, 144.96],
            "name": "Melboune"
            }, {
            "latLng": [37.33, -121.89],
            "name": "San Jose"
            }, {
            "latLng": [1.3, 103.8],
            "name": "Singapore"
            }, {
            "latLng": [47.60, -122.33],
            "name": "Seattle"
            }, {
            "latLng": [41.87, -87.62],
            "name": "Chicago"
            }, {
            "latLng": [37.77, -122.41],
            "name": "San Francisco"
            }, {
            "latLng": [32.71, -117.16],
            "name": "San Diego"
            }, {
            "latLng": [51.50, -0.12],
            "name": "London"
            }, {
            "latLng": [48.85, 2.35],
            "name": "Paris"
            }, {
            "latLng": [52.52, 13.40],
            "name": "Berlin"
            }, {
            "latLng": [-26.20, 28.04],
            "name": "Johannesburg"
            }, {
            "latLng": [35.68, 139.69],
            "name": "Tokyo"
            }, {
            "latLng": [13.72, 100.52],
            "name": "Bangkok"
            }, {
            "latLng": [37.56, 126.97],
            "name": "Seoul"
            }, {
            "latLng": [41.87, 12.48],
            "name": "Roma"
            }, {
            "latLng": [45.42, -75.69],
            "name": "Ottawa"
            }, {
            "latLng": [55.75, 37.61],
            "name": "Moscow"
            }, {
            "latLng": [-22.90, -43.19],
            "name": "Rio de Janeiro"
            }
        ];

        $scope.worldMap = {
            map: 'world_mill_en',
            markers: marker_data,
            normalizeFunction: 'polynomial',
            backgroundColor: null,
            zoomOnScroll: false,
            regionStyle: {
            initial: {
                fill: '#EEEFF3'
            },
            hover: {
                fill: $scope.color.primary
            }
            },
            markerStyle: {
            initial: {
                fill: '#BF616A',
                stroke: 'rgba(191,97,106,.8)',
                "fill-opacity": 1,
                "stroke-width": 9,
                "stroke-opacity": 0.5
            },
            hover: {
                stroke: 'black',
                "stroke-width": 2
            }
            }
        };
    
    }



})(); 
(function () {
    'use strict';

    angular.module('app.ui.map')
    .directive('uiJvectormap', uiJvectormap);

    function uiJvectormap() {
        return {
            restrict: 'A',
            scope: {
            options: '='
            },
            link: function(scope, ele, attrs) {
            var options;

            options = scope.options;
            ele.vectorMap(options);
            }
        }
    }

})(); 
(function () {
    'use strict';

    angular.module('app.page', []);
})(); 

(function () {
    'use strict';

    angular.module('app.page')
    .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
    .controller('authCtrl', ['$scope', '$window', '$location', authCtrl]);

    function invoiceCtrl($scope, $window) {
        var printContents, originalContents, popupWin;
        
        $scope.printInvoice = function() {
            printContents = document.getElementById('invoice').innerHTML;
            originalContents = document.body.innerHTML;        
            popupWin = window.open();
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
    }

    function authCtrl($scope, $window, $location) {
        $scope.login = function() {
            $location.url('/')
        }

        $scope.signup = function() {
            $location.url('/')
        }

        $scope.reset =    function() {
            $location.url('/')
        }

        $scope.unlock =    function() {
            $location.url('/')
        }     
    }

})(); 




(function () {
    'use strict';

    angular.module('app.page')
        .directive('customPage', customPage);


    // add class for specific pages to achieve fullscreen, custom background etc.
    function customPage() {
        var directive = {
            restrict: 'A',
            controller: ['$scope', '$element', '$location', customPageCtrl]
        };

        return directive;

        function customPageCtrl($scope, $element, $location) {
            var addBg, path;

            path = function() {
                return $location.path();
            };

            addBg = function(path) {
                $element.removeClass('body-wide body-err body-lock body-auth');
                switch (path) {
                    case '/404':
                    case '/page/404':
                    case '/page/500':
                        return $element.addClass('body-wide body-err');
                    case '/page/signin':
                    case '/page/signup':
                    case '/page/forgot-password':
                        return $element.addClass('body-wide body-auth');
                    case '/page/lock-screen':
                        return $element.addClass('body-wide body-lock');
                }
            };

            addBg($location.path());

            $scope.$watch(path, function(newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                }
                return addBg($location.path());
            });
        }        
    }
 
})(); 



(function () {
    'use strict';

    angular.module('app.table', []);
})(); 

(function () {
    'use strict';

    angular.module('app.table')
        .controller('TableCtrl', ['$scope', '$filter', TableCtrl]);

    function TableCtrl($scope, $filter) {
        var init;

        $scope.stores = [];
        $scope.searchKeywords = '';
        $scope.filteredStores = [];
        $scope.row = '';
        $scope.select = select;
        $scope.onFilterChange = onFilterChange;
        $scope.onNumPerPageChange = onNumPerPageChange;
        $scope.onOrderChange = onOrderChange;
        $scope.search = search;
        $scope.order = order;
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPage = [];

        ////
        $scope.stores = [
            {
            name: 'Nijiya Market',
            price: '$$',
            sales: 292,
            rating: 4.0
            }, {
            name: 'Eat On Monday Truck',
            price: '$',
            sales: 119,
            rating: 4.3
            }, {
            name: 'Tea Era',
            price: '$',
            sales: 874,
            rating: 4.0
            }, {
            name: 'Rogers Deli',
            price: '$',
            sales: 347,
            rating: 4.2
            }, {
            name: 'MoBowl',
            price: '$$$',
            sales: 24,
            rating: 4.6
            }, {
            name: 'The Milk Pail Market',
            price: '$',
            sales: 543,
            rating: 4.5
            }, {
            name: 'Nob Hill Foods',
            price: '$$',
            sales: 874,
            rating: 4.0
            }, {
            name: 'Scratch',
            price: '$$$',
            sales: 643,
            rating: 3.6
            }, {
            name: 'Gochi Japanese Fusion Tapas',
            price: '$$$',
            sales: 56,
            rating: 4.1
            }, {
            name: 'Cost Plus World Market',
            price: '$$',
            sales: 79,
            rating: 4.0
            }, {
            name: 'Bumble Bee Health Foods',
            price: '$$',
            sales: 43,
            rating: 4.3
            }, {
            name: 'Costco',
            price: '$$',
            sales: 219,
            rating: 3.6
            }, {
            name: 'Red Rock Coffee Co',
            price: '$',
            sales: 765,
            rating: 4.1
            }, {
            name: '99 Ranch Market',
            price: '$',
            sales: 181,
            rating: 3.4
            }, {
            name: 'Mi Pueblo Food Center',
            price: '$',
            sales: 78,
            rating: 4.0
            }, {
            name: 'Cucina Venti',
            price: '$$',
            sales: 163,
            rating: 3.3
            }, {
            name: 'Sufi Coffee Shop',
            price: '$',
            sales: 113,
            rating: 3.3
            }, {
            name: 'Dana Street Roasting',
            price: '$',
            sales: 316,
            rating: 4.1
            }, {
            name: 'Pearl Cafe',
            price: '$',
            sales: 173,
            rating: 3.4
            }, {
            name: 'Posh Bagel',
            price: '$',
            sales: 140,
            rating: 4.0
            }, {
            name: 'Artisan Wine Depot',
            price: '$$',
            sales: 26,
            rating: 4.1
            }, {
            name: 'Hong Kong Chinese Bakery',
            price: '$',
            sales: 182,
            rating: 3.4
            }, {
            name: 'Starbucks',
            price: '$$',
            sales: 97,
            rating: 3.7
            }, {
            name: 'Tapioca Express',
            price: '$',
            sales: 301,
            rating: 3.0
            }, {
            name: 'House of Bagels',
            price: '$',
            sales: 82,
            rating: 4.4
            }
        ];

        function select(page) {
            var end, start;
            start = (page - 1) * $scope.numPerPage;
            end = start + $scope.numPerPage;
            return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        };

        function onFilterChange() {
            $scope.select(1);
            $scope.currentPage = 1;
            return $scope.row = '';
        };

        function onNumPerPageChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function onOrderChange() {
            $scope.select(1);
            return $scope.currentPage = 1;
        };

        function search() {
            $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
            return $scope.onFilterChange();
        };

        function order(rowName) {
            if ($scope.row === rowName) {
            return;
            }
            $scope.row = rowName;
            $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
            return $scope.onOrderChange();
        };

        init = function() {
            $scope.search();
            return $scope.select($scope.currentPage);
        };

        init();
    }

})(); 
(function () {
    'use strict';

    angular.module('app.ui', ['ngMaterial']);
})(); 

(function () {
    'use strict';
    
    angular
        .module('app.ui')
        .controller('ChipsBasicDemoCtrl', ChipsBasicDemoCtrl)
        .controller('DialogDemo', ['$scope', '$mdDialog', DialogDemo])
        .controller('TabsDemo', ['$scope', '$log', TabsDemo])
        .controller('ProgressCircularDemo', ['$scope', '$interval', ProgressCircularDemo])
        .controller('ProgressLinearDemo', ['$scope', '$interval', ProgressLinearDemo])
        .controller('ToastDemo', ['$scope', '$mdToast', '$document', ToastDemo])
        .controller('ToastCustomDemo', ['$scope', '$mdToast', ToastCustomDemo])
        .controller('TooltipDemo', ['$scope', TooltipDemo])
        .controller('SubheaderDemo', ['$scope', SubheaderDemo])
        .controller('SelectDemo', SelectDemo);

    function ChipsBasicDemoCtrl () {
        var self = this;
        self.readonly = false;
        // Lists of fruit names and Vegetable objects
        self.fruitNames = ['Apple', 'Banana', 'Orange'];
        self.roFruitNames = angular.copy(self.fruitNames);
        self.tags = [];
        self.vegObjs = [
            {
                'name' : 'Broccoli',
                'type' : 'Brassica'
            },
            {
                'name' : 'Cabbage',
                'type' : 'Brassica'
            },
            {
                'name' : 'Carrot',
                'type' : 'Umbelliferous'
            }
        ];
        self.newVeg = function(chip) {
            return {
                name: chip,
                type: 'unknown'
            };
        };
    }

    function DialogDemo($scope, $mdDialog) {
        $scope.status = '  ';
        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert title')
                    .content('You can specify some description text in here.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                    .targetEvent(ev)
            );
        };
        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                        .title('Would you like to delete your debt?')
                        .content('All of the banks have agreed to <span class="debt-be-gone">forgive</span> you your debts.')
                        .ariaLabel('Lucky day')
                        .targetEvent(ev)
                        .ok('Please do it!')
                        .cancel('Sounds like a scam');
            $mdDialog.show(confirm).then(function() {
                $scope.status = 'You decided to get rid of your debt.';
            }, function() {
                $scope.status = 'You decided to keep your debt.';
            });
        };
        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        };


        // Open From Close To
        $scope.openOffscreen = function() {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Opening from offscreen')
                    .content('Closing to offscreen')
                    .ariaLabel('Offscreen Demo')
                    .ok('Amazing!')
                    // Or you can specify the rect to do the transition from
                    .openFrom({
                        top: 50,
                        width: 30,
                        height: 80
                    })
                    .closeTo({
                        left: 1500
                    })
            );
        };        
    }
    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    function TabsDemo($scope, $log) {
        var tabs = [
            { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
            { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
            { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
            { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
            { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
            { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
            { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
            { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
            { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
            { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
        $scope.tabs = tabs;
        $scope.selectedIndex = 2;
        $scope.$watch('selectedIndex', function(current, old){
            previous = selected;
            selected = tabs[current];
            // if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
            // if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
        });
        $scope.addTab = function (title, view) {
            view = view || title + " Content View";
            tabs.push({ title: title, content: view, disabled: false});
        };
        $scope.removeTab = function (tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
    }

    function ProgressCircularDemo($scope, $interval) {
        var self = this,  j= 0, counter = 0;
        self.modes = [ ];
        self.activated = true;
        self.determinateValue = 30;
        /**
         * Turn off or on the 5 themed loaders
         */
        self.toggleActivation = function() {
                if ( !self.activated ) self.modes = [ ];
                if (  self.activated ) j = counter = 0;
        };
        // Iterate every 100ms, non-stop
        $interval(function() {
            // Increment the Determinate loader
            self.determinateValue += 1;
            if (self.determinateValue > 100) {
                self.determinateValue = 30;
            }
            // Incrementally start animation the five (5) Indeterminate,
            // themed progress circular bars
            if ( (j < 5) && !self.modes[j] && self.activated ) {
                self.modes[j] = 'indeterminate';
            }
            if ( counter++ % 4 == 0 ) j++;
        }, 100, 0, true);        
    }

    function ProgressLinearDemo($scope, $interval) {
        var self = this, j= 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
        self.modes = [ ];

        self.toggleActivation = function() {
            if ( !self.activated ) self.modes = [ ];
            if (  self.activated ) {
                j = counter = 0;
                self.determinateValue = 30;
                self.determinateValue2 = 30;
            }
        };
        $interval(function() {
            self.determinateValue += 1;
            self.determinateValue2 += 1.5;
            if (self.determinateValue > 100) self.determinateValue = 30;
            if (self.determinateValue2 > 100) self.determinateValue2 = 30;
                // Incrementally start animation the five (5) Indeterminate,
                // themed progress circular bars
                if ( (j < 2) && !self.modes[j] && self.activated ) {
                    self.modes[j] = (j==0) ? 'buffer' : 'query';
                }
                if ( counter++ % 4 == 0 ) j++;
                // Show the indicator in the "Used within Containers" after 200ms delay
                if ( j == 2 ) self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function() {
            self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    }

    function ToastDemo($scope, $mdToast, $document) {
        var last = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };

        $scope.toastPosition = angular.extend({},last);

        $scope.getToastPosition = function() {
            sanitizePosition();

            return Object.keys($scope.toastPosition)
                .filter(function(pos) { return $scope.toastPosition[pos]; })
                .join(' ');
        };

        function sanitizePosition() {
            var current = $scope.toastPosition;

            if ( current.bottom && last.top ) current.top = false;
            if ( current.top && last.bottom ) current.bottom = false;
            if ( current.right && last.left ) current.left = false;
            if ( current.left && last.right ) current.right = false;

            last = angular.extend({},current);
        }

        $scope.showCustomToast = function() {
            $mdToast.show({
                controller: 'ToastCustomDemo',
                templateUrl: 'toast-template.html',
                parent : $document[0].querySelector('#toastBounds'),
                hideDelay: 6000,
                position: $scope.getToastPosition()
            });
        };

        $scope.showSimpleToast = function() {
            $mdToast.show(
                $mdToast.simple()
                    .content('Simple Toast!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };

        $scope.showActionToast = function() {
            var toast = $mdToast.simple()
                        .content('Action Toast!')
                        .action('OK')
                        .highlightAction(false)
                        .position($scope.getToastPosition());

            $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                    alert('You clicked \'OK\'.');
                }
            });
        };
    }
    function ToastCustomDemo ($scope, $mdToast) {
        $scope.closeToast = function() {
            $mdToast.hide();
        };        
    }

    function TooltipDemo($scope) {
        $scope.demo = {
            showTooltip : false,
            tipDirection : ''
        };

        $scope.$watch('demo.tipDirection',function(val) {
            if (val && val.length ) {
                $scope.demo.showTooltip = true;
            }
        })        
    }

    function SubheaderDemo($scope) {
        var imagePath = 'images/g1.jpg';
        $scope.messages = [
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
            {
                face : imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: " I'll be in your neighborhood doing errands"
            },
        ];     
    }

    function SelectDemo() {
        var self = this;
        
        self.userState = '';
        self.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });

        self.sizes = [
            "small (12-inch)",
            "medium (14-inch)",
            "large (16-inch)",
            "insane (42-inch)"
        ];
        self.toppings = [
            { category: 'meat', name: 'Pepperoni' },
            { category: 'meat', name: 'Sausage' },
            { category: 'meat', name: 'Ground Beef' },
            { category: 'meat', name: 'Bacon' },
            { category: 'veg', name: 'Mushrooms' },
            { category: 'veg', name: 'Onion' },
            { category: 'veg', name: 'Green Pepper' },
            { category: 'veg', name: 'Green Olives' }
        ];

    }

})();

(function () {
    'use strict';

    angular.module('app.ui')
        .controller('LoaderCtrl', ['$scope', '$rootScope', LoaderCtrl])
        .controller('ListCtrl', [ '$scope', '$mdDialog', ListCtrl])
        .controller('NotifyCtrl', ['$scope', 'logger', NotifyCtrl])
        .controller('AlertDemoCtrl', ['$scope', AlertDemoCtrl])
        .controller('ProgressDemoCtrl', ['$scope', ProgressDemoCtrl])
        .controller('AccordionDemoCtrl', ['$scope', AccordionDemoCtrl])
        .controller('CollapseDemoCtrl', ['$scope', CollapseDemoCtrl])
        .controller('ModalDemoCtrl', ['$scope', '$uibModal', '$log', ModalDemoCtrl])
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', ModalInstanceCtrl])
        .controller('PaginationDemoCtrl', ['$scope', PaginationDemoCtrl])
        .controller('TabsDemoCtrl', ['$scope', TabsDemoCtrl])
        .controller('TreeDemoCtrl', ['$scope', TreeDemoCtrl])
        .controller('MapDemoCtrl', ['$scope', '$http', '$interval', MapDemoCtrl]);


    function LoaderCtrl($scope, $rootScope) {

        $scope.start = function() {
            $rootScope.$broadcast('preloader:active');
        }
        $scope.complete = function() {
            $rootScope.$broadcast('preloader:hide');
        }
    }

    function ListCtrl ($scope, $mdDialog) {
        $scope.toppings = [
            { name: 'Pepperoni', wanted: true },
            { name: 'Sausage', wanted: false },
            { name: 'Black Olives', wanted: true }
        ];
        $scope.settings = [
            { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'zmdi zmdi-wifi-alt', enabled: true },
            { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'zmdi zmdi-bluetooth', enabled: false },
        ];
        $scope.messages = [
            {id: 1, title: "Message A", selected: false},
            {id: 2, title: "Message B", selected: true},
            {id: 3, title: "Message C", selected: true},
        ];
        $scope.people = [
            { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
            { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
            { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
        ];        
        $scope.goToPerson = function(person, event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Navigating')
                    .content('Inspect ' + person)
                    .ariaLabel('Person inspect demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
        $scope.navigateTo = function(to, event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Navigating')
                    .content('Imagine being taken to ' + to)
                    .ariaLabel('Navigation demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
        $scope.doSecondaryAction = function(event) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('Secondary Action')
                    .content('Secondary actions can be used for one click actions')
                    .ariaLabel('Secondary click demo')
                    .ok('Neat!')
                    .targetEvent(event)
            );
        };
    }

    function NotifyCtrl($scope, logger) {
        $scope.notify = function(type) {
            switch (type) {
            case 'info':
                return logger.log("Heads up! This alert needs your attention, but it's not super important.");
            case 'success':
                return logger.logSuccess("Well done! You successfully read this important alert message.");
            case 'warning':
                return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
            case 'error':
                return logger.logError("Oh snap! Change a few things up and try submitting again.");
            }
        };
    }

    function AlertDemoCtrl($scope) {
        $scope.alerts = [
            {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.'
            }, {
            type: 'info',
            msg: 'Heads up! This alert needs your attention, but it is not super important.'
            }, {
            type: 'warning',
            msg: "Warning! Best check yo self, you're not looking too good."
            }, {
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
            }
        ];

        $scope.addAlert = function() {
            var num, type;
            num = Math.ceil(Math.random() * 4);
            type = void 0;
            switch (num) {
            case 0:
                type = 'info';
                break;
            case 1:
                type = 'success';
                break;
            case 2:
                type = 'info';
                break;
            case 3:
                type = 'warning';
                break;
            case 4:
                type = 'danger';
            }
            return $scope.alerts.push({
            type: type,
            msg: "Another alert!"
            });
        };

        $scope.closeAlert = function(index) {
            return $scope.alerts.splice(index, 1);
        };
        }

        function ProgressDemoCtrl($scope) {
        $scope.max = 200;

        $scope.random = function() {
            var type, value;
            value = Math.floor((Math.random() * 100));
            type = void 0;
            if (value < 25) {
                type = "success";
            } else if (value < 50) {
                type = "info";
            } else if (value < 75) {
                type = "warning";
            } else {
                type = "danger";
            }
            $scope.showWarning = type === "danger" || type === "warning";
            $scope.dynamic = value;
            $scope.type = type;
        };

        $scope.random();

    }

    function AccordionDemoCtrl($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
            }, {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
            }, {
            title: "Dynamic Group Header - 3",
            content: "Dynamic Group Body - 3"
            }
        ];

        $scope.items = ["Item 1", "Item 2", "Item 3"];

        $scope.status = {
            isFirstOpen: true,
            isFirstOpen1: true
        };

        $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };
    }

    function CollapseDemoCtrl($scope) {
        $scope.isCollapsed = false;
    }

    function ModalDemoCtrl($scope, $uibModal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }

    function ModalInstanceCtrl($scope, $uibModalInstance, items) {
        $scope.items = items;

        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function() {
            $uibModalInstance.close($scope.selected.item);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss("cancel");
        };

    }

    function PaginationDemoCtrl($scope) {
        $scope.totalItems = 64;

        $scope.currentPage = 4;

        $scope.setPage = function(pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.maxSize = 5;

        $scope.bigTotalItems = 175;

        $scope.bigCurrentPage = 1;
        }

        function TabsDemoCtrl($scope) {
        $scope.tabs = [
            {
            title: "Dynamic Title 1",
            content: "Dynamic content 1.    Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
            }, {
            title: "Disabled",
            content: "Dynamic content 2.    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
            disabled: true
            }
        ];

        $scope.navType = "pills";
    }

    function TreeDemoCtrl($scope) {
        $scope.list = [
            {id: 1, title: "Item 1", items: [] }, 
            {id: 2, title: "Item 2", items: [{id: 21, title: "Item 2.1", items: [{id: 211, title: "Item 2.1.1", items: [] }, {id: 212, title: "Item 2.1.2", items: [] } ] } ] },
            {id: 3, title: "Item 3", items: [] },
            {id: 4, title: "Item 4", items: [{id: 41, title: "Item 4.1", items: [] } ] },
            {id: 5, title: "Item 5", items: [] }
        ];

        $scope.selectedItem = {};

        $scope.options = {};

        $scope.remove = function(scope) {
            scope.remove();
        };

        $scope.toggle = function(scope) {
            scope.toggle();
        };

        $scope.newSubItem = function(scope) {
            var nodeData;
            nodeData = scope.$modelValue;
            nodeData.items.push({
                id: nodeData.id * 10 + nodeData.items.length,
                title: nodeData.title + "." + (nodeData.items.length + 1),
                items: []
            });
        };
    }

    function MapDemoCtrl($scope, $http, $interval) {
        var i, markers;

        markers = [];

        i = 0;

        while (i < 8) {
            markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            });
            i++;
        }

        $scope.GenerateMapMarkers = function() {
            var d, lat, lng, loc, numMarkers;
            d = new Date();
            $scope.date = d.toLocaleString();
            numMarkers = Math.floor(Math.random() * 4) + 4;
            i = 0;
            while (i < numMarkers) {
                lat = 43.6600000 + (Math.random() / 100);
                lng = -79.4103000 + (Math.random() / 100);
                loc = new google.maps.LatLng(lat, lng);
                markers[i].setPosition(loc);
                markers[i].setMap($scope.map);
                i++;
            }
        };

        $interval($scope.GenerateMapMarkers, 2000);
    }
    
})(); 
(function () {
    'use strict';

    angular.module('app.ui')
    .directive('uiWave', uiWave)
    .directive('uiTime', uiTime)
    .directive('uiNotCloseOnClick', uiNotCloseOnClick)
    .directive('slimScroll', slimScroll);


    function uiWave() {
        var directive = {
            restrict: 'A',
            compile: compile
        };

        return directive;

        function compile(ele, attrs) {
            ele.addClass('ui-wave');
            var ink, d, x, y;
            ele.off('click').on('click', function(e){

            // console.log(ele);
            var $this = $(this);
            if($this.find(".ink").length === 0){
                $this.prepend("<span class='ink'></span>");
            }

            ink = $this.find(".ink");
            ink.removeClass("wave-animate");

            if(!ink.height() && !ink.width()){
                d = Math.max($this.outerWidth(), $this.outerHeight());
                ink.css({height: d, width: d});
            }

            x = e.pageX - $this.offset().left - ink.width()/2;
            y = e.pageY - $this.offset().top - ink.height()/2;

            ink.css({top: y+'px', left: x+'px'}).addClass("wave-animate");
            });
        }    
    }

    function uiTime() {
        var directive = {
            restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, ele) {
            var checkTime, startTime;

            startTime = function() {
            var h, m, s, t, time, today;
            today = new Date();
            h = today.getHours();
            m = today.getMinutes();
            s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            time = h + ":" + m + ":" + s;
            ele.html(time);
            return t = setTimeout(startTime, 500);
            };

            checkTime = function(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
            };

            startTime();
        }    
    }

    function uiNotCloseOnClick() {
        return {
            restrict: 'A',
            compile: function(ele, attrs) {
            return ele.on('click', function(event) {
                event.stopPropagation();
            });
            }
        };
    }

    function slimScroll() {
        return {
            restrict: 'A',
            link: function(scope, ele, attrs) {
            return ele.slimScroll({
                height: attrs.scrollHeight || '100%'
            });
            }
        };
    }

})(); 
(function () {
    'use strict';

    angular.module('app.ui')
        .factory('logger', logger)

    function logger() {

    var logIt;

    // toastr setting.
    toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "3000"
    };

    logIt = function(message, type) {
        return toastr[type](message);
    };

    return {
        log: function(message) {
            logIt(message, 'info');
        },
        logWarning: function(message) {
            logIt(message, 'warning');
        },
        logSuccess: function(message) {
            logIt(message, 'success');
        },
        logError: function(message) {
            logIt(message, 'error');
        }
    };

    }

})(); 