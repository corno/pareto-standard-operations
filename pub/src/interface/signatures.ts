import *as _et from 'exupery-core-types'

import * as sig_fractional_decimal from "./to_be_generated/fractional_decimal"
import * as sig_scientific_notation from "./to_be_generated/scientific_notation"

export namespace deserializers {

    export namespace primitives {

        export namespace approximate_number {

            export type scientific_notation = _et.Deserializer<number, string>

        }

        export namespace integer {

            export type iso_udhr = _et.Deserializer<number, string>
            export type binary = _et.Deserializer<number, string>
            export type octal = _et.Deserializer<number, string>
            export type decimal = _et.Deserializer<number, string>
            export type hexadecimal = _et.Deserializer<number, string>
            export type fractional_decimal = _et.Deserializer_With_Parameters<number, string, sig_fractional_decimal.Parameters>

        }

        export namespace boolean {

            export type true_false = _et.Deserializer<boolean, string>

        }
    }
}


export namespace serializers {

    export namespace primitives {

        export namespace approximate_number {

            export type scientific_notation = _et.Serializer_With_Parameters<number, sig_scientific_notation.Parameters>

        }

        export namespace integer {

            /**
             * 
             * uhdr is a numerical representation of dates where day 0 is 1948-12-10 (the date of the adoption of the Universal Declaration of Human Rights)
             * 
             * This function converts a udhr day number to an ISO 8601 date string (YYYY-MM-DD)
             */
            export type iso_udhr = _et.Serializer<number>
            export type binary = _et.Serializer<number>
            export type octal = _et.Serializer<number>
            export type decimal = _et.Serializer<number>
            export type hexadecimal = _et.Serializer<number>
            export type fractional_decimal = _et.Serializer_With_Parameters<number, sig_fractional_decimal.Parameters>
        }

        export namespace boolean {

            export type true_false = _et.Serializer<boolean>

        }
    }
}

export namespace operations {

    export namespace pure {

        export namespace dictionary {

            export type filter = <T>($: _et.Dictionary<_et.Optional_Value<T>>) => _et.Dictionary<T>

        }

        export namespace text {

            export type join_list_of_texts = _et.Transformer<_et.List<string>, string>

        }

    }

    export namespace impure {

        export namespace dictionary {

            export type cast_to_non_empty = <T>($: _et.Dictionary<T>) => _et.Optional_Value<_et.Dictionary<T>>
            export type directory_of_lists_to_list = <T>($: _et.Dictionary<_et.List<T>>) => _et.List<T>
            export type expect_exactly_one_entry = <T>($: _et.Dictionary<T>) => _et.Optional_Value<_et.Key_Value_Pair<T>>
            export type group = <T>($: _et.Dictionary<_et.Key_Value_Pair<T>>) => _et.Dictionary<_et.List<T>>

        }

    }

}