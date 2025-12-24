#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import {
    Resources,
    run_refiner_tests_with_parameters,
    run_refiner_tests_without_parameters,
    run_transformer_tests_with_parameters,
    run_transformer_tests_without_parameters,
} from "pareto-test/dist/implementation/generic"

import { $$ as p_run_tests } from "pareto-test/dist/implementation/commands/run_tests"

import * as ds_main from "exupery-resources/dist/interface/to_be_generated/temp_main"

// Import test data
import { TEST_DATA } from "../data/test_data"

// Import serializers
import { $$ as s_decimal } from "pub/dist/implementation/serializers/primitives/integer/decimal"
import { $$ as s_hexadecimal } from "pub/dist/implementation/serializers/primitives/integer/hexadecimal"
import { $$ as s_binary } from "pub/dist/implementation/serializers/primitives/integer/binary"
import { $$ as s_octal } from "pub/dist/implementation/serializers/primitives/integer/octal"
import { $$ as s_udhr_to_iso } from "pub/dist/implementation/serializers/primitives/integer/iso_udhr"
import { $$ as s_fractional_decimal } from "pub/dist/implementation/serializers/primitives/integer/fractional_decimal"
import { $$ as s_boolean_true_false } from "pub/dist/implementation/serializers/primitives/boolean/true_false"
import { $$ as s_approx_scientific } from "pub/dist/implementation/serializers/primitives/approximate_number/scientific_notation"

import { $$ as s_pad_left } from "pub/dist/implementation/serializers/primitives/text/pad_left"
import { $$ as s_split } from "pub/dist/implementation/operations/impure/list/deprecated_split"

import { $$ as op_join_with_separator } from "pub/dist/implementation/operations/impure/text/join_list_of_texts_with_separator"

// Import deserializers
import { $$ as ds_decimal } from "pub/dist/implementation/deserializers/primitives/integer/decimal"
import { $$ as ds_hexadecimal } from "pub/dist/implementation/deserializers/primitives/integer/hexadecimal"
import { $$ as ds_binary } from "pub/dist/implementation/deserializers/primitives/integer/binary"
import { $$ as ds_octal } from "pub/dist/implementation/deserializers/primitives/integer/octal"
import { $$ as ds_iso_to_udhr } from "pub/dist/implementation/deserializers/primitives/integer/iso_udhr"
import { $$ as ds_fractional_decimal } from "pub/dist/implementation/deserializers/primitives/integer/fractional_decimal"
import { $$ as ds_true_false } from "pub/dist/implementation/deserializers/primitives/boolean/true_false"
import { $$ as ds_approx_scientific } from "pub/dist/implementation/deserializers/primitives/approximate_number/scientific_notation"

const temp_split = ($: string, $p: { 'separator': number }): string => {
    return op_join_with_separator(
        _ea.build_list<string>($is => {
            const x = s_split($, $p)
            $is['add element'](x.head)
            x.tail.__for_each(($) => {
                $is['add element']($)
            })
        }),
        { 'separator': "," },
    )
}

_eb.run_main_procedure(
    ($rr) => {
        return _easync.create_command_procedure<ds_main.Error, ds_main.Parameters, null, null>(
            ($p, $r) => [
                p_run_tests(
                    {
                        'log error': $rr.commands['log error'],
                        'log': $rr.commands.log,
                    },
                    null,
                ).execute(
                    {
                        'test results': _ea.dictionary_literal({
                            "list": ['group', _ea.dictionary_literal({
                                "split": ['group', run_transformer_tests_with_parameters(TEST_DATA.list.split, temp_split)],
                            })],
                            "integer": ['group', _ea.dictionary_literal({
                                "decimal": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.decimal.serializer, s_decimal)],
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.decimal.deserializer, ds_decimal)],
                                })],
                                "hexadecimal": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.hexadecimal.serializer, s_hexadecimal)],
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.hexadecimal.deserializer, ds_hexadecimal)],
                                })],
                                "binary": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.binary.serializer, s_binary)],
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.binary.deserializer, ds_binary)],
                                })],
                                "octal": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.octal.serializer, s_octal)],
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.octal.deserializer, ds_octal)],
                                })],
                                "udhr_to_iso": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.iso_udhr.serializer, s_udhr_to_iso)],
                                })],
                                "iso_to_udhr": ['group', _ea.dictionary_literal({
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.iso_udhr.deserializer, ds_iso_to_udhr)],
                                })],
                                "fractional_decimal": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_with_parameters(TEST_DATA.integer.fractional_decimal.serializer, s_fractional_decimal)],
                                    "deserializer": ['group', run_refiner_tests_with_parameters(TEST_DATA.integer.fractional_decimal.deserializer, ds_fractional_decimal)],
                                })],
                            })],
                            "boolean": ['group', _ea.dictionary_literal({
                                "true_false": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.boolean.true_false.serializer, s_boolean_true_false)],
                                    "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.boolean.true_false.deserializer, ds_true_false)],
                                })],
                            })],
                            "approximate_number": ['group', _ea.dictionary_literal({
                                "scientific_notation": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_with_parameters(TEST_DATA.approximate_number.scientific_notation.serializer, s_approx_scientific)],
                                })],
                            })],
                            "text": ['group', _ea.dictionary_literal({
                                "pads_left": ['group', _ea.dictionary_literal({
                                    "serializer": ['group', run_transformer_tests_with_parameters(TEST_DATA.text.pad_left.serializer, s_pad_left)],
                                })],
                            })],
                        })
                    },
                    ($): ds_main.Error => ({
                        'exit code': 1
                    }),
                )
            ]
        )(null, null)

    }
)
