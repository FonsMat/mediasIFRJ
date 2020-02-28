var lbl1 = window.document.getElementById('lbl1')
var lbl2 = window.document.getElementById('lbl2')
var lbl3 = window.document.getElementById('lbl3')
var lbl4 = window.document.getElementById('lbl4')
var res = window.document.getElementById('res')

function btnclick(){
    var g1 = Number(lbl1.value)
    var rec1 = Number(lbl2.value)
    var g2 = Number(lbl3.value)
    var rec2 = Number(lbl4.value)
    
    
    if (g1 < 6){
        if (rec1 == 0){
            var frec1 = (30 - 2 * g1) / 3
            res.innerText = `Você precisa tirar ${frec1} na recuperaçâo para ficar com 6 na média do G1!`
        }
        else {
            var g1rec1 = (2 * g1 + 3 * rec1) / 5
            if (g2 == 0){
                var fg2 = (18 - g1) / 2
                res.innerText = `Sua média no G1 é de ${g1rec1} e você precisa tirar ${fg2} no G2 para passar!`
            }
            else if (g2 < 6){
                if (rec2 == 0) {
                    var frec2 = (30 - 2 * g2) / 3
                    res.innerText = `Sua média no G1 é de ${g1rec1} e você precisa tirar ${frec2} na recuperação do G2 pra passar!`
                }
                else {
                    var g2rec2 = (2 * g1 + 3 * rec1) / 5
                    var mfrec1rec2 = (g1rec1 + 2 * g2rec2) / 3
                    if (mfrec1rec2 < 6) {
                        res.innerText = `Sua média final é ${mfrec1rec2}, você não passou, boa sorte no próximo periodo!`
                    }
                    else {
                        res.innerText = `Sua média final é ${mfrec1rec2}, você passou, parabens!`
                    }
                }
            }
            else {
                var mfrec1 = (g1rec1 + 2 * g2) / 3
                if (mfrec1 < 6) {
                    res.innerText = `Sua média final é ${mfrec1}, você não passou, boa sorte no próximo periodo!`
                }
                else {
                    res.innerText = `Sua média final é ${mfrec1}, você passou, parabens!`
                }
            }
        }
    } else if (g1 >= 6 && g2 == 0){
        var mg2 = (18 - g1) / 2
        res.innerText = `Você precisa tirar ${mg2} no G2 para passar!`
    }
    else {
        if (g2 >= 6){
            mf = (g1 + 2 * g2) / 3
            if (mf < 6){
                res.innerText = `Sua média final é ${mf}, você não passou, boa sorte no próximo periodo!`
            }
            else {
                res.innerText = `Sua média final é ${mf}, você passou, parabens!`
            }
        }
        else {
            if (rec2 == 0) {
                var frec2 = (30 - 2 * g2) / 3
                res.innerText = `Você precisa tirar ${frec2} na recuperação do G2 pra passar!`
            }
            else {
                var g2rec2 = (2 * g1 + 3 * rec2) / 5
                var mfrec2 = (g1 + 2 * g2rec2) / 3
                if (mfrec2 < 6) {
                    res.innerText = `Sua média final é ${mfrec2}, você não passou, boa sorte no próximo periodo!`
                }
                else {
                    res.innerText = `Sua média final é ${mfrec2}, você passou, parabens!`
                }
            }
        }
    }   
}