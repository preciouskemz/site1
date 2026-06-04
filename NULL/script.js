// Ahudiyannem FC - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Remove carousel on mobile
    if (window.innerWidth <= 480) {
        document.querySelectorAll('.carousel-viewport').forEach(function(el) {
            el.remove();
        });
    }

    // Mobile hamburger overlay
    const hamburger = document.getElementById('hamburger');
    const closeBtn = document.getElementById('closeMenu');
    const overlay = document.getElementById('mobileOverlay');
    
    if (hamburger && overlay) {
        hamburger.addEventListener('click', function() {
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
        });
        function closeMobileMenu() {
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobileMenu);
        }
        overlay.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMobileMenu);
        });
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeMobileMenu();
            }
        });
    }

    // Swipe from left edge to open mobile menu
    var touchStartX = 0;
    var touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', function(e) {
        if (!overlay || overlay.classList.contains('active')) return;
        if (window.innerWidth > 1024) return;
        var touch = e.changedTouches[0];
        var dx = touch.clientX - touchStartX;
        var dy = touch.clientY - touchStartY;
        if (touchStartX <= 20 && dx > 40 && Math.abs(dy) < 60) {
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile: tapping header opens the menu
    var headerInner = document.querySelector('.header-inner');
    if (headerInner) {
        headerInner.addEventListener('click', function(e) {
            if (e.target.closest('.mobile-hamburger') || e.target.closest('.logo')) return;
            if (window.innerWidth <= 900 && overlay) {
                overlay.classList.add('active');
                document.body.classList.add('no-scroll');
            }
        });
    }

    // Header scroll effect - SHOW ON SCROLL UP, HIDE ON SCROLL DOWN
    const header = document.getElementById('mainHeader');
    const body = document.body;
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY;
        
        if (currentScroll > 80) {
            header.classList.add('scrolled');
            if (currentScroll < lastScroll) {
                // Scrolling UP - show header
                if (header) {
                    header.style.transform = 'translateY(0)';
                }
            } else {
                // Scrolling DOWN - hide header
                if (header) {
                    header.style.transform = 'translateY(-100%)';
                }
                // Close mobile menu on scroll
                if (overlay) {
                    overlay.classList.remove('active');
                    body.classList.remove('no-scroll');
                }
            }
        } else {
            // At top
            header.classList.remove('scrolled');
            if (header) {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
});

// All Matches Data - UPDATE HERE
const allMatches = [
    // MEN'S MATCHES
    {
        id: 'men-1',
        league: 'men',
        leagueLogo: '../All Asset/assets/nlo-logo.png',
        leagueName: 'NLO Abia Centre',
        matchDate: '2026-06-14T15:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Ahudiyannem FC',
        homeCity: 'Abiriba, Abia State',
        homeLogo: '../All Asset/assets/logo.png',
        awayTeam: 'Galadima FC',
        awayCity: 'Abia State',
        awayLogo: null,
        stadium: 'Umuahia Township Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'Ahudiyannem FC returns to home soil for a crucial NLO Abia Centre fixture against Galadima FC. The team has been impressive this season and will look to continue their fine form.',
        awayDesc: 'Galadima FC travel to Umuahia with determination. The away side will need to be at their defensive best to contain the home team\'s attacking threats.'
    },
    {
        id: 'men-2',
        league: 'men',
        leagueLogo: '../All Asset/assets/nlo-logo.png',
        leagueName: 'NLO Abia Centre',
        matchDate: '2026-06-07T15:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Right 2 Win FC Abia',
        homeCity: 'Abia State',
        homeLogo: null,
        awayTeam: 'Ahudiyannem FC',
        awayCity: 'Abiriba, Abia State',
        awayLogo: '../All Asset/assets/logo.png',
        stadium: 'Ubakala Mini Stadium',
        city: 'Ubakala, Umuahia',
        hostDesc: 'Right 2 Win FC Abia, current league leaders, host Ahudiyannem FC in a top-of-the-table NLO clash. The home side has been formidable this season with an impressive goal difference.',
        awayDesc: 'Ahudiyannem FC travels for this challenging away fixture against the league leaders. The team will need to be at its absolute best to get a result.'
    },
    // WOMEN'S MATCHES
    {
        id: 'women-1',
        league: 'women',
        leagueLogo: '../All Asset/assets/nwfl-logo.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-06-10T16:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Ahudiyannem Queens',
        homeCity: 'Abiriba, Abia State',
        homeLogo: '../All Asset/assets/logo.png',
        awayTeam: 'Remo Stars Ladies',
        awayCity: 'Ogun State',
        awayLogo: null,
        stadium: 'Umuahia Township Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'Ahudiyannem Queens face Remo Stars Ladies in the NWFL Super Six Championship round. The Queens finished 4th in Group B and will be eager to prove themselves against the top sides.',
        awayDesc: 'Remo Stars Ladies, who finished 6th in Group B with 24 points, travel to Umuahia for this Super Six encounter. Both teams will be fighting for a strong finish.'
    },
    {
        id: 'women-2',
        league: 'women',
        leagueLogo: '../All Asset/assets/nwfl-logo.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-05-03T16:00:00',
        score: '0 - 2',
        status: 'concluded',
        homeTeam: 'Ahudiyannem Queens',
        homeCity: 'Abiriba, Abia State',
        homeLogo: '../All Asset/assets/logo.png',
        awayTeam: 'Nasarawa Amazons',
        awayCity: 'Lafia, Nasarawa State',
        awayLogo: null,
        stadium: 'Umuahia Township Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'Ahudiyannem Queens fell to a 2-0 defeat against Nasarawa Amazons in their final Group B fixture of the regular season. The Amazons\' clinical finishing proved the difference.',
        awayDesc: 'Nasarawa Amazons secured a crucial away victory to cement their 2nd place finish in Group B. The visitors were organized and took their chances when they came.'
    },
    {
        id: 'women-3',
        league: 'women',
        leagueLogo: '../All Asset/assets/nwfl-logo.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-04-26T16:00:00',
        score: '3 - 0',
        status: 'concluded',
        homeTeam: 'Ahudiyannem Queens',
        homeCity: 'Abiriba, Abia State',
        homeLogo: '../All Asset/assets/logo.png',
        awayTeam: 'Osun Babes',
        awayCity: 'Osogbo, Osun State',
        awayLogo: null,
        stadium: 'Umuahia Township Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'A commanding 3-0 victory for Ahudiyannem Queens at home! The Queens dominated from start to finish with Grace Aaron scoring a brace.',
        awayDesc: 'Osun Babes struggled to contain the home side\'s attacking intensity. The defeat leaves them in the relegation battle.'
    },
    // FRIENDLY
    {
        id: 'friendly-1',
        league: 'friendly',
        leagueLogo: '../All Asset/assets/logo.png',
        leagueName: 'Friendly Match',
        matchDate: '2026-06-28T17:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Ahudiyannem FC',
        homeCity: 'Abiriba, Abia State',
        homeLogo: '../All Asset/assets/logo.png',
        awayTeam: 'Abia Comets',
        awayCity: 'Umuahia, Abia State',
        awayLogo: null,
        stadium: 'Ahudiyannem Stadium',
        city: 'Abiriba, Abia',
        hostDesc: 'Ahudiyannem FC hosts Abia Comets in a pre-season friendly. These matches provide valuable minutes for squad players and help build team cohesion.',
        awayDesc: 'Abia Comets bring local derby intensity to this friendly encounter. Both clubs will use this as preparation for the upcoming season.'
    }
];

const MATCH_DURATION = 2 * 60 * 60 * 1000; // 2 hours

// Get current status based on actual time
function getMatchStatus(match) {
    const currentTime = new Date().getTime();
    const matchTime = new Date(match.matchDate).getTime();
    const matchEndTime = matchTime + MATCH_DURATION;
    
    if (currentTime >= matchTime && currentTime < matchEndTime) {
        return 'live';
    } else if (currentTime >= matchEndTime) {
        return 'concluded';
    }
    return 'upcoming';
}

// UPDATE BANNER - Get next or live match
// UPDATE MATCH CARDS
function updateMatchCards() {
    const slider = document.getElementById('matchSlider');
    if (!slider) return;
    
    slider.innerHTML = '';
    
    // Sort: live first, then upcoming, then concluded
    const sortedMatches = [...allMatches].sort((a, b) => {
        if (a.status === 'live' && b.status !== 'live') return -1;
        if (b.status === 'live' && a.status !== 'live') return 1;
        if (a.status === 'upcoming' && b.status === 'concluded') return -1;
        if (b.status === 'upcoming' && a.status === 'concluded') return 1;
        return new Date(a.matchDate) - new Date(b.matchDate);
    });
    
    sortedMatches.forEach(match => {
        const isWomen = match.homeTeam.includes('Queens') || match.homeTeam.includes('Ladies') ||
                       match.awayTeam.includes('Queens') || match.awayTeam.includes('Ladies');
        const isMen = match.league === 'men';
        const isFriendly = match.league === 'friendly';
        
        // Get real-time status based on current time
        const liveStatus = getMatchStatus(match);
        
        let cardClass = 'match-card';
        if (liveStatus === 'concluded') cardClass += ' result-card';
        if (isWomen) cardClass += ' women-card';
        if (isMen) cardClass += ' men-card';
        if (isFriendly) cardClass += ' friendly-card';
        
        const date = new Date(match.matchDate);
        const day = date.getDate().toString().padStart(2, '0');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[date.getMonth()];
        const hours = date.getHours().toString().padStart(2, '0');
        const mins = date.getMinutes().toString().padStart(2, '0');
        
        const logo1 = match.homeLogo || '../All Asset/assets/logo.png';
        const logo2 = match.awayLogo || '../All Asset/assets/logo.png';
        
        const statusText = liveStatus === 'concluded' ? 'FULL TIME' : (liveStatus === 'live' ? 'LIVE NOW' : `${hours}:${mins} WAT`);
        
        // Add live indicator class if match is live
        if (liveStatus === 'live') {
            cardClass += ' live-card';
        }
        
        let teamsHTML = '';
        if (liveStatus === 'concluded' || liveStatus === 'live') {
            teamsHTML = `
                <div class="team">
                    <img src="${logo1}" alt="${match.homeTeam}" class="team-img">
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="score">${match.score}</div>
                <div class="team">
                    <div class="team-logo">${getInitials(match.awayTeam)}</div>
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            `;
        } else {
            teamsHTML = `
                <div class="team">
                    <img src="${logo1}" alt="${match.homeTeam}" class="team-img">
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="vs-text">VS</div>
                <div class="team">
                    <div class="team-logo">${getInitials(match.awayTeam)}</div>
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            `;
        }
        
        const card = document.createElement('div');
        card.className = cardClass;
        card.dataset.category = isWomen ? 'women' : (isMen ? 'men' : 'friendly');
        card.dataset.matchId = match.id;
        card.dataset.index = sortedMatches.indexOf(match);
        card.innerHTML = `
            <div class="league-info">
                <img src="${match.leagueLogo}" alt="${match.leagueName}" class="league-badge">
                <p>${match.leagueName}<br><span>${day} ${month} 2026 • ${statusText}</span></p>
            </div>
            <div class="date-large">${day} ${month}</div>
            <div class="teams">${teamsHTML}</div>
            <div class="venue">${match.stadium}, ${match.city}</div>
        `;
        
        slider.appendChild(card);
        
        // Don't animate on initial load - wait for scroll trigger
        card.style.opacity = '0';
    });
}

// Scroll-triggered animation for match cards
let matchCardsAnimated = false;
function animateMatchCardsOnScroll() {
    if (matchCardsAnimated) return;
    
    const slider = document.getElementById('matchSlider');
    if (!slider) return;
    
    const cards = slider.querySelectorAll('.match-card');
    cards.forEach((card, index) => {
        const delayClass = `float-delay-${Math.min(index, 8)}`;
        card.classList.add('float-in-bounce', delayClass);
        card.style.opacity = '1';
        
        setTimeout(() => {
            card.classList.remove('float-in-bounce', delayClass);
        }, 500 + (index * 100));
    });
    
    matchCardsAnimated = true;
}

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
}

// UPDATE TABLES — tables now use hardcoded standings
function updateTables() {
    // No dynamic table updates needed — standings are hardcoded
}

// TOGGLE GENDER (Male/Female switch for results section)
function toggleGender() {
    const checkbox = document.getElementById('genderCheckbox');
    const maleTable = document.getElementById('maleTable');
    const femaleTable = document.getElementById('femaleTable');
    const maleSidebar = document.getElementById('maleSidebar');
    const femaleSidebar = document.getElementById('femaleSidebar');
    const resultsSection = document.querySelector('.results-section');
    
    if (checkbox.checked) {
        if (maleTable) maleTable.style.display = 'none';
        if (femaleTable) femaleTable.style.display = 'block';
        if (maleSidebar) maleSidebar.style.display = 'none';
        if (femaleSidebar) femaleSidebar.style.display = 'block';
        if (resultsSection) resultsSection.classList.add('female-mode');
    } else {
        if (maleTable) maleTable.style.display = 'block';
        if (femaleTable) femaleTable.style.display = 'none';
        if (maleSidebar) maleSidebar.style.display = 'block';
        if (femaleSidebar) femaleSidebar.style.display = 'none';
        if (resultsSection) resultsSection.classList.remove('female-mode');
    }
}

// MODAL FUNCTIONS
function openModal(matchId) {
    const match = allMatches.find(m => m.id === matchId);
    if (!match) return;
    
    // Get real-time status based on current time
    const liveStatus = getMatchStatus(match);
    
    const modal = document.getElementById('matchModal');
    const date = new Date(match.matchDate);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    document.getElementById('modalLeagueLogo').src = match.leagueLogo;
    document.getElementById('modalLeagueName').textContent = match.leagueName + (liveStatus === 'concluded' ? ' - FULL TIME' : '');
    document.getElementById('modalMatchDate').textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}${liveStatus !== 'concluded' ? ' • ' + date.getHours().toString().padStart(2,'0') + ':' + date.getMinutes().toString().padStart(2,'0') + ' WAT' : ''}`;
    
    // Show/hide LIVE button based on real-time status
    const liveBtn = document.getElementById('modalLiveBtn');
    if (liveBtn) {
        if (liveStatus === 'live') {
            liveBtn.style.display = 'inline-block';
        } else {
            liveBtn.style.display = 'none';
        }
    }
    
    document.getElementById('modalHomeLogo').src = match.homeLogo || '../All Asset/assets/logo.png';
    document.getElementById('modalHomeTeam').textContent = match.homeTeam;
    document.getElementById('modalHomeCity').textContent = match.homeCity;
    
    document.getElementById('modalAwayLogo').src = match.awayLogo || '../All Asset/assets/logo.png';
    document.getElementById('modalAwayTeam').textContent = match.awayTeam;
    document.getElementById('modalAwayCity').textContent = match.awayCity;
    
    document.getElementById('modalStadium').textContent = match.stadium;
    document.getElementById('modalCity').textContent = match.city;
    
    const hostTitle = document.getElementById('modalHostTitle');
    const awayTitle = document.getElementById('modalAwayTitle');
    
    if (liveStatus === 'concluded') {
        hostTitle.textContent = `${match.homeTeam} Performance`;
        awayTitle.textContent = `${match.awayTeam} Performance`;
        document.getElementById('modalHostDesc').textContent = `Full Time: ${match.homeTeam} ${match.score} ${match.awayTeam}. ${match.hostDesc}`;
        document.getElementById('modalAwayDesc').textContent = `Full Time: ${match.homeTeam} ${match.score} ${match.awayTeam}. ${match.awayDesc}`;
    } else {
        hostTitle.textContent = `Host: ${match.homeTeam}`;
        awayTitle.textContent = `Away: ${match.awayTeam}`;
        document.getElementById('modalHostDesc').textContent = match.hostDesc;
        document.getElementById('modalAwayDesc').textContent = match.awayDesc;
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('matchModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// EVENT LISTENERS
document.addEventListener('click', function(e) {
    const card = e.target.closest('.match-card');
    if (card && !e.target.closest('button')) {
        openModal(card.dataset.matchId);
    }
    
    if (e.target.id === 'matchModal') {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

// FILTER MATCHES
function filterMatches(category, btn) {
    const cards = document.querySelectorAll('.match-card');
    const tabs = document.querySelectorAll('.tabs button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    btn.classList.add('active');
    
    // Reset all cards first
    cards.forEach(card => {
        card.classList.remove('float-in', 'float-in-bounce', 'float-in-scale');
        for (let i = 0; i <= 8; i++) {
            card.classList.remove(`float-delay-${i}`);
        }
        card.style.opacity = '0';
        card.style.transform = '';
    });
    
    // Animate matching cards
    let visibleIndex = 0;
    cards.forEach((card, index) => {
        const isMatch = category === 'all' || card.dataset.category === category;
        
        if (isMatch) {
            card.style.display = 'flex';
            card.style.visibility = 'visible';
            card.style.pointerEvents = 'auto';
            
            // Trigger reflow for animation
            card.offsetHeight;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            
            visibleIndex++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Apply float animation to visible cards
    cards.forEach((card, index) => {
        const isMatch = category === 'all' || card.dataset.category === category;
        if (isMatch) {
            const delayClass = `float-delay-${Math.min(index, 8)}`;
            card.classList.add('float-in', delayClass);
        }
    });
}

// SLIDER
function slideMatches(direction) {
    const slider = document.getElementById('matchSlider');
    if (!slider) return;
    
    if (direction === 'prev') {
        slider.scrollLeft -= 320;
    } else {
        slider.scrollLeft += 320;
    }
}

// SHOW TAB (for Match Center Men's/Women's Tabs)
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const contents = document.querySelectorAll('.match-grid');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const activeTab = document.querySelector(`.tab-btn[onclick="showTab('${tabName}')"]`);
    if (activeTab) activeTab.classList.add('active');
    
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.style.display = 'flex';
    }
}

// NEWS MODAL FUNCTIONS
function openNewsModal(tile) {
    const modal = document.getElementById('newsModal');
    if (!modal) return;
    
    const image = tile.dataset.image || '';
    const title = tile.dataset.title || '';
    const date = tile.dataset.date || '';
    const highlight = tile.dataset.highlight || '';
    const content = tile.dataset.content || '';
    
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('modalHighlight').textContent = highlight;
    document.getElementById('modalText').textContent = content;
    
    modal.classList.add('active');
    document.body.classList.add('news-modal-open');
}

function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('news-modal-open');
    }
}

// Initialize news tiles click handlers
document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.news-card');
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            openNewsModal(this);
        });
        tile.style.cursor = 'pointer';
    });
    
    // Close modal on click outside
    const modal = document.getElementById('newsModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                closeNewsModal();
            }
        });
    }
});

// FOOTER INFO MODALS
function openFooterInfoModal(type) {
    const modal = document.getElementById('footerInfoModal');
    if (!modal) return;
    const title = document.getElementById('footerModalTitle');
    const text = document.getElementById('footerModalText');
    const data = {
        about: {
            title: 'About Ahudiyannem FC',
            text: 'Ahudiyannem Football Club is a Nigerian football club based in Abiriba, Abia State, founded by Dr. Robert Daniel Onyeani. The club has rapidly risen through the ranks of Nigerian football, with both a men\'s team and a women\'s team (Ahudiyannem Queens) competing at the highest levels.\n\nThe men\'s team made headlines by winning the 2025 Abia FA Cup, and stands as one of the two state representatives flying Abia\'s flag in the Nigeria Presidential Cup 2026 — having reached back-to-back finals and claiming the title as champions.\n\nThe women\'s team, Ahudiyannem Queens, gained promotion to the Nigeria Women Football League (NWFL) Premiership in 2025, competing against the best teams in the country. They are the reigning champions of the Abia State FA Cup (Women), having retained their title as back-to-back champions for the second consecutive year.'
        },
        history: {
            title: 'Club History',
            text: 'The Ahudiyannem men\'s side was founded three years ago, while the women\'s team followed a year later. In just three years of existence, both teams have already won the Abia FA Cup.\n\nThe club was founded by Dr. Robert Daniel Onyeani, a passionate football enthusiast with a vision to develop football talent in Abia State. Starting from humble beginnings, the club quickly established itself as a force in Nigerian football.\n\nThe women\'s side, Ahudiyannem Queens, gained promotion to the Nigeria Women Football League (NWFL) Premiership in 2025, marking a historic achievement. The men\'s team continues to compete at the highest levels, having reached back-to-back Nigeria Presidential Cup finals.'
        },
        management: {
            title: 'Management - Dr. Robert Daniel Onyeani',
            text: 'Dr. Robert Daniel Onyeani is the founder and visionary behind Ahudiyannem Football Club. A passionate football enthusiast and community leader, Dr. Onyeani established the club with the mission of developing football talent and creating opportunities for young athletes in Abia State, Nigeria.\n\nUnder his leadership, Ahudiyannem FC has experienced remarkable growth, with both the men\'s and women\'s teams achieving success at the state and national levels. His commitment to excellence, community development, and youth empowerment continues to drive the club forward.\n\nDr. Onyeani\'s vision extends beyond the pitch, focusing on using football as a tool for social change and community development in Abiriba and beyond.'
        }
    };
    const info = data[type] || data.about;
    title.textContent = info.title;
    text.textContent = info.text;
    modal.classList.add('active');
    document.body.classList.add('news-modal-open');
}

function closeFooterInfoModal() {
    const modal = document.getElementById('footerInfoModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('news-modal-open');
    }
}

// Close footer modal on click outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('footerInfoModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                closeFooterInfoModal();
            }
        });
    }
});

// INITIALIZE
function init() {
    updateMatchCards();
    updateTables();
    
    // Intersection Observer for scroll-triggered animations
    const matchSection = document.getElementById('matchSection');
    if (matchSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateMatchCardsOnScroll();
                    observer.unobserve(entry.target);
    }
});

// Match banner gender toggle
        }, { threshold: 0.5 });
        
        observer.observe(matchSection);
    }
    
    // Re-check match status every minute
    setInterval(() => {
        let needsUpdate = false;
        allMatches.forEach(match => {
            const newStatus = getMatchStatus(match);
            if (newStatus !== match.status) {
                match.status = newStatus;
                needsUpdate = true;
            }
        });
        if (needsUpdate) {
            updateMatchCards();
            matchCardsAnimated = false;
            setTimeout(animateMatchCardsOnScroll, 100);
        }
    }, 60000);
}

// SHOP CAROUSEL — INFINITE SINGLE-ITEM SLIDE
(function() {
    const track = document.getElementById('productTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!track || !prevBtn || !nextBtn) return;

    const realCards = Array.from(track.children);
    const N = realCards.length;
    if (N === 0) return;

    // Clone ALL items for seamless infinite loop
    for (var i = N - 1; i >= 0; i--) {
        var clone = realCards[i].cloneNode(true);
        track.insertBefore(clone, track.firstChild);
    }
    for (var i = 0; i < N; i++) {
        var clone = realCards[i].cloneNode(true);
        track.appendChild(clone);
    }

    var currentIndex = N; // start at first real item (in the middle set)
    var autoInterval = null;
    var isTransitioning = false;

    function getSlideStep() {
        var first = track.children[0];
        var style = window.getComputedStyle(track);
        var gap = parseFloat(style.gap) || 25;
        return first.getBoundingClientRect().width + gap;
    }

    function slideTo(index, animate) {
        var step = getSlideStep();
        if (!animate) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        }
        track.style.transform = 'translateX(-' + (index * step) + 'px)';
        if (!animate) {
            void track.offsetHeight;
            track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        }
    }

    function handleTransitionEnd() {
        if (currentIndex >= N * 2) {
            currentIndex -= N;
            slideTo(currentIndex, false);
        } else if (currentIndex < N) {
            currentIndex += N;
            slideTo(currentIndex, false);
        }
        isTransitioning = false;
    }

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        slideTo(currentIndex, true);
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        slideTo(currentIndex, true);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoPlay() {
        if (autoInterval) {
            clearInterval(autoInterval);
            autoInterval = null;
        }
    }

    nextBtn.addEventListener('click', function() {
        nextSlide();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', function() {
        prevSlide();
        startAutoPlay();
    });

    track.addEventListener('transitionend', handleTransitionEnd);

    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoPlay);
        wrapper.addEventListener('mouseleave', startAutoPlay);
        wrapper.addEventListener('touchstart', stopAutoPlay);
        wrapper.addEventListener('touchend', startAutoPlay);
    }

    // Mouse + Touch drag support
    var dragStartX = 0;
    var dragStartY = 0;
    var dragOffset = 0;
    var isDragging = false;
    var currentTranslate = 0;

    function getBaseTranslate() {
        var step = getSlideStep();
        return -(currentIndex * step);
    }

    function onDragStart(clientX, clientY) {
        isDragging = true;
        dragStartX = clientX;
        dragStartY = clientY;
        dragOffset = 0;
        currentTranslate = getBaseTranslate();
        track.style.transition = 'none';
        track.style.cursor = 'grabbing';
        stopAutoPlay();
    }

    function onDragMove(clientX, clientY) {
        if (!isDragging) return;
        var dx = clientX - dragStartX;
        var dy = clientY - dragStartY;
        // Only trigger if horizontal drag dominates
        if (Math.abs(dx) > 5 || Math.abs(dragOffset) > 5) {
            dragOffset = dx;
            track.style.transform = 'translateX(' + (currentTranslate + dragOffset) + 'px)';
        }
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        track.style.cursor = '';
        var step = getSlideStep();
        var threshold = step * 0.25;
        if (dragOffset < -threshold) {
            nextSlide();
        } else if (dragOffset > threshold) {
            prevSlide();
        } else {
            slideTo(currentIndex, true);
        }
        startAutoPlay();
    }

    track.addEventListener('mousedown', function(e) {
        onDragStart(e.clientX, e.clientY);
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        onDragMove(e.clientX, e.clientY);
    });

    document.addEventListener('mouseup', function(e) {
        onDragEnd();
    });

    track.addEventListener('touchstart', function(e) {
        onDragStart(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }, { passive: true });

    track.addEventListener('touchmove', function(e) {
        onDragMove(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
        onDragEnd();
    }, { passive: true });

    // Prevent track from being selected during drag
    track.addEventListener('dragstart', function(e) { e.preventDefault(); });

    slideTo(currentIndex, false);

    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            slideTo(currentIndex, false);
        }, 100);
    });

    window.addEventListener('load', function() {
        slideTo(currentIndex, false);
        startAutoPlay();
    });
})();

// FUTURISTIC RESULTS TOGGLE
function toggleFuturisticResults(tab) {
    const mens = document.getElementById('futuristicMens');
    const womens = document.getElementById('futuristicWomens');
    const btns = document.querySelectorAll('.glass-toggle .tab-btn');
    
    btns.forEach(b => b.classList.remove('active'));
    
    if (tab === 'mens') {
        if (mens) mens.style.display = 'block';
        if (womens) womens.style.display = 'none';
        if (btns[0]) btns[0].classList.add('active');
    } else {
        if (mens) mens.style.display = 'none';
        if (womens) womens.style.display = 'block';
        if (btns[1]) btns[1].classList.add('active');
    }
}

// Run when page loads
init();

// Section entrance stagger animation
document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('section');
    var animObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var section = entry.target;
                var items = section.querySelectorAll('.anim-item');
                
                setTimeout(function() {
                    items.forEach(function(item, index) {
                        setTimeout(function() {
                            item.classList.add('visible-item');
                        }, (index + 1) * 200);
                    });
                }, 200);
                
                animObserver.unobserve(section);
            }
        });
    }, { threshold: 0.1 });
    
    function isContainer(tag) {
        return tag === 'DIV' || tag === 'SECTION' || tag === 'HEADER' || tag === 'FOOTER' || tag === 'NAV' || tag === 'UL' || tag === 'OL' || tag === 'LI';
    }
    
    sections.forEach(function(section) {
        section.classList.add('anim-section');
        
        for (var i = 0; i < section.children.length; i++) {
            var child = section.children[i]; // depth 1
            if (child.getAttribute('data-no-anim') !== null) continue;
            if (!isContainer(child.tagName)) {
                child.classList.add('anim-item');
                continue;
            }
            for (var j = 0; j < child.children.length; j++) {
                var gc = child.children[j]; // depth 2
                if (gc.getAttribute('data-no-anim') !== null) continue;
                if (!isContainer(gc.tagName)) {
                    gc.classList.add('anim-item');
                    continue;
                }
                for (var k = 0; k < gc.children.length; k++) {
                    if (gc.children[k].getAttribute('data-no-anim') !== null) continue;
                    if (!isContainer(gc.children[k].tagName)) {
                        gc.children[k].classList.add('anim-item');
                    } else {
                        for (var m = 0; m < gc.children[k].children.length; m++) {
                            gc.children[k].children[m].classList.add('anim-item');
                        }
                    }
                }
            }
        }
        
        animObserver.observe(section);
    });
    
    // Animate hero section immediately on load (no scroll wait)
    var heroSection = document.querySelector('.hero-banner');
    if (heroSection) {
        var heroItems = heroSection.querySelectorAll('.anim-item');
        heroItems.forEach(function(item, index) {
            setTimeout(function() {
                item.classList.add('visible-item');
            }, (index + 1) * 80);
        });
    }
});

// Match banner gender toggle
var currentBannerGender = 'men';

function getNextMatchByGender(gender) {
    var upcoming = [];
    for (var i = 0; i < allMatches.length; i++) {
        var m = allMatches[i];
        var status = getMatchStatus(m);
        if (status === 'upcoming') {
            var isWomen = m.homeTeam.indexOf('Queens') !== -1 || m.homeTeam.indexOf('Ladies') !== -1 ||
                          m.awayTeam.indexOf('Queens') !== -1 || m.awayTeam.indexOf('Ladies') !== -1;
            if ((gender === 'men' && !isWomen) || (gender === 'women' && isWomen)) {
                upcoming.push(m);
            }
        }
    }
    upcoming.sort(function(a, b) {
        return new Date(a.matchDate) - new Date(b.matchDate);
    });
    return upcoming.length > 0 ? upcoming[0] : null;
}

function updateBannerMatch(gender) {
    var match = getNextMatchByGender(gender);
    if (!match) return;
    
    var ahudiyannemName = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? match.homeTeam : match.awayTeam;
    var opponentName = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? match.awayTeam : match.homeTeam;
    var ahudiyannemLogo = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? (match.homeLogo || '../All Asset/assets/logo.png') : (match.awayLogo || '../All Asset/assets/logo.png');
    var opponentLogo = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? (match.awayLogo || '../All Asset/assets/logo.png') : (match.homeLogo || '../All Asset/assets/logo.png');
    
    var teamA = document.getElementById('bannerTeamA');
    var teamB = document.getElementById('bannerTeamB');
    var logoA = document.getElementById('bannerLogoA');
    var logoB = document.getElementById('bannerLogoB');
    var scheduleInfo = document.getElementById('bannerSchedule');
    
    if (teamA) teamA.textContent = ahudiyannemName;
    if (teamB) teamB.textContent = opponentName;
    if (logoA) logoA.src = ahudiyannemLogo;
    if (logoB) logoB.src = opponentLogo;
    
    // Update schedule info
    var date = new Date(match.matchDate);
    var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    var months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    var dayName = days[date.getDay()];
    var dayNum = date.getDate().toString().padStart(2, '0');
    var monthName = months[date.getMonth()];
    var hours = date.getHours().toString().padStart(2, '0');
    var mins = date.getMinutes().toString().padStart(2, '0');
    
    if (scheduleInfo) {
        scheduleInfo.textContent = dayName + ', ' + dayNum + ' ' + monthName + ' ' + date.getFullYear() + ' AT ' + hours + ':' + mins + ' WAT';
    }
    
    // Update the countdown target
    window.bannerTargetDate = date.getTime();
    
    // Update toggle buttons
    var menBtn = document.getElementById('bannerToggleMen');
    var womenBtn = document.getElementById('bannerToggleWomen');
    if (menBtn) menBtn.classList.remove('active');
    if (womenBtn) womenBtn.classList.remove('active');
    if (gender === 'men' && menBtn) menBtn.classList.add('active');
    if (gender === 'women' && womenBtn) womenBtn.classList.add('active');
}

function switchBannerGender(gender) {
    currentBannerGender = gender;
    updateBannerMatch(gender);
}

// Banner countdown timer — updates every second based on selected match
(function() {
    function dynamicBannerCountdown() {
        var target = window.bannerTargetDate;
        if (!target) {
            target = new Date('2026-04-09T15:00:00+01:00').getTime();
            window.bannerTargetDate = target;
        }
        var now = new Date().getTime();
        var diff = target - now;
        
        if (diff <= 0) {
            document.getElementById('bannerDays').textContent = '00';
            document.getElementById('bannerHours').textContent = '00';
            document.getElementById('bannerMins').textContent = '00';
            document.getElementById('bannerSecs').textContent = '00';
            return;
        }
        
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('bannerDays').textContent = String(days).padStart(2, '0');
        document.getElementById('bannerHours').textContent = String(hours).padStart(2, '0');
        document.getElementById('bannerMins').textContent = String(mins).padStart(2, '0');
        document.getElementById('bannerSecs').textContent = String(secs).padStart(2, '0');
    }
    
    // Initialize with Men's match on page load
    document.addEventListener('DOMContentLoaded', function() {
        updateBannerMatch('men');
        dynamicBannerCountdown();
        setInterval(dynamicBannerCountdown, 1000);
    });
})();

// Our Fixtures section - populate table
var currentFixtureGender = 'men';

function switchFixtureGender(gender) {
    currentFixtureGender = gender;
    var menBtn = document.getElementById('fixtureTabMen');
    var womenBtn = document.getElementById('fixtureTabWomen');
    if (menBtn) menBtn.classList.remove('active');
    if (womenBtn) womenBtn.classList.remove('active');
    if (gender === 'men' && menBtn) menBtn.classList.add('active');
    if (gender === 'women' && womenBtn) womenBtn.classList.add('active');
    populateFixtureTable(gender);
}

function populateFixtureTable(gender) {
    var tbody = document.getElementById('fixtureTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    var fixtures = [];
    for (var i = 0; i < allMatches.length; i++) {
        var m = allMatches[i];
        var status = getMatchStatus(m);
        if (status !== 'upcoming') continue;
        var isWomen = m.homeTeam.indexOf('Queens') !== -1 || m.homeTeam.indexOf('Ladies') !== -1 ||
                      m.awayTeam.indexOf('Queens') !== -1 || m.awayTeam.indexOf('Ladies') !== -1;
        if ((gender === 'men' && !isWomen) || (gender === 'women' && isWomen)) {
            fixtures.push(m);
        }
    }
    fixtures.sort(function(a, b) {
        return new Date(a.matchDate) - new Date(b.matchDate);
    });
    
    if (fixtures.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px;color:rgba(255,255,255,0.5);font-weight:600;">No upcoming fixtures</td></tr>';
        return;
    }
    
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for (var i = 0; i < fixtures.length; i++) {
        var m = fixtures[i];
        var d = new Date(m.matchDate);
        var dateStr = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
        var hours = d.getHours().toString().padStart(2, '0');
        var mins = d.getMinutes().toString().padStart(2, '0');
        var timeStr = hours + ':' + mins;
        
        var homeTeam = m.homeTeam;
        var awayTeam = m.awayTeam;
        var venue = m.stadium + ', ' + m.city;
        
        var tr = document.createElement('tr');
        tr.innerHTML =
            '<td>' + dateStr + '<br><small style="opacity:0.5;font-size:0.75em;">' + timeStr + '</small></td>' +
            '<td><strong>' + homeTeam + '</strong></td>' +
            '<td><span class="fixture-vs-badge">VS</span></td>' +
            '<td><strong>' + awayTeam + '</strong></td>' +
            '<td>' + venue + '</td>' +
            '<td><button class="fixture-btn" onclick="openFixtureModal(\'' + m.id + '\')">Read More</button></td>';
        tbody.appendChild(tr);
    }
}

var matchDetails = {};

function generateMatchDetails(match) {
    var isAhudiyannemHome = match.homeTeam.indexOf('Ahudiyannem') !== -1;
    var club = isAhudiyannemHome ? match.homeTeam : match.awayTeam;
    var opponent = isAhudiyannemHome ? match.awayTeam : match.homeTeam;
    var homeOrAway = isAhudiyannemHome ? 'home' : 'away';
    var stadium = match.stadium;
    var city = match.city;
    var league = match.leagueName;
    
    var descs = [];
    
    if (homeOrAway === 'home') {
        descs.push(club + ' are set to welcome ' + opponent + ' to the ' + stadium + ' in ' + city + ' for what promises to be a thrilling ' + league + ' encounter. The home side has been in impressive form, building momentum with each passing game, and will look to leverage the passionate support of their fans to secure a vital result.');
        
        descs.push('Playing on home turf at the ' + stadium + ', ' + club + ' have historically been a formidable force. The team has prepared extensively for this fixture, with the coaching staff emphasizing quick transitions and defensive solidity. ' + opponent + ' will need to be at their absolute best to take anything from this game.');
        
        descs.push('The atmosphere at the ' + stadium + ' is expected to be electric as ' + club + ' host ' + opponent + ' in a crucial ' + league + ' showdown. The home team has been working tirelessly on set-piece routines and attacking patterns in training, hoping to unlock a stubborn ' + opponent + ' defense that has been well-organized in recent outings.');
    } else {
        descs.push(club + ' hit the road for a challenging away fixture against ' + opponent + ' at the ' + stadium + ' in ' + city + '. The away side has shown tremendous character on their travels this season, demonstrating resilience and tactical discipline. A positive result here could prove pivotal in their ' + league + ' campaign.');
        
        descs.push('Traveling to the ' + stadium + ' is never an easy task, but ' + club + ' have prepared meticulously for this ' + league + ' clash against ' + opponent + '. The coaching staff have instilled a strong away-day mentality, focusing on counter-attacking speed and organizational shape to nullify the home side\'s threats.');
        
        descs.push('In what promises to be a fiercely contested ' + league + ' fixture, ' + club + ' make the journey to ' + city + ' to face ' + opponent + ' at the ' + stadium + '. The away team has developed a reputation for being difficult to break down on the road, and they will be confident of extending their impressive run against a talented ' + opponent + ' side.');
    }
    
    var keyPlayers = ['the captain', 'the leading goalscorer', 'the creative midfielder', 'the defensive anchor', 'the young academy graduate'];
    var extraDetail = 'All eyes will be on ' + keyPlayers[Math.floor(Math.random() * keyPlayers.length)] + ' who has been instrumental in recent performances. With kick-off approaching, anticipation is building for what could be a defining moment in the season for both teams.';
    
    return descs[Math.floor(Math.random() * descs.length)] + ' ' + extraDetail;
}

function openFixtureModal(matchId) {
    var match = null;
    for (var i = 0; i < allMatches.length; i++) {
        if (allMatches[i].id === matchId) {
            match = allMatches[i];
            break;
        }
    }
    if (!match) return;
    
    var d = new Date(match.matchDate);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dateStr = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    var hours = d.getHours().toString().padStart(2, '0');
    var mins = d.getMinutes().toString().padStart(2, '0');
    var timeStr = hours + ':' + mins + ' WAT';
    
    var isAhudiyannemHome = match.homeTeam.indexOf('Ahudiyannem') !== -1;
    var ahudiyannemLogo = isAhudiyannemHome ? (match.homeLogo || '../All Asset/assets/logo.png') : (match.awayLogo || '../All Asset/assets/logo.png');
    var opponentLogo = isAhudiyannemHome ? (match.awayLogo || '../All Asset/assets/logo.png') : (match.homeLogo || '../All Asset/assets/logo.png');
    
    document.getElementById('modalHomeLogo').src = ahudiyannemLogo;
    document.getElementById('modalHomeName').textContent = isAhudiyannemHome ? match.homeTeam : match.awayTeam;
    document.getElementById('modalAwayLogo').src = opponentLogo;
    document.getElementById('modalAwayName').textContent = isAhudiyannemHome ? match.awayTeam : match.homeTeam;
    document.getElementById('modalDate').textContent = dateStr;
    document.getElementById('modalTime').textContent = timeStr;
    document.getElementById('modalStadium').textContent = match.stadium;
    document.getElementById('modalLeague').textContent = match.leagueName;
    document.getElementById('modalDesc').textContent = generateMatchDetails(match);
    
    document.getElementById('fixtureModal').classList.add('active');
}

function closeFixtureModal() {
    document.getElementById('fixtureModal').classList.remove('active');
}

// Initialize fixtures on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        populateFixtureTable('men');
    }, 100);
});

// Close fixture modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('fixtureModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeFixtureModal();
            }
        });
    }
});

// ========================================
// 3D Player Carousel - Step rotation + mouse gesture
// ========================================
let leftAngle = -18;
let rightAngle = 18;
let leftOffset = 0;
let rightOffset = 0;
const STEP = 90;
const ROTATE_MS = 1000;
const PAUSE_MS = 3000;

let leftTimeout = null;
let rightTimeout = null;
let leftResumeTimeout = null;
let rightResumeTimeout = null;
let leftHovering = false;
let rightHovering = false;

function rotateCarousel(id, baseAngle, offset) {
    const el = document.getElementById(id);
    if (el) {
        el.style.transform = `rotateY(${baseAngle + (offset || 0)}deg)`;
    }
}

function scheduleNext(id, direction, delay) {
    const timeoutId = setTimeout(() => {
        let angle;
        let offs;
        if (id === 'leftCarousel') {
            leftAngle += direction * STEP;
            angle = leftAngle;
            offs = leftOffset;
        } else {
            rightAngle += direction * STEP;
            angle = rightAngle;
            offs = rightOffset;
        }
        rotateCarousel(id, angle, offs);
        const hover = id === 'leftCarousel' ? leftHovering : rightHovering;
        if (id === 'leftCarousel') {
            leftTimeout = scheduleNext(id, direction, ROTATE_MS + PAUSE_MS);
        } else {
            rightTimeout = scheduleNext(id, direction, ROTATE_MS + PAUSE_MS);
        }
    }, delay);
    return timeoutId;
}

function startLeftRotation() {
    leftHovering = true;
    clearTimeout(leftTimeout);
    clearTimeout(leftResumeTimeout);
}

function startRightRotation() {
    rightHovering = true;
    clearTimeout(rightTimeout);
    clearTimeout(rightResumeTimeout);
}

function stopLeftRotation() {
    leftHovering = false;
    leftOffset = 0;
    clearTimeout(leftResumeTimeout);
    const el = document.getElementById('leftCarousel');
    if (el) {
        el.style.transition = 'transform 0.4s ease-in-out';
        el.style.transform = `rotateY(${leftAngle}deg)`;
        leftResumeTimeout = setTimeout(() => {
            el.style.transition = 'transform 1s ease-in-out';
            if (!leftHovering) {
                leftTimeout = scheduleNext('leftCarousel', -1, ROTATE_MS + PAUSE_MS);
            }
        }, 400);
    }
}

function stopRightRotation() {
    rightHovering = false;
    rightOffset = 0;
    clearTimeout(rightResumeTimeout);
    const el = document.getElementById('rightCarousel');
    if (el) {
        el.style.transition = 'transform 0.4s ease-in-out';
        el.style.transform = `rotateY(${rightAngle}deg)`;
        rightResumeTimeout = setTimeout(() => {
            el.style.transition = 'transform 1s ease-in-out';
            if (!rightHovering) {
                rightTimeout = scheduleNext('rightCarousel', 1, ROTATE_MS + PAUSE_MS);
            }
        }, 400);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    rotateCarousel('leftCarousel', leftAngle, 0);
    rotateCarousel('rightCarousel', rightAngle, 0);

    leftTimeout = scheduleNext('leftCarousel', -1, PAUSE_MS);
    rightTimeout = scheduleNext('rightCarousel', 1, PAUSE_MS + 2000);

    const leftVP = document.querySelector('.left-pos');
    const rightVP = document.querySelector('.right-pos');

    if (leftVP) {
        leftVP.addEventListener('mousemove', function(e) {
            if (!leftHovering) return;
            const r = leftVP.getBoundingClientRect();
            leftOffset = ((e.clientX - r.left) / r.width - 0.5) * 90;
            const el = document.getElementById('leftCarousel');
            if (el) {
                el.style.transition = 'transform 0.05s linear';
                el.style.transform = `rotateY(${leftAngle + leftOffset}deg)`;
            }
        });
    }

    if (rightVP) {
        rightVP.addEventListener('mousemove', function(e) {
            if (!rightHovering) return;
            const r = rightVP.getBoundingClientRect();
            rightOffset = ((e.clientX - r.left) / r.width - 0.5) * 90;
            const el = document.getElementById('rightCarousel');
            if (el) {
                el.style.transition = 'transform 0.05s linear';
                el.style.transform = `rotateY(${rightAngle + rightOffset}deg)`;
            }
        });
    }
});


