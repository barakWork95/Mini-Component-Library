import { useState, useCallback, useContext, type ReactNode } from "react";
import { ToastContext } from "./ToastContext";
import type { Toast, ToastVariant } from "./ToastContext";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message: string, variant: ToastVariant = "info", duration = 3000) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, message, variant, duration }]);
      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

const variantStyles: Record<string, React.CSSProperties> = {
  success: { backgroundColor: "var(--color-success)", color: "white" },
  error: { backgroundColor: "var(--color-danger)", color: "white" },
  warning: { backgroundColor: "var(--color-warning)", color: "white" },
  info: { backgroundColor: "var(--color-info)", color: "white" },
};

const icons: Record<string, string> = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

function ToastContainer() {
  const ctx = useContext(ToastContext);
  if (!ctx || ctx.toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        zIndex: 200,
      }}
    >
      {ctx.toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            ...variantStyles[toast.variant],
            padding: "12px 16px",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minWidth: "280px",
            fontSize: "var(--font-size-sm)",
            animation: "slideIn 150ms ease",
          }}
        >
          <span>{icons[toast.variant]}</span>
          <span style={{ flex: 1 }}>{toast.message}</span>
          <button
            onClick={() => ctx.removeToast(toast.id)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
              opacity: 0.8,
              padding: "0 4px",
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
