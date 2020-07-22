// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { BrokenRule } from './index';

export class ReportingThenResult {
    readonly then!: string;
    readonly brokenRules!: BrokenRule[];
}
