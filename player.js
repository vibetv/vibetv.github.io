function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXBk22Z3LtwPg1rfZDbCyYv8OO1aSA2pAzaQ2E9Yj8ajwOOhtvn8SmIXUtEU9LtSsK3zrXfhZj1h3BrZK4BT7yXZHUWULFxewI7DqlUVeafupp_lA9TBBDNCRur1AeYp_QlZ01GUBp5u-kWHPUYPk7oeFpLB6f2Y1qltYubxQE6sF5LnYD2d5L8Pg5x4-F/s1600/midnight.png',
        position: 'bottom-left',
        watermark: " ",
        width: '100%',
        height: '100%',
        fullscreenEnabled: 'true',
        hideMediaControl: 'false',
        plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback],

        chromecast: {
            appId: '9DFB77C0',
            media: {
                type: ChromecastPlugin.Movie,
                title: 'Player HLS - DASH',
            },
        },

        shakaConfiguration: {
            preferredAudioLanguage: 'en-US',
            drm: {
                servers: {
                    'com.widevine.alpha': license
                }
            },
            streaming: {
                rebufferingGoal: 15
            }
        },
        shakaOnBeforeLoad: function(shaka_player) {
            // shaka_player.getNetworkingEngine().registerRequestFilter() ...
        },

    });

    document.title = "Watching: " + url;

}

playM3u8(window.location.href.split("#")[1], window.location.href.split("=")[1])
