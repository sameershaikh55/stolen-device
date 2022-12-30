import { useMemo } from "react";

export default function useRows(reportedDevices) {
  const rows = useMemo(() => reportedDevices, []);

  return rows;
}
