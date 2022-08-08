//This function is called everytime the users click on a box.
function myfunc(){
    //Setting the Domain to all boxes or input fields
    //initialize the variable.
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    //Checking if player 1(X) won. If player 1 won disable all the other fields.
    //Checking if player won by three in a row in the first row. (Win condition 1)
    if ((b1 == 'x' || b1 == 'X') && (b2 = 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')){
        
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player 1 Won!');

    }
    //Checking if player win by three in a row in the first column. (Win condition 2)
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 =='X') && (b7 == 'x' || b7 == 'X')){

        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b2').diabled = true;
        document.getElementById('b3').diabled = true;
        document.getElementById('b5').diabled = true;
        document.getElementById('b6').diabled = true;
        document.getElementById('b8').diabled = true;
        document.getElementById('b9').diabled = true;
        window.alert('Player 1 Won!');
    }
    //Checking if Player 1 won by three in a row in the third row. (Win condition 3)
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
        
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4'),disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert('Player 1 Won!');
    }
    //Checking if PLayer 1 won by three in a row diagonally from the top left to bottom right. ( Win condition 4)
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 =='x' || b9 =='X')){
        
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player 1 Won!');
    }
    //Checking if player 1 won by three in a row diagonally from the top right to bottom left. (Win condition 5)
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player 1 Won!');
    }
    //Checking if player 1 won by three in a row in the second column. (Win condition 6)
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        
        document.getElementById('print').innerHTML == "Player 1 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert("Player 1 Won!");
    }
    //Checking if Player 1 won by three in a row in the second row. (Win condition 7)
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 =='X')){
    
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disbaled = true;
        document.getElementById('b9').disabled = true;
        window.alert("Player 1 Won!");
    }
    //maybe have to delete. V
    //Checking if Player 1 Won by three in a row in the third column. (Win condition 8)
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        
        document.getElementById('print').innerHTML = "Player 1 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player 1 Won!');
    }

    //Checking if Player 2 Won after checking whether or not player 1 won.
    //Checking if Player 2 Won three in a row in the first row. (Win Condition 1)
    else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')){
        
        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert("Player 2 Won!");
    }
    //Checking if Player 2 Won by three in a row in the first column. (Win condition 2)
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')){

        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').dsiabled = true;
        document.getElementById('b9').disabled = true;
        window.alert("Player 2 Won!")
    }
    //checking if Player 2 won by three in a row in the third row. (Win condition 3)
    else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')){
        
        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        window.alert("Player 2 Won!");
    } 
    //Check if Player 2 Won by three in a row in the third column. (Win Condition 4)
    else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')){
        
        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disbaled = true;
        document.getElementById('b5').dsiabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert('Player 2 Won!');
    }
    //Check if Player 2 Won by three in a row diagonally from top left to bottom right. (Win condition 5)
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'O' || b9 == 'O')){

        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        window.alert("Player 2 Won!");
    }
    //Check if Player 2 Won by three in a row diagonally from top right to bottom left. (Win condition 6)
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 =='O') && (b7 == 'o' || b7 == 'O')){

        document.getElementById('print').innerHTML = "Player 2 Won!";
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert("Player 2 Won!");
    }
    //Check if Player 2 Won by three in a row in the second column. (Win Condition 7)
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')){
        
        document.getElementById('print').innerHTML = 'Player O Won!';
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player O Won!');
    }

    //Check if Player 2 Won by three in a row by second row. (Win Condition 8)
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 =='o' || b6 =='O')){
        
        document.getElementById('print').innerHTML = 'Player O Won!';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        window.alert('Player O Won!');
    }

    //Checking if the match ended in a tie.
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')){
        
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Tie Game');
    }

    else {
        
        //print the results
        if (flag == 1){
            document.getElementById('print').innerHTML = 'Player X Turn';
        }
        else {
            document.getElementById('print').innerHTML = 'Player O turn';
        }
    }
}

//Create the fucntion to Reset the game.
function myfunc_2(){
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
    document.getElementById('b7').value = '';
    document.getElementById('b8').value = '';
    document.getElementById('b9').value = '';
}

//Functions to check which players turn it is.
flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b1').value = '0';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function myfunc_4() {
    if (flag == 1) {
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b2').value = 'O';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b3').value = 'O';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b4').value = 'O';
        document.getElementById('b4').disabled = true;
        flag = 1;
        }
}

function myfunc_7() {
    if (flag == 1) {
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b5').value = 'O';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        document.getElementById('b6').value = 'X';
        document.getAnimations('b6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b6').value = 'O';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b7').value = 'O';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b8').value = 'O';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b9').value = 'O';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}