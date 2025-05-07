export interface City {
    id: string;
    name: string;
  }
  
  export interface CarBrand {
    id: string;
    name: string;
  }
  
  export interface CarModel {
    id: string;
    name: string;
  }
  
  export interface CarModification {
    id: string;
    name: string;
  }
  
  export interface PriceResponse {
    price: number;
    currency: string;
    estimatedDeliveryDays: number;
  }