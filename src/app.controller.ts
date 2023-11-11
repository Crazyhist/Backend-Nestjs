// 

import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

// тута мы будем юзать фичи из файла service, помеченные аннотацией Injectable

@Controller('/api')
export class AppController {

    // Здесь как раз делаем инъекию в конструкторе (Dependency Injection), чтобы можно было юзать сервисные классы
    constructor(private appService: AppService) {}

    @Get('/users')
    getUsers() {
        return this.appService.getUsers()
    }

}