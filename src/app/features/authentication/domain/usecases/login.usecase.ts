import { BCryptPassword } from '../../../../shared/adapters/crypto';
import { JwtToken } from '../../../../shared/adapters/jwt';
import { CustomError } from '../../../../shared/errors';
import { AuthRepository } from '../../infra/repositories/auth.rerository';
import { LoginDTO, LoginDetailDTO } from '../dtos';

export class LoginUseCase {
    async execute(loginDTO: LoginDTO): Promise<LoginDetailDTO> {
        const repository = new AuthRepository();
        const bcrypt = new BCryptPassword();

        const user = await repository.getUserByEmail(loginDTO.email);

        if (!user) throw new CustomError('Incorret email or password.');

        const correctPassword = await bcrypt.comparePassword(
            loginDTO.password,
            user.password as string,
        );

        if (!correctPassword) throw new CustomError('Incorret a email or password.');

        const jwtToken = new JwtToken();

        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        };

        const token = jwtToken.sign(userData);

        return {
            ...userData,
            token,
        };
    }
}
