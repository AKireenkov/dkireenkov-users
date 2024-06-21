import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import { MailService } from "./mailer.service";
import { MailDto } from "./dto/mail.dto";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("SendMail")
@Controller("/mailer")
export class MailerController {
    constructor(private readonly mailService: MailService) {}

    @Post('/')
    @ApiBody({ type: MailDto})
    @ApiResponse({
        type: Boolean
    })
    sendMail(@Body() data: MailDto): void{
       return this.mailService.sendEmail(data);
    }
}