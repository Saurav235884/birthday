$(document).ready(function() {
    // Set current year in footer
    $('#current-year').text(new Date().getFullYear());

    // Birthday countdown (set to next birthday)
    function updateCountdown() {
        const now = new Date();
        // Set next birthday date (month is 0-indexed)
        let nextBirthday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        
        // If birthday already passed this year, set for next year
        if (now > nextBirthday) {
            nextBirthday = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate() + 1);
        }
        
        const diff = nextBirthday - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        $('#days').text(days.toString().padStart(2, '0'));
        $('#hours').text(hours.toString().padStart(2, '0'));
        $('#minutes').text(minutes.toString().padStart(2, '0'));
        $('#seconds').text(seconds.toString().padStart(2, '0'));
    }
    
    
    setInterval(updateCountdown, 1000);
    updateCountdown();

   // Music player
   const birthdaySong = document.getElementById('birthday-song');
   const playBtn = document.getElementById('play-btn');
   let isPlaying = false;
   
   playBtn.addEventListener('click', function() {
       if (isPlaying) {
           birthdaySong.pause();
           playBtn.innerHTML = '<i class="fas fa-music"></i>';
           $(playBtn).removeClass('btn-pulse');
       } else {
           birthdaySong.play();
           playBtn.innerHTML = '<i class="fas fa-pause"></i>';
           $(playBtn).addClass('btn-pulse');
           triggerConfetti();
       }
       isPlaying = !isPlaying;
   });

    // Set current year in footer
    // $('#current-year').text(new Date().getFullYear());

    // const birthdaySong = document.getElementById('birthday-song');
    // const playBtn = document.getElementById('play-btn');
    // let isPlaying = false;
    // let songPlayedAutomatically = false; // To prevent repeated play

    // // Function to play song
    // function playSong() {
    //     birthdaySong.play();
    //     playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    //     $(playBtn).addClass('btn-pulse');
    //     triggerConfetti();
    //     isPlaying = true;
    // }

    // // Birthday countdown to midnight
    // function updateCountdown() {
    //     const now = new Date();

    //     // Set time to midnight (next day 00:00)
    //     const nextMidnight = new Date();
    //     nextMidnight.setHours(24, 0, 0, 0);

    //     const diff = nextMidnight - now;

    //     // Auto play music at midnight
    //     if (diff <= 0 && !songPlayedAutomatically) {
    //         playSong();
    //         songPlayedAutomatically = true;
    //     }

    //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //     $('#days').text(days.toString().padStart(2, '0'));
    //     $('#hours').text(hours.toString().padStart(2, '0'));
    //     $('#minutes').text(minutes.toString().padStart(2, '0'));
    //     $('#seconds').text(seconds.toString().padStart(2, '0'));
    // }

    // setInterval(updateCountdown, 1000);
    // updateCountdown();

    // // Manual Play/Pause button
    // playBtn.addEventListener('click', function () {
    //     if (isPlaying) {
    //         birthdaySong.pause();
    //         playBtn.innerHTML = '<i class="fas fa-music"></i>';
    //         $(playBtn).removeClass('btn-pulse');
    //     } else {
    //         playSong();
    //     }
    //     isPlaying = !isPlaying;
    // });

    

    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Confetti effect
    function triggerConfetti() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF6B6B', '#FFD166', '#06D6A0', '#54A0FF']
        });
    }


});
