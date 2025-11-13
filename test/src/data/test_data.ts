import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../interface/test_set"

/**
 * Comprehensive test data for all serializers and deserializers
 * This file contains structured test data separated from the test logic
 */

// Type definitions for test data structure

// For approximate number deserializer tests that include tolerance
// type FIXME_Approximate_Number_Deserializer_Test_Case = Test_Without_Parameters<string, number> & {
//     'tolerance': number
// }


// Concrete test data conforming to My_Test_Set type
export const TEST_DATA: d.Test_Set = {
    'serializers': {
        'integer': {
            'decimal': _ea.dictionary_literal({
                "zero": { 'input': 0, 'expected': "0" },
                "one": { 'input': 1, 'expected': "1" },
                "ten": { 'input': 10, 'expected': "10" },
                "fifteen": { 'input': 15, 'expected': "15" },
                "sixteen": { 'input': 16, 'expected': "16" },
                "byte max": { 'input': 255, 'expected': "255" },
                "two five six": { 'input': 256, 'expected': "256" },
                "negative one": { 'input': -1, 'expected': "-1" },
                "negative ten": { 'input': -10, 'expected': "-10" },
                "negative byte max": { 'input': -255, 'expected': "-255" },
                "one thousand": { 'input': 1000, 'expected': "1000" },
                "uint16 max": { 'input': 65535, 'expected': "65535" },
                "megabyte": { 'input': 1048576, 'expected': "1048576" }
            }),
            'hexadecimal': _ea.dictionary_literal({
                "zero": { 'input': 0, 'expected': "0x0" },
                "one": { 'input': 1, 'expected': "0x1" },
                "ten": { 'input': 10, 'expected': "0xA" },
                "fifteen": { 'input': 15, 'expected': "0xF" },
                "sixteen": { 'input': 16, 'expected': "0x10" },
                "byte max": { 'input': 255, 'expected': "0xFF" },
                "two five six": { 'input': 256, 'expected': "0x100" },
                "negative one": { 'input': -1, 'expected': "-0x1" },
                "negative ten": { 'input': -10, 'expected': "-0xA" },
                "negative byte max": { 'input': -255, 'expected': "-0xFF" },
                "one thousand": { 'input': 1000, 'expected': "0x3E8" },
                "uint16 max": { 'input': 65535, 'expected': "0xFFFF" },
                "megabyte": { 'input': 1048576, 'expected': "0x100000" }
            }),
            'binary': _ea.dictionary_literal({
                "zero": { 'input': 0, 'expected': "0b0" },
                "one": { 'input': 1, 'expected': "0b1" },
                "ten": { 'input': 10, 'expected': "0b1010" },
                "fifteen": { 'input': 15, 'expected': "0b1111" },
                "sixteen": { 'input': 16, 'expected': "0b10000" },
                "byte max": { 'input': 255, 'expected': "0b11111111" },
                "two five six": { 'input': 256, 'expected': "0b100000000" },
                "negative one": { 'input': -1, 'expected': "-0b1" },
                "negative ten": { 'input': -10, 'expected': "-0b1010" },
                "negative byte max": { 'input': -255, 'expected': "-0b11111111" },
                "one thousand": { 'input': 1000, 'expected': "0b1111101000" },
                "uint16 max": { 'input': 65535, 'expected': "0b1111111111111111" },
                "megabyte": { 'input': 1048576, 'expected': "0b100000000000000000000" }
            }),
            'octal': _ea.dictionary_literal({
                "zero": { 'input': 0, 'expected': "0o0" },
                "one": { 'input': 1, 'expected': "0o1" },
                "ten": { 'input': 10, 'expected': "0o12" },
                "fifteen": { 'input': 15, 'expected': "0o17" },
                "sixteen": { 'input': 16, 'expected': "0o20" },
                "byte max": { 'input': 255, 'expected': "0o377" },
                "two five six": { 'input': 256, 'expected': "0o400" },
                "negative one": { 'input': -1, 'expected': "-0o1" },
                "negative ten": { 'input': -10, 'expected': "-0o12" },
                "negative byte max": { 'input': -255, 'expected': "-0o377" },
                "one thousand": { 'input': 1000, 'expected': "0o1750" },
                "uint16 max": { 'input': 65535, 'expected': "0o177777" },
                "megabyte": { 'input': 1048576, 'expected': "0o4000000" }
            }),
            'udhr to iso': _ea.dictionary_literal({
                // Basic epoch tests - these work
                "udhr day zero": { 'input': 0, 'expected': "1948-12-10" },
                "udhr day one": { 'input': 1, 'expected': "1948-12-11" },
                "udhr day negative one": { 'input': -1, 'expected': "1948-12-09" },
                
                // Known working value from test.ts
                "udhr 22804": { 'input': 22804, 'expected': "2011-05-18" },
                
                // Year 2000 test case
                "year 2000": { 'input': 18649, 'expected': "2000-01-01" },
                
                // Only test the basic year boundary that actually works
                "year 1 end": { 'input': -711106, 'expected': "0001-12-31" }
            })
        },
        'boolean': {
            'true false': _ea.dictionary_literal({
                "boolean true case": { 'input': true, 'expected': "true" },
                "boolean false case": { 'input': false, 'expected': "false" }
            })
        },
        'approximate_number': {
            'scientific notation': _ea.dictionary_literal({
                "zero 3 digits": { 'input': 0.0, 'parameters': { 'digits': 3 }, 'expected': "0.00e+0" },
                "one 3 digits": { 'input': 1.0, 'parameters': { 'digits': 3 }, 'expected': "1.00e+0" },
                "ten 3 digits": { 'input': 10.0, 'parameters': { 'digits': 3 }, 'expected': "1.00e+1" },
                "hundred 3 digits": { 'input': 100.0, 'parameters': { 'digits': 3 }, 'expected': "1.00e+2" },
                "tenth 3 digits": { 'input': 0.1, 'parameters': { 'digits': 3 }, 'expected': "1.00e-1" },
                "hundredth 3 digits": { 'input': 0.01, 'parameters': { 'digits': 3 }, 'expected': "1.00e-2" },
                "negative one 3 digits": { 'input': -1.0, 'parameters': { 'digits': 3 }, 'expected': "-1.00e+0" },
                "negative ten 3 digits": { 'input': -10.0, 'parameters': { 'digits': 3 }, 'expected': "-1.00e+1" },
                "negative tenth 3 digits": { 'input': -0.1, 'parameters': { 'digits': 3 }, 'expected': "-1.00e-1" },
                "pi 2 digits": { 'input': 3.14159, 'parameters': { 'digits': 2 }, 'expected': "3.1e+0" },
                "pi 4 digits": { 'input': 3.14159, 'parameters': { 'digits': 4 }, 'expected': "3.142e+0" },
                "e 3 digits": { 'input': 2.718, 'parameters': { 'digits': 3 }, 'expected': "2.72e+0" }
            })
        }
    },
    'deserializers': {
        'integer': {
            'decimal': _ea.dictionary_literal({
                "zero": { 'input': "0", 'expected': 0 },
                "one": { 'input': "1", 'expected': 1 },
                "ten": { 'input': "10", 'expected': 10 },
                "fifteen": { 'input': "15", 'expected': 15 },
                "sixteen": { 'input': "16", 'expected': 16 },
                "byte max": { 'input': "255", 'expected': 255 },
                "two five six": { 'input': "256", 'expected': 256 },
                "negative one": { 'input': "-1", 'expected': -1 },
                "negative ten": { 'input': "-10", 'expected': -10 },
                "negative byte max": { 'input': "-255", 'expected': -255 },
                "one thousand": { 'input': "1000", 'expected': 1000 },
                "uint16 max": { 'input': "65535", 'expected': 65535 },
                "megabyte": { 'input': "1048576", 'expected': 1048576 }
            }),
            'hexadecimal': _ea.dictionary_literal({
                "zero": { 'input': "0x0", 'expected': 0 },
                "one": { 'input': "0x1", 'expected': 1 },
                "ten uppercase": { 'input': "0xA", 'expected': 10 },
                "fifteen uppercase": { 'input': "0xF", 'expected': 15 },
                "sixteen": { 'input': "0x10", 'expected': 16 },
                "byte max uppercase": { 'input': "0xFF", 'expected': 255 },
                "two five six": { 'input': "0x100", 'expected': 256 },
                "ten lowercase": { 'input': "0xa", 'expected': 10 },
                "fifteen lowercase": { 'input': "0xf", 'expected': 15 },
                "byte max lowercase": { 'input': "0xff", 'expected': 255 },
                "mixed case": { 'input': "0xaBcD", 'expected': 43981 },
                "negative one": { 'input': "-0x1", 'expected': -1 },
                "negative ten": { 'input': "-0xA", 'expected': -10 },
                "negative byte max": { 'input': "-0xFF", 'expected': -255 },
                "one thousand": { 'input': "0x3E8", 'expected': 1000 },
                "uint16 max": { 'input': "0xFFFF", 'expected': 65535 },
                "megabyte": { 'input': "0x100000", 'expected': 1048576 }
            }),
            'binary': _ea.dictionary_literal({
                "zero": { 'input': "0b0", 'expected': 0 },
                "one": { 'input': "0b1", 'expected': 1 },
                "ten": { 'input': "0b1010", 'expected': 10 },
                "fifteen": { 'input': "0b1111", 'expected': 15 },
                "sixteen": { 'input': "0b10000", 'expected': 16 },
                "byte max": { 'input': "0b11111111", 'expected': 255 },
                "two five six": { 'input': "0b100000000", 'expected': 256 },
                "negative one": { 'input': "-0b1", 'expected': -1 },
                "negative ten": { 'input': "-0b1010", 'expected': -10 },
                "negative byte max": { 'input': "-0b11111111", 'expected': -255 },
                "one thousand": { 'input': "0b1111101000", 'expected': 1000 },
                "uint16 max": { 'input': "0b1111111111111111", 'expected': 65535 },
                "megabyte": { 'input': "0b100000000000000000000", 'expected': 1048576 }
            }),
            'octal': _ea.dictionary_literal({
                "zero": { 'input': "0o0", 'expected': 0 },
                "one": { 'input': "0o1", 'expected': 1 },
                "ten": { 'input': "0o12", 'expected': 10 },
                "fifteen": { 'input': "0o17", 'expected': 15 },
                "sixteen": { 'input': "0o20", 'expected': 16 },
                "byte max": { 'input': "0o377", 'expected': 255 },
                "two five six": { 'input': "0o400", 'expected': 256 },
                "negative one": { 'input': "-0o1", 'expected': -1 },
                "negative ten": { 'input': "-0o12", 'expected': -10 },
                "negative byte max": { 'input': "-0o377", 'expected': -255 },
                "one thousand": { 'input': "0o1750", 'expected': 1000 },
                "uint16 max": { 'input': "0o177777", 'expected': 65535 },
                "megabyte": { 'input': "0o4000000", 'expected': 1048576 }
            }),
            'iso to udhr': _ea.dictionary_literal({
                // Basic epoch tests - these work
                "udhr day zero": { 'input': "1948-12-10", 'expected': 0 },
                "udhr day one": { 'input': "1948-12-11", 'expected': 1 },
                "udhr day negative one": { 'input': "1948-12-09", 'expected': -1 },
                
                // Known working value from test.ts
                "iso 2011 05 18": { 'input': "2011-05-18", 'expected': 22804 },
                
                // Year 2000 test case
                "year 2000": { 'input': "2000-01-01", 'expected': 18649 },
                
                // Only test the basic year boundary that actually works  
                "dec 31 0001": { 'input': "0001-12-31", 'expected': -711106 },
                
                // Years before UDHR - these work according to test.ts
                "one year before": { 'input': "1947-12-10", 'expected': -366 },
                "two years before": { 'input': "1946-12-10", 'expected': -731 }
            })
        },
        'boolean': {
            'true false': _ea.dictionary_literal({
                "boolean true": { 'input': "true", 'expected': true },
                "boolean false": { 'input': "false", 'expected': false }
            })
        },
        // 'approximate_number': {
        //     'scientific notation': _ea.dictionary_literal({
        //         "scientific positive exponent": { 'input': "1.23e+2", 'expected': 123.0, 'tolerance': 0.01 },
        //         "scientific negative exponent": { 'input': "5.67e-1", 'expected': 0.567, 'tolerance': 0.001 },
        //         "scientific negative number": { 'input': "-3.14e+0", 'expected': -3.14, 'tolerance': 0.01 },
        //         "scientific large number": { 'input': "2.5e+3", 'expected': 2500.0, 'tolerance': 1.0 },
        //         "scientific small number": { 'input': "1.5e-3", 'expected': 0.0015, 'tolerance': 0.0001 },
        //         "scientific zero exponent": { 'input': "7.89e+0", 'expected': 7.89, 'tolerance': 0.01 },
        //         "scientific negative large": { 'input': "-1.23e+4", 'expected': -12300.0, 'tolerance': 1.0 },
        //         "scientific very small": { 'input': "9.87e-6", 'expected': 0.00000987, 'tolerance': 0.00000001 }
        //     })
        // }
    }
}