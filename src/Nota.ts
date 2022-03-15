export class Nota {
    text: string;
    elem: HTMLSpanElement;

    constructor(text: string) {
        this.text = text;
        this.elem = document.createElement('span');
        
        this.elem.classList.add('nota');

        const words = this.text.split(' ');
        words.forEach(word => {
            switch (word) {
                case 'ammo':
                    this.elem.appendChild(this.generateImage('ammo'));
                    break;
                
                case 'medic':
                case 'med':
                case 'medkit':
                    this.elem.appendChild(this.generateImage('med'));
                    break;
                
                case 'tool':
                    this.elem.appendChild(this.generateImage('tool'));
                    break;
                
                case 'disinfect':
                case 'disinfection':
                case 'dis':
                case 'pack':
                    this.elem.appendChild(this.generateImage('disinfect'));
                    break;
                
                default:
                    const text = document.createElement('span');
                    text.textContent = ` ${word} `
                    this.elem.appendChild(text);
            }
        });

        

        // for right click
        this.elem.addEventListener('contextmenu', (event: MouseEvent) => {
            this.manageNote(this.elem, event);
        })

        // for left click
        this.elem.addEventListener('click', (event: MouseEvent) => {
            this.manageNote(this.elem, event);
        })
    }

    toHtml(): HTMLSpanElement {
        return this.elem;
    }

    private generateImage(type: 'tool'|'ammo'|'med'|'disinfect'): HTMLImageElement {
        const img = document.createElement('img');
        img.src = `./gtfoIcons/${type}.png`;
        img.classList.add('tool');
    
        return img
    }

    private manageNote(note: HTMLSpanElement, event: MouseEvent): void {
        console.log('Managing note');
        console.log(note.textContent);
    
        switch (event.button) {
            case 0:
                console.log('Left click');
                note.classList.toggle('barred');
    
                break;
            case 1:
                console.log('Middle click');
                break;
            case 2:
                console.log('Right click');
                //notes.removeChild(note);
                this.elem.remove();
                break;
        }
    }
}