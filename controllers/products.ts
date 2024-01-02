import {Request } from "express";
import { URL_API } from "../config";
import { StatusCodes } from "http-status-codes";


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

export let object: {success: boolean, data: Object}

export const getProduct = async (req: Request, rest: Response) => {
    try{

        const url = URL_API + `search?q=${req.params.q}`;

                const results = await fetch(url).then((r) => r.json() as Promise<{
                        results: Results
                    }>)
            // mostrar resultados
            res.status(StatusCodes.OK || StatusCodes.CREATED).json({
                object: {
                    results,
                    success: true,
                },
            });

    } catch (error: unknown) {
        const err = error as Error
        console.log(`Error get Product Error`, err.message)
        rest.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: err.message
        });

    }
};