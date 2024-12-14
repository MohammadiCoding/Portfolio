document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = document.querySelector('.page-active');
    
    function showPage(pageToShow) {
        if (currentPage === pageToShow) return;

        currentPage.classList.remove('page-active');
        currentPage.classList.add('page-exit-active');
        
        setTimeout(() => {
            currentPage.style.display = 'none';
            pageToShow.style.display = 'block';
            pageToShow.classList.remove('page-exit-active');
            pageToShow.classList.add('page-active');
            currentPage = pageToShow;
        }, 500); // Match the animation duration
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = document.querySelector(event.target.getAttribute('href'));
            showPage(targetPage);
        });
    });
});


 // JavaScript for visibility on scroll
 document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        sections.forEach(function(section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Check visibility on page load and on scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();  // Initial check to add visible class on page load
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.contact-form-container, .contact-info-container');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');

    // Observer options (trigger when 50% of the element is visible)
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // 50% visibility
    };

    // Create an intersection observer to observe the service cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class when the card is in view
          entry.target.classList.add('animate');
          entry.target.classList.remove('exit'); // Remove exit class when visible
        } else {
          // Add the 'exit' class when the card is out of view
          entry.target.classList.add('exit');
          entry.target.classList.remove('animate'); // Remove 'animate' class to reverse the animation
        }
      });
    }, observerOptions);

    // Observe each service card
    serviceCards.forEach(card => {
      observer.observe(card);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const portfolioCards = document.querySelectorAll('.card');

    // Observer options (trigger when 50% of the element is visible)
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // 50% visibility
    };

    // Create an intersection observer to observe the portfolio cards
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'animate' class when the card is in view
          entry.target.classList.add('animate');
          entry.target.classList.remove('exit'); // Remove exit class when visible
        } else {
          // Add the 'exit' class when the card is out of view
          entry.target.classList.add('exit');
          entry.target.classList.remove('animate'); // Remove 'animate' class to reverse the animation
        }
      });
    }, observerOptions);

    // Observe each portfolio card
    portfolioCards.forEach(card => {
      observer.observe(card);
    });
  });


//   text for the portfolio
document.addEventListener('DOMContentLoaded', function () {
  const portfolioTitleParts = document.querySelectorAll('.portfolio-title-part');
  const portfolioCards = document.querySelectorAll('.card');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, observerOptions);

  portfolioTitleParts.forEach(part => {
    observer.observe(part);
  });

  portfolioCards.forEach(card => {
    observer.observe(card);
  });
});


// skills section
// Function to animate the skills header letters
document.addEventListener("DOMContentLoaded", () => {
  const skillsHeader = document.querySelector('.skills-header');
  const text = skillsHeader.textContent.trim();
  const letters = text.split('');
  skillsHeader.innerHTML = '';
  
  letters.forEach(letter => {
    const span = document.createElement('span');
    span.classList.add('skill-letter');
    span.textContent = letter;
    skillsHeader.appendChild(span);
  });
});

// Function to animate skill cards when they appear on the screen
window.addEventListener('scroll', () => {
  const skillCards = document.querySelectorAll('.service-card');
  
  skillCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      card.classList.add('animate-card');
    } else {
      card.classList.remove('animate-card');
    }
  });
});

// Trigger initial scroll event to animate cards immediately if they are already visible
window.dispatchEvent(new Event('scroll'));


// animtion text for skills
// Intersection Observer to trigger animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    const skillsHeader = document.querySelector('.skills-header');

    // Options for the intersection observer
    const options = {
        root: null, // Relative to the viewport
        threshold: 0.5 // Trigger when 50% of the element is in the viewport
    };

    // Callback function when the element is in view
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to trigger the animation
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    // Create an observer instance
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe the "MY SKILLS" header
    observer.observe(skillsHeader);
});

// animation for the main about cards
// Function to animate the main cards when they appear on the screen
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".main-card");

    // Function to handle the animation of cards based on their visibility
    const handleCardAnimation = () => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                card.classList.add("animate"); // Add animation class when card is in view
            } else {
                card.classList.remove("animate"); // Remove animation class when card is out of view
            }
        });
    };

    // Initial check for cards on page load
    handleCardAnimation();

    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', handleCardAnimation);
});

// text
// Function to animate the text letters individually
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.animate-text');
  const text = header.textContent.trim();
  const words = text.split(' '); // Split text into words
  
  header.innerHTML = ''; // Clear the header content

  words.forEach((word) => {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('word'); // Add class for word container
    
    // Split each word into individual letters and wrap each in a span
    word.split('').forEach((letter, index) => {
      const letterSpan = document.createElement('span');
      letterSpan.classList.add('letter');
      letterSpan.textContent = letter;
      wordSpan.appendChild(letterSpan);
    });
    
    // Add a space between words
    header.appendChild(wordSpan);
    header.appendChild(document.createTextNode(' ')); // Add space between words
  });
});

// Scroll event to trigger animation when text enters the viewport
window.addEventListener('scroll', () => {
  const letters = document.querySelectorAll('.animate-text .letter');
  
  letters.forEach((letter, index) => {
    const rect = letter.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      letter.classList.add('animate'); // Add animation class when letter is in view
    } else {
      letter.classList.remove('animate'); // Remove animation class when letter is out of view
    }
  });
});

// Trigger initial scroll event to animate letters immediately if they are already visible
window.dispatchEvent(new Event('scroll'));


// team
document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // Remove animation class when out of view
        }
      });
    },
    { threshold: 0.1 } // Adjust this value to control when the animation triggers
  );

  teamCards.forEach((card) => observer.observe(card));
});

// team title
document.addEventListener("DOMContentLoaded", () => {
  const teamCards = document.querySelectorAll(".team-card");
  const sectionTitle = document.querySelector(".section-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    { threshold: 0.1 } // Adjust this value to control when animations trigger
  );

  // Observe team cards
  teamCards.forEach((card) => observer.observe(card));
  
  // Observe section title
  observer.observe(sectionTitle);
});


