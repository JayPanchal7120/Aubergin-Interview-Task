console.log("you are in index.js ")

var lan;

function getQuote()
{
    
    url="http://localhost:3000/quoteapi/";
    fetch(url).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
        document.getElementById("quote").innerHTML=`"${data.quote_en}"`;
        document.getElementById("author").innerHTML=`by ${data.author}`;
    })
    lan="en";
}

function toggle()
{
    if(lan ==="en")
    {
        url="http://localhost:3000/quoteapi/";
        fetch(url).then(res=>{
            return res.json();
            }).then(data=>{
                console.log(data);
                document.getElementById("quote").innerHTML=`"${data.quote_sr}"`;
                document.getElementById("author").innerHTML=`by ${data.author}`;
            })
        lan="sr";
    }
    else{
        url="http://localhost:3000/quoteapi/";
        fetch(url).then(res=>{
            return res.json();
            }).then(data=>{
                console.log(data);
                document.getElementById("quote").innerHTML=`"${data.quote_en}"`;
                document.getElementById("author").innerHTML=`by ${data.author}`;
            })
        lan="en";
    }
}

function downloadQuote()
{    
    // console.log("In downloadQuote fun");
	html2canvas(document.getElementById("QuoteContainer")).then(function (canvas) {	var anchorTag = document.createElement("a");
	anchorTag.download = "myquote.jpg";
	anchorTag.href = canvas.toDataURL();
	anchorTag.target = '_blank';
	anchorTag.click();
	});
 }

