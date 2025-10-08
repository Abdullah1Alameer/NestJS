import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
 



@Entity()
export class Tag{
@PrimaryGeneratedColumn()
id:number;
@Column({
    type:'varchar',
    length:256,
    nullable:false,
    unique:true
})
name :string;

@Column({
    type:'varchar',
    length:256,
    nullable:false,
    unique:true

})
sulg:string;

@Column({
    type:'text',
    nullable:true,
})
description:string;

@Column({
    type:'text',
    nullable:true,
})
schema:string;

@Column({
    type:'varchar',
    length:1024,
    nullable:false,
})
featuredImage?:string ;

@CreateDateColumn()
createDate:Date;

@UpdateDateColumn()
updateDate:Date;

@DeleteDateColumn()
dateledAt:Date;
}