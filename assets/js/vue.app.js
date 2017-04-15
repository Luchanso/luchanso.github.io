new Vue({
  el: '.iq-option',
  data: {
    message: `Now I'm working at IQ Option`,
    startTime: new Date(2016, 10, 07, 10, 30),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    nano: 0,
  },

  methods: {
    update: function() {
      let calculated = Date.now() - this.startTime.getTime();
      this.nano = Math.round(Math.random() * 1000)
      this.milliseconds = calculated % 1000;
      this.seconds = Math.floor(calculated / 1000) % 60;
      this.minutes = Math.floor(calculated / 1000 / 60) % 60;
      this.hours = Math.floor(calculated / 1000 / 60 / 60) % 24;
      this.days = Math.floor(calculated / 1000 / 60 / 60 / 24);

      if (this.milliseconds < 10) this.milliseconds = '0' + this.milliseconds;
      if (this.milliseconds < 100) this.milliseconds = '0' + this.milliseconds;
      if (this.seconds < 10) this.seconds = '0' + this.seconds;
      if (this.minutes < 10) this.minutes = '0' + this.minutes;
      if (this.hours < 10) this.hours = '0' + this.hours;
    }
  },

  mounted() {
    setInterval(() => {
      this.update();
    }, 1)
  }
})
