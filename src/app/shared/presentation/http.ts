export interface HttpResponse {
    success: boolean;
    message: string;
    field?: string | number;
    data?: any;
}
