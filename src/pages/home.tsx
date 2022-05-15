import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import * as echarts from 'echarts';

const px = (n: number) => {
  return n / 2420 * (window as any).pageWidth
}

export const Home = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(divRef);
          // 基于准备好的dom，初始化echarts实例
          var myChart = echarts.init(divRef.current as HTMLDivElement);

          // 指定图表的配置项和数据
          var option = {
            textStyle:{
              color:'#79839e'
            },
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
                fontSize: px(12),
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
              splitLine:{show: false},
              axisLabel:{
                fontSize: px(12)
              }
            },
            grid:{
              x: px(10),
              y: px(10),
              x2: px(10),
              y2: px(10),
              containLabel: true
            },
            series: [
              {
                name: '案发数',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 56, 44, 55]
              }
            ]
          };
    
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
  })
  return (
    <div className='home'>
      <header style={{backgroundImage:`url(${headerBg})`}}/>
      <main>
        <section className='section1'>
          <div className='bordered statistics1'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
          </div>
        </section>
        <section className='bordered section2'></section>
        <section className='bordered section3'></section>
        <section className='bordered section4'></section>
        <section className='bordered section5'></section>
      </main>
    </div>
  );
};
