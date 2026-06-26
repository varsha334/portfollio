/* 
=====================================================
SCRIPT.JS - PORTFOLIO INTERACTIVE LOGIC
=====================================================
Designer: Varsha Chaurasiya
=====================================================
*/

// =====================================================
// PORTFOLIO PROJECTS DATA ARRAY
// =====================================================
const projects = [
    {
        id: 1,
        title: "Dalmia Grower Mobile App",
        category: "mobile",
        role: "Lead UI/UX Designer",
        duration: "4 Months (Q2 2025)",
        tools: "Figma, Photoshop, Canva",
        industry: "AgriTech / Enterprise Mobile",
        problem: "Growers struggle to monitor soil conditions and diagnose crop leaf infections in real-time, causing harvest yield losses.",
        solution: "A high-contrast mobile agronomy app featuring crop log templates, moisture gauges, and an AI leaf diagnostics scanner.",
        caseStudyLink: "project-1.html",
        figmaLink: "https://www.figma.com/design/E4grW8x5kyHu4RofCZX3u6/Dalmia-Grower-App?node-id=0-1&t=KEdmpNfZlEozGFca-1",
        slides: []
    },
    {
        id: 2,
        title: "AMS Asset Management System",
        category: "desktop",
        role: "UI/UX Designer",
        duration: "3 Months (Q3 2025)",
        tools: "Figma, Photoshop, Miro",
        industry: "Enterprise Asset Tracking SaaS",
        problem: "Industrial processing plants have complex shift rosters and manual asset tracking systems, causing approval conflicts and delays.",
        solution: "A responsive admin dashboard centralizing asset allocation, active checklists, and shift handover metrics.",
        caseStudyLink: "project-2.html",
        figmaLink: "https://www.figma.com/design/dBreDttHcp4bo4G8cc5tOK/AMS?node-id=0-1&t=mquqLKlW1TgJf08x-1",
        slides: []
    },
    {
        id: 3,
        title: "OLAM GrainFlow Logistics",
        category: "mobile",
        role: "Lead Mobile UI/UX Designer",
        duration: "3 Months (Q4 2025)",
        tools: "Figma, Illustrator, Miro",
        industry: "Logistics / Commodity Bidding",
        problem: "Freight drivers and commodity brokers track order bids and port manifests manually, slowing down supply chain telemetry.",
        solution: "A mobile transit app coordinating live bidding matrices, shipping routes, and interactive cargo confirmation controls.",
        caseStudyLink: "project-3.html",
        figmaLink: "https://www.figma.com/design/AWYoyH0WIxKee025fVzKPb/GrainFlow?node-id=2003-6799&p=f&t=wvJKrJ0DJScV7LqL-0",
        slides: []
    },
    {
        id: 4,
        title: "Namami Gange ecology Web",
        category: "desktop",
        role: "UI/UX Designer",
        duration: "3 Months (Q1 2026)",
        tools: "Figma, Photoshop, Canva",
        industry: "Ecology / Government Portal",
        problem: "Citizens lack access to real-time river health parameters and active clean-up campaigns, resulting in low community involvement.",
        solution: "A modern web portal displaying river purity index gauges (pH audits, BOD) and campaign volunteer sign-up directories.",
        caseStudyLink: "project-4.html",
        figmaLink: "https://www.figma.com/design/pLV9C1Q85IzthrFylSqwGJ/Namami-Gange--Prrogramme?node-id=6-11008&t=HhT7I3YJTh0dOjgr-1",
        slides: []
    },
    {
        id: 5,
        title: "Market Place Portal",
        category: "mobile",
        role: "UI/UX Designer",
        duration: "3 Months (Q2 2025)",
        tools: "Figma, Photoshop, Illustrator",
        industry: "Industrial B2B E-commerce",
        problem: "Factory operators and procurement agents deal with legacy manual order sheets, slowing down industrial retail transactions.",
        solution: "A high-density wholesale marketplace dashboard tracking bulk listings, transport quotes, and transactional logbooks.",
        caseStudyLink: "project-5.html",
        figmaLink: "https://www.figma.com/design/4hTWXYNNQQDbHDUmTAv6sp/Market-Place?node-id=0-1&t=FxMVTKZkMOan97vU-1",
        slides: []
    },
    {
        id: 6,
        title: "ATSP Learning Management Portal",
        category: "mobile",
        role: "Lead UI/UX Designer",
        duration: "4 Months (Q3 2025)",
        tools: "Figma, Photoshop, Miro",
        industry: "EdTech / Corporate SaaS",
        problem: "Trainees face fragmented learning paths and delays in exporting compliance certificates, increasing administrative overhead.",
        solution: "An enterprise LMS dashboard structuring visual progress meters, module roadmaps, and secure certificate generators.",
        caseStudyLink: "project-6.html",
        figmaLink: "https://www.figma.com/design/rfSFTf7KETjIrwRQNEp8rs/ATSP?node-id=0-1&p=f&t=GgfwWqwRHYaCbi4r-0",
        slides: []
    },
    {
        id: 7,
        title: "Land Assets Management",
        category: "desktop",
        role: "Lead UI/UX Designer",
        duration: "4 Months (Q1 2025)",
        tools: "Figma, Photoshop, Miro",
        industry: "Real Estate SaaS / Admin",
        problem: "Developers struggle to audit cadastral maps, allocate plot coordinates, and generate legal deed registrations in one hub.",
        solution: "A responsive admin panel structuring zoning code details, land parcel boundaries, and automated deed signatures.",
        caseStudyLink: "project-1.html",
        figmaLink: "https://www.figma.com/design/fPOQb6uOUQqR0rb9O2zFzg/Land-Assets-Management?node-id=0-1&t=ToJ30AbehawUC5Qv-1",
        slides: []
    },
    {
        id: 8,
        title: "HRMS Portal",
        category: "desktop",
        role: "UI/UX Designer",
        duration: "3 Months (Q4 2024)",
        tools: "Figma, Illustrator, Canva",
        industry: "Enterprise HR Management",
        problem: "Managing employee attendance, check-ins, leave ledger request flows, and task tracking manually creates administrative bottlenecks.",
        solution: "A centralized desktop portal structuring leave review pathways, user onboard registries, and daily task management checklists.",
        caseStudyLink: "project-2.html",
        figmaLink: "https://www.figma.com/design/LE2jTBT8GZD6j3ahtpV8IM/HRMS?node-id=0-1&t=Vu80UNZMYvV41LBQ-1",
        slides: []
    },
    {
        id: 9,
        title: "Social Media & Graphics Posts",
        category: "branding",
        role: "Graphic & Social Media Designer",
        duration: "Ongoing",
        tools: "Figma, Photoshop, Illustrator",
        industry: "Digital Branding / Marketing",
        problem: "Brands require creative, visually-stunning graphics and social media layouts to stand out and convey messaging effectively on digital feeds.",
        solution: "A premium visual gallery of promotional posts, branding layouts, and corporate graphics optimized for visual readability and engagement.",
        caseStudyLink: "index.html#portfolio",
        figmaLink: "https://www.figma.com/design/OZKRmQfZit5HlwYCgDhf9n/Graphics?node-id=0-1&t=zEqeX4MQJyahyEb0-0",
        slides: []
    }
];

// =====================================================
// DYNAMIC SCREENSHOT SLIDES LOADER (PROJECTS 1-9)
// =====================================================
const projectFolders = {
    1: "Dalmia Grower App",
    2: "AMS",
    3: "GrainFlow",
    4: "Namami Gange  Prrogramme",
    5: "Market Place",
    6: "ATSP",
    7: "Land Assets Management",
    8: "HRMS",
    9: "Graphics"
};

const projectImages = {
    1: [
        "Add_New_Indent Round Mapping.png",
        "Add_New_Indent_Capture coordinates.png",
        "Add_New_Indent_Manual Area.png",
        "Add_New_Planting_Capture coordinate.png",
        "Add_New_Planting_round mapping.png",
        "Agri Services_Cane Planting.png",
        "Agri Services_Indent.png",
        "Cane Planting_Successfully.png",
        "choose language.png",
        "Family_management-1.png",
        "Family_management.png",
        "Indent_Plot-1.png",
        "Indent_Plot.png",
        "Indent_Plot_Edit.png",
        "Landing_Page-1.png",
        "Landing_Page.png",
        "Login-1.png",
        "Login.png",
        "Notification.png",
        "Plot for planting_Detail.png",
        "Plot_Detail.png",
        "Side_bar.png",
        "Signup.png",
        "Signup_OTP.png",
        "Signup_Successfully.png",
        "Splash Screen.png"
    ],
    2: [
        "Dashboard-1.png",
        "Dashboard.png",
        "Html → Body → Mobile Container.png",
        "Html → Body-1.png",
        "Html → Body-2.png",
        "Html → Body.png",
        "LMS - Forgot Password.png",
        "LMS - OTP Verification.png",
        "LMS - Reset OTP Verification.png",
        "LMS - Set New Password.png",
        "Login_.png",
        "Main.png",
        "QR_scan.png",
        "side_bar.png",
        "Side_menu.png"
    ],
    3: [
        "01.png",
        "Allocate details-1.png",
        "Allocate details.png",
        "choose language.png",
        "Depth 0, Frame 0-1.png",
        "Depth 0, Frame 0.png",
        "Depth 0, Frame 5.png",
        "dispatch detail.png",
        "en route-1.png",
        "en route.png",
        "Get Started.png",
        "gst number.png",
        "Otp Verification 02.png",
        "Otp Verification.png",
        "PO Detail-1.png",
        "PO Detail.png",
        "Stitch Design.png"
    ],
    4: [
        "Add_STP.png",
        "Body-1.png",
        "Body-2.png",
        "Body.png",
        "Invalid_password.png",
        "Lab Module - Test Reports.png",
        "Login.png",
        "OTP Verification Screen.png",
        "Report Detail (Final SOW).png",
        "Select_role.png",
        "Side_bar.png",
        "STP.png",
        "STP_detail_view.png"
    ],
    5: [
        "3. Opening UPI App-1.png",
        "3. Opening UPI App-2.png",
        "3. Opening UPI App.png",
        "4. UPI Approval View.png",
        "5. Enter UPI PIN.png",
        "7. Payment Success ✅.png",
        "Body-1.png",
        "Body-2.png",
        "Body.png",
        "Buy Equipment Marketplace.png",
        "Equipment Rental Listings.png",
        "Filters & Sorting.png",
        "Grower Dashboard.png",
        "Grower Payment Selection.png",
        "Grower Registration Screen.png",
        "Login Screen.png",
        "Onboarding - Purchase Focus.png",
        "Onboarding - Rental Focus.png",
        "Onboarding - Welcome Screen.png",
        "Order & Booking Tracking.png",
        "Order History Screen.png",
        "OTP Verification Screen.png",
        "User Profile.png"
    ],
    6: [
        "AgriMarket OTP Verification-1.png",
        "AgriMarket OTP Verification-2.png",
        "AgriMarket OTP Verification.png",
        "Body-1.png",
        "Body-2.png",
        "Body-3.png",
        "Body-4.png",
        "Body-5.png",
        "Body.png",
        "Farmer_Registration.png",
        "iPhone 17 - 1.png",
        "Onboarding - Rental Focus.png",
        "OVERLAY_ Modal Dark Backdrop.png",
        "Product Details - Mahindra Gyrovator ZLX+.png",
        "Search & Filter Results.png"
    ],
    7: [
        "Add New Land Form.png",
        "Add_new_case.png",
        "add_user.png",
        "Admin_dashboard-1.png",
        "Admin_dashboard-2.png",
        "Admin_dashboard.png",
        "Audit Logs - Exact Replica.png",
        "Body.png",
        "Docment_upload.png",
        "Document.png",
        "Land_Assests.png",
        "Lease_Management.png",
        "Litigation.png",
        "LMS - Forgot Password.png",
        "LMS - OTP Verification.png",
        "LMS - Reset OTP Verification.png",
        "LMS - Set New Password.png",
        "Login_.png",
        "Map.png",
        "Notification-1.png",
        "Notification.png",
        "Profile.png",
        "Role_Management.png",
        "Side_bar.png",
        "Upload Document - Step 3 (Corrected).png",
        "User_managament.png"
    ],
    8: [
        "Home-1.png",
        "Home-2.png",
        "Home.png",
        "OnboardFinal-1.png",
        "OnboardFinal.png",
        "SignIn-1.png",
        "SignIn-2.png",
        "SignIn-3.png",
        "SignIn.png",
        "TaskMenu.png",
        "Leave/Approved.png",
        "Leave/Rejected.png",
        "Leave/Review-1.png",
        "Leave/Review.png",
        "Task/In Progress-1.png",
        "Task/In Progress.png",
        "TaskMenu/CreateTask-1.png",
        "TaskMenu/CreateTask.png"
    ],
    9: [
        "Frame 1000005927.png",
        "ChatGPT Image May 22, 2026, 10_11_09 AM 1.png",
        "Frame 1000006048.png",
        "Frame 1000006052.png",
        "Group 1000005475.png",
        "Instagram post - 1.png",
        "Instagram post - 16.png",
        "Instagram post - 3.png",
        "Instagram post - 5.png",
        "Instagram post - 7.png"
    ]
};

// Dynamically generate slides for projects 1-9
for (let id = 1; id <= 9; id++) {
    const proj = projects.find(p => p.id === id);
    if (proj && projectImages[id]) {
        proj.slides = projectImages[id].map(filename => {
            let caption = filename.split('/').pop().replace(/\.png$/, '').replace(/[_-]/g, ' ');
            caption = caption.replace(/^\d+\.\s*/, '');
            const rawPath = `images/${projectFolders[id]}/${filename}`;
            const encodedPath = rawPath.split('/').map(seg => encodeURIComponent(seg)).join('/');
            return {
                type: "image",
                src: encodedPath,
                caption: `${proj.title} - ${caption}`,
                category: proj.category,
                url: proj.figmaLink
            };
        });
    }
}

// =====================================================
// DOM INITIALIZATION & THEME APPLY
// =====================================================
// Immediate Theme Apply to prevent flash
const savedTheme = localStorage.getItem('theme') || 'dark-theme';
if (savedTheme === 'light-theme') {
    document.body.classList.add('light-theme');
} else {
    document.body.classList.remove('light-theme');
}

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initStickyNavbar();
    initMobileMenu();
    initSmoothScroll();
    initTypingEffect();
    initScrollReveal();
    initCircularProgress();
    initCounterAnimations();
    initPortfolioFilters();
    initProjectModal();
    initContactFormValidation();
    initBackToTop();
    initLightbox();
});

// =====================================================
// THEME TOGGLE (DARK / LIGHT MODE)
// =====================================================
function initThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;
    
    if (document.body.classList.contains("light-theme")) {
        themeToggle.classList.add("active");
    }
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        themeToggle.classList.toggle("active");
        
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light-theme");
        } else {
            localStorage.setItem("theme", "dark-theme");
        }
    });
}

// =====================================================
// STICKY NAVBAR
// =====================================================
function initStickyNavbar() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// =====================================================
// MOBILE NAVIGATION HAMBURGER MENU
// =====================================================
function initMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// =====================================================
// SMOOTH SCROLL & ACTIVE STATE UPDATE
// =====================================================
function initSmoothScroll() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
}

// =====================================================
// TYPING EFFECT
// =====================================================
function initTypingEffect() {
    const target = document.getElementById("typing-text");
    if (!target) return;
    
    const words = ["UI/UX Designer", "Product Designer", "User Experience Specialist", "Design Thinker"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            target.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            target.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1800; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Pause before typing next
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// =====================================================
// SCROLL REVEAL (FADE UP, FADE DOWN, SLIDE)
// =====================================================
function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal");
    
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// =====================================================
// CIRCULAR PROGRESS ANIMATION FOR SKILLS
// =====================================================
function initCircularProgress() {
    const progressRings = document.querySelectorAll(".progress-ring");
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ring = entry.target;
                const percent = ring.getAttribute("data-percent");
                
                // SVG stroke-dasharray is 220
                const offset = 220 - (220 * percent) / 100;
                ring.style.strokeDashoffset = offset;
                
                observer.unobserve(ring);
            }
        });
    }, observerOptions);

    progressRings.forEach(ring => {
        observer.observe(ring);
    });
}

// =====================================================
// ANIMATED COUNTER STATISTICS
// =====================================================
function initCounterAnimations() {
    const counters = document.querySelectorAll(".counter-val");
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute("data-target");
                const speed = 1000; // ms duration
                const increment = target / (speed / 30); // 30ms intervals
                
                let count = 0;
                
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = Math.ceil(count) + "+";
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// =====================================================
// PORTFOLIO FILTER LOGIC
// =====================================================
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioGrid = document.querySelector(".portfolio-grid");
    
    if (!portfolioGrid) return; // Not on landing page

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-filter");
            
            // Filter cards
            const cards = document.querySelectorAll(".showcase-card");
            cards.forEach(card => {
                const cardCat = card.getAttribute("data-category");
                
                // Fade out
                card.style.opacity = "0";
                card.style.transform = "scale(0.85) translateY(15px)";
                
                setTimeout(() => {
                    if (category === "all" || cardCat === category) {
                        card.style.display = "flex";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1) translateY(0)";
                        }, 50);
                    } else {
                        card.style.display = "none";
                    }
                }, 300);
            });
        });
    });
}

// =====================================================
// SINGLE-PAGE PORTFOLIO MODAL SHOWCASE LOGIC
// =====================================================
function initProjectModal() {
    const showcaseCards = document.querySelectorAll(".showcase-card");
    const modal = document.getElementById("projectModal");
    const modalClose = document.getElementById("modalClose");
    const modalBody = document.getElementById("modalBody");
    const modalLoading = document.getElementById("modalLoading");

    if (!modal || !modalClose || !modalBody) return;

    // Track active slide index
    let currentSlideIdx = 0;
    let slidesCount = 0;
    let slidesTrack = null;

    showcaseCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });

    function getSlideHTML(slide) {
        // Return custom rich HTML mockups for each slide type
        switch (slide.type) {
            // =========================================================================
            // DALMIA GROWER APP SLIDES (MOBILE)
            // =========================================================================
            case "mobile_dashboard":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>10:30</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 8px; display: flex; flex-direction: column; flex-grow: 1;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">Dalmia Grower</div>
                            <div class="mockup-tag green-tag" style="font-size: 0.5rem; padding: 2px 8px; align-self: flex-start; border-radius: 10px; background: rgba(76,175,80,0.1); color: #4CAF50;">Active Session</div>
                            <div class="mockup-stat-box" style="padding: 10px; gap: 4px; background: #202020; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column;">
                                <span style="font-size: 0.55rem; color: rgba(255,255,255,0.4);">Crop Health Index</span>
                                <strong style="font-size: 1.1rem; color: #4CAF50; display: flex; align-items: center; gap: 5px; font-weight: bold;">
                                    92% <span style="width: 6px; height: 6px; background: #4CAF50; border-radius: 50%; display: inline-block; animation: pulse 1.5s infinite;"></span>
                                </strong>
                            </div>
                            <div class="mockup-row" style="gap: 8px; display: flex; justify-content: space-between;">
                                <div class="mockup-stat-box" style="padding: 6px 10px; flex: 1; background: #202020; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column;">
                                    <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4);">Soil Temp</span>
                                    <strong style="font-size: 0.8rem; color: #fff; font-weight: bold;">24°C</strong>
                                </div>
                                <div class="mockup-stat-box" style="padding: 6px 10px; flex: 1; background: #202020; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column;">
                                    <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4);">Moisture</span>
                                    <strong style="font-size: 0.8rem; color: #2E9BFF; font-weight: bold;">85%</strong>
                                </div>
                            </div>
                            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 8px; border-radius: 12px; font-size: 0.55rem; color: rgba(255,255,255,0.6); display: flex; justify-content: space-between; align-items: center;">
                                <span>Upcoming Audit</span>
                                <span style="color: var(--accent); font-weight: bold;">Tomorrow</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "mobile_scanner":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>10:32</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 6px; display: flex; flex-direction: column; flex-grow: 1;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">AI Diagnostics</div>
                            <div class="mockup-scan-target" style="flex-grow: 1; border: 1.5px dashed rgba(114, 69, 161, 0.4); margin: 5px 0; background: rgba(114, 69, 161, 0.02); position: relative; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 16px; gap: 6px;">
                                <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; fill: var(--accent); opacity: 0.8;"><path d="M17 8C17 5.79 15.21 4 13 4S9 5.79 9 8c0 1.25.58 2.36 1.48 3.1L5 18v2h14v-2l-5.48-6.9C16.42 10.36 17 9.25 17 8z"/></svg>
                                <div style="position: absolute; width: 85%; height: 2px; background: #7245A1; box-shadow: 0 0 8px #7245A1; top: 35%; left: 7.5%; animation: pulse-orange 1.5s infinite;"></div>
                                <span style="font-size: 0.55rem; color: var(--text-secondary);">Align leaf in target</span>
                            </div>
                            <div class="mockup-btn-inline" style="text-align: center; font-size: 0.6rem; padding: 8px; background: var(--accent); color: white; font-weight: 600; border-radius: 10px; cursor: pointer;">Capture Scan</div>
                        </div>
                    </div>
                </div>`;
            case "mobile_analytics":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>10:35</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 8px; display: flex; flex-direction: column; flex-grow: 1;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">Soil Analytics</div>
                            <div style="background: rgba(255,255,255,0.02); padding: 8px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04);">
                                <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4); display: block; margin-bottom: 4px; font-weight: bold;">Soil Moisture Index (7 Days)</span>
                                <svg viewBox="0 0 100 40" style="width: 100%; height: 60px; overflow: visible;">
                                    <path d="M0,35 Q15,10 30,22 T60,15 T90,28 L100,28 L100,40 L0,40 Z" fill="rgba(46,155,255,0.15)"></path>
                                    <path d="M0,35 Q15,10 30,22 T60,15 T90,28" fill="none" stroke="#2E9BFF" stroke-width="2"></path>
                                    <circle cx="60" cy="15" r="3" fill="#2E9BFF" style="filter: drop-shadow(0 0 3px #2E9BFF)"></circle>
                                </svg>
                            </div>
                            <div class="mockup-stat-box" style="padding: 8px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; background: #202020; border-radius: 12px; border: 1px solid rgba(255,255,255,0.04);">
                                <div style="display: flex; flex-direction: column; gap: 2px;">
                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">STATUS ALERT</span>
                                    <strong style="font-size: 0.65rem; color: #4CAF50; font-weight: bold;">Stable Conditions</strong>
                                </div>
                                <span style="font-size: 0.55rem; color: rgba(255,255,255,0.5);">Irrigation: OFF</span>
                            </div>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // DALMIA GRAIN HRMS PORTAL SLIDES (DESKTOP)
            // =========================================================================
            case "desktop_roster":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">hrms.dalmia.com/roster</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.85rem; font-weight: bold; color: #FFFFFF;">Shift Rotations Calendar</span>
                                    <span style="font-size: 0.55rem; background: rgba(114, 69, 161,0.1); color: var(--accent); padding: 2px 8px; border-radius: 10px; font-weight: bold;">Shift A Active</span>
                                </div>
                                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; flex-grow: 1;">
                                    ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => `
                                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 6px; display: flex; flex-direction: column; gap: 4px;">
                                            <span style="font-size: 0.5rem; color: rgba(255,255,255,0.3); font-weight: bold;">${day}</span>
                                            <div style="background: rgba(76,175,80,0.1); border-left: 2px solid #4CAF50; border-radius: 3px; padding: 2px 4px; font-size: 0.45rem; color: #4CAF50; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Morning</div>
                                            <div style="background: rgba(46,155,255,0.1); border-left: 2px solid #2E9BFF; border-radius: 3px; padding: 2px 4px; font-size: 0.45rem; color: #2E9BFF; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Night</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_payroll":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">hrms.dalmia.com/payroll</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.85rem; font-weight: bold; color: #FFFFFF;">Payroll Auditing Table</span>
                                    <div class="mockup-btn-inline" style="font-size: 0.5rem; padding: 4px 10px; background: var(--accent); color: white; border-radius: 10px; cursor: pointer; font-weight: 600;">Run Payroll</div>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: 8px; padding: 5px; flex-grow: 1; overflow: hidden;">
                                    <div style="display: grid; grid-template-columns: 2fr 1fr 1.5fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 4px; font-size: 0.45rem; font-weight: bold; color: rgba(255,255,255,0.3);">
                                        <span>EMPLOYEE</span>
                                        <span>DEPT</span>
                                        <span>NET PAY</span>
                                        <span>STATUS</span>
                                    </div>
                                    ${[
                                        { name: 'Rajesh Kumar', dept: 'Ops', pay: '₹45,500', status: 'Paid', statusColor: '#4CAF50' },
                                        { name: 'Suresh Singh', dept: 'Logistics', pay: '₹38,200', status: 'Paid', statusColor: '#4CAF50' },
                                        { name: 'Amit Sharma', dept: 'HR', pay: '₹52,000', status: 'Pending', statusColor: '#FF9800' }
                                    ].map(emp => `
                                        <div style="display: grid; grid-template-columns: 2fr 1fr 1.5fr 1fr; padding: 4px; font-size: 0.5rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.02);">
                                            <span style="color: #FFFFFF; font-weight: 500;">${emp.name}</span>
                                            <span style="color: rgba(255,255,255,0.4);">${emp.dept}</span>
                                            <span style="color: #FFFFFF; font-weight: bold;">${emp.pay}</span>
                                            <span style="color: ${emp.statusColor}; font-size: 0.45rem; font-weight: bold;">${emp.status}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_leaves":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">hrms.dalmia.com/leaves</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.85rem; font-weight: bold; color: #FFFFFF;">Leave Ledger & Approvals</span>
                                    <span style="font-size: 0.55rem; color: rgba(255,255,255,0.4);">3 Pending Approval</span>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 6px; flex-grow: 1; overflow: hidden;">
                                    ${[
                                        { name: 'Pooja Verma', reason: 'Medical Leave Request', dur: '3 Days', avatarBg: '#9C27B0' },
                                        { name: 'Vikram Aditya', reason: 'Casual Leave Request', dur: '2 Days', avatarBg: '#E91E63' }
                                    ].map(req => `
                                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 6px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <div style="width: 22px; height: 22px; border-radius: 50%; background: ${req.avatarBg}; display: flex; align-items: center; justify-content: center; font-size: 0.5rem; color: white; font-weight: bold;">
                                                    ${req.name.split(' ').map(n=>n[0]).join('')}
                                                </div>
                                                <div style="display: flex; flex-direction: column; gap: 1px;">
                                                    <span style="font-size: 0.55rem; color: #FFFFFF; font-weight: 500;">${req.name}</span>
                                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">${req.reason} • ${req.dur}</span>
                                                </div>
                                            </div>
                                            <div style="display: flex; gap: 4px;">
                                                <div style="background: rgba(76,175,80,0.1); color: #4CAF50; border: 1px solid rgba(76,175,80,0.2); padding: 3px 6px; border-radius: 4px; font-size: 0.45rem; font-weight: bold; cursor: pointer;">Approve</div>
                                                <div style="background: rgba(244,67,54,0.1); color: #F44336; border: 1px solid rgba(244,67,54,0.2); padding: 3px 6px; border-radius: 4px; font-size: 0.45rem; font-weight: bold; cursor: pointer;">Reject</div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // OLAM AGRI LOGISTICS APP SLIDES (MOBILE)
            // =========================================================================
            case "mobile_bids":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>14:40</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 8px; display: flex; flex-direction: column; flex-grow: 1;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">OLAM Trading</div>
                            <div style="font-size: 0.5rem; color: rgba(255,255,255,0.4); text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Live Port Bidding</div>
                            
                            <div style="background: #202020; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 8px; display: flex; flex-direction: column; gap: 4px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.55rem;">
                                    <span style="color: #FFFFFF; font-weight: bold;">Bulk Wheat (Grade A)</span>
                                    <span style="color: var(--accent); font-weight: bold;">$325.50/t</span>
                                </div>
                                <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; margin-top: 3px;">
                                    <div style="width: 75%; height: 100%; background: var(--accent);"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.45rem; color: rgba(255,255,255,0.4); margin-top: 2px;">
                                    <span>Min Bid: $310</span>
                                    <span>Expires: 2 hrs</span>
                                </div>
                            </div>
                            
                            <div style="background: #202020; border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 8px; display: flex; flex-direction: column; gap: 4px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.55rem;">
                                    <span style="color: #FFFFFF; font-weight: bold;">Yellow Corn</span>
                                    <span style="color: #2E9BFF; font-weight: bold;">$218.00/t</span>
                                </div>
                                <div style="height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; overflow: hidden; margin-top: 3px;">
                                    <div style="width: 50%; height: 100%; background: #2E9BFF;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.45rem; color: rgba(255,255,255,0.4); margin-top: 2px;">
                                    <span>Min Bid: $200</span>
                                    <span>Expires: 5 hrs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "mobile_map":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>14:45</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 6px; display: flex; flex-direction: column; flex-grow: 1;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">Transit Telemetry</div>
                            <div class="mockup-map-placeholder" style="flex-grow: 1; margin: 4px 0; background: #0d0d0d; border-radius: 12px; position: relative; border: 1px solid rgba(255, 255, 255, 0.02); overflow: hidden; min-height: 120px;">
                                <div class="map-route-line" style="position: absolute; width: 80%; height: 40px; border-bottom: 2px dashed rgba(114, 69, 161, 0.3); border-right: 2px dashed rgba(114, 69, 161, 0.3); top: 20%; left: 10%; border-radius: 0 0 20px 0;"></div>
                                <div class="map-marker" style="position: absolute; width: 10px; height: 10px; background: var(--accent); border-radius: 50%; bottom: calc(40% - 5px); right: calc(10% - 5px); animation: pulse-orange 1.5s infinite;"></div>
                                <div style="position: absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.75); padding: 3px 6px; border-radius: 6px; font-size: 0.45rem; border: 1px solid rgba(255,255,255,0.1); color: #FFFFFF;">
                                    Speed: 62 km/h
                                </div>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.5rem; color: rgba(255,255,255,0.5); background: rgba(0,0,0,0.2); padding: 5px 8px; border-radius: 8px;">
                                <span>ETA: 3 hrs 12 mins</span>
                                <span style="color: #4CAF50; font-weight: bold;">ON SCHEDULE</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "mobile_confirm":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 250px; height: 90%; max-height: 400px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 8px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>14:50</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 8px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                            <div class="mockup-header-title" style="font-size: 0.95rem; font-weight: bold; color: #fff;">Bid Dispatch</div>
                            <div style="background: #202020; border: 1px solid rgba(255,255,255,0.05); border-radius: 14px; padding: 10px; display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.5rem; color: rgba(255,255,255,0.4); text-transform: uppercase; font-weight: bold;">
                                    <span>CARGO DETAILS</span>
                                    <span>ORDER #8272</span>
                                </div>
                                <div style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF; line-height: 1.2;">50 Tons of Wheat</div>
                                <div style="font-size: 0.55rem; color: rgba(255,255,255,0.5); line-height: 1.3;">Truck: HR-55-A-1209<br>Carrier: Balaji Logistics</div>
                            </div>
                            <div style="background: #202020; border: 1px solid rgba(255,255,255,0.06); padding: 6px; border-radius: 20px; display: flex; align-items: center; position: relative;">
                                <div style="width: 28px; height: 28px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; position: relative; left: 0; box-shadow: 0 0 10px rgba(114, 69, 161,0.5);">
                                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: white;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                                </div>
                                <span style="font-size: 0.55rem; color: rgba(255,255,255,0.4); font-weight: bold; flex-grow: 1; text-align: center; pointer-events: none; margin-right: 15px;">Swipe to Confirm</span>
                            </div>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // NAMAMI GANGE ECOLOGY WEB SLIDES (WEBSITE)
            // =========================================================================
            case "desktop_ecology":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">ecology.namamigange.gov.in/purity</span>
                        </div>
                        <div class="mockup-body" style="padding: 15px; display: flex; flex-direction: column; gap: 8px; flex-grow: 1;">
                            <div style="text-align: center; margin-bottom: 4px;">
                                <h4 style="font-size: 0.9rem; color: #FFFFFF; font-weight: 700; margin: 0;">Ganga Live Purity Index</h4>
                                <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4);">Real-Time Sensor Auditing System</span>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; flex-grow: 1;">
                                <div style="background: rgba(76,175,80,0.05); border: 1px solid rgba(76,175,80,0.15); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; gap: 2px;">
                                    <span style="font-size: 0.5rem; color: #4CAF50; font-weight: bold; letter-spacing: 0.5px;">pH LEVEL</span>
                                    <strong style="font-size: 1.3rem; color: #FFFFFF; font-weight: bold;">7.4</strong>
                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Optimal (Neutral)</span>
                                </div>
                                <div style="background: rgba(46,155,255,0.05); border: 1px solid rgba(46,155,255,0.15); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; gap: 2px;">
                                    <span style="font-size: 0.5rem; color: #2E9BFF; font-weight: bold; letter-spacing: 0.5px;">DISSOLVED O2</span>
                                    <strong style="font-size: 1.3rem; color: #FFFFFF; font-weight: bold;">8.2 <span style="font-size: 0.6rem; font-weight: normal; color: rgba(255,255,255,0.4);">mg/L</span></strong>
                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Safe for Aquatic Life</span>
                                </div>
                                <div style="background: rgba(255,152,0,0.05); border: 1px solid rgba(255,152,0,0.15); border-radius: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; gap: 2px;">
                                    <span style="font-size: 0.5rem; color: #FF9800; font-weight: bold; letter-spacing: 0.5px;">TURBIDITY</span>
                                    <strong style="font-size: 1.3rem; color: #FFFFFF; font-weight: bold;">2.8 <span style="font-size: 0.6rem; font-weight: normal; color: rgba(255,255,255,0.4);">NTU</span></strong>
                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Normal Range</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_signup":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">ecology.namamigange.gov.in/volunteer</span>
                        </div>
                        <div class="mockup-body" style="padding: 15px; display: flex; flex-direction: row; gap: 15px; align-items: center; flex-grow: 1;">
                            <div style="flex: 1.2; display: flex; flex-direction: column; gap: 6px;">
                                <h4 style="font-size: 0.95rem; color: var(--accent); font-weight: 700; margin: 0;">Be the Change. Clean the Ganga.</h4>
                                <p style="font-size: 0.55rem; color: rgba(255,255,255,0.4); line-height: 1.4; margin: 0;">Join over 12,000+ local citizens in weekly eco-drives. Clean banks, audit water, make a real ecosystem impact.</p>
                                <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                                    <div style="display: flex; -webkit-box-orient: horizontal; margin-left: 2px;">
                                        <span style="width:14px; height:14px; border-radius:50%; background:#2E9BFF; border:1px solid #131313; display:inline-block; margin-right:-5px;"></span>
                                        <span style="width:14px; height:14px; border-radius:50%; background:#FF9800; border:1px solid #131313; display:inline-block; margin-right:-5px;"></span>
                                        <span style="width:14px; height:14px; border-radius:50%; background:#E91E63; border:1px solid #131313; display:inline-block;"></span>
                                    </div>
                                    <span style="font-size: 0.5rem; color: rgba(255,255,255,0.5);">Join volunteer circle</span>
                                </div>
                            </div>
                            <div style="flex: 0.8; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px; display: flex; flex-direction: column; gap: 6px;">
                                <span style="font-size: 0.55rem; font-weight: bold; color: #FFFFFF;">Registration</span>
                                <div style="height: 18px; border-radius: 4px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: center; padding: 0 6px; font-size: 0.45rem; color: rgba(255,255,255,0.3);">Your name</div>
                                <div style="height: 18px; border-radius: 4px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: center; padding: 0 6px; font-size: 0.45rem; color: rgba(255,255,255,0.3);">Email address</div>
                                <div class="mockup-btn-inline" style="text-align: center; font-size: 0.5rem; padding: 4px; background: var(--accent); color: white; font-weight: bold; border-radius: 4px; cursor: pointer;">Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_stps":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">ecology.namamigange.gov.in/stps</span>
                        </div>
                        <div class="mockup-body" style="padding: 15px; display: flex; flex-direction: column; gap: 8px; flex-grow: 1;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Sewage Treatment Plants Monitoring</span>
                                <span style="font-size: 0.5rem; color: #4CAF50; font-weight: bold;">● COMPLIANT</span>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; flex-grow: 1;">
                                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 4px;">
                                    <div style="display: flex; justify-content: space-between; font-size: 0.55rem;">
                                        <span style="color: #FFFFFF; font-weight: 500;">STP Kanpur (Jajmau)</span>
                                        <span style="color: #4CAF50; font-weight: bold;">94%</span>
                                    </div>
                                    <div style="font-size: 0.45rem; color: rgba(255,255,255,0.4); line-height: 1.3;">Flow rate: 195 MLD<br>BOD Discharge: 8.5 mg/L</div>
                                </div>
                                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 4px;">
                                    <div style="display: flex; justify-content: space-between; font-size: 0.55rem;">
                                        <span style="color: #FFFFFF; font-weight: 500;">STP Prayagraj (Naini)</span>
                                        <span style="color: #4CAF50; font-weight: bold;">97%</span>
                                    </div>
                                    <div style="font-size: 0.45rem; color: rgba(255,255,255,0.4); line-height: 1.3;">Flow rate: 80 MLD<br>BOD Discharge: 5.2 mg/L</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // LOGBOOK OPERATIONS DASHBOARD SLIDES (DESKTOP)
            // =========================================================================
            case "desktop_logbook":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">logbook.operations.dalmia.com/logs</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Operations Shift Log Sheet</span>
                                <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
                                    ${[
                                        { time: '14:22:10', op: 'Valves audit', msg: 'Boiler 4 input pressure stabilized.', tag: 'INFO', tagCol: '#4CAF50' },
                                        { time: '14:35:45', op: 'Safety check', msg: 'Thermal exhaust warning triggered.', tag: 'WARN', tagCol: '#FF9800' }
                                    ].map(log => `
                                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; font-size: 0.5rem;">
                                            <div style="display: flex; gap: 8px; align-items: center;">
                                                <span style="color: rgba(255,255,255,0.3);">${log.time}</span>
                                                <span style="color: var(--accent); font-weight: bold;">${log.op}</span>
                                                <span style="color: #FFFFFF;">${log.msg}</span>
                                            </div>
                                            <span style="font-size: 0.45rem; background: ${log.tagCol}22; color: ${log.tagCol}; border: 1px solid ${log.tagCol}44; padding: 1px 4px; border-radius: 4px; font-weight: bold;">${log.tag}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_telemetry":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">logbook.operations.dalmia.com/telemetry</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Boiler #4 Valve Telemetry</span>
                                    <span style="font-size: 0.55rem; color: #FF9800; font-weight: bold;">WARN: PRESS. RISE</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.02); padding: 8px; border-radius: 8px; flex-grow: 1; display: flex; flex-direction: column; justify-content: center;">
                                    <svg viewBox="0 0 200 60" style="width: 100%; height: 70px; overflow: visible;">
                                        <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(244,67,54,0.3)" stroke-dasharray="2,2"></line>
                                        <path d="M0,45 L40,43 L80,25 L120,12 L160,35 L200,42" fill="none" stroke="#7245A1" stroke-width="2"></path>
                                        <circle cx="120" cy="12" r="3" fill="#7245A1" style="filter: drop-shadow(0 0 3px #7245A1)"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_handover":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">logbook.operations.dalmia.com/handover</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Shift Handover Sign-off Checklist</span>
                                <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
                                    ${[
                                        { desc: 'Inspect Boiler #4 pressure gauge readings', status: 'Verified' },
                                        { desc: 'Confirm logs synced with local servers', status: 'Verified' },
                                        { desc: 'Perform manual valve calibration loops', status: 'Verified' }
                                    ].map(check => `
                                        <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: 6px; padding: 5px 8px; display: flex; justify-content: space-between; align-items: center; font-size: 0.5rem;">
                                            <span style="color: rgba(255,255,255,0.6);">${check.desc}</span>
                                            <span style="color: #4CAF50; font-weight: bold; font-size: 0.45rem;">✔ ${check.status}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // ATSP LEARNING PORTAL SLIDES (DESKTOP)
            // =========================================================================
            case "desktop_lms":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">lms.atsp-academy.org/roadmap</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Module Progress Roadmap</span>
                                <div style="display: flex; justify-content: space-around; align-items: center; flex-grow: 1; background: rgba(255,255,255,0.01); border-radius: 10px; border: 1px solid rgba(255,255,255,0.03); padding: 10px;">
                                    ${[
                                        { name: '1. Safety', done: true, color: '#4CAF50' },
                                        { name: '2. Compliance', done: true, color: '#4CAF50' },
                                        { name: '3. Operations', done: false, color: 'rgba(255,255,255,0.15)' }
                                    ].map(mod => `
                                        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 30%;">
                                            <div style="width: 26px; height: 26px; border-radius: 50%; background: ${mod.color}; display: flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 0.65rem; font-weight: bold;">
                                                ${mod.done ? '✔' : '3'}
                                            </div>
                                            <span style="font-size: 0.55rem; color: #FFFFFF; text-align: center; font-weight: 500;">${mod.name}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_quiz":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">lms.atsp-academy.org/quiz</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0;"></div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 15px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; font-size: 0.55rem; color: rgba(255,255,255,0.3); font-weight: bold;">
                                    <span>QUESTION 4 OF 10</span>
                                    <span>TIME LEFT: 08:45</span>
                                </div>
                                <span style="font-size: 0.65rem; color: #FFFFFF; font-weight: bold; line-height: 1.3;">Which protocol governs hazardous chemical disposal audits?</span>
                                <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 2px;">
                                    ${[
                                        { opt: 'A', text: 'Hazardous Waste Act 1989', selected: false },
                                        { opt: 'B', text: 'Corporate Safety Mandate Sec 4', selected: true },
                                        { opt: 'C', text: 'EPA Discharge Guidelines', selected: false }
                                    ].map(ans => `
                                        <div style="background: ${ans.selected ? 'rgba(114, 69, 161,0.05)' : 'rgba(255,255,255,0.01)'}; border: 1px solid ${ans.selected ? 'var(--accent)' : 'rgba(255,255,255,0.04)'}; border-radius: 6px; padding: 5px 8px; display: flex; align-items: center; gap: 8px; font-size: 0.55rem; color: ${ans.selected ? '#FFFFFF' : 'rgba(255,255,255,0.7)'}; cursor: pointer;">
                                            <div style="width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid ${ans.selected ? 'var(--accent)' : 'rgba(255,255,255,0.3)'}; display: flex; align-items: center; justify-content: center; font-size: 0.45rem; font-weight: bold; background: ${ans.selected ? 'var(--accent)' : 'transparent'}; color: white;">
                                                ${ans.opt}
                                            </div>
                                            <span>${ans.text}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_cert":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">lms.atsp-academy.org/certificate</span>
                        </div>
                        <div class="mockup-body" style="padding: 10px; display: flex; align-items: center; justify-content: center; flex-grow: 1;">
                            <div class="certificate-container" style="width: 80%; height: 90%; background: #FFFFFF; color: #111111; padding: 10px; border-radius: 4px; border: 4px double #D4AF37; box-shadow: 0 5px 15px rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; justify-content: space-between; text-align: center; font-family: serif; position: relative;">
                                <div style="font-size: 0.4rem; letter-spacing: 0.5px; font-weight: bold; color: #888888; font-family: sans-serif;">ATSP CORPORATE ACADEMY</div>
                                <div style="font-size: 0.7rem; font-weight: bold; color: #111111; margin: 2px 0;">Certificate of Completion</div>
                                <div style="font-size: 0.35rem; font-style: italic; color: #666666;">This is proudly awarded to</div>
                                <div style="font-size: 0.7rem; font-weight: bold; color: var(--accent); font-family: sans-serif; margin: 2px 0;">Varsha Chaurasiya</div>
                                <div style="font-size: 0.35rem; color: #666666; font-family: sans-serif; line-height: 1.2;">for successfully achieving professional certification in<br><strong>Enterprise Operations & Safety Auditing</strong></div>
                                <div style="display: flex; justify-content: space-between; width: 90%; font-family: sans-serif; font-size: 0.3rem; color: #999999; margin-top: 4px;">
                                    <span>Date: Oct 2025</span>
                                    <span>Authorized Seal</span>
                                </div>
                                <div style="position: absolute; bottom: 8px; right: 8px; width: 18px; height: 18px; border-radius: 50%; background: #D4AF37; opacity: 0.2; display: flex; align-items: center; justify-content: center; font-weight: bold; font-family: sans-serif; font-size: 6px;">★</div>
                            </div>
                        </div>
                    </div>
                </div>`;
            // =========================================================================
            // SOFTFIX SOCIAL BRANDING SLIDES (BRANDING)
            // =========================================================================
            case "branding_logo_softfix":
                return `
                <div class="showcase-mockup branding-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 20px; text-align: center;">
                    <div class="branding-frame" style="width: 85%; height: 95%; background: #171717; border-radius: 16px; border: 1px dashed rgba(255,255,255,0.06); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; position: relative;">
                        <span style="position: absolute; top: 12px; left: 15px; font-size: 0.55rem; color: rgba(255,255,255,0.3); font-weight: bold; letter-spacing: 0.5px;">GRID SYSTEM</span>
                        <div style="position: relative; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; border: 1px dashed rgba(114, 69, 161,0.15); border-radius: 50%;">
                            <div style="position: absolute; width: 100%; height: 1px; background: rgba(255,255,255,0.05);"></div>
                            <div style="position: absolute; width: 1px; height: 100%; background: rgba(255,255,255,0.05);"></div>
                            <svg viewBox="0 0 24 24" class="branding-logo" style="width: 36px; height: 36px; color: var(--accent); filter: drop-shadow(0 0 8px rgba(114, 69, 161,0.3));"><polygon points="12 2 2 22 22 22 12 2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
                        </div>
                        <div class="branding-label" style="font-size: 0.75rem; letter-spacing: 3px; font-weight: bold;">SOFTFIX BRAND REBUILD</div>
                        <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4);">Proportional Geometry Construction</span>
                    </div>
                </div>`;
            case "branding_palette":
                return `
                <div class="showcase-mockup branding-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 20px; text-align: center;">
                    <div class="branding-frame" style="width: 85%; height: 95%; background: #171717; border-radius: 16px; border: 1px dashed rgba(255,255,255,0.06); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; position: relative;">
                        <span style="position: absolute; top: 12px; left: 15px; font-size: 0.55rem; color: rgba(255,255,255,0.3); font-weight: bold; letter-spacing: 0.5px;">COLOR SWATCHES</span>
                        <div style="display: flex; gap: 12px;">
                            ${[
                                { col: '#7245A1', name: 'Corporate Teal', hex: '#7245A1' },
                                { col: '#2E9BFF', name: 'Cool Sky Blue', hex: '#2E9BFF' },
                                { col: '#FFFFFF', name: 'Pure Chalk', hex: '#FFFFFF' }
                            ].map(item => `
                                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                                    <div style="width: 38px; height: 38px; border-radius: 8px; background: ${item.col}; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 10px rgba(0,0,0,0.35);"></div>
                                    <span style="font-size: 0.45rem; color: #FFFFFF; font-weight: bold; margin-top: 2px;">${item.name}</span>
                                    <span style="font-size: 0.4rem; color: rgba(255,255,255,0.4);">${item.hex}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>`;
            case "branding_social_post":
                return `
                <div class="showcase-mockup branding-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="branding-frame" style="width: 230px; height: 95%; background: #1a1a1a; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); text-align: left;">
                        <div style="display: flex; align-items: center; gap: 8px; padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="width: 22px; height: 22px; border-radius: 50%; background: #7245A1; display: flex; align-items: center; justify-content: center; font-size: 0.5rem; color: white; font-weight: bold;">SF</div>
                            <div style="display: flex; flex-direction: column; gap: 1px;">
                                <span style="font-size: 0.55rem; color: #fff; font-weight: bold;">softfix_agency</span>
                                <span style="font-size: 0.4rem; color: rgba(255,255,255,0.4);">Lucknow, India</span>
                            </div>
                        </div>
                        <div style="flex-grow: 1; background: #111; display: flex; align-items: center; justify-content: center; padding: 10px; position: relative;">
                            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #7245A1 0%, #00222b 100%); border-radius: 8px; display: flex; flex-direction: column; justify-content: space-between; padding: 12px; color: white; border: 1px solid rgba(255,255,255,0.05);">
                                <span style="font-size: 0.45rem; letter-spacing: 1px; color: #7245A1; font-weight: bold; background: rgba(0,0,0,0.35); padding: 2px 6px; border-radius: 4px; align-self: flex-start;">BRAND INSIGHTS</span>
                                <h4 style="font-size: 0.75rem; font-weight: bold; line-height: 1.2; margin: 5px 0 0 0;">How visual identity drives 2.4x conversion.</h4>
                                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.45rem; color: rgba(255,255,255,0.6); margin-top: 5px;">
                                    <span>Swipe Left &rarr;</span>
                                    <span>@softfix</span>
                                </div>
                            </div>
                        </div>
                        <div style="padding: 8px 10px; display: flex; flex-direction: column; gap: 4px; border-top: 1px solid rgba(255,255,255,0.05);">
                            <div style="display: flex; gap: 8px; align-items: center; color: #fff;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="color: #F44336;"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </div>
                            <span style="font-size: 0.5rem; color: #fff; font-weight: bold;">1,240 likes</span>
                        </div>
                    </div>
                </div>`;

            // =========================================================================
            // JAMTECH VIDEO & MEDIA SLIDES (BRANDING)
            // =========================================================================
            case "branding_video_editor":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">video-editor.jamtech.com/workspace</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: column; height: calc(100% - 25px); flex-grow: 1; padding: 8px; gap: 6px;">
                            <!-- Editor Top Row -->
                            <div style="display: flex; gap: 6px; flex-grow: 1; height: 55%; overflow: hidden;">
                                <!-- Clip assets list -->
                                <div style="width: 30%; background: #0d0d0d; border-radius: 6px; border: 1px solid rgba(255,255,255,0.03); padding: 6px; display: flex; flex-direction: column; gap: 4px;">
                                    <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4); font-weight: bold;">MEDIA BIN</span>
                                    <div style="display: flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.02); padding: 3px; border-radius: 4px;">
                                        <div style="width: 10px; height: 10px; background: #333; border-radius: 2px;"></div>
                                        <span style="font-size: 0.45rem; color: white; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">promo_intro.mp4</span>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.02); padding: 3px; border-radius: 4px;">
                                        <div style="width: 10px; height: 10px; background: #7245A1; border-radius: 2px;"></div>
                                        <span style="font-size: 0.45rem; color: white; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">audio_overlay.wav</span>
                                    </div>
                                </div>
                                <!-- Video Monitor preview -->
                                <div style="flex-grow: 1; background: #0b0b0b; border-radius: 6px; border: 1px solid rgba(255,255,255,0.03); display: flex; align-items: center; justify-content: center; position: relative;">
                                    <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 4px;">
                                        <div style="width: 26px; height: 26px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; filter: drop-shadow(0 0 5px rgba(114, 69, 161,0.4));">
                                            <svg viewBox="0 0 24 24" style="width: 12px; height: 12px; fill: white; margin-left: 2px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                        </div>
                                        <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">PREVIEW MONITOR</span>
                                    </div>
                                    <span style="position: absolute; bottom: 5px; left: 5px; font-size: 0.45rem; color: rgba(255,255,255,0.3); font-family: monospace;">00:12:04</span>
                                </div>
                            </div>
                            <!-- Timeline tracks -->
                            <div style="height: 40%; background: #0d0d0d; border-radius: 6px; border: 1px solid rgba(255,255,255,0.03); padding: 6px; display: flex; flex-direction: column; gap: 3px; justify-content: center;">
                                <span style="font-size: 0.4rem; color: rgba(255,255,255,0.3); font-weight: bold; margin-bottom: 2px;">TIMELINE TIMETRACKS</span>
                                <div style="display: flex; gap: 4px; height: 10px; background: rgba(255,255,255,0.02); border-radius: 2px; align-items: center; overflow: hidden; padding: 0 4px;">
                                    <span style="font-size: 0.35rem; color: rgba(255,255,255,0.4); width: 10px;">V1</span>
                                    <div style="background: rgba(114, 69, 161,0.25); border-left: 2px solid #7245A1; height: 6px; width: 60%; border-radius: 1px;"></div>
                                    <div style="background: rgba(114, 69, 161,0.25); border-left: 2px solid #7245A1; height: 6px; width: 25%; border-radius: 1px;"></div>
                                </div>
                                <div style="display: flex; gap: 4px; height: 10px; background: rgba(255,255,255,0.02); border-radius: 2px; align-items: center; overflow: hidden; padding: 0 4px;">
                                    <span style="font-size: 0.35rem; color: rgba(255,255,255,0.4); width: 10px;">A1</span>
                                    <div style="background: rgba(76,175,80,0.25); border-left: 2px solid #4CAF50; height: 6px; width: 85%; border-radius: 1px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "branding_banner":
                return `
                <div class="showcase-mockup branding-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 20px; background-image: radial-gradient(circle at center, rgba(46, 155, 255, 0.08) 0%, #121212 100%); text-align: center;">
                    <div class="branding-frame" style="width: 85%; height: 95%; background: #171717; border-radius: 16px; border: 1px dashed rgba(255,255,255,0.06); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; position: relative;">
                        <span style="position: absolute; top: 12px; left: 15px; font-size: 0.55rem; color: rgba(255,255,255,0.3); font-weight: bold; letter-spacing: 0.5px;">E-COMMERCE BANNER</span>
                        <div style="width: 80%; background-image: linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                            <div style="display: flex; flex-direction: column; gap: 3px; text-align: left;">
                                <span style="font-size: 0.4rem; color: #2E9BFF; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase;">LIMITED CAMPAIGN</span>
                                <h4 style="font-size: 0.75rem; color: #FFFFFF; font-weight: bold; margin: 0; line-height: 1.2;">UP TO 40% OFF ON<br>ENTERPRISE TECH</h4>
                                <div style="font-size: 0.45rem; background: #2E9BFF; color: white; display: inline-block; padding: 3px 6px; border-radius: 4px; font-weight: bold; align-self: flex-start; margin-top: 3px; cursor: pointer;">Shop Now</div>
                            </div>
                            <svg viewBox="0 0 24 24" style="width: 32px; height: 32px; color: #2E9BFF; opacity: 0.35;"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" stroke-width="1.5"/></svg>
                        </div>
                    </div>
                </div>`;
            case "branding_reels":
                return `
                <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                    <div class="phone-frame" style="width: 240px; height: 90%; max-height: 380px; background: #151515; border-radius: 36px; border: 4px solid #252525; padding: 12px 15px; display: flex; flex-direction: column; gap: 6px; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.5); overflow: hidden; text-align: left;">
                        <div class="device-bar" style="margin-bottom: 5px;">
                            <span>18:15</span>
                            <div class="device-notch" style="width: 50px; height: 12px; margin-top: -12px; background: #000; border-radius: 0 0 8px 8px;"></div>
                            <span>5G</span>
                        </div>
                        <div class="mockup-body" style="gap: 0; display: flex; flex-direction: column; flex-grow: 1; justify-content: flex-end; position: relative; background: #0a0a0a; border-radius: 12px; overflow: hidden; height: 100%;">
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent), radial-gradient(circle at center, rgba(114, 69, 161,0.15), #0f0f0f 100%); display: flex; align-items: center; justify-content: center;">
                                <svg viewBox="0 0 24 24" style="width: 24px; height: 24px; fill: white; opacity: 0.6; filter: drop-shadow(0 0 8px rgba(255,255,255,0.3));"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                            <!-- Overlay controls -->
                            <div style="position: absolute; right: 8px; bottom: 40px; display: flex; flex-direction: column; gap: 8px; align-items: center; color: white; z-index: 2;">
                                <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                    <span style="font-size: 0.35rem;">4.2k</span>
                                </div>
                                <div style="display: flex; flex-direction: column; align-items: center; gap: 1px;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/></svg>
                                    <span style="font-size: 0.35rem;">185</span>
                                </div>
                            </div>
                            <div style="padding: 8px; color: white; display: flex; flex-direction: column; gap: 2px; z-index: 1; text-align: left;">
                                <span style="font-size: 0.5rem; font-weight: bold;">@jamtech_studios</span>
                                <span style="font-size: 0.45rem; color: rgba(255,255,255,0.75); line-height: 1.2;">Motion Transitions Template. Edited in Premiere Pro.</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_land_dashboard":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">land-assets.gov.in/dashboard</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 8px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Land Audit Control Panel</span>
                                    <span style="font-size: 0.55rem; background: rgba(0, 246, 255, 0.1); color: var(--accent); padding: 2px 8px; border-radius: 10px; font-weight: bold;">Region North</span>
                                </div>
                                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">
                                    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 6px; display: flex; flex-direction: column;">
                                        <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Total Area</span>
                                        <strong style="font-size: 0.75rem; color: #fff;">14,250 Ha</strong>
                                    </div>
                                    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 6px; display: flex; flex-direction: column;">
                                        <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Active Parcels</span>
                                        <strong style="font-size: 0.75rem; color: #fff;">1,842</strong>
                                    </div>
                                    <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 6px; display: flex; flex-direction: column;">
                                        <span style="font-size: 0.45rem; color: rgba(255,255,255,0.4);">Deeds Verified</span>
                                        <strong style="font-size: 0.75rem; color: #4CAF50;">98.4%</strong>
                                    </div>
                                </div>
                                <div style="flex-grow: 1; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 4px;">
                                    <span style="font-size: 0.5rem; color: rgba(255,255,255,0.4); font-weight: bold;">Recent Land Registry Filings</span>
                                    <div style="display: flex; flex-direction: column; gap: 3px;">
                                        <div style="display: flex; justify-content: space-between; font-size: 0.5rem; color: #fff; background: rgba(255,255,255,0.02); padding: 4px 6px; border-radius: 4px;">
                                            <span>Parcel #8492-A</span>
                                            <span style="color: #4CAF50;">Approved</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; font-size: 0.5rem; color: #fff; background: rgba(255,255,255,0.02); padding: 4px 6px; border-radius: 4px;">
                                            <span>Parcel #7104-C</span>
                                            <span style="color: #FF9800;">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_land_zoning":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">land-assets.gov.in/zoning</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Zoning Map & Sectors</span>
                                <div style="flex-grow: 1; display: flex; gap: 10px; height: calc(100% - 25px);">
                                    <div style="flex: 1.5; background: #181818; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                                        <svg viewBox="0 0 100 100" style="width: 90%; height: 90%;">
                                            <polygon points="10,10 50,10 45,45 10,40" fill="rgba(0, 246, 255, 0.1)" stroke="var(--accent)" stroke-width="1" />
                                            <polygon points="50,10 90,10 90,50 45,45" fill="rgba(114, 69, 161, 0.15)" stroke="#7245A1" stroke-width="1" />
                                            <polygon points="10,40 45,45 40,90 10,90" fill="rgba(76, 175, 80, 0.1)" stroke="#4CAF50" stroke-width="1" />
                                            <polygon points="45,45 90,50 85,90 40,90" fill="rgba(255, 152, 0, 0.1)" stroke="#FF9800" stroke-width="1" />
                                            <text x="22" y="28" font-size="6" fill="#fff" font-weight="bold">SEC-A</text>
                                            <text x="62" y="28" font-size="6" fill="#fff" font-weight="bold">SEC-B</text>
                                            <text x="22" y="68" font-size="6" fill="#fff" font-weight="bold">SEC-C</text>
                                            <text x="62" y="68" font-size="6" fill="#fff" font-weight="bold">SEC-D</text>
                                        </svg>
                                    </div>
                                    <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; background: rgba(0,0,0,0.2); padding: 6px; border-radius: 6px; font-size: 0.5rem; justify-content: center;">
                                        <strong style="color: #fff; margin-bottom: 2px;">Sector Registry</strong>
                                        <span style="color: rgba(255,255,255,0.6);">● SEC-A: Residential</span>
                                        <span style="color: rgba(255,255,255,0.6);">● SEC-B: Commercial</span>
                                        <span style="color: rgba(255,255,255,0.6);">● SEC-C: Agricultural</span>
                                        <span style="color: rgba(255,255,255,0.6);">● SEC-D: Industrial</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_land_registry":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">land-assets.gov.in/registry</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 6px; overflow: hidden; align-items: center; justify-content: center;">
                                <div style="width: 85%; height: 90%; background: #FFF; color: #111; padding: 10px; border-radius: 4px; border: 2px solid #555; box-shadow: 0 4px 10px rgba(0,0,0,0.2); display: flex; flex-direction: column; justify-content: space-between; font-size: 0.45rem;">
                                    <div style="text-align: center; border-bottom: 1px solid #ddd; padding-bottom: 4px;">
                                        <strong style="font-size: 0.55rem;">LAND REGISTRY CERTIFICATE</strong>
                                        <div style="font-size: 0.35rem; color: #666; margin-top: 1px;">GOVERNMENT OF INDIA DEED REGISTER</div>
                                    </div>
                                    <div style="display: flex; flex-direction: column; gap: 3px; margin: 5px 0;">
                                        <div><strong>Deed Number:</strong> IND-94028-L</div>
                                        <div><strong>Registrant:</strong> Varsha Chaurasiya</div>
                                        <div><strong>Parcel boundaries:</strong> Sector A-12, Plot 4 (3,500 sq ft)</div>
                                        <div><strong>Zoning Code:</strong> R-2 (Medium Density Residential)</div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid #ddd; padding-top: 4px;">
                                        <div style="font-size: 0.35rem; color: #888;">Digitally Signed via e-Gov Portal</div>
                                        <div style="border: 1px dashed var(--accent); padding: 2px 6px; border-radius: 4px; background: rgba(0, 246, 255, 0.05); color: var(--accent); font-weight: bold; font-family: monospace; font-size: 0.4rem;">VERIFIED</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_market_bids":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">marketplace.dalmia.com/bids</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Bulk Commodity Bidding Terminal</span>
                                    <span style="font-size: 0.5rem; background: rgba(76,175,80,0.15); color: #4CAF50; padding: 2px 6px; border-radius: 4px; font-weight: bold;">Market Open</span>
                                </div>
                                <div style="display: flex; flex-direction: column; gap: 4px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.03); border-radius: 6px; padding: 4px; flex-grow: 1; overflow: hidden;">
                                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 2px 4px; font-size: 0.42rem; font-weight: bold; color: rgba(255,255,255,0.3);">
                                        <span>COMMODITY</span>
                                        <span>BEST BID</span>
                                        <span>VOLUME</span>
                                        <span>TREND</span>
                                    </div>
                                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 4px; font-size: 0.48rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.02);">
                                        <span style="color: #FFFFFF; font-weight: 500;">Basmati Rice (Super)</span>
                                        <span style="color: var(--accent); font-weight: bold;">₹85,200/t</span>
                                        <span style="color: rgba(255,255,255,0.5);">120t</span>
                                        <span style="color: #4CAF50; font-weight: bold;">+1.5%</span>
                                    </div>
                                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 4px; font-size: 0.48rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.02);">
                                        <span style="color: #FFFFFF; font-weight: 500;">Yellow Maize (Premium)</span>
                                        <span style="color: var(--accent); font-weight: bold;">₹22,400/t</span>
                                        <span style="color: rgba(255,255,255,0.5);">450t</span>
                                        <span style="color: #F44336; font-weight: bold;">-0.8%</span>
                                    </div>
                                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 4px; font-size: 0.48rem; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.02);">
                                        <span style="color: #FFFFFF; font-weight: 500;">Refined Mustard Oil</span>
                                        <span style="color: var(--accent); font-weight: bold;">₹1,180/10l</span>
                                        <span style="color: rgba(255,255,255,0.5);">80t</span>
                                        <span style="color: #4CAF50; font-weight: bold;">+0.2%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_market_shipping":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">marketplace.dalmia.com/shipping</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                                <span style="font-size: 0.8rem; font-weight: bold; color: #FFFFFF;">Logistics & Shipping Routes</span>
                                <div style="flex-grow: 1; display: flex; gap: 10px; height: calc(100% - 25px);">
                                    <div style="flex: 1.2; background: #161616; border-radius: 6px; border: 1px solid rgba(255,255,255,0.03); display: flex; flex-direction: column; justify-content: center; padding: 8px; position: relative;">
                                        <div style="font-size: 0.45rem; color: rgba(255,255,255,0.4); margin-bottom: 4px; font-weight: bold;">LIVE DISPATCH ROUTE</div>
                                        <div style="height: 50px; border-left: 2px dashed var(--accent); border-bottom: 2px dashed var(--accent); position: relative; margin-left: 15px; margin-top: 5px; border-radius: 0 0 0 10px;">
                                            <div style="position: absolute; top: -4px; left: -4px; width: 6px; height: 6px; background: #FFF; border-radius: 50%;"></div>
                                            <div style="position: absolute; bottom: -4px; right: -4px; width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></div>
                                            <div style="position: absolute; top: 20px; left: -4px; width: 8px; height: 8px; background: #FF9800; border-radius: 50%; animation: pulse-orange 1.5s infinite;"></div>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; font-size: 0.42rem; color: rgba(255,255,255,0.5); margin-top: 10px;">
                                            <span>Kanpur Hub</span>
                                            <span>Mumbai Port</span>
                                        </div>
                                    </div>
                                    <div style="flex: 1; display: flex; flex-direction: column; gap: 4px; background: rgba(0,0,0,0.15); padding: 6px; border-radius: 6px; font-size: 0.48rem; justify-content: space-between;">
                                        <div style="display: flex; flex-direction: column; gap: 2px;">
                                            <span style="color: rgba(255,255,255,0.4);">CARRIER ID</span>
                                            <strong style="color: #fff;">VRL Logistics</strong>
                                        </div>
                                        <div style="display: flex; flex-direction: column; gap: 2px;">
                                            <span style="color: rgba(255,255,255,0.4);">QUOTE RATE</span>
                                            <strong style="color: var(--accent);">₹1,850/ton</strong>
                                        </div>
                                        <div style="display: flex; flex-direction: column; gap: 2px;">
                                            <span style="color: rgba(255,255,255,0.4);">ESTIMATED TIME</span>
                                            <strong style="color: #4CAF50;">36 Hours</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "desktop_market_billing":
                return `
                <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 15px;">
                    <div class="browser-frame" style="width: 90%; height: 95%; background: #131313; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                        <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03);">
                            <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                            <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                            <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                            <span class="window-url" style="font-size: 0.6rem; color: rgba(255,255,255,0.25); margin-left: 10px;">marketplace.dalmia.com/billing</span>
                        </div>
                        <div class="mockup-body" style="display: flex; flex-direction: row; height: calc(100% - 25px); flex-grow: 1;">
                            <div class="dashboard-sidebar" style="width: 40px; background: #0b0b0b; border-right: 1px solid rgba(255,255,255,0.02); flex-shrink: 0; display: flex; flex-direction: column; align-items: center; padding-top: 10px; gap: 10px;">
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: rgba(255,255,255,0.1);"></div>
                                <div style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent); opacity: 0.8;"></div>
                            </div>
                            <div class="dashboard-main" style="flex-grow: 1; padding: 12px; display: flex; flex-direction: column; gap: 6px; overflow: hidden; align-items: center; justify-content: center;">
                                <div style="width: 80%; height: 92%; background: #FFF; color: #111; padding: 8px; border-radius: 4px; border: 1px solid #ccc; display: flex; flex-direction: column; justify-content: space-between; font-size: 0.4rem; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding-bottom: 4px;">
                                        <div>
                                            <strong style="font-size: 0.5rem; color: #111;">DALMIA AGRITECH</strong>
                                            <div style="font-size: 0.35rem; color: #888;">Wholesale Marketplace Invoice</div>
                                        </div>
                                        <div style="text-align: right;">
                                            <strong>#INV-92849</strong>
                                            <div style="font-size: 0.35rem; color: #888;">Date: 25 June 2026</div>
                                        </div>
                                    </div>
                                    <div style="margin: 6px 0; display: flex; flex-direction: column; gap: 3px;">
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #fafafa; padding-bottom: 2px;">
                                            <span>Basmati Rice (Grade A) - 50 tons</span>
                                            <span>₹4,26,000</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #fafafa; padding-bottom: 2px;">
                                            <span>Shipping Route Quote (Kanpur-Mumb)</span>
                                            <span>₹92,500</span>
                                        </div>
                                        <div style="display: flex; justify-content: space-between; font-weight: bold; border-top: 1px solid #eee; padding-top: 3px;">
                                            <span>TOTAL PAYABLE</span>
                                            <span style="color: #7245A1;">₹5,18,500</span>
                                        </div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <span style="font-size: 0.35rem; color: #4CAF50; font-weight: bold; background: rgba(76,175,80,0.1); padding: 1px 4px; border-radius: 2px;">PAID SECURELY</span>
                                        <div style="border: 1px solid #333; padding: 2px 4px; border-radius: 2px; font-weight: bold; background: #333; color: white; cursor: pointer; font-size: 0.35rem;">Export PDF</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
            case "image":
                {
                    const isMobile = slide.category === "mobile";
                    if (isMobile) {
                        return `
                        <div class="showcase-mockup mobile-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 5px;">
                            <div class="phone-frame" style="width: 100%; max-width: 290px; height: 96%; max-height: 520px; background: #000000; border-radius: 40px; border: 8px solid #202020; display: flex; flex-direction: column; position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.55); overflow: hidden;">
                                <div class="device-bar" style="padding: 8px 20px; display: flex; justify-content: space-between; font-size: 0.55rem; color: rgba(255,255,255,0.6); background: #000000; flex-shrink: 0; align-items: center; height: 24px; position: relative; z-index: 2;">
                                    <span>10:30</span>
                                    <div class="device-notch" style="width: 70px; height: 13px; background: #000000; border-radius: 10px; position: absolute; left: 50%; transform: translateX(-50%); top: 5px;"></div>
                                    <span>5G</span>
                                </div>
                                <div class="slide-zoom-trigger" onclick="window.openLightbox('${slide.src}')" style="flex-grow: 1; position: relative; background: #000000; overflow: hidden; display: flex; justify-content: center; align-items: center; cursor: zoom-in;">
                                    <img src="${slide.src}" style="width: 100%; height: 100%; object-fit: contain; display: block;" alt="${slide.caption}">
                                    <div class="zoom-hover-overlay">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                        <span>Click to Zoom</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    } else {
                        return `
                        <div class="showcase-mockup desktop-mockup" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 5px;">
                            <div class="browser-frame" style="width: 100%; height: 100%; background: #131313; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.55); text-align: left;">
                                <div class="window-bar" style="display: flex; align-items: center; padding: 6px 12px; gap: 6px; background: #0d0d0d; border-bottom: 1px solid rgba(255,255,255,0.03); flex-shrink: 0; height: 24px;">
                                    <span class="window-dot red" style="width: 6px; height: 6px; border-radius: 50%; background: #ff5f56;"></span>
                                    <span class="window-dot yellow" style="width: 6px; height: 6px; border-radius: 50%; background: #ffbd2e;"></span>
                                    <span class="window-dot green" style="width: 6px; height: 6px; border-radius: 50%; background: #27c93f;"></span>
                                    <span class="window-url" style="font-size: 0.55rem; color: rgba(255,255,255,0.25); margin-left: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; background: rgba(255, 255, 255, 0.03); padding: 1px 12px; border-radius: 4px;">${slide.url || 'project-preview.local'}</span>
                                </div>
                                <div class="slide-zoom-trigger" onclick="window.openLightbox('${slide.src}')" style="flex-grow: 1; position: relative; background: #000000; overflow: hidden; display: flex; justify-content: center; align-items: center; cursor: zoom-in;">
                                    <img src="${slide.src}" style="width: 100%; height: 100%; object-fit: contain; display: block;" alt="${slide.caption}">
                                    <div class="zoom-hover-overlay">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                        <span>Click to Zoom</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }
                }
            default:
                return `
                <div class="showcase-mockup" style="display: flex; justify-content: center; align-items: center; height: 100%;">
                    <div style="color: rgba(255,255,255,0.4); font-size: 0.85rem;">[Mockup Slide Preview Unavailable]</div>
                </div>`;
        }
    }

    function openProjectModal(id) {
        modalLoading.style.display = "block";
        modalBody.innerHTML = ""; // Clear existing elements
        currentSlideIdx = 0; // Reset index to first slide

        // Find the project data
        const project = projects.find(p => p.id === parseInt(id));
        if (!project) {
            modalLoading.style.display = "none";
            return;
        }

        slidesCount = project.slides.length;

        // Build Showcase Slider elements dynamically
        const modalGrid = document.createElement("div");
        modalGrid.className = `modal-grid ${project.category === "mobile" ? "mobile-layout" : "desktop-layout"}`;

        const leftCol = document.createElement("div");
        leftCol.className = "modal-left-col";

        if (project.id === 9) {
            // =========================================================================
            // SOCIAL MEDIA GALLERY GRID (PROJECT 9)
            // =========================================================================
            const galleryWindow = document.createElement("div");
            galleryWindow.className = "gallery-grid-window";
            
            // Inline grid styles (responsive)
            galleryWindow.style.display = "grid";
            galleryWindow.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
            galleryWindow.style.gap = "20px";
            galleryWindow.style.width = "100%";
            galleryWindow.style.maxWidth = "800px";
            galleryWindow.style.margin = "0 auto";
            
            project.slides.forEach(slide => {
                const item = document.createElement("div");
                item.className = "gallery-grid-item slide-zoom-trigger";
                item.style.position = "relative";
                item.style.borderRadius = "16px";
                item.style.overflow = "hidden";
                item.style.cursor = "zoom-in";
                item.style.border = "1px solid var(--border-color-dim)";
                item.style.aspectRatio = "1 / 1";
                item.style.backgroundColor = "var(--bg-secondary)";
                
                item.addEventListener("click", () => {
                    window.openLightbox(slide.src);
                });
                
                item.innerHTML = `
                    <img src="${slide.src}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${slide.caption}">
                    <div class="zoom-hover-overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        <span>Click to Zoom</span>
                    </div>
                `;
                
                galleryWindow.appendChild(item);
            });
            
            leftCol.appendChild(galleryWindow);
        } else {
            // =========================================================================
            // STANDARD SLIDER SYSTEM (PROJECTS 1-8)
            // =========================================================================
            // Slides window
            const slidesWindow = document.createElement("div");
            slidesWindow.className = "slider-slides-window";

            // Slides track
            slidesTrack = document.createElement("div");
            slidesTrack.className = "slider-slides-track";

            project.slides.forEach(slide => {
                const slideEl = document.createElement("div");
                slideEl.className = "slider-slide";
                slideEl.innerHTML = `
                    ${getSlideHTML(slide)}
                    <div class="slide-caption-bar">${slide.caption}</div>
                `;
                slidesTrack.appendChild(slideEl);
            });

            slidesWindow.appendChild(slidesTrack);

            // Touch swiping navigation for mobile users
            let touchStartX = 0;
            let touchEndX = 0;
            slidesWindow.addEventListener("touchstart", (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            slidesWindow.addEventListener("touchend", (e) => {
                touchEndX = e.changedTouches[0].screenX;
                const threshold = 50;
                if (touchEndX < touchStartX - threshold) {
                    moveSlide(1); // Swipe Left
                } else if (touchEndX > touchStartX + threshold) {
                    moveSlide(-1); // Swipe Right
                }
            }, { passive: true });

            // Slider navigation arrows
            if (slidesCount > 1) {
                const prevArrow = document.createElement("button");
                prevArrow.className = "slider-arrow prev";
                prevArrow.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
                prevArrow.addEventListener("click", (e) => {
                    e.stopPropagation();
                    moveSlide(-1);
                });

                const nextArrow = document.createElement("button");
                nextArrow.className = "slider-arrow next";
                nextArrow.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
                nextArrow.addEventListener("click", (e) => {
                    e.stopPropagation();
                    moveSlide(1);
                });

                slidesWindow.appendChild(prevArrow);
                slidesWindow.appendChild(nextArrow);
            }

            leftCol.appendChild(slidesWindow);

            // Dot indicators navigation
            if (slidesCount > 1) {
                const dotsNav = document.createElement("div");
                dotsNav.className = "slider-dots-nav";

                for (let i = 0; i < slidesCount; i++) {
                    const dot = document.createElement("div");
                    dot.className = `slider-dot-indicator ${i === 0 ? 'active' : ''}`;
                    dot.addEventListener("click", (e) => {
                        e.stopPropagation();
                        goToSlide(i);
                    });
                    dotsNav.appendChild(dot);
                }

                leftCol.appendChild(dotsNav);
            }
        }

        modalGrid.appendChild(leftCol);

        // Details Panel
        const detailsPanel = document.createElement("div");
        detailsPanel.className = "showcase-details-panel";

        // Header containing project title and category tags
        const detailsHeader = document.createElement("div");
        detailsHeader.className = "showcase-details-header";
        
        const titleEl = document.createElement("h3");
        titleEl.className = "showcase-details-title";
        titleEl.innerText = project.title;

        const catText = project.category === "mobile" ? "App Mobile Design" : 
                        project.category === "desktop" ? "App Desktop" : 
                        project.category === "website" ? "Website Design" : "Branding";
        const catEl = document.createElement("span");
        catEl.className = "showcase-details-category";
        catEl.innerText = catText;

        detailsHeader.appendChild(titleEl);
        detailsHeader.appendChild(catEl);
        detailsPanel.appendChild(detailsHeader);

        // Meta lists: Role, Duration, Tools, Industry
        const metaList = document.createElement("div");
        metaList.className = "showcase-meta-list";
        metaList.innerHTML = `
            <div class="showcase-meta-box">
                <strong>Role</strong>
                <span>${project.role}</span>
            </div>
            <div class="showcase-meta-box">
                <strong>Duration / Tools</strong>
                <span>${project.duration} • ${project.tools.split(',')[0]}</span>
            </div>
            <div class="showcase-meta-box">
                <strong>Industry</strong>
                <span>${project.industry}</span>
            </div>
        `;
        detailsPanel.appendChild(metaList);

        // Problem and Solution section
        const probSolGrid = document.createElement("div");
        probSolGrid.className = "showcase-problem-solution";
        probSolGrid.innerHTML = `
            <div class="showcase-desc-item">
                <h5>The Challenge</h5>
                <p>${project.problem}</p>
            </div>
            <div class="showcase-desc-item">
                <h5>The Solution</h5>
                <p>${project.solution}</p>
            </div>
        `;
        detailsPanel.appendChild(probSolGrid);

        // Action CTA buttons
        const actionsDiv = document.createElement("div");
        actionsDiv.className = "showcase-actions";

        // Figma Prototype Link button
        const figmaBtn = document.createElement("a");
        figmaBtn.href = project.figmaLink;
        figmaBtn.target = "_blank";
        figmaBtn.className = "btn figma-animated-btn csa-btn";
        figmaBtn.innerHTML = `
            <svg class="figma-icon" width="12" height="18" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg" style="transition: transform 0.3s ease; vertical-align: middle;">
                <path d="M3.5 0C1.57 0 0 1.57 0 3.5C0 5.43 1.57 7 3.5 7H7V3.5C7 1.57 5.43 0 3.5 0Z" fill="#F24E1E"/>
                <path d="M3.5 7C1.57 7 0 8.57 0 10.5C0 12.43 1.57 14 3.5 14H7V7H3.5Z" fill="#A259FF"/>
                <path d="M3.5 14C1.57 14 0 15.57 0 17.5C0 19.43 1.57 21 3.5 21C5.43 21 7 19.43 7 17.5V14H3.5Z" fill="#0ACF83"/>
                <path d="M10.5 7C12.43 7 14 5.43 14 3.5C14 1.57 12.43 0 10.5 0C8.57 0 7 1.57 7 3.5V7H10.5Z" fill="#FF7262"/>
                <path d="M10.5 14C12.43 14 14 12.43 14 10.5C14 8.57 12.43 7 10.5 7H7V14H10.5Z" fill="#1ABCFE"/>
            </svg>
            <span style="vertical-align: middle; margin-left: 5px;">Open Figma Prototype</span>
        `;

        // Read Case Study Link button
        /*
        const caseStudyBtn = document.createElement("a");
        caseStudyBtn.href = project.caseStudyLink;
        caseStudyBtn.className = "btn btn-primary csa-btn";
        caseStudyBtn.innerText = "Read Full Case Study";
        */

        actionsDiv.appendChild(figmaBtn);
        // actionsDiv.appendChild(caseStudyBtn);
        detailsPanel.appendChild(actionsDiv);

        modalGrid.appendChild(detailsPanel);
        modalBody.appendChild(modalGrid);

        modalLoading.style.display = "none";
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent background page scroll

        // --- Scroll Hint ---
        showModalScrollHint();
    }

    function moveSlide(direction) {
        let nextIndex = currentSlideIdx + direction;
        if (nextIndex < 0) nextIndex = slidesCount - 1;
        if (nextIndex >= slidesCount) nextIndex = 0;
        goToSlide(nextIndex);
    }

    function goToSlide(index) {
        currentSlideIdx = index;
        if (slidesTrack) {
            slidesTrack.style.transform = `translateX(-${currentSlideIdx * 100}%)`;
        }

        // Update dot indicators
        const dots = document.querySelectorAll(".slider-dot-indicator");
        dots.forEach((dot, idx) => {
            if (idx === currentSlideIdx) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function closeProjectModal() {
        modal.classList.remove("show");
        document.body.style.overflow = ""; // Restore scrolling
        hideModalScrollHint(true); // reset hint on close
        
        setTimeout(() => {
            modalBody.innerHTML = "";
        }, 500);
    }

    // --- Scroll Hint Logic ---
    const scrollHint = document.getElementById("modalScrollHint");
    let scrollHintTimer = null;
    let scrollHintScrolled = false;

    function showModalScrollHint() {
        if (!scrollHint) return;
        scrollHintScrolled = false;
        scrollHint.classList.remove("hidden", "visible");
        // Small delay so modal entrance animation finishes first
        setTimeout(() => {
            scrollHint.classList.add("visible");
            // Auto-dismiss after 4 seconds
            scrollHintTimer = setTimeout(() => {
                hideModalScrollHint();
            }, 4000);
        }, 650);
    }

    function hideModalScrollHint(instant = false) {
        if (!scrollHint) return;
        if (scrollHintTimer) { clearTimeout(scrollHintTimer); scrollHintTimer = null; }
        if (instant) {
            scrollHint.classList.remove("visible");
            scrollHint.classList.remove("hidden");
        } else {
            scrollHint.classList.remove("visible");
            scrollHint.classList.add("hidden");
        }
    }

    // Hide hint as soon as user scrolls inside the modal
    modal.addEventListener("scroll", () => {
        if (!scrollHintScrolled && modal.scrollTop > 30) {
            scrollHintScrolled = true;
            hideModalScrollHint();
        }
    }, { passive: true });

    modalClose.addEventListener("click", closeProjectModal);
    
    // Close on backdrop overlay click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Keyboard controls
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("show")) return;
        
        if (e.key === "Escape") {
            closeProjectModal();
        } else if (e.key === "ArrowLeft" && slidesCount > 1) {
            moveSlide(-1);
        } else if (e.key === "ArrowRight" && slidesCount > 1) {
            moveSlide(1);
        }
    });
}



// =====================================================
// CONTACT FORM VALIDATION
// =====================================================
function initContactFormValidation() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("formName").value.trim();
        const email = document.getElementById("formEmail").value.trim();
        const subject = document.getElementById("formSubject").value.trim();
        const message = document.getElementById("formMessage").value.trim();
        
        feedback.className = "form-feedback";
        feedback.style.display = "none";

        // Simple validation check
        if (!name || !email || !subject || !message) {
            showFeedback("All fields are required.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showFeedback("Please enter a valid email address.", "error");
            return;
        }

        // Simulate Send Process
        const submitBtn = form.querySelector("button[type='submit']");
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending Message...";

        setTimeout(() => {
            showFeedback("Thank you! Your message has been sent successfully. Varsha will reach out to you shortly.", "success");
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 1500);
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showFeedback(msg, type) {
        feedback.innerText = msg;
        feedback.classList.add(type);
        feedback.style.display = "block";
    }
}

// =====================================================
// BACK TO TOP BUTTON LOGIC
// =====================================================
function initBackToTop() {
    const backBtn = document.querySelector(".back-to-top");
    if (!backBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backBtn.classList.add("show");
        } else {
            backBtn.classList.remove("show");
        }
    });

    backBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// =====================================================
// FULLSCREEN LIGHTBOX ZOOM VIEWER (PAN & ZOOM)
// =====================================================
function initLightbox() {
    let lightbox = document.getElementById("screenshotLightbox");
    if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.id = "screenshotLightbox";
        lightbox.className = "lightbox-overlay";
        lightbox.innerHTML = `
            <button class="lightbox-close" title="Close Lightbox">&times;</button>
            <div class="lightbox-content-wrapper">
                <img class="lightbox-image" src="" alt="Zoomed Screenshot">
            </div>
            <div class="lightbox-controls">
                <button class="lightbox-zoom-btn zoom-out" title="Zoom Out">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <span class="lightbox-zoom-val">100%</span>
                <button class="lightbox-zoom-btn zoom-in" title="Zoom In">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
                <button class="lightbox-zoom-btn reset-zoom" title="Reset Zoom">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M3 21v-5h5"/></svg>
                </button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        const closeBtn = lightbox.querySelector(".lightbox-close");
        const img = lightbox.querySelector(".lightbox-image");
        const zoomIn = lightbox.querySelector(".zoom-in");
        const zoomOut = lightbox.querySelector(".zoom-out");
        const reset = lightbox.querySelector(".reset-zoom");
        const zoomVal = lightbox.querySelector(".lightbox-zoom-val");
        
        let scale = 1;
        let isDragging = false;
        let startX = 0, startY = 0;
        let translateX = 0, translateY = 0;
        
        function updateTransform() {
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            zoomVal.innerText = `${Math.round(scale * 100)}%`;
        }
        
        function resetLightbox() {
            scale = 1;
            translateX = 0;
            translateY = 0;
            updateTransform();
        }
        
        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("show");
            document.removeEventListener("keydown", handleLightboxEsc);
        });
        
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox || e.target === lightbox.querySelector(".lightbox-content-wrapper")) {
                lightbox.classList.remove("show");
                document.removeEventListener("keydown", handleLightboxEsc);
            }
        });
        
        function handleLightboxEsc(e) {
            if (e.key === "Escape") {
                lightbox.classList.remove("show");
                document.removeEventListener("keydown", handleLightboxEsc);
            }
        }
        
        zoomIn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (scale < 3) {
                scale += 0.25;
                updateTransform();
            }
        });
        
        zoomOut.addEventListener("click", (e) => {
            e.stopPropagation();
            if (scale > 0.5) {
                scale -= 0.25;
                updateTransform();
            }
        });
        
        reset.addEventListener("click", (e) => {
            e.stopPropagation();
            resetLightbox();
        });
        
        // Double click image to toggle zoom
        img.addEventListener("dblclick", (e) => {
            e.stopPropagation();
            toggleZoom();
        });

        // Touch double-tap to toggle zoom on mobile
        let lastTap = 0;
        img.addEventListener("touchend", (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 300 && tapLength > 0) {
                e.preventDefault();
                toggleZoom();
            }
            lastTap = currentTime;
        });

        function toggleZoom() {
            if (scale !== 1) {
                resetLightbox();
            } else {
                scale = 1.75;
                updateTransform();
            }
        }
        
        // Panning dragging support when zoomed in (Mouse)
        img.style.cursor = "grab";
        img.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            img.style.cursor = "grabbing";
        });
        
        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        });
        
        window.addEventListener("mouseup", () => {
            if (isDragging) {
                isDragging = false;
                img.style.cursor = "grab";
            }
        });

        // Touch swipe panning support when zoomed in (Mobile)
        img.addEventListener("touchstart", (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                startX = e.touches[0].clientX - translateX;
                startY = e.touches[0].clientY - translateY;
            }
        }, { passive: true });
        
        window.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            if (e.touches.length === 1) {
                translateX = e.touches[0].clientX - startX;
                translateY = e.touches[0].clientY - startY;
                updateTransform();
            }
        }, { passive: true });
        
        window.addEventListener("touchend", () => {
            if (isDragging) {
                isDragging = false;
            }
        });
        
        // Expose function to open lightbox
        window.openLightbox = function(src) {
            img.src = src;
            lightbox.classList.add("show");
            resetLightbox();
            img.style.cursor = "grab";
            document.addEventListener("keydown", handleLightboxEsc);
        };
    }
}

