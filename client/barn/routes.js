const getCows = async() => {
    let id = localStorage.getItem("username");
    let cowArray = [];
    let display = document.querySelector('#display')
    await axios.get(`/users/get-cows/${id}`).then((res) => {
        let cowString = JSON.stringify(res.data);
        let cowList = JSON.parse(cowString);
        for (i = 0; i < cowList.length; i++){
                let cowText = document.createElement('p')
                let cowImg = document.createElement('img')
                cowImg.setAttribute("class", "cowImg")
                cow = cowList[i]
                console.log(cow);
                cowText.textContent = `${cow._id} is ${cow.age} years old. They are rated ${cow.rarity}/5 for rarity and cost ${cow.cost}cp`
                cowImg.src = cow.image;
                display.append(cowImg);
                display.append(cowText);
            }
    })
}