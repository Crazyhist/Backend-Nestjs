//
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";


//Обертка класса, здесь регаем контроллеры и сервисы в модуле чтоб работали

@Module({
    controllers: [AppController],
    
    // Или service, здесь наша логика, может использоваться в других компонентах  
    providers: [AppService], 
})
export class AppModule {
    
}