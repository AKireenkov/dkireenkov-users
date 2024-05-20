import { User } from "./model/user.model";

export const userModelProvider = [
    {
        provide: 'USER_REPO',
        useValue: User,
    },
];