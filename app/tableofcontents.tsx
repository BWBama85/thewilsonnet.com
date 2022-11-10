'use client'

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function H({
  entry,
  inView,
  scroll,
  onClick
}: {
  entry: HEntry;
  inView: string | undefined;
  scroll: (to: number) => void;
  onClick?: () => void;
}) {

  const aRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (inView == entry.id && aRef.current) {
      scroll(aRef.current.offsetTop);
    }
  }, [inView, entry.id, scroll]);

  return (
    <>
      <a
        href={`#${entry.id}`}
        className={classNames("h", entry.id === inView ? "link-accent" : undefined)}
        ref={aRef}
        onClick={() => {
          onClick?.();
        }}
      >
        {entry.text}
      </a>
      {entry.items && (
        <ul className="md:pl-5 md:list-inside">
          {entry.items.map((h) => (
            <li key={h.id}>
              <H entry={h} inView={inView} scroll={scroll} onClick={onClick} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function useInViewId(postSelector: string, headingSelector: string) {
  const [inViewId, setInViewId] = useState<string | undefined>();

  useEffect(() => {
    const inViewSet = new Map<string, HTMLElement>();

    const callback: IntersectionObserverCallback = (changes) => {
      for (const change of changes) {
        change.isIntersecting
          ? inViewSet.set(change.target.id, change.target as HTMLElement)
          : inViewSet.delete(change.target.id);
      }

      const inView = Array.from(inViewSet.entries())
        .map(([id, el]) => [id, el.offsetTop] as const)
        .filter(([id]) => !!id);

      if (inView.length > 0) {
        setInViewId(
          inView.reduce((acc, next) => (next[1] < acc[1] ? next : acc))[0]
        );
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px",
      threshold: 1.0
    });

    for (const el of document
      .querySelector(postSelector)!
      .querySelectorAll(headingSelector)) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headingSelector, postSelector]);

  return { inViewId };
}

interface HEntry {
  text: string;
  id: string;
  level: number;
  items?: HEntry[];
}

function getNestedHeadings(headings: readonly HTMLHeadingElement[]): HEntry[] {
  const sentinel: HEntry = { text: "", id: "", level: 0 };
  const traversalStack: HEntry[] = [sentinel];

  for (const h of headings) {
    const hLevel = level(h);
    for (
      let last = traversalStack[traversalStack.length - 1];
      hLevel <= last.level;
      traversalStack.pop(), last = traversalStack[traversalStack.length - 1]
    ) {
      // do nothing
    }

    const last = traversalStack[traversalStack.length - 1];
    last.items = last.items || [];
    last.items.push({
      text: h.textContent || "",
      id: h.id,
      level: hLevel,
    });
    traversalStack.push(last.items[last.items.length - 1]);
  }

  return sentinel.items || [];
}

function level(e: HTMLHeadingElement): number {
  return parseInt(e.tagName[1]);
}

function useHeadingsData(postSelector: string, headingSelector: string) {
  const [headings, setHeadings] = useState<HEntry[]>([]);

  useEffect(() => {
    const hs = getNestedHeadings(
      Array.from(
        document
          .querySelector(postSelector)!
          .querySelectorAll<HTMLHeadingElement>(headingSelector)
      )
    );
    setHeadings(hs);
  }, [headingSelector, postSelector]);

  return { headings };
}

export default function TOC({
  postSelector,
  headingSelector,
}: {
  postSelector?: string;
  headingSelector?: string;
}) {

  postSelector = postSelector || "#page";
  headingSelector = headingSelector || "h2,h3,h4,h5,h6";

  const { headings } = useHeadingsData(postSelector, headingSelector);
  const { inViewId } = useInViewId(postSelector, headingSelector);

  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(to: number) {
    scrollRef.current?.scroll({
      top: to - 75,
      behavior: "smooth",
    });
  }

  return (
    <nav className="md:sticky md:top-2">
      <div className="card w-full bg-neutral text-neutral-content shadow-xl">
        <div className="card-body">
          <div className="card-title">
            Table of Contents
          </div>
          <ul className="md:list-inside">
            {headings.map((h) => (
              <li key={h.id}>
                <H
                  entry={h}
                  inView={inViewId}
                  scroll={scroll}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}