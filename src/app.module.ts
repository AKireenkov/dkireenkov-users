import {Module} from '@nestjs/common';
import {UserModule} from "./users/user.module";
import { MailModule } from './mailer/mailer.module';

@Module({
    imports: [UserModule, MailModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
