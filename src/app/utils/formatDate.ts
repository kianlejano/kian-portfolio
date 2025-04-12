// utils/formatDate.ts

export function formatDate(date: Date | string, format: "month-year" | "default" = "default"): string {
    const d = new Date(date);
  
    if (format === "month-year") {
      return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    }
  
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  