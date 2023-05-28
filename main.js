const app = Vue.createApp({ //qua inseriamo il nostro 'option object'
    data(){ //I 'data option' ritornano i valori che assegniamo all'interno
        return{
            cart: 0,
            product: 'Socks', //Posso anche modificare il valore attuale con un altro e il mio DOM riporta la modifica istantaneamente. Tutto questo è possibile perche Vue ha un sistema reattivo ('Reactivity System')
            description: 'Perfect for the winter',
            image :'./assets/images/socks_green.jpg', //Percorso per assegnare un'immagine che verrà poi riportata nel DOM utilizzando un v-bind sull'attributo src (:src)
            // url: 'http://www.google.it'
            inStock: false, // CONDIZIONE V-IF: assegno un valore booleano 'true'. Se lo imposto su false, nel DOM verrà mostrata l'opzione per cui verrà visualizzato il tag <p> con condizione v-else.
            //CONDIZIONE V-SHOW: Se imposto il valore booleano su 'false', nel DOM verrà visualizzato un 'display: none' relativo al valore, quindi verrà solo reso invisibile.
            // inventory: 0, //8 //100 //CONDIZIONE V-ELSE-IF: Aggiungo questo dato per aggiungere un altro livello di condizoone logica. Se setto il valore a 100 la condizione sarà vera e quindi visualizzerò 'In Stock'. Se modifico da 100 a 8, stando alla condizoone logica che abbiamo riportato nel DOM, dovremmo visualizzare 'Almost sold out' oppure 'Out of Stock' se settiamo il valore a 0.
            details: ['50% cotton', '30% wool', '20% polyester'], //Array da mostrare come lista => vedere <ul> e <li> in Html
            variants: [ //Array di oggetti
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}, //Aggiungo delle varianti per i percorsi immagine
            ],
            
        }
    },
    methods: {
        addToCart(){ //metodo
            this.cart += 1 //si riferisce al nostro object data. Gli attribuiamo la stessa espressione che avevamo riportato nel DOM per fargli incrementare il giro di 1 ogni volta che clicco il <button>.
        },
        updateImage(variantImage){ //Settiamo il valore che si riferisce al percordo originale di "image" specificato nei data object
            this.image = variantImage
        }
    }
})
