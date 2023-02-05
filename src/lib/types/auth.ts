export type Auth = 'signUp' | 'signIn' | 'passwordRecovery' | 'passwordReset';

export type Toast = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error';

export type AuthForm = {
    formTitle: string,
    formData: {
        name?: string,
        email?: string,
        recoveryEmail?: string,
        password?: string,
        passwordConfirmation?: string
    }
}