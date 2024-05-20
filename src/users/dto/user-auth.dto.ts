import {IsEmail, IsStrongPassword} from "class-validator";

export class UserAuthDto {
    @IsEmail({allow_display_name: true}, {message: "this is not email"})
    email: string;

    @IsStrongPassword()
    password: string;
}