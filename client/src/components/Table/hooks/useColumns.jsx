import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "deviceImage",
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
        accessor: "serial",
      },
      {
        Header: "Device type",
        accessor: "deviceType",
      },
      {
        Header: "Date Reported",
        accessor: "stolenDate",
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
