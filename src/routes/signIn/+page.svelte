<script lang="ts">
  import { supabase } from "$lib/db";

  let formData = {
    email: '',
    password: ''
  }

  async function signIn() {
		const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
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
  <h1>Sign In</h1>
  <form on:submit|preventDefault={signIn}>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Please enter your email</label>
      <input bind:value={formData.email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="name@ecommerce.com" required>
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Your password</label>
      <input bind:value={formData.password} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
    </div>
    <div class="flex items-start mb-6">
      <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-amber-500 dark:ring-offset-amber-800 accent-amber-500" required>
      </div>
      <label for="remember" class="ml-2 text-sm font-medium">Remember me</label>
    </div>
    <button type="submit" class="btn btn-sm bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-600">Submit</button>
  </form>
  <hr />
  <p class="mt-2 text-sm">Forgot your password? <a href="/passwordReset" class="font-medium !text-amber-600 dark:!text-amber-500">Reset your password here</a>.</p>
  <p class="mt-2 text-sm">Don't have an account? <a href="/signUp" class="font-medium !text-amber-600 dark:!text-amber-500">Register here</a>.</p>
</div>

<style>
  input {
    outline-color: #F59F0B !important;
  }
</style>

