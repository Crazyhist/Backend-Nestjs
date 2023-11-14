
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';

// тута мы будем юзать фичи из файла service, помеченные аннотацией Injectable


@Controller('users')
export class UsersController {
    // Здесь как раз делаем инъекию в конструкторе (Dependency Injection), чтобы можно было юзать сервисные классы
    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.usersService.getAllUsers()
    }
}
