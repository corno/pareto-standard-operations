import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

export type Parameters = { 'separator': number }

export type Out = {
    'head': string,
    'tail': _et.List<string>,
}

export const $$: _et.Transformer_With_Parameters<Out, string, Parameters> = (
    $,
    $p,
) => {


    const characters = _ea.text_to_character_list($)

    const length = characters.__get_number_of_elements()

    let current = -1

    return {
        'head': _ea.build_text(($i) => {
            while (true) {
                current += 1
                if (current >= length) {
                    break
                }
                const c = characters.__get_element_at(current).transform(
                    ($) => $,
                    () => _ea.deprecated_panic(`index out of bounds`)
                )
                if (c === $p.separator) {
                    break
                } else {
                    $i['add character'](c)
                }
            }
        }),
        'tail': _ea.build_list<string>(($is) => {

            while (true) {
                $is['add element'](
                    _ea.build_text(($i) => {
                        while (true) {
                            current += 1
                            if (current >= length) {
                                break
                            }
                            const c = characters.__get_element_at(current).transform(
                                ($) => $,
                                () => _ea.deprecated_panic(`index out of bounds`)
                            )
                            if (c === $p.separator) {
                                break
                            } else {
                                $i['add character'](c)
                            }
                        }
                    })
                )
                if (current >= length) {
                    break
                }
            }
        }),
    }
}