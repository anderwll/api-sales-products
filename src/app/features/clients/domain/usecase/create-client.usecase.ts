import { CustomError } from '../../../../shared/errors';
import { ClientRepository } from '../../infra/repositories';
import { ClientDetailDTO, CreateClientDTO } from '../dtos';

export class CreateClientUseCase {
    async execute(createClientDTO: CreateClientDTO): Promise<ClientDetailDTO> {
        const clientRepository = new ClientRepository();

        const exist = await clientRepository.existClientByCpfCnpj(createClientDTO.cpfCnpj);

        if (exist) throw new CustomError('This customer already has an account.');

        const client = await clientRepository.saveClient(createClientDTO);

        return client;
    }
}
