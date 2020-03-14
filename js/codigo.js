//G1 é igual ao primeiro bimestre e G2 é igual ao segundo
//Lá é dividido por semestres

const lblg1 = window.document.getElementById('lblg1');
const lblr1 = window.document.getElementById('lblr1');
const lblg2 = window.document.getElementById('lblg2');
const lblr2 = window.document.getElementById('lblr2');
const res = window.document.getElementById('res');


function btnclick(){

    if (lblg1.value.length == 0){

        res.innerText = '[ERROR] FALTAM DADOS!';
        res.style.color = "red"

    }
    else{

        const g1 = Number(lblg1.value);

        if (g1 < 0 || g1 > 10){

            res.innerText = '[ERROR] NOTA IMPOSSÍVEL!!!!!';
            res.style.color = "red"

        }
        else if (g1 >= 6){
            //se o aluno passou no g1 sem rec

            if (lblg2.value.length == 0){

                const g2v = (18 - g1) / 2;
                res.innerText = `Você precisa tirar ${g2v.toFixed(1)} no G2 para passar!`;
                res.style.color =  "black"
    

            }
            else {

                const g2 = Number(lblg2.value);

                if (g2 < 0 || g2 > 10){

                    res.innerText = '[ERROR] NOTA IMPOSSÍVEL!!!!!';
                    res.style.color = "red"

                }
                else if (g2 >= 6){
                    //se o aluno passou direto

                    mf = (g1 + 2 * g2) / 3;
                    res.innerText = `Sua média final é ${mf.toFixed(1)}, você passou, parabens!`;
                    res.style.color =  "black"
    

                }
                else {

                    if (lblr2.value.length == 0){

                        const frec2 = (30 - 2 * g2) / 3;
                        res.innerText = `Você precisa tirar ${frec2.toFixed(1)} na recuperação do G2 pra passar!`;
                        res.style.color =  "black"

                    }
                    else {
                        //se o aluno ficou de rec no g2

                        const rec2 = Number(lblr2.value);
                        const mg2 = (2 * g1 + 3 * rec2) / 5;
                        const mf = (g1 + 2 * mg2) / 3;

                        if (mf >= 6){

                            res.innerText = `Sua média do G2 é ${mg2.toFixed(1)} e sua média final é ${mf.toFixed(1)}!! Você passou, parabens!!!`;
                            res.style.color =  "black"

                        }
                        else {

                            res.innerText = `Sua média do G2 é ${mg2.toFixed(1)} e sua média final é ${mf.toFixed(1)}!!  Você não passou, boa sorte no proximo periodo!`;
                            res.style.color =  "black"
                            
                        }
                    }
                }
            }
        }
        else if (g1 < 6){
            //se o aluno ficou de rec no g1
            if(lblr1.value.length == 0){

                const rec1 = (30 - 2 * g1) / 3
                res.innerText = `Você precisa tirar ${rec1.toFixed(1)} na recuperaçâo para ficar com 6 na média do G1!`
                res.style.color =  "black"

            }
            else{

                const nrec1 = Number(lblr1.value)
                const rec1 = (2 * g1 + 3 * nrec1) / 5

                if (lblg2.value.length == 0){

                    const g2v = (18 - rec1) / 2;
                    res.innerText = `Sua média do g1 é ${rec1.toFixed(1)} e você precisa tirar ${g2v.toFixed(1)} no G2 para passar!`;
                    res.style.color =  "black"
                }
                else {
    
                    const g2 = Number(lblg2.value);
    
                    if (g2 < 0 || g2 > 10){
    
                        res.innerText = '[ERROR] NOTA IMPOSSÍVEL!!!!!';
                        res.style.color =  "red"
    
                    }
                    else if (g2 >= 6){
                        //se o aluno passou direto
    
                        mf = (rec1 + 2 * g2) / 3;
                        res.innerText = `Sua média do g1 é ${rec1.toFixed(1)} e final é ${mf.toFixed(1)}, você passou, parabens!`;
                        res.style.color =  "black"

                    }
                    else {
    
                        if (lblr2.value.length == 0){
    
                            const frec2 = (30 - 2 * g2) / 3;
                            res.innerText = `Sua média do g1 é ${rec1.toFixed(1)} e você precisa tirar ${frec2.toFixed(1)} na recuperação do G2 pra passar!`;
                            res.style.color =  "black"

                        }
                        else {
                            //se o aluno ficou de rec no g2
    
                            const rec2 = Number(lblr2.value);
                            const mg2 = (2 * rec1 + 3 * rec2) / 5;
                            const mf = (rec1 + 2 * mg2) / 3;
    
                            if (mf >= 6){
    
                                res.innerText = `Sua média do g1 é ${rec1.toFixed(1)} e sua média do G2 é ${mg2.toFixed(1)} e sua média final é ${mf.toFixed(1)}!! Você passou, parabens!!!`;
                                res.style.color =  "black"
                            }
                            else {
    
                                res.innerText = `Sua média do g1 é ${rec1.toFixed(1)} e sua média do G2 é ${mg2.toFixed(1)} e sua média final é ${mf.toFixed(1)}!!  Você não passou, boa sorte no proximo periodo!`;
                                res.style.color =  "black"
                                
                            }
                        }
                    }
                }
            }
        }
    }
}