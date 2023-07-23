const zad1 = document.getElementById('vivod')
const vivodZad1 = document.getElementById('zadanie1')
zad1.onclick = function() {
    var a = 5
    let b = 10
    const c = 13
    cons1 = "Первый вывод в консоль: " + (a+' '+b+' '+c) + "<br>"
    a+=1
    b+=1
    c1=c+1
    cons2 = cons1  + " Второй вывод в консоль: "+(a+' '+b+' '+c1)
    vivodZad1.innerHTML = cons2
}