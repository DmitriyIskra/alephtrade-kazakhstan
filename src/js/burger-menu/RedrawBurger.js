export default class RedrawBurger {
    constructor(nav, switcher, boxes) {
        this.nav = nav;
        this.boxes = boxes;
        this.switcher = switcher;

        this.itemsFirst = this.nav.querySelectorAll('.nav__mobile-item');

        this.activeSecondsItems = null;
        this.activeSecondBox = null;
        
        this.activeThirdItems = null;
        this.activeThirdBox = null;

        this.currentActiveItems = null;
    }

    // Начало открытие закрытие меню
    controllNav(val) {
        if(val) this.openNav();
        if(!val) this.closeNav();
    }

    openNav(){
        [...this.itemsFirst].forEach(item => item.classList.add('nav__item_open'));
    }

    closeNav() {
        [...this.itemsFirst].forEach(item => item.classList.remove('nav__item_open'));
        if(this.activeSecondBox && this.activeSecondsItems) {
            this.closeSecond();
        }
        if(this.activeThirdBox && this.activeThirdItems) {
            this.closeThird();
        }
    }
    // Конец открытие закрытие меню
    // -------------------------------------------------------------------------
    // Начало открытие закрытие подменю 2 уровня
    controllSecond(checkbox) {
        const parent = checkbox.parentElement;
        const state = checkbox.checked;
        
        // ни одно подменю не открыто
        if(state && !this.activeSecondBox) this.openSecond(parent);
        // одно подменю открыто
        if(state && this.activeSecondBox) {
            this.closeSecond();
            this.openSecond(parent)
        };

        this.activeSecondBox = checkbox; // в закрытии обнуляет и/или здесь переприсваивает когда true
        
        // закрытие 
        if(!state) this.closeSecond();

    }

    openSecond(parent) {
        const secondNav = parent.nextElementSibling;

        this.activeSecondsItems = secondNav.querySelectorAll('.nav__mobile-sub_second');
        
        [...this.activeSecondsItems].forEach(item => {
            item.classList.add('nav__item_open');
        })
    }

    closeSecond() {
        [...this.activeSecondsItems].forEach(item => {
            item.classList.remove('nav__item_open');
        })

        this.activeSecondsItems = null;
        this.activeSecondBox.checked = false;
        this.activeSecondBox = null;

        // Проверяем есть ли открытый третий уровень
        if(this.activeThirdItems && this.activeThirdBox) {
            this.closeThird();
        }
    }
    // Конец открытие закрытие подменю 2 уровня
    // -------------------------------------------------------------------------
    // Начало открытие закрытие подменю 3 уровня
    controllThird(checkbox) {
        const parent = checkbox.parentElement;
        const state = checkbox.checked;
        
        // ни одно подменю не открыто
        if(state && !this.activeThirdBox) this.openThird(parent);
        // одно подменю открыто
        if(state && this.activeThirdBox) {
            this.closeThird();
            this.openThird(parent)
        };

        this.activeThirdBox = checkbox; // в закрытии обнуляет и/или здесь переприсваивает когда true
        
        // закрытие 
        if(!state) this.closeThird();

    }

    openThird(parent) {
        const thirdNav = parent.nextElementSibling;

        this.activeThirdItems = thirdNav.querySelectorAll('.nav__mobile-link-item');
        
        [...this.activeThirdItems].forEach(item => {
            item.classList.add('nav__item_open');
        })
    }

    closeThird() {
        [...this.activeThirdItems].forEach(item => {
            item.classList.remove('nav__item_open');
        })

        this.activeThirdItems = null;
        this.activeThirdBox.checked = false;
        this.activeThirdBox = null;

        // НУЖНО ПРОВЕРЯТЬ ТРЕТИЙ УРОВЕНЬ ОТДЕЛЬНЫЙ МЕТОД НАПИСАТЬ
    }
    // Конец открытие закрытие подменю 3 уровня


    // на третий уровень будем ставить атрибут open
}