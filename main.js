const app = Vue.createApp({ //qua inseriamo il nostro option object
    data(){ //data option che ritornano il valore product
        return{
            product: 'Socks', //Posso anche modificare il valore attuale con un altro e il mio DOM riporta la modifica istantaneamente. Tutto questo è possibile perche Vue ha un sistema reattivo ('Reactivity System')
            description: 'Perfect for the winter',
            image :'./assets/images/socks_green.jpg',
            // url: 'http://www.google.it'
            inStock: true, // CONDIZIONE V-IF: assegno un valore booleano 'true'. Se lo imposto su false, nel DOM verrà mostrata l'opzione per cui verrà visualizzato il tag p con condizione v-else.
            //CONDIZIONE V-SHOW: Se imposto il valore booleano su 'false', nel DOM verrà visualizzato un 'display: none' relativo al valore, quindi verrà solo reso invisibile.
            // inventory: 0, //8 //100 //CONDIZIONE V-ELSE-IF: Aggiungo questo dato per aggiungere un altro livello di condizoone logica. Se setto il valore a 100 a condizione sarà vera e quindi visualizzarò 'In Stock'. Se modifico da 100 a 8, stando alla condizoone logica che abbiamo riportato nel DOM, dovremmo visualizzare 'Almost sold out' oppure 'Out of Stock' se settiamo il valore a 0.
            details: ['50% cotton', '30% wool', '20% polyester'], //Array da mostrare come lista
            variants: [ //Array di oggetti
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ]
            
        }
    }
})
