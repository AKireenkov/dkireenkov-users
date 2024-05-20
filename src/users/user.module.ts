import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {userModelProvider} from "./user.providers";
import {DatabaseModule} from "../core/database/database.module";
import {JwtModule} from "@nestjs/jwt";
import {UserStrategy} from "../auth/user.strategy";

@Module({
    imports: [DatabaseModule,
        JwtModule.register({
            secret: "Test",
        }),],
    controllers: [UserController],
    providers: [UserService, ...userModelProvider, UserStrategy],
})
export class UserModule {
}