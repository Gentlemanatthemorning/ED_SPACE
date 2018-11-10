function mainX (){

    const $main = $(".main__logo__symbol");
    const $text = $(".main__logo__text")
    $text.hide()
    
    $main.on("click", function(){
        console.log('yes');
        $text.slideToggle();
    })

}
export {mainX}