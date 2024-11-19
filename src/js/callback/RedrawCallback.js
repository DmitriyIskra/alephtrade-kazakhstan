export default class RedrawCallback {
    constructor(form) {
        this.form = form;
        
        this.inputs = this.form.querySelectorAll('input[type="text"]');
        this.textArea = this.form.querySelector('textarea');
        this.checkbox = this.form.querySelector('input[type="checkbox"]');
        this.button = this.form.querySelector('button');
    }

    setInvalid(el) {
        const parent = el.parentElement;
        parent.setAttribute('invalid', '');
    }

    removeInvalid(el) {
        const parent = el.parentElement;
        if(parent.hasAttribute('invalid')) {
            parent.removeAttribute('invalid');
        }
    }
    
    // блокируем или разблокируем кнопку
    controllBlockingButton(val) {
        if(val > 0) this.setInvalid(this.button);
        if(val === 0) this.removeInvalid(this.button);
    }
}