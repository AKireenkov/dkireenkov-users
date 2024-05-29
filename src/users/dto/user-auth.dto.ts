import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsStrongPassword} from "class-validator";

export class UserAuthDto {

    @ApiProperty()
    @IsEmail({allow_display_name: true}, {message: "this is not email"})
    email: string;

    @ApiProperty()
    @IsStrongPassword()
    password: string;
}