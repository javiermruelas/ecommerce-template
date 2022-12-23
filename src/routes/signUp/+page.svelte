<script lang="ts">
  import { supabase } from "$lib/db"

  const formData = {
    name: '',
    email: '',
    password: '',
    passwordRetype: ''
  };

  async function signUp() {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
  
</script>

<div class="card w-1/2 mx-auto my-8 p-24 space-y-8">
  <pre>{JSON.stringify(formData, null, 2)}</pre>
  <h1>Register</h1>
  <form on:submit|preventDefault={signUp}>
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium dark:text-white">Name</label>
      <input bind:value={formData.name} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Email</label>
      <input bind:value={formData.email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Please enter your password</label>
      <input bind:value={formData.password} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
    </div>
    <div class="mb-6">
      <label for="confirm" class="block mb-2 text-sm font-medium dark:text-white">Please confirm your password</label>
      <input bind:value={formData.passwordRetype} type="password" id="confirm" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
      </div>
    <button type="submit" class="btn btn-sm bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-600">Submit</button>
  </form>
  <hr />
  <p class="mt-2 text-sm">Already have an account? <a href="/signIn" class="font-medium !text-amber-600 dark:!text-amber-500">Sign in here</a>.</p>
</div>


<style>
  input {
    outline-color: #F59F0B !important;
  }
</style>