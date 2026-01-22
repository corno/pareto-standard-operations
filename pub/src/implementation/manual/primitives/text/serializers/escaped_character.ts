import * as _p from 'pareto-core/dist/refiner'
import * as _ps from 'pareto-core/dist/serializer'
import * as _pi from 'pareto-core/dist/interface'
import * as _pd from 'pareto-core/dist/deserializer'

import * as signatures from "../../../../../interface/signatures"

const pump = <Iterator_Element>(
    iter: _pi.Iterator<Iterator_Element>,
    callback: ($: Iterator_Element) => void
) => {
    while (true) {
        const current = iter.look()
        if (current === null) {
            return
        }

        iter.discard(() => null)
        callback(current[0])
    }
}

const build_text_with_iterator = <Iterator_Element>(
    iter: _pi.Iterator<Iterator_Element>,
    callback: (current: Iterator_Element) => _pi.List<number>,
): string => _ps.text.deprecated_build(
    ($i) => {
        pump(
            iter,
            (current) => {
                callback(current).__for_each(($) => {
                    $i['add character']($)
                })
            }
        )
    }
)

export const $$: signatures.serializers.primitives.text.escaped_character = ($, $p) => _p.iterate(
    _pd.list.from_text($, ($) => $),
    (iter) => _ps.text.deprecated_build(
        ($i) => {
            pump(
                iter,
                ($) => {
                    if ($ === $p['escape character code']) { // \
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['escape character code'])
                    } else if ($ === $p['character code']) {
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['character code'])
                    } else {
                        $i['add character']($)
                    }

                }
            )
        }

    )
)
