import {Inject, Injectable, HttpException, HttpStatus} from "@nestjs/common";
import {User} from "./model/user.model";
import {Op} from "sequelize";
import {CreateDto} from "./dto/create.dto";
import { UserAuthDto } from "./dto/user-auth.dto";
import { retryWhen } from "rxjs";

@Injectable()
export class UserService {

    constructor(
        @Inject('USER_REPO')
        public readonly userRepo: typeof User,
    ) {
    }

        public async signup(user: CreateDto): Promise<User> {
            try {
                 return await this.userRepo.create({...user});
            } catch (ex) {
                throw new HttpException(ex, HttpStatus.BAD_REQUEST);
            }
        }

        public async signIn(data: UserAuthDto): Promise<User|String> {
            try {
                const user = await this.userRepo.findOne({
                        where: {email: data.email, password: data.password}
                    }

                );
                return user ? user : "Введено неверное имя пользователя или пароль" 
            } catch (ex) {
                throw new HttpException(ex, HttpStatus.BAD_REQUEST);
                        }
        }

        public getAll(): Promise<User[]> {
                return this.userRepo.findAll(
                );
        }
}