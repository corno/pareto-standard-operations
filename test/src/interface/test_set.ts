import * as _et from 'exupery-core-types'

import * as generic from "pareto-test/dist/interface/generic"
import * as d_number_scientific_notation from "pub/dist/interface/approximate_number/scientific_notation/serializer"
import * as d_text_pad_left from "pub/dist/interface/text/pad_left/serializer"
import * as d_integer_fractional_decimal from "pub/dist/interface/integer/fractional_decimal/serializer"
import * as d_list_split from "pub/dist/implementation/algorithms/operations/impure/list/deprecated_split"

export type Test_Set = {
    'list': {
        'split': _et.Dictionary<generic.Transformer_With_Parameters<string, d_list_split.Parameters, string>>
    },
    'integer': {
        'decimal': {
            'serializer': _et.Dictionary<generic.Transformer<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'hexadecimal': {
            'serializer': _et.Dictionary<generic.Transformer<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'binary': {
            'serializer': _et.Dictionary<generic.Transformer<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'octal': {
            'serializer': _et.Dictionary<generic.Transformer<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'iso_udhr': {
            'serializer': _et.Dictionary<generic.Transformer<number, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, number>>
        }
        'fractional_decimal': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<number, d_integer_fractional_decimal.Parameters, string>>
            'deserializer': _et.Dictionary<generic.Refiner_With_Parameters<string, d_integer_fractional_decimal.Parameters, number>>
        }
    }
    'boolean': {
        'true_false': {
            'serializer': _et.Dictionary<generic.Transformer<boolean, string>>
            'deserializer': _et.Dictionary<generic.Refiner_Without_Parameters<string, boolean>>
        }
    }
    'approximate_number': {
        'scientific_notation': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<number, d_number_scientific_notation.Parameters, string>>
            'deserializer': _et.Dictionary<generic.Refiner_With_Parameters<string, d_number_scientific_notation.Parameters, number>>
        }
    }
    'text': {
        'pad_left': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<string, d_text_pad_left.Parameters, string>>
        }
    }
}