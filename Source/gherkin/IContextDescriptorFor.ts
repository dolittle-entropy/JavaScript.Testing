// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/rudiments';
import { ScenarioContext } from './index';

/**
 * Defines the descriptor of the Context for a ScenarioContext
 *
 * @export
 * @interface IContextDescriptorFor
 * @template T
 */
export interface IContextDescriptorFor<T extends ScenarioContext> {
    for: Constructor<T>;
    and(): Function[];
}
