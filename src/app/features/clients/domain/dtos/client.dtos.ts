export interface CreateClientDTO {
    fantasy: string;
    cpfCnpj: string;
    phone: string;
    address: string;
    email: string;
}

export interface ClientDetailDTO {
    id: string;
    fantasy: string;
    cpfCnpj: string;
    phone: string;
    address: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
