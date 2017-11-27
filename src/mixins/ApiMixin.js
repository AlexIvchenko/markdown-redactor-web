import axios from 'axios'

export default {
  data() {
    return {
      api: 'http://localhost:8888/api',
      actions: null
    }
  },
  created() {
    console.log("api mixin created");
    this.loadActions()
  },
  methods: {
    loadActions: function () {
      console.log('load actions ' + this.api);
      axios.get(this.api).then(function (response) {
        this.actions = response.data._links;
      }.bind(this));
    },
    canSignUp() {
      return this.actions.signUp !== null;
    },
  }
}
