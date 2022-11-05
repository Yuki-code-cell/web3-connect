import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // コレクションの名前
      name: "FOODAO",
      // コレクションの説
      description: "Communities born from local cuisine",
      // コレクションのアイコンとなる画像
      image: readFileSync("C:\\Users\\81804\\Downloads\\名称未設定のデザイン.png"),
      // NFT の販売による収益を受け取るアドレスを設定
      // ドロップに課金をしたい場合は、ここに自分のウォレットアドレスを設定する
      // 今回は課金設定はないので、0x0 のアドレスで渡す
      primary_sale_recipient: AddressZero,
    });

    // 初期化し、返ってきた editionDrop コントラクトのアドレスから editionDrop を取得
    const editionDrop = sdk.getContract(editionDropAddress, "edition-drop");

    // メタデータを取得
    const metadata = await (await editionDrop).metadata.get();

    // editionDrop コントラクトのアドレスを出力
    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress
    );

    // editionDrop コントラクトのメタデータを出力
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    // エラーをキャッチしたら出力
    console.log("failed to deploy editionDrop contract", error);
  }
})();
