// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioFor, ScenarioContext } from './index';

/**
 * Represents an action which establishes a {Scenario}.
 *
 * @export
 * @class BecauseOf
 */
export class BecauseOf {
    static nothing: BecauseOf = new BecauseOf('nothing', () => { });

    constructor(readonly name: string, readonly method: Function) {
    }

    /**
     * Invokes the method that describes the action of the Scenario
     *
     * @param {ScenarioFor<ScenarioContext>} scenarioFor
     * @returns {Promise<void>}
     */
    async invoke(scenarioFor: ScenarioFor<ScenarioContext>): Promise<void> {
        await this.method.apply(scenarioFor);
    }
}
