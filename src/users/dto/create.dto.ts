import {IsEmail, IsNumber, IsPhoneNumber, IsString, IsStrongPassword} from "class-validator";

export class CreateDto {

    @IsEmail({allow_display_name: true}, {message: "this is not email"})
    email: string;

    @IsPhoneNumber('RU', {message: "this is not Russian number"})
    phone: string;

    @IsStrongPassword()
    password?: string;

    @IsString()
    f_name: string;

    @IsString()
    l_name: string;

    @IsNumber()
    about: string;
}