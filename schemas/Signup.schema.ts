import z from 'zod';

import SigninSchema from './Signin.schema';

export default SigninSchema.extend({
    name: z.string().min(3).max(50),
    passwordConfirm: z.string().min(6)
}).refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm']
});