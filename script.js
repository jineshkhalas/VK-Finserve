// script.js

// Define the service data (rest of your servicesData object remains the same)
const servicesData = {
    "Mutual Funds": {
        icon: "📈",
        tagline: "Smart investment for a better future",
        description: [
            "Invest at your convenience.",
            "SIP (Systematic Investment Plan) Starts from ₹1000/month.",
            "Lumpsum (One Time) investment Starts from ₹5000."
        ],
        benefits: [
            "Diversification across various assets.",
            "Professional fund management.",
            "Liquidity and flexibility.",
            "Potential for long-term wealth creation."
        ]
    },
    "Equity Broking": {
        icon: "📊",
        tagline: "Invest at your choice with expert advice",
        description: [
            "Swing Trading, Intraday Trading Ideas.",
            "Short-term and long-term delivery based investments suggestions.",
            "Derivatives (Futures & Options) Trading suggestions.",
            "Hedging your portfolio with options strategies."
        ],
        benefits: [
            "Access to expert market analysis.",
            "Advanced trading platforms.",
            "Real-time market data.",
            "Personalized investment guidance."
        ]
    },
    "Commodity Broking": {
        icon: "⛏️",
        tagline: "Hedge/Trade in various commodities",
        description: [
            "Trade in precious metals like gold and silver.",
            "Trade in base metals like copper, nickel, and zinc.",
            "Trade in energy commodities like crude oil and natural gas."
        ],
        benefits: [
            "Diversify your portfolio beyond traditional assets.",
            "Hedge against inflation and market volatility.",
            "Expert insights on commodity trends."
        ]
    },
    "PMS - Portfolio Management Service": {
        icon: "💼",
        tagline: "Expertly managed - exceptional returns",
        description: [
            "Specially designed for High Net-worth Individual (HNI) clients.",
            "Investment starts from ₹50 lakhs."
        ],
        benefits: [
            "Customized investment strategies.",
            "Dedicated portfolio manager.",
            "Proactive risk management.",
            "Transparent reporting."
        ]
    },
    "AIF - Alternative Investment Fund": {
        icon: "💡",
        tagline: "Beyond traditional investments",
        description: [
            "Invest with insight, grow with confidence.",
            "Investment starts from ₹1 crore."
        ],
        benefits: [
            "Access to unique investment opportunities.",
            "Potential for higher returns.",
            "Diversification benefits.",
            "Managed by experienced fund managers."
        ]
    },
    "Structured Products (Equity and Gold based)": {
        icon: "🔗",
        tagline: "Tailored investment for your financial goals",
        description: [
            "Enhance returns, manage risks.",
            "Innovative solutions for sophisticated investors.",
            "Investment starts from ₹5 lakhs."
        ],
        benefits: [
            "Customizable risk-return profiles.",
            "Exposure to specific asset classes.",
            "Capital protection features.",
            "Potential for enhanced yield."
        ]
    },
    "Fixed Income": {
        icon: "💰",
        tagline: "Fixed income for cautious investors",
        description: [
            "Earn steady returns through Bonds, NCDs (Non-Convertible Debentures), and FDs (Fixed Deposits)."
        ],
        benefits: [
            "Predictable and stable returns.",
            "Lower risk compared to equities.",
            "Capital preservation.",
            "Diversification for a balanced portfolio."
        ]
    },
    "Life Insurance": {
        icon: "❤️",
        tagline: "Protect your loved ones with life insurance",
        description: [
            "Endowment plans, Term Life Insurance.",
            "Unit Linked Insurance Plans (ULIPs).",
            "Retirement plans, Child Education plan."
        ],
        benefits: [
            "Financial security for your family.",
            "Tax benefits.",
            "Wealth creation.",
            "Peace of mind."
        ]
    },
    "Health Insurance": {
        icon: "🏥",
        tagline: "All-around protection for you and your family",
        description: [
            "Individual and Family Floater plans.",
            "Group Mediclaim policies."
        ],
        benefits: [
            "Coverage for medical expenses.",
            "Cashless hospitalization.",
            "Tax benefits.",
            "Peace of mind during health emergencies."
        ]
    },
    "Loan against Securities (LAS)": {
        icon: "🤝", // Icon for Loan against Securities
        tagline: "Unlock the value of your investments without selling them",
        description: [
            "Avail a loan against your shares, mutual funds, or other approved securities.",
            "Flexible loan tenures and competitive interest rates.",
            "Quick processing and minimal documentation."
        ],
        benefits: [
            "Access to funds without liquidating your investments.",
            "Continue to benefit from potential appreciation of your securities.",
            "Lower interest rates compared to unsecured loans.",
            "Ideal for short-term liquidity needs or emergency funding."
        ]
    },
    "Housing Loans": {
        icon: "🏠", // Icon for Housing Loans
        tagline: "Your dream home is now within reach",
        description: [
            "Competitive interest rates for home purchases.",
            "Flexible repayment options to suit your budget.",
            "Guidance through the entire loan application process."
        ],
        benefits: [
            "Achieve your homeownership goals.",
            "Tax benefits on principal and interest payments.",
            "Expert assistance in choosing the right loan product."
        ]
    }
};

// Get references to the main sections
const homePageSection = document.getElementById('home-page-section');
const serviceDetailSection = document.getElementById('service-detail-section');

// Get references to elements within the service detail section
const serviceDetailIcon = document.getElementById('service-detail-icon');
const serviceDetailName = document.getElementById('service-detail-name');
const serviceDetailTagline = document.getElementById('service-detail-tagline');
const serviceDetailDescription = document.getElementById('service-detail-description');
const serviceDetailBenefits = document.getElementById('service-detail-benefits');
const serviceDetailInvestmentInfo = document.getElementById('service-detail-investment-info');
const serviceDetailInvestmentText = document.getElementById('service-detail-investment-text');

// Navigation elements
const navMenu = document.getElementById('nav-menu');
const menuButton = document.getElementById('menu-button');
const homeLink = document.getElementById('home-link');
const dropdownButton = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownContainer = document.querySelector('.dropdown');

// Reference to the "Get a Free Consultation" button
const freeConsultationBtn = document.getElementById('Consultation');


// Function to render the Home page
function renderHomePage() {
    // Hide service detail and show home page
    serviceDetailSection.classList.add('hidden');
    homePageSection.classList.remove('hidden');

    // Close any open dropdowns
    dropdownContent.style.display = 'none';
    dropdownContainer.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
}

// Function to render a specific service page
function renderServicePage(serviceName) {
    const service = servicesData[serviceName];
    if (!service) {
        // Handle service not found, maybe show a message or redirect to home
        homePageSection.classList.add('hidden');
        serviceDetailSection.classList.remove('hidden');
        serviceDetailSection.innerHTML = `<div class="text-center page-section" style="color: red; font-size: 1.25rem;">Service not found.</div>`;
        return;
    }

    // Hide home page and show service detail
    homePageSection.classList.add('hidden');
    serviceDetailSection.classList.remove('hidden');

    // Populate content into the pre-defined HTML elements
    serviceDetailIcon.textContent = service.icon;
    serviceDetailName.textContent = serviceName;
    serviceDetailTagline.textContent = service.tagline;

    // Populate description list
    serviceDetailDescription.innerHTML = '';
    service.description.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        serviceDetailDescription.appendChild(li);
    });

    // Populate benefits list
    serviceDetailBenefits.innerHTML = '';
    service.benefits.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        serviceDetailBenefits.appendChild(li);
    });

    // Handle investment info section visibility and content
    // Filter for descriptions that contain "investment starts from" or "starting from"
    const investmentDetails = service.description.filter(desc =>
        desc.toLowerCase().includes("investment starts from") ||
        desc.toLowerCase().includes("starting from") ||
        desc.toLowerCase().includes("investment starts at") || // Added for robustness
        desc.toLowerCase().includes("loan starts from") // Added for loan services
    );

    if (investmentDetails.length > 0) {
        serviceDetailInvestmentInfo.classList.remove('hidden');
        serviceDetailInvestmentText.innerHTML = investmentDetails.join('<br>');
    } else {
        serviceDetailInvestmentInfo.classList.add('hidden');
    }

    // Close any open dropdowns
    dropdownContent.style.display = 'none';
    dropdownContainer.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
}

// Event listener for mobile menu button
menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show-mobile'); // Toggle visibility for mobile menu
});

// Event listener for home link in header
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderHomePage();
    // Close mobile menu if open
    if (navMenu.classList.contains('show-mobile')) {
        navMenu.classList.remove('show-mobile');
    }
});

// Event listener for dropdown button
dropdownButton.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    dropdownContainer.classList.toggle('active'); // Toggle active class for arrow rotation
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-arrow')) {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
            dropdownContainer.classList.remove('active');
        }
    }
});

// Event listeners for all navigation links (including dropdown items)
document.querySelectorAll('.nav-link, .service-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceId = e.currentTarget.dataset.service; // Get data-service attribute
        const href = e.currentTarget.getAttribute('href');

        if (href === '#home') {
            renderHomePage();
        } else if (href === '#contact-us-section') {
            renderHomePage(); // Ensure home page is visible
            setTimeout(() => { // Small delay for smooth scroll after page render
                document.getElementById('contact-us-section').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (href === '#services') {
            // Scroll to the services section on the home page
            renderHomePage(); // Ensure home page is visible
            setTimeout(() => { // Small delay for smooth scroll after page render
                document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else if (serviceId) {
            renderServicePage(serviceId);
        }

        // Close mobile menu if open
        if (navMenu.classList.contains('show-mobile')) {
            navMenu.classList.remove('show-mobile');
        }
    });
});

// Event listener for "Explore Services" button on the hero section
document.getElementById('explore-services-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// NEW: Event listener for the "Get a Free Consultation" button on service detail pages
freeConsultationBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // 1. First, switch back to the home page if we're on a service detail page
    renderHomePage();

    // 2. Then, after a short delay to allow the home page to render, scroll to the contact section
    setTimeout(() => {
        const contactSection = document.getElementById('contact-us-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100); // 100ms delay, adjust if needed for smoother transition
});


// Initial load: Render the home page
document.addEventListener('DOMContentLoaded', () => {
    renderHomePage();
});



// New references for form handling
const messageForm = document.querySelector('.message-form'); // Get the form itself
const formMessageDiv = document.getElementById('form-message'); // Get the div for messages
const submitButton = messageForm.querySelector('button[type="submit"]'); // Get the submit button

// IMPORTANT: Your Google Apps Script Web App URL
// Make sure this is the exact URL you got after deploying your Apps Script
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzCUcb0naEvEcjcezHq0QqJ_Y6XVn5NG9P1tlJSoqgzKGuTiKrvoGLo9oyofBLhvIg-fQ/exec"; // <<< REPLACE THIS!

// --- New Form Submission Handling ---
messageForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission (browser refresh)

    // Clear any previous messages
    formMessageDiv.classList.add('hidden');
    formMessageDiv.textContent = '';
    formMessageDiv.classList.remove('success-message', 'error-message');

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Get form data
    const formData = new FormData(messageForm);
    // FormData can be directly sent with fetch POST, but we convert it to URLSearchParams
    // for Apps Script's e.parameter to work easily
    const urlSearchParams = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
        urlSearchParams.append(key, value);
    }

    try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            body: urlSearchParams // Send as URL-encoded form data
        });

        // Check if the request itself was successful (e.g., no network errors)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Apps Script sends back JSON

        if (result.result === "success") {
            formMessageDiv.classList.remove('hidden');
            formMessageDiv.classList.add('success-message');
            formMessageDiv.textContent = 'Thank you for your message! We will get back to you shortly.';
            messageForm.reset(); // Clear the form fields
        } else {
            // Handle error from Apps Script (e.g., sheet not found)
            formMessageDiv.classList.remove('hidden');
            formMessageDiv.classList.add('error-message');
            formMessageDiv.textContent = `Error: ${result.message || 'Something went wrong on the server.'}`;
        }

    } catch (error) {
        // Handle network errors or other unexpected issues
        console.error('Form submission error:', error);
        formMessageDiv.classList.remove('hidden');
        formMessageDiv.classList.add('error-message');
        formMessageDiv.textContent = 'Failed to send message. Please try again later.';
    } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Function to copy phone number when clicked
function copyNumber() {
    const phoneNumber = "+91 98985 07340"; // <-- put your number here

    // Copy to clipboard
    navigator.clipboard.writeText(phoneNumber).then(() => {
        // Show simple popup
        alert("Number copied! ✅\n" + phoneNumber);
    }).catch(err => {
        alert("Failed to copy number");
        console.error(err);
    });
}

