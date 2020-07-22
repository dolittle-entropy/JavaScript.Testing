// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/rudiments';

import { ScenarioContext, IContextDescriptorFor } from './index';

/**
 * Represents aan implementation of IContextDescriptor for a ScenarioContext that represents a behavior for the ScenarioContext
 *
 * @export
 * @abstract
 * @class BehaviorFor
 * @implements {IContextDescriptorFor<T>}
 * @template T
 */
export abstract class BehaviorFor<T extends ScenarioContext> implements IContextDescriptorFor<T> {
    abstract for: Constructor<T>;
    and(): Function[] {
        return [];
    }
}
