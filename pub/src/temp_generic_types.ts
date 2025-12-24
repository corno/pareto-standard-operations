export type Refiner_Without_Parameters<Input, Result, Error> = ($: Input, abort: (error: Error) => never) => Result

export type Refiner_With_Parameters<Input, Parameters, Result, Error> = ($: Input, $p: Parameters, abort: (error: Error) => never) => Result
