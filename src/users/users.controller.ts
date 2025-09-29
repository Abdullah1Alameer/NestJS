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
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private readonly userService:UsersService,){}
@Get('/:id')
@ApiOperation({
    summary:'Fetches a list of registered users on the application '
})
@ApiQuery({
    name:"limit",
    type:'number',
    required:false,
    description:'the number of entries returned per query',
    example:10,
    
})
@ApiQuery({
    name:"page",
    type:'number',
    required:false,
    description:'The position of page number that you want the API to return',
    example:1,
    
})

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

