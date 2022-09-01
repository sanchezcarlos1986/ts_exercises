/* eslint-disable require-jsdoc */

export default class HashTable {
    private size: number
    private table: any[]
    constructor(size: number) {
        this.table = new Array(size)
        this.size = size
    }

    private hash(key: string) {
        let total = 0;
        
        for(let i = 0; i < key.length; i++) {
            total+= (key.charCodeAt(i) * (i+1))
        }
        
        return total % this.size
    }

    set(key:string, value) {
        const index = this.hash(key)

        if (!this.get(key)) {
            return this.table[index] = [index, key, value]
        }
    }

    get(key: string) {
        const index = this.hash(key)
        return this.table[index]
    }

    delete(key: string) {
        const index = this.hash(key)       
        
        if (this.get(key)) {
            return this.table[index] = undefined
        }
    }

    display() {
        console.log('::::: DISPLAY :::::');
        
        for(let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(this.table[i]);
                
            }
        }
    }

}
