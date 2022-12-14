import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Data } from "../core/types";
import HomeView from "../views/home";

const Home: NextPage = () => {
  const fetchData = async () => {
    const data = await fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json().then((data: Data) => data));

    return data;
  };

  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Project 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data && (
        <HomeView
          totalSales={data.totalSales}
          newQuote={data.newQuote}
          orders={data.orders}
          products={data.products}
          visitorsGraph={data.visitorsGraph}
          weeklySalesAndExpense={data.weeklySalesAndExpense}
          totalChargeAndProfit={data.totalChargeAndProfit}
          customerRatings={data.customerRatings}
          votes={data.votes}
          websiteTraffic={data.websiteTraffic}
          pieText={data.pieText}
          profileInfo={data.profileInfo}
        />
      )}
    </div>
  );
};

export default Home;
