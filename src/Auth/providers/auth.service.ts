import { Injectable,forwardRef,Inject } from "@nestjs/common";
import { AuthController } from "../auth.controller";
import { UsersService } from "src/users/providers/users.service";
import { UsersModule } from "src/users/users.module";
@Injectable()
export class AuthService{
constructor(
    @Inject(forwardRef(()=>UsersService))
    private readonly userService:UsersService,

){}
public login(email:string,password:string,id:string){
    const user=this.userService.findOneById('1234')
return "SAMPLE_TOKEN"

}
public isAuth(){
    return true;
}
}