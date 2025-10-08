import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostStatus } from "./enums/postStatus.enum";
import { PostType } from "./enums/postType.enum";
import { CreatePostMetaOptionsDto } from "../meta-options/dtos/create-post-meta-options.dto";
import { MetaOption } from "src/meta-options/meta-option.entity";


@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;


    @Column({
    type:'varchar',
    length:512,
    nullable:false,
    unique:true,

})
    title:string;
    

    
@Column({
    type:'enum',
    enum:PostType,
    nullable:false,
    default:PostType.POST

})
    postType: PostType;
    


@Column({
   type:'enum',
    enum:PostStatus,
    nullable:false,
    default:PostStatus.DRAFT

})
    status: PostStatus;



    @Column({
        type:'varchar',
        length:256,
        nullable:false,
        unique:true
    })
    slug: string;
    

    @Column({
    type:'text',
    nullable:true,
})
    content?:string;
    

@Column({
    type:'text',
    nullable:true,
})
    schema?:string;
    


@Column({
    type:'varchar',
    length:1024,
    unique:true,

})
    featuredImageUrl?:string;
    

    @Column({
    type:'timestamp', //this datatime in mySQL
    nullable:true,

})
    publishOn?:Date;
  

@OneToOne(()=>MetaOption)
@JoinColumn()
metaOptions?:MetaOption;



tags?: string[];


}