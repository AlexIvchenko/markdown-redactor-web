<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <div class="form-group">
          <label for="content">Markdown</label>
          <textarea v-model="markdown" v-on:input="update" class="form-control" id="content" rows="20"></textarea>
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label>Preview</label>
          <div v-html="compiledMarkdown"></div>
        </div>
      </div>
      <div class="col-md-4 ml-auto">
        <div class="card">
          <div class="card-body">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="user.username" type="text" class="form-control" id="username"
                     placeholder="Enter username"/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="user.password" type="password" class="form-control" id="password"
                     aria-describedby="passwordHelp" placeholder="Password"/>
              <small id="passwordHelp" class="form-text text-muted">Use at least one letter, one
                numeral, and seven characters.
              </small>
            </div>
            <button v-if="canSignUp" class="btn btn-primary btn-lg" v-on:click="doSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import _ from 'lodash'
  import axios from 'axios'
  import ApiMixin from '../mixins/ApiMixin'
  import auth from '../auth'

  export default {
    name: 'Index',
    mixins: [ApiMixin],
    data() {
      return {
        user: {
          username: "",
          password: ""
        },
        markdown: ''
      }
    },

    computed: {
      compiledMarkdown: function () {
        return marked(this.markdown, {sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.markdown = e.target.value
      }, 300),

      doSignUp: function (event) {
        auth.signUp(this, this.user, null);
//        var createUserUrl = this.actions.signUp.href;
//        console.log('create user url = ' + createUserUrl);
//        axios.post(createUserUrl, this.user).then(function (response) {
//          console.log(response);
//          window.location.href = '/docs';
//        }).catch(function (error) {
//          console.log(error);
//        });
      },
//      loadActions: function () {
//        console.log("load actions");
//        axios.get(this.api).then(function (response) {
//          this.actions = response.data._links;
//        }.bind(this));
//      }
    }
  }
</script>
