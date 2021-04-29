
function initVue() {
  const OFFSET = 1;
  new Vue({

    el: '#app',
    data:{
      'showNavbar': true,
      'lastScrollPosition': 0,
      'scrollValue': 0,
      'indexActive': null,
      'active': false,
      'time': "Open Hours: Mon - Sat - 9:00 - 18:00",
      'numberPhone': "+1 (305) 1234-5678",
      'email': "hello@example.com",
      'adress': "Main Avenue, 987",
      'buy': "BUY NEXGEN",
      'copyright': "2021 NEXGEN is Proudly Powered by Codings.",
      'info': "Built to the smallest detail with a focus on feature availability.",
      'nav': [
        {
          info: 'Demos',
          dropdown: ['Home 1', 'Home 2', 'Home 3', 'Home 4', 'Home 5', 'Home 6', 'Home 7', 'Home 8', 'Home 9', 'Home 10']
        },
        {
          info: 'Pages',
          dropdown: ['About Us', 'Services', 'Single Service', 'Pricing Table', 'Testimonials', 'Team', 'Partners', 'Contact Us']
        },
        {
          info: 'Portfolio',
          dropdown: ['Full Width', 'With Sidebar', 'Single Portfolio']
        },
        {
          info: 'Blog',
          dropdown: ['Full Width', 'With Sidebar', 'Single Post']
        },
        {
          info: 'Shop',
          dropdown: ['View Shop']
        },
      ],
      'footer': [
        {
          name: 'Company',
          services: ['Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology'],
        },
        {
          name: 'Services',
          services: ['Audit & Assurance', 'Financial Advisory', 'Analytics and M&A', 'Middle Marketing', 'Legal Consulting'],
        },
        {
          name: 'Consultants',
          services: ['David Cooper', 'Oliver Jones', 'Emma Lopez', 'T. Johnson', 'Jacob Hill Jr'],
        },
      ],
    },
    mounted () {
      this.lastScrollPosition = window.pageYOffset;
      window.addEventListener('scroll', this.onScroll);
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewportMeta);
      console.log(this.lastScrollPosition);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll);
    },
    methods: {

      // Funzione per dropdown
      mouseOver: function(index){
        this.indexActive = index;
        this.active = !this.active;
      },
      onScroll () {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
      console.log(this.lastScrollPosition);
      }
    },

  })
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
