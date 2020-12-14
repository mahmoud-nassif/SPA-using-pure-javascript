export function checkValidity(formData){      

    const topic=formData.get('topic_title')
    const topicDetails=formData.get('topic_details')
  
    const emailRegex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  
    if(!topic || topic.length >30){
      document.querySelector('[name=topic_title]').classList.add('is-invalid')
    }
    if(!topicDetails){
      document.querySelector('[name=topic_details]').classList.add('is-invalid')
    }
    const allInvalidElms=document.getElementById('formvideoRequest').querySelectorAll('.is-invalid')
    if(allInvalidElms.length){
      allInvalidElms.forEach(elm=>{
        elm.addEventListener('input',function(e){
          this.classList.remove('is-invalid')
        })
      })
      return false
    }
    return true
  }