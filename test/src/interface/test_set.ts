import * as _et from 'exupery-core-types'

import * as generic from "./generic"

export type Test_Set = {
    'integer': {
        'decimal': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'hexadecimal': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'binary': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'octal': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'iso_udhr': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
    }
    'boolean': {
        'true_false': {
            'serializer': _et.Dictionary<generic.Transformer_Without_Parameters<boolean, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, boolean>>
        }
    }
    'approximate_number': {
        'scientific_notation': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<number, { 'digits': number }, string>>
            'deserializer': _et.Dictionary<generic.Refiner_With_Parameters<string, { 'digits': number }, number>>
        }
    }
    'text': {
        'pad_left': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<string, { 'desired length': number, 'pad character': number }, string>>
        }
    }
}