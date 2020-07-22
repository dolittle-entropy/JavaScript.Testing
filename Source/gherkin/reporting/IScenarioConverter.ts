// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingScenario } from './index';
import { Scenario } from '../index';

/**
 * Defines a system that can convert a {Scenario} to a {ReportingScenario}.
 *
 * @export
 * @interface IScenarioConverter
 */
export interface IScenarioConverter {
    convert(input: Scenario): ReportingScenario;
}
