//Write a JavaScript function to count the occurrence of a substring in a string
const countSubstring = (org, sub, isNotCaseSensitive = true) => {
    org = org.replace(/[\W_]+/g, "");
    sub = sub.replace(/[\W_]+/g, "");
    return isNotCaseSensitive ? (org.match(new RegExp(sub, 'g')) || []).length : (org.match(new RegExp(sub, 'gi')) || []).length;
};

const countSubstring2 = (org, sub, isNotCaseSensitive = true) => {
    org = org.replace(/[\W_]+/g, "");
    sub = sub.replace(/[\W_]+/g, "");
    if (!isNotCaseSensitive) {
        org = org.toLowerCase();
        sub = sub.toLowerCase();
    }
    return org.split(sub).length - 1;
}

console.log(countSubstring("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Le"));
console.log(countSubstring("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Le", false));
console.log(countSubstring("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Lol"));
console.log(countSubstring2("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Le"));
console.log(countSubstring2("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Le", false));
console.log(countSubstring2("Andrew Le Le   $$%%    le Nguyen @@@    Le", "Lol"));
