import {Sequelize} from 'sequelize-typescript';
import {DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST} from '../constants';
import {databaseConfig} from './database.config';
import {User} from "../../users/model/user.model";

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                case TEST:
                    config = databaseConfig.test;
                    break;
                case PRODUCTION:
                    config = databaseConfig.production;
                    break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize({
                ...config,
                logging: false,
            });
            sequelize.addModels([
                User
            ]);
            return sequelize;
        },
    },
];
