import * as _et from 'exupery-core-types'

import * as generic from "../interface/generic"


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

export const run_refiner_tests_with_parameters = <Input, Parameters, Expected>(tests: _et.Dictionary<generic.Refiner_With_Parameters<Input, Parameters, Expected>>, implementation: ($: Input, parameters: Parameters) => Expected): generic.Results => {
    return tests.map(($) => {
        try {
            const actual = implementation($.input, $.parameters)
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

export const run_refiner_tests_without_parameters = <Input, Expected>($: _et.Dictionary<generic.Refiner_Without_Parameters<Input, Expected>>, implementation: ($: Input) => Expected): generic.Results => {
    return $.map(($) => {
        try {
            const actual = implementation($.input)
            return ['test', {
                'passed': $.expected.transform(
                    (expected) => actual === expected,
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
