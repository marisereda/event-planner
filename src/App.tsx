import { Button } from './components/Button';
import { Chip } from './components/Chip';

export function App() {

  return (
    <main>
      <div className="container my-10 space-y-10 rounded-xl bg-white p-10 shadow-md">
        <div className="flex items-center gap-6">
          <Button variant="primary" size="sm">
            Primary Sm
          </Button>
          <Button variant="secondary" size="sm">
            Secondary Sm
          </Button>
          <Button variant="primary" size="md">
            Primary Md
          </Button>
          <Button variant="primary" size="lg" icon="plus">
            Primary Lg Icon
          </Button>
        </div>

        <div className="flex items-center gap-6">
          <Chip>Default</Chip>
          <Chip variant="high">High</Chip>
          <Chip variant="medium">Medium</Chip>
          <Chip variant="low">Low</Chip>

        </div>
      </div>
    </main>
  );
}
