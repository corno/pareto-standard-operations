import * as _et from 'exupery-core-types'

import * as generic from "./generic"

export type Test_Set = {
    'serializers': {
        'integer': {
            'decimal': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'hexadecimal': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'binary': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'octal': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'udhr to iso': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
        }
        'boolean': {
            'true false': _et.Dictionary<generic.Transformer_Without_Parameters<boolean, string>>
        }
        'approximate_number': {
            'scientific notation': _et.Dictionary<generic.Transformer_With_Parameters<number, { 'digits': number }, string>>
        }
    }
    'deserializers': {
        'integer': {
            'decimal': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
            'hexadecimal': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
            'binary': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
            'octal': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
            'iso to udhr': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'boolean': {
            'true false': _et.Dictionary<generic.Refiner_Without_Parameters<string, boolean>>
        }
        // 'approximate_number': {
        //     //'scientific notation': _et.Dictionary<FIXME_Approximate_Number_Deserializer_Test_Case>
        // }
    }
}