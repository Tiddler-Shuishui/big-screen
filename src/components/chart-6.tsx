import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json';

export const Chart6 = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
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
            {name: '甘肃省', value: 1},
          ],
          label: {show: false, color: 'white'},
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['甘肃省'],
            borderColor: '#01A7F7',
          }
        },
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省', value: 100},
          ],
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['四川省'],
            borderColor: 'yellow',
          }
        },
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '青海省', value: 100},
          ],
          emphasis: {
            label: {color: 'white'},
            areaColor: '#5470C6',
          },
          itemStyle: {
            areaColor: '#010D3D',
            color: colors['青海省'],
            borderColor: '#01A7F7',
          }
        },

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