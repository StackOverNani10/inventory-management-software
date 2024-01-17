# Rakefile

require 'rake'

# Tarea para limpiar archivos temporales
task :clean do
  puts "Limpiando archivos temporales..."
  sh "rm -rf tmp/"
end

# Tarea para desplegar la aplicación
task :deploy => [:clean] do
  puts "Desplegando la aplicación en GitHub Pages..."
  
  # Verifica la rama actual
  sh "git branch"
  
  # Cambia a la rama que deseas desplegar (asegúrate de ajustar el nombre de la rama)
  sh "git checkout master"
  
  # Configura el nombre de usuario y correo electrónico de git (ajusta según tu configuración)
  sh "git config user.name 'TuNombre'"
  sh "git config user.email 'tu@email.com'"
  
  # Asegúrate de tener cambios para hacer push (ajusta según tu flujo de trabajo)
  sh "git add -A"
  sh "git commit -m 'Actualizando para despliegue'"
  
  # Realiza el push
  sh "git push origin master"
end
