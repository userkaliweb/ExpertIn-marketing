// Services content and rendering
document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            title: 'LeadStorm Funnels',
            icon: '🎯',
            problem: 'Inconsistent lead flow and high ad costs',
            solution: 'Data-driven Meta & Google Ads + High-converting landing pages',
            result: 'Predictable daily leads at optimal cost',
            features: [
                'Custom audience targeting',
                'A/B tested ad creatives',
                'Conversion-optimized funnels',
                'ROI tracking dashboard'
            ]
        },
        {
            title: 'AutoFollow Engine',
            icon: '⚡',
            problem: 'Manual follow-ups eating your time',
            solution: 'Automated WhatsApp + Email nurture sequences',
            result: '24/7 lead nurturing on autopilot',
            features: [
                'Smart response system',
                'Personalized sequences',
                'Multi-channel integration',
                'Lead scoring'
            ]
        },
        {
            title: 'LocalRank Booster',
            icon: '📍',
            problem: 'Missing out on "near me" searches',
            solution: 'Local SEO + GMB optimization system',
            result: 'Dominate local search results',
            features: [
                'GMB optimization',
                'Local keyword targeting',
                'Review management',
                'Local citation building'
            ]
        },
        {
            title: 'BrandMagnet System',
            icon: '🎭',
            problem: 'Low brand visibility and trust',
            solution: 'Strategic content + social media engine',
            result: 'Consistent brand growth and engagement',
            features: [
                'Content strategy',
                'Social media calendar',
                'Engagement automation',
                'Analytics tracking'
            ]
        },
        {
            title: 'OfferX Formula',
            icon: '💎',
            problem: 'Price-sensitive clients and low margins',
            solution: 'Premium positioning + offer optimization',
            result: 'Higher-value clients and better profits',
            features: [
                'Value proposition design',
                'Pricing strategy',
                'Offer structure',
                'Conversion optimization'
            ]
        },
        {
            title: 'SiteFlow Builder',
            icon: '🚀',
            problem: 'Low-converting website losing sales',
            solution: 'AI-powered websites and landing pages',
            result: '2-4x higher conversion rates',
            features: [
                'Mobile-first design',
                'Speed optimization',
                'CRO best practices',
                'A/B testing'
            ]
        },
        {
            title: 'SalesRadar Dashboard',
            icon: '📊',
            problem: 'Unclear ROI and marketing performance',
            solution: 'Real-time analytics + ROI tracking',
            result: 'Data-driven decisions and optimization',
            features: [
                'Custom reporting',
                'KPI tracking',
                'ROI analysis',
                'Performance alerts'
            ]
        }
    ];

    const servicesGrid = document.querySelector('.services-grid');

    if (servicesGrid) {
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            
            serviceCard.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <div class="service-content">
                    <div class="service-problem">
                        <strong>Problem:</strong>
                        <p>${service.problem}</p>
                    </div>
                    <div class="service-solution">
                        <strong>Solution:</strong>
                        <p>${service.solution}</p>
                    </div>
                    <div class="service-result">
                        <strong>Result:</strong>
                        <p>${service.result}</p>
                    </div>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <a href="#contact" class="btn btn-primary">Claim Your Growth Weapon</a>
            `;

            servicesGrid.appendChild(serviceCard);

            // Add fade-in animation
            setTimeout(() => {
                serviceCard.style.opacity = '1';
                serviceCard.style.transform = 'translateY(0)';
            }, 100);
        });
    }
});