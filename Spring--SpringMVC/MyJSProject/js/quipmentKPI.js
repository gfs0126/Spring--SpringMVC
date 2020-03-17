$(function(){
	equipmentKPI('zh_tw');
});

function equipmentKPI(language){
	
	var equimentKPI = document.getElementById('equipmentKPI');
	var myChart = echarts.init(equimentKPI);
		
	var months = [{name:'month',value:['','January','February','March','April','May','June','July','August','September','October','November','December']},
				  {name:'月份',value:[0,1,2,3,4,5,6,7,8,9,10,11,12]}];
	var npi = ['NPI+0','NPI+1','NPI+2'];			  
	var data = [[1,0,5],[2,1,1],[3,0,13],[3,1,5],[3,2,11],[4,0,14],[4,2,11],[8,1,23],[11,2,14]];
	
	if(language == 'zh_tw'){
		months = months[1];
	}else{
		months = months[0];
	}
	
	var	option = {
			title: {
				text: '設備驗收時長 Performance',
				show: true,
				left: 'center',
				textStyle: {                    // 主标题文字样式
				        color: '#333',
				        fontStyle: 'normal',        // 字体风格 
				        fontFamily: 'sans-serif',   // 字体
				    },
			},
		    tooltip: {},
		    visualMap: {
		        max: 20,
		        inRange: {
		            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
		        }
		    },
		    xAxis3D: {
				name: months.name,
		        type: 'category',
		        data: months.value,
				axisLabel:{
				              textStyle:{
				                 color:"red",
				                 fontSize:10
				            },
						}	
		    },
		    yAxis3D: {
				name: 'NPI',
				nameGap: 30,
		        type: 'category',
		        data: npi
		    },
		    zAxis3D: {
				name: 'KPI',
				nameGap: 25,
		        type: 'value'
		    },
		    grid3D: {
		        boxWidth: 200,
		        boxDepth: 80,
		        viewControl: {
		            alpha: 10,
					beta: 0,
		        },
		        light: {
		            main: {
		                intensity: 1.2,
		                shadow: true
		            },
		            ambient: {
		                intensity: 0.3
		            }
		        }
		    },
			dataset: {
			            dimensions: [
			                'month',
			                'npi',
			            ],
			            source: data
			        },
			toolbox: {
			        feature: {
			          dataView: {show: true, readOnly: false},
			        },
			    },		
		    series: [{
		        type: 'bar3D',
				name: 'equipment_kpi',
		    //     data: data.map(function (item) {
		    //         return {
						// dimensions: [
						//     'month',
						//     'npi',
						//     'days'
						// ],
		    //             value: [item[0], item[1], item[2]],
		    //         }
		    //     }),
		        shading: 'lambert',
				
		        label: {
		            textStyle: {
		                fontSize: 16,
		                borderWidth: 1
		            },
		        },
		   
		        emphasis: {
		            label: {
		                textStyle: {
		                    fontSize: 20,
		                    color: '#900'
		                }
		            },
		            itemStyle: {
		                color: '#900'
		            }
		        }
		    }]
		};
	
	
	 myChart.setOption(option);
	
}