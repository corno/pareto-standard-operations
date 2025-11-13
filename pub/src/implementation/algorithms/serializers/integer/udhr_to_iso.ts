import * as _ea from 'exupery-core-alg'

import { $$ as s_decimal } from "./decimal"

/**
 * 
 * uhdr is a numerical representation of dates where day 0 is 1948-12-10 (the date of the adoption of the Universal Declaration of Human Rights)
 * 
 * This function converts a udhr day number to an ISO 8601 date string (YYYY-MM-DD)
 */
export const $$ = (udhr_day: number): string => {

    const iso_day_0_offset = - 711471 // the number of days that iso day 1 (0001-01-01) is offset relative to udhr day 0 (1948-12-10)

    type ISO_Date = {
        year: number
        month: number
        day: number
    }

    const is_leap_year = (year: number): boolean =>
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

    const uhdr_to_iso_imp = (udhr_day: number): ISO_Date => {

        // Convert UDHR day to days since January 1, year 1 CE
        const total_days = udhr_day - iso_day_0_offset

        const number_of_days_in_400_years = 365 * 400 + 97
        const number_of_days_in_100_years = 365 * 100 + 24
        const number_of_days_in_4_years = 365 * 4 + 1
        const number_of_days_in_1_year = 365

        const number_of_400_year_blocks = _ea.integer_division(total_days, number_of_days_in_400_years)
        const _400_years_modulo = total_days % number_of_days_in_400_years

        const number_of_100_year_blocks = _ea.integer_division(_400_years_modulo, number_of_days_in_100_years)
        const _100_years_modulo = _400_years_modulo % number_of_days_in_100_years

        const number_of_4_year_blocks = _ea.integer_division(_100_years_modulo, number_of_days_in_4_years)
        const _4_years_modulo = _100_years_modulo % number_of_days_in_4_years

        const number_of_1_year_blocks = _ea.integer_division(_4_years_modulo, number_of_days_in_1_year)
        const _1_year_modulo = _4_years_modulo % number_of_days_in_1_year

        const base_years = number_of_400_year_blocks * 400 + number_of_100_year_blocks * 100 + number_of_4_year_blocks * 4 + number_of_1_year_blocks * 1

        const days_in_current_year = _1_year_modulo === 0
            ? (is_leap_year(base_years) ? 366 : 365)
            : _1_year_modulo

        const number_of_years = _1_year_modulo === 0
            ? base_years - 1
            : base_years

        const year = number_of_years + 1


        const month_day_table_normal = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
        const month_day_table_leap = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
        const month_day_table = is_leap_year(year) ? month_day_table_leap : month_day_table_normal

        const month = (() => {
            if (days_in_current_year <= month_day_table[1]) {
                return 1
            } else if (days_in_current_year <= month_day_table[2]) {
                return 2
            } else if (days_in_current_year <= month_day_table[3]) {
                return 3
            } else if (days_in_current_year <= month_day_table[4]) {
                return 4
            } else if (days_in_current_year <= month_day_table[5]) {
                return 5
            } else if (days_in_current_year <= month_day_table[6]) {
                return 6
            } else if (days_in_current_year <= month_day_table[7]) {
                return 7
            } else if (days_in_current_year <= month_day_table[8]) {
                return 8
            } else if (days_in_current_year <= month_day_table[9]) {
                return 9
            } else if (days_in_current_year <= month_day_table[10]) {
                return 10
            } else if (days_in_current_year <= month_day_table[11]) {
                return 11
            } else {
                return 12
            }
        })()

        const day = days_in_current_year - month_day_table[month - 1]

        return {
            year,
            month,
            day,
        }
    }
    const iso_date = uhdr_to_iso_imp(udhr_day)

    // Format with leading zeros for year (4 digits), month and day (2 digits)
    const year_str = iso_date.year < 1000 
        ? (iso_date.year < 100 
            ? (iso_date.year < 10 ? `000${s_decimal(iso_date.year)}` : `00${s_decimal(iso_date.year)}`) 
            : `0${s_decimal(iso_date.year)}`)
        : s_decimal(iso_date.year)
    const month_str = iso_date.month < 10 ? `0${s_decimal(iso_date.month)}` : s_decimal(iso_date.month)
    const day_str = iso_date.day < 10 ? `0${s_decimal(iso_date.day)}` : s_decimal(iso_date.day)

    return `${year_str}-${month_str}-${day_str}`
}

