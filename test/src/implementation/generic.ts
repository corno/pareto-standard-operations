import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'

import * as generic from "../interface/generic"

import { $$ as op_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"
import { $$ as op_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"


export const run_transformer_tests_with_parameters = <Input, Parameters, Expected>(tests: _et.Dictionary<generic.Transformer_With_Parameters<Input, Parameters, Expected>>, implementation: ($: Input, parameters: Parameters) => Expected): generic.Results => {
    return tests.map(($) => {
        return ['test', {
            'passed': implementation($.input, $.parameters) === $.expected
        }]
    })
}

export const run_transformer_tests_without_parameters = <Input, Expected>($: _et.Dictionary<generic.Transformer_Without_Parameters<Input, Expected>>, implementation: ($: Input) => Expected): generic.Results => {
    return $.map(($) => {
        return ['test', {
            'passed': implementation($.input) === $.expected
        }]
    })
}

export const run_refiner_tests_with_parameters = <Input, Parameters, Expected>(tests: _et.Dictionary<generic.Refiner_With_Parameters<Input, Parameters, Expected>>, implementation: ($: Input, parameters: Parameters, abort: (error: string) => never) => Expected): generic.Results => {
    return tests.map(($) => {
        try {
            const actual = implementation($.input, $.parameters, (error: string) => _ea.deprecated_panic(error))
            return ['test', {
                'passed': $.expected.transform(
                    ($) => actual === $,
                    () => false
                )
            }]
        } catch {
            return ['test', {
                'passed': $.expected.transform(
                    () => false,
                    () => true
                )
            }]
        }
    })
}

export const run_refiner_tests_without_parameters = <Input, Expected>($: _et.Dictionary<generic.Refiner_Without_Parameters<Input, Expected>>, implementation: ($: Input, abort: (error: string) => never) => Expected): generic.Results => {
    return $.map(($) => {
        try {
            const actual = implementation($.input, (error: string) => _ea.deprecated_panic(error))
            $.expected.map(
                ($) => {
                    if (actual !== $) {
                        _ed.log_debug_message(`Expected value does not match actual value: ${actual}`, () => { })
                    }
                }
            )
            return ['test', {
                'passed': $.expected.transform(
                    ($) => actual === $,
                    () => false
                )
            }]
        } catch {
            return ['test', {
                'passed': $.expected.transform(
                    () => false,
                    () => true
                )
            }]
        }
    })
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
                const status_text = passed ? "PASS" : `FAIL`
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

export const run_tests = (test_results: generic.Results) => {
    // Run all tests
    _ed.log_debug_message("=== Starting Comprehensive Serializer/Deserializer Tests ===", () => { })


    const success = has_passed(test_results)

    pretty_print_results(test_results)

    if (!success) {
        _ed.log_debug_message("Some tests failed. Please check the results above.", () => { })
        _ea.deprecated_panic("Some tests failed.")
    } else {
        _ed.log_debug_message("All tests passed successfully!", () => { })
    }

}
