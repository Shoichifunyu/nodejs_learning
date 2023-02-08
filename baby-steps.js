function add() {
    arr_len = process.argv.length;
    count = 0;
    step = 2;
    for (let step = 2; step < arr_len; step++){
        count += Number(process.argv[step]);
    }
    console.log(count);
}

add();

// テスト用にコメント追加


