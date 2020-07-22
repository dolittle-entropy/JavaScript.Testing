// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingScenarioResult, IScenarioResultConverter, ISpecificationResultConverter } from './index';
import { ScenarioResult } from '../index';

export class ScenarioResultConverter implements IScenarioResultConverter {
    constructor(private readonly _specificationResultConverter: ISpecificationResultConverter) {
    }

    convert(input: ScenarioResult): ReportingScenarioResult {
        return {
            name: input.scenario.name,
            result: this._specificationResultConverter.convert(input.result)
        };
    }
}
