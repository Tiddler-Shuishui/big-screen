import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export const Chart9 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current as HTMLDivElement);
  }, []);

  return (
    <div className="statistics7-3">9
      <div ref={divRef} className="chart">

      </div>
    </div>
  );
};