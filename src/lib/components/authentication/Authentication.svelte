<script lang="ts">
    import type { Auth, AuthForm, AuthFeedback } from "$types/auth";
    import { AuthHelpers } from "$lib/authHelpers";
    import InputFeedback from "$lib/components/authentication/InputFeedback.svelte";
	import { onMount } from "svelte";

    // importing the auth type that the page needs
    export let authType: Auth;
    // generating an auth form based on the auth type
    let authForm: AuthForm = AuthHelpers.generateAuthForm(authType);
    // these helper variables will be filled in by zod
    let authFeedback: AuthFeedback = AuthHelpers.generateAuthFeedback(authType);
    // is the field active ? if so, is the feedback active? if so has it been visited (if not visited then form has not been interacted with)? if so is there an error message (once interacted with I will show an error if empty as well so something valid has to be here)? 
    $: nameFieldValid = !authForm.formData.name ? false : !authFeedback.nameFeedback ?  false : !authFeedback.nameFeedback.visited ? false : !authFeedback.nameFeedback.message ? false : true;
    $: emailFieldValid = !authForm.formData.email ? false : !authFeedback.emailFeedback ?  false : !authFeedback.emailFeedback.visited ? false : !authFeedback.emailFeedback.message ? false : true;
    $: passwordFieldValid = !authForm.formData.password ? false : !authFeedback.passwordFeedback ?  false : !authFeedback.passwordFeedback.visited ? false : !authFeedback.passwordFeedback.message ? false : true;
    $: passwordConfirmationFieldValid = !authForm.formData.passwordConfirmation ? false : !authFeedback.passwordConfirmationFeedback ?  false : !authFeedback.passwordConfirmationFeedback.visited ? false : !authFeedback.passwordConfirmationFeedback.message ? false : true;
    $: formComplete = nameFieldValid && emailFieldValid && passwordFieldValid && passwordConfirmationFieldValid;
    

    // sign in does not need any validation, passwordRecovery just needs to ensure it's a valid email

    function parseForm(authForm: AuthForm): void {
        console.log("authForm: ", authForm);
        for (const property in authForm.formData) {
            // I need to explicitly tell typescript that 'property' is a KeyOf the TypeOf that object
            console.log(`${property}: ${authForm.formData[property as keyof typeof authForm.formData]}`);

            switch(property) {
                case 'name':
                    break;
                case 'email':
                    break;
                case 'password':
                    break;
                case 'passwordConfirmation':
                    break;
                default: 
                    break;
            }
        }
    }
    
    /**
     * This function is called when our Auth Form is submitted and will call another function
     * depending on the global 'authType: Auth' variable.
     * @fires signUp()
     * @fires signIn()
     * @fires sendRecoveryEmail()
     * @fires resetPassword()
     */
    function submit(): void {
        switch(authType) {
            case 'signUp':
                AuthHelpers.signUp(authForm.formData.email || '', authForm.formData.password || '');
                break;
            case 'signIn':
                AuthHelpers.signIn(authForm.formData.email || '', authForm.formData.password || '');
                break;
            case 'passwordRecovery':
                AuthHelpers.sendRecoveryEmail(authForm.formData.email || '');
                break;
            case 'passwordReset':
                AuthHelpers.resetPassword(authForm.formData.password || '');
                break;
            default:
                console.error('Form submission not recognized due to unrecognized authentication type: ', authType);
                break;
        }
    }

    /**
     * This function will set an onkeydown watcher for inputElement so that we may tell when an input field has been visited.
     * This is important for the UI as we don't want to show any red errors just by loading the page. We only want to show any errors
     * (including empty field errors) once the form has been interacted with.
     * @param {HTMLElement} inputElement
     * @param {string} property
     */
    function setInputWatcher(inputElement: HTMLElement, property: string):void {
        inputElement.onkeydown = () => {
            switch(property) {
                case 'name':
                    authFeedback.nameFeedback!.visited = true;
                    break;
                case 'email':
                    authFeedback.emailFeedback!.visited = true;
                    break;
                case 'password':
                    authFeedback.passwordFeedback!.visited = true;
                    break;
                case 'passwordConfirmation':
                    authFeedback.passwordConfirmationFeedback!.visited = true;
                    break;
                default: 
                    console.error('Input watcher was unable to set unknown property.')
                    break;
            }
        }
    }

    /**
     * This function is called when our code is being mounted onto the DOM and will set an input watcher for any fields
     * that are active based on our authType.
     */
    function setAllInputWatchers() {
        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");
        let passwordConfirmationInput = document.getElementById("confirm");

        if (nameInput) setInputWatcher(nameInput, 'name');
        if (emailInput) setInputWatcher(emailInput, 'email');
        if (passwordInput) setInputWatcher(passwordInput, 'password');
        if (passwordConfirmationInput) setInputWatcher(passwordConfirmationInput, 'passwordConfirmation');
    }

    // trying to keep the html as clean as possible...
    const labelClasses: string = 'block mb-2 text-sm font-medium dark:text-white';
    const inputClasses: string = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-surface-700 dark:border-stone-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500';

    onMount(() => {
        setAllInputWatchers();
    });
</script>
  
<div id="auth" class="card w-1/2 mx-auto my-8 p-24 space-y-8">
    <pre>{JSON.stringify(authForm.formData, null, 2)}</pre>
    <h1 id="auth-title">{authForm.formTitle}</h1>
    <form id="auth-form" on:submit|preventDefault={submit}>
        {#if authType === 'signUp'}
            <div class="mb-6">
                <label for="name" class={labelClasses}>Name</label>
                <input bind:value={authForm.formData.name} type="text" id="name" class={inputClasses} required>
                {#if authFeedback.nameFeedback}
                    <InputFeedback feedback={authFeedback.nameFeedback}></InputFeedback>
                {/if}
            </div>
            <div class="mb-6">
                <label for="email" class={labelClasses}>Email</label>
                <input bind:value={authForm.formData.email} type="email" id="email" class={inputClasses} required>
                {#if authFeedback.emailFeedback}
                    <InputFeedback feedback={authFeedback.emailFeedback}></InputFeedback>
                {/if}
            </div>
            <div class="mb-6">
                <label for="password" class={labelClasses}>Please enter your password</label>
                <input bind:value={authForm.formData.password} type="password" id="password" class={inputClasses} required>
                {#if authFeedback.passwordFeedback}
                    <InputFeedback feedback={authFeedback.passwordFeedback}></InputFeedback>
                {/if}
            </div>
            <div class="mb-6">
                <label for="confirm" class={labelClasses}>Please confirm your password</label>
                <input bind:value={authForm.formData.passwordConfirmation} type="password" id="confirm" class={inputClasses} required>
                {#if authFeedback.passwordConfirmationFeedback}
                    <InputFeedback feedback={authFeedback.passwordConfirmationFeedback}></InputFeedback>
                {/if}
            </div>
        {/if}
        {#if authType === 'signIn'}
            <div class="mb-6">
                <label for="email" class={labelClasses}>Please enter your email</label>
                <input bind:value={authForm.formData.email} type="email" id="email" class={inputClasses} required>
                {#if authFeedback.emailFeedback}
                    <InputFeedback feedback={authFeedback.emailFeedback}></InputFeedback>
                {/if}
            </div>
            <div class="mb-6">
                <label for="password" class={labelClasses}>Your password</label>
                <input bind:value={authForm.formData.password} type="password" id="password" class={inputClasses} required>
                {#if authFeedback.passwordFeedback}
                    <InputFeedback feedback={authFeedback.passwordFeedback}></InputFeedback>
                {/if}
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
        {#if authType === 'passwordRecovery'}
            <div class="mb-6">
                <label for="email" class={labelClasses}>Please enter your email address, we'll use this to send you a recovery email.</label>
                <input type="email" id="email" bind:value={authForm.formData.email} class={inputClasses} required>
                {#if authFeedback.emailFeedback}
                    <InputFeedback feedback={authFeedback.emailFeedback}></InputFeedback>
                {/if}
            </div>
        {/if}
        {#if authType === 'passwordReset'}
            <div class="mb-6">
                <label for="password" class={labelClasses}>Please enter your new password</label>
                <input bind:value={authForm.formData.password} type="password" id="password" class={inputClasses} required>
                {#if authFeedback.passwordFeedback}
                    <InputFeedback feedback={authFeedback.passwordFeedback}></InputFeedback>
                {/if}
            </div>
            <div class="mb-6">
                <label for="confirm" class={labelClasses}>Please confirm your new password</label>
                <input bind:value={authForm.formData.passwordConfirmation} type="password" id="confirm" class={inputClasses} required>
                {#if authFeedback.passwordConfirmationFeedback}
                    <InputFeedback feedback={authFeedback.passwordConfirmationFeedback}></InputFeedback>
                {/if}
            </div>
        {/if}
        <button 
        id="auth-submit" 
        type="submit" 
        disabled={!formComplete} 
        class="btn btn-sm bg-amber-500 hover:bg-amber-600 focus:ring-4 
        focus:outline-none focus:ring-amber-300 font-medium text-sm 
        w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-500 
        dark:hover:bg-amber-400 dark:focus:ring-amber-600">
        Submit
        </button>
    </form>
    <div id="form-extras">
        {#if authType === 'signUp' || authType === 'signIn'}
        <hr />
        {/if}
        {#if authType === 'signUp'}
        <p id="sign-in" class="mt-2 text-sm">Already have an account? <a href="/signIn" class="font-medium !text-amber-600 dark:!text-amber-500">Sign in here</a>.</p>
        {/if}
        {#if authType === 'signIn'}
            <p id="password-recovery" class="mt-2 text-sm">Forgot your password? <a href="/passwordRecovery" class="font-medium !text-amber-600 dark:!text-amber-500">Reset your password here</a>.</p>
            <p id="sign-up" class="mt-2 text-sm">Don't have an account? <a href="/signUp" class="font-medium !text-amber-600 dark:!text-amber-500">Register here</a>.</p>
        {/if}
    </div>
</div>

<style>
    input {
        outline-color: #F59F0B !important;
    }
</style>