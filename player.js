function playM3u8(url, license) {
    var player = new Clappr.Player({
        source: url,
        parentId: '#player',
        preload: 'auto',
        autoPlay: 'true',
        poster: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEJq8-hth02DQV5sT2iEbslrpoUmfX6iX3K54XdSYr7fGt1bzwO9MmYtDQ5Aj5j2-7JVx9Og1KP5qK2mJ41Pe2mEe-m53l8LrB6Y9kbq9VMSHhRl3EIXGnNd6w7pAnjruDBWqOqwi_zIov58I3aX09LsRsYlBOwkUT9_uEsVWdVDaG7pb7kGfXXs8A/s1600/www.paseotvstream.blogspot.com.png',
        position: 'bottom-left',
        watermark: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcWpGFdNizBCAmOfW-_1MdI9E48JtQasmN31Htz9SgSwK8B1Vlao9sQL_IWCFoxVemN2QIralTgfrYsVzJR-X_AtaDv13fyw-9HcIFhf3PWzl6a3rG-scMa4yxajbFacmCyRod_qXVRakz0rPr1oANZVNns-B88psRq2V4PGlrypqEiyv1j93C4arp/s1600/PASEOTVSTREAM.BLOGSPOT.COM.png",
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
