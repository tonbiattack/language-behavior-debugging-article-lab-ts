/* Editorial Instrument: keep the selected diagnostic inside the visible editorial signal set. */
export type DiagnosticFilter = "all" | "red" | "blue" | "green";

export type DiagnosticItem = {
  id: string;
  color: Exclude<DiagnosticFilter, "all">;
};

export function filterDiagnostics<T extends DiagnosticItem>(items: T[], filter: DiagnosticFilter): T[] {
  return filter === "all" ? items : items.filter((item) => item.color === filter);
}

export function resolveActiveDiagnostic<T extends DiagnosticItem>(
  items: T[],
  filter: DiagnosticFilter,
  activeId: string,
): string {
  // BUG: the selected id is not reconciled with the filtered visible set.
  // The panel can therefore keep showing a hidden finding as selected.
  filterDiagnostics(items, filter);
  return activeId;
}
