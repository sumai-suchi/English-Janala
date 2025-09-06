const loadData=()=>
{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>showBtnData(json.data))
}

loadData()

const loadDataCard=(level_no)=>
{
    fetch(`https://openapi.programming-hero.com/api/level/${level_no}`)
    .then(res=>res.json())
    .then(json=>showWordCard(json.data))

}


const showWordCard=(words)=>{
  
    const wordContainer=document.getElementById('Card-Container')
    console.log(wordContainer)
    wordContainer.innerHTML="";

    
if(words.length===0){
      
    const NoLesson=document.createElement('div')
    NoLesson.className="col-span-full "
    NoLesson.innerHTML=`
           <div class="col-span-full text-center  space-y-2 p-8">
              <img src="./assets/alert-error.png" class="mx-auto"  alt="">
          <h1  class="text-xl font-bold text-gray-400">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </h1>
          <h2 class="text-2xl font-bold">
            নেক্সট Lesson এ যান
          </h2>
        </div>
    `
    wordContainer.appendChild(NoLesson)

}
    
  
    words.forEach(word => {
         console.log(word)

         const wordCard=document.createElement('div')
         wordCard.className="bg-white text-center space-y-2 py-8"
         wordCard.innerHTML=`
             <h1 class="text-2xl font-bold">${word ? word.word : "কোন শব্দ নেই"}</h1>
             <p class="text-xl font-semibold">meaning/Pronunciation</p>
             <p class="text-xl font-semibold font-bangla">${word.meaning  ? word.meaning :"কোন শব্দ নেই"}/${word.pronunciation?word.pronunciation:"কোন শব্দ নেই"}</p>
             <div class="flex w-5/6 mx-auto justify-between items-center">
             <button class="bg-[#1a90ff1c] p-4 rounded-sm"><i class="fa-solid fa-question"></i></button>
             <button class="bg-[#1a90ff1c] p-4 rounded-sm"><i class="fa-solid fa-volume-high"></i></button>
             
             </div>
         `

         wordContainer.appendChild(wordCard)
    });

}

const showBtnData=(lessons)=>
{
   
    const btnContainer=document.getElementById('btnDiv-container')

    btnContainer.innerHTML=" ";

    lessons.forEach(lesson => {

        console.log(lesson)

        const lessonBtn=document.createElement('button');
        lessonBtn.innerHTML=`
         <button href="" class="btn btn-outline btn-primary" onclick="loadDataCard(${lesson.level_no})"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>

        `
        btnContainer.appendChild(lessonBtn)
        
    });

}