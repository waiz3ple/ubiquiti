
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
   devices: {
        filter(arg0: (item: OriginalType['product']) => OriginalType): any; 
    }; 
}
