const { createApp } = Vue

createApp({
data() {
    return {
    poppyArr:[
        '../img/poppy1.jpg',
        '../img/poppy2.jpg',
        '../img/poppy3.jpg',
        '../img/poppy4.jpg'],
    index: 0,
    }
}, 
methods: {
    previous() {
        this.index--;
    },
    next() {
        this.index++;
    },
    mouseOver() {
        if(this.index <= 0) {
            this.index = 0;
        } else {
            this.index--;
        }
    },
    mouseLeave() {
        this.index++;
    }
}
}).mount('#app')