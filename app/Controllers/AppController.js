const modalButton = document.getElementById('modal-button')
export class AppController{
    constructor(){
        modalButton.onclick= ()=>{
            // @ts-ignore
            const form = document.querySelector('.modal-body form')
            form.querySelectorAll('input').forEach(input => input.value = '')
            form.querySelectorAll('textarea').forEach(ta => ta.innerText = '')
        }
        
    }
}
