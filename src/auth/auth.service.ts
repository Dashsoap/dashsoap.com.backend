import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { UserEntity } from 'src/user/user.entity';
import * as jwt from 'jsonwebtoken';
export interface JwtPayload{
    id:number,
    username:string
}

@Injectable()
export class AuthService {
    jwtKey:string;
    constructor(){
        this.jwtKey = readFileSync('jwt.key').toString();
        console.log(this.jwtKey);
    }
    sighJwt(user:UserEntity){
        return jwt.sign({
            id:user.id,
            username:user.username
        },this.jwtKey,{
            expiresIn:3600*24*30,
        })
    }
    verifyJwt(token:string){
        return jwt.verify(token,this.jwtKey) as JwtPayload;
    }
}
