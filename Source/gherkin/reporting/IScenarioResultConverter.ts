// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingScenarioResult } from './index';
import { ScenarioResult } from '../index';

/**
 * Defines a system that can convert a {ScenarioResult} {ReportingScenarioResult}.
 *
 * @export
 * @interface IScenarioResultConverter
 */
export interface IScenarioResultConverter {
    convert(input: ScenarioResult): ReportingScenarioResult;
}
