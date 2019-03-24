import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { User } from 'src/user/user.entity';
import * as jwt from 'jsonwebtoken';
export interface JwtPayload{
    id:number
}

@Injectable()
export class AuthService {
    jwtKey:string;
    constructor(){
        this.jwtKey = readFileSync('jwt.key').toString();
        console.log(this.jwtKey);
    }
    sighJwt(user:User){
        return jwt.sign({
            id:user.id,
        },this.jwtKey,{
            expiresIn:3600*24*30,
        })
    }
    verifyJwt(token:string){
        return jwt.verify(token,this.jwtKey) as JwtPayload;
    }
}
