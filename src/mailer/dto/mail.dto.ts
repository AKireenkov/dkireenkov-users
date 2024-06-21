import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class MailDto {

    @ApiProperty()
    @IsEmail({ allow_display_name: true }, { message: "this is not email" })
    mail: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    surname: string;
    
    @ApiProperty()
    @IsString()
    phone: string;
}