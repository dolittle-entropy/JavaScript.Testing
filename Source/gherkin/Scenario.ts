// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import asHumanReadable from './asHumanReadable';
import { ScenarioEnvironment, ScenarioContext, ScenarioFor, Specification, emptyScenarioEnvironment, no_scenario } from './index';


export class Scenario {

    static none: Scenario = new Scenario(new no_scenario(), emptyScenarioEnvironment, Specification.empty);

    private _name: string;
    private _contextName: string;

    constructor(readonly instance: ScenarioFor<ScenarioContext>, readonly environment: ScenarioEnvironment, readonly specification: Specification) {
        this._name = asHumanReadable(instance.constructor.name);
        this._contextName = asHumanReadable(instance.for.name);
    }

    get name() {
        return this._name;
    }

    get contextName() {
        return this._contextName;
    }
}
