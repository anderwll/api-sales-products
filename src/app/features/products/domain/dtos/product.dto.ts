import { Unit } from '../../../../shared/domain/enums';

export interface CreateProductDTO {
    description: string;
    price: number;
    unit: Unit;
    amount: number;
}

export interface ProductDetailDTO {
    id: string;
    description: string;
    price: number;
    unit: Unit;
    amount: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
