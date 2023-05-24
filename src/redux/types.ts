import { Key } from "react";


/* export interface  deviceType{     // refactore XXXXXXXXXXXXXXXXXXXXXXXXX
    id: string;
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
   
    icon: { 
        id: string; 
      } 
    };
   
    } */
export interface OriginalType {
    id?: string;
    product: {
        name: string;
    };
    line: {
        name: string;
    };
    icon: {
        id: string;
    };

   [x: string]: any; // extra properties
}

export interface UpdatedType extends OriginalType {
  id: string;
  isActive: boolean;
}

export interface MainType extends OriginalType {
  //devices: (item: OriginalType[]) => OriginalType;
   devices: {
        filter(arg0: (item: OriginalType['product']) => OriginalType): any; 
    }; 
}
