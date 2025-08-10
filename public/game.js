let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0
let p3sum = 0
let p4sum = 0
let p5sum = 0
let p6sum = 0
let p7sum = 0

function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        if (p1sum == 1) {
            p1sum = 38
        }
        if (p1sum == 4) {
            p1sum = 14
        }
        if (p1sum == 8) {
            p1sum = 30
        }
        if (p1sum == 21) {
            p1sum = 42
        }
        if (p1sum == 28) {
            p1sum = 76
        }
        if (p1sum == 32) {
            p1sum = 10
        }
        if (p1sum == 36) {
            p1sum = 6
        }
        if (p1sum == 48) {
            p1sum = 26
        }
        if (p1sum == 50) {
            p1sum = 67
        }
        if (p1sum == 62) {
            p1sum = 18
        }
        if (p1sum == 71) {
            p1sum = 92
        }
        if (p1sum == 80) {
            p1sum = 99
        }
        if (p1sum == 88) {
            p1sum = 24
        }
        if (p1sum == 95) {
            p1sum = 56
        }
        if (p1sum == 97) {
            p1sum = 78
        }

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p2sum
        }
        

        if (p2sum == 1) {
            p2sum = 38
        }
        if (p2sum == 4) {
            p2sum = 14
        }
        if (p2sum == 8) {
            p2sum = 30
        }
        if (p2sum == 21) {
            p2sum = 42
        }
        if (p2sum == 28) {
            p2sum = 76
        }
        if (p2sum == 32) {
            p2sum = 10
        }
        if (p2sum == 36) {
            p2sum = 6
        }
        if (p2sum == 48) {
            p2sum = 26
        }
        if (p2sum == 50) {
            p2sum = 67
        }
        if (p2sum == 62) {
            p2sum = 18
        }
        if (p2sum == 71) {
            p2sum = 92
        }
        if (p2sum == 80) {
            p2sum = 99
        }
        if (p2sum == 88) {
            p2sum = 24
        }
        if (p2sum == 95) {
            p2sum = 56
        }
        if (p2sum == 97) {
            p2sum = 78
        }

        sum = p2sum



    }
     if (psum == 'p3sum') {

        p3sum = p3sum + num

        if (p3sum > 100) {
            p3sum = p3sum - num
            // sum = p3sum
        }
        

        if (p3sum == 1) {
            p3sum = 38
        }
        if (p3sum == 4) {
            p3sum = 14
        }
        if (p3sum == 8) {
            p3sum = 30
        }
        if (p3sum == 21) {
            p3sum = 42
        }
        if (p3sum == 28) {
            p3sum = 76
        }
        if (p3sum == 32) {
            p3sum = 10
        }
        if (p3sum == 36) {
            p3sum = 6
        }
        if (p3sum == 48) {
            p3sum = 26
        }
        if (p3sum == 50) {
            p3sum = 67
        }
        if (p3sum == 62) {
            p3sum = 18
        }
        if (p3sum == 71) {
            p3sum = 92
        }
        if (p3sum == 80) {
            p3sum = 99
        }
        if (p3sum == 88) {
            p3sum = 24
        }
        if (p3sum == 95) {
            p3sum = 56
        }
        if (p3sum == 97) {
            p3sum = 78
        }

        sum = p3sum



    }
 if (psum == 'p4sum') {

        p4sum = p4sum + num

        if (p4sum > 100) {
            p4sum = p4sum - num
            // sum = p4sum
        }
        

        if (p4sum == 1) {
            p4sum = 38
        }
        if (p4sum == 4) {
            p4sum = 14
        }
        if (p4sum == 8) {
            p4sum = 30
        }
        if (p4sum == 21) {
            p4sum = 42
        }
        if (p4sum == 28) {
            p4sum = 76
        }
        if (p4sum == 32) {
            p4sum = 10
        }
        if (p4sum == 36) {
            p4sum = 6
        }
        if (p4sum == 48) {
            p4sum = 26
        }
        if (p4sum == 50) {
            p4sum = 67
        }
        if (p4sum == 62) {
            p4sum = 18
        }
        if (p4sum == 71) {
            p4sum = 92
        }
        if (p4sum == 80) {
            p4sum = 99
        }
        if (p4sum == 88) {
            p4sum = 24
        }
        if (p4sum == 95) {
            p4sum = 56
        }
        if (p4sum == 97) {
            p4sum = 78
        }

        sum = p4sum



    }

 if (psum == 'p5sum') {

        p5sum = p5sum + num

        if (p5sum > 100) {
            p5sum = p5sum - num
            // sum = p5sum
        }
        

        if (p5sum == 1) {
            p5sum = 38
        }
        if (p5sum == 4) {
            p5sum = 14
        }
        if (p5sum == 8) {
            p5sum = 30
        }
        if (p5sum == 21) {
            p5sum = 42
        }
        if (p5sum == 28) {
            p5sum = 76
        }
        if (p5sum == 32) {
            p5sum = 10
        }
        if (p5sum == 36) {
            p5sum = 6
        }
        if (p5sum == 48) {
            p5sum = 26
        }
        if (p5sum == 50) {
            p5sum = 67
        }
        if (p5sum == 62) {
            p5sum = 18
        }
        if (p5sum == 71) {
            p5sum = 92
        }
        if (p5sum == 80) {
            p5sum = 99
        }
        if (p5sum == 88) {
            p5sum = 24
        }
        if (p5sum == 95) {
            p5sum = 56
        }
        if (p5sum == 97) {
            p5sum = 78
        }

        sum = p5sum



    }
 if (psum == 'p6sum') {

        p6sum = p6sum + num

        if (p6sum > 100) {
            p6sum = p6sum - num
            // sum = p6sum
        }
        

        if (p6sum == 1) {
            p6sum = 38
        }
        if (p6sum == 4) {
            p6sum = 14
        }
        if (p6sum == 8) {
            p6sum = 30
        }
        if (p6sum == 21) {
            p6sum = 42
        }
        if (p6sum == 28) {
            p6sum = 76
        }
        if (p6sum == 32) {
            p6sum = 10
        }
        if (p6sum == 36) {
            p6sum = 6
        }
        if (p6sum == 48) {
            p6sum = 26
        }
        if (p6sum == 50) {
            p6sum = 67
        }
        if (p6sum == 62) {
            p6sum = 18
        }
        if (p6sum == 71) {
            p6sum = 92
        }
        if (p6sum == 80) {
            p6sum = 99
        }
        if (p6sum == 88) {
            p6sum = 24
        }
        if (p6sum == 95) {
            p6sum = 56
        }
        if (p6sum == 97) {
            p6sum = 78
        }

        sum = p6sum



    }
 if (psum == 'p7sum') {

        p7sum = p7sum + num

        if (p7sum > 100) {
            p7sum = p7sum - num
            // sum = p1sum
        }
        

        if (p7sum == 1) {
            p7sum = 38
        }
        if (p7sum == 4) {
            p7sum = 14
        }
        if (p7sum == 8) {
            p7sum = 30
        }
        if (p7sum == 21) {
            p7sum = 42
        }
        if (p7sum == 28) {
            p7sum = 76
        }
        if (p7sum == 32) {
            p7sum = 10
        }
        if (p7sum == 36) {
            p7sum = 6
        }
        if (p7sum == 48) {
            p7sum = 26
        }
        if (p7sum == 50) {
            p7sum = 67
        }
        if (p7sum == 62) {
            p7sum = 18
        }
        if (p7sum == 71) {
            p7sum = 92
        }
        if (p7sum == 80) {
            p7sum = 99
        }
        if (p7sum == 88) {
            p7sum = 24
        }
        if (p7sum == 95) {
            p7sum = 56
        }
        if (p7sum == 97) {
            p7sum = 78
        }

        sum = p7sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Hisham Won !!")
        }
        else if (player == 'p2') {
            alert("Paul Won !!")
        }
        else if (player == 'p3') {
            alert("Shamini Won !!");
        }
        else if (player == 'p4') {
            alert("Sanjay Won !!");
        }
        else if (player == 'p5') {
            alert("Keerthi Won !!");
        }
        else if (player == 'p6') {
            alert("Nibraz Won !!");
        }
        else if (player == 'p7') {
            alert("Ameena Won !!");
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num


     if (tog % 7 == 1) {
        document.getElementById('tog').innerText = "Dr.Palani's Turn: ";
        play('p1', 'p1sum', 0, num);
    }
    else if (tog % 7 == 2) {
        document.getElementById('tog').innerText = "Dr.Shamini's Turn : ";
        play('p2', 'p2sum', 55, num);
    }
    else if (tog % 7 == 3) {
        document.getElementById('tog').innerText = "Dr.Sanjay's Turn : ";
        play('p3', 'p3sum', 110, num);
    }
    else if (tog % 7 == 4) {
        document.getElementById('tog').innerText = "Dr.Keerthi's Turn : ";
        play('p4', 'p4sum', 165, num);
    }
    else if (tog % 7 == 5) {
        document.getElementById('tog').innerText = "Dr.Nibraz's Turn : ";
        play('p5', 'p5sum', 220, num);
    }
    else if (tog % 7 == 6) {
        document.getElementById('tog').innerText = "Dr.Ameena's Turn : ";
        play('p6', 'p6sum', 275, num);
    }
    else if (tog % 7 == 0) {
        document.getElementById('tog').innerText = "Dr.Hisham's Turn: ";
        play('p7', 'p7sum', 330, num);
    }
    tog = tog + 1




})