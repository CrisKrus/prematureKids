App Asistencial para niños prematuros
================================================================================

  Para poder usar se han creado usuario de prueba *usuario:contraseña*

  __cristia@doctor.com : cristiandoctor__

  __josefa.vera@paciente.com : paciente__

Arrancar la aplicación
--------------------------------------------------------------------------------

  1. Clonar el repositorio y entrar en el directorio que genera.
  2. Comprobar si tenemos instalado __node__ en su version __6.11.4__. En caso
  de no estar instalada podremos usar un gestor de versiones para node como es
  `nvm`. Con el instalado podremos hacer `nvm install 6.11.4` y una vez todo
  esté instalado `nvm use 6.11.4`.
  2. Comprobar si tenemos instalados __ionic__, si estamos en *UNIX* desde
  consola ejecutamos `ionic -v` debería darnos un numero de versión. Si no es el
  caso nos indicara como instalar el mismo y todas las dependencias que sean 
  necesarias.
  3. Comprobar si tenemos instalado __cordova__, para instalarlo de manera
  global ejecutamos `npm i -g cordova`.
  3. Instalar todas las __dependencias__ `npm i`.
  3. Una vez __ionic__ esta instalado y nosotros seguimos dentro del directorio
  del proyecto, ejecutamos `ionic serve`
  4. Nos abrirá un explorador donde podremos ver la aplicación, para mejor
  experiencia usar la vista de móvil, en firefox `Crtl + shift + m` o en
  opciones >> opciones de desarrollador >> diseño web __responsive__.

Flujo de uso de un doctor
--------------------------------------------------------------------------------

  1. Entrar en la aplicación, realizar el registro.
  2. Ir al inicio e iniciar sesión.
  3. Se mostrarán los pacientes asignados
  4. Podrá ir a la lupa y buscar un paciente, pulsar sobre el botón + e iniciar
  un chat o asignar ejercicios si se pulsa sobre el icono similar al de chats
  que se encuentra en la barra o sobre el + para añadir ejercicios.
  5. Si entra en el de los ejercicios verá marcados los que se encuentran 
  actualmente asignados a este paciente en la parte derecha con el checkbox
  del que dispone. 
  6. Si se pulsa sobre el checkbox se asignará o eliminará la asignación 
  dependiendo del estado en el que se encontrase antes.
  7. Si se pulsa en el ejercicio verá la descripción del mismo y un cuadro que
  puede completar para añadir observaciones.
  8. Si ha iniciado un chat y va a la ventana de chats verá disponible el nuevo
  chat con el usuario que ha marcado.
  9. Para cerrar la sesión puede ir a su perfil y pulsar el botón que hay al
  final de esta ventana.
  
Flujo de uso de un paciente
--------------------------------------------------------------------------------

  1. Iniciar la sesión.
  2. Se mostrarán los ejercicios que tenga asignados, si se pulsa en uno de
  ellos dentro se podrá marcar como hecho.
  3. Si vamos a la ventana de chats verá los chat iniciados con el doctor y
  podrá enviar los mensajes.
