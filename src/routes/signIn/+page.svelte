<div class="card w-1/2 mx-auto my-8 p-24 space-y-8">
    <h1>Sign In</h1>
    <form>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium dark:text-white">Please enter your email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="name@ecommerce.com" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium dark:text-white">Your password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" required>
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
    <p class="mt-2 text-sm">Don't have an account? <a href="/signUp" class="font-medium !text-amber-600 dark:!text-amber-500">Register here</a>.</p>
</div>

<style>
    input {
        outline-color: #F59F0B !important;
    }
</style>

