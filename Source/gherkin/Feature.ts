// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents a decorator for feature.
 *
 * @export
 * @param {string} name The name of the feature.
 * @param {string} [description] The description of the feature.
 * @returns
 */
export function Feature(name: string, description?: string) {
    return function (constructor: Function) {
        (constructor as any)._feature = { name, description };
    };
}
