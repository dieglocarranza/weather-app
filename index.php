<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The best weather app built by Diego Londono">
    <link rel="icon" type="image/x-icon" href="./images/cloudy.png">
    <title>Weather App by Diego Londono</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body class="body-element">

    <div class="loading" id="loading">
        <div class="image-container">
            <img src="./images/cloudy.png">
        </div>
    </div>

    <div class="app" id="app" hidden>

        <div class="weather-top-section">
            <div class="current-location-details">
                <div class="current-location-container">
                    <div class="current-location--left">
                        <div class="outer">
                            <div class="inner">
                                <img src="./images/pin.png">              
                            </div>
                        </div>
                    </div>
    
                    <div class="current-location--right">
                        <div class="outer">
                            <div class="inner">
                                <span class="current-location-name"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
                <div class="current-location-container">
                    <div class="current-location--left">
                        <div class="outer">
                            <div class="inner">
                                <img src="./images/countries.png" />
                            </div>
                        </div>
                    </div>
    
                    <div class="current-location--right">
                        <div class="outer">
                            <div class="inner">
                                <span class="current-country"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="weather-middle-section">
            <div class="weather-type-image-container outer">
                <div class="inner">
                    <img class="weather-type-image" src="">
                </div>
            </div>
    
            <div class="currentWeather">
                <p id="current-weather-temp" class="currentWeather-temp"></p>
                <div>
                    <p id="current-weather-date" class="currentWeather-date"></p>
                </div>
            </div>
        </div>

        <div class="weather-bottom-section">
            <div class="weeklyWeather">
                <div class="weeklyWeather-marker"></div>
                <div class="tabs" id="tabs">
                    <div class="tabList" role="tablist">
                        <div class="tab" role="tab" aria-selected="true" id="tab-0">
                                
                        </div>
                        <div class="tab" role="tab" id="tab-1">
                                
                        </div>
                        <div class="tab" role="tab" id="tab-2">
                                
                        </div>
                        <div class="tab" role="tab" id="tab-3">
                                
                        </div>
                        <div class="tab" role="tab" id="tab-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="/assets/js/index.js" type="module""></script>
  </body>

</html>