import app from 'flarum/forum/app';
import type Mithril from 'mithril';
import type User from 'flarum/common/models/User';
import usernameHelper from 'flarum/common/helpers/username';
import avatar from 'flarum/common/helpers/avatar';
import highlight from 'flarum/common/helpers/highlight';
import MentionableModel from './MentionableModel';
import getCleanDisplayName, { shouldUseOldFormat } from '../utils/getCleanDisplayName';
import AtMentionFormat from './formats/AtMentionFormat';

export default class WorkflowMention extends MentionableModel<object, AtMentionFormat> {
  type(): string {
    return 'workflow';
  }

  initialResults(): object[] {
    return [{ id: 'workflow' }, { id: 'Workflow' }];
  }

  /**
   * Automatically determines which mention syntax to be used based on the option in the
   * admin dashboard. Also performs display name clean-up automatically.
   *
   * @"Display name"#UserID or `@username`
   *
   * @example <caption>New display name syntax</caption>
   * // '@"user"#1'
   * forUser(User) // User is ID 1, display name is 'User'
   *
   * @example <caption>Using old syntax</caption>
   * // '@username'
   * forUser(user) // User's username is 'username'
   */
  public replacement(asting: object): string {
    return this.format.format('workflow', null, null);
  }

  suggestion(astring: object, typed: string): Mithril.Children {
    return <>workflow</>;
  }

  matches(astring: object, typed: string): boolean {
    console.log('astring', astring);
    console.log('typed', typed);

    if (!typed) return false;

    if ('workflow'.substr(0, typed.length) === typed || 'Workflow'.substr(0, typed.length) === typed) {
      return true;
    }
    return false;
  }

  maxStoreMatchedResults(): null {
    return null;
  }

  async search(typed: string): Promise<object[]> {
    return await [{ id: 'dwndk' }];
  }

  enabled(): boolean {
    return true;
  }
}
