
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           type: RTTI_CodeableConcept,
reference: t.array(RTTI_Reference)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_MedicationKnowledge_RelatedMedicationKnowledge:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_RelatedMedicationKnowledge = t.TypeOf<typeof RTTI_MedicationKnowledge_RelatedMedicationKnowledge>;
        
        