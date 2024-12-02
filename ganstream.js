// Setup JWPlayer
        var player = jwplayer("tv-player").setup({
            file: "https://bcovlive-a.akamaihd.net/r2d2c4ca5bf57456fb1d16255c1a535c8/eu-west-1/6058004203002/playlist.m3u8", // Default stream (Football)
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            controls: true
        });

        // Function to format date to DD-MM-YYYY HH:MM (WIB)
        function formatDateToDDMMYYYYHHMM(dateInput) {
            const date = new Date(dateInput);

            // Set timezone to WIB (GMT+7)
            const options = {
                weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hour12: false,
                timeZone: 'Asia/Jakarta'
            };

            const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
            return formattedDate;
        }

        // Function to check if the match is live based on current time
        function checkLiveStatus(matchTime) {
            const now = new Date();
            const matchDate = new Date(matchTime);
            return matchDate <= now; // If match time is in the past, it's considered live
        }

        // Function to update schedule based on selected sport and search input
        function updateSchedule(sport, searchQuery = '') {
            const scheduleDiv = document.getElementById('schedule');
            scheduleDiv.innerHTML = ""; // Clear previous schedule

            fetch('https://vibetv.github.io/schedule.json')  // Fetch JSON data
                .then(response => response.json())
                .then(data => {
                    const sportData = data[sport];

                    sportData.forEach(match => {
                        const formattedDate = formatDateToDDMMYYYYHHMM(match.time);
                        const isLive = checkLiveStatus(match.time);
                        if (isLive) {
                            match.isLive = true;
                        }

                        // Check if search query matches team names or competition
                        if (match.teams.toLowerCase().includes(searchQuery) || match.competition.toLowerCase().includes(searchQuery)) {
                            const matchElement = document.createElement('div');
                            matchElement.classList.add('match');
                            matchElement.innerHTML = `
                                <div>${formattedDate}</div>
                                <div>${match.teams} (${match.competition})</div>
                                ${isLive ? '<div class="live-indicator">LIVE <div class="live-spinner"></div></div>' : ''}
                            `;
                            matchElement.addEventListener('click', () => {
                                player.load({
                                    file: match.stream
                                });
                            });
                            scheduleDiv.appendChild(matchElement);
                        }
                    });
                })
                .catch(error => console.error("Error loading schedule data: ", error));
        }

        // Handle sport selection change
        document.getElementById('sport-select').addEventListener('change', (e) => {
            const searchQuery = document.getElementById('search-box').value.toLowerCase();
            updateSchedule(e.target.value, searchQuery);
        });

        // Handle input search change
        document.getElementById('search-box').addEventListener('input', (e) => {
            const searchQuery = e.target.value.toLowerCase();
            const selectedSport = document.getElementById('sport-select').value;
            updateSchedule(selectedSport, searchQuery);
        });

        // Initial load with default sport (Football)
        updateSchedule('football');
