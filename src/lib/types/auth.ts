import { z } from "zod";

export type Auth = 'signUp' | 'signIn' | 'passwordRecovery' | 'passwordReset';

export type Toast = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'success' | 'error';

export const authFormSchema = z.object({
    formTitle: z.string(),
    formData: z.object({
        name: z.string().min(2).max(40),
        email: z.string().email(),
        password: z.string().min(6),
        passwordConfirmation: z.string().min(6)
    })
});

// "AuthForm" is generated (or inferred) from the Zod schema
export type AuthForm = z.infer<typeof authFormSchema>;

export type Feedback = string;

export type AuthFeedback = {
    nameFeedback?: Feedback,
    emailFeedback?: Feedback,
    passwordFeedback?: Feedback,
    passwordConfirmationFeedback?: Feedback
}

