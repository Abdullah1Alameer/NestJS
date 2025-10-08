import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, Matches, MinLength, IsOptional, IsJSON, IsUrl } from "class-validator";



export class CreateTagDto{
@MinLength(3)
@IsNotEmpty()
@IsString()
@MaxLength(256)
    name :string;
    
@ApiProperty(
    {
    description:"For example:- 'my-url'",
    example:'my-blog-post',
}
)
@IsNotEmpty()
@IsString()
@MaxLength(256)
@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: 'A slug should be all small letters and use only "-" and without spaces. For example: "my-url"',
})
sulg:string;
    
@ApiPropertyOptional()
@IsOptional()
@IsString()
    description:string;
    
@ApiPropertyOptional()
@IsOptional()
@IsJSON()
    schema:string;
    
@ApiPropertyOptional()
@IsOptional()
@IsUrl()
@MaxLength(1024)
    featuredImage?:string ;
    
    
    }
