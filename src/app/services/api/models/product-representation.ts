import { ratingRepresentation } from "./rating-representation"

export interface productRepresentation{
title?:string,
category?:string,
description?:string,
id?:number,
image?:string,
price?:number,
rating?:ratingRepresentation
}