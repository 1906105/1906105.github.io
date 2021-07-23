function hogehoge() {
    var x = document.getElementById("coment");
    // x.innerHTML = "JavaScriptで変更";

    switch (x.innerHTML) {
        case "OK　それじゃよく聞きな":
            x.innerHTML = "グリードアイランドは、<br>念能力者がつくったゲームだ";
            break;
        case "グリードアイランドは、<br>念能力者がつくったゲームだ":
            x.innerHTML = "製作者はどうやら複数らしいが<br>目的は不明だ";
            break;
        case "製作者はどうやら複数らしいが<br>目的は不明だ":
            x.innerHTML = "そいつらは100本のソフト<br>全てに念をこめた";
        case "そいつらは100本のソフト<br>全てに念をこめた":
            x.innerHTML = "ゲームをスタートすると<br>念が発動してプレイヤーを<br>ゲームの中に引きずりこむ";
            break;
        case "ゲームをスタートすると<br>念が発動してプレイヤーを<br>ゲームの中に引きずりこむ":
            x.innerHTML = "ゲームは念能力者以外は<br>プレイできない";
            break;
        case "ゲームは念能力者以外は<br>プレイできない":
            x.innerHTML = "そして、ゲームの中でプレイヤーが<br>生きている限りゲーム機はコンセントを<br>抜いても動き続ける";
        case "そして、ゲームの中でプレイヤーが<br>生きている限りゲーム機はコンセントを<br>抜いても動き続ける":
            x.innerHTML = "死ねば止まる";
            break;
        case "死ねば止まる":
            x.innerHTML = "ある所有者がプロを含む50人の<br>ハンターを雇い挑戦したが、<br>誰一人帰ってきたものはいない";
            break;
        case "ある所有者がプロを含む50人の<br>ハンターを雇い挑戦したが、<br>誰一人帰ってきたものはいない":
            x.innerHTML = "セーブポイントさえ見つかれば、<br>戻れるらしいがな";
            break;
        case "セーブポイントさえ見つかれば、<br>戻れるらしいがな":
            x.innerHTML = "ヨークシンシティのオークションには<br>現在7本のグリードアイランドが<br>競売申請登録されている模様";
            break;
        case "ヨークシンシティのオークションには<br>現在7本のグリードアイランドが<br>競売申請登録されている模様":
            x.innerHTML = "最低落札価格は89億J(ジェニー)";
        case "最低落札価格は89億J(ジェニー)":
            x.innerHTML = "入手難易度はGレベル";
            break;
        case "入手難易度はGレベル":
            x.innerHTML = "幻のゲームと呼ばれているが<br>流通量はけして少なくない";
            break;
        case "幻のゲームと呼ばれているが<br>流通量はけして少なくない":
            x.innerHTML = "金額面さえクリアできれば<br>入手は比較的やさしい";
            break;
        case "金額面さえクリアできれば<br>入手は比較的やさしい":
            location.href="./homepage.html"
            break;
    }

}

