export interface UserInterface {
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

export interface CardInterface {
    userId?: number;
    id?: number;
    title: string;
    completed: boolean;
}

export type DialogOptionsType = null | 'Update' | 'Create' ;
