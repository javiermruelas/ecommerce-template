export type Auth = "signUp" | "signIn" | "passwordRecovery" | "passwordReset";

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