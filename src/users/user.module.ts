import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {userModelProvider} from "./user.providers";
import {DatabaseModule} from "../core/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, ...userModelProvider],
})
export class UserModule {
}