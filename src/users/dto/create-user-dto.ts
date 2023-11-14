// дто - объект, не содержащий в себе логику, у дто есть только поля
// дто нужен для обмена данными между подсистемами (клиент - сервер, сервер-сервер)
export class CreateUserDto {
    readonly email: string
    readonly password: string
}