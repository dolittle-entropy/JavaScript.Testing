// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Scenario as ReportingScenario } from './Scenario';
import { Scenario } from '../../gherkin';

/**
 * Defines a system that can convert a {Scenario} to a {ReportingScenario}.
 *
 * @export
 * @interface IScenarioConverter
 */
export interface IScenarioConverter {
    convert(input: Scenario): ReportingScenario;
}
