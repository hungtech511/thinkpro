export interface Brand  {
    id: number;
    icon: string;
    name: string;
    description: string;
    slug: string;
    total: {
        EPICZONE: number;
        THINKPRO: number;
        NICESPACE: number;
    };
    shared_url: string;
    is_verify: boolean;
    is_premium: boolean;
}