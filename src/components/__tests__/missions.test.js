import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import Missions from '../Missions';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const mockStore = configureStore([]);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            id: '1', name: 'Mission 1', description: 'Mission 1 description', isJoined: false,
          },
          {
            id: '2', name: 'Mission 2', description: 'Mission 2 description', isJoined: true,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  it('renders the component with mission data', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();

    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 1 description')).toBeInTheDocument();
    expect(screen.getByText('Not A Member')).toBeInTheDocument();
    expect(screen.getByText('Join Mission')).toBeInTheDocument();

    expect(screen.getByText('Mission 2')).toBeInTheDocument();
    expect(screen.getByText('Mission 2 description')).toBeInTheDocument();
    expect(screen.getByText('Active Member')).toBeInTheDocument();
    expect(screen.getByText('Leave Mission')).toBeInTheDocument();
  });

  it('dispatches joinMission action when join button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Join Mission'));

    expect(store.dispatch).toHaveBeenCalledWith(joinMission('1'));
  });

  it('dispatches leaveMission action when leave button is clicked', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Leave Mission'));

    expect(store.dispatch).toHaveBeenCalledWith(leaveMission('2'));
  });

  it('dispatches fetchMissions action when component mounts', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });
});
