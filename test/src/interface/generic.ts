import * as _et from 'exupery-core-types'

export type Test_Without_Parameters<Input, Expected> = {
    'input': Input
    'expected': Expected
}

export type Test_With_Parameters<Input, Parameters, Expected> = {
    'input': Input
    'parameters': Parameters
    'expected': Expected
}

// Type definitions for test results
export type Result_Entry =
| ['test', {
    'passed': boolean
}]
| ['group', Results]

export type Results = _et.Dictionary<Result_Entry>