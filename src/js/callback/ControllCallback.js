export default class ControllCallback {
    constructor(d, api) {
        this.d = d;
        this.api = api;

        this.click = this.click.bind(this);
        this.submit = this.submit.bind(this);
        this.focus = this.focus.bind(this);
        this.change = this.change.bind(this);
    }

    init() {
        this.registerEvents();
    }

    registerEvents() {
        this.d.closeLinkCover.addEventListener('click', this.click);
        this.d.closeButton.addEventListener('click', this.click);
        this.d.form.addEventListener('submit', this.submit);
        this.d.textArea.addEventListener('focus', this.focus);
        [...this.d.inputs].forEach(input => input.addEventListener('focus', this.focus));
        this.d.checkbox.addEventListener('change', this.change);
    }

    click(e) {
        this.d.resetForm();
    }

    submit(e) {
        e.preventDefault();

        // валидируем инпуты
        [...this.d.inputs].forEach(input => {
            const resInput = this.validationElement(input);

            if(!resInput) this.d.setInvalid(input);
        });

        // валидируем textarea
        const resArea = this.validationElement(this.d.textArea);
        if(!resArea) {
            this.d.setInvalid(this.d.textArea);
        };

        // валидируем чекбокс
        const resBox = this.validationElement(this.d.checkbox);
        if(!resBox) {
            this.d.setInvalid(this.d.checkbox); // ставим атрибут invalid
        };

        const validTotal = this.findInvalidPoints()
        // проверяем поля и блокируем или разблокируем кнопку
        this.d.controllBlockingButton(validTotal);

        if(validTotal > 0) return;

        const formData = new FormData(this.d.form);

        const response = this.api.create(formData);
        response ? this.d.resultResponse('successfull') : this.d.resultResponse('fail');
    }

    focus(e) {
        const target = e.target;
        this.d.removeInvalid(target);
        // проверяем поля и блокируем или разблокируем кнопку
        this.d.controllBlockingButton(this.findInvalidPoints());
    }

    change(e) {
        const target = e.target;
        this.d.removeInvalid(target);
        // проверяем поля и блокируем или разблокируем кнопку
        this.d.controllBlockingButton(this.findInvalidPoints());
    }

    validationElement(el) {
        if((el.tagName === 'INPUT' && el.type === 'text') || el.tagName === 'TEXTAREA') {
            return el.value.trim() !== '' ? true : false;
        }

        if(el.tagName === 'INPUT' && el.type === 'checkbox') {
            return el.checked;
        }
    }

    findInvalidPoints() {
        return this.d.form.querySelectorAll("[invalid]:not(.callback__wr-submit[invalid])").length;
    }
}