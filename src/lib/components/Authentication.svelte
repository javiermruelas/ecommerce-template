<script lang="ts">
    import { supabase } from "$lib/db";
    
    export let authType: string;
    let authForm: any;
    let labelClasses = 'block mb-2 text-sm font-medium dark:text-white';
    let inputClasses = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500';

    switch(authType) {
        case 'signUp':
            authForm = { 
                formTitle: 'Register',
                formData: {
                    name: '',
                    email: '',
                    password: '',
                    passwordRetype: ''
                }
            };
            break;
        case 'signIn':
            authForm = { 
                formTitle: 'Sign In',
                formData: { 
                    email: '', 
                    password: ''
                }
            };
            break;
        default:
            console.error('Authentication type not recognized.');
            break;
    }
  
    async function signIn() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: authForm.formData.email,
            password: authForm.formData.password,
        });
    
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    }

    async function signUp() {
        const { data, error } = await supabase.auth.signUp({
            // need to include logic to store user's first name
            // name: authForm.formData.name,
            email: authForm.formData.email,
            password: authForm.formData.password
        });

        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    }
    
    function submit() {
        switch(authType) {
            case 'signUp':
                signUp();
                break;
            case 'signIn':
                signIn();
                break;
            default:
                console.error('Form submission not recognized due to unrecognized authentication type.');
                break;
        }
    }
</script>
  
<div class="card w-1/2 mx-auto my-8 p-24 space-y-8">
    <pre>{JSON.stringify(authForm.formData, null, 2)}</pre>
    <h1>{authForm.formTitle}</h1>
    <form on:submit|preventDefault={submit}>
        {#if authType === 'signUp'}
            <div class="mb-6">
                <label for="name" class={labelClasses}>Name</label>
                <input bind:value={authForm.formData.name} type="text" id="name" class={inputClasses} required>
            </div>
            <div class="mb-6">
                <label for="email" class={labelClasses}>Email</label>
                <input bind:value={authForm.formData.email} type="email" id="email" class={inputClasses} required>
            </div>
            <div class="mb-6">
                <label for="password" class={labelClasses}>Please enter your password</label>
                <input bind:value={authForm.formData.password} type="password" id="password" class={inputClasses} required>
            </div>
            <div class="mb-6">
                <label for="confirm" class={labelClasses}>Please confirm your password</label>
                <input bind:value={authForm.formData.passwordRetype} type="password" id="confirm" class={inputClasses} required>
            </div>
        {/if}
        {#if authType === 'signIn'}
            <div class="mb-6">
                <label for="email" class={labelClasses}>Please enter your email</label>
                <input bind:value={authForm.formData.email} type="email" id="email" class={inputClasses} required>
            </div>
            <div class="mb-6">
                <label for="password" class={labelClasses}>Your password</label>
                <input bind:value={authForm.formData.password} type="password" id="password" class={inputClasses} required>
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input 
                    id="remember" 
                    type="checkbox" 
                    value="" 
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 
                    focus:ring-amber-300 dark:bg-gray-700 dark:border-gray-600
                    dark:focus:ring-amber-500 dark:ring-offset-amber-800 accent-amber-500">
                </div>
                <label for="remember" class="ml-2 text-sm font-medium">Remember me</label>
            </div>
        {/if}
        <button type="submit" class="btn btn-sm bg-amber-500 hover:bg-amber-600 focus:ring-4 
        focus:outline-none focus:ring-amber-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5
        text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-600">
        Submit
        </button>
    </form>
    <hr />
    {#if authType === 'signUp'}
        <p class="mt-2 text-sm">Forgot your password? <a href="/passwordReset" class="font-medium !text-amber-600 dark:!text-amber-500">Reset your password here</a>.</p>
        <p class="mt-2 text-sm">Don't have an account? <a href="/signUp" class="font-medium !text-amber-600 dark:!text-amber-500">Register here</a>.</p>
    {/if}
    {#if authType === 'signIn'}
        <p class="mt-2 text-sm">Already have an account? <a href="/signIn" class="font-medium !text-amber-600 dark:!text-amber-500">Sign in here</a>.</p>
    {/if}
</div>

<style>
    input {
        outline-color: #F59F0B !important;
    }
</style>
