import { Injectable,Inject,forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/Auth/providers/auth.service";

@Injectable()
export class UsersService{
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService:AuthService, 
    ){}
public findAll(
    getUsersParamDto:GetUsersParamDto,
    limit:number,
    page:number
){
    const isAuth=this.authService.isAuth();
    console.log(isAuth);

    return[
        {
        firstName:"Abdullah",
        email:"Abdoo121393@doe.com",
},
{
    firstName:"Omer",
    email:"Omer121393@doe.com"

}
    ];
}

public findOneById(id:string){
    return[
    {
        id:1234,
        firstName:"Omer",
        email:"Omer121393@doe.com"
    }
]

}
}