/**
 * Monetization System for TheGeosciGuide
 * 9 Revenue Streams for Passive Income Generation
 */

class MonetizationManager {
    constructor() {
        this.config = {
            adsenseId: 'ca-pub-xxxxxxxxxxxxxxxx',
            stripePublishableKey: 'pk_live_xxxxxxxxxxx',
            amazonAssociatesId: 'thegeosciguide-20',
            patreonUrl: 'https://patreon.com/thegeosciguide',
            kofiUrl: 'https://ko-fi.com/thegeosciguide',
            merchUrl: 'https://thegeosciguide.merch.com'
        };
        
        this.userPremiumStatus = localStorage.getItem('premiumStatus') || 'free';
        this.userSubscription = JSON.parse(localStorage.getItem('userSubscription')) || null;
        
        this.init();
    }

    init() {
        this.setupAdSense();
        this.setupPremiumUI();
        this.trackEvents();
        this.initAffiliate();
    }

    // ===== STREAM 1: GOOGLE ADSENSE =====
    setupAdSense() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.adsenseId}`;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        // Create ad slots
        this.createAdSlots();
    }

    createAdSlots() {
        // Top banner ad
        const topAd = document.createElement('div');
        topAd.className = 'ad-slot ad-slot-top';
        topAd.innerHTML = `
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="${this.config.adsenseId}"
                data-ad-slot="xxxxxxxx"
                data-ad-format="horizontal"
                data-full-width-responsive="true"></ins>
        `;
        
        const header = document.querySelector('.app-header');
        if (header) header.parentNode.insertBefore(topAd, header.nextSibling);

        // Sidebar ads (mobile: bottom)
        const sidebarAd = document.createElement('div');
        sidebarAd.className = 'ad-slot ad-slot-sidebar';
        sidebarAd.innerHTML = `
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="${this.config.adsenseId}"
                data-ad-slot="yyyyyyyy"
                data-ad-format="vertical"
                data-full-width-responsive="true"></ins>
        `;
        
        const footer = document.querySelector('.app-footer');
        if (footer) footer.parentNode.insertBefore(sidebarAd, footer);

        // Push ads
        if (window.adsbygoogle) window.adsbygoogle.push({});
    }

    // ===== STREAM 2: PREMIUM FEATURES =====
    setupPremiumUI() {
        this.createPremiumModal();
        this.createPremiumBadge();
    }

    createPremiumModal() {
        const modal = document.createElement('div');
        modal.id = 'premium-modal';
        modal.className = 'premium-modal';
        modal.innerHTML = `
            <div class="premium-modal-content">
                <button class="modal-close" onclick="this.parentElement.parentElement.style.display='none'">&times;</button>
                <h2>🎨 Unlock Premium Features</h2>
                
                <div class="premium-features">
                    <div class="feature">
                        <span class="feature-icon">📚</span>
                        <h4>Advanced Tutorials</h4>
                        <p>Expert-written deep-dive content</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🎥</span>
                        <h4>Video Content</h4>
                        <p>Embedded geology videos & animations</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">📊</span>
                        <h4>Study Analytics</h4>
                        <p>Track your learning progress</p>
                    </div>
                    <div class="feature">
                        <span class="feature-icon">🏆</span>
                        <h4>Certificates</h4>
                        <p>Completion certificates for each module</p>
                    </div>
                </div>

                <div class="pricing-options">
                    <div class="pricing-card monthly">
                        <h3>Monthly</h3>
                        <p class="price">$2.99<span>/month</span></p>
                        <button class="btn btn-primary" onclick="monetization.handleCheckout('monthly')">
                            Subscribe Monthly
                        </button>
                    </div>
                    <div class="pricing-card annual">
                        <h3>Annual</h3>
                        <p class="price">$29.99<span>/year</span></p>
                        <p class="saving">Save 17%</p>
                        <button class="btn btn-primary" onclick="monetization.handleCheckout('annual')">
                            Subscribe Annually
                        </button>
                    </div>
                </div>

                <div class="terms">
                    <p>7-day free trial. Cancel anytime. <a href="#">Terms</a></p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    createPremiumBadge() {
        if (this.userPremiumStatus === 'premium') {
            const badge = document.createElement('div');
            badge.className = 'premium-badge';
            badge.innerHTML = '⭐ Premium';
            document.body.appendChild(badge);
        }
    }

    handleCheckout(plan) {
        console.log(`Initiating ${plan} subscription...`);
        
        // Initialize Stripe checkout
        const stripe = window.Stripe(this.config.stripePublishableKey);
        
        const priceIds = {
            monthly: 'price_xxxxx_monthly',
            annual: 'price_xxxxx_annual'
        };

        stripe.redirectToCheckout({
            lineItems: [{ price: priceIds[plan], quantity: 1 }],
            mode: 'subscription',
            successUrl: window.location.href + '?success=true',
            cancelUrl: window.location.href
        });
    }

    // ===== STREAM 3: AFFILIATE MARKETING =====
    initAffiliate() {
        this.createAffiliateLinks();
    }

    createAffiliateLinks() {
        const affiliateSection = document.createElement('div');
        affiliateSection.className = 'affiliate-section';
        affiliateSection.innerHTML = `
            <h3>📚 Recommended Resources</h3>
            <div class="affiliate-products">
                <a href="https://www.amazon.com/s?k=geology+textbook&tag=${this.config.amazonAssociatesId}" 
                   class="affiliate-link" target="_blank">
                    📖 Geology Textbooks
                </a>
                <a href="https://www.amazon.com/s?k=mineral+rock+collection+kit&tag=${this.config.amazonAssociatesId}" 
                   class="affiliate-link" target="_blank">
                    💎 Mineral Collection Kits
                </a>
                <a href="https://www.amazon.com/s?k=field+geology+equipment&tag=${this.config.amazonAssociatesId}" 
                   class="affiliate-link" target="_blank">
                    🔨 Field Equipment
                </a>
                <a href="https://www.amazon.com/s?k=geology+microscope&tag=${this.config.amazonAssociatesId}" 
                   class="affiliate-link" target="_blank">
                    🔬 Microscopes
                </a>
            </div>
        `;

        const modulesGrid = document.querySelector('.modules-grid');
        if (modulesGrid) modulesGrid.parentNode.appendChild(affiliateSection);
    }

    // ===== STREAM 4 & 5: APP STORE & SPONSORSHIPS =====
    setupAppStore() {
        // iOS App Store
        const iosLink = 'https://apps.apple.com/app/thegeosciguide/idxxxxxxxx';
        // Google Play
        const androidLink = 'https://play.google.com/store/apps/details?id=com.thegeosciguide';

        return { iosLink, androidLink };
    }

    handleSponsorship(sponsorName) {
        console.log(`Sponsorship by: ${sponsorName}`);
        // Log sponsorship for analytics
        this.trackEvent('sponsorship', { sponsor: sponsorName });
    }

    // ===== STREAM 6: MERCHANDISE =====
    setupMerchandise() {
        const merchButton = document.createElement('button');
        merch Button.className = 'btn btn-secondary';
        merchButton.innerHTML = '👕 Shop Merch';
        merchButton.onclick = () => window.open(this.config.merchUrl, '_blank');
        
        const footer = document.querySelector('.app-footer');
        if (footer) footer.appendChild(merchButton);
    }

    // ===== STREAM 7: PATREON/KO-FI =====
    setupCommunitySupport() {
        const supportSection = document.createElement('div');
        supportSection.className = 'community-support-section';
        supportSection.innerHTML = `
            <div class="support-card">
                <h3>💝 Support Rocky's Mission</h3>
                <p>Help us bring geology education to everyone!</p>
                <div class="support-buttons">
                    <a href="${this.config.patreonUrl}" class="btn btn-secondary" target="_blank">
                        Patreon
                    </a>
                    <a href="${this.config.kofiUrl}" class="btn btn-secondary" target="_blank">
                        Ko-fi
                    </a>
                </div>
                <div class="supporter-tiers">
                    <div class="tier">
                        <h4>🪨 Rock Supporter</h4>
                        <p>$1/month</p>
                    </div>
                    <div class="tier">
                        <h4>💎 Gem Supporter</h4>
                        <p>$5/month</p>
                    </div>
                    <div class="tier">
                        <h4>✨ Legend Supporter</h4>
                        <p>$10/month</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(supportSection);
    }

    // ===== STREAM 8: DIGITAL PRODUCTS =====
    setupDigitalProducts() {
        const digitalStore = document.createElement('div');
        digitalStore.className = 'digital-products-section';
        digitalStore.innerHTML = `
            <h3>📥 Digital Downloads</h3>
            <div class="digital-products">
                <div class="product">
                    <h4>📋 Study Guide Bundle</h4>
                    <p>$4.99</p>
                    <button class="btn btn-small">Buy Now</button>
                </div>
                <div class="product">
                    <h4>🎨 Desktop Wallpapers</h4>
                    <p>$2.99</p>
                    <button class="btn btn-small">Buy Now</button>
                </div>
                <div class="product">
                    <h4>📱 Mobile App Bundle</h4>
                    <p>$9.99</p>
                    <button class="btn btn-small">Buy Now</button>
                </div>
            </div>
        `;

        document.body.appendChild(digitalStore);
    }

    // ===== STREAM 9: API LICENSING =====
    offerAPILicensing() {
        const apiPage = `
            <h2>API Data Licensing</h2>
            <p>License our geology database for educational institutions</p>
            <p>Contact: partnerships@thegeosciguide.com</p>
        `;
        
        console.log(apiPage);
    }

    // ===== EVENT TRACKING & ANALYTICS =====
    trackEvents() {
        // Track user interactions for monetization optimization
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('ad-slot')) {
                this.trackEvent('ad_click', { adSlot: e.target.className });
            }
        });

        // Track module completion (valuable for engagement)
        document.addEventListener('moduleComplete', (e) => {
            this.trackEvent('module_completed', { moduleId: e.detail.moduleId });
        });
    }

    trackEvent(eventName, eventData) {
        // Send to Google Analytics
        if (window.gtag) {
            window.gtag('event', eventName, eventData);
        }

        // Send to custom analytics
        console.log(`[Monetization Event] ${eventName}:`, eventData);

        // Store locally for analysis
        const events = JSON.parse(localStorage.getItem('monetizationEvents')) || [];
        events.push({ eventName, eventData, timestamp: new Date() });
        localStorage.setItem('monetizationEvents', JSON.stringify(events.slice(-100)));
    }

    // ===== REVENUE REPORTS =====
    generateRevenueReport() {
        const events = JSON.parse(localStorage.getItem('monetizationEvents')) || [];
        
        const report = {
            totalEvents: events.length,
            adClicks: events.filter(e => e.eventName === 'ad_click').length,
            modulesCompleted: events.filter(e => e.eventName === 'module_completed').length,
            premiumSubscribers: this.userPremiumStatus === 'premium' ? 1 : 0,
            affiliateClicks: events.filter(e => e.eventName === 'affiliate_click').length
        };

        console.log('📊 Revenue Report:', report);
        return report;
    }

    // ===== PREMIUM FEATURE GATE =====
    requirePremium(featureName) {
        if (this.userPremiumStatus !== 'premium') {
            document.getElementById('premium-modal').style.display = 'flex';
            this.trackEvent('premium_gate', { feature: featureName });
            return false;
        }
        return true;
    }

    // ===== USER PREFERENCES =====
    setUserPremium() {
        this.userPremiumStatus = 'premium';
        localStorage.setItem('premiumStatus', 'premium');
        this.trackEvent('premium_conversion', { timestamp: new Date() });
        this.createPremiumBadge();
    }

    getUserValue() {
        return {
            status: this.userPremiumStatus,
            subscription: this.userSubscription,
            lifetimeValue: this.userPremiumStatus === 'premium' ? 'Monthly/Annual' : '$0'
        };
    }
}

// Initialize Monetization
const monetization = new MonetizationManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MonetizationManager;
}
