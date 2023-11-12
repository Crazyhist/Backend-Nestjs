import { Injectable } from '@nestjs/common';


// юзаем Injectable, и класс теперь = провайдер, этот модуль можно юзать в разных местах, например в controller
// здесь вся наша логика в классах

@Injectable()
export class UsersService {}
