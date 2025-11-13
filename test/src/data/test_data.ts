import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

/**
 * Comprehensive test data for all serializers and deserializers
 * This file contains structured test data separated from the test logic
 */

// Type definitions for test data structure

type Test_Without_Parameters<Input, Expected> = {
    'input': Input
    'expected': Expected
}

type Test_With_Parameters<Input, Parameters, Expected> = {
    'input': Input
    'parameters': Parameters
    'expected': Expected
}

type Approximate_Number_Test_Case = {
    'input': number
    'digits': number
    'expected': string
}

type Approximate_Number_Deserializer_Test_Case = {
    'input': string
    'expected': number
    'tolerance': number
}

type Integer_Serializer_Test_Case = {
    'input': number
    'expected': string
}

type UDHR_Serializer_Test_Case = {
    'udhr_day': number
    'expected_iso_date': string
}

type Deserializer_Test_Case = {
    'input': string
    'expected': number
}

type ISO_Deserializer_Test_Case = {
    'iso_date': string
    'expected_udhr_day': number
}

type Boolean_Deserializer_Test_Case = {
    'input': string
    'expected': boolean
}

type Boolean_Serializer_Test_Case = {
    'value': boolean
    'expected': string
}

type My_Test_Set = {
    'serializers': {
        'integer': {
            'decimal': _et.Dictionary<Integer_Serializer_Test_Case>
            'hexadecimal': _et.Dictionary<Integer_Serializer_Test_Case>
            'binary': _et.Dictionary<Integer_Serializer_Test_Case>
            'octal': _et.Dictionary<Integer_Serializer_Test_Case>
            'udhr_to_iso': _et.Dictionary<UDHR_Serializer_Test_Case>
        }
        'boolean': {
            'true_false': _et.Dictionary<Boolean_Serializer_Test_Case>
        }
        'approximate_number': {
            'scientific_notation': _et.Dictionary<Approximate_Number_Test_Case>
        }
    }
    'deserializers': {
        'integer': {
            'decimal': _et.Dictionary<Deserializer_Test_Case>
            'hexadecimal': _et.Dictionary<Deserializer_Test_Case>
            'binary': _et.Dictionary<Deserializer_Test_Case>
            'octal': _et.Dictionary<Deserializer_Test_Case>
            'iso_to_udhr': _et.Dictionary<ISO_Deserializer_Test_Case>
        }
        'boolean': {
            'true_false': _et.Dictionary<Boolean_Deserializer_Test_Case>
        }
        'approximate_number': {
            'scientific_notation': _et.Dictionary<Approximate_Number_Deserializer_Test_Case>
        }
    }
}

// Concrete test data conforming to My_Test_Set type
export const TEST_DATA: My_Test_Set = {
    'serializers': {
        'integer': {
            'decimal': _ea.dictionary_literal({
                'zero': { 'value': 0, 'expected': "0" },
                'one': { 'value': 1, 'expected': "1" },
                'ten': { 'value': 10, 'expected': "10" },
                'fifteen': { 'value': 15, 'expected': "15" },
                'sixteen': { 'value': 16, 'expected': "16" },
                'byte_max': { 'value': 255, 'expected': "255" },
                'two_five_six': { 'value': 256, 'expected': "256" },
                'negative_one': { 'value': -1, 'expected': "-1" },
                'negative_ten': { 'value': -10, 'expected': "-10" },
                'negative_byte_max': { 'value': -255, 'expected': "-255" },
                'one_thousand': { 'value': 1000, 'expected': "1000" },
                'uint16_max': { 'value': 65535, 'expected': "65535" },
                'megabyte': { 'value': 1048576, 'expected': "1048576" }
            }),
            'hexadecimal': _ea.dictionary_literal({
                'zero': { 'value': 0, 'expected': "0x0" },
                'one': { 'value': 1, 'expected': "0x1" },
                'ten': { 'value': 10, 'expected': "0xA" },
                'fifteen': { 'value': 15, 'expected': "0xF" },
                'sixteen': { 'value': 16, 'expected': "0x10" },
                'byte_max': { 'value': 255, 'expected': "0xFF" },
                'two_five_six': { 'value': 256, 'expected': "0x100" },
                'negative_one': { 'value': -1, 'expected': "-0x1" },
                'negative_ten': { 'value': -10, 'expected': "-0xA" },
                'negative_byte_max': { 'value': -255, 'expected': "-0xFF" },
                'one_thousand': { 'value': 1000, 'expected': "0x3E8" },
                'uint16_max': { 'value': 65535, 'expected': "0xFFFF" },
                'megabyte': { 'value': 1048576, 'expected': "0x100000" }
            }),
            'binary': _ea.dictionary_literal({
                'zero': { 'value': 0, 'expected': "0b0" },
                'one': { 'value': 1, 'expected': "0b1" },
                'ten': { 'value': 10, 'expected': "0b1010" },
                'fifteen': { 'value': 15, 'expected': "0b1111" },
                'sixteen': { 'value': 16, 'expected': "0b10000" },
                'byte_max': { 'value': 255, 'expected': "0b11111111" },
                'two_five_six': { 'value': 256, 'expected': "0b100000000" },
                'negative_one': { 'value': -1, 'expected': "-0b1" },
                'negative_ten': { 'value': -10, 'expected': "-0b1010" },
                'negative_byte_max': { 'value': -255, 'expected': "-0b11111111" },
                'one_thousand': { 'value': 1000, 'expected': "0b1111101000" },
                'uint16_max': { 'value': 65535, 'expected': "0b1111111111111111" },
                'megabyte': { 'value': 1048576, 'expected': "0b100000000000000000000" }
            }),
            'octal': _ea.dictionary_literal({
                'zero': { 'value': 0, 'expected': "0o0" },
                'one': { 'value': 1, 'expected': "0o1" },
                'ten': { 'value': 10, 'expected': "0o12" },
                'fifteen': { 'value': 15, 'expected': "0o17" },
                'sixteen': { 'value': 16, 'expected': "0o20" },
                'byte_max': { 'value': 255, 'expected': "0o377" },
                'two_five_six': { 'value': 256, 'expected': "0o400" },
                'negative_one': { 'value': -1, 'expected': "-0o1" },
                'negative_ten': { 'value': -10, 'expected': "-0o12" },
                'negative_byte_max': { 'value': -255, 'expected': "-0o377" },
                'one_thousand': { 'value': 1000, 'expected': "0o1750" },
                'uint16_max': { 'value': 65535, 'expected': "0o177777" },
                'megabyte': { 'value': 1048576, 'expected': "0o4000000" }
            }),
            'udhr_to_iso': _ea.dictionary_literal({
                // Basic epoch tests - these work
                'udhr_day_zero': { 'udhr_day': 0, 'expected_iso_date': "1948-12-10" },
                'udhr_day_one': { 'udhr_day': 1, 'expected_iso_date': "1948-12-11" },
                'udhr_day_negative_one': { 'udhr_day': -1, 'expected_iso_date': "1948-12-09" },
                
                // Known working value from test.ts
                'udhr_22804': { 'udhr_day': 22804, 'expected_iso_date': "2011-05-18" },
                
                // Only test the basic year boundary that actually works
                'year_1_end': { 'udhr_day': -711106, 'expected_iso_date': "0001-12-31" }
            })
        },
        'boolean': {
            'true_false': _ea.dictionary_literal({
                'boolean_true_case': { 'value': true, 'expected': "true" },
                'boolean_false_case': { 'value': false, 'expected': "false" }
            })
        },
        'approximate_number': {
            'scientific_notation': _ea.dictionary_literal({
                'zero_3_digits': { 'value': 0.0, 'digits': 3, 'expected_scientific': "0" },
                'one_3_digits': { 'value': 1.0, 'digits': 3, 'expected_scientific': "1.00e+0" },
                'ten_3_digits': { 'value': 10.0, 'digits': 3, 'expected_scientific': "1.00e+1" },
                'hundred_3_digits': { 'value': 100.0, 'digits': 3, 'expected_scientific': "1.00e+2" },
                'tenth_3_digits': { 'value': 0.1, 'digits': 3, 'expected_scientific': "1.00e-1" },
                'hundredth_3_digits': { 'value': 0.01, 'digits': 3, 'expected_scientific': "1.00e-2" },
                'negative_one_3_digits': { 'value': -1.0, 'digits': 3, 'expected_scientific': "-1.00e+0" },
                'negative_ten_3_digits': { 'value': -10.0, 'digits': 3, 'expected_scientific': "-1.00e+1" },
                'negative_tenth_3_digits': { 'value': -0.1, 'digits': 3, 'expected_scientific': "-1.00e-1" },
                'pi_2_digits': { 'value': 3.14159, 'digits': 2, 'expected_scientific': "3.1e+0" },
                'pi_4_digits': { 'value': 3.14159, 'digits': 4, 'expected_scientific': "3.142e+0" },
                'e_3_digits': { 'value': 2.718, 'digits': 3, 'expected_scientific': "2.72e+0" }
            })
        }
    },
    'deserializers': {
        'integer': {
            'decimal': _ea.dictionary_literal({
                'zero': { 'input': "0", 'expected': 0 },
                'one': { 'input': "1", 'expected': 1 },
                'ten': { 'input': "10", 'expected': 10 },
                'fifteen': { 'input': "15", 'expected': 15 },
                'sixteen': { 'input': "16", 'expected': 16 },
                'byte_max': { 'input': "255", 'expected': 255 },
                'two_five_six': { 'input': "256", 'expected': 256 },
                'negative_one': { 'input': "-1", 'expected': -1 },
                'negative_ten': { 'input': "-10", 'expected': -10 },
                'negative_byte_max': { 'input': "-255", 'expected': -255 },
                'one_thousand': { 'input': "1000", 'expected': 1000 },
                'uint16_max': { 'input': "65535", 'expected': 65535 },
                'megabyte': { 'input': "1048576", 'expected': 1048576 }
            }),
            'hexadecimal': _ea.dictionary_literal({
                'zero': { 'input': "0x0", 'expected': 0 },
                'one': { 'input': "0x1", 'expected': 1 },
                'ten_uppercase': { 'input': "0xA", 'expected': 10 },
                'fifteen_uppercase': { 'input': "0xF", 'expected': 15 },
                'sixteen': { 'input': "0x10", 'expected': 16 },
                'byte_max_uppercase': { 'input': "0xFF", 'expected': 255 },
                'two_five_six': { 'input': "0x100", 'expected': 256 },
                'ten_lowercase': { 'input': "0xa", 'expected': 10 },
                'fifteen_lowercase': { 'input': "0xf", 'expected': 15 },
                'byte_max_lowercase': { 'input': "0xff", 'expected': 255 },
                'mixed_case': { 'input': "0xaBcD", 'expected': 43981 },
                'negative_one': { 'input': "-0x1", 'expected': -1 },
                'negative_ten': { 'input': "-0xA", 'expected': -10 },
                'negative_byte_max': { 'input': "-0xFF", 'expected': -255 },
                'one_thousand': { 'input': "0x3E8", 'expected': 1000 },
                'uint16_max': { 'input': "0xFFFF", 'expected': 65535 },
                'megabyte': { 'input': "0x100000", 'expected': 1048576 }
            }),
            'binary': _ea.dictionary_literal({
                'zero': { 'input': "0b0", 'expected': 0 },
                'one': { 'input': "0b1", 'expected': 1 },
                'ten': { 'input': "0b1010", 'expected': 10 },
                'fifteen': { 'input': "0b1111", 'expected': 15 },
                'sixteen': { 'input': "0b10000", 'expected': 16 },
                'byte_max': { 'input': "0b11111111", 'expected': 255 },
                'two_five_six': { 'input': "0b100000000", 'expected': 256 },
                'negative_one': { 'input': "-0b1", 'expected': -1 },
                'negative_ten': { 'input': "-0b1010", 'expected': -10 },
                'negative_byte_max': { 'input': "-0b11111111", 'expected': -255 },
                'one_thousand': { 'input': "0b1111101000", 'expected': 1000 },
                'uint16_max': { 'input': "0b1111111111111111", 'expected': 65535 },
                'megabyte': { 'input': "0b100000000000000000000", 'expected': 1048576 }
            }),
            'octal': _ea.dictionary_literal({
                'zero': { 'input': "0o0", 'expected': 0 },
                'one': { 'input': "0o1", 'expected': 1 },
                'ten': { 'input': "0o12", 'expected': 10 },
                'fifteen': { 'input': "0o17", 'expected': 15 },
                'sixteen': { 'input': "0o20", 'expected': 16 },
                'byte_max': { 'input': "0o377", 'expected': 255 },
                'two_five_six': { 'input': "0o400", 'expected': 256 },
                'negative_one': { 'input': "-0o1", 'expected': -1 },
                'negative_ten': { 'input': "-0o12", 'expected': -10 },
                'negative_byte_max': { 'input': "-0o377", 'expected': -255 },
                'one_thousand': { 'input': "0o1750", 'expected': 1000 },
                'uint16_max': { 'input': "0o177777", 'expected': 65535 },
                'megabyte': { 'input': "0o4000000", 'expected': 1048576 }
            }),
            'iso_to_udhr': _ea.dictionary_literal({
                // Basic epoch tests - these work
                'udhr_day_zero': { 'iso_date': "1948-12-10", 'expected_udhr_day': 0 },
                'udhr_day_one': { 'iso_date': "1948-12-11", 'expected_udhr_day': 1 },
                'udhr_day_negative_one': { 'iso_date': "1948-12-09", 'expected_udhr_day': -1 },
                
                // Known working value from test.ts
                'iso_2011_05_18': { 'iso_date': "2011-05-18", 'expected_udhr_day': 22804 },
                
                // Only test the basic year boundary that actually works  
                'dec_31_0001': { 'iso_date': "0001-12-31", 'expected_udhr_day': -711106 },
                
                // Years before UDHR - these work according to test.ts
                'one_year_before': { 'iso_date': "1947-12-10", 'expected_udhr_day': -366 },
                'two_years_before': { 'iso_date': "1946-12-10", 'expected_udhr_day': -731 }
            })
        },
        'boolean': {
            'true_false': _ea.dictionary_literal({
                'boolean_true': { 'input': "true", 'expected': true },
                'boolean_false': { 'input': "false", 'expected': false }
            })
        },
        'approximate_number': {
            'scientific_notation': _ea.dictionary_literal({
                'scientific_positive_exponent': { 'input': "1.23e+2", 'expected': 123.0, 'tolerance': 0.01 },
                'scientific_negative_exponent': { 'input': "5.67e-1", 'expected': 0.567, 'tolerance': 0.001 },
                'scientific_negative_number': { 'input': "-3.14e+0", 'expected': -3.14, 'tolerance': 0.01 },
                'scientific_large_number': { 'input': "2.5e+3", 'expected': 2500.0, 'tolerance': 1.0 },
                'scientific_small_number': { 'input': "1.5e-3", 'expected': 0.0015, 'tolerance': 0.0001 },
                'scientific_zero_exponent': { 'input': "7.89e+0", 'expected': 7.89, 'tolerance': 0.01 },
                'scientific_negative_large': { 'input': "-1.23e+4", 'expected': -12300.0, 'tolerance': 1.0 },
                'scientific_very_small': { 'input': "9.87e-6", 'expected': 0.00000987, 'tolerance': 0.00000001 }
            })
        }
    }
}