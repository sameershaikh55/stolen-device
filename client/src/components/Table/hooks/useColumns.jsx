import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "picture",
      },
      {
        Header: "Make",
        accessor: "make",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Serial/IMEI Number",
        accessor: "imei",
      },
      {
        Header: "Device type",
        accessor: "deviceType",
      },
      {
        Header: "Date Reported",
        accessor: "dateReported",
      },
      {
        Header: "Country",
        accessor: "country",
      },
    ],
    []
  );

  return columns;
}
