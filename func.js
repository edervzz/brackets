
function brackets(s) {
    let ar = s.split("")
    let stack = []
    for (let b of ar) {
        if (!isOpener(b) && stack.length == 0) { return "NO" } // validamos que el primer caracter nos sea un cierre y la length del stack sea cero
        //                                                        también se puede mitigar en la L.12, porque en JS no "dumpea" si se intenta
        //                                                        recuperar un valor de un arreglo de una posición fuera de sus limites
        //                                                        pero en lenguajes fuertemente tipados... esto no es posible
        if (isOpener(b)) { stack.push(b) } // si es caracter de apertura lo agregamos al stack
        if (!isOpener(b)) { // si es caracter de cierre, verificamos que último del stack sea su opuesto
            if (stack[stack.length - 1] == getOposite(b)) {
                stack.pop() // si es el opuesto lo liberamos
            } else {
                return "NO" // si es diferente al opuesto, fallamos
            }
        }
    }

    if (stack.length != 0) { // con los "pop" el stack debe quedar vacío si todos las aperturas tiene su respectivo cierre
        return "NO"
    }

    return "YES"
}

function isOpener(b) {
    if (b == "{" || b == "[" || b == "(") return true
    return false
}

function getOposite(b) {
    if (b == "}") { return "{" }
    if (b == "]") { return "[" }
    if (b == ")") { return "(" }
}

console.log(brackets("[[()][({{}})]]{}[]()"))
// console.log(brackets(")"))
