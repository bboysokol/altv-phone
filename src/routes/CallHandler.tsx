import { actions, selectors } from 'rdx/phone/dialler';
import { CallState } from 'rdx/phone/dialler/dialler.slice';
import React, { useCallback, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useQueryRoute } from './QueryRouter/QueryRouteContext';
import { useQueryRouterNav } from './QueryRouter/useQueryRouterNav';

enum PhoneCallState {
  Connecting,
  NewCall,
  Calling,
  Call,
  End,
  NumberNotFound,
  NumberBusy,
  Error,
}

export const CallHandler = () => {
  const { navigate, close } = useQueryRouterNav();
  const { root } = useQueryRoute();
  const dispatch = useDispatch();
  const callStatus = useSelector(selectors.selectStatus);

  useEffect(() => {
    switch (callStatus) {
      case CallState.ended:
        setTimeout(() => {
          navigate('phone~~dialler');
          close(root);
        }, 500);
        break;
      default:
        break;
    }
  }, [callStatus]);

  useEffect(() => {
    document.addEventListener('server.phone.incomingConnection', handleIncomming);
    document.addEventListener('server.phone.changeState', handleChange);

    return () => {
      document.removeEventListener('server.phone.incomingConnection', handleIncomming);
      document.removeEventListener('server.phone.changeState', handleChange);
    };
  }, []);

  const handleIncomming = (data: any) => {
    const parsedData = JSON.parse(data.detail);
    navigate('phone~~dialler~calling');

    batch(() => {
      dispatch(actions.setCallNumber(parsedData.number));
      dispatch(actions.setCallState(CallState.incomming));
    });
  };

  const handleChange = useCallback(
    (data: any) => {
      const { state } = JSON.parse(data.detail);
      navigate('phone~~dialler~calling');

      switch (state) {
        case PhoneCallState.Connecting:
          dispatch(actions.setCallState(CallState.pending));
          break;
        case PhoneCallState.NewCall:
          dispatch(actions.setCallState(CallState.incomming));
          break;
        case PhoneCallState.Calling:
          dispatch(actions.setCallState(CallState.pending));
          break;
        case PhoneCallState.Call:
          dispatch(actions.setCallState(CallState.active));
          dispatch(actions.setCallStart(new Date()));
          break;
        case PhoneCallState.End:
          dispatch(actions.setCallState(CallState.ended));
          dispatch(actions.setCallNumber(''));
          dispatch(actions.setCallStart(null));
          close(root);
          break;
        case PhoneCallState.NumberNotFound:
          dispatch(actions.setCallState(CallState.notReachable));
          break;
        case PhoneCallState.NumberBusy:
          dispatch(actions.setCallState(CallState.busy));
          break;
        case PhoneCallState.Error:
          dispatch(actions.setCallState(CallState.canceled));
          break;
        default:
          break;
      }
    },
    [dispatch, actions],
  );

  return <></>;
};
