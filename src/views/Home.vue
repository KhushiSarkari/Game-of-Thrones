<template>
  <div class="home">
    <div>
      <h2 @click.once="updateCharacter(quotes.character)">{{quotes.character}}</h2>
      <p>{{quotes.quote}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  beforeCreate() {
    fetch("https://got-quotes.herokuapp.com/quotes")
      .then(res => res.json())
      .then(data => {
        (this.$store.state.data.quote = data.quote),
          (this.$store.state.data.character = data.character);
      });
  },
  computed: {
    quotes: function() {
      return this.$store.state.data;
    }
  },
  methods: {
    updateCharacter: function(character) {
      this.$store.dispatch("updateCharacter", character);
    }
  }
};
</script>
