import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //El método forRoot se utiliza para configurar la conexión a la base de datos
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Dani.checho123",
      database: "api_nestjs",
      // autoLoadEntities: true, //Busca todas las entidades de la base de datos
      entities: [User],
      synchronize: true
    }),
    UsersModule],
})
export class AppModule {}
