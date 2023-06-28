import type { Auth, AuthForm, AuthFeedback, Toast } from "$types/auth";

import { goto } from '$app/navigation';

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
                        name: 'UNUSED', 
                        email: '', 
                        password: '',
                        passwordConfirmation: 'UNUSED'
                    }
                };
                break;
            case 'passwordRecovery':
                authForm = {
                    formTitle: 'Recover your email',
                    formData: {
                        name: 'UNUSED',
                        email: '',
                        password: 'UNUSED',
                        passwordConfirmation: 'UNUSED'
                    }
                };
                break;
            case 'passwordReset':
                authForm = {
                    formTitle: 'Reset your password',
                    formData: {
                        name: 'UNUSED',
                        email: "UNUSED@unused.com",
                        password: '',
                        passwordConfirmation: ''
                    }
                };
                break;
            default:
                console.error('Authentication type not recognized: ', authType);
                authForm = {
                    formTitle: 'Unrecognized Authentication',
                    formData: {
                        name: 'UNUSED',
                        email: 'UNUSED@unused.com',
                        password: 'UNUSED',
                        passwordConfirmation: 'UNUSED'
                    }
                };
                break;
        }
        return authForm;
    }

    /**
     * This method is called in Authentication.svelte to initiliaze form data
     * feedback that will handle UI interactions between the user and the 
     * auth form.
     * @param {Auth} authType 
     * @returns {AuthFeedback} authFeedback
     */
    public static generateAuthFeedback(authType: Auth): AuthFeedback {
        let authFeedback;
        switch(authType) {
            case 'signUp':
                authFeedback = {
                    nameFeedback: '',
                    emailFeedback: '',
                    passwordFeedback: '',
                    passwordConfirmationFeedback: ''
                }
                break;
            case 'signIn':
                authFeedback = {
                    emailFeedback: '',
                    passwordFeedback: ''
                }
                break;
            case 'passwordRecovery':
                authFeedback = {
                    emailFeedback: ''
                }
                break;
            case 'passwordReset':
                authFeedback = {
                    passwordFeedback: '',
                    passwordConfirmationFeedback: ''
                }
                break;
            default:
                authFeedback = {
                    nameFeedback: ''
                }
                break;
        }
        return authFeedback;
    }

    /**
     * Uses localStorage so that when a user returns to the site unsigned in, their email address will be pre-populated.
     * @param {string} email 
     */
    public static rememberUserEmail(email:string): void {
        localStorage.setItem('rememberMe', email);
    }

    /**
     * Deletes possible entry from localStorage.
     */
    public static forgetUserEmail(): void {
        localStorage.removeItem('rememberMe');
    }
    
    // /**
    //  * Uses the Supabase API to sign the user in.
    //  * @param {string} email
    //  * @param {string} password 
    //  */
    // public static async signIn(email: string, password:string, rememberMe:boolean): Promise<void> {
    //     const { data, error } = await supabase.auth.signInWithPassword({
    //         email: email,
    //         password: password
    //     });
    
    //     if (error) {
    //         console.error(error);
    //         this.triggerAuthToast('Invalid credentials, please ensure you have the correct credentials.', "error");
    //     } else {
    //         console.log(data);
    //         this.triggerAuthToast('Sign in successful!', "success");

    //         if (rememberMe) {
    //             this.rememberUserEmail(email);
    //         } else {
    //             this.forgetUserEmail();
    //         }

    //         goto('/');
    //     }
    // }

    /**
     * Uses the Supabase API call to sign the user out.
     */
	public static async signOut() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
		}
	}

    /**
     * Uses the Supabase API call to sign the user up.
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
     * Uses the Supabase API to send a recovery email to the user.
     * The template that will be sent to the user can be customized on the Supabase client.
     * @param {string} recoveryEmail
     */
    public static async sendRecoveryEmail(recoveryEmail: string): Promise<void> {
        console.log('sendRecoveryEmail() => recoveryEmail: ', recoveryEmail);
        const { data, error } = await supabase.auth.resetPasswordForEmail(recoveryEmail, {
            // at the moment, I don't want to redirect anywhere
            redirectTo: 'http://localhost:5173/passwordReset'
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
     * Uses the Supabase API to update the user's password,
     * afterwards triggers a toast with the status of the operation.
     * Note: Should only be called at the end of the Password Recovery process.
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
            this.triggerAuthToast('Password could not be reset, please try again.', "error");
        } else {
            console.log(data);
            this.triggerAuthToast('Password successfully reset!', "success");
            goto('/');
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
            timeout: 10000
        };
        toastStore.trigger(t);
    }
}