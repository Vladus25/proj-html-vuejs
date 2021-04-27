
function initVue() {

  new Vue({

    el: '#app',
    data:{

      'active': false,
      'time': "Open Hours: Mon - Sat - 9:00 - 18:00",
      'numberPhone': "+1 (305) 1234-5678",
      'email': "hello@example.com",
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
          dropdown: ''
        },
      ]
    },
    methods: {

      // Funzione per dropdown
      // mouseOver: function(){
      //
      //   this.active = !this.active;
      // }

    }
  })
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);
