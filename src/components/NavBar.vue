<template>
    <nav class="nav animated fadeInRightBig flex justify-between bg-[rgba(225,199,255,0.516)] my-[15px] mx-auto w-[98%] h-[8vh] rounded-[15px] shadow-DEFAULT">
        <div class="lang flex items-center">
            <select name="language" id="language" class="my-auto mr-[2.5vw] ml-[1vw] text-[1.5em] h-[5vh]" v-model="$i18n.locale">
                <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="text-center">{{ locale }}</option>
            </select>
            <span class="text-[1.5em]"> : {{ $t("message.language") }}</span>
        </div>
        <div class="links flex justify-between items-center basis-[20%]">
            <a href="#contact" class="block no-underline font-bold text-2xl text-[blueviolet] hover:text-[rgb(0,0,209)] hover:text-shadow-2xl">{{ $t("message.nav.contact") }}</a>
            <a href="#about" class="block no-underline font-bold text-2xl text-[blueviolet] hover:text-[rgb(0,0,209)] hover:text-shadow-2xl">{{ $t("message.nav.about") }}</a>
            <a href="#home" class="ml-[3vw] last:ml-[2.5vw] block no-underline font-bold text-2xl text-[blueviolet] hover:text-[rgb(0,0,209)] hover:text-shadow-2xl">{{ $t("message.nav.home") }}</a>
        </div>
    </nav>
  
</template>

<script>
export default {
    
}
</script>

<style>
/* .nav{
    display: flex;
    justify-content: space-between;
    background-color:  rgba(225, 199, 255, 0.516);
    margin: 15px auto;
    width: 98%;
    height: 8vh;
    border-radius: 15px;
    box-shadow: 6px 6px 17px #111111e9;

}
.links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 20%;
}
.links :last-child{
    margin-left: 2.5vw;
}
.links a{
    margin-left: 3vw;
}
.lang{
    display: flex;
    align-items: center;
}
#language{
    margin: auto 2.5vw auto 1vw;
    font-size: 1.5em;
    height: 5vh;
}
.lang span{
    font-size: 1.5em;
}
#language option{
    text-align: center;
} */



</style>