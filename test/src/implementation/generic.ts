import * as _et from 'exupery-core-types'

import * as generic from "../interface/generic"


export const run_tests_with_parameters = <Input, Parameters, Expected>(tests: _et.Dictionary<generic.Test_With_Parameters<Input, Parameters, Expected>>, implementation: ($: Input, parameters: Parameters) => Expected): generic.Results => {
    return tests.map(($) => {
        return ['test', {
            'passed': implementation($.input, $.parameters) === $.expected
        }]
    })
}

export const run_tests_without_parameters = <Input, Expected>($: _et.Dictionary<generic.Test_Without_Parameters<Input, Expected>>, implementation: ($: Input) => Expected): generic.Results => {
    return $.map(($) => {
        return ['test', {
            'passed': implementation($.input) === $.expected
        }]
    })
}
