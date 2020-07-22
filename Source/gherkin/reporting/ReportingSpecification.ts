// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReportingFeature } from './index';

export class ReportingSpecification {
    readonly feature!: ReportingFeature;
    readonly givens!: string[];
    readonly when!: string;
    readonly ands!: string[];
    readonly thens!: string[];
    readonly children!: ReportingSpecification[];
}
