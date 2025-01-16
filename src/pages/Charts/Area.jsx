import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
  SeriesDirective, AreaSeries, Inject, DateTime, Legend,SplineAreaSeries} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
          <Header category='Area' title='Inflation Rate in Percentage' />
    <ChartComponent
      id='area-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0}}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services={[ AreaSeries, DateTime, Legend,SplineAreaSeries]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area
