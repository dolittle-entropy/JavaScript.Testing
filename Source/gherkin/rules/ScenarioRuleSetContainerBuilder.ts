// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetContainerBuilder, RuleSetBuilder, IRule } from '@dolittle/rules';
import { ScenarioRuleBuilder } from './index';

export class ScenarioRuleSetContainerBuilder extends RuleSetContainerBuilder {
    private _ruleSetBuilder: RuleSetBuilder;

    constructor() {
        super();
        this._ruleSetBuilder = new RuleSetBuilder();
        this.addRuleSetBuilder(this._ruleSetBuilder);
    }

    protected addRuleBuilderFor(rule: IRule) {
        this._ruleSetBuilder.addRuleBuilder(new ScenarioRuleBuilder(rule));
    }
}
