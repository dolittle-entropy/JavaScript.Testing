// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioFor, ScenarioContext } from './index';

/**
 * Represents the initial context.
 *
 * @export
 * @class Given
 */
export class Given {
    static nothing: Given = new Given('nothing', () => { });

    constructor(readonly name: string, readonly method: Function) {
    }

    /**
     * Sets up the initial context for a ScenarioFor a ScenarioContext.
     *
     * @param {ScenarioFor<ScenarioContext>} scenarioFor
     * @returns {Promise<void>}
     */
    async invoke(scenarioFor: ScenarioFor<ScenarioContext>): Promise<void> {
        await this.method.apply(scenarioFor);
    }
}
