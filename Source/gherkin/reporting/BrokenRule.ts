// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRuleCause } from './index';

/**
 * Represents a broken rule for reporting.
 *
 * @export
 * @class BrokenRule
 */
export class BrokenRule {
    /**
     * Gets the name.
     *
     * @type {string}
     */
    readonly name!: string;

    /**
     * Gets the {BrokenRuleCause[]}
     *
     * @type {BrokenRuleCause[]}
     */
    readonly causes!: BrokenRuleCause[];
}

