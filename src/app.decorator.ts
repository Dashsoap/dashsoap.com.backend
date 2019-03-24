import { SetMetadata, createParamDecorator } from '@nestjs/common';

export const Auth = (...args: string[]) => SetMetadata('auth', args);

export const AuthUser = createParamDecorator((data,req)=>{
    return req.user
})
