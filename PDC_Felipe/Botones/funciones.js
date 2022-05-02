var jUtils ={
    cambiarColores: function(){
        $("#bloque p:eq(0)").css("color","#ff0000");
        $("#bloque p:eq(1)").css("color","#00ff00");
        $("#bloque p:eq(2)").css("color","#0000ff");
    },
    cambiarTextoParrafoHijo : function(){
        $("#bloque p").append("/");
    },

    cambiarColorFondo : function(){
        $("#parrafo").parent().css("background-color","#808080");
        $("#parrafo").css("background-color","#00ffff");
    },

    cambiarColor : function(){
        $("#titulo").css("color","#0000ff");
    },

    cambiarTexto : function(){
        $("#titulo").text("QUE ONDA AMEREEEE");
    },

    cambiarTamanoLetra : function(){
        $("#titulo").css("font-size", "40px");
    },

    crearLinks : function(){
        if($.trim($("#texto1").val())==""){
            alert("falta URL1");
            $("#texto1").focus();
            return;
        }
        else if($.trim($("#texto2").val())==""){
            alert("falta URL2");
            $("#texto2").focus();
            return;
        }

        /* var link1 = $("#link1");

        console.log($("link1").html)
            
        link1.html["<h5> propiedad inner HTML </h5>",
                    "<a href = \" ",$("#texto1").val(),"\"target = \"_blank\> hipervinculo1</a><br>",
                    "<a href = \" ",$("#texto2").val(),"\"target = \"_blank\> hipervinculo2</a><br>"].join();

        console.log($("link1")) */


        
        var link2 = $("#link2");

        link2.append($("<h5></h5>").text("Metodo D.O.M"));
        
        link2.append($("<a></a>").text("Hipervinculo1").attr({"href":$("#texto1").val(),"target":"_blank"}));
        
        link2.append($("<br>"));
        
        var a = $("<a></a>");
        $(a).text= ("Hipervinculo2");
        $(a).attr= ({"href":$("#texto2").val(), "target":"_blank"});
        link2.append(a);
        link2.append($("<br>"));

        /*
        link2.append($("<a></a>").text("hiperbinculo").attr({"href":$("#texto1").val(),"target":"_blanck"}));
        link2.append("<br>");
        */
        
       
        }
    };


    $(document).ready(function () {
        $(jUtils.cambiarColores());
        $(jUtils.cambiarTextoParrafoHijo());
        $(jUtils.cambiarColorFondo());
        $(jUtils.cambiarColor());
        $(jUtils.cambiarTexto());
        $(jUtils.cambiarTamanoLetra());
        $(jUtils.crearLinks());
      });