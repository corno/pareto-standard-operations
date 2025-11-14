import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/target"

import * as generic from "../interface/generic"

import { $$ as op_is_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/is_empty"
import { $$ as op_filter } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"

import { $$ as p_log_error } from "pareto-fountain-pen/dist/implementation/algorithms/procedures/guaranteed/console_error"
import { $$ as p_log } from "pareto-fountain-pen/dist/implementation/algorithms/procedures/guaranteed/console_log"

import * as t_test_result_to_text from "./generic/transformers/test_result/text"


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

export type Resources = {
    procedures: {
        'log error': _et.Guaranteed_Procedure<d_log.Parameters, null>
        'log': _et.Guaranteed_Procedure<d_log.Parameters, null>
    }
}

export const run_tests: _et.Unguaranteed_Procedure<generic.Results, _eb.Error, Resources> = (
    test_results: generic.Results,
    resources: Resources
) => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {

            // Run all tests
            _ed.log_debug_message("=== Starting Comprehensive Serializer/Deserializer Tests ===", () => { })


            const success = has_passed(test_results)

            const pretty_printed = t_test_result_to_text.Results(test_results)

            if (!success) {
                _ed.log_debug_message("Some tests failed. Please check the results.", () => { })
                p_log_error({
                    'group': pretty_printed,
                    'indentation': `   `
                }, {
                    'procedures': {
                        'log error': resources.procedures['log error'],
                    }
                }).__start(
                    () => {
                        on_exception({
                            'exit code': 1,
                        })

                    }
                )
            } else {
                _ed.log_debug_message("All tests passed successfully!", () => { })
                p_log({
                    'group': pretty_printed,
                    'indentation': `   `
                }, {
                    'procedures': {
                        'log': resources.procedures['log'],
                    }
                }).__start(
                    () => {
                        on_success()
                    }
                )
            }
        }
    })

}
