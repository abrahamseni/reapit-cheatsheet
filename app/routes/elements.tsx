import * as React from "react";
import { tw } from "twind";
import Table from "../components/core/Table";

export default function Elements() {
  const unitData = React.useMemo(
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

  const unitColumns = React.useMemo(() => {
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

  const spacingData = React.useMemo(
    () => [
      {
        col1: "elM6",
        col2: "el-m6",
      },
      {
        col1: "elMt2",
        col2: "el-mt2",
      },
      {
        col1: "elP4",
        col2: "el-p4",
      },
      {
        col1: "elPb5",
        col2: "el-pb5",
      },
      {
        col1: "elMx7",
        col2: "el-mx7",
      },
      {
        col1: "elPy8",
        col2: "el-py8",
      },
      {
        col1: "elMxAuto",
        col2: "el-mx-auto",
      },
    ],
    []
  );

  const spacingColumns = React.useMemo(() => {
    return [
      {
        Header: "Linaria Class",
        accessor: "col1",
      },
      {
        Header: "HTML Class",
        accessor: "col2",
      },
    ];
  }, []);

  const percentData = React.useMemo(() => {
    let data = Array.from({ length: 12 }, (_, i) => i).map((n) => {
      return {
        col1: n as string | number,
        col2: (n / 12) * 100 + "%",
      };
    });
    data = data.concat(
      {
        col1: "Full",
        col2: "100%",
      },
      {
        col1: "Auto",
        col2: "auto",
      },
      {
        col1: "Screen",
        col2: "100vw or 100vh",
      }
    );
    return data;
  }, []);

  const percentColumns = React.useMemo(() => {
    return [
      {
        Header: "Sizing",
        accessor: "col1",
      },
      {
        Header: "Value (%)",
        accessor: "col2",
      },
    ];
  }, []);

  return (
    <div>
      <h2 className={tw`text-lg`}>Elements Cheatsheet</h2>
      <div className={tw`mb-4 w-full border-b-1`}></div>
      <article className={tw`flex flex-wrap gap-8`}>
        <div className={tw`w-60`}>
          <h3 className={tw`mb-2 font-semibold`}>Units</h3>
          <Table columns={unitColumns} data={unitData} />
        </div>
        <div className={tw`w-60`}>
          <h3 className={tw`mb-2 font-semibold`}>Spacing</h3>
          <p>
            Use postfix: <code>t, l, r, b, x, y, Auto</code> for orientation.
          </p>
          <Table columns={spacingColumns} data={spacingData} />
        </div>
        <div className={tw`w-60`}>
          <h3 className={tw`mb-2 font-semibold`}>Sizing</h3>

          <Table columns={percentColumns} data={percentData} />
        </div>
      </article>
    </div>
  );
}
