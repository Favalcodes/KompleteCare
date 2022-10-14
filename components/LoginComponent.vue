<template>
  <div class="login w-full bg-gray-100 flex justify-center items-center">
    <div class="card bg-white w-full sm:w-2/3 md:w-1/2 h-1/2 px-4 md:px-14 xl:px-40 py-14 rounded-lg">
      <h2 class="text-center mb-8 font-bold text-2xl">Login</h2>
      <form action="">
        <div class="form-group flex flex-col mb-4">
          <label for="" class="font-medium text-xl mb-2 text-gray-600">Email</label>
          <input type="text" v-model="email" class="form-control w-full border-gray-400 border rounded py-1 px-3" required>
        </div>
        <div class="form-group flex flex-col mb-4">
          <label for="" class="font-medium text-xl mb-2 text-gray-600">Password</label>
          <input type="password" v-model="password" class="form-control w-full border-gray-400 border rounded py-1 px-3" required>
        </div>
        <button type="submit" class="btn-submit text-white px-8 py-3 rounded" @click.prevent="$emit('login')">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    email: String,
    password: String
  }
}
</script>

<style lang="scss">
  .login{
    height: 100vh;
    h2{
      color: #382F90;
    }
    .btn-submit{
      background: #382F90;
    }
  }
</style>
