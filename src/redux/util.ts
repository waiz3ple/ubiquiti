import { v4 as uuid } from 'uuid';
import { OriginalType, UpdatedType } from './Types';
// add id and isActive property to our searched result 
// [{x:'x'}, {y:'y'}]  => [{x:'x', id:123, isActtive: false}, {y:'y', id: 283, isActtive: false}]
export function includeActiveProp(originalData: OriginalType): UpdatedType {
   return originalData?.map((item: OriginalType) => ({
    ...item,
    id: item.id || uuid(), // making sure id is accesible
    isActive: false,
  }));
}