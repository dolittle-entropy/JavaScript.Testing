// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { SubjectContent, EmptySubjectContent } from './index';
export class ScenarioWithThenSubject<TContent extends SubjectContent = EmptySubjectContent> {

    constructor(readonly content: TContent, readonly scenario: string, readonly then: string) {
    }
}
