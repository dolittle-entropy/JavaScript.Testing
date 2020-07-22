// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioEnvironmentDefinition, ScenarioEnvironment } from './index';

/**
 * Defines a basic builder for a ScenarioEnvironment.
 *
 * @export
 * @interface IScenarioEnvironmentBuilder
 * @template TDefinition
 */
export interface IScenarioEnvironmentBuilder<TEnvironment extends ScenarioEnvironment<TDefinition>, TDefinition extends ScenarioEnvironmentDefinition> {

    /**
     * Start building a ScenarioEnvironment from a base ScenarioEnvironment.
     *
     * @param {TEnvironment} environment
     * @returns {IScenarioEnvironmentBuilder<TEnvironment, TDefinition>}
     */
    from(environment: TEnvironment): IScenarioEnvironmentBuilder<TEnvironment, TDefinition>;

    /**
     * Builds the ScenarioEnvironment.
     *
     * @returns {TEnvironment}
     */
    build(): TEnvironment
}
