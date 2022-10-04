console.log('Enter a number')
window.alert('number')

alert(4)


class Luggage {
    constructor(weight, ticket_number) {
        this.weight = weight;
        this.ticket_number = ticket_number;
    }

    luggage() {

        this.weight = Math.random() % 20 + 1;
        this.ticket_number = Math.random();
    }

    getWeight() {
        return this.weight;
    }

    getTicket_number() {
        return this.ticket_number;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    setTicket_number(ticket_number) {
        this.ticket_number = ticket_number;
    }
}

class LuggageDepartment {
    constructor(size, passengers) {
        this.size = 100;
        this.passengers = new Luggage([this.size]);
    }

        is_available(ticket_number){
        for (let i=0; i<100; i++){
            if(this.passengers[i].getTicket_number()===ticket_number){
                return true;
            }
        }
        return false;
    }
    getAllPassengers(){
        let B = [this.size]
        for (let i=0;i<100;i++){
            B[i]=this.passengers[i].getTicket_number();
            console.log(this.passengers[i].getTicket_number())
        }
        return B;
    }
}



for (let i =0 ;i<100;i++){
    console.log(LuggageDepartment.getAllPassengers()[i])
}
console.log('Enter a number')
document.write()




