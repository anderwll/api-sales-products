import { Profile } from '../../../../shared/domain/enums';

export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface UserDetailDTO {
    id: string;
    name: string;
    email: string;
    password: string;
    profile: Profile;
    createdAt: Date;
    updatedAt: Date;
}
