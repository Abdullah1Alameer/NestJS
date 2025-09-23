import { IsEmail, IsNotEmpty,IsOptional,IsString, Matches, MaxLength, MinLength, } from "class-validator";

export class CreateUserDto{

@IsString()
@IsNotEmpty()
@MinLength(3)
@MaxLength(96)
    firstName:String;

@IsNotEmpty()
@IsString()
@IsOptional()
@MinLength(3)
@MaxLength(96)
    lastName?:String;

@IsNotEmpty()
@IsString()    
@IsEmail()
    email:String;

@IsNotEmpty()
@IsString()
@MinLength(8)
@Matches(/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{
    message:'Minmim 8 char at least one latter, one num and one special char.'
})
    password:String;
}