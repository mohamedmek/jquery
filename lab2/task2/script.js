      $("form").on("submit", (e) => {
        e.preventDefault();

        if ($(".note_input").val().trim()) {
          const note = $(".note_input").val();
          const addedNote = `<li class='bg-white mt-3 d-flex justify-between'"><p>${note}</p> <button class='btn btn-danger m-2 delete-btn'>delete</button></li>`;
          $(".note_input").val("");
          $(".notes").append(addedNote);
        } 
        
      });

      $(".notes").on("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {$(e.target).parent("li").remove();toggleNonotes();
        }
      });

