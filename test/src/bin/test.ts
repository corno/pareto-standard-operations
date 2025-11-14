#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ed from 'exupery-core-dev'
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as generic from "../interface/generic"

import {
    Resources,
    run_refiner_tests_with_parameters,
    run_refiner_tests_without_parameters,
    run_tests,
    run_transformer_tests_with_parameters,
    run_transformer_tests_without_parameters,
} from "../implementation/generic"

// Import test data
import { TEST_DATA } from "../data/test_data"

// Import serializers
import { $$ as s_decimal } from "pub/dist/implementation/algorithms/integer/decimal/serializer"
import { $$ as s_hexadecimal } from "pub/dist/implementation/algorithms/integer/hexadecimal/serializer"
import { $$ as s_binary } from "pub/dist/implementation/algorithms/integer/binary/serializer"
import { $$ as s_octal } from "pub/dist/implementation/algorithms/integer/octal/serializer"
import { $$ as s_udhr_to_iso } from "pub/dist/implementation/algorithms/integer/iso_udhr/serializer"
import { $$ as s_boolean_true_false } from "pub/dist/implementation/algorithms/boolean/true_false/serializer"
import { $$ as s_approx_scientific } from "pub/dist/implementation/algorithms/approximate_number/scientific_notation/serializer"
import { $$ as s_pad_left } from "pub/dist/implementation/algorithms/text/pad_left/serializer"

// Import deserializers
import { $$ as d_decimal } from "pub/dist/implementation/algorithms/integer/decimal/deserializer"
import { $$ as d_hexadecimal } from "pub/dist/implementation/algorithms/integer/hexadecimal/deserializer"
import { $$ as d_binary } from "pub/dist/implementation/algorithms/integer/binary/deserializer"
import { $$ as d_octal } from "pub/dist/implementation/algorithms/integer/octal/deserializer"
import { $$ as d_iso_to_udhr } from "pub/dist/implementation/algorithms/integer/iso_udhr/deserializer"
import { $$ as d_true_false } from "pub/dist/implementation/algorithms/boolean/true_false/deserializer"
import { $$ as d_approx_scientific } from "pub/dist/implementation/algorithms/approximate_number/scientific_notation/deserializer"

_eb.run_unguaranteed_main_procedure<Resources>(
    ($r) => {
        return {
            'procedures': {
                'log error': $r.procedures['log error'],
                'log': $r.procedures['log'],
            }
        }
    },
    ($p, $r) => {
        return run_tests(
            _ea.dictionary_literal({
                "integer": ['group', _ea.dictionary_literal({
                    "decimal": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.decimal.serializer, s_decimal)],
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.decimal.deserializer, d_decimal)],
                    })],
                    "hexadecimal": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.hexadecimal.serializer, s_hexadecimal)],
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.hexadecimal.deserializer, d_hexadecimal)],
                    })],
                    "binary": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.binary.serializer, s_binary)],
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.binary.deserializer, d_binary)],
                    })],
                    "octal": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.octal.serializer, s_octal)],
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.octal.deserializer, d_octal)],
                    })],
                    "udhr_to_iso": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.integer.iso_udhr.serializer, s_udhr_to_iso)],
                    })],
                    "iso_to_udhr": ['group', _ea.dictionary_literal({
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.integer.iso_udhr.deserializer, d_iso_to_udhr)],
                    })],
                })],
                "boolean": ['group', _ea.dictionary_literal({
                    "true_false": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_without_parameters(TEST_DATA.boolean.true_false.serializer, s_boolean_true_false)],
                        "deserializer": ['group', run_refiner_tests_without_parameters(TEST_DATA.boolean.true_false.deserializer, d_true_false)],
                    })],
                })],
                "approximate_number": ['group', _ea.dictionary_literal({
                    "scientific_notation": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_with_parameters(TEST_DATA.approximate_number.scientific_notation.serializer, s_approx_scientific)],
                    })],
                })],
                "text": ['group', _ea.dictionary_literal({
                    "pad_left": ['group', _ea.dictionary_literal({
                        "serializer": ['group', run_transformer_tests_with_parameters(TEST_DATA.text.pad_left.serializer, s_pad_left)],
                    })],
                })],
            }),
            $r
        )
    }
)
