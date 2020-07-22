// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IScenarioEnvironmentBuilder, ScenarioEnvironmentDefinition, ScenarioEnvironment } from './index';

/**
 * Represents an abstract implementation of IScenarioEnvironmentBuilder
 *
 * @export
 * @abstract
 * @class ScenarioEnvironmentBuilder
 * @implements {IScenarioEnvironmentBuilder<TEnvironment, TDefinition>}
 * @template TEnvironment
 * @template TDefinition
 */
export abstract class ScenarioEnvironmentBuilder<TEnvironment extends ScenarioEnvironment<TDefinition>, TDefinition extends ScenarioEnvironmentDefinition> implements IScenarioEnvironmentBuilder<TEnvironment, TDefinition> {

    protected environment!: TEnvironment;
    protected definition!: TDefinition;

    /** @inheritdoc */
    from(environment: TEnvironment): IScenarioEnvironmentBuilder<TEnvironment, TDefinition> {
        this.environment = environment;
        return this;
    }

    /** @inheritdoc */
    withDefinition(definition: TDefinition): IScenarioEnvironmentBuilder<TEnvironment, TDefinition> {
        this.definition = definition;
        return this;
    }

    /** @inheritdoc */
    build(): TEnvironment {
        return this.environment;
    }
}
