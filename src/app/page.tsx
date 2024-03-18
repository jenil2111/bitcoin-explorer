<<<<<<< HEAD
import styles from "./page.module.css";
import { graphqlClient } from "@/graphql/client";
import { BitcoinDocument } from "@/graphql/__generated__/graphql";
// import { Chart } from "react-google-charts";
import RichListChart from "./RichListChart";
async function getBitcoin() {
    return await graphqlClient.request(BitcoinDocument,
        {}
    );
}
=======
import { BitcoinDocument, BitcoinQuery } from "@/graphql/__generated__/graphql";
import {graphqlClient} from "@/graphql/client";
import styles from "./page.module.css";
import Timer from "./timer";

async function getBitcoin(): Promise<BitcoinQuery> {
    return await graphqlClient.request(BitcoinDocument, {});
  }
>>>>>>> 945e1ad8729c8812e5d4e5c5a6c4481d2a5add3c

const data = [{ label: 'A', value: 10 }, { label: 'B', value: 20 }, { label: 'C', value: 15 }];

export default async function Home() {
    const bitcoin = await getBitcoin();
<<<<<<< HEAD
    
    return (
        <main className={styles.main}>
            <div style={{ textAlign: "center" }}>
                <div>Northeastern Bitcoin Explorer</div>
                <div>
                    {'# blocks: ' + bitcoin.bitquery.bitcoin?.blocks?.map(b => {
                        return b.count
                    })}
                    

                    <RichListChart></RichListChart>
                        {/* // values={data}
                        // yValueFn={(item) => item.value}
                        // xLabelFn={(item) => item.label}
                    /> */}

                </div>
            </div>
        </main>
    );
=======
    const lastBlock = bitcoin.bitquery.bitcoin?.blocks?.[0];

    const formatBlockHeight = (height: number | undefined) => {
        if (height === undefined) return "";
        const heightString = height.toString();
        return `${heightString.slice(0, 3)} ${heightString.slice(3)}`;
      };
    
      return (
        <main className={styles.container}>
          <div className={styles.block}>
            <div>Northeastern Bitcoin Explorer</div>
            <div className={styles.blockTitle}>Last block</div>
            {/*  data-testid attribute on HTML used for playwright testing  */}
            <div className={styles.blockHeight} data-testid="blockHeight">
              {formatBlockHeight(lastBlock?.height)}
            </div>
            <div className={styles.blockTitle}>Time from last block</div>
            <Timer lastBlock={lastBlock} />
          </div>
    </main>
  );
>>>>>>> 945e1ad8729c8812e5d4e5c5a6c4481d2a5add3c
}
