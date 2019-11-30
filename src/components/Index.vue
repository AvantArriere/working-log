<template>
<div class="main">
  <div class="main__container">
  <h1 class="title">working log</h1>
  <div class="signin-form ">
    <v-card max-width="600">
      <v-form ref="form" class="">
        <div class="ma-5">
      <v-text-field v-model="userEmail"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="userEmail"
        label="Password"
        required
      ></v-text-field>
      </div>
      </v-form>
      <v-btn @click="onSubmit">Login</v-btn>
    </v-card>
  </div>
  
  </div>
</div>
</template>

<script>
export default {
   name: 'index', 
   data() {
     return {
       userEmail: '',
       userPassword: '',
     }
   },
   methods: {
     onSubmit() {

     }
   }
}
</script>

<style scoped>
.main {
  height: 900px;
  background-color:blueviolet;
  text-align: center;
}

.main__container {
  position: relative;
  top: 30%;
}
.signin-form {
   position: relative;
  left: 15%; 
}

 .title{
   color: 'white';
}

@media only screen and (min-width: 481px) {
  .main{
    background-color: #B2D6FF; /* Blue */
  }
 
}
</style>
