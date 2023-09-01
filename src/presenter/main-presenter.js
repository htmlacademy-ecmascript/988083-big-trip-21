import TripInfoPresenter from './trip-info-presenter.js';
import FiltersPresenter from './filters-presenter.js';
import PointsPresenter from './points-presenter.js';

import MockService from '../service/mock-service.js';

import DestinationsModel from '../model/destinations-model.js';
import OffersModel from '../model/offers-model.js';
import PointsModel from '../model/points-model.js';

const mockService = new MockService();

const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const filtersPresenter = new FiltersPresenter({pointsModel});
const tripInfoPresenter = new TripInfoPresenter();
const pointsPresenter = new PointsPresenter({
  destinationsModel,
  offersModel,
  pointsModel,
});

export default class MainPresenter {
  init() {
    filtersPresenter.init();
    tripInfoPresenter.init();
    pointsPresenter.init();
  }
}
