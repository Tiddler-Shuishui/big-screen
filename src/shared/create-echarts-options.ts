import { baseEchartsOptions } from "./base-echarts-options"
import { px } from "./px";


export const createEchartsOptions = (options:any) => {
    const result = {
        ...baseEchartsOptions,
        ...options
    };
    if(!(options?.xAxis?.axisLabel?.fontSize)){
        result.xAxis = result.xAxis || {};
        result.xAxis.axisLabel = result.xAxis.axisLabel || {};
        result.xAxis.axisLabel.fontSize = px(12);
    }
    if(!(options?.yAxis?.axisLabel?.fontSize)){
        result.yAxis = result.yAxis || {};
        result.yAxis.axisLabel = result.yAxis.axisLabel || {};
        result.yAxis.axisLabel.fontSize = px(12);
    }
    return result;
}