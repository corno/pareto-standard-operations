#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as generic from "../interface/generic"

import { 
    run_refiner_tests_with_parameters,
    run_refiner_tests_without_parameters,
    run_transformer_tests_with_parameters,
    run_transformer_tests_without_parameters,
} from "../implementation/generic"

import { $$ as op_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"
import { $$ as op_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"

// Import test data
import { TEST_DATA } from "../data/test_data"

// Import serializers
import { $$ as s_decimal } from "pub/dist/implementation/algorithms/serializers/integer/decimal"
import { $$ as s_hexadecimal } from "pub/dist/implementation/algorithms/serializers/integer/hexadecimal"
import { $$ as s_binary } from "pub/dist/implementation/algorithms/serializers/integer/binary"
import { $$ as s_octal } from "pub/dist/implementation/algorithms/serializers/integer/octal"
import { $$ as s_udhr_to_iso } from "pub/dist/implementation/algorithms/serializers/integer/udhr_to_iso"
import { $$ as s_boolean_true_false } from "pub/dist/implementation/algorithms/serializers/boolean/true_false"
import { $$ as s_approx_scientific } from "pub/dist/implementation/algorithms/serializers/approximate_number/scientific_notation"

// Import deserializers
import { $$ as d_decimal } from "pub/dist/implementation/algorithms/deserializers/integer/decimal"
import { $$ as d_hexadecimal } from "pub/dist/implementation/algorithms/deserializers/integer/hexadecimal"
import { $$ as d_binary } from "pub/dist/implementation/algorithms/deserializers/integer/binary"
import { $$ as d_octal } from "pub/dist/implementation/algorithms/deserializers/integer/octal"
import { $$ as d_iso_to_udhr } from "pub/dist/implementation/algorithms/deserializers/integer/iso_to_udhr"
import { $$ as d_true_false } from "pub/dist/implementation/algorithms/deserializers/boolean/true_false"
import { $$ as d_approx_scientific } from "pub/dist/implementation/algorithms/deserializers/approximate_number/scientific_notation"

// Test helper functions with colored logging
const log_test_result = (test_name: string, passed: boolean, details?: string) => {
    const status = passed ? "✓ PASS" : "✗ FAIL"
    const message = details ? `${test_name}: ${status} - ${details}` : `${test_name}: ${status}`
    _ed.log_debug_message(message, () => { })
}

const test_individual_case = (
    format_name: string,
    test_name: string,
    test_function: () => boolean,
) => {
    let passed = false
    try {
        passed = test_function()
    } catch (e) {
        passed = false
    }

    log_test_result(`${format_name} [${test_name}]`, passed)

    if (!passed) {
        // Instead of panicking, let's log more details for debugging
        _ed.log_debug_message(`TEST FAILED: ${format_name} [${test_name}]`, () => { })
        // Don't panic for now to see all test results
        // _ea.deprecated_panic(`${format_name} test [${test_name}] failed`)
    }
}

// Pretty print results tree with colors and indentation
const pretty_print_results = (results: generic.Results, indent: number = 0): void => {
    const indent_str = (() => {
        let result = ""
        for (let i = 0; i < indent; i++) {
            result += "  "
        }
        return result
    })()

    results.map((entry, key) => {
        switch (entry[0]) {
            case 'group':
                _ed.log_debug_message(`${indent_str}📁 ${key}`, () => { })
                pretty_print_results(entry[1], indent + 1)
                break
            case 'test':
                const passed = entry[1].passed
                const status_icon = passed ? "✅" : "❌"
                const status_text = passed ? "PASS" : "FAIL"
                _ed.log_debug_message(`${indent_str}${status_icon} ${key}: ${status_text}`, () => { })
                break
            default:
                // This should never happen due to the type system
                _ed.log_debug_message(`${indent_str}❓ ${key}: Unknown entry type`, () => { })
        }
    })
}

const has_passed = (results: generic.Results): boolean => {
    return op_is_empty(op_filter<null>(results.map(($) => {
        return _ea.cc($, ($) => {
            switch ($[0]) {
                case 'test': return _ea.ss($, ($) => $.passed ? _ea.not_set() : _ea.set(null))
                case 'group': return _ea.ss($, ($) => has_passed($) ? _ea.not_set() : _ea.set(null))
                default: return _ea.au($[0])
            }
        })
    })))
}

// Execute tests using dictionary mapping
const run_tests = (): generic.Results => {
    _ed.log_debug_message("--- Testing Integer Serializers ---", () => { })


    const results: generic.Results = _ea.dictionary_literal({
        "serializers": ['group', _ea.dictionary_literal({
            "integer": ['group', _ea.dictionary_literal({
                "decimal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.decimal, s_decimal)], //do all like this one
                "hexadecimal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.hexadecimal, s_hexadecimal)],
                "binary": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.binary, s_binary)],
                "octal": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer.octal, s_octal)],
                "udhr to iso": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.integer['udhr to iso'], s_udhr_to_iso)],
            })],
            "boolean": ['group', _ea.dictionary_literal({
                "true false": ['group', run_transformer_tests_without_parameters(TEST_DATA.serializers.boolean['true false'], s_boolean_true_false)],
            })],
            "approximate_number": ['group', _ea.dictionary_literal({
                "scientific notation": ['group', run_transformer_tests_with_parameters(TEST_DATA.serializers.approximate_number['scientific notation'], s_approx_scientific)],
            })],
        })],
        "deserializers": ['group', _ea.dictionary_literal({
            "integer": ['group', _ea.dictionary_literal({
                "decimal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.decimal, d_decimal)],
                "hexadecimal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.hexadecimal, d_hexadecimal)],
                "binary": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.binary, d_binary)],
                "octal": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer.octal, d_octal)],
                "iso to udhr": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.integer['iso to udhr'], d_iso_to_udhr)],
            })],
            "boolean": ['group', _ea.dictionary_literal({
                "true false": ['group', run_refiner_tests_without_parameters(TEST_DATA.deserializers.boolean['true false'], d_true_false)],
            })],
            // "approximate_number": ['group', _ea.dictionary_literal({
            //     "scientific notation": ['group', TEST_DATA.deserializers.approximate_number['scientific notation'].map(($) => ['test', { 'passed': (() => {
            //         const result = d_approx_scientific($.input)
            //         const diff = result > $.expected ? result - $.expected : $.expected - result
            //         return diff <= $.tolerance
            //     })() }])],
            // })],
        })],
    })

    return results
}
// Run all tests
_ed.log_debug_message("=== Starting Comprehensive Serializer/Deserializer Tests ===", () => { })

const test_results = run_tests()

const success = has_passed(test_results)



pretty_print_results(test_results)

if (!success) {
    _ed.log_debug_message("Some tests failed. Please check the results above.", () => { })
    _ea.deprecated_panic("Some tests failed.")
} else {
    _ed.log_debug_message("All tests passed successfully!", () => { })
}
