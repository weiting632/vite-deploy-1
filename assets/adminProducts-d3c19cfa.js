import{_ as y,o as d,c as i,d as t,F as _,h as g,g as n,v as c,J as k,k as P,t as u}from"./index-7b76da7e.js";const{VITE_URL:m,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"tomyalan978",BASE_URL:"/vite-deploy-1",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let b={},h={};const U={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1}},methods:{getProducts(){const l=`${m}api/${p}/admin/products/all`;this.$http.get(l).then(e=>{this.products=e.data.products}).catch(e=>{console.log(e.data.message)})},openModal(l,e){l==="create"?(b.show(),this.isNew=!0,this.tempProduct={imagesUrl:[]}):l==="edit"?(b.show(),this.isNew=!1,this.tempProduct={...e}):l==="delete"&&(h.show(),this.tempProduct={...e})},updateProduct(){let l=`${m}v2/api/${p}/admin/product`,e="post";this.isNew||(l=`${m}api/${p}/admin/product${this.tempProduct.id}`,e="put"),this.$http[e](l,{data:this.tempProduct}).then(()=>{this.getProducts(),b.hide()})},deleteProduct(){const l=`${m}v2/api/${p}/admin/product/${this.tempProduct.id}`;this.$http.delete(l).then(()=>{this.getProducts(),h.hide()})},deleteAllOrder(){this.$http.delete(`${m}v2/api/${p}/admin/orders/all`).then(l=>{console.log(l)})}},mounted(){var e;const l=(e=document.cookie.split("; ").find(f=>f.startsWith("allenToken=")))==null?void 0:e.split("=")[1];this.$http.defaults.headers.common.Authorization=l,this.getProducts(),h=new bootstrap.Modal(document.getElementById("delProductModal"),{keyboard:!1}),b=new bootstrap.Modal(document.getElementById("productModal"),{keyboard:!1})}},w={class:"container"},x={class:"text-end mt-4"},M={class:"table mt-4"},V=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100",class:""}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),C={class:""},E={class:""},A={key:0,class:"text-success"},T={key:1},I={class:"btn-group"},L=["onClick"],N=["onClick"],B={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},D={class:"modal-dialog modal-xl"},O={class:"modal-content border-0"},R={class:"modal-header bg-dark text-white"},S={id:"productModalLabel",class:"modal-title"},F={key:0},H={key:1},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},W={class:"row"},j={class:"col-sm-4"},q={class:"mb-3"},G=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),K=["src"],Q=t("h3",{class:"mb-3"},"多圖新增",-1),X={key:0},Y={class:"mb-3"},Z=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),$=["onUpdate:modelValue"],tt=["src"],et={key:0},ot={key:1},st={key:1},lt={class:"col-sm-8"},dt={class:"mb-3"},it=t("label",{for:"title",class:"form-label"},"標題",-1),nt={class:"row"},rt={class:"mb-3 col-md-6"},ct=t("label",{for:"category",class:"form-label"},"分類",-1),at={class:"mb-3 col-md-6"},ut=t("label",{for:"price",class:"form-label"},"單位",-1),mt={class:"row"},pt={class:"mb-3 col-md-6"},bt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"mb-3 col-md-6"},ht=t("label",{for:"price",class:"form-label"},"售價",-1),ft=t("hr",null,null,-1),gt={class:"mb-3"},Pt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},yt=t("label",{for:"content",class:"form-label"},"說明內容",-1),kt={class:"mb-3"},Ut={class:"form-check"},wt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xt={class:"modal-footer"},Mt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Vt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ct={class:"modal-dialog"},Et={class:"modal-content border-0"},At=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Tt={class:"modal-body"},It={class:"text-danger"},Lt={class:"modal-footer"},Nt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Bt(l,e,f,Dt,s,r){return d(),i(_,null,[t("div",w,[t("div",x,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>r.openModal("create"))}," 建立新的產品 "),t("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=(...o)=>r.deleteAllOrder&&r.deleteAllOrder(...o))}," 刪除所有訂單 ")]),t("table",M,[V,t("tbody",null,[(d(!0),i(_,null,g(s.products,o=>(d(),i("tr",{key:o.id},[t("td",null,u(o.category),1),t("td",null,u(o.title),1),t("td",C,u(o.origin_price),1),t("td",E,u(o.price),1),t("td",null,[o.is_enabled?(d(),i("span",A,"啟用")):(d(),i("span",T,"未啟用"))]),t("td",null,[t("div",I,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:a=>r.openModal("edit",o)}," 編輯 ",8,L),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:a=>r.openModal("delete",o)}," 刪除 ",8,N)])])]))),128))])])]),t("div",B,[t("div",D,[t("div",O,[t("div",R,[t("h5",S,[s.isNew?(d(),i("span",F,"新增產品")):(d(),i("span",H,"編輯產品"))]),z]),t("div",J,[t("div",W,[t("div",j,[t("div",q,[G,n(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.tempProduct.imagesUrl=o),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[c,s.tempProduct.imagesUrl]]),t("img",{class:"img-fluid",src:s.tempProduct.imagesUrl},null,8,K)]),Q,Array.isArray(s.tempProduct.imagesUrl)?(d(),i("div",X,[(d(!0),i(_,null,g(s.tempProduct.imagesUrl,(o,a)=>(d(),i("div",{class:"mb-1",key:a},[t("div",Y,[Z,n(t("input",{"onUpdate:modelValue":v=>s.tempProduct.imagesUrl[a]=v,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,$),[[c,s.tempProduct.imagesUrl[a]]])]),t("img",{class:"img-fluid",src:o},null,8,tt)]))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(d(),i("div",et,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(d(),i("div",ot,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[4]||(e[4]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(d(),i("div",st,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=(...o)=>l.createImages&&l.createImages(...o))}," 新增圖片 ")]))]),t("div",lt,[t("div",dt,[it,n(t("input",{id:"title","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[c,s.tempProduct.title]])]),t("div",nt,[t("div",rt,[ct,n(t("input",{id:"category","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[c,s.tempProduct.category]])]),t("div",at,[ut,n(t("input",{id:"unit","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.unit=o),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[c,s.tempProduct.unit]])])]),t("div",mt,[t("div",pt,[bt,n(t("input",{id:"origin_price","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[c,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",_t,[ht,n(t("input",{id:"price","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[c,s.tempProduct.price,void 0,{number:!0}]])])]),ft,t("div",gt,[Pt,n(t("textarea",{id:"description","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.description=o),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
                  `,512),[[c,s.tempProduct.description]])]),t("div",vt,[yt,n(t("textarea",{id:"description","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
                  `,512),[[c,s.tempProduct.content]])]),t("div",kt,[t("div",Ut,[n(t("input",{id:"is_enabled","onUpdate:modelValue":e[13]||(e[13]=o=>s.tempProduct.is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[k,s.tempProduct.is_enabled]]),wt])])])])]),t("div",xt,[Mt,t("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=(...o)=>r.updateProduct&&r.updateProduct(...o))}," 確認 ")])])])],512),t("div",Vt,[t("div",Ct,[t("div",Et,[At,t("div",Tt,[P(" 是否刪除 "),t("strong",It,u(s.tempProduct.title),1),P(" 商品(刪除後將無法恢復)。 ")]),t("div",Lt,[Nt,t("button",{type:"button",class:"btn btn-danger",onClick:e[15]||(e[15]=(...o)=>r.deleteProduct&&r.deleteProduct(...o))}," 確認刪除 ")])])])],512)],64)}const Rt=y(U,[["render",Bt]]);export{Rt as default};
