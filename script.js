 document.addEventListener('DOMContentLoaded', (event) => {
      const features = document.querySelectorAll('.feature');
      const featureDetails = document.querySelectorAll('.feature-detail');
      const featuresSection = document.getElementById('features');
      const appDescription = document.getElementById('app-description');

      features.forEach(feature => {
        feature.addEventListener('click', () => {
          const featureType = feature.getAttribute('data-feature');
          featuresSection.style.display = 'none';
          appDescription.style.display = 'none';
          featureDetails.forEach(detail => {
            if (detail.getAttribute('data-feature') === featureType) {
              detail.classList.add('active');
              detail.scrollIntoView({ behavior: 'smooth' });
              
              // Add back button
              const backButton = document.createElement('a');
              backButton.href = '#';
              backButton.className = 'back-button';
              backButton.textContent = 'Back to Features';
              backButton.addEventListener('click', (e) => {
                e.preventDefault();
                detail.classList.remove('active');
                featuresSection.style.display = 'flex';
                appDescription.style.display = 'block';
                backButton.remove();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });
              detail.appendChild(backButton);
            } else {
              detail.classList.remove('active');
            }
          });
        });
      });
    });