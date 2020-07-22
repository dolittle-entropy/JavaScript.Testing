// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingScenario, IScenarioConverter, ISpecificationConverter } from './index';
import { Scenario } from '../index';

export class ScenarioConverter implements IScenarioConverter {
    constructor(private readonly _specificationConverter: ISpecificationConverter) {
    }

    convert(input: Scenario): ReportingScenario {
        return {
            name: input.name,
            context: input.contextName,
            specification: this._specificationConverter.convert(input.specification)
        };
    }
}
