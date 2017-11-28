export interface Order {
	id: string;
	customer: string;
    delivery_date: string;
    exp_delivery_date: string;
    order_date: string;
    product_id: string;
    status: number;
    order_no: number;
    qty: number;
    aging_status: number;
    createdAt: string;
    updatedAt: string;
}