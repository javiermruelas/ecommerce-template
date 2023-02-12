export type Auth = 'signUp' | 'signIn' | 'passwordRecovery' | 'passwordReset';

export type Toast = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error';

export type AuthForm = {
    formTitle: string,
    formData: {
        name?: string,
        email?: string,
        password?: string,
        passwordConfirmation?: string
    }
}

export type Feedback = {
    message: string,
    visited: boolean
}

export type AuthFeedback = {
    nameFeedback?: Feedback,
    emailFeedback?: Feedback,
    passwordFeedback?: Feedback,
    passwordConfirmationFeedback?: Feedback
}

