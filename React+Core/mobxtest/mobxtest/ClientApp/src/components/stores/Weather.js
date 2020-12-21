import { observable, action, runInAction } from 'mobx';
import { persist, create } from 'mobx-persist';
import localForage from 'localforage';
import axios from 'axios';

class WeatherStore {
    @persist('list')
    @observable
    forecasts = [];
    @observable
    loading = true;
    //-- mobx-persist ���� ����� ���� ó�� ���� �Ӽ� �߰�
    @observable
    hydrated = false;
    constructor() {
        //-- mobx-persist hydrate()�� ����ҿ��� ������ ȹ��
        const hydrate = create({
            storage: localForage, // AsyncStorage for RN
            jsonify: true // true for RN or saving objects
        });
        hydrate('weather', this)
            .then(() => {
                this.hydrated = true;
                this.loading = false;
            })
            .catch(e => {
                console.warn("WeatherStore hydrate error", e)
            });
    }
    @action
    populateWeatherData(callback) {
        //-- fetch()�� axios()�� ����
        //const response = await fetch('weatherforecast');
        //const data = await response.json();
        axios.get('weatherforecast')
            .then(response => {
                runInAction(() => {
                    this.forecasts = response.data;
                    this.loading = false;
                    if (callback) callback.call(this);
                });
            });
    }
    @action
    reset() {
        this.forecasts = [];
        this.loading = true;
    }
}
let store = new WeatherStore();
export { store as weather, store as weatherStore };