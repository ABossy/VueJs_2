<template>
  <div class="login-wrapper border border-light" id="registration">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Registration</h2>
      <label for="inputName" class="sr-only">Name</label>
      <input v-model="users.name" type="name" id="inputName" class="form-control" placeholder="name" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="users.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="users.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      users: {
        access_token: "masterKey",
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    register: function() {

      axios
        .post(
          "https://daily-standup-campus.herokuapp.com/api/users",
          this.users
        )
        .then(function(response) {
          alert('id new user'+response.data.user.id);
        })

        .catch(function(error) {
          console.log("error");
        });
    }
  }
};
</script>

<style lang="css">
/* body {
  background: #605B56;
} */

.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
