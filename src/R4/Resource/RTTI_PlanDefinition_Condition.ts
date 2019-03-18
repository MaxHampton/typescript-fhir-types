
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Expression, IExpression} from './RTTI_Expression';

export enum PlanDefinition_ConditionKindKind {
                applicability = 'applicability',
start = 'start',
stop = 'stop'
            }
const PlanDefinition_ConditionKindKindKeys = t.keyof({
                [PlanDefinition_ConditionKindKind.applicability]: null,
[PlanDefinition_ConditionKindKind.start]: null,
[PlanDefinition_ConditionKindKind.stop]: null
            });


            export interface IPlanDefinition_Condition {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The kind of condition.
                     */
                    kind? : PlanDefinition_ConditionKindKind;
                    

                    /**
                     * Extensions for kind
                     */
                    _kind? : IElement;
                    

                    /**
                     * An expression that returns true or false, indicating whether the condition is satisfied.
                     */
                    expression? : IExpression;
                    
            }
        


        export const RTTI_PlanDefinition_Condition: t.Type<IPlanDefinition_Condition> = t.recursion( 'IPlanDefinition_Condition', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
kind: PlanDefinition_ConditionKindKindKeys,
_kind: RTTI_Element,
expression: RTTI_Expression
        })
        
        );
        

        