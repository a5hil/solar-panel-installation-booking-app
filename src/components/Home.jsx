import "./home.css";
import { useEffect, useRef } from "react";

function Home() {
  const featureRefs = useRef([]);

  // Intersection Observer for feature cards animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const animateNumbers = () => {
      const stats = document.querySelectorAll(".stat-number");
      const targets = [500, 1000, 98];
      
      stats.forEach((stat, index) => {
        let current = 0;
        const target = targets[index];
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.textContent = target >= 100 ? `${Math.round(current)}%` : `${Math.round(current)}+`;
        }, 30);
      });
    };

    // Trigger counter animation after a delay
    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="glow-orbe orbe-1"></div>
        <div className="glow-orbe orbe-2"></div>
        <div className="glow-orbe orbe-3"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=2000"
            alt="Solar Panels"
            className="hero-image"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span>🌱 Sustainable Energy Solutions</span>
          </div>

          <h1 className="hero-title">
            Power Your Future with<br />
            <span className="title-highlight">Solar Energy</span>
          </h1>

          <p className="hero-subtitle">
            Save Energy. Save Money. Save the Planet. 
            Professional solar panel installation for your home or business.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number" data-target="500">0+</span>
              <span className="stat-label">Installations</span>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <span className="stat-number" data-target="1000">0+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <span className="stat-number" data-target="98">0%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div 
            className="feature-card"
            ref={el => featureRefs.current[0] = el}
          >
            <div className="feature-shimmer"></div>
            <div className="feature-icon-wrapper">
              <span className="feature-icon">☀️</span>
              <div className="icon-glow"></div>
            </div>
            <h3 className="feature-title">Clean Energy</h3>
            <p className="feature-description">
              Reduce your electricity bills by up to 70% with our high-efficiency 
              solar panel systems designed for maximum energy production.
            </p>
          </div>

          <div 
            className="feature-card"
            ref={el => featureRefs.current[1] = el}
          >
            <div className="feature-shimmer"></div>
            <div className="feature-icon-wrapper">
              <span className="feature-icon">⚡</span>
              <div className="icon-glow"></div>
            </div>
            <h3 className="feature-title">Fast Installation</h3>
            <p className="feature-description">
              Professional installation by certified experts. Most residential 
              installations are completed within 2-3 days with minimal disruption.
            </p>
          </div>

          <div 
            className="feature-card"
            ref={el => featureRefs.current[2] = el}
          >
            <div className="feature-shimmer"></div>
            <div className="feature-icon-wrapper">
              <span className="feature-icon">🌍</span>
              <div className="icon-glow"></div>
            </div>
            <h3 className="feature-title">Eco Friendly</h3>
            <p className="feature-description">
              Contribute to a greener planet. Each installation reduces carbon 
              emissions by approximately 3-4 tons annually.
            </p>
          </div>
        </div>
      </section>

      {/* Optional CTA Section */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        textAlign: 'center', 
        padding: '3rem 2rem 6rem',
        background: 'linear-gradient(180deg, rgba(10,10,15,0.5) 0%, transparent 100%)'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button 
            className="hero-badge" 
            style={{ 
              padding: '12px 40px', 
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
              color: '#0a0a0f',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            💡 Book Installation
          </button>
          <button 
            className="hero-badge" 
            style={{ 
              padding: '12px 40px', 
              fontSize: '1.1rem',
              background: 'rgba(255,255,255,0.05)',
              borderColor: 'rgba(255,255,255,0.1)',
              cursor: 'pointer'
            }}
          >
            📋 View Bookings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;