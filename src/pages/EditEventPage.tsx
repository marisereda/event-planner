import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { EventForm } from '../components/EventForm';
import { Title } from '../components/Title';
import { RootState } from '../redux/eventsStore';

export const EditEventPage = () => {
  const { id } = useParams();
  const event = useSelector((state: RootState) =>
    state.events.find(event => event.id === id),
  );
  return (
    <div className="bg bg-cover">
      <div className="container py-10 ">
        <BackLink />
        <Title className="mb-6 xl:mb-4">Edit Event</Title>
        <EventForm event={event} />
      </div>
    </div>
  );
};
