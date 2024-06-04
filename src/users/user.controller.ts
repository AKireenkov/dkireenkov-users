import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "./model/user.model";
import {CreateDto} from "./dto/create.dto";
import { UserAuthDto } from "./dto/user-auth.dto";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('user')
@Controller("/user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

   /**
     * Регистрация
     */
    @Post("/signup")
    @ApiBody({ type: CreateDto})
    @ApiResponse({
        type: Boolean
    })
    signup(@Body() user: CreateDto): Promise<User> {
        return this.userService.signup(user);
    }
    /**
     * Авторизация
     */
    @Post("/signin")
    @ApiBody({ type: UserAuthDto})
    @ApiResponse({
        type: [User]
    })
    signIn(@Body() data: UserAuthDto): Promise<User|String> {
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