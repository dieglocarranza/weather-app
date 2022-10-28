import { getWeeklyWeather } from './services/weather.js';
import { getLatLng } from './geolocation.js';
import { formatWeekList } from './utils/format-data.js';
import { createDOM } from './utils/dom.js';
import { createPeriodTime } from './period-time.js';

function tabPanelTemplate(id) {
    return `
        <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
            <div class="dayWeather" id="dayWeather-${id}">
                <ul class="dayWeather-list" id="dayWeather-list-${id}">
                    
                </ul>
            </div>
        </div>
    `
}

function createTabPanel(id) {
    const $panel = createDOM(tabPanelTemplate(id));

    if (id > 0) {
        $panel.hidden = true
    }

    return $panel
}


function configWeeklyWeather(weekList) {

    // const $container = document.querySelector('.weeklyWeather')
    const $container = document.querySelector('.tabs')

    weekList.forEach((day, index) => {
        const $panel = createTabPanel(index);
        $container.append($panel);

        day.forEach((weather, indexWeather) => {
            $panel.querySelector('.dayWeather-list').append(createPeriodTime(weather))
        })
    })

}

export default async function weeklyWeather() {

    const { lat, lng, isError } = await getLatLng();
    if (isError) return console.log('Error finding your location')

    const { isError: weeklyWatherError, data: weather } = await getWeeklyWeather(lat, lng);
    if ( weeklyWatherError ) return console.log('oh! an error has occurred getting the FORECAST API data');
    // debugger
    const weekList = formatWeekList(weather.list)
    // debugger
    configWeeklyWeather(weekList);

}