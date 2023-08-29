import AbstractView from '../framework/view/abstract-view.js';

const createEventListEmptyTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class EventListEmptyView extends AbstractView {
  get template() {
    return createEventListEmptyTemplate();
  }
}
