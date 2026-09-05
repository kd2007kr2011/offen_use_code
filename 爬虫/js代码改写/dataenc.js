function dataenc(e) {
var ktimes = 36;
for (var t = ktimes % 10,
i = (0 == t && (t = 1), []), n = 0; n < e.length; n++) {
    var a = e.charCodeAt(n) ^ t;
    i.push(String.fromCharCode(a))
}
return i.join("")
}