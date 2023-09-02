let P1 = true
let valores = document.getElementsByClassName('Botones')
let Xcontador = 0;
let Ocontador = 0;


function reload () {
    document.getElementById('turno').innerHTML ='X, is your turn'
    P1 = true
    for(let i=0;i<valores.length;i++){
        valores[i].textContent=''
        valores[i].classList.remove('no-touch')
    }
}


function XO (id) {
    if(P1 && document.getElementById(id).textContent===''){
        document.getElementById(id).innerHTML='X'
        document.getElementById(id).classList.add('XClass')
        document.getElementById(id).classList.remove('OClass')
        document.getElementById('turno').innerHTML ='O, is your turn'
        P1=false
    }  if (!P1 && document.getElementById(id).textContent==='') {
        document.getElementById(id).innerHTML='O'
        document.getElementById(id).classList.add('OClass')
        document.getElementById(id).classList.remove('XClass')
        document.getElementById('turno').innerHTML ='X, is your turn'
        P1=true
    }

}

function CompX () {
    if(valores[0].textContent==='X' && valores[0].textContent===valores[1].textContent && valores[0].textContent===valores[2].textContent && valores[1].textContent===valores[2].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
        for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent==='X' && valores[0].textContent===valores[3].textContent && valores[0].textContent===valores[6].textContent && valores[3].textContent===valores[6].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
        for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent==='X' && valores[0].textContent===valores[4].textContent && valores[0].textContent===valores[8].textContent && valores[4].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[2].textContent==='X' && valores[2].textContent===valores[4].textContent && valores[2].textContent===valores[6].textContent && valores[4].textContent===valores[6].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[2].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[2].textContent==='X' &&  valores[2].textContent===valores[5].textContent && valores[2].textContent===valores[8].textContent && valores[5].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[2].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[1].textContent==='X' && valores[1].textContent===valores[4].textContent && valores[1].textContent===valores[7].textContent && valores[4].textContent===valores[7].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[1].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[3].textContent==='X' && valores[3].textContent===valores[4].textContent && valores[3].textContent===valores[5].textContent && valores[4].textContent===valores[5].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[3].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[6].textContent==='X' && valores[6].textContent===valores[7].textContent && valores[6].textContent===valores[8].textContent && valores[7].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[6].textContent} is the winner!!!`
        Xcontador++
        document.getElementById('c-x').innerHTML=`X Victories: ${Xcontador}`
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent!== '' && valores[1].textContent!=='' && valores[2].textContent!=='' && valores[3].textContent!=='' && valores[4].textContent!=='' && valores[5].textContent!=='' && valores[6].textContent!=='' && valores[7].textContent!=='' && valores[8].textContent!==''){
        document.getElementById('turno').innerHTML = 'It`s a tie!!!'
    }
}

function CompO () {
    if(valores[0].textContent==='O' && valores[0].textContent===valores[1].textContent && valores[0].textContent===valores[2].textContent && valores[1].textContent===valores[2].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent==='O' && valores[0].textContent===valores[3].textContent && valores[0].textContent===valores[6].textContent && valores[3].textContent===valores[6].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent==='O' && valores[0].textContent===valores[4].textContent && valores[0].textContent===valores[8].textContent && valores[4].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `Player ${valores[0].textContent} is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[2].textContent==='O' && valores[2].textContent===valores[4].textContent && valores[2].textContent===valores[6].textContent && valores[4].textContent===valores[6].textContent){
        document.getElementById('turno').innerHTML = `${valores[2].textContent} player is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[2].textContent==='O' &&  valores[2].textContent===valores[5].textContent && valores[2].textContent===valores[8].textContent && valores[5].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `${valores[2].textContent} player is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[1].textContent==='O' && valores[1].textContent===valores[4].textContent && valores[1].textContent===valores[7].textContent && valores[4].textContent===valores[7].textContent){
        document.getElementById('turno').innerHTML = `${valores[1].textContent} player is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[3].textContent==='O' && valores[3].textContent===valores[4].textContent && valores[3].textContent===valores[5].textContent && valores[4].textContent===valores[5].textContent){
        document.getElementById('turno').innerHTML = `${valores[3].textContent} player is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[6].textContent==='O' && valores[6].textContent===valores[7].textContent && valores[6].textContent===valores[8].textContent && valores[7].textContent===valores[8].textContent){
        document.getElementById('turno').innerHTML = `${valores[6].textContent} player is the winner!!!`
        Ocontador++
        document.getElementById('c-o').innerHTML=`O Victories: ${Ocontador}` 
         for(let i=0; i<valores.length; i++) {
            valores[i].classList.add('no-touch')
        }
    }
    if(valores[0].textContent!== '' && valores[1].textContent!=='' && valores[2].textContent!=='' && valores[3].textContent!=='' && valores[4].textContent!=='' && valores[5].textContent!=='' && valores[6].textContent!=='' && valores[7].textContent!=='' && valores[8].textContent!==''){
        document.getElementById('turno').innerHTML = 'It`s a tie!!!'
    }
}

