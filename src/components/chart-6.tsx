import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';
import { px } from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
  useEffect(() => {
    var myChart = echarts.init(divRef.current as HTMLDivElement);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {
              name: '甘肃省', value: 1,
              itemStyle:{
                areaColor: colors['甘肃省']
              },
              label:{
                formatter: ''
              }
            },
            {
              name: '四川省', value: 10,
              itemStyle:{
                areaColor: colors['四川省']
              },
              label:{
                formatter: ''
              }
            },
            {
              name: '青海省', value: 10, 
              itemStyle:{
                areaColor: colors['青海省']
              },
              label:{
                formatter: ''
              }
            },
          ],
          label: {show: false, color: 'white', fontSize:px(12)},
          itemStyle: {
            areaColor: '#010D3D',
            borderColor: '#01A7F7'
          },
          emphasis: {
            label: {color: 'white'},
            itemStyle:{areaColor: '#5470C6'}
          },
        }
      ]
    }));
  }, []);

  return (
    <div className="bordered statistics6">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>
        <div className="legend bordered">
          <span className="icon" style={{background: colors['甘肃省']}}/>甘岭籍
          <span className="icon" style={{background: colors['四川省']}}/>边城籍
          <span className="icon" style={{background: colors['青海省']}}/>寒国籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};