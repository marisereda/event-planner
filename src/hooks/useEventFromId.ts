import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/eventsStore';

export function useEventFromId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = useSelector((state: RootState) =>
    state.events.find(event => event.id === id),
  );

  useEffect(() => {
    if (!event) {
      navigate('/');
    }
  });
  return event;
}
