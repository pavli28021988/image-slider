(function(){

    const pictures = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6"
    ]

    const buttons = document.querySelectorAll('.btn');
    const imgContainer = document.querySelector('.img-container');
    let counter=0;

    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{

            if(button.classList.contains('btn-left')){
                counter--;
                if(counter < 0){
                    counter = pictures.length-1;
                }

                imgContainer.style.background = `url('img/${pictures[counter]}.avif')center center/cover  no-repeat`
            }

            if(button.classList.contains('btn-right')){
                counter++;
                if(counter > pictures.length-1){
                   counter = 0;
                }

                imgContainer.style.background = `url('img/${pictures[counter]}.avif') center center/cover  no-repeat`
            }


        })
    })




})();