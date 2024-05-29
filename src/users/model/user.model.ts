import { ApiProperty } from '@nestjs/swagger';
import {Column, DataType, Model, Table,} from 'sequelize-typescript';

@Table({tableName: 'user', paranoid: true})
export class User extends Model<User> {

    static selectFields = [
        "id",
        "email",
        "phone",
        "f_name",
        "l_name",
        "about"
    ] as (keyof User)[];

    @ApiProperty()
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    email: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    phone: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    password: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    f_name: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    l_name: string;

    @ApiProperty()
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    about: string;
}