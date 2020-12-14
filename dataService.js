import {renderSingleVidReq} from './renderSingleVidReq.js'
import {state} from './client.js'
import api from './api.js'
import {applyVoteStyle} from './applyVoteStyle.js'

export default {
    addVideoReq:(formData)=>{
      return api.videoReq.post(formData)
    },
    deleteVideoReq:(id)=>{
       return api.videoReq.delete(id)
    },
    updateVideoStatus:(id,status,resVideo='')=>{
      api.videoReq.update(id,status,resVideo).then(_=>{window.location.reload() })
    },
    loadAllVidReqs:(sortBy="newFirst",searchTerm="",filterBy="all",localState=state)=>{
        const listOfvidsElm=document.getElementById('listOfRequests')
        api.videoReq.get(sortBy,searchTerm,filterBy)
        .then((data)=>{
          listOfvidsElm.innerHTML='';
          data.forEach((vidInfo)=>{renderSingleVidReq(vidInfo,localState)})
        })
      },
    updateVotes:(id,vote_type,user_id,videoStatus,state)=>{
      api.votes.update(id,vote_type,user_id)
      .then(data=>{
        const scoreVoteElm=document.getElementById(`score_vote_${id}`)
        scoreVoteElm.innerText= data.ups.length - data.downs.length
        applyVoteStyle(id,data,videoStatus==='done',state,vote_type)
      })
    }
      
}
