class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
        //console.log("KonyvModel");
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log('Success:', data);
                this.#konyvekTomb = data;
                //console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    adatModosit(adat) {
        console.log("módosítok!", adat);
        vegpont += fetch(vegpont, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("módosítok")data.up
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    adatTorol(adat) {
        console.log("törlök!", adat);
        method: "delete";
    }
}

export default KonyvModel;
