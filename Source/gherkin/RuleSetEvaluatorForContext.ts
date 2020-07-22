// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { RuleSetContainerEvaluation, BrokenRule } from '@dolittle/rules';
import { ScenarioRuleSetContainerBuilder } from './rules';
import { ScenarioContext } from './index';

export class RuleSetEvaluatorForContext {

    static getFor(context: ScenarioContext): RuleSetEvaluatorForContext {
        return new RuleSetEvaluatorForContext(context, ...context.getRuleSetContainerBuilders());
    }
    private _ruleSetContainerBuilders: ScenarioRuleSetContainerBuilder[];

    constructor(private _owner: ScenarioContext, ...ruleSetContainerBuilders: ScenarioRuleSetContainerBuilder[]) {
        this._ruleSetContainerBuilders = ruleSetContainerBuilders;
    }
    async evaluate(): Promise<BrokenRule[]> {
        let brokenRules: BrokenRule[] = [];
        for (const builder of this._ruleSetContainerBuilders) {
            brokenRules = brokenRules.concat(await this.evaluateAndGetBrokenRules(builder));
        }

        return brokenRules;
    }


    private async evaluateAndGetBrokenRules(ruleSetContainerBuilder: ScenarioRuleSetContainerBuilder | undefined) {
        if (!ruleSetContainerBuilder) {
            return [];
        }
        const ruleSetContainer = ruleSetContainerBuilder.build();
        const evaluation = new RuleSetContainerEvaluation(ruleSetContainer);
        await evaluation.evaluate(this._owner);
        return evaluation.brokenRules;
    }
}
