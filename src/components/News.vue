<template> 
  <div>
    <ul class="p-10">
        <li v-for="news in news" :key="news.guid" class="card group list-none text-[rgba(0,0,0,0.802)] mt-10 mx-auto p-5 bg-[rgba(225,199,255,0.516)] block w-1/2 rounded-[20px] animated fadeInRightBig  transform scale-100  ease duration-300 hover:bg-[rgb(225,199,255)] hover:shadow-DEFAULT">
            <div class="newsCard  flex flex-col justify-between">
                <h2 class="transform scale-100 transition ease duration-300 group-hover:text-black group-hover:scale-105 ">{{ news.title }}</h2>
                <img :src=news.thumbnail :alt=news.title class="image w-[60%] h-[40%] my-[5px] mx-auto opacity-90 rounded-[5px] transition ease duration-300 group-hover:opacity-100">
                <a :href= news.link  target="_blank" class="block mt-2 transform scale-100 transition ease duration-300 group-hover:scale-105 group-hover:text-shadow-3xl no-underline font-bold text-2xl text-[blueviolet] hover:text-[rgb(0,0,209)] hover:text-shadow-2xl">{{ $t('message.newsFullText') }}</a>
                <p>{{ $t('message.publishedAt') }}: {{ news.pubDate }}</p>
            </div>
            
        </li>
    </ul>
  </div>
  <div>
    <i18n-d tag="h3" :value="new Date()" :format="{ year: 'numeric', month: 'long', key: 'long'}">
        <template #year="$props">
            <span style="font-weight: bold; color: red;">{{ $props.year }}</span>
        </template>
    </i18n-d>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            news: [],
            data: ''
        }
    },
    methods: {
        async fetchData(){
            try{
                const response = await axios.get('https://api.rss2json.com/v1/api.json', {
                    params: {
                        rss_url: 'https://www.zoomit.ir/feed/'
                    }
                })
                this.news = response.data.items
                console.log(this.news)
            }catch(err){
                console.log(err)
            }
        }
    },
    mounted(){
        this.fetchData()
    }
}
</script>

<style>
    /* a {
        text-decoration: none;
        font-weight: bold;
        color:blueviolet;
        font-size: 1.5em;
    }
    a:hover {
        color: rgb(0, 0, 209);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.196);
    }
    .list { 
        list-style: none;
    }
    .card {
        color:rgba(0, 0, 0, 0.802);
        margin: 40px auto;
        padding: 20px;
        background-color: rgba(225, 199, 255, 0.516);
        display: block;
        width: 50%;
        border-radius: 20px;
    }
    

    ul{
        padding: 40px;
    }



.card:hover{
    background-color: rgb(225, 199, 255);
    transition: ease 0.3s;
    box-shadow: 6px 6px 17px #111111e9;
}
.card:not(:hover){
    box-shadow: none;
    transform: scale(1);
    transition: ease 0.3s;
}
.card:hover h2{
    color: black;
    text-shadow: 6px 6px 8px #11111134;
    transform: scale(1.05);
    transition: ease 0.3s;
}
.card:hover a{
    text-shadow: 6px 6px 8px #11111124;
    transform: scale(1.05);
    transition: ease 0.3s;
}
.card:not(:hover) h2{
    transform: scale(1);
    transition: ease 0.3s;
}
.card:not(:hover) a{
    transform: scale(1);
    transition: ease 0.3s;
}

.newsCard{
    display: flex;
    flex-direction: column;
    justify-items: space-between;
}
.card:hover .image{
    opacity: 1;
    transition: ease 0.3;
}
.image{
    width: 60%;
    height: 40%;
    margin: 5px auto;
    opacity: 0.9;
    border-radius: 5px;
} */

/* @layer base {
    
  h2 {
    font-size: 1.5em;
    margin: 0.83em 0;
    font-weight: 700;
  }
  a {
    margin: 10px;
  }
  p {
    margin: 10px;
  }
} */
 
@layer base{
    h2{
        font-size: 1.5em;
        margin: 0.83em 0;
        font-weight: 700;
    }
    a{
        margin: 10px;
    }
    p{
        margin: 10px;
    }
}


</style>