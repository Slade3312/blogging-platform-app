import { TempActions } from '../../types';

const actions = (payload: boolean): TempActions => ({ type: 'TEMP', payload });
const actions2 = (payload: boolean): TempActions => ({ type: 'TEMP', payload });
export {
    actions,
    actions2
} 
