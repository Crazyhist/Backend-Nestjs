
import { Controller } from '@nestjs/common';

// тута мы будем юзать фичи из файла service, помеченные аннотацией Injectable


@Controller('users')
export class UsersController {
    // Здесь как раз делаем инъекию в конструкторе (Dependency Injection), чтобы можно было юзать сервисные классы

}
