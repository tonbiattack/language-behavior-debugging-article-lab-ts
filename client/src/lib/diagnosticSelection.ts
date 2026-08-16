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
  const visible = filterDiagnostics(items, filter);
  if (visible.some((item) => item.id === activeId)) return activeId;
  return visible[0]?.id ?? "";
}
