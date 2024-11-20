export default class RedrawCallback {
    constructor(form, closeLinkCover, closeButton) {
        this.form = form;
        this.closeLinkCover = closeLinkCover;
        this.closeButton = closeButton;
        
        this.inputs = this.form.querySelectorAll('input[type="text"]');
        this.textArea = this.form.querySelector('textarea');
        this.checkbox = this.form.querySelector('input[type="checkbox"]');
        this.button = this.form.querySelector('button');

        this.response = {
            successfull : this.form.querySelector('.callback__response_true'),
            fail : this.form.querySelector('.callback__response_false'),
        }

        this.activeResponse = null;
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

    resultResponse(key) {
        if(this.activeResponse) this.activeResponse.classList.remove('callback__response_active');

        this.response[key].classList.add('callback__response_active');
        this.activeResponse = this.response[key];


        setTimeout(() => {
            this.activeResponse.classList.remove('callback__response_active');
        }, 3500)
    }

    resetForm() {
        this.form.reset();
    }
}