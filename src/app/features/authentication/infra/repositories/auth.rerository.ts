import { appDataSource } from '../../../../shared/infra/db/data-source';
import { UserEntity } from '../../../../shared/infra/db/entities/user.entity';
import { LoginDetailDTO } from '../../domain/dtos';

export class AuthRepository {
    private _repository = appDataSource.getTreeRepository(UserEntity);

    async getUserByEmail(email: string): Promise<LoginDetailDTO | undefined> {
        const user = await this._repository.findOneBy({ email });

        if (!user) return undefined;

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: '',
        };
    }
}
