import { describe, expect, it } from "vitest";
import { resolveActiveDiagnostic, type DiagnosticItem } from "./diagnosticSelection";

const items: DiagnosticItem[] = [
  { id: "tone", color: "red" },
  { id: "signal", color: "blue" },
  { id: "promise", color: "green" },
];

describe("resolveActiveDiagnostic", () => {
  it("keeps the active diagnostic inside the filtered visible set", () => {
    expect(resolveActiveDiagnostic(items, "blue", "tone")).toBe("signal");
  });

  it("keeps an already visible selection", () => {
    expect(resolveActiveDiagnostic(items, "green", "promise")).toBe("promise");
  });

  it("returns an empty selection when the filter has no findings", () => {
    expect(resolveActiveDiagnostic([], "red", "tone")).toBe("");
  });
});
