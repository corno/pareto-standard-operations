import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

export type Pure = {
    'dictionary': {
        'create single entry dictionary': <T>($: _et.Key_Value_Pair<T>) => _et.Dictionary<T>
        'filter': <T>($: _et.Dictionary<_et.Optional_Value<T>>) => _et.Dictionary<T>
        'flatten': <T>($: _et.Dictionary<_et.Dictionary<T>>, $p: { 'separator': string }) => _et.Dictionary<T>
        'group': <T>($: _et.Dictionary<_et.Key_Value_Pair<T>>) => _et.Dictionary<_et.Dictionary<T>>
        'pad identifiers': <T>($: _et.Dictionary<T>, $p: { 'prefix': string, 'suffix': string }) => _et.Dictionary<T>
    },
    'list': {
        'prepend element': <T>($: _et.Array<T>, $p: {
            'element': T
        }) => _et.Array<T>
        'append element': <T>($: _et.Array<T>, $p: {
            'element': T
        }) => _et.Array<T>
        'filter': <T>($: _et.Array<_et.Optional_Value<T>>) => _et.Array<T>
        'flatten': <T>($: _et.Array<_et.Array<T>>) => _et.Array<T>
        'is equal to': ($: _et.Array<string>, $p: { 'other': _et.Array<string> }) => boolean
    },
    'text': {
        'join list of texts': ($: _et.Array<string>) => string
    },
}

export type Impure = {
    'dictionary': {
        'cast to non empty': <T>($: _et.Dictionary<T>) => _et.Optional_Value<_et.Dictionary<T>>
        'is empty': <T>($: _et.Dictionary<T>) => boolean
        'is not empty': <T>($: _et.Dictionary<T>) => boolean
        /**
         * Merges two dictionaries into one,
         * All the entries of the context dictionary will be present, each optionally with the entry from the supporting dictionary
         * 
         * <
         *   {
         *     `A`: 1
         *     `B`: 2
         *   }
         *   (
         *     'supporting dictionary': {
         *       `A`: 3
         *       `C`: 4
         *     }
         *   )
         * > => {
         *   `A`: (
         *     'context': 1
         *     'supporting': + 3
         *   )
         *   `B`: (
         *     'context': 2
         *     'supporting': -
         *   )
         * }
         */
        'merge': <Main, Supporting>(
            $: _et.Dictionary<Main>,
            $p: { 'supporting dictionary': _et.Dictionary<Supporting> }
        ) => _et.Dictionary<{
            'context': Main
            'supporting': _et.Optional_Value<Supporting>
        }>
        'to list, sorted by code point': <T>(
            $: _et.Dictionary<T>,
        ) => _et.Array<_et.Key_Value_Pair<T>>
        'dictionary of lists to list': <T>(
            $: _et.Dictionary<_et.Array<T>>,
        ) => _et.Array<T>
    },
    'list': {
        'cast to non empty': <T>($: _et.Array<T>) => _et.Optional_Value<_et.Array<T>>
        'enrich with position information': <T>($: _et.Array<T>) => _et.Array<{
            'value': T
            'is first': boolean
            'is last': boolean
            'index': number
        }>
        'expect exactly one element': <T>($: _et.Array<T>) => _et.Optional_Value<T>
        'expect more than one element': <T>($: _et.Array<T>) => _et.Optional_Value<_et.Array<T>>
        // 'get first element': <T>($: pt.Array<T>) => pt.Optional_Value<T>
        'is empty': <T>($: _et.Array<T>) => boolean
        'is not empty': <T>($: _et.Array<T>) => boolean
        'select clashing keys': <T>($: _et.Array<_et.Key_Value_Pair<T>>) => _et.Dictionary<_et.Array<T>>
        'to dictionary, overwrite clashing keys': <T>($: _et.Array<_et.Key_Value_Pair<T>>) => _et.Dictionary<T>
        'group': <T>($: _et.Array<_et.Key_Value_Pair<T>>) => _et.Dictionary<_et.Array<T>>
    },
    'text': {
        'escape character': (
            $: string,
            $p: {
                'character code': number
                'escape character code': number
            }
        ) => string
        'join list of texts with separator': ($: _et.Array<string>, $p: { 'separator': string }) => string
        'repeat': ($: string, $p: { 'count': number }) => string
        'serialize with quote delimiter': ($: string) => string
        'serialize with apostrophe delimiter': ($: string) => string
        'serialize with grave delimiter': ($: string) => string
        'starts with': (
            $: string,
            $p: { 
                'search pattern': string,
                'position': number
            },
        ) => boolean
        'to character list': ($: string) => _et.Array<number>
        'create valid file name': (
            $: string,
            $p: {
                'replace spaces with underscores': boolean
            }
        ) => string
    },
    // 'typescript': {
    //     'escape file name': ($: string) => string
    // },
}

export const impure: Impure = {
    'dictionary': {
        'cast to non empty': <T>($: _et.Dictionary<T>): _et.Optional_Value<_et.Dictionary<T>> => {
            if (impure.dictionary['is empty']($)) {
                return _ea.not_set()
            }
            return _ea.set($)
        },
        'dictionary of lists to list': <T>($: _et.Dictionary<_et.Array<T>>): _et.Array<T> => {
            return _ea.pure.list.build(($i) => {
                $.map(($, key) => {
                    $.__for_each(($) => {
                        $i['add element']($)
                    })
                })
            })
        },
        'is empty': ($) => {
            let is_empty = true
            $.map(($) => {
                is_empty = false
            })
            return is_empty
        },
        'is not empty': ($) => {
            let is_empty = true
            $.map(($) => {
                is_empty = false
            })
            return !is_empty
        },
        'merge': ($, $p) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.map(($, key) => {
                    $i['add entry'](key, {
                        'context': $,
                        'supporting': $p['supporting dictionary'].__get_entry(key),
                    })
                })
            })
        },
        'to list, sorted by code point': ($) => {
            return _ea.pure.dictionary['to list'](
                $,
                {
                    'compare': (a, b) => {
                        return a < b
                            ? 'left is before right'
                            : a > b
                                ? 'right is before left'
                                : 'both are equal'
                    }
                }
            )
        },
    },
    'list': {
        'cast to non empty': <T>($: _et.Array<T>): _et.Optional_Value<_et.Array<T>> => {
            if ($.__get_length() === 0) {
                return _ea.not_set()
            }
            return _ea.set($)
        },
        'enrich with position information': ($) => {
            const length = $.__get_length()
            let index = -1
            return $.map(($) => {
                index += 1
                return {
                    'value': $,
                    'is first': index === 0,
                    'is last': index === length - 1,
                    'index': index,
                }
            })
        },
        'expect exactly one element': ($) => {
            if ($.__get_length() !== 1) {
                return _ea.not_set()
            }
            // there is an element, so this statement will always return a 'set'
            return $.__get_element_at(0)
        },
        'expect more than one element': ($) => {
            if ($.__get_length() === 1) {
                return _ea.not_set()
            }
            return _ea.set($)
        },
        // 'get first element': ($) => {
        //     if ($.__get_length() === 0) {
        //         return pa.not_set()
        //     }
        //     return pa.set($.__get_element_at(0))
        // },
        'group': <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => {
            return _ea.pure.dictionary['build dictionary of lists'](($i) => {
                $.__for_each(($) => {
                    $i['add entry']($.key, $.value)
                })
            })
        },
        'is empty': ($) => {
            return $.__get_length() === 0
        },
        'is not empty': ($) => {
            return $.__get_length() !== 0
        },
        'select clashing keys': <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<_et.Array<T>> => {
            return pure.dictionary.filter(
                _ea.pure.dictionary['build dictionary of lists']<T>(($i) => {
                    $.__for_each(($) => {
                        $i['add entry']($['key'], $['value'])
                    })
                }).map(($) => impure.list['expect more than one element']($))
            )
        },
        'to dictionary, overwrite clashing keys': <T>($: _et.Array<_et.Key_Value_Pair<T>>): _et.Dictionary<T> => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.__for_each(($) => {
                    $i['add entry']($.key, $.value)
                })
            })
        },
    },
    'text': {
        'create valid file name': ($, $p) => {
            if (!$p['replace spaces with underscores']) {
                return $ //FIXME: this needs to be implemented properly
            }
            return _ea.impure.text['replace all occurences of all patterns'](
                $,
                _ea.array_literal([
                    { 'search value': "$", 'replace value': "$$" },
                    { 'search value': "_", 'replace value': "$_" },
                    { 'search value': " ", 'replace value': "_" },
                ])
            )
        },
        'escape character': ($, $p) => {
            return _ea.pure.text.build(($i) => {
                const characters = _ea.impure.text['to character list']($)
                const length = characters.__get_length()

                let position = 0

                const consume_character = () => {
                    position += 1
                }

                const get_current_character = (): null | number => {
                    return characters.__get_element_at(position).transform(
                        ($) => $,
                        () => null,
                    )
                }

                while (true) {
                    const current_character = get_current_character()
                    if (current_character === null) {
                        return
                    }
                    if (current_character === $p['escape character code']) { // \
                        consume_character()
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['escape character code'])
                    } else if (current_character === $p['character code']) {
                        consume_character()
                        $i['add character']($p['escape character code'])
                        $i['add character']($p['character code'])
                    } else {
                        consume_character()
                        $i['add character'](current_character)
                    }
                }
            })
        },
        'join list of texts with separator': ($, $p) => {
            let is_first = true
            return _ea.pure.text.build(($i) => {
                $.__for_each(($) => {
                    if (!is_first) {
                        $i['add snippet']($p.separator)
                    }
                    $i['add snippet']($)
                    is_first = false

                })
            })
        },
        'repeat': ($, $p) => {
            return _ea.pure.text.build(($i) => {
                for (let i = 0; i < $p.count; i++) {
                    $i['add snippet']($)
                }
            })
        },
        'serialize with apostrophe delimiter': ($) => {
            return "'"
                + impure.text['escape character'](
                    $,
                    {
                        'character code': 39, // '
                        'escape character code': 92, // \
                    }
                )
                + "'"
        },
        'serialize with grave delimiter': ($) => {
            return '`'
                + impure.text['escape character'](
                    $,
                    {
                        'character code': 96, // `
                        'escape character code': 92, // \

                    }
                )
                + '`'
        },
        'serialize with quote delimiter': ($) => {
            return '"'
                + impure.text['escape character'](
                    $,
                    {
                        'character code': 34, // "
                        'escape character code': 92, // \
                    }
                )
                + '"'
        },
        'starts with': ($, $p) => {
            return _ea.impure.text['starts with']($, $p['search pattern'], $p['position'])
        },
        'to character list': ($) => {
            return _ea.impure.text['to character list']($)
        },
    },
    // 'typescript': {
    //     'escape file name': ($) => {
    //         return _ea.impure.text['replace all'](
    //             $,
    //             " ",
    //             "_"
    //         )
    //     }
    // },
}

export const pure: Pure = {
    'dictionary': {
        'create single entry dictionary': ($) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $i['add entry']($.key, $.value)
            })
        },
        'filter': ($) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.map(($, key) => {
                    $.map(($) => {
                        $i['add entry'](key, $)
                    })
                })
            })
        },
        'flatten': ($, $p) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.map(($, key) => {
                    $.map(($, subkey) => {
                        $i['add entry'](`${key}${$p.separator}${subkey}`, $)
                    })
                })
            })
        },
        'group': ($) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.map(($, key) => {
                    $i['add entry']($.key, _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                        $i['add entry'](key, $.value)
                    }))
                })
            })
        },
        'pad identifiers': ($, $p) => {
            return _ea.pure.dictionary['build, overwrite clashing keys'](($i) => {
                $.map(($, key) => {
                    $i['add entry']($p.prefix + key + $p.suffix, $)
                })
            })
        },
    },
    'list': {
        'prepend element': ($, $p) => {
            return _ea.pure.list.build(($i) => {
                $i['add element']($p.element)
                $.__for_each(($) => {
                    $i['add element']($)
                })
            })
        },
        'append element': ($, $p) => {
            return _ea.pure.list.build(($i) => {
                $.__for_each(($) => {
                    $i['add element']($)
                })
                $i['add element']($p.element)
            })
        },
        'filter': ($) => {
            return _ea.pure.list.build(($i) => {
                $.__for_each(($) => {
                    $.map(($) => {
                        $i['add element']($)
                    })
                })
            })
        },
        'flatten': ($) => {
            return _ea.pure.list.build(($i) => {
                $.__for_each(($) => {
                    $.__for_each(($) => {
                        $i['add element']($)
                    })
                })
            })
        },
        'is equal to': ($, $p) => {
            if ($.__get_length() !== $p.other.__get_length()) {
                return false
            }
            for (let i = 0; i < $.__get_length(); i++) {
                if ($.__get_element_at(i) !== $p.other.__get_element_at(i)) {
                    return false
                }
            }
            return true
        },
    },
    'text': {
        'join list of texts': ($) => {
            return _ea.pure.text.build(($i) => {
                $.__for_each(($) => {
                    $i['add snippet']($)
                })
            })
        },
    },
}