document.addEventListener("DOMContentLoaded", function() {
    var options = document.querySelectorAll(".option");
  
    options.forEach(function(option) {
      option.addEventListener("click", function() {
        options.forEach(function(option) {
          option.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });
  

  document.getElementById('btn2').addEventListener('click', function() {
    var nombreServicio = document.getElementById('nombreServicio2').value;
    console.log('shi');
  
    if (nombreServicio === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese el nombre',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!isNaN(nombreServicio)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre no puede ser un número',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Edición exitosa',
        showConfirmButton: true,
      });
    
      $('#editarServicioModal').modal('hide');
    }
  });
  
  document.getElementById('btn1').addEventListener('click', function() {
    var nombreServicio = document.getElementById('nombreServicio1').value;
    console.log('shi');
  
    if (nombreServicio === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese el nombre',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!isNaN(nombreServicio)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre no puede ser un número',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Creacion exitosa',
        showConfirmButton: true,
      });
      $('#editarServicioModal').modal('hide');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.querySelectorAll('#toggleButton');
    toggleButtons.forEach(function(toggleButton) {
      toggleButton.addEventListener('click', function() {
        if (toggleButton.innerText === 'Activo') {
          toggleButton.innerText = 'Inactivo';
          toggleButton.classList.remove('btn-danger');
          toggleButton.classList.add('btn-secondary');
        } else {
          toggleButton.innerText = 'Activo';
          toggleButton.classList.remove('btn-secondary');
          toggleButton.classList.add('btn-danger');
        }
      });
    });
  });
  