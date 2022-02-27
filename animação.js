function pokemon(){
    let url1 = "https://pokeapi.co/api/v2/pokemon/1"
    let url2 = "https://pokeapi.co/api/v2/pokemon/2"
    let url3 = "https://pokeapi.co/api/v2/pokemon/3"
    let url4 = "https://pokeapi.co/api/v2/pokemon/4"
    let url5 = "https://pokeapi.co/api/v2/pokemon/5"
    let url6 = "https://pokeapi.co/api/v2/pokemon/6"
    let url7 = "https://pokeapi.co/api/v2/pokemon/7"
    let url8 = "https://pokeapi.co/api/v2/pokemon/8"
    let url9 = "https://pokeapi.co/api/v2/pokemon/9"
    let url10 = "https://pokeapi.co/api/v2/pokemon/10"
    let url11 = "https://pokeapi.co/api/v2/pokemon/11"
    let url12 = "https://pokeapi.co/api/v2/pokemon/12"
    let url13 = "https://pokeapi.co/api/v2/pokemon/13"
    let url14 = "https://pokeapi.co/api/v2/pokemon/14"
    let url15 = "https://pokeapi.co/api/v2/pokemon/15"
    let url16 = "https://pokeapi.co/api/v2/pokemon/16"
    let url17 = "https://pokeapi.co/api/v2/pokemon/17"
    let url18 = "https://pokeapi.co/api/v2/pokemon/18"
    let url19 = "https://pokeapi.co/api/v2/pokemon/19"
    let url20 = "https://pokeapi.co/api/v2/pokemon/20"
    let url21 = "https://pokeapi.co/api/v2/pokemon/21"
    let url22 = "https://pokeapi.co/api/v2/pokemon/22"
    let url23 = "https://pokeapi.co/api/v2/pokemon/23"
    let url24 = "https://pokeapi.co/api/v2/pokemon/24"
    let url25 = "https://pokeapi.co/api/v2/pokemon/25"
    let url26 = "https://pokeapi.co/api/v2/pokemon/26"
    let url27 = "https://pokeapi.co/api/v2/pokemon/27"
    let url28 = "https://pokeapi.co/api/v2/pokemon/28"
    let url29 = "https://pokeapi.co/api/v2/pokemon/29"
    let url30 = "https://pokeapi.co/api/v2/pokemon/30"
    let url31 = "https://pokeapi.co/api/v2/pokemon/31"
    let url32 = "https://pokeapi.co/api/v2/pokemon/32"
    let url33 = "https://pokeapi.co/api/v2/pokemon/33"
    let url34 = "https://pokeapi.co/api/v2/pokemon/34"
    let url35 = "https://pokeapi.co/api/v2/pokemon/35"
    let url36 = "https://pokeapi.co/api/v2/pokemon/36"
    let url37 = "https://pokeapi.co/api/v2/pokemon/37"
    let url38 = "https://pokeapi.co/api/v2/pokemon/38"
    let url39 = "https://pokeapi.co/api/v2/pokemon/39"
    let url40 = "https://pokeapi.co/api/v2/pokemon/40"
    fetch(url1)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome1").innerHTML = data["name"]
        document.getElementById("numero1").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic1").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url2)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome2").innerHTML = data["name"]
        document.getElementById("numero2").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic2").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url3)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome3").innerHTML = data["name"]
        document.getElementById("numero3").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic3").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url4)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome4").innerHTML = data["name"]
        document.getElementById("numero4").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic4").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url5)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome5").innerHTML = data["name"]
        document.getElementById("numero5").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic5").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url6)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome6").innerHTML = data["name"]
        document.getElementById("numero6").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic6").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url7)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome7").innerHTML = data["name"]
        document.getElementById("numero7").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic7").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url8)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome8").innerHTML = data["name"]
        document.getElementById("numero8").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic8").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url9)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome9").innerHTML = data["name"]
        document.getElementById("numero9").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic9").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url10)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome10").innerHTML = data["name"]
        document.getElementById("numero10").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic10").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url11)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome11").innerHTML = data["name"]
        document.getElementById("numero11").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic11").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url12)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome12").innerHTML = data["name"]
        document.getElementById("numero12").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic12").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url13)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome13").innerHTML = data["name"]
        document.getElementById("numero13").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic13").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url14)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome14").innerHTML = data["name"]
        document.getElementById("numero14").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic14").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url15)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome15").innerHTML = data["name"]
        document.getElementById("numero15").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic15").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url16)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome16").innerHTML = data["name"]
        document.getElementById("numero16").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic16").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url17)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome17").innerHTML = data["name"]
        document.getElementById("numero17").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic17").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url18)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome18").innerHTML = data["name"]
        document.getElementById("numero18").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic18").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url19)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome19").innerHTML = data["name"]
        document.getElementById("numero19").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic19").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url20)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome20").innerHTML = data["name"]
        document.getElementById("numero20").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic20").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url21)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome21").innerHTML = data["name"]
        document.getElementById("numero21").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic21").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url22)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome22").innerHTML = data["name"]
        document.getElementById("numero22").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic22").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url23)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome23").innerHTML = data["name"]
        document.getElementById("numero23").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic23").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url24)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome24").innerHTML = data["name"]
        document.getElementById("numero24").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic24").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url25)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome25").innerHTML = data["name"]
        document.getElementById("numero25").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic25").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url26)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome26").innerHTML = data["name"]
        document.getElementById("numero26").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic26").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url27)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome27").innerHTML = data["name"]
        document.getElementById("numero27").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic27").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url28)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome28").innerHTML = data["name"]
        document.getElementById("numero28").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic28").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url29)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome29").innerHTML = data["name"]
        document.getElementById("numero29").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic29").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url30)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome30").innerHTML = data["name"]
        document.getElementById("numero30").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic30").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url31)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome31").innerHTML = data["name"]
        document.getElementById("numero31").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic31").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url32)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome32").innerHTML = data["name"]
        document.getElementById("numero32").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic32").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url33)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome33").innerHTML = data["name"]
        document.getElementById("numero33").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic33").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url34)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome34").innerHTML = data["name"]
        document.getElementById("numero34").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic34").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url35)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome35").innerHTML = data["name"]
        document.getElementById("numero35").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic35").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url36)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome36").innerHTML = data["name"]
        document.getElementById("numero36").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic36").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url37)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome37").innerHTML = data["name"]
        document.getElementById("numero37").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic37").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url38)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome38").innerHTML = data["name"]
        document.getElementById("numero38").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic38").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url39)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome39").innerHTML = data["name"]
        document.getElementById("numero39").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic39").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
    fetch(url40)
    .then((response)=>{
        return response.json();
    })
    .then((data) =>{
        console.clear()
        console.log(data);
        document.getElementById("nome40").innerHTML = data["name"]
        document.getElementById("numero40").innerHTML = data["id"]
        let img = data["sprites"]["front_default"]
        document.getElementById("pic40").setAttribute("src",img)
    })
    .catch((erro) => {
        console.log("erro"+ erro)
    })
}
pokemon()