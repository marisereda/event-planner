import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { EventDetails } from '../components/EventDetails';
import { Title } from '../components/Title';
import { RootState } from '../redux/eventsStore';

export const EventPage = () => {
  const { id } = useParams();
  const event = useSelector((state: RootState) =>
    state.events.find(event => id === event.id),
  );

  return (
    <div className="bg bg-cover">
      <div className="container py-10">
        <BackLink />
        {event && (
          <div className="mx-auto xl:max-w-[688px]">
            <Title className="mb-6 xl:mb-4">{event.title}</Title>
            <EventDetails event={event} />
          </div>
        )}
      </div>
    </div>
  );
};
