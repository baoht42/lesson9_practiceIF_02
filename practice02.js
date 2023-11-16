// bai 5
function bai5() {
    let sideA = +prompt("Enter side A of triangle: ");
    let sideB = +prompt("Enter side C of triangle: ");

    let areaTri = 1 / 2 * (sideA * sideB);
    alert("Area of Triangle is: " + areaTri);
}

//bai 6
function bai6(){
    let a = +prompt("nhap vao so a");
    let b = +prompt("nhap vao so b");
    let c = -b / a;
    if (a==0){
        alert("Phuong trình vo nghiem");
    }else{
        alert(`Nghiem cua phuong trinh la x = ${c}`);
    }
}

//bai7
function bai7(){
    let a = +prompt("nhap vao so a");
    let b = +prompt("nhap vao so b");
    let c  = +prompt("nhap vao so c");
    let delta= b*b - 4*a*c;
    x1= (-b + Math.sqrt(delta))/2*a;
    x2= (-b - Math.sqrt(delta))/2*a;
    x = -b / (2*a)
    if (delta>0){
        alert("Phương trình có 2 nghiệm x1= "+ x1 + "và x2 = " +x2);
    }else if (delta ===0){
        alert("Phương trình có nghiệm kép x = " + x);
    }else {
        alert("Phương trình vô nghiệm")
    }

    if (a+b+c ==0){
        let x4 = c/a;
        alert("Phương trình có nghiệm x1 = 1 và x2= "+ x4);
    }
    if (a-b+c ==0){
        let x5 = (-1*c) / a;
        alert("Phuong trình có nghiem x1 = -1 và x2 = "+ x5);
    }
}

//bai 8
function bai8(){
    let inputNum = +prompt("Enter random Number: ");
    if (inputNum>=0){
        if (inputNum<120){
            alert("Number can be age of Human")
        }else {
            alert("Number can not be age of human")
        }
    }else {
        alert("Number can not be age of human")
}
}

//bai 9
function bai9(){
    let a = +prompt("Enter number A: ");
    let b = +prompt("Enter number B: ");
    let c = +prompt("Enter number C: ");
    if (a>0 && b>0 && c>0){
        if (a + b > c &&
            b + c > a &&
            a + c > b ){
            alert("Day la 3 canh cua tam giac");
        }else {
            alert("Day ko phai 3 canh tam giac");
        }
    }else {
        alert("Canh tam giac phai lon hon 0");
    }
}
