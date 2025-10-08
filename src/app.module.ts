import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';




@Module({
  imports: [UsersModule,PostsModule,AuthModule,TagModule,MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      useFactory: ( )=>({
        import:[],
        inject:[],
  type: 'postgres',
  autoLoadEntities:true,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',   
  database: 'nestjs-blog',
  synchronize: true, })
 
}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}