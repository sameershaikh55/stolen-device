import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A3",
        model: "Sedan, Convertible",
        imei: "2015",
        deviceType: "2015",
        dateReported: "2022-01-25",
        country: "Austrailia",
      },
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A3",
        model: "Wagon",
        imei: "2013",
        deviceType: "2013",
        dateReported: "2022-02-26",
        country: "Austrailia",
      },
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A3 Sportback e-tron",
        model: "Wagon",
        imei: "2016",
        deviceType: "2016",
        dateReported: "2022-03-27",
        country: "Austrailia",
      },
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A4",
        model: "Sedan, Convertible",
        imei: "2006",
        deviceType: "2006",
        dateReported: "2002-04-28",
        country: "Austrailia",
      },
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A4",
        model: "Sedan, Wagon",
        imei: "2001",
        deviceType: "2001",
        dateReported: "2022-03-25",
        country: "Austrailia",
      },
      {
        picture: (
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ),
        make: "A4 allroad",
        model: "Wagon",
        imei: "2019",
        deviceType: "2019",
        dateReported: "2022-03-25",
        country: "Austrailia",
      },
    ],
    []
  );

  return rows;
}
