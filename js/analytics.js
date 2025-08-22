// Analytics tracking functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize analytics (replace with your tracking IDs)
    const initAnalytics = () => {
        // Google Analytics 4
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-ID';
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'YOUR-GA4-ID');

        // Meta Pixel
        !function(f,b,e,v,n,t,s) {
            if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s);
        }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR-PIXEL-ID');
        fbq('track', 'PageView');
    };

    // Track CTA clicks
    const trackCTAClick = (ctaType) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': ctaType
            });
        }
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: ctaType
            });
        }
    };

    // Track form submissions
    const trackFormSubmission = (formType) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'conversion',
                'event_label': formType
            });
        }
        if (typeof fbq !== 'undefined') {
            fbq('track', 'SubmitApplication', {
                content_name: formType
            });
        }
    };

    // Track WhatsApp clicks
    const trackWhatsAppClick = () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'engagement',
                'event_label': 'WhatsApp Button'
            });
        }
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Contact', {
                content_name: 'WhatsApp'
            });
        }
    };

    // Track section visibility
    const trackSectionVisibility = () => {
        const sections = document.querySelectorAll('section');
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'section_view', {
                            'event_category': 'engagement',
                            'event_label': sectionId
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        });

        sections.forEach(section => observer.observe(section));
    };

    // Initialize analytics
    initAnalytics();

    // Track CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-whatsapp');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const ctaType = button.textContent.trim();
            trackCTAClick(ctaType);
        });
    });

    // Track WhatsApp button
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', trackWhatsAppClick);
    }

    // Track form submissions
    const forms = {
        'quickForm': 'Quick Lead Form',
        'contactForm': 'Contact Form',
        'leadMagnetForm': 'Lead Magnet Form',
        'popupForm': 'Exit Intent Form'
    };

    Object.entries(forms).forEach(([formId, formType]) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', () => trackFormSubmission(formType));
        }
    });

    // Track section visibility
    trackSectionVisibility();

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll >= 25 && maxScroll < 50) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '25%'
                });
            } else if (maxScroll >= 50 && maxScroll < 75) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '50%'
                });
            } else if (maxScroll >= 75 && maxScroll < 90) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '75%'
                });
            } else if (maxScroll >= 90) {
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': '90%'
                });
            }
        }
    });
});