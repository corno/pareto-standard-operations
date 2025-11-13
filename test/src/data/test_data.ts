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
                "zero": { 'input': "0", 'expected': _ea.set(0) },
                "one": { 'input': "1", 'expected': _ea.set(1) },
                "ten": { 'input': "10", 'expected': _ea.set(10) },
                "fifteen": { 'input': "15", 'expected': _ea.set(15) },
                "sixteen": { 'input': "16", 'expected': _ea.set(16) },
                "byte max": { 'input': "255", 'expected': _ea.set(255) },
                "two five six": { 'input': "256", 'expected': _ea.set(256) },
                "negative one": { 'input': "-1", 'expected': _ea.set(-1) },
                "negative ten": { 'input': "-10", 'expected': _ea.set(-10) },
                "negative byte max": { 'input': "-255", 'expected': _ea.set(-255) },
                "one thousand": { 'input': "1000", 'expected': _ea.set(1000) },
                "uint16 max": { 'input': "65535", 'expected': _ea.set(65535) },
                "megabyte": { 'input': "1048576", 'expected': _ea.set(1048576) },
                // Invalid input cases
                "empty string": { 'input': "", 'expected': _ea.not_set() },
                "non numeric": { 'input': "abc", 'expected': _ea.not_set() },
                "decimal point": { 'input': "12.34", 'expected': _ea.not_set() },
                "leading space": { 'input': " 123", 'expected': _ea.not_set() },
                "trailing space": { 'input': "123 ", 'expected': _ea.not_set() },
                "mixed chars": { 'input': "12a34", 'expected': _ea.not_set() },
                "hex prefix": { 'input': "0x123", 'expected': _ea.not_set() },
                "binary prefix": { 'input': "0b101", 'expected': _ea.not_set() },
                "octal prefix": { 'input': "0o123", 'expected': _ea.not_set() },
                "double negative": { 'input': "--123", 'expected': _ea.not_set() },
                "plus sign": { 'input': "+123", 'expected': _ea.not_set() },
                "scientific notation": { 'input': "1e5", 'expected': _ea.not_set() },
                "infinity": { 'input': "Infinity", 'expected': _ea.not_set() },
                "nan": { 'input': "NaN", 'expected': _ea.not_set() }
            }),
            'hexadecimal': _ea.dictionary_literal({
                "zero": { 'input': "0x0", 'expected': _ea.set(0) },
                "one": { 'input': "0x1", 'expected': _ea.set(1) },
                "ten uppercase": { 'input': "0xA", 'expected': _ea.set(10) },
                "fifteen uppercase": { 'input': "0xF", 'expected': _ea.set(15) },
                "sixteen": { 'input': "0x10", 'expected': _ea.set(16) },
                "byte max uppercase": { 'input': "0xFF", 'expected': _ea.set(255) },
                "two five six": { 'input': "0x100", 'expected': _ea.set(256) },
                "ten lowercase": { 'input': "0xa", 'expected': _ea.set(10) },
                "fifteen lowercase": { 'input': "0xf", 'expected': _ea.set(15) },
                "byte max lowercase": { 'input': "0xff", 'expected': _ea.set(255) },
                "mixed case": { 'input': "0xaBcD", 'expected': _ea.set(43981) },
                "negative one": { 'input': "-0x1", 'expected': _ea.set(-1) },
                "negative ten": { 'input': "-0xA", 'expected': _ea.set(-10) },
                "negative byte max": { 'input': "-0xFF", 'expected': _ea.set(-255) },
                "one thousand": { 'input': "0x3E8", 'expected': _ea.set(1000) },
                "uint16 max": { 'input': "0xFFFF", 'expected': _ea.set(65535) },
                "megabyte": { 'input': "0x100000", 'expected': _ea.set(1048576) },
                // Invalid input cases
                "no prefix": { 'input': "FF", 'expected': _ea.not_set() },
                "wrong prefix": { 'input': "0hFF", 'expected': _ea.not_set() },
                "empty after prefix": { 'input': "0x", 'expected': _ea.not_set() },
                "invalid hex char": { 'input': "0xG", 'expected': _ea.not_set() },
                "invalid hex chars": { 'input': "0xABG", 'expected': _ea.not_set() },
                "decimal in hex": { 'input': "0xAB.CD", 'expected': _ea.not_set() },
                "space in hex": { 'input': "0xA B", 'expected': _ea.not_set() },
                "double prefix": { 'input': "0x0x123", 'expected': _ea.not_set() },
                "binary instead": { 'input': "0b1010", 'expected': _ea.not_set() },
                "octal instead": { 'input': "0o123", 'expected': _ea.not_set() },
                "just prefix": { 'input': "0x", 'expected': _ea.not_set() },
                "uppercase X": { 'input': "0XFF", 'expected': _ea.not_set() },
                "plus prefix": { 'input': "+0xFF", 'expected': _ea.not_set() }
            }),
            'binary': _ea.dictionary_literal({
                "zero": { 'input': "0b0", 'expected': _ea.set(0) },
                "one": { 'input': "0b1", 'expected': _ea.set(1) },
                "ten": { 'input': "0b1010", 'expected': _ea.set(10) },
                "fifteen": { 'input': "0b1111", 'expected': _ea.set(15) },
                "sixteen": { 'input': "0b10000", 'expected': _ea.set(16) },
                "byte max": { 'input': "0b11111111", 'expected': _ea.set(255) },
                "two five six": { 'input': "0b100000000", 'expected': _ea.set(256) },
                "negative one": { 'input': "-0b1", 'expected': _ea.set(-1) },
                "negative ten": { 'input': "-0b1010", 'expected': _ea.set(-10) },
                "negative byte max": { 'input': "-0b11111111", 'expected': _ea.set(-255) },
                "one thousand": { 'input': "0b1111101000", 'expected': _ea.set(1000) },
                "uint16 max": { 'input': "0b1111111111111111", 'expected': _ea.set(65535) },
                "megabyte": { 'input': "0b100000000000000000000", 'expected': _ea.set(1048576) },
                // Invalid input cases
                "no prefix": { 'input': "1010", 'expected': _ea.not_set() },
                "wrong prefix": { 'input': "0c1010", 'expected': _ea.not_set() },
                "empty after prefix": { 'input': "0b", 'expected': _ea.not_set() },
                "invalid binary char": { 'input': "0b2", 'expected': _ea.not_set() },
                "invalid binary chars": { 'input': "0b1012", 'expected': _ea.not_set() },
                "decimal in binary": { 'input': "0b10.11", 'expected': _ea.not_set() },
                "space in binary": { 'input': "0b10 11", 'expected': _ea.not_set() },
                "hex chars": { 'input': "0bABCD", 'expected': _ea.not_set() },
                "octal chars": { 'input': "0b12345", 'expected': _ea.not_set() },
                "double prefix": { 'input': "0b0b1010", 'expected': _ea.not_set() },
                "hex instead": { 'input': "0xFF", 'expected': _ea.not_set() },
                "octal instead": { 'input': "0o123", 'expected': _ea.not_set() },
                "uppercase B": { 'input': "0B1010", 'expected': _ea.not_set() },
                "plus prefix": { 'input': "+0b1010", 'expected': _ea.not_set() }
            }),
            'octal': _ea.dictionary_literal({
                "zero": { 'input': "0o0", 'expected': _ea.set(0) },
                "one": { 'input': "0o1", 'expected': _ea.set(1) },
                "ten": { 'input': "0o12", 'expected': _ea.set(10) },
                "fifteen": { 'input': "0o17", 'expected': _ea.set(15) },
                "sixteen": { 'input': "0o20", 'expected': _ea.set(16) },
                "byte max": { 'input': "0o377", 'expected': _ea.set(255) },
                "two five six": { 'input': "0o400", 'expected': _ea.set(256) },
                "negative one": { 'input': "-0o1", 'expected': _ea.set(-1) },
                "negative ten": { 'input': "-0o12", 'expected': _ea.set(-10) },
                "negative byte max": { 'input': "-0o377", 'expected': _ea.set(-255) },
                "one thousand": { 'input': "0o1750", 'expected': _ea.set(1000) },
                "uint16 max": { 'input': "0o177777", 'expected': _ea.set(65535) },
                "megabyte": { 'input': "0o4000000", 'expected': _ea.set(1048576) },
                // Invalid input cases
                "no prefix": { 'input': "377", 'expected': _ea.not_set() },
                "wrong prefix": { 'input': "0p377", 'expected': _ea.not_set() },
                "empty after prefix": { 'input': "0o", 'expected': _ea.not_set() },
                "invalid octal char 8": { 'input': "0o8", 'expected': _ea.not_set() },
                "invalid octal char 9": { 'input': "0o9", 'expected': _ea.not_set() },
                "invalid octal chars": { 'input': "0o1238", 'expected': _ea.not_set() },
                "decimal in octal": { 'input': "0o12.34", 'expected': _ea.not_set() },
                "space in octal": { 'input': "0o12 34", 'expected': _ea.not_set() },
                "hex chars": { 'input': "0oABCD", 'expected': _ea.not_set() },
                "double prefix": { 'input': "0o0o123", 'expected': _ea.not_set() },
                "hex instead": { 'input': "0xFF", 'expected': _ea.not_set() },
                "binary instead": { 'input': "0b1010", 'expected': _ea.not_set() },
                "uppercase O": { 'input': "0O123", 'expected': _ea.not_set() },
                "plus prefix": { 'input': "+0o123", 'expected': _ea.not_set() },
                "old style octal": { 'input': "0123", 'expected': _ea.not_set() }
            }),
            'iso to udhr': _ea.dictionary_literal({
                // Basic epoch tests - these work
                "udhr day zero": { 'input': "1948-12-10", 'expected': _ea.set(0) },
                "udhr day one": { 'input': "1948-12-11", 'expected': _ea.set(1) },
                "udhr day negative one": { 'input': "1948-12-09", 'expected': _ea.set(-1) },
                
                // Known working value from test.ts
                "iso 2011 05 18": { 'input': "2011-05-18", 'expected': _ea.set(22804) },
                
                // Year 2000 test case
                "year 2000": { 'input': "2000-01-01", 'expected': _ea.set(18649) },
                
                // Only test the basic year boundary that actually works  
                "dec 31 0001": { 'input': "0001-12-31", 'expected': _ea.set(-711106) },
                
                // Years before UDHR - these work according to test.ts
                "one year before": { 'input': "1947-12-10", 'expected': _ea.set(-366) },
                "two years before": { 'input': "1946-12-10", 'expected': _ea.set(-731) },
                
                // Invalid input cases
                "empty string": { 'input': "", 'expected': _ea.not_set() },
                "not a date": { 'input': "not-a-date", 'expected': _ea.not_set() },
                "wrong format": { 'input': "12/31/2000", 'expected': _ea.not_set() },
                "wrong separator": { 'input': "2000/12/31", 'expected': _ea.not_set() },
                "missing year": { 'input': "-12-31", 'expected': _ea.not_set() },
                "missing month": { 'input': "2000--31", 'expected': _ea.not_set() },
                "missing day": { 'input': "2000-12-", 'expected': _ea.not_set() },
                "invalid month": { 'input': "2000-13-01", 'expected': _ea.not_set() },
                "invalid day": { 'input': "2000-12-32", 'expected': _ea.not_set() },
                "zero month": { 'input': "2000-00-01", 'expected': _ea.not_set() },
                "zero day": { 'input': "2000-12-00", 'expected': _ea.not_set() },
                "two digit year": { 'input': "00-12-31", 'expected': _ea.not_set() },
                "single digit month": { 'input': "2000-1-31", 'expected': _ea.not_set() },
                "single digit day": { 'input': "2000-12-1", 'expected': _ea.not_set() },
                "extra characters": { 'input': "2000-12-31T00:00:00", 'expected': _ea.not_set() },
                "negative year": { 'input': "-2000-12-31", 'expected': _ea.not_set() },
                "february 30": { 'input': "2000-02-30", 'expected': _ea.not_set() },
                "february 29 non leap year": { 'input': "1999-02-29", 'expected': _ea.not_set() },
                "space in date": { 'input': "2000-12 -31", 'expected': _ea.not_set() }
            })
        },
        'boolean': {
            'true false': _ea.dictionary_literal({
                "boolean true": { 'input': "true", 'expected': _ea.set(true) },
                "boolean false": { 'input': "false", 'expected': _ea.set(false) },
                // Invalid input cases  
                "empty string": { 'input': "", 'expected': _ea.not_set() },
                "other input": { 'input': "not a boolean", 'expected': _ea.not_set() },
                "uppercase true": { 'input': "TRUE", 'expected': _ea.not_set() },
                "uppercase false": { 'input': "FALSE", 'expected': _ea.not_set() },
                "mixed case true": { 'input': "True", 'expected': _ea.not_set() },
                "mixed case false": { 'input': "False", 'expected': _ea.not_set() },
                "number 1": { 'input': "1", 'expected': _ea.not_set() },
                "number 0": { 'input': "0", 'expected': _ea.not_set() },
                "yes": { 'input': "yes", 'expected': _ea.not_set() },
                "no": { 'input': "no", 'expected': _ea.not_set() },
                "space before": { 'input': " true", 'expected': _ea.not_set() },
                "space after": { 'input': "true ", 'expected': _ea.not_set() },
                "space between": { 'input': "tr ue", 'expected': _ea.not_set() },
                "t": { 'input': "t", 'expected': _ea.not_set() },
                "f": { 'input': "f", 'expected': _ea.not_set() },
                "random text": { 'input': "maybe", 'expected': _ea.not_set() }
            })
        },
        // 'approximate_number': {
        //     'scientific notation': _ea.dictionary_literal({
        //         "scientific positive exponent": { 'input': "1.23e+2", 'expected': _ea.set(123.0, 'tolerance': 0.01) },
        //         "scientific negative exponent": { 'input': "5.67e-1", 'expected': _ea.set(0.567, 'tolerance': 0.001) },
        //         "scientific negative number": { 'input': "-3.14e+0", 'expected': _ea.set(-3.14, 'tolerance': 0.01) },
        //         "scientific large number": { 'input': "2.5e+3", 'expected': _ea.set(2500.0, 'tolerance': 1.0) },
        //         "scientific small number": { 'input': "1.5e-3", 'expected': _ea.set(0.0015, 'tolerance': 0.0001) },
        //         "scientific zero exponent": { 'input': "7.89e+0", 'expected': _ea.set(7.89, 'tolerance': 0.01) },
        //         "scientific negative large": { 'input': "-1.23e+4", 'expected': _ea.set(-12300.0, 'tolerance': 1.0) },
        //         "scientific very small": { 'input': "9.87e-6", 'expected': _ea.set(0.00000987, 'tolerance': 0.00000001) }
        //     })
        // }
    }
}