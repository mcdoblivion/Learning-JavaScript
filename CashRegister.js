const denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
    let refunds = cash - price;
    let result = { status: null, change: [] };

    let cashInDrawer = cid.reduce(
        (account, currency) => {
            account.total += currency[1];
            account[currency[0]] = currency[1];
            return account;
        },
        { total: 0 }
    );

    let totalCashInDrawer = Math.round(cashInDrawer.total * 100) / 100;
    if (totalCashInDrawer < refunds) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
    } else if (totalCashInDrawer === refunds) {
        result.status = "CLOSED";
        result.change = [...cid];
        return result;
    }

    let changeArr = denom.reduce((arr, currency) => {
        let value = 0;
        while (refunds >= currency.val && cashInDrawer[currency.name] > 0) {
            refunds -= currency.val;
            refunds = Math.round(refunds * 100) / 100;
            cashInDrawer[currency.name] -= currency.val;
            value += currency.val;
        }

        if (value > 0) arr.push([currency.name, value]);

        return arr;
    }, []);

    if (changeArr.length < 1 || refunds > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
    }

    result.status = "OPEN";
    result.change = changeArr;
    return result;
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);
