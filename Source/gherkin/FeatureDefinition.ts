// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * Represents the definition of a feature.
 *
 * @export
 * @class FeatureDefinition
 */
export class FeatureDefinition {
    /**
     * Gets an unspecified {FeatureDefinition}.
     *
     * @static
     * @type {FeatureDefinition}
     */
    static readonly unspecified: FeatureDefinition = { name: 'Feature not specified', description: '' };

    readonly name: string;
    readonly description: string;

    constructor(name: string, description: string = '') {
        this.name = name;
        this.description = description;
    }
}
