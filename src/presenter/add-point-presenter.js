import { EditType } from '../const.js';
import {render, RenderPosition, remove} from '../framework/render.js';
import PointEditorView from '../view/point-editor-view.js';
import {UserAction, UpdateType,} from '../const';

export default class AddPointPresenter {
  #container = null;
  #destinationsModel = null;
  #offersModel = null;
  #addPointComponent = null;

  #handleDataChange = null;
  #handleDestroy = null;

  constructor({container, destinationsModel, offersModel, onPointChange, onDestroy}) {
    this.#container = container;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#handleDataChange = onPointChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#addPointComponent) {
      return;
    }

    this.#addPointComponent = new PointEditorView({
      pointDestinations: this.#destinationsModel.get(),
      pointOffers: this.#offersModel.get(),
      onCloseClick: this.#cancelClickHandler,
      onFormSubmit: this.#formSubmitHandler,
      editorMode: EditType.CREATING
    });

    render(this.#addPointComponent, this.#container, RenderPosition.AFTERBEGIN);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy({isCanceled = true} = {}) {
    if (!this.#addPointComponent) {
      return;
    }
    this.#handleDestroy({isCanceled});

    remove(this.#addPointComponent);
    this.#addPointComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);

  }

  setSaving = () => {
    this.#addPointComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  };

  setAborting = () => {
    const resetFormState = () => {
      this.#addPointComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#addPointComponent.shake(resetFormState);
  };

  #cancelClickHandler = () => {
    this.destroy();
  };

  #formSubmitHandler = (point) => {
    this.#handleDataChange (
      UserAction.CREATE_POINT,
      UpdateType.MINOR,
      point
    );
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.destroy();
    }
  };
}
