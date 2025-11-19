import * as _et from 'exupery-core-types'

import * as generic from "./generic"
import { Parameters as ScientificNotationParameters } from "pub/dist/interface/approximate_number/scientific_notation/serializer"
import { Parameters as PadLeftParameters } from "pub/dist/interface/text/pad_left/serializer"
import { Parameters as FractionalDecimalParameters } from "pub/dist/interface/integer/fractional_decimal/serializer"

export type Test_Set = {
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
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<number, FractionalDecimalParameters, string>>
            'deserializer': _et.Dictionary<generic.Refiner_With_Parameters<string, FractionalDecimalParameters, number>>
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
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<number, ScientificNotationParameters, string>>
            'deserializer': _et.Dictionary<generic.Refiner_With_Parameters<string, ScientificNotationParameters, number>>
        }
    }
    'text': {
        'pad_left': {
            'serializer': _et.Dictionary<generic.Transformer_With_Parameters<string, PadLeftParameters, string>>
        }
    }
}