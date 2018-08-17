export class Product {
    constructor(public _id:string, 
        public name: string,
        public price: string,
        public brand: string,
        public rating: string,
        public sale: string,
        public img1: string,
        public img2: string,
        public isSale: boolean,
        public isNew: boolean
    ){}
    
}
// {"_id":"","name":"","price":"","brand":"","rating":"","sale":"","new":"","kind":"","description":"",
// "mainImage":"","slides":["","","",""],"ingerdients":"","howto":"","createAt":""};