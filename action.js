function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
             
let oct2 = [0,0,0,0,0,0,0,0]
  
let text = document.querySelector("#number")
text.addEventListener('keyup',(e)=>{
    let x
    var num = Number.parseInt(e.target.value)
    if(num % 2 == 0){
        x= "H'0"
    }
    else{
        x = "H'8"  
    }
    document.addEventListener("change",()=>{
        var oct = [0,0,0,0,0,0,0,0]
        let radioNai = document.querySelectorAll('.nai')
        for (let i = 0; i < radioNai.length; i++) {
            if (radioNai[i].checked) {
                switch (i) {
                    case 0:
                        oct[7] = 1
                        break;
                    
                    case 1:
                        oct[6] = 1
                        break;

                    case 2:
                        oct[6] = 1
                        oct[7] = 1
                        break;

                    case 3:
                        oct[5] = 1
                        
                        break;
                    default:
                        break;
                }
                }
            }


        //screening
        let radioScrn = document.querySelectorAll('.screening')
        for (let i = 0; i < radioScrn.length; i++) {
            if (radioScrn[i].checked) {
                switch (i) {
                    case 0:
                        oct2[6] = 0
                        oct2[7] = 0
                        break;
                    
                    case 1:
                        oct2[6] = 0
                        oct2[7] = 1
                        break;

                    case 2:
                        oct2[6] = 1
                        oct2[7] = 0
                        break;
                    case 3:
                        oct2[6] = 1
                        oct2[7] = 1
                        break;
                    default:
                        break;
                }
                }
            }

        //presentation
        let radio=document.querySelectorAll('.presentation')
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                switch (i) {
                    case 0:
                        oct2[4] = 0
                        oct2[5] = 0
                        break;
                    
                    case 1:
                        oct2[4] = 0
                        oct2[5] = 1
                        break;

                    case 2:
                        oct2[4] = 1
                        oct2[5] = 0
                        break;
                    default:
                        break;
                }
                }
            }
            
        //numplan
        let radioNum = document.querySelectorAll('.numplan')
        for (let i = 0; i < radioNum.length; i++) {
            if (radioNum[i].checked) {
                switch (i) {
                    case 0:
                        oct2[1] = 0
                        oct2[2] = 0
                        oct2[3] = 1
                        break;
                    
                    case 1:
                        oct2[1] = 0
                        oct2[2] = 1
                        oct2[3] = 1
                        break;

                    case 2:
                        oct2[1] = 1
                        oct2[2] = 0
                        oct2[3] = 0
                        break;
                    default:
                        break;
                }
                }
            }

        //roting
        let radioRo = document.querySelectorAll('.roting')
        for (let i = 0; i <  radioRo.length; i++) {
            if ( radioRo[i].checked) {
                switch (i) {
                    case 0:
                        oct2[0] = 0
                        break;
                    case 1:
                        oct2[0] = 1
                        break;
                    default:
                        break;
                }
                }
            }
        

        document.querySelector(".output").innerHTML = 
        x
        + bin_to_dec(oct.join("")).toString(16) 
        + bin_to_dec(oct2.join("")).toString(16)
            
    }) 
})    