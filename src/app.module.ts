import {Module} from '@nestjs/common';
import {UserModule} from "./users/user.module";
import {UserAuthModule} from "./auth/user-auth.module";

@Module({
    imports: [UserModule, UserAuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
