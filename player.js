function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo0KRPL3kZbYUdJkkOyt128VM5wp6u8_v5zLFKXapCzX7rSU3A2HO-ZCJQ7khQOdNhG35XNBI6H7G80-uWIOAGV-HcR_OORdvrJUK7iYOyiIMcQOgP0E1MX-zYlwfrZZY7hQ5U-YtGyYDcqutEsPBNZg1cJP8jLpHmsasjW54CKTzzE2_99iwKSQyYzQ/s1600/paseotvlive.png',
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
