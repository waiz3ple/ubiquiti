import { Key } from "react";


export interface  deviceType{
    id: Key | null | undefined;
    icon: {
        id: string
    };
      product: {
        name:string
    };
    line: any;
    devices: {
        filter(arg0: (item: { product: { name: string; }; }) => boolean): any;
         
    line: {
        name:string
    };
   
    id: Key; 
    icon: { 
        id: string; 
      } 
    };
   
    }
