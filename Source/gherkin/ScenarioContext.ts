// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioEnvironmentDefinition, ScenarioEnvironment, emptyScenarioEnvironment } from './index';
import { ScenarioRuleSetContainerBuilder } from './rules';

export abstract class ScenarioContext {
    private _environment: ScenarioEnvironment = emptyScenarioEnvironment;

    abstract getRuleSetContainerBuilders (): ScenarioRuleSetContainerBuilder[];

    abstract async describe (environment: ScenarioEnvironmentDefinition): Promise<void>;

    async cleanup(): Promise<void> { };

    get environment() { return this._environment; }

    async establish(environment: ScenarioEnvironment): Promise<void> {
        this._environment = environment;
    }
}

export class no_context extends ScenarioContext {
    getRuleSetContainerBuilders(): ScenarioRuleSetContainerBuilder[] {
        return [];
    }
    async cleanup(): Promise<void> {
    }
    async describe(environment: ScenarioEnvironmentDefinition): Promise<void> {
    }
}
