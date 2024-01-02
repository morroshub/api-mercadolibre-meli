import {Request } from "express";
import { URL_API } from "..";


// Modelo 
export type Results = {
    id: string;
    condition: string;
    title: string;
    thumbnail: string;
    category_id: string;
    price: number;
    currrency_id: string;
    active: string;
    seller_address: {
        city: {
            id: string;
            name: string;
        };
    };

}[] 

export let object: {message: string, data: Object}

export const getProduct = async (req: Request, rest: Response) => {
    try{

        const url = URL_API + `search?q=${req.params.q}`;

                const results = await fetch(url).then((r) => r.json() as Promise<{
                        results: Results
                    }>)
            // mostrar resultados
            res.status(StatusCodes.OK || StatusCodes.CREATED).json()
                    object.data = res
    } catch (error) {

    }
}