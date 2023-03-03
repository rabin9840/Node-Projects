
$("#add_user").submit(function(event){
    alert("Data Inserted successfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array= $(this).serializeArray();  // return serialized array of the data 

    var data={}

   $.map(unindexed_array,function(n,i){
       data[n['name']]=n['value']
   })
    //console.log(unindexed_array);
    var request= {
        // pass value to ajax
        // use ajax to make a request to server and get response from server
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        'data':data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully");
    })
})

if(window.location.pathname=="/"){
    $ondelete= $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        //make a request
        var request= {
            // pass value to ajax
            // use ajax to make a request to server and get response from server
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do you want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted successfully");
                location.reload();
            })

        }
    })
}