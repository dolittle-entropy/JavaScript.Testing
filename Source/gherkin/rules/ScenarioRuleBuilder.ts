// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleBuilder, RuleWithSubjectProvider, IRule } from '@dolittle/rules';
import { ScenarioWithThenSubjectProvider, SubjectContent, EmptySubjectContent } from './index';
import { SpecificationBuilder } from '../index';

const stackTrace = require('stack-trace');

export class ScenarioRuleBuilder<TContent extends SubjectContent = EmptySubjectContent> extends RuleBuilder {
    private _then: string;
    private _scenario: string;

    constructor(private _subjectContent: TContent, private _rule: IRule) {
        super();

        this._then = '[unknown]';
        this._scenario = '[unknown]';
        const callSites = stackTrace.get();
        for (const callSite of callSites) {
            const functionName = callSite.getFunctionName();
            if (functionName.indexOf('then_') === 0) {
                this._then = SpecificationBuilder.getThenNameFor(functionName);
                this._scenario = callSite.getTypeName();
                break;
            }
        }
    }

    build(): RuleWithSubjectProvider {
        return new RuleWithSubjectProvider(this._rule, new ScenarioWithThenSubjectProvider<TContent>(this._subjectContent, this._scenario, this._then));
    }
}
