// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun)
var matchesarrr=JSON.parse( localStorage.getItem("schedule")) || []

function myfun(){
    event.preventDefault()
    var matchesobj={
        matchnumber:masaiForm.matchNum.value,
        teamAnamee:masaiForm.teamA.value,
        teamBnamee:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }
    matchesarrr.push(matchesobj);
    localStorage.setItem("schedule",JSON.stringify(matchesarrr));
    window.location.href="matches.html";
}