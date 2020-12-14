export function applyVoteStyle(video_id,votes,isDisabled,state,vote_type){

    const votesUpsElm=document.getElementById(`votes_ups_${video_id}`)
    const votesDownsElm=document.getElementById(`votes_downs_${video_id}`)
  
    if(isDisabled){
      votesUpsElm.style.opacity=.5;
      votesUpsElm.style.cursor='not-allowed'
      votesDownsElm.style.opacity=.5;
      votesDownsElm.style.cursor='not-allowed'
      return;
    }
    if(!vote_type){
      if(votes['ups'].includes(state.userId)){
        vote_type="ups"
      }else if(votes['downs'].includes(state.userId)){
        vote_type="downs"
      }else{
        return
      }
    }
  
    const voteDirElm= vote_type==="ups"? votesUpsElm : votesDownsElm
    const otherDirElm= vote_type==="ups"? votesDownsElm : votesUpsElm
  
    if(votes[vote_type].includes(state.userId)){
      voteDirElm.style.opacity="1"
      otherDirElm.style.opacity=".5";
    }else{
      otherDirElm.style.opacity='1'
    }
  }