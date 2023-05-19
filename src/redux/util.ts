import { v4 as uuid } from 'uuid';


//['x', y] => [{x:'x'}, {y:'y'}]
/* export function stringArrToArrObj(arr: (string | number)[]) {             // XXXX  refactor the types here
    const newArr: { [index: string]: unknown }[] = [];

    arr.forEach((element: string | number) => {
        const newObj: { [index: string]: unknown } = {};
        newObj[element] = element;
        newArr.push(newObj);
    });

    return newArr;
} */

// add id and or more property to 
// [{x:'x'}, {y:'y'}]  => [{x:'x', id:123}, {y:'y', id: 283}]
interface originalType {
  id?: string,
  product:{
    name:string;
  }
  line:{
    name:string;
  }
  icon:{
    id:string;
  }
}

/* interface UpdatedDataItem extends OriginalDataItem {
  [property:string]: (string | string[] | boolean);
  id: string;
  isActive: boolean;
} */

interface updateType extends originalType{
    id: string;
    isActive: boolean;  
}


export function includeActiveProp(originalData: originalType[]): updateType[] {
   return originalData?.map((item: originalType) => ({
    ...item,
    id: item.id || uuid(), // making sure id is accesible
    isActive: false,
  }));
}