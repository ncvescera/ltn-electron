class Nota {
    text;
    elem;

    constructor(text) {
        this.text = text;
        this.elem = document.createElement('span');

        this.elem.classList.add('nota');

        const words = this.text.split(' ');
        const map = words.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()); // dizionario parola: occorrenze


        map.forEach( (value, word) => {
            switch (word) {
                case 'ammo':
                    this.elem.appendChild(this.#generateImage('ammo', value));
                    break;
                
                case 'medic':
                case 'med':
                case 'medkit':
                    this.elem.appendChild(this.#generateImage('med', value));
                    break;
                
                case 'tool':
                    this.elem.appendChild(this.#generateImage('tool', value));
                    break;
                
                case 'disinfect':
                case 'disinfection':
                case 'dis':
                case 'pack':
                    this.elem.appendChild(this.#generateImage('disinfect', value));
                    break;
                
                default:
                    const text = document.createElement('span');
                    text.textContent = ` ${word} `
                    this.elem.appendChild(text);
            }
        });

        

        // for right click
        this.elem.addEventListener('contextmenu', (event) => {
            this.#manageNote(this, event);
        })

        // for left click
        this.elem.addEventListener('click', (event) => {
            this.#manageNote(this, event);
        })
    }

    toHtml() {
        return this.elem;
    }

    #generateImage(type, value) {
        const container = document.createElement('span');
        const text = document.createElement('div');
        const img = document.createElement('img');
        
        img.src = `./assets/icon/gtfoIcons/${type}.png`;
        text.innerText = `x${value}`;
        
        container.classList.add('container');
        img.classList.add('tool');
        text.classList.add('bottom-right');

        img.addEventListener('click', (event) => {
            if (event.button === 0) {
                let number = parseInt(text.innerText.substring(1));

                if (number != 0) {
                    number--;
                    if (number == 0) {
                        img.classList.add('end');
                    }
                    text.innerText = `x${number}`;
                } 
            }
        })

        container.appendChild(img);
        container.appendChild(text);

        return container;
    }

    #manageNote(note, event) {
        console.log('Managing note');
        //console.log(note.textContent);
        console.log(note.text);
    
        switch (event.button) {
            case 0:
                /*
                console.log('Left click');
                note.classList.toggle('barred');
                */
                break;
            case 1:
                console.log('Middle click');
                break;
            case 2:
                console.log('Right click');
                note.elem.remove();
                break;
        }
    }
}
