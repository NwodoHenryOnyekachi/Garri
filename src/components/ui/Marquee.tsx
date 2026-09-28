import { Fragment } from 'react';

const WORDS = ['CASSAVA', 'GARRI', 'CULTURE', '$GARRI'];

export function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden whitespace-nowrap bg-ink py-3 font-display text-[1.1rem] font-extrabold tracking-[.06em] text-bg">
      <div className="inline-block animate-marquee">
        {Array.from({ length: 12 }, (_, i) => (
          <Fragment key={i}>
            {WORDS.map((w, j) => (
              <Fragment key={w}>
                <span className="mx-[18px]">{w}</span>
                <b className="text-gold">{j < 3 ? '→' : '✦'}</b>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
