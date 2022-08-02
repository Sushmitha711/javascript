let user=[{"id":1,"Name":"Magdalena","email":"mstachini0@csmonitor.com","gender":"Female"},
{"id":2,"Name":"Ignaz","email":"iminithorpe1@storify.com","gender":"Male"},
{"id":3,"Name":"Ardene","email":"adyke2@delicious.com","gender":"Polygender"},
{"id":4,"Name":"Frannie","email":"fdovington3@paypal.com","gender":"Female"},
{"id":5,"Name":"Quintus","email":"qbolduc4@netscape.com","gender":"Male"},
{"id":6,"Name":"Tobin","email":"taird5@unblog.fr","gender":"Male"},
{"id":7,"Name":"Neale","email":"nverrillo6@amazon.com","gender":"Male"},
{"id":8,"Name":"Lucien","email":"lhewson7@dailymotion.com","gender":"Male"},
{"id":9,"Name":"Melvyn","email":"mflinders8@twitter.com","gender":"Male"},
{"id":10,"Name":"Erich","email":"espurdle9@acquirethisname.com","gender":"Bigender"}];


let user_Details=()=>{
    let rows=""
    user.map((u) => {
        rows = rows +`<tr>
        <td>${u.id}</td>
        <td>${u.Name}</td>
        <td>${u.email}</td>
        <td>${u.gender}</td>
        </tr>`
        
    })
    document.getElementById("tbody_data").innerHTML=rows
}