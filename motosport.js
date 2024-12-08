let player;

        // Schedule data with categories
        const scheduleData = {
            Formula1: [
                { time: '20:00 WIB', title: 'Formula 1 Grand Prix Abu Dhabi', videoId: '27470' },
            ]
        };
        
        function loadSchedule() {
            const scheduleList = document.getElementById('scheduleList');
            scheduleList.innerHTML = ''; // Clear previous content

            // Iterate through each category (MotoGP, Formula1, etc.)
            for (const category in scheduleData) {
                const categoryContainer = document.createElement('div');
                const categoryTitle = document.createElement('h3');
                categoryTitle.classList.add('category-title');
                categoryTitle.textContent = category;
                categoryContainer.appendChild(categoryTitle);

                const ul = document.createElement('ul');
                scheduleData[category].forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `${item.time} - ${item.title} <br>
                        <span>Video ID: ${item.videoId}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${item.videoId}')">Copy Video ID</button>`;
                    ul.appendChild(listItem);
                });

                categoryContainer.appendChild(ul);
                scheduleList.appendChild(categoryContainer);
            }
        }

        function copyToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Video ID copied to clipboard!');
        }

        // Call the function to load the schedule on page load
        document.addEventListener('DOMContentLoaded', () => {
            loadSchedule();
            startClock();
        });

        function startClock() {
            const clockElement = document.getElementById('clock');
            setInterval(() => {
                const now = new Date();
                clockElement.textContent = now.toLocaleTimeString();
            }, 1000);
        }

        function showTutorial(lang) {
            const tutorialContent = document.getElementById('tutorialContent');
            const tutorialText = {
                en: [
                    '1. Enter the video ID.',
                    '2. Click "Load Video" to start the player.',
                    '3. Join Telegram for updates.'
                ],
                id: [
                    '1. Masukkan ID video.',
                    '2. Klik "Load Video" untuk memulai pemutar.',
                    '3. Bergabung dengan Telegram untuk pembaruan.'
                ]
            };

            const langSteps = tutorialText[lang];
            let tutorialHTML = '<h2>Tutorial Steps</h2><ul>';
            langSteps.forEach(step => {
                tutorialHTML += `<li>${step}</li>`;
            });
            tutorialHTML += '</ul>';

            tutorialContent.innerHTML = tutorialHTML;
        }
        
        // Toggle dark mode on button click
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            // Save user preference in localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        }

        function loadPlayer() {
            const videoIdInput = document.getElementById('videoId');
            const videoId = videoIdInput.value.trim();
            const errorMessage = document.getElementById('error-message');
            
            // Validasi Video ID (hanya angka dan panjang 4-8 karakter)
            if (!/^\d{4,8}$/.test(videoId)) {
                errorMessage.style.display = 'block';
                return;
            }

            errorMessage.style.display = 'none';  // Menyembunyikan pesan kesalahan jika valid
            
            // Menginisialisasi pemutar video dengan ID
            if (player) {
                player.destroy();
            }
            player = new Clappr.Player({
                source: `https://12a001a90a8c45927f7710a6ee02e8e6.v.smtcdns.net/play1nm.hnyongshun.cn/live/ballbar_${videoId}.m3u8`,
                parentId: '#player',
                autoPlay: true,
                width: '100%',
                height: '100%',
                poster: 'https://example.com/poster.jpg'
            });
        }
