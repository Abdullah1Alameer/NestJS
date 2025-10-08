import { IsEmail, IsNotEmpty,IsOptional,IsString, Matches, MaxLength, MinLength, } from "class-validator";

export class CreateUserDto{

@IsString()
@IsNotEmpty()
@MinLength(3)
@MaxLength(96)
    firstName:string;

@IsNotEmpty()
@IsString()
@IsOptional()
@MinLength(3)
@MaxLength(96)
    lastName?:string;

@IsNotEmpty()
@IsString()    
@IsEmail()
@MaxLength(96)
    email:string;

@IsNotEmpty()
@IsString()
@MinLength(8)
@MaxLength(96)
@Matches(/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{
    message:'Minmim 8 char at least one latter, one num and one special char.'
})
    password:string;
}