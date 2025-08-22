// Case studies content and rendering
document.addEventListener('DOMContentLoaded', () => {
    const caseStudies = [
        {
            title: 'Coimbatore Textile Manufacturing',
            industry: 'Manufacturing',
            duration: '6 months',
            challenge: 'Struggling with traditional B2B sales approach and low online presence',
            solution: 'Implemented LeadStorm Funnel + AutoFollow Engine',
            results: {
                revenue: 'Monthly revenue: ₹2L → ₹8L',
                leads: '+300% qualified leads',
                roi: '4.5x ROI on ad spend'
            },
            testimonial: {
                text: 'The automated lead system has transformed our business. We\'re now getting consistent orders without manual follow-up.',
                author: 'Business Owner',
                position: 'Managing Director'
            }
        },
        {
            title: 'Chennai Restaurant Chain',
            industry: 'Food & Beverage',
            duration: '4 months',
            challenge: 'Low social media engagement and declining online orders',
            solution: 'BrandMagnet System + LocalRank Booster',
            results: {
                followers: '15K+ new followers',
                orders: '+60% online orders',
                engagement: '300% increase in engagement'
            },
            testimonial: {
                text: 'Our social media presence has exploded, and we\'re seeing real business impact with more orders and customer engagement.',
                author: 'Operations Manager',
                position: 'Chennai Branch'
            }
        },
        {
            title: 'Madurai Manufacturing Company',
            industry: 'Industrial',
            duration: '3 months',
            challenge: 'Poor visibility in local searches and low-quality leads',
            solution: 'LocalRank Booster + OfferX Formula',
            results: {
                ranking: 'Page 3 → #1 for key terms',
                leads: '+300% qualified leads',
                conversion: '25% lead-to-sale conversion'
            },
            testimonial: {
                text: 'We\'re now the go-to choice for industrial solutions in Madurai. The quality of leads has improved dramatically.',
                author: 'Marketing Head',
                position: 'Senior Manager'
            }
        }
    ];

    const caseStudiesGrid = document.querySelector('.case-studies-grid');

    if (caseStudiesGrid) {
        caseStudies.forEach(study => {
            const caseCard = document.createElement('div');
            caseCard.className = 'case-study-card';
            
            caseCard.innerHTML = `
                <div class="case-header">
                    <h3>${study.title}</h3>
                    <div class="case-meta">
                        <span class="industry">${study.industry}</span>
                        <span class="duration">${study.duration}</span>
                    </div>
                </div>
                
                <div class="case-content">
                    <div class="case-challenge">
                        <strong>Challenge:</strong>
                        <p>${study.challenge}</p>
                    </div>
                    
                    <div class="case-solution">
                        <strong>Solution:</strong>
                        <p>${study.solution}</p>
                    </div>
                    
                    <div class="case-results">
                        <strong>Results:</strong>
                        <ul>
                            ${Object.values(study.results).map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="case-testimonial">
                        <blockquote>
                            <p>"${study.testimonial.text}"</p>
                            <cite>
                                <span class="author">${study.testimonial.author}</span>
                                <span class="position">${study.testimonial.position}</span>
                            </cite>
                        </blockquote>
                    </div>
                </div>
                
                <div class="case-cta">
                    <a href="#contact" class="btn btn-primary">Want Similar Results? Let's Talk</a>
                </div>
            `;

            caseStudiesGrid.appendChild(caseCard);

            // Add fade-in animation
            setTimeout(() => {
                caseCard.style.opacity = '1';
                caseCard.style.transform = 'translateY(0)';
            }, 100);
        });
    }

    // Add hover effect
    const caseCards = document.querySelectorAll('.case-study-card');
    caseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});