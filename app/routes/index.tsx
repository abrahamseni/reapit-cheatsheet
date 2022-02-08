import * as React from "react";
import { tw } from "twind";
import Table from "../components/core/Table";

export default function Index() {
  const apiData = React.useMemo(
    () => [
      {
        col1: 0,
        col2: "0px",
      },
      {
        col1: 1,
        col2: "4px",
      },
      {
        col1: 2,
        col2: "6px",
      },
      {
        col1: 3,
        col2: "8px",
      },
      {
        col1: 4,
        col2: "10px",
      },
      {
        col1: 5,
        col2: "12px",
      },
      {
        col1: 6,
        col2: "16px",
      },
      {
        col1: 7,
        col2: "20px",
      },
      {
        col1: 8,
        col2: "24px",
      },
      {
        col1: 9,
        col2: "32px",
      },
      {
        col1: 10,
        col2: "36px",
      },
      {
        col1: 11,
        col2: "40px",
      },
      {
        col1: 12,
        col2: "48px",
      },
    ],
    []
  );

  const apiColumns = React.useMemo(() => {
    return [
      {
        Header: "Spacing",
        accessor: "col1",
      },
      {
        Header: "Value (px)",
        accessor: "col2",
      },
    ];
  }, []);

  return (
    <div>
      <h2 className={tw`text-lg`}>Foundations API Cheatsheet</h2>
      <article>
        <Table columns={apiColumns} data={apiData} />
      </article>
    </div>
  );
}
