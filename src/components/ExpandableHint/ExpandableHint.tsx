import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';
import { type PropsWithChildren, useState } from 'react';

export function ExpandableHint({ children, label }: PropsWithChildren<{ label: string }>) {
  const [expanded, setExpanded] = useState(false);

  const sendDiscordNotification = (hint: string) => {
    fetch('/api/notify-discord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hint, type: 'expandable_hint' }),
    });
  };

  const handleToggleExpanded = () => {
    if (!expanded) {
      sendDiscordNotification(label);
    }

    setExpanded((prev) => !prev);
  };

  return (
    <div className="rounded border border-gray-300">
      <button
        className="flex w-full cursor-pointer items-center p-3 text-left text-sm font-medium text-gray-700"
        onClick={handleToggleExpanded}
      >
        <span className="flex-1">{label}</span>
        <ArrowRightIcon className={clsx('ml-2 inline-block h-4 w-4 transition-transform', { 'rotate-90': expanded })} />
      </button>
      {expanded && (
        <>
          <hr className="text-gray-300" />
          <div className="p-3 text-xs text-gray-600">{children}</div>
        </>
      )}
    </div>
  );
}
