<script>
// import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'

// import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import './style.css'

// import required modules
// import { RouterLink } from 'vue-router';
import { Autoplay } from 'swiper/modules'
import { mapActions } from 'pinia';
import cartStore from '@/stores/cart.js';

    //1.取得單一產品
    //2.渲染到畫面
    //3.加入購物車
const {VITE_URL, VITE_PATH} = import.meta.env;
export default{
    data(){
        return{
            product:[],
            products:[]
        }
    },
    components:{
     
      Swiper,
      SwiperSlide
      
    },setup () {
      return {
      modules: [Autoplay]
      }
    },  
    methods:{
      getProducts(){
            this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
            .then(res=>{
                this.products =res.data.products
               
            })
        },
        getProduct(){
            
            const { id } = this.$route.params;
            this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
            .then(res=>{
                this.product =res.data.product
            })
        },
        newProduct(id){
          this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
            .then(res=>{
                this.product =res.data.product
          })
        },
        ...mapActions(cartStore,['addToCart']),

    },
    mounted (){
        this.getProduct(),
        this.getProducts()
        console.log(this.$route)
    }
}
</script>



<template>
    
      <div class="container">
        <div class="row align-items-center mt-4" data-aos="fade-up">
        <div class="col-md-8 " >
          <img :src="product.imageUrl" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 detail-product">
          <div class="d-flex align-items-center ">
            <h2 class="fw-bold h1 mb-5 ">{{ product.title }}</h2>
            <p class="h4 fw-bold text-end mb-5">NT{{ product.price }}</p>
          </div>
          
          <div class="row align-items-center">
            <div class="col-md-6">
              <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2 "
                @click.prevent="()=>addToCart(product.id)">加入購物車
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    
    
    <section class="pt-5  " data-aos="fade-up">
        <h2 class="text-center pb-5">熱銷商品</h2>
        <div class="container">
          <div class="row">
            <swiper :spaceBetween="30"  :loop="true" :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false,}" :modules="modules"  @autoplayTimeLeft="onAutoplayTimeLeft" :breakpoints="{
      '640': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }" class="mySwiper">
              <swiper-slide v-for="product in products " :key="product.id" >
                <div class="w-100">
                  <div class="card border-0  position-relative  ">
                    <a href="#" @click.prevent="()=>newProduct(product.id)">
                       <!-- <RouterLink @click.prevent="()=>newProduct(product.id)"> -->
                        <img :src="product.imageUrl" class="card-img-top rounded-0 object-cover " height="300" alt="...">
                      <div class="content position-absolute d-flex justify-content-center align-items-center">
                        <h1>商品資訊</h1>
                      </div>
                    <!-- </RouterLink> -->
                    </a>
                   
                  </div>
                  <div class="card-body pt-0 mb-6 bg-primary ">
                    <h4 class="mb-2 pt-3 text-center">
                        {{ product.title }}
                    </h4>
                    <p class="card-text mb-2 text-center">NT$ {{ product.price }}</p>
                    <a href="#" class="text-nowrap btn btn-dark w-100 py-2 vl-parent "  
                      @click.prevent="()=>addToCart(product.id)">加入購物車
                    </a>
                </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
    </section>
</template>