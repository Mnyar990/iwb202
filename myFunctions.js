{
    var Name = document.getElementById('i_name');
    var id = document.getElementById('i_id');
    var phone_number = document.getElementById('i_phone_number');

    var email = document.getElementById('i_email');
    var bday = document.getElementById('i_b_day');
    var Result = document.getElementById('result');

    var Duration = document.getElementById('duration');
    var Typeq = document.getElementById('type_Q');

    var Interest = document.getElementById('interest');
    var x = 0;
    var taxt = document.getElementById('textBox');
   


    function information() {
        ///التحقق من الادخال  
        if (Name.value == "") {
            document.getElementById("i_name").innerHTML = " يرجى ملئ هذا الحقل ";
            Name.focus();
            return "enter your name ";
        }
        else
            if (id.value == "") {
                document.getElementById("i_id").innerHtml = " يرجى ملئ هذا الحقل    ";
                id.focus();
                return false;
            }
            else
                if (phone_number.value == "") {
                    document.getElementById("i_phone_number").innerHtml = " يرجى ملئ هذا الحقل";
                    phone_number.focus();
                    return false;
                }
                else
                    if (email.value == "") {
                        document.getElementById("i_email").innerHtml = "يرجى ملئ هذا الحقل ";
                        email.focus();
                        return false;
                    }

                    else
                        if (bday.value == "") {
                            document.getElementById("i_b_day").innerHtml = " enter bday";
                            bday.focus();
                            return false;
                        }
                        else
                            if (Result.value == "" || Result.value > 10000000 || Result.value < 1000000) {
                                document.getElementById("result").innerHtml = " enter result";
                                Result.focus();
                                return false;
                            }
                            else
                                if (Duration.value == "") {
                                    document.getElementById("duration").innerHtml = " enter duration";
                                    Duration.focus();
                                    return false;
                                }
                                else
                                    if (Typeq.value == "") {
                                        document.getElementById("type_Q").innerHtml = " enter typq";
                                        Typeq.focus();
                                        return false;
                                    }
       if (Interest.value == "") {
            document.getElementById("interest").innerHtml = " enter interest";
            Interest.focus();
             return false;
        }

    else

            if (taxt.value == "" ) {
                      document.getElementById("textBox").innerHtml = " enter textb";
                taxt.focus();
                return false;
            }



        /////////////////////////////////////////////////////////////////////////////

        document.write("<center><table style=' border-style: solid;font-size:medium;border-radius:15px;background-color:rgba(134, 134, 163, 0.411);opacity: 95%;'>");
        document.write("<tr><td>" + Name.value + "</td><td><b> <== الاسم الكامل</b></td></tr><br>");
        document.write("<tr><td>" + id.value + "</td><td><b> <== الرقم الوطني</b></td></tr><br>");
        document.write("<tr><td>" + email.value + "</td><td><b> <== الايميل</b></td></tr><br>");
        document.write("<tr><td>" + bday.value + "</td><td><b> <== تاريخ الميلاد</b></td></tr><br>");
        document.write("<tr><td>" + phone_number.value + "</td><td><b> <== رقم الهاتف</b></td></tr><br>");

        document.write("<tr><td>" + Result.value + "</td><td><b> <== قيمةالقرض</b></td></tr>");


        document.write("<tr><td>" + Duration.value + "</td><td><b> <== عدد السنوات</b></td></tr>");

        document.write(" <tr><td>" + Typeq.value +"</td><td><b> <== نوع القرض </b></td></tr>");
        document.write("<tr><td> "+ Interest.value +"</td><td><b> <== نوع الفائدة</b></td></tr>");


        // القروض مع فائدة شهرية 
        if (Typeq.value == "commercial" && Interest.value == "monthly") {
            x = (((Result.value) * 0.18) / 12) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
        }
        else
            if (Typeq.value == "risidential" && Interest.value == "monthly") {
                x = (((Result.value) * 0.11) / 12) * Duration.value;
                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
            }

            else
                if (Typeq.value == "educational" && Interest.value == "monthly") {
                    x = (((Result.value) * 0.10) / 12) * Duration.value;
                    document.write("<tr><td>"+x+" </td><td><b> <==  قيمة الفائدة الشهرية</b></td></tr>");
                }

                else
                    if ((Typeq.value == "agricultural" || Typeq.value == "warkshops") && Interest.value == "monthly") {
                        x = (((Result.value) * 0.14) / 12) * Duration.value;
                        document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
                    }

                    else
                        if (Typeq.value == "transport" && Interest.value == "monthly") {
                            x = (((Result.value) * 0.12) / 12) * Duration.value;
                            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
                        }
                        else
                            if (Typeq.value == "saving" && Interest.value == "monthly") {
                                x = (((Result.value) * 0.5) / 12) * Duration.value;
                                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
                            }
        if (Typeq.value == "running" && Interest.value == "monthly") {
            x = (((Result.value) * 0) / 12) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الشهرية</b></td></tr>");
        }

        /////////////////////////////////////////////////////////////////////////////






        // القروض مع فائدة ربعية 
        if (Typeq.value == "commercial" && Interest.value == "quarterly") {
            x = (((Result.value) * 0.18) / 4) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
        }
        else
            if (Typeq.value == "risidential" && Interest.value == "quarterly") {
                x = (((Result.value) * 0.11) / 4) * Duration.value;
                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
            }

            else
                if (Typeq.value == "educational" && Interest.value == "quarterly") {
                    x = (((Result.value) * 0.10) / 4) * Duration.value;
                    document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
                }

                else
                    if ((Typeq.value == "agricultural" || Typeq.value == "warkshops") && Interest.value == "quarterly") {
                        x = (((Result.value) * 0.14) / 4) * Duration.value;
                        document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
                    }

                    else
                        if (Typeq.value == "transport" && Interest.value == "quarterly") {
                            x = (((Result.value) * 0.12) / 4) * Duration.value;
                            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
                        }
                        else
                            if (Typeq.value == "saving" && Interest.value == "quarterly") {
                                x = (((Result.value) * 0.5) / 4) * Duration.value;
                                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
                            }
        if (Typeq.value == "running" && Interest.value == "quarterly") {
            x = (((Result.value) * 0) / 4) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة الربعية</b></td></tr>");
        }

        /////////////////////////////////////////////////////////////////////////////




        // القروض مع فائدة سنوية
        if (Typeq.value == "commercial" && Interest.value == "yearly") {
            x = ((Result.value) * 0.18) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
        }
        else
            if (Typeq.value == "risidential" && Interest.value == "yearly") {
                x = ((Result.value) * 0.11) * Duration.value;
                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
            }

            else
                if (Typeq.value == "educational" && Interest.value == "yearly") {
                    x = ((Result.value) * 0.10) * Duration.value;
                    document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
                }

                else
                    if ((Typeq.value == "agricultural" || Typeq.value == "warkshops") && Interest.value == "yearly") {
                        x = ((Result.value) * 0.14) * Duration.value;
                        document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
                    }

                    else
                        if (Typeq.value == "transport" && Interest.value == "yearly") {
                            x = ((Result.value) * 0.12) * Duration.value;
                            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
                        }
                        else
                            if (Typeq.value == "saving" && Interest.value == "yearly") {
                                x = ((Result.value) * 0.5) * Duration.value;
                                document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
                            }
        if (Typeq.value == "running" && Interest.value == "yearly") {
            x = ((Result.value) * 0) * Duration.value;
            document.write("<tr><td>"+x+" </td><td><b> <== قيمة الفائدة السنوية </b></td></tr>");
        }
        document.write("</table></center>");
        ///////////////////////////////////////////////////////////////////////////// captchaتوليد زر 
    }
    let captchaText = document.querySelector('#captcha');
    var ctx = captchaText.getContext("2d");
    ctx.font = "35px Roboto";
    ctx.fillStyle = "red";

    let userText = document.querySelector('#textBox');
    let submitButton = document.querySelector('#submitButton');
    let output = document.querySelector('#output');
    let refreshButton = document.querySelector('#refreshButton');


    let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let emptyArr = [];

    for (let i = 1; i <= 7; i++) {
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    var c = emptyArr.join('');
    ctx.fillText(emptyArr.join(''), captchaText.width / 4, captchaText.height / 2);


    userText.addEventListener('keyup', function (e) {
        if (e.keyCode === 13) {
            if (userText.value === c) {
                output.classList.add("correctCaptcha");
                output.innerHTML = "Correct!";
            } else {
                output.classList.add("incorrectCaptcha");
                output.innerHTML = "Incorrect, please try again";
            }
        }
    });
    submitButton.addEventListener('click', function () {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorrect, please try again";
        }
    });
    refreshButton.addEventListener('click', function () {
        userText.value = "";
        let refreshArr = [];
        for (let j = 1; j <= 7; j++) {
            refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
        }
        ctx.clearRect(0, 0, captchaText.width, captchaText.height);
        c = refreshArr.join('');
        ctx.fillText(refreshArr.join(''), captchaText.width / 4, captchaText.height / 2);
        output.innerHTML = "";

    });
    


}