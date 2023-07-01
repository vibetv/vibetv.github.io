function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT4o-IE_wY-cR2R8GrtKGwei_5i7RuFDAya1roakCnKDnVEPWZjVJEQ1Ucl1prTtdbX7ZE2X5cVez6Dp3ogMWy_FBzq7rXE-mrJMBm1krciBwdFD3ZYLNgmX-QYXvdVwFnJBM2UaqQXJsWC3lgE4t7DWDc1wAqoMp6Vc7NQVEH9gFmFPCnaextcmRqlr20/s1600/paseotv%20streaming.png',
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
