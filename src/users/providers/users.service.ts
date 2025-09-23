import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";

@Injectable()
export class UsersService{
public findAll(
    getUsersParamDto:GetUsersParamDto,
    limit:number,
    page:number
){
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

public findOneById(id:number){
    return[
    {
        id:1234,
        firstName:"Omer",
        email:"Omer121393@doe.com"
    }
]

}
}