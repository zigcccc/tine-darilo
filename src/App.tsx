import { Analytics } from '@vercel/analytics/react';

import { VideoPuzzle } from './components';

export function App() {
  return (
    <>
      <VideoPuzzle />
      {import.meta.env.PROD && <Analytics />}
    </>
  );
}
