import { Optional } from "@nestjs/common";
import {IsEmail, IsNumber, IsPhoneNumber, IsString, IsStrongPassword} from "class-validator";

export class CreateDto {

    @IsEmail({allow_display_name: true}, {message: "this is not email"})
    email: string;

    @IsStrongPassword()
    password: string;
}