// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioContext, ScenarioEnvironmentDefinition } from '../index';
import { ScenarioRuleSetContainerBuilder } from '../rules';

export class MyContext extends ScenarioContext {
    getRuleSetContainerBuilders(): ScenarioRuleSetContainerBuilder[] {
        return [];
    }
    async describe(environment: ScenarioEnvironmentDefinition): Promise<void> {
    }
}
