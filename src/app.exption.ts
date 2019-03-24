import { HttpException } from '@nestjs/common';

export class AppException extends HttpException {
  constructor(public readonly error:AppExceptionMapItemInterface) {
    super('AppException', 200);
  }
  getError(){
      return this.error
  }
}

export interface AppExceptionMapItemInterface{
    code:number,
    message:string
}
export const AppExceptionMap = {
    USER_NOT_FOUND:{
        code:1,
        message:'用户不存在'
    },
    PASSWROD_ERROR:{
        code:2,
        message:'密码错误'
    },
    USER_ALREADY_EXIST:{
        code:3,
        message:'用户已存在'
    }
};
