export function Specs({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="mb-3 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-mute">{k}</dt>
          <dd className="m-0 break-all font-bold">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
