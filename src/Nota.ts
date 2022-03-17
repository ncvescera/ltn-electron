export class Nota {
    text: string;
    private elem: HTMLSpanElement;
    room: string;

    constructor(text: string) {
        this.text = text;
        this.elem = document.createElement('span');

        this.elem.classList.add('nota');

        const words = this.text.split(' ');
        this.room = ((this.isRoom(words[0])) ? words[0] : '');  // controlla se è presente la stanza
        const map = words.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()); // dizionario parola: occorrenze


        map.forEach( (value, word) => {
            switch (word) {
                case 'ammo':
                    this.elem.appendChild(this.generateImage('ammo', value));
                    this.text = this.text.replace(word, 'ammo');
                    break;
                
                case 'medic':
                case 'med':
                case 'medkit':
                    this.elem.appendChild(this.generateImage('med', value));
                    this.text = this.text.replace(word, 'med');
                    break;
                
                case 'tool':
                    this.elem.appendChild(this.generateImage('tool', value));
                    this.text = this.text.replace(word, 'tool');
                    break;
                
                case 'disinfect':
                case 'disinfection':
                case 'dis':
                case 'pack':
                    this.elem.appendChild(this.generateImage('disinfect', value));
                    this.text = this.text.replace(word, 'disinfect');
                    break;
                
                default:
                    const text = document.createElement('span');
                    text.textContent = ` ${word} `
                    this.elem.appendChild(text);
            }
        });
    }

    toHtml(): HTMLSpanElement {
        return this.elem;
    }

    private generateImage(type: 'tool'|'ammo'|'med'|'disinfect', value: number): HTMLSpanElement {
        const container = document.createElement('span');
        const text = document.createElement('div');
        const img = document.createElement('img');
        
        img.src = `./icon/gtfoIcons/${type}.png`;
        text.innerText = `x${value}`;
        
        container.classList.add('container');
        img.classList.add('tool');
        text.classList.add('bottom-right');

        img.addEventListener('click', (event: MouseEvent) => {
            if (event.button === 0) {
                let number = parseInt(text.innerText.substring(1)); // elimina il carattere x (e.g. x2) e casta ad int il numero

                if (number != 0) {
                    number--;
                    if (number == 0) {
                        img.classList.add('end');
                    }
                    text.innerText = `x${number}`;
                    this.text = this.text.replace(type, '').replace('  ', ' ');    // elimina la parola dal testo
                    console.log(this.text);
                } 
            }
        })

        container.appendChild(img);
        container.appendChild(text);

        return container;
    }

    private isRoom(room: string): boolean {
        return /^\d+.$/.test(room); // constrolla se la stringa è della forma numeri + singolo carattere
    }
}