function sum(val1, val2, result) {
    result(val1 + val2);
}
sum(2, 2, function (x) {
    console.log(x);
});
