// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/rudiments';
import { IGiven, ScenarioEnvironmentDefinition } from './index';

/**
 * Defines a system that can manage scenario context.
 *
 * @export
 * @interface IScenarioContextManager
 */
export interface IScenarioContextManager {

    getFor(givenStatement: Constructor<IGiven>): ScenarioEnvironmentDefinition;
}
