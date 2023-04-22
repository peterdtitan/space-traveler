import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import Rockets from '../Rockets';
import { bookRocket, cancelRocket } from '../../redux/rockets/rocketsSlice';

const mockStore = configureStore([]);

describe('Rockets', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            rocketId: 'falcon1',
            rocketName: 'Falcon 1',
            description: 'A small, partially reusable rocket designed by SpaceX.',
            rocketImages: ['https://i.imgur.com/J6QKDfQ.png'],
            isBooked: false,
          },
          {
            rocketId: 'falcon9',
            rocketName: 'Falcon 9',
            description: 'A medium-lift rocket designed and manufactured by SpaceX.',
            rocketImages: ['https://i.imgur.com/4YtCfno.png'],
            isBooked: true,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  it('renders the component with rocket data', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Falcon 1')).toBeInTheDocument();
    expect(screen.getByText('A small, partially reusable rocket designed by SpaceX.')).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();

    expect(screen.getByText('Falcon 9')).toBeInTheDocument();
    expect(screen.getByText('A medium-lift rocket designed and manufactured by SpaceX.')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });

  it('dispatches bookRocket action when reserve button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Reserve Rocket'));

    expect(store.dispatch).toHaveBeenCalledWith(bookRocket('falcon1'));
  });

  it('dispatches cancelRocket action when cancel button is clicked', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));

    expect(store.dispatch).toHaveBeenCalledWith(cancelRocket('falcon9'));
  });

  it('displays loading message when rockets are being fetched', () => {
    store = mockStore({
      rockets: {
        rockets: [],
        status: 'loading',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
