//import React, { Component } from 'react';

//export class FetchData extends Component {
//  static displayName = FetchData.name;

//  constructor(props) {
//    super(props);
//    this.state = { forecasts: [], loading: true };
//  }

//  componentDidMount() {
//    this.populateWeatherData();
//  }

//  static renderForecastsTable(forecasts) {
//    return (
//      <table className='table table-striped' aria-labelledby="tabelLabel">
//        <thead>
//          <tr>
//            <th>Date</th>
//            <th>Temp. (C)</th>
//            <th>Temp. (F)</th>
//            <th>Summary</th>
//          </tr>
//        </thead>
//        <tbody>
//          {forecasts.map(forecast =>
//            <tr key={forecast.date}>
//              <td>{forecast.date}</td>
//              <td>{forecast.temperatureC}</td>
//              <td>{forecast.temperatureF}</td>
//              <td>{forecast.summary}</td>
//            </tr>
//          )}
//        </tbody>
//      </table>
//    );
//  }

//  render() {
//    let contents = this.state.loading
//      ? <p><em>Loading...</em></p>
//      : FetchData.renderForecastsTable(this.state.forecasts);

//    return (
//      <div>
//        <h1 id="tabelLabel" >Weather forecast</h1>
//        <p>This component demonstrates fetching data from the server.</p>
//        {contents}
//      </div>
//    );
//  }

//  async populateWeatherData() {
//    const response = await fetch('weatherforecast');
//    const data = await response.json();
//    this.setState({ forecasts: data, loading: false });
//  }
//}

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { weather } from './stores/Weather';

@observer
class FetchData extends Component {
    //-- @observer와 함께 사용불가(제거)
    //static displayName = FetchData.name;
    //-- 생성자 불필요(제거)
    /*
    constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
    }
    */
    componentDidMount() {
        //-- WeatherStore로 구현 이동 및 호출 render()로 이동 후 제거
        //this.populateWeatherData();
    }
    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        //-- 1. mobx-persist hydrate 되지 않은 경우 기다림
        //-- 2. mobx-persist hydrate 완료인데 데이터가 없는 경우(최초) 데이터 로딩
        if (weather.hydrated && (!weather.forecasts || weather.forecasts.length === 0)) {
            weather.populateWeatherData();
        }
        let contents = /*this.state.loading*/ weather.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(/*this.state.forecasts);*/ weather.forecasts);
        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <p><button onClick={() => weather.reset()}>reset</button></p>
            </div>
        );
    }
    //-- WeatherStore로 구현 이동
    /*
    async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
    }
    */
}

export default FetchData;