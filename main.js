const app = Vue.createApp({ //qua inseriamo il nostro option object
    data(){ //data option che ritornano il valore product
        return{
            product: 'Socks', //Posso anche modificare il valore attuale con un altro e il mio DOM riporta la modifica istantaneamente. Tutto questo è possibile perche Vue ha un sistema reattivo ('Reactivity System')
            description: 'Perfect for the winter',
            image :'./assets/images/socks_green.jpg',
            // url: 'http://www.google.it'
            inStock: true, // CONDIZIONE V-IF: assegno un valore booleano 'true'. Se lo imposto su false, nel DOM verrà mostrata l'opzione per cui verrà visualizzato il tag p con condizione v-else.
            
        }
    }
})
