// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ISubjectProvider, IRuleContext } from '@dolittle/rules';
import { ScenarioWithThenSubject, SubjectContent, EmptySubjectContent } from './index';

export class ScenarioWithThenSubjectProvider<TContent extends SubjectContent = EmptySubjectContent> implements ISubjectProvider {
    constructor(
        private _subjectContent: TContent,
        private _scenario: string,
        private _then: string) {
    }

    provide(ruleContext: IRuleContext) {
        return new ScenarioWithThenSubject(this._subjectContent, this._scenario, this._then);
    }
}
