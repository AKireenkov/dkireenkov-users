import {Module} from "@nestjs/common";
import { MailerController } from "./mailer.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "./mailer.service";

@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: 'smtp.yandex.com',
            auth: {
                user: 'd.kireenkov@yandex.ru',
                pass: 'vkexwrbzkkqfnrfz',
            },
        }
    })],
    controllers: [MailerController],
    providers: [MailService]
})
export class MailModule {
}