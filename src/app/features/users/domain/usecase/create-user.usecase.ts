import { BCryptPassword } from '../../../../shared/adapters/crypto';
import { CustomError } from '../../../../shared/errors';
import { UserRepository } from '../../infra/repositories/user.repository';
import { CreateUserDTO, UserDetailDTO } from '../dtos';

export class CreateUserUseCase {
    async execute(createUserDTO: CreateUserDTO): Promise<UserDetailDTO> {
        const userRepository = new UserRepository();

        const exist = await userRepository.existUserByEmail(createUserDTO.email);

        if (exist) throw new CustomError('Email already exists.');

        const bcrypt = new BCryptPassword();

        const hashPassword = await bcrypt.hashPassword(createUserDTO.password);

        const dto = Object.assign(createUserDTO, { password: hashPassword });

        const user = await userRepository.saveUser(dto);

        return user;
    }
}
