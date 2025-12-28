import *as _et from 'exupery-core-types'

import * as d_fractional_decimal from "./to_be_generated/fractional_decimal"
import * as d_scientific_notation from "./to_be_generated/scientific_notation"
import * as d_pad_left from "./to_be_generated/pad_left"
import * as d_repeated from "./to_be_generated/repeated"
import * as d_escaped_character from "./to_be_generated/escaped_character"
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
            export type fractional_decimal = _et.Deserializer_With_Parameters<number, string, d_fractional_decimal.Parameters>

        }

        export namespace boolean {

            export type true_false = _et.Deserializer<boolean, string>

        }
    }
}


export namespace serializers {

    export namespace schemas {

        export type list_of_texts = _et.Serializer<_et.List<string>>

    }

    export namespace primitives {

        export namespace approximate_number {

            export type scientific_notation = _et.Serializer_With_Parameters<number, d_scientific_notation.Parameters>

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
            export type fractional_decimal = _et.Serializer_With_Parameters<number, d_fractional_decimal.Parameters>
        }

        export namespace boolean {

            export type true_false = _et.Serializer<boolean>

        }

        export namespace text {

            export type pad_left = _et.Serializer_With_Parameters<string, d_pad_left.Parameters>
            export type repeated = _et.Serializer_With_Parameters<string, d_repeated.Parameters>
            export type escaped_character = _et.Serializer_With_Parameters<string, d_escaped_character.Parameters>

        }
    }
}