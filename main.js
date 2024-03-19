new Vue ({
  el: '#app',
  data: {
    header: 'Stay updated!',
    desc: 'Join 60,000+ product managers receiving monthly updates on:',
    benefits: [
      'Product discovery and building what matters',
      'Measuring to ensure updates are a success',
      'And much more!',
    ],

    email: null,
    valid: true,
    state: false,
  },

  methods: {
    validateEmail() {
      if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) ) {
        this.valid = true;
        this.toggleState();
      } else {
        this.valid = false;
      }
    },
    toggleState() {
      this.email = null;
      this.state = !this.state;
    }
  }
});