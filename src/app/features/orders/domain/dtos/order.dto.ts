export interface CreateOrderUseCaseDTO {
    clientId: string;
    representativeId: string;
    productId: string[];
    amount: number;
    discount: number;
}

export interface CreateOrderDTO {
    clientId: string;
    representativeId: string;
    productId: string;
    amount: number;
    total?: number;
    discount: number;
}

export interface OrderDetailDTO {
    id: string;
    clientId: string;
    representativeId: string;
    productId: string;
    amount: number;
    total: number;
    discount: number;
    createdAt: Date;
    updatedAt: Date;
}
