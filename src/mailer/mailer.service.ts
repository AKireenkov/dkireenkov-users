import {Inject, Injectable} from "@nestjs/common";
import {MailerService} from "@nestjs-modules/mailer";
import {Op} from "sequelize";
import {catchError, from} from "rxjs";
import * as nodemailer from 'nodemailer';
import { MailDto } from "./dto/mail.dto";

@Injectable()
export class MailService {
    constructor(private readonly mailService: MailerService){}
  
    sendEmail(data: MailDto): void {
        const {mail, name, surname, phone} = data;

        /**
         * Автоматический ответ юзеру на его почту.
         */
        this.mailService.sendMail({
            to: mail,
            from: 'd.kireenkov@yandex.ru',
            subject: 'Автоматический ответ на обращение dkireenkov.ru',
            text: name + ', спасибо за обращение. Ваш запрос будет обработан в течение одного дня. Мы перезвоним Вам или напишем в ближайшее время.'
        })


        /**
         * Данные, которые юзер ввёл на веб-форме - отправляем себе на почту.
         */
        this.mailService.sendMail({
            to: "d.kireenkov32rus@yandex.ru",
            from: 'd.kireenkov@yandex.ru',
            subject: 'Запрос c сайта dkireenkov.ru',
            text: "Внимание ! На сайте dkireenkov.ru через форму обратной связи, тебе отправили контакты:" + '\n' + 
                    "Фамилия/Имя: " + name + " " + surname + '\n' + 
                    "email: " + mail + '\n' + 
                    "Номер телефона: " + phone
                     
    
        })
    }


}