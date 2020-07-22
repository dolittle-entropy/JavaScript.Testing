// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Specification as ReportingSpecification } from './index';
import { Specification } from '../index';

export interface ISpecificationConverter {
    convert(input: Specification): ReportingSpecification;
}
