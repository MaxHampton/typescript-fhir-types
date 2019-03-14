
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
method: RTTI_CodeableConcept,
type: RTTI_CodeableConcept,
amount: t.string,
_amount: RTTI_Element
        });
        

        export var RTTI_SubstanceSpecification_MolecularWeight:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_MolecularWeight = t.TypeOf<typeof RTTI_SubstanceSpecification_MolecularWeight>;
        
        