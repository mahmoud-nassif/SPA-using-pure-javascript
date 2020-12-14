import {debounce} from './debounce.js';
import {renderSingleVidReq} from './renderSingleVidReq.js';
import dataService from './dataService.js'
import {checkValidity} from './checkValidity.js'



const SUPER_USER_ID= '20201121'
export const state={
  sortBy:'newFirst',
  searchTerm:'',
  filterBy:'all',
  userId:'',
  isSuperUser:false
}







document.addEventListener('DOMContentLoaded',function(){

    const formVidReqElm=document.getElementById('formvideoRequest')
    const sortByElms=document.querySelectorAll('[id*=sort_by_]')
    const filterByElms=document.querySelectorAll('[id*=filter_by_]')
    const searchBoxElm=document.getElementById('search_box')
    const formLoginElm=document.querySelector('.form-login')
    const appContentElm=document.querySelector('.app-content')


    if(window.location.search){
      state.userId= new URLSearchParams(window.location.search).get('id')
      if(state.userId===SUPER_USER_ID){
        state.isSuperUser=true
        document.querySelector('.normal-user-content').classList.add('d-none')
      }
      formLoginElm.classList.add('d-none')
      appContentElm.classList.remove('d-none')
    }


    dataService.loadAllVidReqs()

    sortByElms.forEach((elm)=>{
      elm.addEventListener('click',function(e){
        e.preventDefault()
        state.sortBy=this.querySelector('input').value
         dataService.loadAllVidReqs(state.sortBy,state.searchTerm,state.filterBy)
        this.classList.add('active')
        
        state.sortBy==='topVotedFirst'?
        document.getElementById('sort_by_new').classList.remove('active'):
        document.getElementById('sort_by_top').classList.remove('active')
      })
    })

    filterByElms.forEach((elm)=>{
      elm.addEventListener('click',function(e){
        e.preventDefault()
        // console.log("target",e.target,this.querySelector('input').value)
        state.filterBy=e.target.getAttribute('id').split('_')[2]
        filterByElms.forEach(option=>option.classList.remove('active'))
        e.target.classList.add('active')
         dataService.loadAllVidReqs(state.sortBy,state.searchTerm,state.filterBy)
        
      })
    })

    searchBoxElm.addEventListener('input',debounce((e)=>{
      console.log(e.target.value)
      state.searchTerm=e.target.value
       dataService.loadAllVidReqs(state.sortBy,state.searchTerm,state.filterBy)
    },1000))
    

    formVidReqElm.addEventListener('submit',function(e){
      e.preventDefault()
      const formData= new FormData(formVidReqElm)
      formData.append('author_id',state.userId)
      const isValid=checkValidity(formData)
      if(!isValid){
        return
      }
      dataService.addVideoReq(formData).then((data)=>renderSingleVidReq(data,state,true))
    })
    

  })