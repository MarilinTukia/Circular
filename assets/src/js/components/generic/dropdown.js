class Submenu {
    constructor() {
        this.subMenuButton = document.querySelectorAll('.have-submenu');
        this.eventListeners();
    }
    eventListeners() {
        this.subMenuButton.forEach(el => {
            el.addEventListener('click', e => {
                this.openSubmenu(e)
            })
        })

        document.addEventListener('click', e => {
            const target = document.querySelector('.have-submenu.active');
            if (target !== null) {
                const isClickedInsideTarget = target.contains(event.target)
                if (!isClickedInsideTarget) {
                    this.closeOthers();
                }
            }
        })
    }

    openSubmenu(el) {
        if(el.currentTarget.classList.contains('active')) {
            el.currentTarget.classList.remove('active')
         } else {
            this.closeOthers()
            el.currentTarget.classList.add('active')
         }
}

    closeOthers() {
        this.subMenuButton.forEach(el => {
            el.classList.remove('active')
        })
    }
}

new Submenu();
