const getCows = async() => {
    let id = localStorage.getItem("username");

    let display = document.querySelector('#display')
    await axios.get(`/users/get-cows/${id}`).then((res) => {
        let cowString = JSON.stringify(res.data);
        let cowList = JSON.parse(cowString);
        for (i = 0; i < cowList.length; i++){
            let cowObj;
            cow = cowList[i]
            cowObj = {
                name: cow._id,
                age: cow.age,
                cost: cow.cost,
                rarity: cow.rarity,
                image: cow.image
            }
            cowArray.push(cowObj)
        }
        console.log(cowArray);
        cowArray.forEach((cow, i) => {
            let title = document.createElement('h5')
            title.style.fontSize = "large";
            title.style.marginBottom = "0";
            title.style.marginTop = "0";
            title.style.fontWeight = 'lighter';
            let age = document.createElement('h6')
            age.style.fontSize = "small"
            age.style.marginBottom = "0";
            age.style.marginTop = "0";
            age.style.fontWeight = 'lighter';
            let cost = document.createElement('h6')
            cost.style.fontSize = "small"
            cost.style.marginBottom = "0";
            cost.style.marginTop = "0";
            cost.style.fontWeight = 'lighter';
            title.textContent = `${cow.name}`
            age.textContent = `${cow.age} years old`
            cost.textContent = `CP${cow.cost} | ${cow.rarity}`
            let details = document.createElement('div')
            details.append(title)
            details.append(age)
            details.append(cost)
            let X_range = 50 + (Math.random()*880);
            let Y_range = (Math.random()*350)+150;
            COWS.push(new Cow({
                position: {
                    x: X_range,
                    y: Y_range
                },
                image: cowImage
            }))
            details.style.position = 'absolute';
            details.style.left = `${X_range+15}px`;
            details.style.top = `${Y_range-30}px`;
            details.style.height = 'fit-content';
            details.style.color = 'white';
            details.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            details.style.borderRadius = '10px';
            details.style.padding = "5px"
            details.style.textAlign = 'center';
            details.style.pointerEvents = "all";
            details.addEventListener("mouseover", function(e){
                title.style.fontSize = "x-large";
                age.style.fontSize = "larger";
                cost.style.fontSize = "larger";
                details.style.backgroundColor = "rgba(0, 0, 0, 1)";
                details.style.left = `${X_range}px`;
                details.style.top = `${Y_range-50}px`;
            })
            details.addEventListener("mouseleave", function(e){
                title.style.fontSize = "large";
                age.style.fontSize = "small";
                cost.style.fontSize = "small";
                details.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                details.style.left = `${X_range+15}px`;
                details.style.top = `${Y_range-30}px`;
            })
            container.append(details)
            console.log(cow.name);
        })
    })
}