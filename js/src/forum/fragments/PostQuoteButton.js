import app from 'flarum/forum/app';
import Fragment from 'flarum/common/Fragment';
import icon from 'flarum/common/helpers/icon';

import reply from '../utils/reply';

export default class PostQuoteButton extends Fragment {
  constructor(post) {
    super();

    this.post = post;
  }

  view() {
    return (
      <button
        className="Button PostQuoteButton"
        onclick={() => {
          reply(this.post, this.content);
        }}
      >
        {icon('fas fa-quote-left', { className: 'Button-icon' })}
        {app.translator.trans('flarum-mentions.forum.post.quote_button')}
      </button>
    );
  }

  show(left, top) {
    const $this = this.$().show();
    const parentOffset = $this.offsetParent().offset();

    $this.css('left', left - parentOffset.left).css('top', top - parentOffset.top);

    this.hideHandler = this.hide.bind(this);
    $(document).on('mouseup', this.hideHandler);
  }

  showStart(left, top) {
    const $this = this.$();

    this.show(left, $(window).scrollTop() + top - $this.outerHeight() - 5);
  }

  showEnd(right, bottom) {
    const $this = this.$();

    this.show(right - $this.outerWidth(), $(window).scrollTop() + bottom + 5);
  }

  hide() {
    this.$().hide();
    $(document).off('mouseup', this.hideHandler);
  }
}
