import type { Auth, AuthForm, AuthFeedback, Toast } from "$types/auth";

import { goto } from '$app/navigation';
import { supabase } from "$lib/db";

import { toastStore } from '@skeletonlabs/skeleton';
import type { ToastSettings } from "@skeletonlabs/skeleton";

export class AuthHelpers {
    /**
     * This method is first called in Authentication.svelte to initiliaze form data.
     * @param {Auth} authType 
     * @returns {AuthForm} authForm
     */
    public static generateAuthForm(authType: Auth): AuthForm {
        let authForm;
        switch(authType) {
            case 'signUp':
                authForm = { 
                    formTitle: 'Register',
                    formData: {
                        name: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
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
            case 'passwordRecovery':
                authForm = {
                    formTitle: 'Recover your email',
                    formData: {
                        email: ''
                    }
                };
                break;
            case 'passwordReset':
                authForm = {
                    formTitle: 'Reset your password',
                    formData: {
                        password: '',
                        passwordConfirmation: ''
                    }
                };
                break;
            default:
                console.error('Authentication type not recognized: ', authType);
                authForm = {
                    formTitle: 'Unrecognized Authentication',
                    formData: {}
                };
                break;
        }
        return authForm;
    }

    /**
     * This method is first called in Authentication.svelte to initiliaze form data feedback that will handle UI interactions between the user and the auth form.
     * @param {Auth} authType 
     * @returns {AuthFeedback} authFeedback
     */
    public static generateAuthFeedback(authType: Auth): AuthFeedback {
        let authFeedback;
        switch(authType) {
            case 'signUp':
                authFeedback = {
                    nameFeedback: {
                        message: '',
                        visited: false
                    },
                    emailFeedback: {
                        message: '',
                        visited: false
                    },
                    passwordFeedback: {
                        message: '',
                        visited: false
                    },
                    passwordConfirmationFeedback: {
                        message: '',
                        visited: false
                    }
                }
                break;
            case 'signIn':
                authFeedback = {
                    emailFeedback: {
                        message: '',
                        visited: false
                    },
                    passwordFeedback: {
                        message: '',
                        visited: false
                    }
                }
                break;
            case 'passwordRecovery':
                authFeedback = {
                    emailFeedback: {
                        message: '',
                        visited: false
                    }
                }
                break;
            case 'passwordReset':
                authFeedback = {
                    passwordFeedback: {
                        message: '',
                        visited: false
                    },
                    passwordConfirmationFeedback: {
                        message: '',
                        visited: false
                    }
                }
                break;
            default:
                authFeedback = {}
                break;
        }
        return authFeedback;
    }
    
    /**
     * This method will send a Supabase API call out to sign the user in.
     * @param {string} email
     * @param {string} password 
     */
    public static async signIn(email: string, password:string): Promise<void> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
    
        if (error) {
            console.error(error);
            this.triggerAuthToast('Invalid credentials, please ensure you have the correct credentials.', "error");
        } else {
            console.log(data);
            this.triggerAuthToast('Sign in successful!', "success");
            goto('/');
        }
    }

    /**
     * This method will send a Supabase API call out to sign the user out.
     */
	public static async signOut() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
		}
	}

    /**
     * This method will send a Supabase API call out to sign the user up.
     * @param {string} email 
     * @param {string} password 
     */
    public static async signUp(email:string, password:string): Promise<void> {
        const { data, error } = await supabase.auth.signUp({
            // need to include logic to store user's first name
            // name: authForm.formData.name,
            email: email,
            password: password
        });
    
        if (error) {
            console.error(error);
            this.triggerAuthToast('Sign up could not be completed, please try again later.', "error");
        } else {
            console.log(data);
            this.triggerAuthToast('Sign up process complete! Please check your email.', "success");
            goto(`/`);
        }
    }
    
    /**
     * This method will send a Supabase API call out to send a recovery email to the user. The template
     * that will be sent can be customized on the Supabase client.
     * @param {string} recoveryEmail
     */
    public static async sendRecoveryEmail(recoveryEmail: string): Promise<void> {
        console.log('sendRecoveryEmail() => recoveryEmail: ', recoveryEmail);
        const { data, error } = await supabase.auth.resetPasswordForEmail(recoveryEmail, {
            // at the moment, I don't want to redirect anywhere
            redirectTo: '{ .ConfirmationURL/passwordReset }'
        });
    
        if (error) {
            console.error(error);
            this.triggerAuthToast('Recovery email could not be sent, please try again later.', "error");
        } else {
            console.log(data);
            this.triggerAuthToast('Recovery email sent! Please check your email.', "success");
        }
    }
    
    /**
     * This method will send a Supabase API call out to update the user's password.
     * Should only be called at the end of the Password Recovery process.
     * It will send a status Toast and if the call was successful, it 
     * will also redirect the user to the home page. 
     * @async
     * @param {string} password
    */
    public static async resetPassword(password: string): Promise<void>{
        console.log('resetPassword() (Authentication.svelte): newPassword: ', password);
        const { data, error } = await supabase.auth.updateUser({
            password: password
        });
    
        if (error) {
            console.error(error);
            this.triggerAuthToast('Password could not be reset, please try again', "error");
        } else {
            console.log(data);
            this.triggerAuthToast('Password successfully reset!', "success");
            goto('/signIn');
        }
    }

    /***
     * This method will trigger a toast in the UI that will show at the bottom of the screen.
     * Use a Toast to communicate a change in state to the user regarding authentication.
     * @param {string} message - The message that will appear in the toast
     * @param {Toast} toastType - 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error'
    */
    public static triggerAuthToast(message: string, toastType: Toast): void {
        const autoHide: boolean = toastType === 'error' ? false : true; // => error messages should persist
        const t: ToastSettings = {
            message: message,
            preset: toastType,
            autohide: autoHide,
            timeout: 5000,
            action: {
                label: 'OK',
                response: () => toastStore.clear()
            }
        };
        toastStore.trigger(t);
    }
}