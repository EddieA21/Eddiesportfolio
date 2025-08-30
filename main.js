
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const portfolioContent = document.getElementById('portfolio-content');
    const progressBar = document.getElementById('progress');
    const tap = document.getElementById("tap");
    const sideMenu = document.getElementById("side_menu");
    const cross = document.getElementById("cross");


    // Start the progress bar animation
    progressBar.style.width = '100%';
    
    // Wait for 3 seconds then show the portfolio
    setTimeout(function() {
        loadingScreen.style.opacity = '0';
        
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            portfolioContent.style.opacity = '1';
        }, 500);
    }, 888);

    // Timeline progress animation
    const timelineProgress = document.getElementById('timeline-progress');
    const journeyContainer = document.getElementById('journey-container');
    
    function updateTimeline() {
        const journeyRect = journeyContainer.getBoundingClientRect();
        const journeyStart = journeyRect.top + window.scrollY;
        const journeyEnd = journeyStart + journeyRect.height;
        
        // Calculate scroll position within the journey container
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < journeyStart) {
            // Before reaching the journey container
            timelineProgress.style.height = '0%';
        } else if (scrollPosition > journeyEnd - window.innerHeight) {
            // After scrolling through the entire journey container
            timelineProgress.style.height = '100%';
        } else {
            // While scrolling through the journey container
            const journeyScroll = scrollPosition - journeyStart;
            const journeyHeight = journeyEnd - journeyStart - window.innerHeight;
            const scrollPercentage = (journeyScroll / journeyHeight) * 100;
            timelineProgress.style.height = Math.min(100, Math.max(0, scrollPercentage)) + '%';
        }
    }
    
    // Initial update
    updateTimeline();
    
    // Update on scroll
    window.addEventListener('scroll', updateTimeline);
    
    // Update on resize
    window.addEventListener('resize', updateTimeline);


    function Start() {
    sideMenu.classList.add("active");
    portfolioContent.style.filter = "blur(5px)";
    }
    function terminate() {
        sideMenu.classList.remove("active");
        portfolioContent.style.filter = "blur(0)";
    }
    tap.addEventListener("click", Start);
    cross.addEventListener("click", terminate);

        // Close menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sideMenu.contains(event.target) && event.target !== tap && sideMenu.classList.contains("active")) {
            terminate();
        }
    });
});
