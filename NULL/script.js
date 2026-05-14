// Ahudiyannem FC - JavaScript

document.addEventListener('DOMContentLoaded', function() {
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

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Header scroll effect - SHOW ON SCROLL UP, HIDE ON SCROLL DOWN
    const header = document.getElementById('mainHeader');
    const body = document.body;
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY;
        
        if (currentScroll > 80) {
            if (currentScroll < lastScroll) {
                // Scrolling UP - show header
                if (header) {
                    header.classList.add('scrolled');
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
            if (header) {
                header.style.transform = 'translateY(0)';
                header.classList.remove('scrolled');
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
        leagueLogo: 'https://npfl.com.ng/wp-content/uploads/2019/04/NPFL-Favicon.png',
        leagueName: '2026 President Federation Cup',
        matchDate: '2026-04-09T15:00:00',
        score: '2 - 1',
        status: 'concluded',
        homeTeam: 'Ahudiyannem FC',
        homeCity: 'Abiriba, Abia State',
        homeLogo: 'assets/logo.png',
        awayTeam: 'Booga FC',
        awayCity: 'Abia State',
        awayLogo: null,
        stadium: 'Ubakala Mini Stadium',
        city: 'Ubakala, Umuahia',
        hostDesc: 'A stunning victory for Ahudiyannem FC as they edge past Booga FC in a thrilling President Federation Cup quarter-final! The home team came out with intent, taking the lead through a well-worked team goal in the first half.',
        awayDesc: 'Booga FC can hold their heads high despite the narrow defeat. The Abia-based side matched Ahudiyannem FC throughout and deservedly equalized after the break. However, costly errors in the dying minutes proved decisive.'
    },
    {
        id: 'men-2',
        league: 'men',
        leagueLogo: 'https://npfl.com.ng/wp-content/uploads/2019/04/NPFL-Favicon.png',
        leagueName: 'Nigeria Premier League',
        matchDate: '2026-06-07T15:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Kano Pillars',
        homeCity: 'Kano State',
        homeLogo: null,
        awayTeam: 'Ahudiyannem FC',
        awayCity: 'Abiriba, Abia State',
        awayLogo: 'assets/logo.png',
        stadium: 'Sani Abacha Stadium',
        city: 'Kano, Kano State',
        hostDesc: 'Kano Pillars, one of the most supported clubs in Nigerian football, host Ahudiyannem FC at the iconic Sani Abacha Stadium. Known for their fierce home support and defensive solidity.',
        awayDesc: 'Ahudiyannem FC travels to Kano for a challenging away fixture. The team has shown character in away games this season and will look to frustrate the home side.'
    },
    // WOMEN'S MATCHES
    {
        id: 'women-1',
        league: 'women',
        leagueLogo: 'https://thenwfl.com/wp-content/uploads/2022/05/nwfl-premiership-copyy-1024x300.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-04-01T16:00:00',
        score: '1 - 1',
        status: 'concluded',
        homeTeam: 'Ahudiyannem Queens',
        homeCity: 'Abiriba, Abia State',
        homeLogo: 'assets/logo.png',
        awayTeam: 'FC Robo Queens',
        awayCity: 'Lagos State',
        awayLogo: null,
        stadium: 'Umuahia Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'A hard-fought draw at home sees Ahudiyannem Queens claim a valuable point against a strong FC Robo Queens side. The team showed great character and defensive resilience throughout the match.',
        awayDesc: 'FC Robo Queens will be satisfied with a point from their travels to Abia. The Lagos side dominated possession for large periods and looked dangerous on the counter-attack.'
    },
    {
        id: 'women-2',
        league: 'women',
        leagueLogo: 'https://thenwfl.com/wp-content/uploads/2022/05/nwfl-premiership-copyy-1024x300.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-06-01T16:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Ahudiyannem Queens',
        homeCity: 'Abiriba, Abia State',
        homeLogo: 'assets/logo.png',
        awayTeam: 'Dannaz Ladies',
        awayCity: 'Lagos State',
        awayLogo: null,
        stadium: 'Umuahia Stadium',
        city: 'Umuahia, Abia',
        hostDesc: 'Ahudiyannem Queens face Dannaz Ladies in a crucial league encounter at home. The team will look to build on recent performances and secure vital home points.',
        awayDesc: 'Dannaz Ladies, in their second season in the NWFL Premiership, travel from Lagos with ambition. Promoted last season, they have established themselves as competitive contenders.'
    },
    {
        id: 'women-3',
        league: 'women',
        leagueLogo: 'https://thenwfl.com/wp-content/uploads/2022/05/nwfl-premiership-copyy-1024x300.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-06-14T16:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Confluence Queens',
        homeCity: 'Lokoja, Kogi State',
        homeLogo: null,
        awayTeam: 'Ahudiyannem Queens',
        awayCity: 'Abiriba, Abia State',
        awayLogo: 'assets/logo.png',
        stadium: 'Iyamho Stadium',
        city: 'Iyamho, Edo State',
        hostDesc: 'Confluence Queens welcome Ahudiyannem Queens to Iyamho Stadium in Edo State. The team has been inconsistent this season but possesses quality players who can change games.',
        awayDesc: 'Ahudiyannem Queens make the journey to Edo State for this away fixture. The team has shown improvement and will focus on defensive organization.'
    },
    {
        id: 'women-4',
        league: 'women',
        leagueLogo: 'https://thenwfl.com/wp-content/uploads/2022/05/nwfl-premiership-copyy-1024x300.png',
        leagueName: 'NWFL Premiership',
        matchDate: '2026-06-21T16:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Abia Angels FC',
        homeCity: 'Umuahia, Abia State',
        homeLogo: null,
        awayTeam: 'Ahudiyannem Queens',
        awayCity: 'Abiriba, Abia State',
        awayLogo: 'assets/logo.png',
        stadium: 'Enyimba Stadium',
        city: 'Aba, Abia',
        hostDesc: 'Abia Angels FC host their local rivals Ahudiyannem Queens at Enyimba Stadium in Aba. This is a highly anticipated Abia derby with both teams fighting for crucial points.',
        awayDesc: 'Ahudiyannem Queens face their Abia derby rivals in what promises to be an intense encounter. The team will focus on maintaining composure in this high-pressure fixture.'
    },
    // FRIENDLY
    {
        id: 'friendly-1',
        league: 'friendly',
        leagueLogo: 'assets/logo.png',
        leagueName: 'Friendly Match',
        matchDate: '2026-06-28T17:00:00',
        score: null,
        status: 'upcoming',
        homeTeam: 'Ahudiyannem FC',
        homeCity: 'Abiriba, Abia State',
        homeLogo: 'assets/logo.png',
        awayTeam: 'Local Club XI',
        awayCity: 'Abia State',
        awayLogo: null,
        stadium: 'Ahudiyannem Stadium',
        city: 'Abiriba, Abia',
        hostDesc: 'Ahudiyannem FC hosts a friendly against a Local Club XI as part of their preparation regimen. These matches provide valuable minutes for squad players.',
        awayDesc: 'The Local Club XI brings local talent and enthusiasm to this friendly encounter. Playing against professional opposition will be a great learning experience.'
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
function updateBanner() {
    // Get current time
    const currentTime = new Date();
    
    // Find live match or next upcoming match
    let currentMatch = null;
    let nextMatch = null;
    
    // Sort matches by date (earliest first)
    const sortedMatches = [...allMatches].sort((a, b) => 
        new Date(a.matchDate) - new Date(b.matchDate)
    );
    
    for (const match of sortedMatches) {
        const status = getMatchStatus(match);
        if (status === 'live' && !currentMatch) {
            currentMatch = { ...match, status: 'live' };
        } else if (status === 'upcoming' && !nextMatch) {
            nextMatch = { ...match, status: 'upcoming' };
        }
    }
    
    const match = currentMatch || nextMatch;
    if (!match) return;
    
    const matchTime = new Date(match.matchDate);
    const distance = matchTime.getTime() - currentTime.getTime();
    const isLive = getMatchStatus(match) === 'live';
    
    // Update teams
    const homeTeam = document.querySelector('.next-match-wrapper .next-match-team:first-child .next-match-team-name');
    const awayTeam = document.querySelector('.next-match-wrapper .next-match-team:last-child .next-match-team-name');
    if (homeTeam) homeTeam.textContent = match.homeTeam.toUpperCase();
    if (awayTeam) awayTeam.textContent = match.awayTeam.toUpperCase();
    
    // Update opponent logo
    const opponentLogo = document.querySelector('.next-match-logo.opponent');
    if (opponentLogo) {
        opponentLogo.src = (match.homeLogo === null) ? 'assets/logo.png' : match.homeLogo;
    }
    
    // Update date
    const day = matchTime.getDate().toString().padStart(2, '0');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[matchTime.getMonth()];
    const hours = matchTime.getHours().toString().padStart(2, '0');
    const mins = matchTime.getMinutes().toString().padStart(2, '0');
    
    const matchDateEl = document.querySelector('.match-date');
    if (matchDateEl) {
        matchDateEl.innerHTML = `
            <span class="date-box">${day}</span>
            <span class="date-sep">-</span>
            <span class="date-box">${month}</span>
            <span class="date-sep">-</span>
            <span class="date-box">${matchTime.getFullYear()}</span>
            <span class="time-sep">•</span>
            <span class="date-box">${hours}</span>
            <span class="date-sep">:</span>
            <span class="date-box">${mins}</span>
            <span class="time-label">WAT</span>
        `;
    }
    
    // Update countdown
    const countdownEl = document.getElementById('matchCountdown');
    const labelEl = document.querySelector('.next-match-label');
    
    if (isLive) {
        if (countdownEl) countdownEl.innerHTML = '<div class="countdown-item"><span class="countdown-number" style="background:#dc2626;">LIVE</span><span class="countdown-label">NOW</span></div>';
        if (labelEl) labelEl.textContent = 'LIVE NOW';
    } else if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdownDays').textContent = days.toString().padStart(2, '0');
        document.getElementById('countdownHours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('countdownMinutes').textContent = mins.toString().padStart(2, '0');
        document.getElementById('countdownSeconds').textContent = secs.toString().padStart(2, '0');
        if (labelEl) labelEl.textContent = 'Next Match';
    }
    
    // Update YouTube link
    const watchBtn = document.querySelector('.btn-watch-live');
    if (watchBtn) {
        const isWomen = match.homeTeam.includes('Queens') || match.homeTeam.includes('Ladies') || 
                       match.awayTeam.includes('Queens') || match.awayTeam.includes('Ladies');
        watchBtn.href = isWomen ? 'https://www.youtube.com/@ahudiyannemqueensfc' : 'https://www.youtube.com/@AhudiyannemFC2';
    }
}

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
        
        const logo1 = match.homeLogo || 'assets/logo.png';
        const logo2 = match.awayLogo || 'assets/logo.png';
        
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

// UPDATE TABLES
function updateTables() {
    // Men's Table - Filter Ahudiyannem's results
    const menResults = allMatches.filter(m => m.league === 'men' && m.status === 'concluded');
    const womenResults = allMatches.filter(m => m.league === 'women' && m.status === 'concluded');
    
    // Update men's table if Ahudiyannem played (as home or away)
    menResults.forEach(match => {
        const row = document.querySelector(`#menTableBody tr[data-team="Ahudiyannem FC"]`);
        if (row) {
            const isHome = match.homeTeam === 'Ahudiyannem FC';
            const isAway = match.awayTeam === 'Ahudiyannem FC';
            if (isHome || isAway) {
                row.querySelector('.played').textContent = parseInt(row.querySelector('.played').textContent) + 1;
                if (match.score) {
                    const [h, a] = match.score.split(' - ').map(s => parseInt(s.trim()));
                    if (isHome) {
                        row.querySelector('.gf').textContent = parseInt(row.querySelector('.gf').textContent) + h;
                        row.querySelector('.ga').textContent = parseInt(row.querySelector('.ga').textContent) + a;
                        if (h > a) {
                            row.querySelector('.won').textContent = parseInt(row.querySelector('.won').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 3;
                        } else if (h === a) {
                            row.querySelector('.drawn').textContent = parseInt(row.querySelector('.drawn').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 1;
                        } else {
                            row.querySelector('.lost').textContent = parseInt(row.querySelector('.lost').textContent) + 1;
                        }
                    } else {
                        row.querySelector('.gf').textContent = parseInt(row.querySelector('.gf').textContent) + a;
                        row.querySelector('.ga').textContent = parseInt(row.querySelector('.ga').textContent) + h;
                        if (a > h) {
                            row.querySelector('.won').textContent = parseInt(row.querySelector('.won').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 3;
                        } else if (a === h) {
                            row.querySelector('.drawn').textContent = parseInt(row.querySelector('.drawn').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 1;
                        } else {
                            row.querySelector('.lost').textContent = parseInt(row.querySelector('.lost').textContent) + 1;
                        }
                    }
                }
            }
        }
    });
    
    // Update women's table (as home or away)
    womenResults.forEach(match => {
        const row = document.querySelector(`#womenTableBody tr[data-team="Ahudiyannem Queens"]`);
        if (row) {
            const isHome = match.homeTeam === 'Ahudiyannem Queens';
            const isAway = match.awayTeam === 'Ahudiyannem Queens';
            if (isHome || isAway) {
                row.querySelector('.played').textContent = parseInt(row.querySelector('.played').textContent) + 1;
                if (match.score) {
                    const [h, a] = match.score.split(' - ').map(s => parseInt(s.trim()));
                    if (isHome) {
                        row.querySelector('.gf').textContent = parseInt(row.querySelector('.gf').textContent) + h;
                        row.querySelector('.ga').textContent = parseInt(row.querySelector('.ga').textContent) + a;
                        if (h > a) {
                            row.querySelector('.won').textContent = parseInt(row.querySelector('.won').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 3;
                        } else if (h === a) {
                            row.querySelector('.drawn').textContent = parseInt(row.querySelector('.drawn').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 1;
                        } else {
                            row.querySelector('.lost').textContent = parseInt(row.querySelector('.lost').textContent) + 1;
                        }
                    } else {
                        row.querySelector('.gf').textContent = parseInt(row.querySelector('.gf').textContent) + a;
                        row.querySelector('.ga').textContent = parseInt(row.querySelector('.ga').textContent) + h;
                        if (a > h) {
                            row.querySelector('.won').textContent = parseInt(row.querySelector('.won').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 3;
                        } else if (a === h) {
                            row.querySelector('.drawn').textContent = parseInt(row.querySelector('.drawn').textContent) + 1;
                            row.querySelector('.pts').textContent = parseInt(row.querySelector('.pts').textContent) + 1;
                        } else {
                            row.querySelector('.lost').textContent = parseInt(row.querySelector('.lost').textContent) + 1;
                        }
                    }
                }
            }
        }
    });
}

// TOGGLE GENDER (Male/Female switch for results section)
function toggleGender() {
    const toggle = document.getElementById('toggleSwitch');
    const maleTable = document.getElementById('maleTable');
    const femaleTable = document.getElementById('femaleTable');
    const resultsSection = document.querySelector('.results-section');
    const maleLabel = document.getElementById('maleLabel');
    const femaleLabel = document.getElementById('femaleLabel');
    
    toggle.classList.toggle('female');
    
    if (toggle.classList.contains('female')) {
        // Show female table
        if (maleTable) maleTable.style.display = 'none';
        if (femaleTable) femaleTable.style.display = 'block';
        if (resultsSection) resultsSection.classList.add('female-mode');
        if (maleLabel) maleLabel.classList.remove('active');
        if (femaleLabel) femaleLabel.classList.add('active');
    } else {
        // Show male table
        if (maleTable) maleTable.style.display = 'block';
        if (femaleTable) femaleTable.style.display = 'none';
        if (resultsSection) resultsSection.classList.remove('female-mode');
        if (maleLabel) maleLabel.classList.add('active');
        if (femaleLabel) femaleLabel.classList.remove('active');
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
    
    document.getElementById('modalHomeLogo').src = match.homeLogo || 'assets/logo.png';
    document.getElementById('modalHomeTeam').textContent = match.homeTeam;
    document.getElementById('modalHomeCity').textContent = match.homeCity;
    
    document.getElementById('modalAwayLogo').src = match.awayLogo || 'assets/logo.png';
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
    const tiles = document.querySelectorAll('.tile');
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

// INITIALIZE
function init() {
    updateBanner();
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
        }, { threshold: 0.5 });
        
        observer.observe(matchSection);
    }
    
    // Update every second (countdown)
    setInterval(() => {
        updateBanner();
    }, 1000);
    
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
            matchCardsAnimated = false; // Reset for new cards
            setTimeout(animateMatchCardsOnScroll, 100);
            updateBanner();
        }
    }, 60000);
}

// ROSTER MODAL FUNCTIONS
function openRosterModal(tab = 'players') {
    const modal = document.getElementById('rosterModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Generate players if not already generated
        const playerGrid = document.getElementById('roster-players');
        if (playerGrid && playerGrid.children.length === 0) {
            generatePlayers(playerGrid, 40);
        }
        
        // Generate staff if not already generated
        const staffGrid = document.getElementById('roster-staff');
        if (staffGrid && staffGrid.children.length === 0) {
            generateStaff(staffGrid);
        }
        
        // Show specified tab
        if (tab === 'staff') {
            showRosterTab('roster-staff', document.querySelector('#rosterModal .roster-tab-btn:last-child'));
        } else {
            showRosterTab('roster-players', document.querySelector('#rosterModal .roster-tab-btn:first-child'));
        }
    }
}

function closeRosterModal() {
    const modal = document.getElementById('rosterModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showRosterTab(tabId, btn) {
    const modal = btn.closest('.roster-modal');
    modal.querySelectorAll('.roster-container').forEach(el => el.classList.remove('active'));
    modal.querySelectorAll('.roster-tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    if (btn) btn.classList.add('active');
}

// MEN'S ROSTER MODAL FUNCTIONS
function openMenRosterModal(tab = 'men-players') {
    const modal = document.getElementById('menRosterModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Generate players if not already generated (33 for men)
        const playerGrid = document.getElementById('men-roster-players');
        if (playerGrid && playerGrid.children.length === 0) {
            generateMenPlayers(playerGrid, 33);
        }
        
        // Generate staff if not already generated
        const staffGrid = document.getElementById('men-roster-staff');
        if (staffGrid && staffGrid.children.length === 0) {
            generateMenStaff(staffGrid);
        }
        
        // Show specified tab
        if (tab === 'men-staff') {
            showMenRosterTab('men-roster-staff', document.querySelector('#menRosterModal .roster-tab-btn:last-child'));
        } else {
            showMenRosterTab('men-roster-players', document.querySelector('#menRosterModal .roster-tab-btn:first-child'));
        }
    }
}

function closeMenRosterModal() {
    const modal = document.getElementById('menRosterModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showMenRosterTab(tabId, btn) {
    const modal = btn.closest('.roster-modal');
    modal.querySelectorAll('.roster-container').forEach(el => el.classList.remove('active'));
    modal.querySelectorAll('.roster-tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    if (btn) btn.classList.add('active');
}

function generatePlayers(container, count) {
    for (let i = 1; i <= count; i++) {
        const card = document.createElement('div');
        card.className = 'roster-card';
        card.innerHTML = `
            <div class="roster-number">${i}</div>
            <img src="https://placeholder.com/300x360?text=Player+${i}" class="roster-photo" alt="Player ${i}">
            <div class="roster-name">PLAYER NAME</div>
        `;
        container.appendChild(card);
    }
}

function generateMenPlayers(container, count) {
    for (let i = 1; i <= count; i++) {
        const card = document.createElement('div');
        card.className = 'roster-card';
        card.innerHTML = `
            <div class="roster-number">${i}</div>
            <img src="https://placeholder.com/300x360?text=Player+${i}" class="roster-photo" alt="Player ${i}">
            <div class="roster-name">PLAYER NAME</div>
        `;
        container.appendChild(card);
    }
}

function generateStaff(container) {
    const staffTitles = ["HEAD COACH", "ASSISTANT COACH", "MANAGER", "PHYSIO", "TRAINER"];
    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.className = 'roster-card';
        card.innerHTML = `
            <div class="roster-number">${i + 1}</div>
            <img src="https://placeholder.com/300x360?text=${staffTitles[i]}" class="roster-photo" alt="${staffTitles[i]}">
            <div class="roster-name">${staffTitles[i]}</div>
        `;
        container.appendChild(card);
    }
}

function generateMenStaff(container) {
    const staffTitles = ["HEAD COACH", "ASSISTANT COACH", "MANAGER", "PHYSIO", "TRAINER"];
    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.className = 'roster-card';
        card.innerHTML = `
            <div class="roster-number">${i + 1}</div>
            <img src="https://placeholder.com/300x360?text=${staffTitles[i]}" class="roster-photo" alt="${staffTitles[i]}">
            <div class="roster-name">${staffTitles[i]}</div>
        `;
        container.appendChild(card);
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRosterModal();
        closeMenRosterModal();
    }
});

// Close modal when clicking outside content
document.addEventListener('click', function(e) {
    const modal = document.getElementById('rosterModal');
    if (modal && e.target === modal) {
        closeRosterModal();
    }
    
    const menModal = document.getElementById('menRosterModal');
    if (menModal && e.target === menModal) {
        closeMenRosterModal();
    }
});

// 3D SLIDER
let currentAngle3d = 0;
const totalItems3d = 6;
const angleStep3d = 360 / totalItems3d;
let autoRotateInterval3d;

function initSlider3d() {
    const carousel = document.getElementById('slider3dCarousel');
    if (!carousel) return;
    const items = carousel.querySelectorAll('.slider3d-item');
    const radius = Math.min(window.innerWidth * 0.35, 280);
    
    items.forEach((item, i) => {
        const angle = angleStep3d * i;
        item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
    
    carousel.style.transform = `rotateY(${currentAngle3d}deg)`;
    
    if (autoRotateInterval3d) clearInterval(autoRotateInterval3d);
    autoRotateInterval3d = setInterval(() => {
        rotateSlider3d(1);
    }, 4000);
}

function rotateSlider3d(direction) {
    currentAngle3d += direction * angleStep3d;
    const carousel = document.getElementById('slider3dCarousel');
    if (carousel) {
        carousel.style.transition = 'transform 1s ease';
        carousel.style.transform = `rotateY(${currentAngle3d}deg)`;
    }
    // Reset auto rotate timer
    if (autoRotateInterval3d) clearInterval(autoRotateInterval3d);
    autoRotateInterval3d = setInterval(() => {
        rotateSlider3d(1);
    }, 4000);
}

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

// Init 3D slider after DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initSlider3d();
});

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
                        }, (index + 1) * 300);
                    });
                }, 300);
                
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
    var ahudiyannemLogo = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? (match.homeLogo || 'assets/logo.png') : (match.awayLogo || 'assets/logo.png');
    var opponentLogo = match.homeTeam.indexOf('Ahudiyannem') !== -1 ? (match.awayLogo || 'assets/logo.png') : (match.homeLogo || 'assets/logo.png');
    
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


