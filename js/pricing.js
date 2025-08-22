document.addEventListener('DOMContentLoaded', () => {
    const pricingPlans = [
        {
            name: 'Starter',
            price: '₹15,000',
            period: 'per month',
            description: 'Perfect for small businesses starting their digital journey',
            features: [
                'Google My Business Optimization',
                'Basic WhatsApp Automation',
                'Single Social Media Platform',
                'Monthly Performance Report',
                'Email Support',
                'Basic Analytics Dashboard'
            ],
            includes: [
                'Setup within 7 days',
                '30-day satisfaction guarantee',
                'Cancel anytime'
            ],
            cta: 'Get Started Free',
            ctaSubtext: 'Book Free Strategy Call',
            popular: false,
            icon: 'rocket'
        },
        {
            name: 'Growth',
            price: '₹35,000',
            period: 'per month',
            description: 'Most popular for growing businesses',
            features: [
                'Meta & Google Ads Management',
                'Advanced WhatsApp Automation',
                'Two Social Media Platforms',
                'Local SEO Optimization',
                'Weekly Performance Reports',
                'Priority Email & WhatsApp Support',
                'Advanced Analytics Dashboard',
                'A/B Testing',
                'Competitor Analysis'
            ],
            includes: [
                'Setup within 5 days',
                '30-day satisfaction guarantee',
                'Cancel anytime',
                'Dedicated account manager'
            ],
            cta: 'Scale Your Business',
            ctaSubtext: 'Book Free Growth Call',
            popular: true,
            icon: 'chart-line'
        },
        {
            name: 'Premium',
            price: '₹65,000',
            period: 'per month',
            description: 'For businesses ready to dominate their market',
            features: [
                'All Growth Features +',
                'Custom Website Development',
                'All Social Media Platforms',
                'Advanced Marketing Automation',
                'Custom CRM Integration',
                'Weekly Strategy Calls',
                'Priority 24/7 Support',
                'VIP Account Manager',
                'Market Research Reports',
                'Brand Strategy Development'
            ],
            includes: [
                'Setup within 3 days',
                '30-day satisfaction guarantee',
                'Cancel anytime',
                'Dedicated strategy team'
            ],
            cta: 'Dominate Your Market',
            ctaSubtext: 'Book VIP Strategy Call',
            popular: false,
            icon: 'crown'
        }
    ];

    const pricingGrid = document.querySelector('.pricing-grid');

    if (pricingGrid) {
        pricingPlans.forEach(plan => {
            const pricingCard = document.createElement('div');
            pricingCard.className = `pricing-card${plan.popular ? ' popular' : ''}`;
            
            pricingCard.innerHTML = `
                ${plan.popular ? '<div class="popular-tag"><i class="fas fa-star"></i> Most Popular Choice</div>' : ''}
                <div class="pricing-header">
                    <div class="plan-icon">
                        <i class="fas fa-${plan.icon}"></i>
                    </div>
                    <h3>${plan.name}</h3>
                    <div class="pricing-price">
                        <span class="price">${plan.price}</span>
                        <span class="period">${plan.period}</span>
                    </div>
                    <p class="pricing-description">${plan.description}</p>
                </div>
                
                <div class="pricing-features">
                    <ul>
                        ${plan.features.map(feature => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="pricing-includes">
                    <strong>Also Includes:</strong>
                    <ul>
                        ${plan.includes.map(item => `
                            <li>
                                <i class="fas fa-gift"></i>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="pricing-cta">
                    <a href="#contact" class="btn ${plan.popular ? 'btn-primary' : 'btn-outline'}">
                        ${plan.cta} <i class="fas fa-arrow-right"></i>
                    </a>
                    <p class="cta-subtext">${plan.ctaSubtext}</p>
                </div>
            `;

            pricingGrid.appendChild(pricingCard);

            // Add fade-in animation
            requestAnimationFrame(() => {
                pricingCard.style.opacity = '1';
                pricingCard.style.transform = 'translateY(0)';
            });
        });
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        observer.observe(card);
    });

    // Add hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('popular')) {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = 'var(--shadow-hover)';
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('popular')) {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'var(--shadow-md)';
            }
        });
    });
});