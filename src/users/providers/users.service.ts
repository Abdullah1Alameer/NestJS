import { Injectable,Inject,forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/Auth/providers/auth.service";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService{


constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>,
){}


public async createUser(createUserDto:CreateUserDto){
    ///check is user exists with same email
    const existingUser = await this.userRepository.findOne({
      where:{ email : createUserDto.email},
    });

    //Handle exception

    
    ///Create a new user
   let newUSer = this.userRepository.create(createUserDto);
   newUSer = await this.userRepository.save(newUSer);
   return newUSer;
}
    
/**
 * The method to get all the users form the database
 */
    

/**
 * The method to get all the users form the database
 */
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

/**
 * The method to get all the users form the database
 */
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