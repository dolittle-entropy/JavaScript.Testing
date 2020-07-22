// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/rudiments';
import { ScenarioContext, IContextDescriptorFor, no_context } from './index';

export abstract class ScenarioFor<T extends ScenarioContext> implements IContextDescriptorFor<T> {
    context: T | undefined;

    abstract for: Constructor<T>;

    and(): Function[] {
        return [];
    }

    behavesLike(): Constructor<IContextDescriptorFor<T>>[] {
        return [];
    }
}

export class no_scenario extends ScenarioFor<no_context> {
    for = no_context;
}