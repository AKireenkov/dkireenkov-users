import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./model/user.model";
import {CreateDto} from "./dto/create.dto";
import { UserAuthDto } from "./dto/user-auth.dto";


@Controller("/user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

   /**
     * Регистрация
     */
    @Post("/signup")
    signup(@Body() user: CreateDto): Promise<User> {
        return this.userService.signup(user);
    }
    /**
     * Авторизация
     */
    @Post("/signin")
    signIn(@Body() data: UserAuthDto): Promise<User> {
        return this.userService.signIn(data);
    }

    /**
     * Получить список всех пользователей
     */
    @Get("/")
    getAll(): Promise<User[]> {
        return this.userService.getAll();
    }
}