

export interface IAccessTokens{
    accessToken: string;
    refreshToken?: string;
}

export interface IVerificationToken{
    id?: string;
    user_id: string;
    token: number;
}

export interface UserPayload{
    id: string;
    f_name: string;
    l_name: string;
}