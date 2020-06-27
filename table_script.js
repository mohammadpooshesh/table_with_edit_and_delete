function edit_row(no) {
    $("#edit_button" + no).css("display", "none")
    $("#save_button" + no).css("display", "block")

    var name = $("#name_row" + no);
    var quantity = $("#quantity_row" + no);

    var name_data = name.html("<input type='text' id='name_text" + no + "' value='" + name[0].textContent + "'>");
    var quantity_data = quantity.html("<input type='text' id='quantity_text" + no + "' value='" + quantity[0].textContent + "'>");
}

function save_row(no) {
    var name_val = $("#name_text" + no).val();
    var quantity_val = $("#quantity_text" + no).val();

    $("#name_row" + no).html(name_val);
    $("#quantity_row" + no).html(quantity_val);
    $("#edit_button" + no).css("display", "block")
    $("#save_button" + no).css("display", "none")
    $("#message").text("Data editing was successful")
}

function delete_row(no) {
    $("#row" + no + "").html("");
    $("#message").text("Data deletion was successful")
}