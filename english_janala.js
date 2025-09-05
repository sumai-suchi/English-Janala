const loadData=()=>
{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=>res.json())
    .then(json=>showBtnData(json.data))
}

loadData()


const showBtnData=(lessons)=>
{
   
    const btnContainer=document.getElementById('btnDiv-container')

    btnContainer.innerHTML=" ";

    lessons.forEach(lesson => {

        console.log(lesson)

        const lessonBtn=document.createElement('button');
        lessonBtn.innerHTML=`
         <button href="" class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson - ${lesson.level_no}</button>

        `
        btnContainer.appendChild(lessonBtn)
        
    });

}