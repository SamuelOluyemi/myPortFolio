import { ReactNode } from "react";

export function AccentText({
  children,
  italic = false,
}: {
  children: ReactNode;
  italic?: boolean;
}) {
  return (
    <span
      style={{
        color: "#c8f542",
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      {children}
    </span>
  );
}
