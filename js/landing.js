// Landing page logic
document.addEventListener('DOMContentLoaded', function () {
    const landingView = document.getElementById('landing-view');
    const loginView = document.getElementById('login-view');
    const participateBtn = document.getElementById('landing-participate-btn');

    // Load landing video script only when landing view is active
    if (landingView && !landingView.classList.contains('hidden')) {
        var s = document.createElement("script");
        s.src = "https://scripts.converteai.net/126e9a8d-4c24-46f0-82e5-3c92e231f00c/players/6994d422e6f72024b8cffb16/v4/player.js";
        s.async = true;
        document.head.appendChild(s);
    }

    // Handle participate button click
    if (participateBtn) {
        participateBtn.addEventListener('click', function () {
            // Pause the video player
            const videoPlayer = document.querySelector('#vid-6994d422e6f72024b8cffb16');
            if (videoPlayer && typeof videoPlayer.pause === 'function') {
                videoPlayer.pause();
            }

            // Hide landing view
            if (landingView) {
                landingView.classList.add('hidden');
                landingView.style.display = 'none';
            }

            // Show login view
            if (loginView) {
                loginView.classList.remove('hidden');
                loginView.style.display = 'flex';
            }
        });
    }
});
