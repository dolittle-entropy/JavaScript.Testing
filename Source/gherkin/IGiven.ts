// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioEnvironmentDefinition, ScenarioEnvironment } from './index';

/**
 * Defines the setup of the initial context.
 *
 * @export
 * @interface IGiven
 */
export interface IGiven {
    /**
     * Describes the context for a ScenarioEnvironmentDefinition.
     *
     * @param {ScenarioEnvironmentDefinition} scenarioEnvironmentDefinition
     */
    describe(scenarioEnvironmentDefinition: ScenarioEnvironmentDefinition): void;

    /**
     * Establish context for ScenarioEnvironment
     *
     * @param {ScenarioEnvironment} scenarioEnvironment
     * @returns {Promise<void>}
     */
    establish(scenarioEnvironment: ScenarioEnvironment): Promise<void>;
}
