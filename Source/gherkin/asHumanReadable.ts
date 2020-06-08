// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Converts the given string to a human readable string by removing '_'.
 *
 * @export
 * @param {string} input
 * @returns {string}
 */
export default function asHumanReadable(input: string): string {
    return input.split('_').join(' ');
}
