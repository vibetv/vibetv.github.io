function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLp2LcIsiwWiBeAS6K7SiFBUkY5cZGQEjnpjF7VRYGfe19pAKACi2-x7cpfUTQzfWyJ9QIBtl0DAyuIofMga26MqWd8b7VMrkAavaokra0zDYQ86xChHdyyrmAAnYA5k90xFBHlEQjkCsiiseeyxETlyF2Ha90QKNcXcIpA9Ck4zi9cj3F14SMBa3SAQ/s1600/thumnail%20paseotv.png',
        position: 'bottom-left',
        watermark: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-3Heq6Azi6tckkVyqpIRbZda3jjfAZPrdKzboN6IaMmsDtjw8Kc8e5ufN4Lt_lk1mZnjWlIq9O8bHjgt6ujbIxY3DasJaxayhJjSLQn7Bqza2guR9atrXv9V1K4l3ohfeFJ4rbM9_u5TtySHUHCRIzm4TJr633nmrkViRpBAMdUv9pYMecmWBWoMd/s1600/PASEOTVSTREAM.BLOGSPOT.COM.png",
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
