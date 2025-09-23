import { Controller,
    Get,
    Post,
    Patch,
    Delete,
    Put,
    Param,
    Query,
    Body,
    Req,
    Headers,
    Ip,
    ParseIntPipe,
    DefaultValuePipe,
    ValidationPipe,
    }
     from '@nestjs/common';
import { request } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUsersDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService,){}

@Get('/:id')
public getUsers(
    @Param()getUsersParamDto:GetUsersParamDto,
    @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,
    @Query("page",new DefaultValuePipe(1),ParseIntPipe)page:number,
    ){
    
        return this.userService.findAll(getUsersParamDto,limit,page);       
       
    }
    @Post()
    public creatUsers(@Body()createUserDto:CreateUserDto){
        console.log( createUserDto instanceof CreateUserDto);
        return 'you sent a Post request to users endpoits and Abdullah 3mk';
        
    }
    @Patch()
    public patchUser(@Body() patchUsersDto:PatchUsersDto){
        return patchUsersDto;
    }


    }

