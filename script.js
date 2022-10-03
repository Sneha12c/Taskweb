alert("heyeveryone ")
let contestposition = 0;
const contests = document.getElementsByClassName('smboxes');
const totalcontest = contests.length;
document.
getElementById('contest__actions--prev').
addEventListener("click", function(){movetoPrevcontest();
});
document.
getElementById('contest__actions--next').
addEventListener("click", function(){movetoNextcontest();
});

function updatecontest(){
    for(let contest of contests){
       contest.classList.remove('smboxes--visible');
       contest.classList.add('smboxes--hidden');
    }
    contests[contestposition].classList.add('smboxes--visible')
}
function movetoNextcontest(){
    if(contestposition == totalcontest-1 ){
        contestposition =0;
    } else {
        contestposition++;
    }
    updatecontest();
}
function movetoPrevcontest(){
    if(contestposition == 0){
        contestposition = totalcontest -1;
    } else {
        contestposition--;
    }
    updatecontest();
}
