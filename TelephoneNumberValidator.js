function telephoneCheck(str) {
    let phoneNumber = str.replace(/\s|-|^1/g, "");
    if (phoneNumber[0] === "(" && phoneNumber[4] === ")")
        phoneNumber = phoneNumber.replace(/[()]/g, "");
    return (
        phoneNumber.length === 10 &&
        Number.isInteger(Number.parseInt(phoneNumber))
    );
}

telephoneCheck("555-555-5555");
