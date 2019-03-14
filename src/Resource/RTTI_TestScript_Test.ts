
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_TestScript_Action1} from './RTTI_TestScript_Action1';




        const mandatory = t.type({
           action: t.array(RTTI_TestScript_Action1)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_TestScript_Test:any = t.intersection([mandatory, partial]);
        

export type ITestScript_Test = t.TypeOf<typeof RTTI_TestScript_Test>;
        
        