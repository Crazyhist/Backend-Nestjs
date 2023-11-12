//
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";


//Обертка класса, здесь регаем контроллеры и сервисы в модуле чтоб работали, а также импорты 

@Module({
    controllers: [],

    // providers или service, здесь наша логика, может использоваться в других компонентах  
    providers: [], 

    // Тут импорт орм и всякого другого, в данном случае Sequelize
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: +process.env.POSTGRES_POTR,
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          autoLoadModels: true,
          synchronize: true,
        }),
        UsersModule,
      ],
})
export class AppModule {
    
}