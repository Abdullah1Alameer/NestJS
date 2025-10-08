import { IsArray,  IsISO8601, IsJSON, IsOptional, IsString, IsUrl, Matches, MaxDate, MaxLength, MinDate, MinLength, ValidateNested } from "class-validator";
import { IsEnum, IsNotEmpty } from 'class-validator';
import { PostType } from "../enums/postType.enum";
import { Settings } from "http2";
import { PostStatus } from "../enums/postStatus.enum";
import { CreatePostMetaOptionsDto } from "../../meta-options/dtos/create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
export class CreatePostDto{
@ApiProperty({
    description:"thsi is the title for the blog post",
    example:"this is title"
})
@IsString()
@IsNotEmpty()
@MinLength(4)    
@MaxLength(512)
title:string;

@ApiProperty({
    enum:PostType,
    description:"Possible values,'post', 'page', 'story', 'series'"

})
@IsEnum(PostType)
@IsNotEmpty()
postType: PostType;

@ApiProperty({
    enum:PostStatus,
    description:"possible values 'draft', 'scheduled'. 'review', 'published'",
    })

@IsEnum(PostStatus)
@IsNotEmpty()
status: PostStatus;


@ApiProperty({
    description:"For example:- 'my-url'",
    example:'my-blog-post',
})
@IsNotEmpty()
@IsString()
@MaxLength(256)
@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: 'A slug should be all small letters and use only "-" and without spaces. For example: "my-url"',
})
slug: string;


@ApiPropertyOptional({
    description:"this is the content of the  post",
    example:"THE post conten"
})
@IsString()
@IsOptional()
content?:string;


@ApiPropertyOptional({
    description:"Serialize your JSON object else a validation error will be thrown",
    example:"{ \r\n \"@context\":\"https:\/\/schema.org\",\r\n \"@type\":\"Person\"\r\n }"
})
@IsJSON()
@IsOptional()
schema?:string;


@ApiPropertyOptional({
    description:'Featured image for you rblog post',
    example:'http://localhost.com/images/image1.jpg',
})
@IsUrl()
@IsOptional()
@MaxLength(1024)
featuredImageUrl?:string;

@ApiPropertyOptional({
    description:'the date on which the blog post is published',
    example:'2024-03-16T07:46:32+0000',
})
@IsISO8601()
@IsOptional()
publishOn?:Date;


@ApiPropertyOptional({
    description:'Array o tags passed as string values ',
    example: ['nestjs', 'typescript'],
})
@IsOptional()
@IsArray()
@IsString({each:true})
@MinLength(3,{each:true})
tags?:string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        metavalue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example: '{"sidebarEnabled": true,}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto;
}