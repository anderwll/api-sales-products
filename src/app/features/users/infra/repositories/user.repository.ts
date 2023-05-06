import { Profile } from '../../../../shared/domain/enums';
import { appDataSource } from '../../../../shared/infra/db/data-source';
import { UserEntity } from '../../../../shared/infra/db/entities/user.entity';
import { CreateUserDTO, UserDetailDTO } from '../../domain/dtos';

export class UserRepository {
    private _repository = appDataSource.getRepository(UserEntity);

    async saveUser(user: CreateUserDTO): Promise<UserDetailDTO> {
        const entity = this._repository.create({
            email: user.email,
            name: user.name,
            password: user.password,
            profile: Profile.ADMIN,
        });
        await this._repository.save(entity);

        return this.mapperToUserDetail(entity);
    }

    async existUserByEmail(email: string): Promise<boolean> {
        const user = await this._repository.exist({
            where: {
                email,
            },
        });

        return user;
    }

    private mapperToUserDetail(entity: UserEntity) {
        return {
            id: entity.id,
            name: entity.name,
            email: entity.email,
            password: entity.password,
            profile: entity.profile,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
