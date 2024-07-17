/**
* Template Name: Mentor
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Updated: May 18 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

})();

/**
* Template Name: Sailor
* Template URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

})()

const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('button');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');
    const parEl = document.querySelector('.par');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
        parEl.textContent = data[attr].par;
			});
		});
		

    var data = {
      "english": 
      {
        "title": "Welcome to Faculty of Information Technology",
        "description": 
          "The Faculty of Information Technology offers bachelor's degree programs that equip students with a strong foundation in quantitative methods, programming, and technology, including database management, operating systems, networks, and internet essentials, and organizational knowledge and tools necessary to apply information technology across every organization, level, and domain.",
        "par": 
          "Read More"
        },
      "kazakh": 
      {
        "title": "សូមស្វាគមន៍មកកាន់មហាវិទ្យាល័យព័ត៌មានវិទ្យា",
        "description": 
          "មហាវិទ្យាល័យព័ត៌មានវិទ្យា ផ្តល់បរិញ្ញាបត្រ កម្មវិធីថ្នាក់បរិញ្ញាបត្រដែលបំពាក់ឱ្យនិស្សិតនូវមូលដ្ឋានគ្រឹះដ៏រឹងមាំក្នុងវិធីសាស្រ្តបរិមាណ ការសរសេរកម្មវិធី និង បច្ចេកវិទ្យា រួមទាំងការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ ប្រព័ន្ធប្រតិបត្តិការ បណ្តាញ និងអ៊ីនធឺណិតសំខាន់ៗ និង ចំណេះដឹងរបស់ស្ថាប័ន និងឧបករណ៍ចាំបាច់សម្រាប់អនុវត្តបច្ចេកវិទ្យាព័ត៌មាននៅគ្រប់ស្ថាប័នកម្រិត និងដែន។",
        "par": 
          "អានបន្ថែម"
        },
    }

    function handleLinkClick(event) {
  // Prevent default behavior (link following)
  event.preventDefault();

  // Get the URL of the clicked link
  const targetUrl = event.currentTarget.getAttribute("href");

  // Update the browser URL (optional)
  history.pushState(null, "", targetUrl);

  // Fetch and load the content for the clicked link (replace with your logic)
  fetchContent(targetUrl);
}

// Attach click event listeners to all links
const allLinks = document.querySelectorAll("#eng");
allLinks.forEach((link) => link.addEventListener("click", handleLinkClick));

// Function to fetch and update content (replace with your specific implementation)
function fetchContent(url) {
  // Simulate your logic to fetch content from the target URL
  console.log("Fetching content from:", url);
  // Replace the content of a specific element (e.g., div) with the fetched content
  // document.getElementById("content").innerHTML = fetchedContent;
}

// Handle popstate event for back/forward navigation (optional)
window.addEventListener("popstate", () => {
  fetchContent(window.location.href);
});

// let clickCount = 0;

// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//   clickCount++;
//   if (clickCount === 1) {
//     functionOne();
//   } else {
//     functionTwo();
//     clickCount = 0; // Reset counter for next double click
//   }
// });

// function functionOne() {
//   console.log("Single Click!");
// }

// function functionTwo() {
//   console.log("kazakh");
// }


