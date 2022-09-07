
function DropDown(dropDown) {
    var TamilNadu = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];

    var ul = document.getElementById("inputDistrict");

    for (var i = 0; i < TamilNadu.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(TamilNadu[i]));
        ul.appendChild(li);
    }

    const [toggler, menu] = dropDown.children;

    const handleClickOut = e => {
        if (!dropDown) {
            return document.removeEventListener('click', handleClickOut);
        }

        if (!dropDown.contains(e.target)) {
            this.toggle(false);
        }
    };

    const setValue = (item) => {
        const val = item.textContent;
        toggler.textContent = val;
        this.value = val;
        this.toggle(false);
        dropDown.dispatchEvent(new Event('change'));
        toggler.focus();
    }

    const handleItemKeyDown = (e) => {
        e.preventDefault();

        if (e.keyCode === 38 && e.target.previousElementSibling) { // up
            e.target.previousElementSibling.focus();
        } else if (e.keyCode === 40 && e.target.nextElementSibling) { // down
            e.target.nextElementSibling.focus();
        } else if (e.keyCode === 27) { // escape key
            this.toggle(false);
        } else if (e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
            setValue(e.target);
        }
    }

    const handleToggleKeyPress = (e) => {
        e.preventDefault();

        if (e.keyCode === 27) { // escape key
            this.toggle(false);
        } else if (e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
            this.toggle(true);
        }
    }

    toggler.addEventListener('keydown', handleToggleKeyPress);
    toggler.addEventListener('click', () => this.toggle());
    [...menu.children].forEach(item => {
        item.addEventListener('keydown', handleItemKeyDown);
        item.addEventListener('click', () => setValue(item));
    });

    this.element = dropDown;

    this.value = toggler.textContent;

    this.toggle = (expand = null) => {
        expand = expand === null
            ? menu.getAttribute('aria-expanded') !== 'true'
            : expand;

        menu.setAttribute('aria-expanded', expand);

        if (expand) {
            toggler.classList.add('active');
            menu.children[0].focus();
            document.addEventListener('click', handleClickOut);
            dropDown.dispatchEvent(new Event('opened'));
            document.getElementById("checkDiv").style.marginTop = "30%";
        } else {
            toggler.classList.remove('active');
            dropDown.dispatchEvent(new Event('closed'));
            document.removeEventListener('click', handleClickOut);
            document.getElementById("checkDiv").style.marginTop = "5%";
        }
    }
}

const dropDown = new DropDown(document.querySelector('.dropdown'));

dropDown.element.addEventListener('change', e => {
    console.log('changed', dropDown.value);
});

dropDown.element.addEventListener('opened', e => {
    console.log('opened', dropDown.value);
    document.getElementById("checkDiv").style.marginTop = "30%";
});

dropDown.element.addEventListener('closed', e => {
    console.log('closed', dropDown.value);
    document.getElementById("checkDiv").style.marginTop = "5%";
});

dropDown.toggle();