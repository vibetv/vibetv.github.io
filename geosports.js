// Fetch data from the matches JSON
fetch('//vibetv.github.io/matches.json')
    .then(response => response.json())
    .then(matches => {
        const matchCardsContainer = document.getElementById('matchCards');
        matches.forEach((match, index) => {
            const matchCard = document.createElement('div');
            matchCard.classList.add('match-card');
            matchCard.setAttribute('data-competitions', match.competitions);
            matchCard.setAttribute('data-start-time', match.date);
            matchCard.setAttribute('data-video-url', match.video_url);

            // Create match card HTML structure
            matchCard.innerHTML = `
                <img src="${match.image}" alt="Pertandingan ${match.team1} vs ${match.team2}">
                <div class="match-card-body">
                    <h3>${match.team1} VS ${match.team2}</h3>
                    <p>${new Date(match.date).toLocaleString()}</p>
                    <p class="countdown" id="countdown-${index + 1}">00h 00m 00s</p>
                    <div class="live-badge" id="live-badge-${index + 1}" style="display: none;">LIVE</div>
                </div>
            `;

            matchCard.addEventListener('click', () => {
                playMatchVideo(matchCard);
            });

            matchCardsContainer.appendChild(matchCard);

            // Start countdown
            startCountdown(matchCard, match.date, index + 1);

            // Check if the match is over
            hideFinishedMatch(matchCard, match.date);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

function startCountdown(matchCard, matchDate, index) {
    const countdownElement = document.getElementById(`countdown-${index}`);
    const liveBadge = document.getElementById(`live-badge-${index}`);
    const matchTime = new Date(matchDate);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = matchTime - currentTime;

        if (timeDiff <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Pertandingan Dimulai!";
            countdownElement.classList.remove('pulse'); // Remove pulse effect when match starts
            liveBadge.style.display = 'block'; // Show LIVE badge

            // Remove match card when the match is over
            matchCard.remove();
        } else {
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
            countdownElement.classList.add('pulse'); // Add pulse effect while countdown
        }
    }, 1000);
}

// Play video for selected match
function playMatchVideo(matchCard) {
    const videoUrl = matchCard.getAttribute('data-video-url'); // Ambil URL video
    const imageUrl = matchCard.querySelector('img').src; // Ambil URL gambar (thumbnail)
    const jwPlayerContainer = document.getElementById('jwplayer-container');
    jwPlayerContainer.style.display = 'block'; // Pastikan pemutar terlihat

    // Clear previous player instance
    jwPlayerContainer.innerHTML = ''; // Kosongkan elemen JWPlayer sebelumnya

    // Initialize JWPlayer
    jwplayer(jwPlayerContainer).setup({
        file: videoUrl, // URL video
        image: imageUrl, // URL thumbnail image
        width: '100%', // Lebar pemutar
        height: '100%', // Tinggi pemutar
        autostart: true, // Pemutar tidak dimulai otomatis
        controls: true // Kontrol video aktif
    });
}

// Hide finished matches
function hideFinishedMatch(matchCard, matchDate) {
    const matchTime = new Date(matchDate);
    const interval = setInterval(() => {
        const currentTime = new Date();
        if (currentTime > matchTime) {
            matchCard.remove(); // Hapus kartu pertandingan setelah selesai
            clearInterval(interval); // Hentikan interval setelah disembunyikan
        }
    }, 1000 * 60); // Periksa setiap menit
}

// Filter matches by selected competition
function filterByCompetition() {
    const selectedCompetition = document.getElementById('competitions').value;
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        const matchCompetition = card.getAttribute('data-competitions');
        if (selectedCompetition && matchCompetition !== selectedCompetition) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Event listener untuk klik tombol scroll ke atas
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animasi scroll halus
        });
    });

    // Event listener untuk mendeteksi scroll
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // Menampilkan tombol scroll ke atas jika menggulir lebih dari 20px
            scrollToTopBtn.style.display = "block";
        } else {
            // Menyembunyikan tombol jika kembali ke atas
            scrollToTopBtn.style.display = "none";
        }
    });
});

// Fungsi untuk pencarian pertandingan
function searchMatches() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const matchCards = document.querySelectorAll('.match-card');

    matchCards.forEach(card => {
        const team1 = card.querySelector('h3').textContent.toLowerCase();
        const team2 = card.querySelector('h3').textContent.toLowerCase();

        // Menyaring pertandingan berdasarkan nama tim
        if (team1.includes(searchQuery) || team2.includes(searchQuery)) {
            card.style.display = 'block'; // Tampilkan pertandingan jika cocok
        } else {
            card.style.display = 'none'; // Sembunyikan pertandingan jika tidak cocok
        }
    });
}
