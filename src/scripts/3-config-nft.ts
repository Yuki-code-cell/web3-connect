import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

// 先ほどメモして残していた editionDrop のコントラクトアドレスをこちらに記載
const editionDrop = sdk.getContract("process.env.REACT_APP_EDITIONDROP_ADDRESS", "edition-drop");

(async () => {
  try {
    await (await editionDrop).createBatch([
      {
        name: "Tableware",
        description:
          "FOODAO にアクセスすることができる限定アイテムです",
        image: readFileSync("C:\\Users\\81804\\Downloads\\名称未設定のデザイン.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
