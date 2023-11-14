import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user-dto';


// юзаем Injectable, и класс теперь = провайдер, этот модуль можно юзать в разных местах, например в controller
// здесь вся наша логика в классах

@Injectable()
export class UsersService {
    //юзаем Injectable, чтобы получить модель User
    constructor(@InjectModel(User) private userRepository: typeof User) {
        
    } 
    // CreateUserDto тип дто
    async createUser(dto: CreateUserDto){
        // обращение к бд - всегда асинхронно 
        const user = await this.userRepository.create(dto)
        return user
    }

    // async updateUser() {
    //     const userId = 1;
    //     await this.user.update(
    //         { username: 'новое значение', banReason: null },
    //         {
    //           where: { id: userId },
    //         }
    //       )
    //     return 'Таблица обновлена успешно.';
    //   }

    async getAllUsers(){
        const users = await this.userRepository.findAll()
        return users
    }
}
