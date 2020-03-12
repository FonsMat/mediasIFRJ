var lbl1 = window.document.getElementById('lbl1')
var lbl2 = window.document.getElementById('lbl2')
var lbl3 = window.document.getElementById('lbl3')
var lbl4 = window.document.getElementById('lbl4')
var res = window.document.getElementById('res')

function btnclick(){
    //G1 é igual ao primeiro bimestre e G2 é igual ao segundo
    //Lá é dividido por semestres
    var g1 = Number(lbl1.value)
    var rec1 = Number(lbl2.value)
    var g2 = Number(lbl3.value)
    var rec2 = Number(lbl4.value)
    
    //tem alguns comentarios que parecem inuteis, mas vão ajudar a entender o codigo!

    if (g1 < 6){ 
        //Se a pessoa ficar de rec no g1

        if (rec1 == 0){ 
            //Se a pessoa não colocou a recuperação
            var frec1 = (30 - 2 * g1) / 3
            res.innerText = `Você precisa tirar ${frec1.toFixed(1)} na recuperaçâo para ficar com 6 na média do G1!`

        }
        else { 
            //agora vai mostrar como ficou a média do g1 com a recuperação e informações do g2
            var g1rec1 = (2 * g1 + 3 * rec1) / 5

            if (g2 == 0){ 
                //se a pessoa não colocou o g2
                var fg2 = (18 - g1) / 2
                res.innerText = `Sua média no G1 é de ${g1rec1.toFixed(1)} e você precisa tirar ${fg2.toFixed(1)} no G2 para passar!`

            }
            else if (g2 < 6){
                //se a pessoa ficar de rec no g2

                if (rec2 == 0) {
                    //se a pessoa não colocou a rec do g2
                    var frec2 = (30 - 2 * g2) / 3
                    res.innerText = `Sua média no G1 é de ${g1rec1.toFixed} e você precisa tirar ${frec2.toFixed(1)} na recuperação do G2 pra passar!`

                }
                else { 
                    //isso vai acontecer se a pessoa ficar de rec os dois bimestres e passar
                    var g2rec2 = (2 * g1 + 3 * rec1) / 5
                    var mfrec1rec2 = (g1rec1 + 2 * g2rec2) / 3

                    if (mfrec1rec2 < 6) {
                        res.innerText = `Sua média final é ${mfrec1rec2.toFixed(1)}! Você não passou, boa sorte no próximo periodo!`

                    }
                    else {
                        res.innerText = `Sua média final é ${mfrec1rec2.toFixed(1)}! Você passou, parabens!`

                    }
                }
            }
            else {
                //isso vai acontecer se a pessoa ficar de rec os dois bimestres e não passar
                var mfrec1 = (g1rec1 + 2 * g2) / 3

                if (mfrec1 < 6) {
                    res.innerText = `Sua média final é ${mfrec1.toFixed(1)}! Você não passou, boa sorte no próximo periodo!`

                }
                else {
                    res.innerText = `Sua média final é ${mfrec1.toFixed(1)}! Você passou, parabens!`

                }
            }
        }
    } else if (g1 >= 6 && g2 == 0){
        //se a pessoa passou no g1 e deixou o g2 em branco
        var mg2 = (18 - g1) / 2
        res.innerText = `Você precisa tirar ${mg2.toFixed(1)} no G2 para passar!`

    }
    else {
        if (g2 >= 6){
            //se a pessoa passou direto
            mf = (g1 + 2 * g2) / 3
            res.innerText = `Sua média final é ${mf.toFixed(1)}, você passou, parabens!`
            
        }
        else {
            //se a pessoa ficou de rec no g2

            if (rec2 == 0) {
                //se a pessoa não digitou a rec do g2 
                var frec2 = (30 - 2 * g2) / 3
                res.innerText = `Você precisa tirar ${frec2.toFixed(1)} na recuperação do G2 pra passar!`

            }
            else {
                //o que vai acontecer se a pessoa ficou de rec no g2
                var g2rec2 = (2 * g1 + 3 * rec2) / 5
                var mfrec2 = (g1 + 2 * g2rec2) / 3

                if (mfrec2 < 6) {
                    res.innerText = `Sua média final é ${mfrec2.toFixed(1)}, você não passou, boa sorte no próximo periodo!`
                    
                }
                else {
                    res.innerText = `Sua média final é ${mfrec2.toFixed(1)}, você passou, parabens!`

                }
            }
        }
    }   
}