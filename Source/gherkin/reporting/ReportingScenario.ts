// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingSpecification } from './index';

export class ReportingScenario {
    readonly name!: string;
    readonly context!: string;
    readonly specification!: ReportingSpecification;
}
