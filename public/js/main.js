const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')
// const thumbDown = document.querySelectorAll('.fa-thumbs-down')

Array.from(deleteText).forEach((e)=>{
    e.addEventListener('click', deleteQuote)
})

Array.from(thumbText).forEach((e)=>{
    e.addEventListener('click', addLike)
})

// Array.from(thumbDown).forEach((e)=> {
//     e.addEventListener('click', removeLike)
// })

async function deleteQuote(){
    const aQuote = this.parentNode.childNodes[1].innerText
    const eQuote = this.parentNode.childNodes[3].innerText
    try{
        const res = await fetch('deleteQuote', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'arQuoteL': aQuote,
              'enQuoteL': eQuote
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const aQuote = this.parentNode.childNodes[1].innerText
    const eQuote = this.parentNode.childNodes[3].innerText
    const toLikes = Number(this.parentNode.childNodes[7].innerText)
    try{
        const res = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'arQuoteL': aQuote,
              'enQuoteL': eQuote,
              'likesL': toLikes
            })
          })
        const data = await res.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

// async function removeLike(){
//     const aQuote = this.parentNode.childNodes[1].innerText
//     const eQuote = this.parentNode.childNodes[3].innerText
//     const toLikes = Number(this.parentNode.childNodes[7].innerText)
//     try{
//         const res = await fetch('removeOneLike', {
//             method: 'put',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({
//               'arQuoteL': aQuote,
//               'enQuoteL': eQuote,
//               'likesL': toLikes
//             })
//           })
//         const data = await res.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }
