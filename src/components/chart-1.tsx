import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartsOptions } from '../shared/create-echarts-options';

export const Chart1 = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(divRef.current as HTMLDivElement);
  
            // 指定图表的配置项和数据
            var option = createEchartsOptions({
              xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisLine:{
                  show: true,
                  lineStyle:{
                    color: '#0b173b'
                  }
                },
                axisTick:{show: false},
                axisLabel:{
                  formatter(val: string) {
                    if(val.length > 2){
                      const array = val.split('')
                      array.splice(2, 0, '\n')
                      return array.join('');
                    }
                    return val
                  }
                }
              },
              yAxis: {
                axisLine:{
                  show: true,
                  lineStyle:{
                    color: '#0a1a3f'
                  }
                },
                splitLine:{show: false}
              },
              series: [
                {
                  name: '案发数',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20, 56, 44, 55]
                }
              ]
            });
      
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
    })
    return(
        <div className='bordered statistics1'>
          <h2>案发派出所管辖统计</h2>
          <div ref={divRef} className='chart'></div>
        </div>
    )
}