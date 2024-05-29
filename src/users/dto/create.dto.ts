import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsNumber, IsPhoneNumber, IsString, IsStrongPassword} from "class-validator";

export class CreateDto {

    @ApiProperty()
    @IsEmail({allow_display_name: true}, {message: "this is not email"})
    email: string;

    @ApiProperty()
    @IsStrongPassword()
    password: string;
}