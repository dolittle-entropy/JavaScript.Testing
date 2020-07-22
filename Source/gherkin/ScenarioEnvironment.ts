// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ScenarioEnvironmentDefinition } from './index';


export abstract class ScenarioEnvironment<TDefinition extends ScenarioEnvironmentDefinition = ScenarioEnvironmentDefinition> {
    constructor(
        readonly definition: TDefinition) {
    }

    abstract async start (): Promise<void>;

    abstract async stop (): Promise<void>;
}

export class NullScenarioEnvironment extends ScenarioEnvironment {

    async start(): Promise<void> {
    }

    async stop(): Promise<void> {
    }
}

export const emptyScenarioEnvironment = new NullScenarioEnvironment(new ScenarioEnvironmentDefinition());